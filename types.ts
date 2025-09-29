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
  | "Functions and Scope"
  | "Variables and Constants Deep Dive"
  | "Operators and Expressions" // <-- changed here if you choose option 2
  | "Control Flow and Loops"
  | "Arrays and Strings"
  | "Objects and Prototypes"
  | "Math and Number Challenges"
  | "Date and Time Handling"
  | "Type and Value Mastery"
  | "Error Handling and Debugging"
  | "Input/Output and Console Utilities"
  | "ES6+ Features"
  | "Closures and Lexical Environment"
  | "Recursion Techniques"
  | "Classes and OOP"
  | "Execution Context and Call Stack"
  | "Event Loop and Concurrency Model"
  | "Iterators and Generators"
  | "Memory Management and Performance Patterns"
  | "Prototypes and Inheritance Advanced"
  | "Modules and Imports/Exports"
  | "Advanced JS Features"
  | "Design Patterns in JS"
  | "Sorting and Searching Algorithms"
  | "Arrays and Matrix Algorithms"
  | "String Algorithms"
  | "Linked List Challenges"
  | "Stack and Queue Problems"
  | "Hash Map and Set Problems"
  | "Tree Algorithms"
  | "Graph Algorithms"
  | "Dynamic Programming"
  | "Greedy and Backtracking"
  | "Geometry and Computational Math"
  | "Bitwise and Low-Level Tricks"
  | "Web APIs and DOM Manipulation"
  | "Event Handling and Propagation"
  | "Forms and Validation"
  | "Canvas and WebGL Drawing"
  | "Web Components and Shadow DOM"
  | "Drag and Drop and File API"
  | "Web Workers and Multithreading"
  | "Service Workers and PWA Offline Patterns"
  | "Asynchronous JS"
  | "Fetch and AJAX / REST API Handling"
  | "Real-Time and Streaming"
  | "Request Caching and Performance"
  | "Authentication and Authorization Flows"
  | "Error Recovery and Retry Strategies"
  | "Node.js Core"
  | "File System and Streams Deep Dive"
  | "HTTP and Express.js"
  | "Databases and ORMs"
  | "Build Tools and Bundlers"
  | "Deployment and DevOps Basics"
  | "Testing and Test-Driven Development"
  | "Security and Best Practices"
  | "Performance Optimization and Profiling"
  | "Mini Projects"
  | "Real-World Applications";

export interface Problem {
  id: string;
  title: string;
  description: string;
  category?: string;
  inputs?: ProblemInput[];
  buttonText?: string;
  starterCode?: string;
  difficulty?: "Beginner" | "Core Concepts" | "Intermediate" | "Advanced";
}

export interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}
