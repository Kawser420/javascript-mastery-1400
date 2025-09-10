// This file MUST be pure JavaScript. No imports, no types.

const solveProblem = (problemId, inputs) => {
  return new Promise((resolve, reject) => {
    // Simulate a short delay to make the solving process feel more substantial
    setTimeout(() => {
      // allSolvers is expected to be on the window scope, aggregated by problems/index.ts
      const solver = window.allSolvers[problemId];
      if (typeof solver === 'function') {
        try {
          const result = solver(inputs);
          resolve(result);
        } catch (error) {
          reject(error instanceof Error ? error : new Error('An unknown error occurred during solving.'));
        }
      } else {
        reject(new Error(`Solver not found for problem ID: ${problemId}`));
      }
    }, 250); // 250ms delay
  });
};
