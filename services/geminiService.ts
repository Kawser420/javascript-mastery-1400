import { GoogleGenAI } from "@google/genai";
import type { Problem } from "../types";

if (!process.env.API_KEY) {
  // In a real production app, this check might be more robust or handled differently.
  // For this context, we assume the environment variable is set.
  console.warn(
    "API_KEY environment variable is not set. AI features will not work."
  );
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const advancedSystemInstruction = `
You are an elite JavaScript tutor and mentor, not just a simple chatbot. Your name is "Alex". 
Your goal is to help users achieve true mastery of JavaScript, not just to give them the answers.
Follow these principles strictly:

1.  **Socratic Method:** When a user asks a question, don't just give the answer. Guide them. Ask leading questions. For example, if they ask "how do I sort an array?", you might respond with "That's a great question! There are a few ways to do it. Have you heard of the .sort() method? What do you think its default behavior might be?".
2.  **Layered Hints:** Provide hints in layers. Start with a small, conceptual hint. If the user is still stuck, give a more specific hint, and finally, if necessary, provide a code snippet, but always explain it thoroughly.
3.  **Conceptual Depth:** Always connect the code to the underlying concepts. If you show a 'map' function, explain what a higher-order function is and why it's powerful. If you show a 'Promise', explain the event loop and asynchronous behavior.
4.  **Use Analogies:** Explain complex topics with simple, real-world analogies. For example, explain a 'callback' like giving a barista your name and having them call it out when your coffee is ready.
5.  **Code Formatting:** ALWAYS format code blocks using markdown (e.g., \`\`\`javascript ... \`\`\`). Keep code examples concise and focused on the concept being explained.
6.  **Maintain Context:** Remember previous questions in the conversation to provide more relevant and personalized guidance.
7.  **Persona:** Be encouraging, patient, and professional. You are a mentor aiming to build the user's confidence and problem-solving skills. Start your very first response in any conversation with "Hi there! I'm Alex, your personal JavaScript mentor. How can we level up your skills today?".
`;

/**
 * Gets a response from the AI for a general chat query.
 * @param prompt The user's query.
 * @returns The AI's text response.
 */
export const getAIResponse = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY)
    return "API key not configured. The AI assistant is offline.";
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: advancedSystemInstruction,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error getting AI response:", error);
    throw new Error("Failed to communicate with the AI service.");
  }
};

/**
 * Gets a detailed explanation for a specific problem and its solution.
 * @param problem The problem object.
 * @param solutionCode The stringified code for the solution.
 * @returns The AI's explanation formatted in markdown.
 */
export const getAIExplanation = async (
  problem: Problem,
  solutionCode: string
): Promise<string> => {
  if (!process.env.API_KEY)
    return "API key not configured. The AI explainer is offline.";
  const prompt = `
        Please provide a detailed, beginner-friendly explanation for the following JavaScript problem and its solution.
        The goal is to educate, so be clear, concise, and thorough.

        **Problem Title:** ${problem.title}
        **Problem Description:** ${problem.description}

        **Solution Code:**
        \`\`\`javascript
        ${solutionCode}
        \`\`\`

        Structure your explanation with the following sections using markdown:
        ### 💡 Problem Breakdown
        Explain the core concept and what the problem is asking for in simple terms. Break down the requirements.

        ### ⚙️ Solution Walkthrough
        Go through the provided solution code line-by-line or block-by-block, explaining what each part does and why it's necessary. Use code snippets for clarity.

        ### 📚 Key Concepts
        List and briefly explain any important JavaScript concepts or methods used in the solution (e.g., \`Array.prototype.map\`, recursion, closures, etc.).

        ### 🔄 Alternative Approaches (Optional)
        If there are other common ways to solve this problem, briefly mention them and their trade-offs (e.g., performance, readability).
    `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error getting AI explanation:", error);
    throw new Error("Failed to generate an explanation from the AI service.");
  }
};
