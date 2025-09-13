import { Problem } from "@/types";
import { problems as beginnerBasicsProblems } from "./beginner-basics/problems";
import { solvers as beginnerBasicsSolvers } from "./beginner-basics/solvers";
import { explanations as beginnerBasicsExplanations } from "./beginner-basics/explanations";

import { problems as functionsScopeProblems } from "./functions-scope/problems";
import { solvers as functionsScopeSolvers } from "./functions-scope/solvers";
import { explanations as functionsScopeExplanations } from "./functions-scope/explanations";

import { problems as arraysStringsProblems } from "./arrays-strings/problems";
import { solvers as arraysStringsSolvers } from "./arrays-strings/solvers";
import { explanations as arraysStringsExplanations } from "./arrays-strings/explanations";

import { problems as objectsPrototypesProblems } from "./objects-prototypes/problems";
import { solvers as objectsPrototypesSolvers } from "./objects-prototypes/solvers";
import { explanations as objectsPrototypesExplanations } from "./objects-prototypes/explanations";

import { problems as classesOopProblems } from "./classes-oop/problems";
import { solvers as classesOopSolvers } from "./classes-oop/solvers";
import { explanations as classesOopExplanations } from "./classes-oop/explanations";

import { problems as closuresLexicalEnvironmentProblems } from "./closures-lexical-environment/problems";
import { solvers as closuresLexicalEnvironmentSolvers } from "./closures-lexical-environment/solvers";
import { explanations as closuresLexicalEnvironmentExplanations } from "./closures-lexical-environment/explanations";

import { problems as recursionProblems } from "./recursion/problems";
import { solvers as recursionSolvers } from "./recursion/solvers";
import { explanations as recursionExplanations } from "./recursion/explanations";

import { problems as algorithmsProblems } from "./algorithms/problems";
import { solvers as algorithmsSolvers } from "./algorithms/solvers";
import { explanations as algorithmsExplanations } from "./algorithms/explanations";

// Other categories are empty, so they are not included, but their files are made into valid modules.

export const allProblems: Problem[] = [
  ...beginnerBasicsProblems,
  ...functionsScopeProblems,
  ...arraysStringsProblems,
  ...objectsPrototypesProblems,
  ...classesOopProblems,
  ...closuresLexicalEnvironmentProblems,
  ...recursionProblems,
  ...algorithmsProblems,
];

export const allSolvers: Record<string, Function> = {
  ...beginnerBasicsSolvers,
  ...functionsScopeSolvers,
  ...arraysStringsSolvers,
  ...objectsPrototypesSolvers,
  ...classesOopSolvers,
  ...closuresLexicalEnvironmentSolvers,
  ...recursionSolvers,
  ...algorithmsSolvers,
};

export const staticExplanations: Record<string, string> = {
  ...beginnerBasicsExplanations,
  ...functionsScopeExplanations,
  ...arraysStringsExplanations,
  ...objectsPrototypesExplanations,
  ...classesOopExplanations,
  ...closuresLexicalEnvironmentExplanations,
  ...recursionExplanations,
  ...algorithmsExplanations,
};
