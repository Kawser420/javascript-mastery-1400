
export type Theme = 
  | "light" | "dark" | "cupcake" | "bumblebee" | "emerald" | "corporate" 
  | "synthwave" | "retro" | "cyberpunk" | "valentine" | "halloween" | "garden" 
  | "forest" | "aqua" | "lofi" | "pastel" | "fantasy" | "wireframe" | "black" 
  | "luxury" | "dracula" | "cmyk" | "autumn" | "business" | "acid" | "lemonade" 
  | "night" | "coffee" | "winter";

export interface ProblemInput {
  id: string;
  label: string;
  type: 'text' | 'number' | 'textarea';
  placeholder?: string;
  defaultValue?: string | number;
  step?: string;
  min?: string;
}

export type Category = 
  | 'Beginner Basics'
  | 'Functions & Scope'
  | 'Arrays & Strings'
  | 'Objects & Prototypes'
  | 'Classes & OOP'
  | 'Closures & Lexical Environment'
  | 'Recursion'
  | 'ES6+ Features'
  | 'Asynchronous JS'
  | 'Algorithms'
  | 'Data Structures'
  | 'Web APIs & DOM'
  | 'Event Handling & Propagation'
  | 'Functional Programming'
  | 'Error Handling & Debugging'
  | 'Modules & Imports/Exports'
  | 'Advanced JS Features'
  | 'Node.js & Backend JS'
  | 'Testing & Performance'
  | 'Mini Projects';

export interface Problem {
  id: string;
  title: string;
  description: string;
  category: Category;
  inputs: ProblemInput[];
  buttonText: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}
