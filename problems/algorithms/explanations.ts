


export const explanations: Record<string, string> = {
    'two-sum': `
### 💡 Problem Breakdown
This is a classic algorithm question. Given a list of numbers and a target sum, you need to find two numbers in the list that add up exactly to that target. The function should return the positions (indices) of these two numbers.

### ⚙️ Solution Walkthrough
The optimal solution uses a hash map (or a JavaScript \`Map\`) to solve this problem in a single pass, achieving O(n) time complexity.

\`\`\`javascript
// const nums = [2, 7, 11, 15];
// const target = 9;
// const map = new Map();
// for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//         // FIX: Escaped template literals
//         return \`[\\\${map.get(complement)}, \\\${i}]\`;
//     }
//     map.set(nums[i], i);
// }
\`\`\`

1.  **Initialization**: A \`Map\` is created. This map will store the numbers we've already seen and their corresponding indices.
2.  **Loop**: We iterate through the \`nums\` array one by one.
3.  **Calculate Complement**: In each iteration, for the current number \`nums[i]\`, we calculate its "complement" – the other number we would need to reach the target (\`complement = target - nums[i]\`).
4.  **Check the Map**: We check if this \`complement\` already exists as a key in our map.
    *   **If it exists**: We have found our pair! The value stored in the map is the index of the complement, and \`i\` is the index of the current number. We return both indices.
    *   **If it doesn't exist**: This means we haven't seen the other half of the pair yet.
5.  **Store in Map**: We add the current number \`nums[i]\` and its index \`i\` to the map. This way, in a future iteration, if we encounter its complement, we'll be able to find it.
6.  **No Solution**: If the loop finishes without finding a pair, we return a "no solution" message.

### 📚 Key Concepts
-   **Algorithm**: A step-by-step procedure for solving a problem or accomplishing some end.
-   **Time Complexity**: A measure of how long an algorithm takes to run as its input size grows. O(n) is linear time, which is very efficient for this problem.
-   **Hash Map / Map**: A data structure that stores key-value pairs and provides very fast lookups (on average O(1) or constant time). This is the key to the solution's efficiency.
`,
    'binary-search': `
### 💡 Problem Breakdown
Binary search is a highly efficient algorithm for finding an item from a **sorted** list of items. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. You do this continuously until the value is found or the interval is empty.

### ⚙️ Solution Walkthrough
The solution uses a \`while\` loop and three pointers: \`left\`, \`right\`, and \`mid\`.

\`\`\`javascript
// const nums = [2, 5, 8, 12, 16];
// const target = 12;
// let left = 0, right = nums.length - 1;
// while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) { 
//         // FIX: Escaped template literal
//         return \`Found at index: \\\${mid}\`;
//     }
//     if (nums[mid] < target) left = mid + 1;
//     else right = mid - 1;
// }
\`\`\`

1.  **Initialization**: \`left\` starts at the first index (0) and \`right\` starts at the last index. These two pointers define our current search window.
2.  **\`while (left <= right)\`**: The loop continues as long as our search window is valid.
3.  **Find the Middle**: \`const mid = Math.floor((left + right) / 2);\`. We calculate the middle index of the current window.
4.  **Compare**:
    *   **\`if (nums[mid] === t)\`**: If the middle element is our target, we've found it! Return the index.
    *   **\`if (nums[mid] < t)\`**: If the middle element is *less than* our target, we know the target must be in the right half of the window (if it exists at all). So, we discard the left half by moving our \`left\` pointer to \`mid + 1\`.
    *   **\`else\`**: If the middle element is *greater than* our target, we know the target must be in the left half. We discard the right half by moving our \`right\` pointer to \`mid - 1\`.
5.  **Not Found**: If the loop finishes, it means \`left\` has become greater than \`right\`, and the search window is empty. The target was not in the array.

### 📚 Key Concepts
-   **Divide and Conquer**: An algorithmic paradigm where you break a problem into subproblems of the same or related type, until these become simple enough to be solved directly. Binary search is a prime example.
-   **Logarithmic Time Complexity - O(log n)**: Because binary search halves the search space with each comparison, it is extremely fast. For an array of a million items, it takes at most 20 comparisons.
`,
    'bubble-sort': `
### 💡 Problem Breakdown
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller or larger elements "bubble" to their proper place.

### ⚙️ Solution Walkthrough
The solution uses a nested loop to compare and swap adjacent elements.

\`\`\`javascript
// const nums = [5,3,8,4,2];
// for(let i=0; i < nums.length; i++) {
//     for(let j=0; j < nums.length - 1 - i; j++) {
//         if (nums[j] > nums[j+1]) {
//             // Swap elements using destructuring assignment
//             [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
//         }
//     }
// }
\`\`\`

1.  **Outer Loop**: The outer loop runs from \`i = 0\` to the end of the array. The purpose of this loop is to shrink the "unsorted" part of the array. After the first pass of the outer loop, the largest element is guaranteed to be at the very end. After the second pass, the second-largest is in its correct place, and so on. This is why the inner loop's condition is \`j < nums.length - 1 - i\`; we don't need to re-check the already sorted elements at the end.
2.  **Inner Loop**: This loop does the actual comparison and swapping. It goes from the beginning of the unsorted part of the array to its end.
3.  **Comparison**: \`if (nums[j] > nums[j+1])\` checks if the current element is greater than the next one.
4.  **Swap**: If they are in the wrong order, \`[nums[j], nums[j+1]] = [nums[j+1], nums[j]]\` performs a swap using a concise ES6 destructuring assignment.

### 📚 Key Concepts
-   **Sorting Algorithm**: An algorithm that puts elements of a list into a certain order (e.g., numerical or lexicographical).
-   **In-Place Sort**: An algorithm which transforms input using no auxiliary data structure. Bubble sort is an in-place sort.
-   **Quadratic Time Complexity - O(n²)**: Bubble sort has a worst-case and average complexity of O(n²), where n is the number of items being sorted. This makes it inefficient for large lists. It's mainly used for educational purposes due to its simplicity.
`,
    'fizzbuzz': `
### 💡 Problem Breakdown
FizzBuzz is a classic programming interview question. The task is to loop through numbers from 1 to a given number \`n\`. For each number, you must check for certain conditions:
-   If the number is divisible by both 3 and 5, print "FizzBuzz".
-   If the number is divisible by 3 (but not 5), print "Fizz".
-   If the number is divisible by 5 (but not 3), print "Buzz".
-   Otherwise, print the number itself.

### ⚙️ Solution Walkthrough
The solution uses a \`for\` loop and a series of \`if...else if...else\` statements to check the conditions in the correct order.

\`\`\`javascript
// const n = 15;
// let result = [];
// for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) result.push('FizzBuzz');
//     else if (i % 3 === 0) result.push('Fizz');
//     else if (i % 5 === 0) result.push('Buzz');
//     else result.push(i);
// }
\`\`\`

1.  **Loop**: A standard \`for\` loop iterates from 1 up to and including \`n\`.
2.  **Order of Checks is Crucial**: The first check is \`if (i % 15 === 0)\`. We check for divisibility by 15 (which is 3 * 5) first. If we checked for divisibility by 3 first, then for the number 15, the code would print "Fizz" and stop, which is incorrect. By checking for the most specific condition (divisible by both) first, we ensure the logic is correct.
3.  **Modulo Operator (\`%\`)**: The modulo operator is used to check for divisibility. If \`number % divisor\` is 0, it means the number is perfectly divisible.
4.  **\`else if\` and \`else\`**: The chain of checks ensures that only one condition is met for each number. If a number isn't divisible by 15, 3, or 5, the final \`else\` block catches it and pushes the number itself to the result array.

### 📚 Key Concepts
-   **Control Flow**: Using constructs like loops and conditional statements (\`if/else\`) to direct the execution of a program.
-   **Logical Operators**: The modulo operator \`%\` is key to solving this problem efficiently.
`,
};