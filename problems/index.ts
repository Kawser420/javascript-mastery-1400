
import { Problem, Category } from '../types';

// Import from all 20 categories
import { problems as beginnerBasicsProblems } from './beginner-basics/problems';
// FIX: Solvers and explanations are loaded from global scripts, not modules.
// import { solvers as beginnerBasicsSolvers } from './beginner-basics/solvers';
// import { explanations as beginnerBasicsExplanations } from './beginner-basics/explanations';
import { problems as functionsScopeProblems } from './functions-scope/problems';
// import { solvers as functionsScopeSolvers } from './functions-scope/solvers';
// import { explanations as functionsScopeExplanations } from './functions-scope/explanations';
import { problems as arraysStringsProblems } from './arrays-strings/problems';
import { solvers as arraysStringsSolvers } from './arrays-strings/solvers';
import { explanations as arraysStringsExplanations } from './arrays-strings/explanations';
import { problems as objectsPrototypesProblems } from './objects-prototypes/problems';
import { solvers as objectsPrototypesSolvers } from './objects-prototypes/solvers';
import { explanations as objectsPrototypesExplanations } from './objects-prototypes/explanations';
import { problems as classesOopProblems } from './classes-oop/problems';
// import { solvers as classesOopSolvers } from './classes-oop/solvers';
// import { explanations as classesOopExplanations } from './classes-oop/explanations';
import { problems as closuresProblems } from './closures-lexical-environment/problems';
import { solvers as closuresSolvers } from './closures-lexical-environment/solvers';
import { explanations as closuresExplanations } from './closures-lexical-environment/explanations';
import { problems as recursionProblems } from './recursion/problems';
import { solvers as recursionSolvers } from './recursion/solvers';
import { explanations as recursionExplanations } from './recursion/explanations';
import { problems as es6FeaturesProblems } from './es6-features/problems';
import { solvers as es6FeaturesSolvers } from './es6-features/solvers';
import { explanations as es6FeaturesExplanations } from './es6-features/explanations';
import { problems as asyncJsProblems } from './asynchronous-js/problems';
// import { solvers as asyncJsSolvers } from './asynchronous-js/solvers';
// import { explanations as asyncJsExplanations } from './asynchronous-js/explanations';
import { problems as algorithmsProblems } from './algorithms/problems';
import { solvers as algorithmsSolvers } from './algorithms/solvers';
import { explanations as algorithmsExplanations } from './algorithms/explanations';
import { problems as dataStructuresProblems } from './data-structures/problems';
// import { solvers as dataStructuresSolvers } from './data-structures/solvers';
// import { explanations as dataStructuresExplanations } from './data-structures/explanations';
import { problems as webApisDomProblems } from './web-apis-dom/problems';
import { solvers as webApisDomSolvers } from './web-apis-dom/solvers';
import { explanations as webApisDomExplanations } from './web-apis-dom/explanations';
import { problems as eventHandlingProblems } from './event-handling-propagation/problems';
import { solvers as eventHandlingSolvers } from './event-handling-propagation/solvers';
import { explanations as eventHandlingExplanations } from './event-handling-propagation/explanations';
import { problems as functionalProgrammingProblems } from './functional-programming/problems';
import { solvers as functionalProgrammingSolvers } from './functional-programming/solvers';
import { explanations as functionalProgrammingExplanations } from './functional-programming/explanations';
import { problems as errorHandlingProblems } from './error-handling-debugging/problems';
import { solvers as errorHandlingSolvers } from './error-handling-debugging/solvers';
import { explanations as errorHandlingExplanations } from './error-handling-debugging/explanations';
import { problems as modulesImportsExportsProblems } from './modules-imports-exports/problems';
import { solvers as modulesImportsExportsSolvers } from './modules-imports-exports/solvers';
import { explanations as modulesImportsExportsExplanations } from './modules-imports-exports/explanations';
import { problems as advancedJsFeaturesProblems } from './advanced-js-features/problems';
import { solvers as advancedJsFeaturesSolvers } from './advanced-js-features/solvers';
import { explanations as advancedJsFeaturesExplanations } from './advanced-js-features/explanations';
import { problems as nodeJsProblems } from './nodejs-backend-js/problems';
import { solvers as nodeJsSolvers } from './nodejs-backend-js/solvers';
import { explanations as nodeJsExplanations } from './nodejs-backend-js/explanations';
import { problems as testingPerformanceProblems } from './testing-performance/problems';
import { solvers as testingPerformanceSolvers } from './testing-performance/solvers';
import { explanations as testingPerformanceExplanations } from './testing-performance/explanations';
import { problems as miniProjectsProblems } from './mini-projects/problems';
import { solvers as miniProjectsSolvers } from './mini-projects/solvers';
import { explanations as miniProjectsExplanations } from './mini-projects/explanations';


// Aggregate all problems
export const allProblems: Problem[] = [
    ...beginnerBasicsProblems,
    ...functionsScopeProblems,
    ...arraysStringsProblems,
    ...objectsPrototypesProblems,
    ...classesOopProblems,
    ...closuresProblems,
    ...recursionProblems,
    ...es6FeaturesProblems,
    ...asyncJsProblems,
    ...algorithmsProblems,
    ...dataStructuresProblems,
    ...webApisDomProblems,
    ...eventHandlingProblems,
    ...functionalProgrammingProblems,
    ...errorHandlingProblems,
    ...modulesImportsExportsProblems,
    ...advancedJsFeaturesProblems,
    ...nodeJsProblems,
    ...testingPerformanceProblems,
    ...miniProjectsProblems,
];

// Aggregate all solvers
export const allSolvers: Record<string, Function> = {
    ...(window.beginnerBasicsSolvers || {}),
    ...(window.functionsScopeSolvers || {}),
    ...arraysStringsSolvers,
    ...objectsPrototypesSolvers,
    ...(window.classesOopSolvers || {}),
    ...closuresSolvers,
    ...recursionSolvers,
    ...es6FeaturesSolvers,
    ...(window.asyncJsSolvers || {}),
    ...algorithmsSolvers,
    ...(window.dataStructuresSolvers || {}),
    ...webApisDomSolvers,
    ...eventHandlingSolvers,
    ...functionalProgrammingSolvers,
    ...errorHandlingSolvers,
    ...modulesImportsExportsSolvers,
    ...advancedJsFeaturesSolvers,
    ...nodeJsSolvers,
    ...testingPerformanceSolvers,
    ...miniProjectsSolvers,
};

// Aggregate all explanations
export const staticExplanations: Record<string, string> = {
    ...(window.beginnerBasicsExplanations || {}),
    ...(window.functionsScopeExplanations || {}),
    ...arraysStringsExplanations,
    ...objectsPrototypesExplanations,
    ...(window.classesOopExplanations || {}),
    ...closuresExplanations,
    ...recursionExplanations,
    ...es6FeaturesExplanations,
    ...(window.asyncJsExplanations || {}),
    ...algorithmsExplanations,
    ...(window.dataStructuresExplanations || {}),
    ...webApisDomExplanations,
    ...eventHandlingExplanations,
    ...functionalProgrammingExplanations,
    ...errorHandlingExplanations,
    ...modulesImportsExportsExplanations,
    ...advancedJsFeaturesExplanations,
    ...nodeJsExplanations,
    ...testingPerformanceExplanations,
    ...miniProjectsExplanations,
};

// Ensure a default explanation exists for every problem
const defaultExplanation = `
### 💡 Problem Breakdown
This is a placeholder explanation. In a fully implemented system, this would contain a detailed breakdown of the specific problem.

### ⚙️ Solution Walkthrough
A detailed walkthrough of the solution code would be provided here, explaining each step of the logic.

### 📚 Key Concepts
-   **Key Concept 1:** An explanation of a relevant JavaScript concept would be here.
-   **Key Concept 2:** Another key concept would be detailed here.
`;

allProblems.forEach(problem => {
    if (!staticExplanations[problem.id]) {
        staticExplanations[problem.id] = defaultExplanation;
    }
});