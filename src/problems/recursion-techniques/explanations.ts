// export const explanations: Record<string, string> = {
//   // problem explanation--> 01
//   "recursion-factorial": `
// <h3>💡 Problem Breakdown</h3>
// <p>The factorial of a non-negative integer <code>n</code>, denoted by <code>n!</code>, is the product of all positive integers less than or equal to <code>n</code>. For example, <code>5! = 5 * 4 * 3 * 2 * 1 = 120</code>. By definition, <code>0! = 1</code>. This problem is a classic introduction to recursion because the factorial function has a natural recursive definition: <code>n! = n * (n-1)!</code>.</p>
// <h3>⚙️ Solution Walkthrough</h3>
// <p>A recursive function needs two key parts: a <strong>base case</strong> and a <strong>recursive step</strong>.</p>
// <ol>
//     <li><strong>Base Case</strong>: This is the condition under which the function stops calling itself to prevent an infinite loop. For factorial, the base case is when <code>n</code> is 0. If <code>n</code> is 0, we simply return 1.</li>
//     <li><strong>Recursive Step</strong>: This is where the function calls itself with a modified input that moves it closer to the base case. For factorial, if <code>n</code> is greater than 0, we return <code>n</code> multiplied by the result of calling the factorial function with <code>n - 1</code>.</li>
// </ol>
// <pre><code class="language-javascript">
// const factorial = (n) => {
//   // Base Case: If n is 0, we've reached the end.
//   if (n === 0) {
//     return 1;
//   }
//   // Recursive Step: Call the function with a smaller number.
//   return n * factorial(n - 1);
// };

// // How factorial(3) is evaluated:
// // 1. factorial(3) returns 3 * factorial(2)
// // 2. factorial(2) returns 2 * factorial(1)
// // 3. factorial(1) returns 1 * factorial(0)
// // 4. factorial(0) returns 1 (Base Case)
// // The results are then multiplied back up the call stack: 1 * 1 * 2 * 3 = 6
// </code></pre>
// <h3>📚 Key Concepts</h3>
// <ul>
//     <li><strong>Recursion</strong>: A programming technique where a function calls itself to solve a problem.</li>
//     <li><strong>Base Case</strong>: The terminating scenario in recursion that does not involve a recursive call.</li>
//     <li><strong>Recursive Step</strong>: The part of the function that calls itself, typically with a "smaller" or "simpler" input.</li>
//     <li><strong>Call Stack</strong>: The mechanism that JavaScript uses to keep track of function calls. Each recursive call adds a new frame to the stack.</li>
// </ul>
// `,
//   // problem explanation--> 02
//   "recursion-sum-range": `
// <h3>💡 Problem Breakdown</h3>
// <p>The task is to calculate the sum of all integers from 1 up to a given number <code>n</code>. For example, if <code>n = 5</code>, the sum is <code>5 + 4 + 3 + 2 + 1 = 15</code>. This can be defined recursively: the sum up to <code>n</code> is simply <code>n</code> plus the sum up to <code>n-1</code>.</p>
// <h3>⚙️ Solution Walkthrough</h3>
// <ol>
//     <li><strong>Base Case</strong>: What is the simplest possible input? If <code>n</code> is 1 or less, the sum is just that number (or 0 if we stop at 1). A simple base case is when <code>n <= 0</code>, we return 0.</li>
//     <li><strong>Recursive Step</strong>: For any number <code>n</code> greater than 0, the sum is <code>n</code> plus the sum of all numbers up to <code>n-1</code>. So, we return <code>n + sumRange(n - 1)</code>.</li>
// </ol>
// <pre><code class="language-javascript">
// const sumRange = (n) => {
//   // Base Case: If n is 0, there's nothing to add.
//   if (n <= 0) {
//     return 0;
//   }
//   // Recursive Step: Add n to the sum of the range below it.
//   return n + sumRange(n - 1);
// };

// // How sumRange(3) is evaluated:
// // 1. sumRange(3) returns 3 + sumRange(2)
// // 2. sumRange(2) returns 2 + sumRange(1)
// // 3. sumRange(1) returns 1 + sumRange(0)
// // 4. sumRange(0) returns 0 (Base Case)
// // The results are summed back up the call stack: 0 + 1 + 2 + 3 = 6
// </code></pre>
// <h3>📚 Key Concepts</h3>
// <ul>
//     <li><strong>Recursive Definition</strong>: Recognizing how a larger problem can be defined in terms of a smaller version of itself.</li>
//     <li><strong>Base Case</strong>: Essential for stopping the recursion. Here, it's the point where we know the answer without further calculation.</li>
//     <li><strong>Call Stack</strong>: Each call to <code>sumRange</code> waits for the result of the next call before it can complete its own calculation.</li>
// </ul>
// `,
//   // problem explanation--> 03
//   "recursion-power-function": `
// <h3>💡 Problem Breakdown</h3>
// <p>The goal is to calculate <code>base</code> raised to the power of <code>exp</code> (<code>base^exp</code>). For example, <code>2^5 = 2 * 2 * 2 * 2 * 2 = 32</code>. The recursive definition is that <code>base^exp = base * base^(exp-1)</code>.</p>
// <h3>⚙️ Solution Walkthrough</h3>
// <ol>
//     <li><strong>Base Case</strong>: Any number to the power of 0 is 1. This is our simplest case and the perfect stopping point for the recursion. So, if <code>exp</code> is 0, we return 1.</li>
//     <li><strong>Recursive Step</strong>: For any exponent <code>exp</code> greater than 0, the result is <code>base</code> multiplied by the result of raising <code>base</code> to the power of <code>exp - 1</code>. Our recursive call is <code>base * power(base, exp - 1)</code>.</li>
// </ol>
// <pre><code class="language-javascript">
// const power = (base, exp) => {
//   // Base Case: Anything to the power of 0 is 1.
//   if (exp === 0) {
//     return 1;
//   }
//   // Recursive Step: Multiply the base by the result of the smaller problem.
//   return base * power(base, exp - 1);
// };

// // How power(2, 3) is evaluated:
// // 1. power(2, 3) returns 2 * power(2, 2)
// // 2. power(2, 2) returns 2 * power(2, 1)
// // 3. power(2, 1) returns 2 * power(2, 0)
// // 4. power(2, 0) returns 1 (Base Case)
// // The results are multiplied back up the call stack: 1 * 2 * 2 * 2 = 8
// </code></pre>
// <h3>📚 Key Concepts</h3>
// <ul>
//     <li><strong>Recursive Definition</strong>: Breaking down the exponentiation problem into a multiplication and a smaller exponentiation problem.</li>
//     <li><strong>Base Case</strong>: The identity case for exponentiation, <code>x^0 = 1</code>, provides a clean end to the recursion.</li>
// </ul>
// `,
//   // problem explanation--> 04
//   "recursion-fibonacci-sequence": `
// <h3>💡 Problem Breakdown</h3>
// <p>The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, ... The task is to find the Nth number in this sequence. The definition is inherently recursive: <code>fib(n) = fib(n-1) + fib(n-2)</code>.</p>
// <h3>⚙️ Solution Walkthrough</h3>
// <p>This problem is a classic example of recursion that involves multiple recursive calls in the recursive step.</p>
// <ol>
//     <li><strong>Base Cases</strong>: We need two base cases to start the sequence. If <code>n</code> is 0, the result is 0. If <code>n</code> is 1, the result is 1. These are the first two numbers in the sequence and provide our stopping points.</li>
//     <li><strong>Recursive Step</strong>: For any <code>n</code> greater than 1, the Nth Fibonacci number is the sum of the two previous Fibonacci numbers. So, we return <code>fibonacci(n - 1) + fibonacci(n - 2)</code>.</li>
// </ol>
// <pre><code class="language-javascript">
// const fibonacci = (n) => {
//   // Base Cases: The first two numbers of the sequence.
//   if (n <= 1) {
//     return n;
//   }
//   // Recursive Step: Two recursive calls.
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// // How fibonacci(4) is evaluated:
// // fib(4) -> fib(3) + fib(2)
// // fib(3) -> fib(2) + fib(1)
// // fib(2) -> fib(1) + fib(0)
// // This simple recursive solution is very inefficient because it recalculates the same values many times. For example, fib(2) is calculated twice.
// </code></pre>
// <h3>📚 Key Concepts</h3>
// <ul>
//     <li><strong>Multiple Base Cases</strong>: Some recursive problems require more than one stopping condition.</li>
//     <li><strong>Tree Recursion</strong>: A function that makes more than one recursive call in its body, leading to a tree-like structure of calls.</li>
//     <li><strong>Inefficiency</strong>: This naive recursive solution has an exponential time complexity (O(2^n)), making it very slow for larger values of <code>n</code>. This highlights a common pitfall of simple recursion and motivates techniques like memoization.</li>
// </ul>
// `,
//   // problem explanation--> 05
//   "recursion-array-sum": `
// <h3>💡 Problem Breakdown</h3>
// <p>We need to find the sum of all numbers in an array. A recursive way to think about this is: the sum of an array is the first element plus the sum of the rest of the array.</p>
// <h3>⚙️ Solution Walkthrough</h3>
// <ol>
//     <li><strong>Base Case</strong>: The simplest array to sum is an empty one. The sum of an empty array is 0. So, if the array's length is 0, we return 0.</li>
//     <li><strong>Recursive Step</strong>: For a non-empty array, we take the first element (<code>arr[0]</code>) and add it to the result of calling <code>sumArray</code> on the remainder of the array (<code>arr.slice(1)</code>).</li>
// </ol>
// <pre><code class="language-javascript">
// const sumArray = (arr) => {
//   // Base Case: The sum of an empty array is 0.
//   if (arr.length === 0) {
//     return 0;
//   }
//   // Recursive Step: Add the first element to the sum of the rest.
//   return arr[0] + sumArray(arr.slice(1));
// };

// // How sumArray([1, 2, 3]) is evaluated:
// // 1. sumArray([1, 2, 3]) returns 1 + sumArray([2, 3])
// // 2. sumArray([2, 3])   returns 2 + sumArray([3])
// // 3. sumArray([3])       returns 3 + sumArray([])
// // 4. sumArray([])       returns 0 (Base Case)
// // The results are summed back up the call stack: 0 + 3 + 2 + 1 = 6
// </code></pre>
// <h3>📚 Key Concepts</h3>
// <ul>
//     <li><strong>Problem Decomposition</strong>: Breaking the problem down into a single element and a smaller version of the same problem (the rest of the array).</li>
//     <li><strong>Array Slicing</strong>: Using methods like <code>.slice()</code> to create the smaller subproblem for the next recursive call. Be aware that creating slices can be inefficient for very large arrays.</li>
// </ul>
// `,
// };
