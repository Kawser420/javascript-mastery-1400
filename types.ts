
import type { availableThemes } from './App';

// FIX: Add global declarations for functions and window properties from non-module scripts.
// This prevents TypeScript errors when these scripts are used alongside TSX/TS modules.
declare global {
  interface Window {
    // From services/geminiService.ts
    GoogleGenAI: any;
    
    // From problems/solver.ts
    allSolvers: Record<string, Function>;

    // From various problems/*/solvers.ts
    beginnerBasicsSolvers: Record<string, Function>;
    functionsScopeSolvers: Record<string, Function>;
    classesOopSolvers: Record<string, Function>;
    asyncJsSolvers: Record<string, Function>;
    dataStructuresSolvers: Record<string, Function>;

    // From various problems/*/explanations.ts
    beginnerBasicsExplanations: Record<string, string>;
    functionsScopeExplanations: Record<string, string>;
    classesOopExplanations: Record<string, string>;
    asyncJsExplanations: Record<string, string>;
    dataStructuresExplanations: Record<string, string>;
    
    // From utils/parsers.ts
    parseNumber: (input: any) => number;
    parseNumberArray: (input: string) => number[];
    parseStringArray: (input: string) => string[];
    parseJSON: (input: string) => any;
  }

  // From services/geminiService.ts
  function getAIResponse(prompt: string): Promise<string>;
  function getAIExplanation(problem: Problem, solutionCode: string): Promise<string>;
  class ApiKeyMissingError extends Error {}
  class UnsupportedEnvironmentError extends Error {}
  
  // From problems/solver.ts
  function solveProblem(problemId: string, inputs: Record<string, string>): Promise<any>;
}


export type Theme = (typeof availableThemes)[number];

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