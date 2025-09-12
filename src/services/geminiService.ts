import { GoogleGenAI, Chat } from "@google/genai";
import type { Problem } from "../types";

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

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const initializeGenAI = (): GoogleGenAI => {
    if (typeof window !== 'undefined' && window.location.protocol === 'file:') {
        throw new UnsupportedEnvironmentError('AI features are not supported when running from local files (file:/// protocol).');
    }
    
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        console.error("VITE_GEMINI_API_KEY environment variable not set.");
        throw new ApiKeyMissingError('VITE_GEMINI_API_KEY is not configured. Please add it to your .env file.');
    }
    if (!ai) {
        ai = new GoogleGenAI({ apiKey });
    }
    return ai;
};

const getChat = (): Chat => {
    if (!chat) {
        const genAI = initializeGenAI();
        chat = genAI.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: "You are Master JS, a helpful and friendly JavaScript expert and mentor. Your goal is to help users learn and master JavaScript. Keep your answers concise, clear, and focused on JavaScript. Use markdown for code blocks and formatting.",
                temperature: 0.7,
                topP: 0.95,
                topK: 64,
            },
        });
    }
    return chat;
};

export const getAIResponseStream = async (prompt: string) => {
    const chatInstance = getChat();
    try {
        const response = await chatInstance.sendMessageStream({ message: prompt });
        return response;
    } catch (error) {
        console.error('Gemini API Error:', error);
        // Reset chat on error
        chat = null;
        throw new Error('Failed to get a response from the AI assistant.');
    }
};


export const getAIExplanation = async (problem: Problem, solutionCode: string) => {
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
