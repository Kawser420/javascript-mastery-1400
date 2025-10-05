import { Problem } from "@/types";

// import Fundamentals(12)
import { problems as beginnerBasicsProblems } from "./beginner-basics/problems";
import { solvers as beginnerBasicsSolvers } from "./beginner-basics/solvers";
import { explanations as beginnerBasicsExplanations } from "./beginner-basics/explanations";

import { problems as variablesConstantsDeepDiveProblems } from "./variables-and-constants-deep-dive/problems";
import { solvers as variablesConstantsDeepDiveSolvers } from "./variables-and-constants-deep-dive/solvers";
import { explanations as variablesConstantsDeepDiveExplanations } from "./variables-and-constants-deep-dive/explanations";

import { problems as operatorsExpressionsProblems } from "./operators-and-expressions/problems";
import { solvers as operatorsExpressionsSolvers } from "./operators-and-expressions/solvers";
import { explanations as operatorsExpressionsExplanations } from "./operators-and-expressions/explanations";

import { problems as controlFlowLoopsProblems } from "./control-flow-and-loops/problems";
import { solvers as controlFlowLoopsSolvers } from "./control-flow-and-loops/solvers";
import { explanations as controlFlowLoopsExplanations } from "./control-flow-and-loops/explanations";

import { problems as functionsScopeProblems } from "./functions-and-scope/problems";
import { solvers as functionsScopeSolvers } from "./functions-and-scope/solvers";
import { explanations as functionsScopeExplanations } from "./functions-and-scope/explanations";

import { problems as arraysStringsProblems } from "./arrays-and-strings/problems";
import { solvers as arraysStringsSolvers } from "./arrays-and-strings/solvers";
import { explanations as arraysStringsExplanations } from "./arrays-and-strings/explanations";

import { problems as objectsPrototypesProblems } from "./objects-and-prototypes/problems";
import { solvers as objectsPrototypesSolvers } from "./objects-and-prototypes/solvers";
import { explanations as objectsPrototypesExplanations } from "./objects-and-prototypes/explanations";

import { problems as mathNumberChallengesProblems } from "./math-and-number-challenges/problems";
import { solvers as mathNumberChallengesSolvers } from "./math-and-number-challenges/solvers";
import { explanations as mathNumberChallengesExplanations } from "./math-and-number-challenges/explanations";

import { problems as dateTimeHandlingProblems } from "./date-and-time-handling/problems";
import { solvers as dateTimeHandlingSolvers } from "./date-and-time-handling/solvers";
import { explanations as dateTimeHandlingExplanations } from "./date-and-time-handling/explanations";

import { problems as typeValueMasteryProblems } from "./type-and-value-mastery/problems";
import { solvers as typeValueMasterySolvers } from "./type-and-value-mastery/solvers";
import { explanations as typeValueMasteryExplanations } from "./type-and-value-mastery/explanations";

import { problems as errorHandlingDebuggingProblems } from "./error-handling-and-debugging/problems";
import { solvers as errorHandlingDebuggingSolvers } from "./error-handling-and-debugging/solvers";
import { explanations as errorHandlingDebuggingExplanations } from "./error-handling-and-debugging/explanations";

import { problems as inputOutputConsoleUtilitiesProblems } from "./input-output-and-console-utilities/problems";
import { solvers as inputOutputConsoleUtilitiesSolvers } from "./input-output-and-console-utilities/solvers";
import { explanations as inputOutputConsoleUtilitiesExplanations } from "./input-output-and-console-utilities/explanations";

// import Core Concepts(12)
import { problems as es6FeaturesProblems } from "./es6-features/problems";
import { solvers as es6FeaturesSolvers } from "./es6-features/solvers";
import { explanations as es6FeaturesExplanations } from "./es6-features/explanations";

import { problems as closuresLexicalEnvironmentProblems } from "./closures-and-lexical-environment/problems";
import { solvers as closuresLexicalEnvironmentSolvers } from "./closures-and-lexical-environment/solvers";
import { explanations as closuresLexicalEnvironmentExplanations } from "./closures-and-lexical-environment/explanations";

// import { problems as advancedJsFeaturesProblems } from "./advanced-js-features/problems";
// import { solvers as advancedJsFeaturesSolvers } from "./advanced-js-features/solvers";
// import { explanations as advancedJsFeaturesExplanations } from "./advanced-js-features/explanations";

// import { problems as asynchronousJsProblems } from "./asynchronous-js/problems";
// import { solvers as asynchronousJsSolvers } from "./asynchronous-js/solvers";
// import { explanations as asynchronousJsExplanations } from "./asynchronous-js/explanations";

import { problems as miniProjectsProblems } from "./mini-projects/problems";
import { solvers as miniProjectsSolvers } from "./mini-projects/solvers";
import { explanations as miniProjectsExplanations } from "./mini-projects/explanations";

import { problems as modulesImportsExportsProblems } from "./modules-and-imports-exports/problems";
import { solvers as modulesImportsExportsSolvers } from "./modules-and-imports-exports/solvers";
import { explanations as modulesImportsExportsExplanations } from "./modules-and-imports-exports/explanations";

export const allProblems: Problem[] = [
  // export allProblems--> Fundamentals(12)
  ...beginnerBasicsProblems,
  ...variablesConstantsDeepDiveProblems,
  ...operatorsExpressionsProblems,
  ...controlFlowLoopsProblems,
  ...functionsScopeProblems,
  ...arraysStringsProblems,
  ...objectsPrototypesProblems,
  ...mathNumberChallengesProblems,
  ...dateTimeHandlingProblems,
  ...typeValueMasteryProblems,
  ...errorHandlingDebuggingProblems,
  ...inputOutputConsoleUtilitiesProblems,
  // export allProblems--> Core Concepts(12)
  ...es6FeaturesProblems,
  ...closuresLexicalEnvironmentProblems,
  ...recursionTechniquesProblems,
  ...classesOopProblems,
  // ...advancedJsFeaturesProblems,
  // ...asynchronousJsProblems,
  ...miniProjectsProblems,
  ...modulesImportsExportsProblems,
];

export const allSolvers: Record<string, Function> = {
  // export allSolvers--> Fundamentals(12)
  ...beginnerBasicsSolvers,
  ...variablesConstantsDeepDiveSolvers,
  ...operatorsExpressionsSolvers,
  ...functionsScopeSolvers,
  ...arraysStringsSolvers,
  ...objectsPrototypesSolvers,
  ...mathNumberChallengesSolvers,
  ...dateTimeHandlingSolvers,
  ...typeValueMasterySolvers,
  ...errorHandlingDebuggingSolvers,
  ...inputOutputConsoleUtilitiesSolvers,
  // export allSolvers--> Core Concepts(12)
  ...es6FeaturesSolvers,
  ...closuresLexicalEnvironmentSolvers,
  ...recursionTechniquesSolvers,
  ...classesOopSolvers,
  // ...advancedJsFeaturesSolvers,
  // ...asynchronousJsSolvers,
  ...miniProjectsSolvers,
  ...modulesImportsExportsSolvers,
  ...controlFlowLoopsSolvers,
};

export const staticExplanations: Record<string, string> = {
  // export allExplanations--> Fundamentals(12)
  ...beginnerBasicsExplanations,
  ...variablesConstantsDeepDiveExplanations,
  ...operatorsExpressionsExplanations,
  ...functionsScopeExplanations,
  ...arraysStringsExplanations,
  ...objectsPrototypesExplanations,
  ...mathNumberChallengesExplanations,
  ...dateTimeHandlingExplanations,
  ...typeValueMasteryExplanations,
  ...errorHandlingDebuggingExplanations,
  ...inputOutputConsoleUtilitiesExplanations,
  // export allExplanations--> Core Concepts(12)
  ...es6FeaturesExplanations,
  ...closuresLexicalEnvironmentExplanations,
  ...recursionTechniquesExplanations,
  // ...classesOopExplanations,
  // ...advancedJsFeaturesExplanations,
  // ...asynchronousJsExplanations,
  ...miniProjectsExplanations,
  ...modulesImportsExportsExplanations,
  ...controlFlowLoopsExplanations,
};
