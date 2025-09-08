import type { availableThemes } from "./App";

export type Theme = (typeof availableThemes)[number];

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
  | "Beginner"
  | "Intermediate"
  | "ES6+"
  | "Asynchronous"
  | "Synchronous"
  | "Web APIs & DOM"
  | "Algorithms"
  | "Data Structures";

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
