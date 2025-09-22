import { Problem } from "@/types";

import { problems as beginnerBasicsProblems } from "./beginner-basics/problems";
import { solvers as beginnerBasicsSolvers } from "./beginner-basics/solvers";
import { explanations as beginnerBasicsExplanations } from "./beginner-basics/explanations";

import { problems as functionsScopeProblems } from "./functions-and-scope/problems";
import { solvers as functionsScopeSolvers } from "./functions-and-scope/solvers";
import { explanations as functionsScopeExplanations } from "./functions-and-scope/explanations";

import { problems as arraysStringsProblems } from "./arrays-and-strings/problems";
import { solvers as arraysStringsSolvers } from "./arrays-and-strings/solvers";
import { explanations as arraysStringsExplanations } from "./arrays-and-strings/explanations";

import { problems as objectsPrototypesProblems } from "./objects-and-prototypes/problems";
import { solvers as objectsPrototypesSolvers } from "./objects-and-prototypes/solvers";
// import { explanations as objectsPrototypesExplanations } from "./objects-and-prototypes/explanations";

import { problems as classesOopProblems } from "./classes-and-oop/problems";
import { solvers as classesOopSolvers } from "./classes-and-oop/solvers";
import { explanations as classesOopExplanations } from "./classes-and-oop/explanations";

import { problems as closuresLexicalEnvironmentProblems } from "./closures-and-lexical-environment/problems";
import { solvers as closuresLexicalEnvironmentSolvers } from "./closures-and-lexical-environment/solvers";
import { explanations as closuresLexicalEnvironmentExplanations } from "./closures-and-lexical-environment/explanations";

import { problems as recursionProblems } from "./recursion-techniques/problems";
import { solvers as recursionSolvers } from "./recursion-techniques/solvers";
import { explanations as recursionExplanations } from "./recursion-techniques/explanations";

import { problems as advancedJsFeaturesProblems } from "./advanced-js-features/problems";
import { solvers as advancedJsFeaturesSolvers } from "./advanced-js-features/solvers";
import { explanations as advancedJsFeaturesExplanations } from "./advanced-js-features/explanations";

import { problems as asynchronousJsProblems } from "./asynchronous-js/problems";
import { solvers as asynchronousJsSolvers } from "./asynchronous-js/solvers";
import { explanations as asynchronousJsExplanations } from "./asynchronous-js/explanations";

import { problems as errorHandlingDebuggingProblems } from "./error-handling-and-debugging/problems";
import { solvers as errorHandlingDebuggingSolvers } from "./error-handling-and-debugging/solvers";
import { explanations as errorHandlingDebuggingExplanations } from "./error-handling-and-debugging/explanations";

import { problems as es6FeaturesProblems } from "./es6-features/problems";
import { solvers as es6FeaturesSolvers } from "./es6-features/solvers";
import { explanations as es6FeaturesExplanations } from "./es6-features/explanations";

import { problems as miniProjectsProblems } from "./mini-projects/problems";
import { solvers as miniProjectsSolvers } from "./mini-projects/solvers";
import { explanations as miniProjectsExplanations } from "./mini-projects/explanations";

import { problems as modulesImportsExportsProblems } from "./modules-and-imports-exports/problems";
import { solvers as modulesImportsExportsSolvers } from "./modules-and-imports-exports/solvers";
import { explanations as modulesImportsExportsExplanations } from "./modules-and-imports-exports/explanations";

// ✅ NEW CATEGORIES
import { problems as controlFlowDebuggingProblems } from "./control-flow-and-loops/problems";
import { solvers as controlFlowDebuggingSolvers } from "./control-flow-and-loops/solvers";
import { explanations as controlFlowDebuggingExplanations } from "./control-flow-and-loops/explanations";

import { problems as operatorsExpressionsProblems } from "./operators-and-expressions/problems";
import { solvers as operatorsExpressionsSolvers } from "./operators-and-expressions/solvers";
import { explanations as operatorsExpressionsExplanations } from "./operators-and-expressions/explanations";

import { problems as variablesConstantsDeepDiveProblems } from "./variables-and-constants-deep-dive/problems";
import { solvers as variablesConstantsDeepDiveSolvers } from "./variables-and-constants-deep-dive/solvers";
import { explanations as variablesConstantsDeepDiveExplanations } from "./variables-and-constants-deep-dive/explanations";

export const allProblems: Problem[] = [
  ...beginnerBasicsProblems,
  ...functionsScopeProblems,
  ...arraysStringsProblems,
  ...objectsPrototypesProblems,
  ...classesOopProblems,
  ...closuresLexicalEnvironmentProblems,
  ...recursionProblems,
  ...advancedJsFeaturesProblems,
  ...asynchronousJsProblems,
  ...errorHandlingDebuggingProblems,
  ...es6FeaturesProblems,
  ...miniProjectsProblems,
  ...modulesImportsExportsProblems,
  ...controlFlowDebuggingProblems,
  ...operatorsExpressionsProblems,
  ...variablesConstantsDeepDiveProblems,
];

export const allSolvers: Record<string, Function> = {
  ...beginnerBasicsSolvers,
  ...functionsScopeSolvers,
  ...arraysStringsSolvers,
  ...objectsPrototypesSolvers,
  ...classesOopSolvers,
  ...closuresLexicalEnvironmentSolvers,
  ...recursionSolvers,
  ...advancedJsFeaturesSolvers,
  ...asynchronousJsSolvers,
  ...errorHandlingDebuggingSolvers,
  ...es6FeaturesSolvers,
  ...miniProjectsSolvers,
  ...modulesImportsExportsSolvers,
  ...controlFlowDebuggingSolvers,
  ...operatorsExpressionsSolvers,
  ...variablesConstantsDeepDiveSolvers,
};

export const staticExplanations: Record<string, string> = {
  ...beginnerBasicsExplanations,
  ...functionsScopeExplanations,
  ...arraysStringsExplanations,
  // ...objectsPrototypesExplanations,
  ...classesOopExplanations,
  ...closuresLexicalEnvironmentExplanations,
  ...recursionExplanations,
  ...advancedJsFeaturesExplanations,
  ...asynchronousJsExplanations,
  ...errorHandlingDebuggingExplanations,
  ...es6FeaturesExplanations,
  ...miniProjectsExplanations,
  ...modulesImportsExportsExplanations,
  ...controlFlowDebuggingExplanations,
  ...operatorsExpressionsExplanations,
  ...variablesConstantsDeepDiveExplanations,
};
