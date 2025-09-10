
// This file MUST be pure JavaScript. No imports, no types.

// Custom Error classes for specific handling in the UI
class ApiKeyMissingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ApiKeyMissingError';
  }
}

class UnsupportedEnvironmentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnsupportedEnvironmentError';
  }
}

// These are now implicitly available on the window scope for AIAssistant.tsx
// No export needed as we are not using modules here.

let ai: any = null;

const initializeGenAI = () => {
    // Check if running in a browser from a local file, which is not supported
    if (typeof window !== 'undefined' && window.location.protocol === 'file:') {
        throw new UnsupportedEnvironmentError('AI features are not supported when running from local files (file:/// protocol).');
    }
    
    // Polyfill check for safety
    // FIX: Cast window to any to avoid complex type error for `process`.
    if (typeof (window as any).process === 'undefined' || typeof (window as any).process.env === 'undefined') {
        (window as any).process = { env: {} };
    }
    
    const apiKey = (window as any).process.env.API_KEY;

    if (!apiKey) {
        console.error("API_KEY environment variable not set.");
        throw new ApiKeyMissingError('API_KEY is not configured in the environment.');
    }
    if (!ai) {
        if (!window.GoogleGenAI) {
            throw new Error("GoogleGenAI is not available on the window object. Check the index.html script tags.");
        }
        ai = new window.GoogleGenAI({ apiKey });
    }
    return ai;
}

const getAIResponse = async (prompt: string) => {
    const genAI = initializeGenAI();
    
    const model = 'gemini-2.5-flash';
    const systemInstruction = "You are Master JS, a helpful and friendly JavaScript expert. Your goal is to help users learn and master JavaScript. Keep your answers concise, clear, and focused on JavaScript. Use markdown for code blocks and formatting.";
    
    try {
        const response = await genAI.models.generateContent({
            model,
            contents: prompt,
            config: {
                systemInstruction,
                temperature: 0.7,
                topP: 0.95,
                topK: 64,
            },
        });
        return response.text;
    } catch (error) {
        console.error('Gemini API Error:', error);
        throw new Error('Failed to get a response from the AI assistant.');
    }
};

const getAIExplanation = async (problem: { title: string, description: string }, solutionCode: string) => {
    const genAI = initializeGenAI();

    const model = 'gemini-2.5-flash';
    const prompt = `
    Please provide a clear, concise explanation for the following JavaScript problem and its solution.
    The explanation should be structured for a learner and formatted in Markdown.
    Follow this structure exactly:
    
    ### 💡 Problem Breakdown
    (A brief, one-paragraph explanation of what the problem is asking for.)
    
    ### ⚙️ Solution Walkthrough
    (A step-by-step explanation of the provided solution code. Explain what each part of the code does.)
    
    ### 📚 Key Concepts
    (A bulleted list of 2-3 key JavaScript concepts that are demonstrated in the solution, with a brief explanation for each.)
    
    ---
    
    **Problem Title:** ${problem.title}
    
    **Problem Description:** ${problem.description}
    
    **Solution Code:**
    \`\`\`javascript
    ${solutionCode}
    \`\`\`
    `;

    try {
        const response = await genAI.models.generateContent({
            model,
            contents: prompt,
            config: {
                temperature: 0.5,
            }
        });
        return response.text;
    } catch (error) {
        console.error('Gemini API Explanation Error:', error);
        throw new Error('Failed to generate AI explanation.');
    }
};