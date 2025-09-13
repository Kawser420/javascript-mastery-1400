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

import { problems as advancedJsFeaturesProblems } from "./advanced-js-features/problems";
import { solvers as advancedJsFeaturesSolvers } from "./advanced-js-features/solvers";
import { explanations as advancedJsFeaturesExplanations } from "./advanced-js-features/explanations";

import { problems as asynchronousJsProblems } from "./asynchronous-js/problems";
import { solvers as asynchronousJsSolvers } from "./asynchronous-js/solvers";
import { explanations as asynchronousJsExplanations } from "./asynchronous-js/explanations";

import { problems as dataStructuresProblems } from "./data-structures/problems";
import { solvers as dataStructuresSolvers } from "./data-structures/solvers";
import { explanations as dataStructuresExplanations } from "./data-structures/explanations";

import { problems as errorHandlingDebuggingProblems } from "./error-handling-debugging/problems";
import { solvers as errorHandlingDebuggingSolvers } from "./error-handling-debugging/solvers";
import { explanations as errorHandlingDebuggingExplanations } from "./error-handling-debugging/explanations";

import { problems as es6FeaturesProblems } from "./es6-features/problems";
import { solvers as es6FeaturesSolvers } from "./es6-features/solvers";
import { explanations as es6FeaturesExplanations } from "./es6-features/explanations";

import { problems as eventHandlingPropagationProblems } from "./event-handling-propagation/problems";
import { solvers as eventHandlingPropagationSolvers } from "./event-handling-propagation/solvers";
import { explanations as eventHandlingPropagationExplanations } from "./event-handling-propagation/explanations";

import { problems as functionalProgrammingProblems } from "./functional-programming/problems";
import { solvers as functionalProgrammingSolvers } from "./functional-programming/solvers";
import { explanations as functionalProgrammingExplanations } from "./functional-programming/explanations";

import { problems as miniProjectsProblems } from "./mini-projects/problems";
import { solvers as miniProjectsSolvers } from "./mini-projects/solvers";
import { explanations as miniProjectsExplanations } from "./mini-projects/explanations";

import { problems as modulesImportsExportsProblems } from "./modules-imports-exports/problems";
import { solvers as modulesImportsExportsSolvers } from "./modules-imports-exports/solvers";
import { explanations as modulesImportsExportsExplanations } from "./modules-imports-exports/explanations";

import { problems as nodejsBackendJsProblems } from "./nodejs-backend-js/problems";
import { solvers as nodejsBackendJsSolvers } from "./nodejs-backend-js/solvers";
import { explanations as nodejsBackendJsExplanations } from "./nodejs-backend-js/explanations";

import { problems as testingPerformanceProblems } from "./testing-performance/problems";
import { solvers as testingPerformanceSolvers } from "./testing-performance/solvers";
import { explanations as testingPerformanceExplanations } from "./testing-performance/explanations";

import { problems as webApisDomProblems } from "./web-apis-dom/problems";
import { solvers as webApisDomSolvers } from "./web-apis-dom/solvers";
import { explanations as webApisDomExplanations } from "./web-apis-dom/explanations";

export const allProblems: Problem[] = [
  ...beginnerBasicsProblems,
  ...functionsScopeProblems,
  ...arraysStringsProblems,
  ...objectsPrototypesProblems,
  ...classesOopProblems,
  ...closuresLexicalEnvironmentProblems,
  ...recursionProblems,
  ...algorithmsProblems,

  ...advancedJsFeaturesProblems,
  ...asynchronousJsProblems,
  ...dataStructuresProblems,
  ...errorHandlingDebuggingProblems,
  ...es6FeaturesProblems,
  ...eventHandlingPropagationProblems,
  ...functionalProgrammingProblems,
  ...miniProjectsProblems,
  ...modulesImportsExportsProblems,
  ...nodejsBackendJsProblems,
  ...testingPerformanceProblems,
  ...webApisDomProblems,
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

  ...advancedJsFeaturesSolvers,
  ...asynchronousJsSolvers,
  ...dataStructuresSolvers,
  ...errorHandlingDebuggingSolvers,
  ...es6FeaturesSolvers,
  ...eventHandlingPropagationSolvers,
  ...functionalProgrammingSolvers,
  ...miniProjectsSolvers,
  ...modulesImportsExportsSolvers,
  ...nodejsBackendJsSolvers,
  ...testingPerformanceSolvers,
  ...webApisDomSolvers,
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
  ...advancedJsFeaturesExplanations,
  ...asynchronousJsExplanations,
  ...dataStructuresExplanations,
  ...errorHandlingDebuggingExplanations,
  ...es6FeaturesExplanations,
  ...eventHandlingPropagationExplanations,
  ...functionalProgrammingExplanations,
  ...miniProjectsExplanations,
  ...modulesImportsExportsExplanations,
  ...nodejsBackendJsExplanations,
  ...testingPerformanceExplanations,
  ...webApisDomExplanations,
};
