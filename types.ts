export type Theme =
  | "light"
  | "dark"
  | "cupcake"
  | "bumblebee"
  | "emerald"
  | "corporate"
  | "synthwave"
  | "retro"
  | "cyberpunk"
  | "valentine"
  | "halloween"
  | "garden"
  | "forest"
  | "aqua"
  | "lofi"
  | "pastel"
  | "fantasy"
  | "wireframe"
  | "black"
  | "luxury"
  | "dracula"
  | "cmyk"
  | "autumn"
  | "business"
  | "acid"
  | "lemonade"
  | "night"
  | "coffee"
  | "winter";

export interface ProblemInput {
  id: string;
  label: string;
  type: "text" | "number" | "textarea";
  placeholder?: string;
  defaultValue?: string | number;
  step?: string;
  min?: string;
}

export type Category =
  | "Beginner Basics"
  | "Functions & Scope"
  | "Variables & Constants Deep Dive"
  | "Operators and Expressions" // <-- changed here if you choose option 2
  | "Control Flow and Loops"
  | "Arrays & Strings"
  | "Objects & Prototypes"
  | "Math and Number Challenges"
  | "Date & Time Handling"
  | "Type & Value Mastery"
  | "Error Handling & Debugging"
  | "Input/Output & Console Utilities"
  | "ES6+ Features"
  | "Closures & Lexical Environment"
  | "Recursion Techniques"
  | "Classes & OOP"
  | "Execution Context & Call Stack"
  | "Event Loop & Concurrency Model"
  | "Iterators & Generators"
  | "Memory Management & Performance Patterns"
  | "Prototypes & Inheritance Advanced"
  | "Modules & Imports/Exports"
  | "Advanced JS Features"
  | "Design Patterns in JS"
  | "Sorting & Searching Algorithms"
  | "Arrays & Matrix Algorithms"
  | "String Algorithms"
  | "Linked List Challenges"
  | "Stack & Queue Problems"
  | "Hash Map & Set Problems"
  | "Tree Algorithms"
  | "Graph Algorithms"
  | "Dynamic Programming"
  | "Greedy & Backtracking"
  | "Geometry & Computational Math"
  | "Bitwise & Low-Level Tricks"
  | "Web APIs & DOM Manipulation"
  | "Event Handling & Propagation"
  | "Forms & Validation"
  | "Canvas & WebGL Drawing"
  | "Web Components & Shadow DOM"
  | "Drag & Drop & File API"
  | "Web Workers & Multithreading"
  | "Service Workers & PWA Offline Patterns"
  | "Asynchronous JS"
  | "Fetch & AJAX / REST API Handling"
  | "Real-Time & Streaming"
  | "Request Caching & Performance"
  | "Authentication & Authorization Flows"
  | "Error Recovery & Retry Strategies"
  | "Node.js Core"
  | "File System & Streams Deep Dive"
  | "HTTP & Express.js"
  | "Databases & ORMs"
  | "Build Tools & Bundlers"
  | "Deployment & DevOps Basics"
  | "Testing & Test-Driven Development"
  | "Security & Best Practices"
  | "Performance Optimization & Profiling"
  | "Mini Projects"
  | "Real-World Applications";

export interface Problem {
  id: string;
  title: string;
  description: string;
  category: Category;
  inputs: ProblemInput[];
  buttonText: string;
}

export interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}
