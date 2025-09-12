export const explanations: Record<string, string> = {
  "factorial-recursive": `
### 💡 Problem Breakdown
The task is to calculate the factorial of a number using recursion. A factorial, denoted by \`n!\`, is the product of all positive integers up to \`n\`. For example, \`5! = 5 * 4 * 3 * 2 * 1 = 120\`. A recursive function is one that calls itself to solve a smaller version of the same problem. Every recursive function needs a base case to stop the recursion and a recursive case to continue it.

### ⚙️ Solution Walkthrough
The solution directly translates the mathematical definition of factorial (\`n! = n * (n-1)!\`) into a function.
\`\`\`javascript
function factorial(n) {
  // Base Case: If n is 0 or 1, factorial is 1.
  if (n <= 1) {
    return 1;
  }
  // Recursive Case: n * factorial of (n-1)
  return n * factorial(n - 1);
}
\`\`\`
1.  **Base Case**: \`if (n <= 1)\` is the stopping condition. The factorial of 0 and 1 is 1. When the input reaches this point, the chain of function calls stops and starts returning values.
2.  **Recursive Case**: \`return n * factorial(n - 1);\` is where the function calls itself with a smaller input (\`n - 1\`). It multiplies the current number \`n\` by the result of the factorial of the number just below it. This process continues until the base case is reached.

### 📚 Key Concepts
- **Recursion**: A problem-solving technique where a function calls itself to solve smaller instances of the same problem.
- **Base Case**: The condition that terminates the recursion, preventing an infinite loop.
- **Call Stack**: The mechanism JavaScript uses to keep track of function calls. Each recursive call adds a new frame to the stack until the base case is hit, after which the stack unwinds.
`,
  "fibonacci-recursive": `
### 💡 Problem Breakdown
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. The sequence is: 0, 1, 1, 2, 3, 5, 8, 13, ... The task is to write a recursive function to find the Nth number in this sequence.

### ⚙️ Solution Walkthrough
The function implements the mathematical definition: \`fib(n) = fib(n-1) + fib(n-2)\`.
\`\`\`javascript
function fibonacci(n) {
  // Base Cases: The first two numbers in the sequence.
  if (n <= 1) {
    return n;
  }
  // Recursive Case: Sum of the previous two Fibonacci numbers.
  return fibonacci(n - 1) + fibonacci(n - 2);
}
\`\`\`
1.  **Base Cases**: \`if (n <= 1)\` handles two conditions. If \`n\` is 0, it returns 0. If \`n\` is 1, it returns 1. These are the starting points of the sequence.
2.  **Recursive Case**: \`return fibonacci(n - 1) + fibonacci(n - 2);\`. The function calls itself twice to get the two preceding numbers and then returns their sum. This creates a branching, tree-like recursion.

### 📚 Key Concepts
- **Tree Recursion**: A type of recursion where a function makes more than one recursive call in its body.
- **Computational Complexity**: This naive recursive solution is very inefficient (O(2^n)) because it re-computes the same values many times. It's a classic example used to introduce more efficient techniques like memoization.
`,
  "sum-array-recursive": `
### 💡 Problem Breakdown
The goal is to sum all numbers in an array using recursion instead of a loop. The recursive approach is to think of the problem as: "the sum of an array is the first element plus the sum of the rest of the array."

### ⚙️ Solution Walkthrough
The function takes an array, processes the first element, and calls itself on the remainder of the array.
\`\`\`javascript
function sumArray(arr) {
  // Base Case: An empty array has a sum of 0.
  if (arr.length === 0) {
    return 0;
  }
  // Recursive Case: First element + sum of the rest of the array.
  return arr[0] + sumArray(arr.slice(1));
}
\`\`\`
1.  **Base Case**: \`if (arr.length === 0)\` is the stopping condition. The sum of an empty list is 0.
2.  **Recursive Case**: \`return arr[0] + sumArray(arr.slice(1));\`. It takes the first element (\`arr[0]\`) and adds it to the result of calling \`sumArray\` on a new, smaller array that contains all elements from the second element onwards (\`arr.slice(1)\`).

### 📚 Key Concepts
- **Divide and Conquer**: The problem is broken down into a smaller version of itself (summing a smaller array) until it becomes trivial (summing an empty array).
- **Immutability**: Using \`arr.slice(1)\` is a good practice as it creates a new array for the recursive call, leaving the original array unchanged.
`,
  "power-recursive": `
### 💡 Problem Breakdown
Calculate the result of a base number raised to the power of an exponent (\`base^exponent\`) using recursion. The recursive logic is \`base^exponent = base * base^(exponent-1)\`.

### ⚙️ Solution Walkthrough
The function multiplies the base by the result of calling itself with a decremented exponent.
\`\`\`javascript
function power(base, exponent) {
  // Base Case: Any number to the power of 0 is 1.
  if (exponent === 0) {
    return 1;
  }
  // Recursive Case: base * power(base, exponent - 1)
  return base * power(base, exponent - 1);
}
\`\`\`
1.  **Base Case**: \`if (exponent === 0)\` is the stopping condition. Mathematically, any non-zero number raised to the power of 0 is 1.
2.  **Recursive Case**: \`return base * power(base, exponent - 1);\`. It multiplies the \`base\` by the result of the same function with a smaller exponent. This continues until the exponent becomes 0.

### 📚 Key Concepts
- **Mathematical Recurrence Relation**: The solution is a direct translation of the mathematical property of exponentiation into code.
- **Handling Negative Exponents**: This simple solution doesn't handle negative exponents. A more robust version would add a condition for \`exponent < 0\` and return \`1 / power(base, -exponent)\`.
`,
  "reverse-string-recursive": `
### 💡 Problem Breakdown
The task is to reverse a string using recursion. The recursive logic is: "the reverse of a string is the reverse of the rest of the string, with the first character appended to the end."

### ⚙️ Solution Walkthrough
The function repeatedly peels off the first character and appends it to the recursive result.
\`\`\`javascript
function reverseString(str) {
  // Base Case: An empty string is its own reverse.
  if (str === "") {
    return "";
  }
  // Recursive Case: reverse of the rest of the string + first char.
  return reverseString(str.substring(1)) + str.charAt(0);
}
\`\`\`
1.  **Base Case**: An empty string is the simplest case, and its reverse is itself.
2.  **Recursive Case**: The function calls itself with the string minus its first character (\`str.substring(1)\`). When that call returns the reversed "tail" of the string, it concatenates the original first character (\`str.charAt(0)\`) to the end.

### 📚 Key Concepts
- **String Manipulation**: Using string methods like \`substring()\` and \`charAt()\` to deconstruct the problem for the recursive calls.
- **Call Stack Unwinding**: The final string is built as the recursive calls finish and return, with characters being added in the reverse order of their original position.
`,
  "is-palindrome-recursive": `
### 💡 Problem Breakdown
A palindrome is a word or phrase that reads the same forwards and backward (e.g., "racecar"). The task is to determine if a string is a palindrome using recursion. The recursive logic is: "a string is a palindrome if its first and last characters are the same, AND the substring between them is also a palindrome."

### ⚙️ Solution Walkthrough
The function compares the first and last characters and, if they match, calls itself on the inner substring.
\`\`\`javascript
function isPalindrome(str) {
  // Base Case 1: Empty or single-character strings are palindromes.
  if (str.length <= 1) {
    return true;
  }
  // Base Case 2: If first and last chars don't match, it's not a palindrome.
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  // Recursive Case: Check the inner substring.
  return isPalindrome(str.substring(1, str.length - 1));
}
\`\`\`
1.  **Base Cases**: The simplest palindromes are empty or single-character strings, so we return \`true\`. A second base case is when the outer characters don't match; we can immediately return \`false\`.
2.  **Recursive Case**: If the outer characters match, the problem is reduced to checking if the smaller, inner string is also a palindrome. \`str.substring(1, str.length - 1)\` extracts this inner part.

### 📚 Key Concepts
- **Multiple Base Cases**: This problem demonstrates how having more than one stopping condition (for both success and failure) can make the recursive logic cleaner.
- **Slicing/Substrings**: The problem is made smaller in each step by "slicing off" the outer characters.
`,
  "range-of-numbers-recursive": `
### 💡 Problem Breakdown
The goal is to generate an array containing a sequence of integers from a starting number to an ending number. The recursive logic is: "the range from start to end is the range from start to end-1, with the end number appended to it."

### ⚙️ Solution Walkthrough
The function calls itself with a smaller end number and then pushes the current end number onto the result.
\`\`\`javascript
function rangeOfNumbers(startNum, endNum) {
  // Base Case: If the end is less than the start, the range is empty.
  if (endNum < startNum) {
    return [];
  } else {
    // Recursive Case: Get the range for n-1, then add n.
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
\`\`\`
1.  **Base Case**: When the \`endNum\` is smaller than the \`startNum\`, we've gone past the beginning of the range, so we return an empty array. This stops the recursion.
2.  **Recursive Case**: The function first calls itself to generate the range up to \`endNum - 1\`. Once that array is returned, it simply pushes the current \`endNum\` onto it.

### 📚 Key Concepts
- **Building Up a Result**: The final array is constructed as the call stack unwinds. Each call adds one number to the array returned by the call below it.
`,
  "greatest-common-divisor-recursive": `
### 💡 Problem Breakdown
The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both numbers without leaving a remainder. The Euclidean algorithm is a very efficient method for computing the GCD, and it has a natural recursive structure.

### ⚙️ Solution Walkthrough
The algorithm is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its remainder when divided by the smaller number. The recursive logic is \`gcd(a, b) = gcd(b, a % b)\`.
\`\`\`javascript
function gcd(a, b) {
  // Base Case: When the second number is 0, the GCD is the first number.
  if (b === 0) {
    return a;
  }
  // Recursive Case: Call gcd with b and the remainder of a divided by b.
  return gcd(b, a % b);
}
\`\`\`
1.  **Base Case**: The recursion stops when \`b\` becomes 0. At this point, \`a\` holds the GCD.
2.  **Recursive Case**: The function calls itself with the smaller number (\`b\`) as the new first argument, and the remainder (\`a % b\`) as the new second argument. This process rapidly reduces the numbers until the remainder is 0.

### 📚 Key Concepts
- **Euclidean Algorithm**: A classic and highly efficient algorithm for finding the GCD.
- **Modulo Operator (%)**: The core of the recursive step, used to find the remainder.
`,
  "flatten-array-recursive": `
### 💡 Problem Breakdown
The task is to take a nested array (an array containing other arrays) and "flatten" it into a single, one-dimensional array. For example, \`[1, [2, 3], [4, [5]]]\` should become \`[1, 2, 3, 4, 5]\`.

### ⚙️ Solution Walkthrough
The function iterates through the array. If it encounters a non-array element, it adds it to the result. If it encounters an array, it recursively calls itself on that sub-array and concatenates the result.
\`\`\`javascript
function flattenArray(arr) {
  let flat = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      // Recursive Case: Item is an array, flatten it and add to result.
      flat = flat.concat(flattenArray(item));
    } else {
      // Base Case: Item is not an array, just add it.
      flat.push(item);
    }
  }
  return flat;
}
\`\`\`
1.  **Iteration**: The function uses a loop to process each item. This is a common pattern where recursion is used inside an iterative structure.
2.  **Base Case (within the loop)**: If \`!Array.isArray(item)\`, the item is a simple value. We can't break it down further, so we just add it to our result.
3.  **Recursive Case (within the loop)**: If \`Array.isArray(item)\`, we need to flatten this inner array. We do this by calling \`flattenArray(item)\` and concatenating its flattened result to our main result array.

### 📚 Key Concepts
- **Type Checking**: Using \`Array.isArray()\` is crucial to distinguish between elements that are part of the "base case" and those that require a recursive call.
- **Combining Iteration and Recursion**: Recursion doesn't always replace loops. Sometimes, they work together effectively to solve a problem.
`,
  "sum-of-digits-recursive": `
### 💡 Problem Breakdown
The goal is to find the sum of all digits in a given integer. For example, for the number 123, the sum is 1 + 2 + 3 = 6. The recursive logic is: "the sum of digits of a number is the last digit plus the sum of digits of the rest of the number."

### ⚙️ Solution Walkthrough
The function uses the modulo operator (\`%\`) to get the last digit and integer division to get the rest of the number.
\`\`\`javascript
function sumDigits(n) {
  // Base Case: If the number is a single digit, return the number itself.
  if (n < 10) {
    return n;
  }
  // Recursive Case: Last digit + sum of the rest of the number.
  const lastDigit = n % 10;
  const remainingNumber = Math.floor(n / 10);
  return lastDigit + sumDigits(remainingNumber);
}
\`\`\`
1.  **Base Case**: When the number is less than 10, it's a single digit, so we can't break it down further. We just return that digit.
2.  **Recursive Case**: We extract the last digit using \`n % 10\`. We get the rest of the number by dividing by 10 and removing the decimal part with \`Math.floor()\`. Then, we add the last digit to the result of the recursive call on the remaining number.

### 📚 Key Concepts
- **Mathematical Operators**: The modulo (\`%\`) and division operators are key to deconstructing the number for the recursive calls.
- **Integer Arithmetic**: Using \`Math.floor()\` is essential for correctly removing the last digit and reducing the problem size.
`,
  "binary-search-recursive": `
### 💡 Problem Breakdown
Binary search is a highly efficient algorithm for finding an item in a **sorted** array. It works by repeatedly dividing the search interval in half. The recursive logic is to look at the middle element: if it's the target, we're done. If the target is smaller, we binary-search the left half. If the target is larger, we binary-search the right half.

### ⚙️ Solution Walkthrough
A helper function is often used to manage the changing search boundaries (left and right indices).
\`\`\`javascript
function binarySearch(sortedArr, target) {
  function search(arr, t, left, right) {
    // Base Case: If the search window is invalid, target is not present.
    if (left > right) {
      return -1; // Or false
    }
    const mid = Math.floor((left + right) / 2);
    // Base Case: Target found.
    if (arr[mid] === t) {
      return mid;
    }
    // Recursive Cases
    if (arr[mid] > t) {
      return search(arr, t, left, mid - 1); // Search left half
    } else {
      return search(arr, t, mid + 1, right); // Search right half
    }
  }
  return search(sortedArr, target, 0, sortedArr.length - 1);
}
\`\`\`
1.  **Base Case**: The primary failure condition is when the \`left\` index crosses the \`right\` index, meaning the search space is empty. The success base case is finding the target at \`mid\`.
2.  **Recursive Cases**: The problem is reduced by cutting the search space in half. We call the function again with updated \`left\` or \`right\` boundaries.

### 📚 Key Concepts
- **Divide and Conquer**: A prime example of this algorithmic paradigm. The problem size is halved at each step.
- **Logarithmic Time Complexity (O(log n))**: Because the search space is halved with each call, binary search is extremely fast, even on very large arrays.
`,
  "count-occurrences-recursive": `
### 💡 Problem Breakdown
The task is to count how many times a specific element appears in an array using recursion. The recursive logic is: "the count in an array is 1 + the count in the rest of the array if the first element is a match, otherwise it's 0 + the count in the rest of the array."

### ⚙️ Solution Walkthrough
The function checks the first element of the array and adds the result to a recursive call on the rest of the array.
\`\`\`javascript
function countOccurrences(arr, target) {
  // Base Case: An empty array has 0 occurrences.
  if (arr.length === 0) {
    return 0;
  }
  // Check if the first element is a match.
  const match = (arr[0] === target) ? 1 : 0;
  // Recursive Case: Result from this element + result from the rest.
  return match + countOccurrences(arr.slice(1), target);
}
\`\`\`
1.  **Base Case**: If the array is empty, the count is 0.
2.  **Recursive Case**: The function determines if the first element matches the target. It adds the result (1 for a match, 0 for no match) to the result of calling itself on the rest of the array. The total count is accumulated as the call stack unwinds.

### 📚 Key Concepts
- **Accumulation via Return**: The final sum is built up by the return values from the entire call stack.
- **Ternary Operator**: A concise way to write the if-else logic for checking the match.
`,
  "sum-nested-object-recursive": `
### 💡 Problem Breakdown
The goal is to traverse a nested object and find the sum of all values that are of the number type. This requires checking every property at every level of the object.

### ⚙️ Solution Walkthrough
The recursive function iterates through the keys of an object. If a value is a number, it's added to a running total. If a value is another object, the function calls itself on that nested object and adds the returned sum.
\`\`\`javascript
function sumNestedObject(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      // Recursive Case: Add the sum from the nested object.
      sum += sumNestedObject(obj[key]);
    }
  }
  return sum;
}
\`\`\`
1.  **Iteration**: A \`for...in\` loop is used to visit every key in the current object.
2.  **Base Case (within the loop)**: If a value is a number (\`typeof obj[key] === 'number'\`), it's a "leaf" in our search. We add it directly to our sum.
3.  **Recursive Case (within the loop)**: If a value is an object, we must go deeper. We call \`sumNestedObject\` on this inner object and add its result to our running total.

### 📚 Key Concepts
- **Object Traversal**: Using a loop to access all properties of an object.
- **Type Checking**: Using \`typeof\` is essential to distinguish between numbers (base case) and objects (recursive case).
`,
  "tree-traversal-conceptual": `
### 💡 Problem Breakdown
A tree is a hierarchical data structure. Depth-First Search (DFS) is a common way to visit every node. There are three main DFS traversal orders, defined by the order in which you visit the "root" node relative to its left and right children.

### ⚙️ Solution Walkthrough
All three traversals are naturally recursive. For a given node:
1.  **Pre-order**: Process the **Root**'s data, then recursively traverse the **Left** subtree, then recursively traverse the **Right** subtree. (Root, Left, Right)
2.  **In-order**: Recursively traverse the **Left** subtree, then process the **Root**'s data, then recursively traverse the **Right** subtree. (Left, Root, Right)
3.  **Post-order**: Recursively traverse the **Left** subtree, then recursively traverse the **Right** subtree, then process the **Root**'s data. (Left, Right, Root)
\`\`\`javascript
// Conceptual code for In-order traversal
function inOrder(node) {
  if (node === null) return; // Base Case
  inOrder(node.left);       // Left
  console.log(node.value);  // Root
  inOrder(node.right);      // Right
}
\`\`\`

### 📚 Key Concepts
- **Binary Tree**: A tree data structure where each node has at most two children.
- **Recursion on Data Structures**: Recursion is a very natural fit for traversing tree-like data structures because each subtree is a smaller version of the overall tree.
- **Use Cases**: Pre-order is useful for creating a copy of a tree. In-order on a Binary Search Tree visits nodes in sorted order. Post-order is useful for deleting nodes from a tree.
`,
  "permutations-string-recursive": `
### 💡 Problem Breakdown
The goal is to find all possible orderings (permutations) of the characters in a string. For "abc", we want to find "abc", "acb", "bac", "bca", "cab", "cba".

### ⚙️ Solution Walkthrough
This is a classic backtracking problem. The function iterates through each character of the string. For each character, it's chosen as the first character of a permutation. Then, the function recursively finds all permutations of the *remaining* characters and prepends the chosen character.
\`\`\`javascript
function stringPermutations(str) {
  if (str.length <= 1) return [str]; // Base case
  
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    
    // Recursive call
    const permsOfRest = stringPermutations(remainingChars);
    
    // Prepend the current char to each permutation of the rest
    for (const perm of permsOfRest) {
      result.push(char + perm);
    }
  }
  return result;
}
\`\`\`
1.  **Base Case**: A string with one or zero characters has only one permutation: itself.
2.  **Recursive Step**: We loop through the string. In each iteration, we pick a character to be the "prefix", recursively find all permutations of the *other* characters, and then combine the prefix with each of those sub-permutations.

### 📚 Key Concepts
- **Backtracking**: An algorithmic technique for solving problems recursively by trying to build a solution incrementally.
- **Divide and Conquer**: The problem of permuting N characters is broken down into N subproblems of permuting N-1 characters.
`,
  "collatz-conjecture-recursive": `
### 💡 Problem Breakdown
The Collatz conjecture states that for any positive integer, repeatedly applying the rules (n/2 if even, 3n+1 if odd) will eventually lead to 1. The task is to count how many steps this takes using recursion.

### ⚙️ Solution Walkthrough
The recursive function implements the rules and passes an incrementing step counter with each call.
\`\`\`javascript
function collatzSteps(n, steps = 0) {
  // Base Case: We've reached 1.
  if (n === 1) {
    return steps;
  }
  
  // Recursive Cases based on the rules.
  if (n % 2 === 0) {
    return collatzSteps(n / 2, steps + 1);
  } else {
    return collatzSteps(3 * n + 1, steps + 1);
  }
}
\`\`\`
1.  **Base Case**: The process stops when \`n\` equals 1. At this point, we return the total number of steps accumulated.
2.  **Recursive Cases**: There are two recursive paths. If the number is even, we call the function with \`n / 2\`. If it's odd, we call it with \`3 * n + 1\`. In both cases, we increment the \`steps\` counter.

### 📚 Key Concepts
- **State Passing**: The \`steps\` parameter is used to pass state (the current count) down through the recursive calls.
- **Default Parameters**: Using \`steps = 0\` provides a clean way to initialize the counter on the first call without needing a separate helper function.
`,
  "find-all-paths-in-grid-recursive": `
### 💡 Problem Breakdown
The task is to find the total number of unique paths from the top-left corner (0,0) to the bottom-right corner (m-1, n-1) of an m x n grid, with the only allowed moves being right and down.

### ⚙️ Solution Walkthrough
The recursive logic is: "the number of paths to get to the destination from cell (r, c) is the sum of the paths from the cell below it (r+1, c) and the paths from the cell to its right (r, c+1)."
\`\`\`javascript
function countPaths(r, c, m, n) {
  // Base Case: If we go out of bounds, this is not a valid path.
  if (r >= m || c >= n) {
    return 0;
  }
  // Base Case: If we reach the destination, this is one valid path.
  if (r === m - 1 && c === n - 1) {
    return 1;
  }
  // Recursive Case: Sum of paths from moving down and paths from moving right.
  return countPaths(r + 1, c, m, n) + countPaths(r, c + 1, m, n);
}
\`\`\`
1.  **Base Cases**: Any path that goes off the grid is invalid (0 paths). A path that reaches the target destination is valid (1 path).
2.  **Recursive Case**: For any other cell, the total paths are the sum of the paths from the two cells it can move to.

### 📚 Key Concepts
- **Dynamic Programming**: This problem is a classic example of dynamic programming, where the solution to a larger problem is built from the solutions of its subproblems. The recursive solution is clear but inefficient due to re-calculating the same subproblems. Memoization would optimize it significantly.
`,
  "merge-sort-recursive": `
### 💡 Problem Breakdown
Merge Sort is a highly efficient, stable sorting algorithm. It's a prime example of the "divide and conquer" paradigm. The core idea is to break an array down into smaller and smaller pieces until they are trivially sorted (arrays of size 0 or 1), and then merge them back together in sorted order.

### ⚙️ Solution Walkthrough
The process has two main parts: the recursive splitting and the iterative merging.
1.  **Divide (Recursive Step)**: The main \`mergeSort\` function recursively splits the array in half until it has arrays with one or zero elements.
2.  **Conquer (Merge)**: A helper function, \`merge\`, takes two sorted sub-arrays and merges them into a single sorted array. It does this by comparing the first elements of each sub-array and pushing the smaller one to the result, repeating until one sub-array is empty, then appending the remainder.
\`\`\`javascript
function mergeSort(arr) {
  // Base Case: An array with 0 or 1 element is already sorted.
  if (arr.length <= 1) return arr;
  
  // Recursive Step: Split the array.
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  // Conquer Step: Merge the sorted halves.
  return merge(left, right);
}
// (merge helper function would be defined here)
\`\`\`

### 📚 Key Concepts
- **Divide and Conquer**: The algorithm's strategy: divide the problem into subproblems, solve the subproblems recursively, and then combine the results.
- **Time Complexity**: Merge Sort has a time complexity of O(n log n) in all cases (worst, average, and best), making it very reliable.
- **Space Complexity**: It requires O(n) auxiliary space to store the merged sub-arrays.
`,
  "is-even-odd-recursive": `
### 💡 Problem Breakdown
The challenge is to determine if a positive integer is even or odd using recursion, without using the modulo (\`%\`) operator. The recursive logic relies on the property that a number \`n\` is even if and only if \`n-2\` is even.

### ⚙️ Solution Walkthrough
The function repeatedly subtracts 2 from the number until it reaches a base case of 0 or 1.
\`\`\`javascript
function isEven(n) {
  // Base Case: 0 is even.
  if (n === 0) {
    return true;
  }
  // Base Case: 1 is odd.
  if (n === 1) {
    return false;
  }
  // Recursive Case: Check the number two less than the current one.
  return isEven(n - 2);
}
\`\`\`
1.  **Base Cases**: The simplest cases are 0 (which is even) and 1 (which is odd). These are our stopping conditions.
2.  **Recursive Case**: For any number greater than 1, we call the function with \`n - 2\`. This process continues, effectively peeling off 2 at a time, until the number is reduced to either 0 or 1, determining its parity.

### 📚 Key Concepts
- **Problem Reduction**: The problem is simplified by reducing the input number in a way that preserves the property we are testing (parity).
- **Mutual Recursion (Alternative)**: This problem can also be solved with mutual recursion, where an \`isEven\` function calls an \`isOdd\` function, and vice-versa.
`,
  "array-of-multiples-recursive": `
### 💡 Problem Breakdown
The goal is to create an array of multiples of a number (\`num\`) for a given length. For example, for \`num=7, length=5\`, the result should be \`[7, 14, 21, 28, 35]\`. The recursive logic is: "the array of \`n\` multiples is the array of \`n-1\` multiples, with the nth multiple appended."

### ⚙️ Solution Walkthrough
The function calls itself with a decremented length and then calculates and pushes the current multiple onto the returned array.
\`\`\`javascript
function arrayOfMultiples(num, length) {
  // Base Case: If length is 0, we want an empty array.
  if (length === 0) {
    return [];
  }
  // Recursive Case: Get the array for length-1.
  const multiples = arrayOfMultiples(num, length - 1);
  // Add the current multiple.
  multiples.push(num * length);
  return multiples;
}
\`\`\`
1.  **Base Case**: The simplest case is a length of 0, which results in an empty array.
2.  **Recursive Case**: The function first gets the array of multiples for a smaller length (\`length - 1\`). Then, it calculates the current multiple (\`num * length\`) and adds it to the end of that array.

### 📚 Key Concepts
- **Building Up a Result**: Similar to the "range of numbers" problem, the final array is constructed as the call stack unwinds, with each call adding one new element.
`,
  "product-of-array-recursive": `
### 💡 Problem Breakdown
The task is to find the product of all numbers in an array using recursion. This is analogous to the recursive sum problem. The logic is: "the product of an array is the first element multiplied by the product of the rest of the array."

### ⚙️ Solution Walkthrough
The function multiplies the first element by the result of calling itself on the rest of the array.
\`\`\`javascript
function productOfArray(arr) {
  // Base Case: The product of an empty array is 1 (the multiplicative identity).
  if (arr.length === 0) {
    return 1;
  }
  // Recursive Case: First element * product of the rest.
  return arr[0] * productOfArray(arr.slice(1));
}
\`\`\`
1.  **Base Case**: For multiplication, the identity element is 1. If we returned 0 for an empty array, the entire product would incorrectly become 0. So, when the array is empty, we return 1.
2.  **Recursive Case**: It takes the first element (\`arr[0]\`) and multiplies it by the result of the recursive call on the rest of the array (\`arr.slice(1)\`).

### 📚 Key Concepts
- **Identity Element**: Understanding the correct identity element (1 for multiplication, 0 for addition) is crucial for the base case of aggregation problems.
`,
  "find-in-nested-array-recursive": `
### 💡 Problem Breakdown
The goal is to determine if a target value exists anywhere within a potentially deeply nested array. This requires a search that can dive into sub-arrays.

### ⚙️ Solution Walkthrough
The function iterates through the top-level array. If it finds the target, it returns true. If it finds a sub-array, it recursively calls itself to search within that sub-array. If the recursive call finds the target, it propagates \`true\` all the way up.
\`\`\`javascript
function findInNestedArray(arr, target) {
  for (const item of arr) {
    // Base Case: Found the target.
    if (item === target) {
      return true;
    }
    // Recursive Case: If item is an array, search within it.
    if (Array.isArray(item)) {
      if (findInNestedArray(item, target)) {
        return true; // Propagate success upwards.
      }
    }
  }
  // Base Case: Reached the end of this array without finding the target.
  return false;
}
\`\`\`
1.  **Iteration**: A loop is used to check each element at the current level.
2.  **Base Cases (within loop)**: A successful base case is \`item === target\`. A partial failure case is reaching the end of the loop without finding the target at the current level.
3.  **Recursive Case (within loop)**: If an element is an array, the function calls itself. Crucially, if that recursive call returns \`true\`, the current function must also immediately return \`true\`.

### 📚 Key Concepts
- **Early Exit**: The function is designed to stop and return \`true\` as soon as the target is found, rather than continuing to search unnecessarily.
- **Propagation**: The boolean result from deep recursive calls must be checked and propagated up the call stack.
`,
  "exponentiation-by-squaring-recursive": `
### 💡 Problem Breakdown
This is a more efficient way to calculate powers, especially for large exponents. The standard recursive method takes O(n) steps, but this method takes O(log n). The logic relies on these properties:
- \`x^n = (x^2)^(n/2)\` if n is even.
- \`x^n = x * x^(n-1)\` if n is odd.

### ⚙️ Solution Walkthrough
The function checks if the exponent is even or odd and applies the appropriate recursive rule.
\`\`\`javascript
function fastPower(base, exp) {
  // Base Cases
  if (exp === 0) return 1;
  if (exp === 1) return base;
  
  // Recursive Cases
  if (exp % 2 === 0) { // Even exponent
    const half = fastPower(base, exp / 2);
    return half * half;
  } else { // Odd exponent
    const half = fastPower(base, (exp - 1) / 2);
    return base * half * half;
  }
}
\`\`\`
1.  **Base Cases**: Power of 0 is 1, power of 1 is the base itself.
2.  **Recursive Cases**:
    *   If the exponent is even, we recursively calculate the power for \`exp / 2\` just once, store it, and then square the result. This avoids redundant calculations.
    *   If the exponent is odd, we reduce it to an even case by handling one multiplication of the base separately.

### 📚 Key Concepts
- **Time Complexity Optimization**: A clear example of how a different recursive approach can lead to a significant performance improvement.
- **Divide and Conquer**: The exponent is effectively halved at each step, leading to logarithmic complexity.
`,
  "decimal-to-binary-recursive": `
### 💡 Problem Breakdown
The task is to convert a non-negative integer from its decimal representation to its binary representation (as a string). The logic for this conversion is inherently recursive: find the last binary digit (which is \`n % 2\`), then find the binary representation for the rest of the number (\`n / 2\`).

### ⚙️ Solution Walkthrough
The function calculates the binary string for \`n / 2\` and appends the remainder of \`n / 2\`.
\`\`\`javascript
function decimalToBinary(n) {
  // Base Case: 0 in decimal is 0 in binary.
  if (n === 0) {
    return '0';
  }
  // Base Case: Stop when the number is fully divided.
  if (n === 1) {
    return '1';
  }
  // Recursive Case
  return decimalToBinary(Math.floor(n / 2)) + (n % 2);
}
\`\`\`
1.  **Base Cases**: The recursion stops when the number is reduced to 1 or 0.
2.  **Recursive Case**: The function calls itself on the number integer-divided by 2. This gets the binary representation for the "left part" of the final string. It then appends the current remainder (\`n % 2\`), which is the next binary digit.

### 📚 Key Concepts
- **Base Conversion**: The algorithm is a direct implementation of the standard method for converting between number bases.
- **String Concatenation**: The final binary string is built up as the call stack unwinds.
`,
  "replicate-string-recursive": `
### 💡 Problem Breakdown
The goal is to create a new string by repeating a given string a certain number of times. For example, replicating "ha" 3 times gives "hahaha". The recursive logic: "replicating a string \`n\` times is the string itself, plus the result of replicating it \`n-1\` times."

### ⚙️ Solution Walkthrough
The function concatenates the string with the result of calling itself with a decremented counter.
\`\`\`javascript
function replicate(str, times) {
  // Base Case: If times is 0 or less, result is an empty string.
  if (times <= 0) {
    return "";
  }
  // Recursive Case
  return str + replicate(str, times - 1);
}
\`\`\`
1.  **Base Case**: When the \`times\` counter reaches 0, we stop and return an empty string.
2.  **Recursive Case**: The function returns the original string plus the result of the recursive call with \`times - 1\`. The final string is built as the stack unwinds.

### 📚 Key Concepts
- **Simple Linear Recursion**: A straightforward example of a recursive function that reduces a problem by a single step in each call.
`,
  "recursive-every": `
### 💡 Problem Breakdown
The task is to re-implement the functionality of the \`Array.prototype.every\` method using recursion. The \`every\` method tests whether all elements in the array pass the test implemented by the provided function. The recursive logic is: "every element passes if the first element passes AND every element in the rest of the array passes."

### ⚙️ Solution Walkthrough
The function checks the first element with the predicate. If it fails, it returns false immediately. Otherwise, it calls itself on the rest of the array.
\`\`\`javascript
function recursiveEvery(arr, predicate) {
  // Base Case: An empty array vacuously satisfies the condition.
  if (arr.length === 0) {
    return true;
  }
  // Check the first element. If it fails, the whole thing fails.
  if (!predicate(arr[0])) {
    return false;
  }
  // Recursive Case: Check the rest of the array.
  return recursiveEvery(arr.slice(1), predicate);
}
\`\`\`
1.  **Base Case**: An empty array is considered to have all its (zero) elements pass the test, so we return \`true\`.
2.  **Failure Case**: We can exit early. If the predicate fails for the current first element, the result for the whole array must be \`false\`.
3.  **Recursive Case**: If the first element passes, the result now depends entirely on whether all elements in the rest of the array also pass.

### 📚 Key Concepts
- **Predicate Function**: A function that returns a boolean, used as a test.
- **Short-circuiting**: The logic returns \`false\` as soon as a failing element is found, which is more efficient than checking every single element.
`,
  "recursive-some": `
### 💡 Problem Breakdown
The task is to re-implement the functionality of \`Array.prototype.some\` using recursion. The \`some\` method tests whether at least one element in the array passes the test implemented by the provided function. The recursive logic is: "some element passes if the first element passes OR if some element in the rest of the array passes."

### ⚙️ Solution Walkthrough
The function checks the first element with the predicate. If it passes, it returns true immediately. Otherwise, the result depends on the rest of the array.
\`\`\`javascript
function recursiveSome(arr, predicate) {
  // Base Case: No element in an empty array can satisfy the condition.
  if (arr.length === 0) {
    return false;
  }
  // Check the first element. If it passes, the whole thing passes.
  if (predicate(arr[0])) {
    return true;
  }
  // Recursive Case: Check the rest of the array.
  return recursiveSome(arr.slice(1), predicate);
}
\`\`\`
1.  **Base Case**: If the array is empty, no element was found that passed the test, so we return \`false\`.
2.  **Success Case**: We can exit early. If the predicate passes for the current first element, the result for the whole array must be \`true\`.
3.  **Recursive Case**: If the first element fails, the result now depends entirely on whether any element in the rest of the array passes.

### 📚 Key Concepts
- **Short-circuiting**: The logic returns \`true\` as soon as a passing element is found, which is more efficient.
`,
  "recursive-filter": `
### 💡 Problem Breakdown
The goal is to re-implement the functionality of \`Array.prototype.filter\` using recursion. The \`filter\` method creates a new array with all elements that pass a test. The recursive logic: "the filtered version of an array is the first element (if it passes the test) concatenated with the filtered version of the rest of the array."

### ⚙️ Solution Walkthrough
The function recursively filters the tail of the array and then decides whether to prepend the head of the array to the result.
\`\`\`javascript
function recursiveFilter(arr, predicate) {
  // Base Case: Filtering an empty array results in an empty array.
  if (arr.length === 0) {
    return [];
  }
  const first = arr[0];
  const rest = arr.slice(1);
  // Recursive Case: Get the filtered version of the rest of the array.
  const filteredRest = recursiveFilter(rest, predicate);
  
  if (predicate(first)) {
    // If the first element passes, include it.
    return [first, ...filteredRest];
  } else {
    // Otherwise, don't include it.
    return filteredRest;
  }
}
\`\`\`
1.  **Base Case**: An empty array results in an empty filtered array.
2.  **Recursive Case**: The function first solves the subproblem: filtering the rest of the array (\`rest\`). Then, it checks if the current first element (\`first\`) should be included. It constructs the final array by prepending \`first\` to the \`filteredRest\` if it passes the test, or just returning \`filteredRest\` if it doesn't.

### 📚 Key Concepts
- **Concatenation**: The final array is built by combining results from the recursive calls.
- **Spread Syntax (\`...\`)**: A clean way to prepend an element to the recursively generated array.
`,
  "recursive-map": `
### 💡 Problem Breakdown
The goal is to re-implement the functionality of \`Array.prototype.map\` using recursion. The \`map\` method creates a new array by applying a function to every element. The recursive logic: "the mapped version of an array is the result of applying the function to the first element, concatenated with the mapped version of the rest of the array."

### ⚙️ Solution Walkthrough
The function applies the mapper to the first element and prepends it to the recursive result of mapping the rest of the array.
\`\`\`javascript
function recursiveMap(arr, mapper) {
  // Base Case: Mapping an empty array results in an empty array.
  if (arr.length === 0) {
    return [];
  }
  
  // Apply mapper to the first element.
  const mappedFirst = mapper(arr[0]);
  
  // Recursive Case: Map the rest of the array.
  const mappedRest = recursiveMap(arr.slice(1), mapper);
  
  // Combine the results.
  return [mappedFirst, ...mappedRest];
}
\`\`\`
1.  **Base Case**: An empty array maps to an empty array.
2.  **Recursive Case**: The function first applies the \`mapper\` function to the current first element. Then, it recursively calls itself to get the mapped version of the rest of the array. Finally, it combines the \`mappedFirst\` element with the \`mappedRest\` array.

### 📚 Key Concepts
- **Transformation**: The core idea is transforming each element and building a new data structure with the transformed values.
`,
  "tower-of-hanoi-conceptual": `
### 💡 Problem Breakdown
The Tower of Hanoi is a classic mathematical puzzle. It consists of three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top. The objective is to move the entire stack to another rod, obeying the following simple rules:
1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
3. No disk may be placed on top of a smaller disk.

### ⚙️ Solution Walkthrough
The recursive solution is surprisingly elegant and breaks the problem down into three steps. To move \`n\` disks from a source rod to a destination rod using an auxiliary rod:
1. Move \`n-1\` disks from the source rod to the auxiliary rod (using the destination rod as temporary).
2. Move the nth (largest) disk from the source rod to the destination rod.
3. Move the \`n-1\` disks from the auxiliary rod to the destination rod (using the source rod as temporary).
\`\`\`javascript
function towerOfHanoi(n, source, auxiliary, destination) {
    // Base Case: If there is only one disk, move it directly.
    if (n === 1) {
        console.log(\`Move disk 1 from \${source} to \${destination}\`);
        return;
    }
    // Recursive Step 1
    towerOfHanoi(n - 1, source, destination, auxiliary);
    // Step 2: Move the largest disk
    console.log(\`Move disk \${n} from \${source} to \${destination}\`);
    // Recursive Step 3
    towerOfHanoi(n - 1, auxiliary, source, destination);
}
\`\`\`

### 📚 Key Concepts
- **Elegant Recursion**: This problem is a prime example of how a complex-sounding problem can have a very simple and elegant recursive solution.
- **Problem Decomposition**: The core idea is decomposing the problem of moving 'n' disks into smaller problems of moving 'n-1' disks.
`,
  "count-consonants-recursive": `
### 💡 Problem Breakdown
The task is to count the number of consonants in a string using recursion. This is similar to counting vowels. The logic is: "the consonant count is 1 + the count of the rest of the string if the first character is a consonant, otherwise it's 0 + the count of the rest."

### ⚙️ Solution Walkthrough
The function checks if the first character is a consonant and adds the result to a recursive call on the rest of the string.
\`\`\`javascript
function countConsonants(str) {
  // Base Case: An empty string has 0 consonants.
  if (str === "") return 0;

  const vowels = "aeiou";
  const firstChar = str[0].toLowerCase();
  let isConsonant = 0;

  // Check if it's a letter and not a vowel.
  if (firstChar >= 'a' && firstChar <= 'z' && !vowels.includes(firstChar)) {
    isConsonant = 1;
  }
  
  // Recursive Case
  return isConsonant + countConsonants(str.slice(1));
}
\`\`\`
1.  **Base Case**: An empty string has zero consonants.
2.  **Recursive Case**: The function first checks if the character is a letter and not a vowel. It adds 1 or 0 to the result of calling itself on the rest of the string.

### 📚 Key Concepts
- **Character Classification**: The logic requires checking if a character falls within the alphabet and is not a vowel.
- **Case Insensitivity**: Converting the character to lowercase simplifies the vowel check.
`,
  "pascals-triangle-recursive": `
### 💡 Problem Breakdown
Pascal's Triangle is a triangular array of numbers where each number is the sum of the two numbers directly above it. The edges of the triangle are all 1s. The value of an entry in the nth row and kth column is given by the binomial coefficient C(n, k). The recursive definition is \`C(n, k) = C(n-1, k-1) + C(n-1, k)\`.

### ⚙️ Solution Walkthrough
A recursive function can be defined to find the value at a specific row and column. To get the whole row, this function would be called for each column.
\`\`\`javascript
function getValue(row, col) {
  // Base Case: The edges of the triangle are 1.
  if (col === 0 || col === row) {
    return 1;
  }
  // Recursive Case: Sum of the two elements above it.
  return getValue(row - 1, col - 1) + getValue(row - 1, col);
}

function getPascalsRow(rowIndex) {
  const row = [];
  for (let i = 0; i <= rowIndex; i++) {
    row.push(getValue(rowIndex, i));
  }
  return row;
}
\`\`\`
1.  **Base Cases**: The values at the edges (where column is 0 or column equals the row number) are always 1.
2.  **Recursive Case**: Any other value is the sum of the two values in the row above it. This leads to a tree-like recursion that is inefficient but demonstrates the principle.

### 📚 Key Concepts
- **Binomial Coefficients**: The numbers in Pascal's Triangle correspond to binomial coefficients, which have applications in probability and combinatorics.
- **Memoization**: Like the Fibonacci sequence, this naive recursive solution is very inefficient. Caching the results of \`getValue(row, col)\` would dramatically improve performance.
`,
  "search-nested-object-recursive": `
### 💡 Problem Breakdown
The task is to find the value associated with a specific key, which might be located deep inside a nested object.

### ⚙️ Solution Walkthrough
The recursive function iterates through the keys of the current object. If it finds the target key, it returns the value. If it encounters another object, it recursively searches within that object.
\`\`\`javascript
function findInObject(obj, keyToFind) {
  // Check the current level of the object.
  if (Object.prototype.hasOwnProperty.call(obj, keyToFind)) {
    return obj[keyToFind];
  }
  
  // If not found, search in nested objects.
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // Recursive call
      const result = findInObject(obj[key], keyToFind);
      // If the key was found in the nested call, propagate the result up.
      if (result !== undefined) {
        return result;
      }
    }
  }
  
  // Return undefined if not found anywhere.
  return undefined;
}
\`\`\`
1.  **Base Case (Success)**: If the current object has the key we're looking for, we've found it and can return the value.
2.  **Recursive Step**: If the key isn't at the current level, we loop through the object's properties. If a property's value is another object, we recursively call our search function on it.
3.  **Propagation**: It's crucial to check the result of the recursive call. If it's not \`undefined\`, it means the key was found deeper in the structure, and we must return that result immediately.

### 📚 Key Concepts
- **Depth-First Search (DFS)**: This is essentially a DFS algorithm applied to an object's structure.
- **Safe Property Checking**: Using \`Object.prototype.hasOwnProperty.call(obj, key)\` is safer than a simple \`if (obj[key])\` check, as it correctly handles cases where a property might exist but have a "falsy" value (like \`0\`, \`false\`, or an empty string).
`,
  "count-down-up-recursive": `
### 💡 Problem Breakdown
The goal is to create a sequence that counts down from a number N to 1, and then back up to N. For N=3, the output would be "3, 2, 1, 2, 3". This demonstrates how the call stack works.

### ⚙️ Solution Walkthrough
The function logs the number, makes the recursive call, and then logs the number again after the recursive call returns.
\`\`\`javascript
function countDownUp(n) {
  // Log during the "winding" phase (going down).
  console.log(n);
  
  if (n > 1) {
    // Recursive call is in the middle.
    countDownUp(n - 1);
  }
  
  // Log during the "unwinding" phase (coming back up).
  if (n > 1) { // Prevent double-logging the base case
      console.log(n);
  }
}
\`\`\`
1.  **Winding the Stack**: As the function is called recursively (\`countDownUp(3)\`, \`countDownUp(2)\`, \`countDownUp(1)\`), the first \`console.log(n)\` in each call executes. This prints "3", then "2", then "1".
2.  **Unwinding the Stack**: When \`countDownUp(1)\` finishes, control returns to the \`countDownUp(2)\` call. The line *after* the recursive call now executes: \`console.log(n)\`, which prints "2". Then control returns to \`countDownUp(3)\`, which prints "3".

### 📚 Key Concepts
- **Call Stack Execution Flow**: This problem is a perfect illustration of code executing both before (winding) and after (unwinding) a recursive call, demonstrating the LIFO (Last-In, First-Out) nature of the call stack.
`,
  "remove-duplicates-recursive": `
### 💡 Problem Breakdown
The task is to remove duplicate elements from an array using recursion. The logic: "the unique version of an array is the first element, plus the unique version of the rest of the array, but only if the rest of the array doesn't already include the first element."

### ⚙️ Solution Walkthrough
A common recursive approach checks if the first element is present in the rest of the array.
\`\`\`javascript
function removeDuplicates(arr) {
  // Base Case: An empty array has no duplicates.
  if (arr.length === 0) {
    return [];
  }
  
  const first = arr[0];
  const rest = arr.slice(1);
  
  // Recursively process the rest of the array first.
  const uniqueRest = removeDuplicates(rest);
  
  // If the first element is not in the unique version of the rest, prepend it.
  if (!uniqueRest.includes(first)) {
    return [first, ...uniqueRest];
  } else {
    // Otherwise, just return the unique rest.
    return uniqueRest;
  }
}
\`\`\`
1.  **Base Case**: An empty array is the simplest case.
2.  **Recursive Step**: First, we solve the subproblem: find the unique elements in the rest of the array. Then, we make a decision about the current first element. If it's already in the \`uniqueRest\`, we discard it. Otherwise, we prepend it.

### 📚 Key Concepts
- **Set-like Behavior**: This recursive function effectively mimics the behavior of a Set, which only stores unique values. An iterative solution using a \`Set\` object (\`[...new Set(arr)]\`) is far more efficient but this demonstrates the recursive thought process.
`,
  "string-contains-char-recursive": `
### 💡 Problem Breakdown
The goal is to determine if a string contains a specific character using recursion. The recursive logic is: "a string contains the character if its first character is a match, OR if the rest of the string contains the character."

### ⚙️ Solution Walkthrough
The function checks the first character and, if it's not a match, calls itself on the rest of the string.
\`\`\`javascript
function contains(str, char) {
  // Base Case 1: An empty string can't contain the character.
  if (str.length === 0) {
    return false;
  }
  // Base Case 2: The first character is a match.
  if (str[0] === char) {
    return true;
  }
  // Recursive Case: Check the rest of the string.
  return contains(str.slice(1), char);
}
\`\`\`
1.  **Base Cases**: The failure case is an empty string. The success case is finding the character at the current first position.
2.  **Recursive Case**: If neither base case is met, the result depends entirely on the search in the rest of the string.

### 📚 Key Concepts
- **Short-circuiting**: The function returns \`true\` immediately upon finding the first match, making it efficient.
`,
  "length-of-array-recursive": `
### 💡 Problem Breakdown
The challenge is to compute the length of an array using recursion, without using the built-in \`.length\` property. The recursive logic: "the length of an array is 1 plus the length of the array without its first element."

### ⚙️ Solution Walkthrough
The function adds 1 for the current element and calls itself on the rest of the array.
\`\`\`javascript
function recursiveLength(arr) {
  // Base Case: An empty array has a length of 0.
  if (arr[0] === undefined) { // A way to check for empty without .length
    return 0;
  }
  // Recursive Case: 1 (for the current element) + length of the rest.
  return 1 + recursiveLength(arr.slice(1));
}
\`\`\`
1.  **Base Case**: An array is considered empty if its first element is \`undefined\`. This is our stopping condition.
2.  **Recursive Case**: For a non-empty array, we know its length is at least 1. So we return 1 plus the result of calling the function on the rest of the array.

### 📚 Key Concepts
- **Problem Reduction**: Each recursive call reduces the problem size by one element. The final result is accumulated as the call stack unwinds.
`,
  "is-sorted-recursive": `
### 💡 Problem Breakdown
The task is to check if an array of numbers is sorted in ascending order using recursion. The recursive logic: "an array is sorted if its first element is less than or equal to its second element, AND the rest of the array (from the second element onward) is also sorted."

### ⚙️ Solution Walkthrough
The function compares the first two elements and then calls itself on the tail of the array.
\`\`\`javascript
function isSorted(arr) {
  // Base Case: An array with 0 or 1 element is always sorted.
  if (arr.length <= 1) {
    return true;
  }
  // Check the first two elements. If they are out of order, the array is not sorted.
  if (arr[0] > arr[1]) {
    return false;
  }
  // Recursive Case: Check if the rest of the array is sorted.
  return isSorted(arr.slice(1));
}
\`\`\`
1.  **Base Case**: An empty array or an array with a single element is considered sorted.
2.  **Failure Case**: If the first element is greater than the second, we can immediately determine the array is not sorted and return \`false\`.
3.  **Recursive Case**: If the first pair is in order, the overall result depends on whether the remainder of the array is also sorted.

### 📚 Key Concepts
- **Pairwise Comparison**: The core of the logic involves comparing adjacent elements.
- **Short-circuiting**: The function exits as soon as it finds a pair of elements that are out of order.
`,
  "recursive-min": `
### 💡 Problem Breakdown
The goal is to find the minimum value in an array of numbers using recursion. The recursive logic: "the minimum of an array is the smaller of two values: the first element, and the minimum of the rest of the array."

### ⚙️ Solution Walkthrough
The function finds the minimum of the tail of the array and then compares it with the head.
\`\`\`javascript
function findMin(arr) {
  // Base Case: If the array has only one element, that is the minimum.
  if (arr.length === 1) {
    return arr[0];
  }
  
  const first = arr[0];
  const minOfRest = findMin(arr.slice(1)); // Recursive call
  
  // Compare the first element with the minimum of the rest.
  return first < minOfRest ? first : minOfRest;
}
\`\`\`
1.  **Base Case**: The simplest case is an array with a single element. That element must be the minimum.
2.  **Recursive Case**: We first solve the subproblem: finding the minimum in the rest of the array. Then, we compare that result (\`minOfRest\`) with the current first element (\`first\`) and return the smaller of the two.

### 📚 Key Concepts
- **Post-recursion Logic**: The comparison logic happens *after* the recursive call has returned its value. The final minimum value is determined as the call stack unwinds.
`,
  "recursive-max": `
### 💡 Problem Breakdown
This is the counterpart to finding the minimum. The recursive logic is: "the maximum of an array is the larger of two values: the first element, and the maximum of the rest of the array."

### ⚙️ Solution Walkthrough
The function finds the maximum of the tail of the array and then compares it with the head.
\`\`\`javascript
function findMax(arr) {
  // Base Case: If the array has only one element, that is the maximum.
  if (arr.length === 1) {
    return arr[0];
  }
  
  const first = arr[0];
  const maxOfRest = findMax(arr.slice(1)); // Recursive call
  
  // Compare the first element with the maximum of the rest.
  return first > maxOfRest ? first : maxOfRest;
}
\`\`\`
1.  **Base Case**: In an array with one element, that element is the maximum.
2.  **Recursive Case**: We recursively find the maximum of the rest of the array. Then, we compare that result with the current first element and return whichever is larger.

### 📚 Key Concepts
- **Symmetry with \`findMin\`**: The logic is perfectly symmetrical to the \`findMin\` problem, just with the comparison operator flipped.
`,
  "deep-reverse-array-recursive": `
### 💡 Problem Breakdown
The task is to reverse an array, but with a twist: if any of the elements are themselves arrays, they should also be reversed. This requires a "deep" or "nested" reversal.

### ⚙️ Solution Walkthrough
The function first reverses the top-level array. Then, it maps over the reversed array, and if an element is an array, it applies the deep reverse function to it recursively.
\`\`\`javascript
function deepReverse(arr) {
  // First, reverse the top-level array.
  const reversedArr = arr.slice().reverse();
  
  // Now, map over the reversed array to handle nested arrays.
  return reversedArr.map(item => {
    // Recursive Case: If an item is an array, deep reverse it.
    if (Array.isArray(item)) {
      return deepReverse(item);
    }
    // Base Case: If not an array, return it as is.
    return item;
  });
}
\`\`\`
1.  **Top-Level Reverse**: The function first performs a standard reverse on the current array. Using \`.slice()\` creates a copy so we don't modify the original array in place.
2.  **Map and Recurse**: It then iterates through this reversed array. For each item, it checks if it's an array. If it is, it calls \`deepReverse\` on that item. If not, it returns the item unchanged. \`.map()\` collects these results into the final, fully deep-reversed array.

### 📚 Key Concepts
- **Combining Higher-Order Functions and Recursion**: This solution elegantly combines an iterative method (\`.map()\`) with recursion to solve the problem.
- **Immutability**: Using \`.slice()\` before reversing is a good practice to avoid side effects.
`,
  "balance-parentheses-recursive": `
### 💡 Problem Breakdown
The goal is to check if a string consisting of parentheses is "balanced." This means every opening parenthesis \`(\` has a corresponding closing parenthesis \`)\`, and they are properly nested. The recursive approach can track the balance.

### ⚙️ Solution Walkthrough
A helper function is used to carry a "count" of open parentheses. An open parenthesis increments the count, a closing one decrements it. The string is balanced if the count never drops below zero and is exactly zero at the end.
\`\`\`javascript
function isBalanced(str, count = 0) {
  // Failure case: More closing than opening brackets found.
  if (count < 0) {
    return false;
  }
  // Base Case: Reached the end of the string.
  if (str.length === 0) {
    return count === 0;
  }
  
  const first = str[0];
  const rest = str.slice(1);
  
  // Recursive Step: Adjust count and check the rest of the string.
  if (first === '(') {
    return isBalanced(rest, count + 1);
  } else if (first === ')') {
    return isBalanced(rest, count - 1);
  } else {
    // Ignore other characters
    return isBalanced(rest, count);
  }
}
\`\`\`
1.  **Base Case**: When the string is empty, the check succeeds only if the count of open parentheses is exactly zero.
2.  **Failure Case**: If the count ever becomes negative, it means we've encountered a closing parenthesis without a matching open one, so we can fail immediately.
3.  **Recursive Cases**: Based on the first character, we adjust the count and make a recursive call on the rest of the string with the new count.

### 📚 Key Concepts
- **State Management in Recursion**: The \`count\` parameter is essential for carrying the state of the balance through the recursive calls.
`,
  "get-all-keys-nested-object-recursive": `
### 💡 Problem Breakdown
The task is to traverse a deeply nested object and collect all the keys from all levels into a single flat array.

### ⚙️ Solution Walkthrough
The function gets the keys from the current object level. Then, it iterates through the object's values; if a value is another object, it recursively calls itself and concatenates the keys found in the nested object.
\`\`\`javascript
function getAllKeys(obj) {
  // Get keys from the current level.
  let keys = Object.keys(obj);
  
  for (const key in obj) {
    // If a value is a non-null object (and not an array), recurse.
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      // Recursive call and concatenate the nested keys.
      keys = keys.concat(getAllKeys(obj[key]));
    }
  }
  
  return keys;
}
\`\`\`
1.  **Get Current Keys**: \`Object.keys(obj)\` gets the keys from the top level of the object passed into the function.
2.  **Iterate and Recurse**: The function then loops through the object. If it finds a value that is another object, it makes the recursive call \`getAllKeys(obj[key])\` and adds the returned keys to its own list.

### 📚 Key Concepts
- **Combining \`Object.keys\` and Recursion**: This shows how a built-in method can be used as a starting point within a recursive function to solve a more complex version of a problem.
`,
  "subsets-of-set-recursive": `
### 💡 Problem Breakdown
The goal is to generate the "power set" of a given set (represented as an array). The power set is the set of all possible subsets, including the empty set and the set itself. For \`[1, 2]\`, the subsets are \`[]\`, \`[1]\`, \`[2]\`, \`[1, 2]\`.

### ⚙️ Solution Walkthrough
The recursive logic is: "the power set of a set is the power set of the set without its first element, combined with a new set of subsets formed by adding the first element to each of those."
\`\`\`javascript
function subsets(arr) {
  // Base Case: The only subset of an empty set is the empty set itself.
  if (arr.length === 0) {
    return [[]];
  }
  
  const first = arr[0];
  const rest = arr.slice(1);
  
  // Recursive call to get subsets of the smaller set.
  const subsetsWithoutFirst = subsets(rest);
  
  // Create new subsets by adding the first element to each of the existing subsets.
  const subsetsWithFirst = subsetsWithoutFirst.map(sub => [first, ...sub]);
  
  // Combine both sets of subsets.
  return [...subsetsWithoutFirst, ...subsetsWithFirst];
}
\`\`\`
1.  **Base Case**: An empty array has one subset: an empty array.
2.  **Recursive Step**: We first solve the subproblem: find all subsets of the array without the first element. This gives us half of our answer.
3.  **Conquer Step**: We create the other half of the answer by taking the subsets we just found and adding the first element to each of them. Then we combine the two halves.

### 📚 Key Concepts
- **Combinatorics**: This is a fundamental problem in combinatorics. The number of subsets for a set of size n is 2^n.
- **Building on Subproblems**: The solution elegantly shows how the answer for a problem of size \`n\` is constructed directly from the answer for the problem of size \`n-1\`.
`,
  "collect-strings-from-object-recursive": `
### 💡 Problem Breakdown
The goal is to traverse a nested object and collect all the values that are strings into a flat array.

### ⚙️ Solution Walkthrough
The function iterates through the object's properties. If a value is a string, it's added to the result array. If it's another object, the function recursively calls itself on that object and concatenates the results.
\`\`\`javascript
function collectStrings(obj) {
  let stringsArr = [];

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } 
    else if (typeof obj[key] === 'object' && obj[key] !== null) {
      // Recursive call and merge the results.
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}
\`\`\`
1.  **Base Case (within loop)**: If a property's value is a string, we've found what we're looking for. Add it to the array.
2.  **Recursive Case (within loop)**: If a property's value is an object, we need to search inside it. We do this by calling \`collectStrings\` on the nested object and adding all the strings it found to our current array.

### 📚 Key Concepts
- **Type Checking**: Using \`typeof\` is essential to distinguish between the strings we want to collect and the objects we need to recurse into.
- **Concatenation**: The final array is built by merging the results from all levels of the object structure.
`,
  "capitalize-words-recursive": `
### 💡 Problem Breakdown
The task is to take an array of strings and return a new array where every string has been converted to uppercase, using recursion.

### ⚙️ Solution Walkthrough
The recursive logic: "the capitalized version of an array is the capitalized first word, prepended to the capitalized version of the rest of the array."
\`\`\`javascript
function capitalizeWords(arr) {
  // Base Case: An empty array needs no capitalization.
  if (arr.length === 0) {
    return [];
  }
  
  const firstWord = arr[0].toUpperCase();
  const restCapitalized = capitalizeWords(arr.slice(1));
  
  return [firstWord, ...restCapitalized];
}
\`\`\`
1.  **Base Case**: An empty array is the simplest case.
2.  **Recursive Case**: The function capitalizes the first word. Then, it recursively calls itself to capitalize all the words in the rest of the array. Finally, it combines the capitalized first word with the rest of the capitalized words.

### 📚 Key Concepts
- **Recursive \`map\`**: This function is essentially a recursive implementation of the \`Array.prototype.map\` method with a specific capitalization function.
`,
  "capitalize-first-letter-recursive": `
### 💡 Problem Breakdown
The goal is to take an array of strings and return a new array where the first letter of each string is capitalized, using recursion.

### ⚙️ Solution Walkthrough
The logic is very similar to capitalizing the whole word. We transform the first string in the array and then prepend it to the recursive result from the rest of the array.
\`\`\`javascript
function capitalizeFirst(arr) {
  // Base Case
  if (arr.length === 0) {
    return [];
  }
  
  const firstWord = arr[0];
  const capitalized = firstWord[0].toUpperCase() + firstWord.slice(1);
  
  const restCapitalized = capitalizeFirst(arr.slice(1));
  
  return [capitalized, ...restCapitalized];
}
\`\`\`
1.  **Base Case**: An empty array requires no changes.
2.  **Recursive Case**: The function isolates the first word, capitalizes its first letter, and then combines it with the result of the recursive call on the tail of the array.

### 📚 Key Concepts
- **String and Array Slicing**: Uses both string and array slicing methods to deconstruct the problem.
`,
  "stringify-numbers-recursive": `
### 💡 Problem Breakdown
The task is to traverse a nested object and convert any value that is a number into a string, leaving other types untouched. This needs to be done "in-place" or by creating a new object with the changes.

### ⚙️ Solution Walkthrough
This solution creates a deep copy of the object to avoid modifying the original. It iterates through the object's properties. If a value is a number, it's converted to a string. If it's a nested object, the function calls itself recursively.
\`\`\`javascript
function stringifyNumbers(obj) {
  // Create a new object to avoid mutating the original.
  const newObj = {};
  
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
      // Recursive call for nested objects.
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      // Copy other types as they are.
      newObj[key] = obj[key];
    }
  }
  
  return newObj;
}
\`\`\`
1.  **Immutability**: The function starts by creating a new empty object, \`newObj\`, to ensure the original object passed in is not changed.
2.  **Iteration and Type Checking**: It loops through the keys of the input object. It checks the type of each value.
3.  **Base Case (in loop)**: If the value is a number, it converts it to a string and adds it to \`newObj\`.
4.  **Recursive Case (in loop)**: If the value is a nested object, it calls \`stringifyNumbers\` on that object and assigns the result to the corresponding key in \`newObj\`.
5.  **Copying**: For all other data types, it simply copies the value over.

### 📚 Key Concepts
- **Deep Copy vs. Shallow Copy**: This function performs a deep copy while transforming the data, as opposed to a shallow copy which would share references to nested objects.
- **Immutability**: By returning a new object instead of modifying the original, the function follows functional programming principles and avoids side effects.
`,
  "tail-call-optimization-conceptual": `
### 💡 Problem Breakdown
Tail Call Optimization (TCO) is a feature where a JavaScript engine can execute a function in a "tail-call position" without growing the call stack. A call is in a tail position if it's the absolute last action performed by a function before it returns. This prevents "stack overflow" errors for very deep recursion.

### ⚙️ Solution Walkthrough
We can compare a non-tail-recursive factorial function with a tail-recursive one.
\`\`\`javascript
// NOT in tail position
function factorial(n) {
  if (n <= 1) return 1;
  // The last action is MULTIPLICATION, not the recursive call.
  return n * factorial(n - 1); 
}

// IS in tail position
function factorialTCO(n, accumulator = 1) {
  if (n <= 1) return accumulator;
  // The recursive call is the final action. Nothing is done with its result.
  return factorialTCO(n - 1, n * accumulator);
}
\`\`\`
1.  **Non-TCO**: In the first example, after \`factorial(n - 1)\` returns, its result must be multiplied by \`n\`. Because there's work to do after the call, the current stack frame must be kept, and it's not a tail call.
2.  **TCO**: In the second example, the result of the recursive call \`factorialTCO(...)\` is immediately returned. The function doesn't need to do any more work. An engine that supports TCO can simply reuse the current stack frame for the next call.

### 📚 Key Concepts
- **Tail Call**: A function call that is the final action in another function.
- **Accumulator Pattern**: A common technique for converting non-tail-recursive functions into tail-recursive ones by passing an "accumulator" parameter that carries the intermediate result down through the calls.
- **Engine Support**: TCO was part of the ES6 specification but is not widely implemented in major JavaScript engines like V8 (Chrome/Node) due to implementation complexities. It is mainly a concept to be aware of in JavaScript.
`,
  "mutual-recursion": `
### 💡 Problem Breakdown
Mutual recursion occurs when two or more functions call each other in a recursive sequence. A classic example is determining if a non-negative integer is even or odd.

### ⚙️ Solution Walkthrough
An \`isEven\` function is defined in terms of an \`isOdd\` function, and \`isOdd\` is defined in terms of \`isEven\`.
\`\`\`javascript
function isEven(n) {
  if (n === 0) return true;
  return isOdd(n - 1);
}

function isOdd(n) {
  if (n === 0) return false;
  return isEven(n - 1);
}
\`\`\`
1.  **Logic**: The logic is that a number \`n\` is even if \`n-1\` is odd, and \`n\` is odd if \`n-1\` is even.
2.  **Base Cases**: The recursion bottoms out at 0. Zero is defined as even, so \`isEven(0)\` is \`true\` and \`isOdd(0)\` is \`false\`.
3.  **Execution**: Calling \`isEven(5)\` would lead to \`isOdd(4)\`, which calls \`isEven(3)\`, then \`isOdd(2)\`, then \`isEven(1)\`, then \`isOdd(0)\` which returns \`false\`, correctly propagating up the call stack.

### 📚 Key Concepts
- **Indirect Recursion**: Another term for mutual recursion. A function causes itself to be called again, but via one or more other functions.
`,
  "ackermann-function-conceptual": `
### 💡 Problem Breakdown
The Ackermann function is a famous example in computation theory. It's a total computable function that is not "primitive recursive." Its main characteristic is that it grows exceptionally fast.

### ⚙️ Solution Walkthrough
The function is defined by a set of recursive rules.
- If \`m = 0\`, then \`A(m, n) = n + 1\`
- If \`m > 0\` and \`n = 0\`, then \`A(m, n) = A(m - 1, 1)\`
- If \`m > 0\` and \`n > 0\`, then \`A(m, n) = A(m - 1, A(m, n - 1))\`
\`\`\`javascript
function ackermann(m, n) {
  if (m === 0) {
    return n + 1;
  } else if (m > 0 && n === 0) {
    return ackermann(m - 1, 1);
  } else if (m > 0 && n > 0) {
    return ackermann(m - 1, ackermann(m, n - 1));
  }
}
\`\`\`
1.  **Base Case**: The simplest case is when \`m\` is 0.
2.  **Recursive Cases**: The other two rules are direct recursive translations. The third rule involves a nested recursive call, which is what leads to the explosive growth. Even for small inputs like \`ackermann(4, 2)\`, the result is a number with 19,729 digits.

### 📚 Key Concepts
- **Computability Theory**: The Ackermann function is primarily of theoretical interest to show that there are functions that can be computed by a simple algorithm but are not in the class of "primitive recursive" functions.
- **Deep Recursion**: An example of very deep and complex recursion that is not practical to execute for most inputs.
`,
  "count-leaves-in-tree-conceptual": `
### 💡 Problem Breakdown
In a tree data structure, a "leaf" node is a node that has no children. The task is to write a recursive function to count all such nodes in a binary tree.

### ⚙️ Solution Walkthrough
The function traverses the tree. If it finds a leaf, it counts it as 1. If it finds an internal node, it recursively counts the leaves in its left and right subtrees and sums the results.
\`\`\`javascript
function countLeaves(node) {
  // Base Case 1: An empty tree or subtree has no leaves.
  if (node === null) {
    return 0;
  }
  // Base Case 2: This node is a leaf.
  if (node.left === null && node.right === null) {
    return 1;
  }
  // Recursive Case: Sum the leaves from the left and right subtrees.
  return countLeaves(node.left) + countLeaves(node.right);
}
\`\`\`
1.  **Base Cases**: An empty subtree (\`node === null\`) contributes 0 to the count. A node that has no children is a leaf, and it contributes 1 to the count.
2.  **Recursive Case**: For an internal node (a non-leaf node), the total count of leaves beneath it is the sum of the leaves in its left subtree and the leaves in its right subtree.

### 📚 Key Concepts
- **Tree Traversal**: The function performs a post-order traversal implicitly to sum the results from the children before returning.
- **Node Classification**: The logic depends on classifying each node as null, a leaf, or an internal node.
`,
  "tree-depth-recursive": `
### 💡 Problem Breakdown
The depth (or height) of a binary tree is the length of the longest path from the root node down to the farthest leaf node. The task is to calculate this using recursion.

### ⚙️ Solution Walkthrough
The recursive logic is: "the depth of a tree is 1 (for the current level) plus the depth of its deepest subtree."
\`\`\`javascript
function treeDepth(node) {
  // Base Case: An empty tree has a depth of 0.
  if (node === null) {
    return 0;
  }
  
  // Recursive Step: Find the depth of the left and right subtrees.
  const leftDepth = treeDepth(node.left);
  const rightDepth = treeDepth(node.right);
  
  // The depth of the current node is 1 + the max of its subtrees' depths.
  return Math.max(leftDepth, rightDepth) + 1;
}
\`\`\`
1.  **Base Case**: The depth of a non-existent node (\`null\`) is 0. This is the stopping condition.
2.  **Recursive Step**: For any given node, we recursively find the depth of its left and right children.
3.  **Combine Step**: The depth of the tree rooted at the current node is 1 (for the node itself) plus the greater of the two depths returned by the recursive calls.

### 📚 Key Concepts
- **Post-order Traversal**: The function calculates the depths of the children *before* processing the parent node, which is a characteristic of post-order traversal.
- **\`Math.max()\`**: Used to determine which of the two subtrees is deeper.
`,
  "combinations-recursive": `
### 💡 Problem Breakdown
The goal is to find all possible combinations of a specific size, \`k\`, from the elements of an array. Unlike permutations, the order of elements in a combination does not matter, so \`[1, 2]\` is the same as \`[2, 1]\`.

### ⚙️ Solution Walkthrough
This is a classic backtracking problem. A recursive helper function builds a combination. In each step, it decides whether to include the current element or not.
\`\`\`javascript
function findCombinations(arr, k) {
  const result = [];
  
  function backtrack(combination, remaining, start) {
    // Base Case: The combination has reached the desired size.
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }
    
    // Explore further combinations.
    for (let i = start; i < remaining.length; i++) {
      // Add the current element.
      combination.push(remaining[i]);
      // Recurse with the next element as the new start.
      backtrack(combination, remaining, i + 1);
      // Backtrack: remove the element to try other paths.
      combination.pop();
    }
  }
  
  backtrack([], arr, 0);
  return result;
}
\`\`\`
1.  **Base Case**: When the temporary \`combination\` array reaches the target size \`k\`, we have found a valid combination. We add a copy of it to our results and stop this path.
2.  **Recursive/Backtracking Step**: We loop through the remaining elements. For each element, we add it to our current combination, then recursively call the function to find the rest of the combination from the *next* elements. After the recursive call returns, we \`.pop()\` the element off, effectively "undoing" our choice so we can explore paths that don't include it.

### 📚 Key Concepts
- **Backtracking**: The core algorithm used to explore the solution space by incrementally building candidates and abandoning a candidate as soon as it determines that it cannot possibly be completed to a valid solution.
- **State Management**: The \`combination\` array and the \`start\` index are used to manage the state of the current path being explored.
`,
  "coin-change-problem-recursive": `
### 💡 Problem Breakdown
Given a set of coin denominations (e.g., [1, 2, 5]) and a total amount, the task is to find the number of different ways to make change for that amount. The order of coins does not matter.

### ⚙️ Solution Walkthrough
This is a classic dynamic programming problem. The recursive solution explores two choices for each coin: either we use the coin, or we don't.
\`\`\`javascript
function countWays(coins, amount, index = coins.length - 1) {
  // Base Case 1: We've made the exact amount. This is one valid way.
  if (amount === 0) {
    return 1;
  }
  // Base Case 2: We've overshot the amount or run out of coins.
  if (amount < 0 || index < 0) {
    return 0;
  }
  
  // Recursive Case:
  // 1. Ways if we use the current coin: countWays(coins, amount - coins[index], index)
  // 2. Ways if we DON'T use the current coin: countWays(coins, amount, index - 1)
  return countWays(coins, amount - coins[index], index) + countWays(coins, amount, index - 1);
}
\`\`\`
1.  **Base Cases**: A successful path is one where the amount becomes exactly 0. An unsuccessful path is one where the amount becomes negative or we have no more coin types to try.
2.  **Recursive Case**: For each coin, we calculate the total ways by summing up two possibilities: the number of ways we can make the remaining amount if we *use* the current coin, plus the number of ways we can make the amount if we *don't use* the current coin and move on to the next smaller coin.

### 📚 Key Concepts
- **Dynamic Programming**: The solution involves breaking the problem down into overlapping subproblems. The naive recursive solution is very inefficient and would require memoization to be practical.
`,
  "array-includes-recursive": `
### 💡 Problem Breakdown
The goal is to re-implement the functionality of \`Array.prototype.includes\` using recursion. The function should return \`true\` if a target value is found in an array, and \`false\` otherwise.

### ⚙️ Solution Walkthrough
The recursive logic is: "an array includes the target if its first element is the target, OR if the rest of the array includes the target."
\`\`\`javascript
function recursiveIncludes(arr, target) {
  // Base Case: An empty array cannot contain the target.
  if (arr.length === 0) {
    return false;
  }
  // Base Case: The first element is a match.
  if (arr[0] === target) {
    return true;
  }
  // Recursive Case: Check the rest of the array.
  return recursiveIncludes(arr.slice(1), target);
}
\`\`\`
1.  **Base Cases**: The failure case is an empty array. The success case is finding the target at the first position of the current sub-array.
2.  **Recursive Case**: If the first element isn't a match, the result of the entire search depends on the result of searching the rest of the array.

### 📚 Key Concepts
- **Short-circuiting**: The function returns \`true\` and stops recursion as soon as the first match is found.
`,
  "array-indexOf-recursive": `
### 💡 Problem Breakdown
The task is to re-implement \`Array.prototype.indexOf\` recursively. It should return the index of the first occurrence of a target value, or -1 if not found.

### ⚙️ Solution Walkthrough
This requires passing the current index down through the recursive calls.
\`\`\`javascript
function recursiveIndexOf(arr, target, index = 0) {
  // Base Case: Reached the end of the array, target not found.
  if (index >= arr.length) {
    return -1;
  }
  // Base Case: Found the target at the current index.
  if (arr[index] === target) {
    return index;
  }
  // Recursive Case: Search from the next index.
  return recursiveIndexOf(arr, target, index + 1);
}
\`\`\`
This approach avoids creating new array slices, making it more memory-efficient.
1.  **Base Cases**: If the index goes out of bounds, we return -1. If the element at the current index is a match, we return the index.
2.  **Recursive Case**: If no match, we call the function again, incrementing the index to check the next position.

### 📚 Key Concepts
- **Index as State**: The \`index\` parameter is used to keep track of our position in the array, serving as the state for the recursion.
- **Efficiency**: Avoiding \`.slice()\` in recursion can be a significant performance optimization, as it prevents the creation of many temporary arrays.
`,
  "repeat-function-recursive": `
### 💡 Problem Breakdown
The goal is to write a higher-order recursive function that takes another function (\`fn\`) and a number (\`n\`) and calls \`fn\` exactly \`n\` times.

### ⚙️ Solution Walkthrough
The recursive function calls the provided function once, then calls itself with a decremented counter.
\`\`\`javascript
function repeat(fn, n) {
  // Base Case: If n is 0 or less, we're done.
  if (n <= 0) {
    return;
  }
  
  // Perform the action.
  fn();
  
  // Recursive call for the remaining times.
  repeat(fn, n - 1);
}
\`\`\`
1.  **Base Case**: The recursion stops when the counter \`n\` reaches 0.
2.  **Recursive Step**: The function first executes the action (\`fn()\`), then makes the recursive call to handle the remaining \`n - 1\` repetitions.

### 📚 Key Concepts
- **Higher-Order Functions**: The \`repeat\` function is a higher-order function because it takes another function as an argument.
- **Side Effects**: This function is used for its side effects (whatever \`fn\` does, e.g., logging to the console), not for its return value.
`,
  "deep-object-clone-recursive": `
### 💡 Problem Breakdown
The task is to create a "deep clone" of an object. A shallow clone copies only the top-level properties, so nested objects are shared by reference. A deep clone creates a completely new copy of the object and all nested objects and arrays.

### ⚙️ Solution Walkthrough
The function recursively traverses the object. It creates a new object or array at each level and copies the properties, making recursive calls for any nested objects.
\`\`\`javascript
function deepClone(obj) {
  // Base Case: If it's not an object (or is null), return it directly.
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  // Determine if it's an array or object to create the correct new container.
  const newObj = Array.isArray(obj) ? [] : {};
  
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Recursive call for each property.
      newObj[key] = deepClone(obj[key]);
    }
  }
  
  return newObj;
}
\`\`\`
1.  **Base Case**: Primitive values (strings, numbers, booleans, null, undefined) are not objects, so they can be returned as-is.
2.  **Recursive Step**: The function first creates a new container (either \`[]\` or \`{}\`). Then, it iterates over the keys of the input object and recursively calls \`deepClone\` on each value, assigning the result to the new object.

### 📚 Key Concepts
- **Reference vs. Value**: This problem is a practical demonstration of the difference between copying by reference (for objects) and copying by value (for primitives).
- **Handling Data Types**: The function needs to correctly handle primitives, arrays, and objects to work properly. This simple version doesn't handle other types like Dates, RegExps, or Maps.
`,
  "find-all-indices-recursive": `
### 💡 Problem Breakdown
The goal is to find all indices where a target value appears in an array. For example, for \`[1, 2, 3, 2]\` and target \`2\`, the result should be \`[1, 3]\`.

### ⚙️ Solution Walkthrough
A recursive helper function can be used to traverse the array and build up a list of matching indices.
\`\`\`javascript
function findAllIndices(arr, target) {
  const result = [];
  
  function find(index) {
    // Base Case: Reached the end of the array.
    if (index >= arr.length) {
      return;
    }
    // Check for a match at the current index.
    if (arr[index] === target) {
      result.push(index);
    }
    // Recursive call for the next index.
    find(index + 1);
  }
  
  find(0);
  return result;
}
\`\`\`
1.  **Closure**: The helper function \`find\` is defined inside the main function so it has access to the \`result\` array and the original \`arr\` and \`target\` via closure.
2.  **Base Case**: The recursion stops when the index goes past the end of the array.
3.  **Recursive Step**: The function checks the element at the current index and, regardless of whether it matches, makes a recursive call to check the next index.

### 📚 Key Concepts
- **Closures in Recursion**: Using a closure is a common pattern for recursive helper functions to avoid passing state (like the \`result\` array) through every single recursive call.
`,
  "luhn-algorithm-recursive-conceptual": `
### 💡 Problem Breakdown
The Luhn algorithm (or Modulus 10 algorithm) is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers. The conceptual recursive approach involves processing the number digit by digit from right to left.

### ⚙️ Solution Walkthrough
A recursive function would process one digit at a time, keeping track of its position (even or odd from the right) to know whether to double it.
\`\`\`javascript
// Conceptual
function luhnCheck(numberString) {
  function luhnRecurse(digits, position) {
    // Base Case: If no digits left, the sum is 0.
    if (digits === "") return 0;
    
    // Process the last digit.
    let digit = parseInt(digits.slice(-1));
    const remainingDigits = digits.slice(0, -1);
    
    // If it's in a position to be doubled...
    if (position % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    // Recursive call for the rest of the digits.
    return digit + luhnRecurse(remainingDigits, position + 1);
  }
  
  const totalSum = luhnRecurse(numberString, 0);
  return totalSum % 10 === 0;
}
\`\`\`
1.  **Base Case**: An empty string of digits contributes 0 to the sum.
2.  **Recursive Step**: The function processes the *last* digit of the string. It determines if it needs to be doubled based on its position, performs the doubling and summing logic if needed, and then adds this value to the result of the recursive call on the *rest* of the string.

### 📚 Key Concepts
- **Right-to-Left Processing**: The recursive solution naturally processes the number from right to left by repeatedly slicing off the last digit.
- **State via Parameters**: The \`position\` parameter is essential for tracking whether a digit should be doubled.
`,
  "directory-traversal-conceptual": `
### 💡 Problem Breakdown
A file system is a tree-like structure, where directories can contain files and other directories. Recursion is the natural way to process such a structure, for example, to find a file or list all files.

### ⚙️ Solution Walkthrough
The recursive function takes a directory path. It reads the contents of the directory. For each item inside, if it's a file, it processes it. If it's another directory, the function calls itself with the path to that subdirectory.
\`\`\`javascript
// Conceptual Node.js code
const fs = require('fs');
const path = require('path');

function traverseDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      // Recursive Case: It's a directory, so traverse into it.
      console.log('Entering directory:', fullPath);
      traverseDirectory(fullPath);
    } else {
      // Base Case: It's a file, process it.
      console.log('Found file:', fullPath);
    }
  }
}
\`\`\`

### 📚 Key Concepts
- **Tree Data Structures**: A file system is a classic example of a tree, making recursion a perfect fit.
- **Base Case**: The base case for any given path is a file, which cannot be traversed further.
- **Recursive Case**: The recursive case is a directory, which requires a deeper call to process its contents.
`,
  "json-stringify-recursive-conceptual": `
### 💡 Problem Breakdown
The goal is to conceptually outline a recursive function that mimics the behavior of \`JSON.stringify\`. This involves correctly handling different data types: primitives, arrays, and objects.

### ⚙️ Solution Walkthrough
The function must check the type of its input and handle it accordingly.
1.  **Primitives**: If the input is a string, wrap it in double quotes. If it's a number, boolean, or null, convert it to its string representation.
2.  **Arrays**: If the input is an array, start with an opening bracket \`[\`. Recursively call the stringify function on each element in the array. Join the results with commas. End with a closing bracket \`]\`.
3.  **Objects**: If the input is an object, start with an opening brace \`{\`. Iterate over the object's keys. For each key-value pair, create a string like \`"key":recursive_result\`. Join these pairs with commas. End with a closing brace \`}\`.
\`\`\`javascript
// Conceptual
function myStringify(value) {
  // Base Cases for primitives
  if (typeof value === 'string') return \`"\${value}"\`;
  if (typeof value === 'number' || typeof value === 'boolean' || value === null) return String(value);

  // Recursive Case for Arrays
  if (Array.isArray(value)) {
    const elements = value.map(item => myStringify(item));
    return \`[\${elements.join(',')}]\`;
  }
  
  // Recursive Case for Objects
  if (typeof value === 'object') {
    const pairs = Object.keys(value).map(key => {
      const keyString = myStringify(key);
      const valueString = myStringify(value[key]);
      return \`\${keyString}:\${valueString}\`;
    });
    return \`{\${pairs.join(',')}}\`;
  }
}
\`\`\`

### 📚 Key Concepts
- **Composite Pattern**: The structure of the problem is a composite, where objects and arrays are composed of other values, which themselves can be composites. Recursion is the natural way to handle this.
- **Type-Driven Logic**: The core of the function is a series of checks to determine the type of the input and apply the correct formatting rule.
`,
  "dom-traversal-recursive-conceptual": `
### 💡 Problem Breakdown
The Document Object Model (DOM) is a tree representation of an HTML document. Recursion is a natural way to traverse this tree, for example, to find a specific element or to collect all text content.

### ⚙️ Solution Walkthrough
A recursive function would take a DOM node as input. It would first process the node itself. Then, it would iterate through the node's children (\`node.childNodes\`) and make a recursive call for each child.
\`\`\`javascript
// Conceptual browser code
function walkTheDOM(node, func) {
  // Process the current node.
  func(node);
  
  // Recurse for each child node.
  let child = node.firstChild;
  while (child) {
    walkTheDOM(child, func);
    child = child.nextSibling;
  }
}

// Example usage:
// walkTheDOM(document.body, (node) => {
//   if (node.nodeType === 3) { // Is it a Text node?
//     console.log(node.nodeValue);
//   }
// });
\`\`\`
1.  **Action**: The function first performs an action on the current node. This makes it a "pre-order" traversal.
2.  **Base Case**: The recursion naturally stops when a node has no children (e.g., a text node). The loop over \`childNodes\` simply won't run.
3.  **Recursive Step**: For each child node that exists, the function calls itself, effectively descending one level deeper into the DOM tree.

### 📚 Key Concepts
- **Tree Traversal**: The DOM is a tree, and this is a classic pre-order traversal algorithm.
- **Node Properties**: The solution relies on DOM node properties like \`firstChild\` and \`nextSibling\` to navigate the tree structure.
`,
  "quick-sort-conceptual": `
### 💡 Problem Breakdown
Quick Sort is another efficient, "divide and conquer" sorting algorithm. Its core idea is to pick an element (the "pivot") and partition the rest of the array into two sub-arrays: elements less than the pivot and elements greater than the pivot. It then recursively sorts the sub-arrays.

### ⚙️ Solution Walkthrough
The recursive function selects a pivot, partitions the array, and then recursively sorts the resulting partitions.
\`\`\`javascript
function quickSort(arr) {
  // Base Case: An array with 0 or 1 element is already sorted.
  if (arr.length <= 1) {
    return arr;
  }
  
  // Choose a pivot (here, the last element).
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  
  // Partition the array.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  // Recursive calls on the partitions and concatenate the results.
  return [...quickSort(left), pivot, ...quickSort(right)];
}
\`\`\`
1.  **Base Case**: An array of length 0 or 1 is inherently sorted.
2.  **Divide/Partition Step**: A pivot is chosen. The rest of the array is divided into two new arrays based on comparison with the pivot.
3.  **Conquer/Recursive Step**: The \`quickSort\` function is called on the left and right partitions.
4.  **Combine Step**: The final sorted array is formed by concatenating the sorted left partition, the pivot, and the sorted right partition.

### 📚 Key Concepts
- **Divide and Conquer**: The algorithm's strategy: pick a pivot, partition, recurse, and combine.
- **Pivot Selection**: The choice of pivot can significantly affect performance. A poor pivot choice can degrade the performance to O(n^2). The average time complexity is O(n log n).
- **In-place Sorting**: While this implementation is simple to understand, it's not "in-place" as it creates new arrays. More optimized versions partition the array in-place to save memory.
`,
  "object-dot-path-access-recursive": `
### 💡 Problem Breakdown
The goal is to access a value in a nested object using a string path, like \`'a.b.c'\`. A recursive solution can process one part of the path at a time.

### ⚙️ Solution Walkthrough
The function splits the path into an array of keys. It then uses a recursive helper that takes the current object and the remaining keys.
\`\`\`javascript
function getByPath(obj, path) {
  const keys = path.split('.');
  
  function recurse(currentObj, remainingKeys) {
    // Base Case: If no object or no keys left, handle accordingly.
    if (currentObj === undefined || currentObj === null) {
      return undefined;
    }
    if (remainingKeys.length === 0) {
      return currentObj;
    }
    
    const nextKey = remainingKeys[0];
    const newRemainingKeys = remainingKeys.slice(1);
    
    // Recursive call on the nested object with the rest of the keys.
    return recurse(currentObj[nextKey], newRemainingKeys);
  }
  
  return recurse(obj, keys);
}
\`\`\`
1.  **Base Cases**: The recursion stops if we encounter an \`undefined\` or \`null\` value along the path, or if we've successfully processed all the keys.
2.  **Recursive Step**: The function takes the first key from its list of remaining keys, accesses that property on the current object, and then calls itself with this new nested object and the rest of the keys.

### 📚 Key Concepts
- **Path Traversal**: This is a common utility for working with complex configuration objects or API responses.
- **Problem Decomposition**: The problem of traversing a path of length \`n\` is reduced to accessing the first key and then traversing a path of length \`n-1\` on the resulting sub-object.
`,
  "n-queens-problem-conceptual": `
### 💡 Problem Breakdown
The N-Queens puzzle is the problem of placing N chess queens on an N×N chessboard so that no two queens threaten each other. This means no two queens can share the same row, column, or diagonal. This is a classic problem solved with recursive backtracking.

### ⚙️ Solution Walkthrough
A recursive function attempts to place a queen in each row, one by one.
\`\`\`javascript
// Conceptual
function solveNQueens(n) {
  const solutions = [];
  
  function backtrack(row, board) {
    // Base Case: If we have placed a queen in every row, we've found a solution.
    if (row === n) {
      solutions.push([...board]);
      return;
    }
    
    // Try placing a queen in each column of the current row.
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col, board)) {
        // Place the queen.
        board.push(col); // (storing column index for the row)
        
        // Recurse for the next row.
        backtrack(row + 1, board);
        
        // Backtrack: remove the queen to explore other possibilities.
        board.pop();
      }
    }
  }
  
  backtrack(0, []);
  return solutions;
}
\`\`\`
1.  **Base Case**: A solution is found when we have successfully placed a queen in all \`n\` rows.
2.  **Recursive/Backtracking Step**: For the current row, we loop through every column. If it's a "safe" spot (not under attack), we place a queen there. Then, we make a recursive call to solve for the next row. If that path doesn't lead to a solution, the function will return, and we "backtrack" by removing the queen and trying the next column.

### 📚 Key Concepts
- **Backtracking**: The core of the solution. It systematically explores all potential placements and discards paths that violate the rules.
- **Constraint Checking**: A helper function, \`isSafe\`, is crucial for checking if a potential placement conflicts with any previously placed queens.
`,
  "sudoku-solver-conceptual": `
### 💡 Problem Breakdown
This conceptual problem involves using recursion and backtracking to solve a Sudoku puzzle. The goal is to fill an empty board (represented by a 9x9 grid) according to Sudoku rules.

### ⚙️ Solution Walkthrough
The recursive function attempts to place a valid number in an empty cell and then calls itself to solve the rest of the board. If the recursive call fails, it "backtracks" by undoing the choice and trying the next number.
\`\`\`javascript
// Conceptual
function solveSudoku(board) {
  // 1. Find the next empty cell (row, col).
  // 2. If no empty cells, board is solved. Base Case: return true.
  
  // 3. Try numbers 1 through 9 for the empty cell.
  for (let num = 1; num <= 9; num++) {
    // 4. Check if 'num' is a valid placement at (row, col).
    if (isValid(board, row, col, num)) {
      // 5. If valid, place the number.
      board[row][col] = num;
      
      // 6. Recursively try to solve the rest of the board.
      if (solveSudoku(board)) {
        return true; // If successful, propagate true up the call stack.
      }
      
      // 7. If not successful, backtrack: undo the choice.
      board[row][col] = 0; // Reset cell
    }
  }
  
  // If no number from 1-9 works, this path is incorrect.
  // Base Case: return false to trigger backtracking in the parent call.
  return false;
}
\`\`\`
1.  **Base Case**: A solved board (no empty cells) means success. A path that leads to no possible valid number for a cell is a failure.
2.  **Recursive/Backtracking Case**: Try a number. Recurse. If the recursion fails, undo the try and attempt the next number.

### 📚 Key Concepts
- **Backtracking**: The core of the solution. It's an algorithm that explores all possible solutions and abandons a path as soon as it determines it cannot be fruitful.
- **Constraint Satisfaction**: Sudoku is a constraint satisfaction problem. Each number placement must satisfy the row, column, and 3x3 box constraints.
`,
  "word-break-problem-recursive": `
### 💡 Problem Breakdown
Given a string and a dictionary of words, the task is to determine if the string can be broken down into a sequence of one or more dictionary words. For example, "applepenapple" with dictionary ["apple", "pen"] is true.

### ⚙️ Solution Walkthrough
A recursive function can check all possible prefixes of the string that are in the dictionary. If a prefix is found, the function recursively checks if the rest of the string can also be broken down.
\`\`\`javascript
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Map();

  function canBreak(str) {
    // Base Case: An empty string can always be formed.
    if (str === "") return true;
    if (memo.has(str)) return memo.get(str);
    
    for (let i = 1; i <= str.length; i++) {
      const prefix = str.substring(0, i);
      // If the prefix is a valid word AND the rest can be broken down...
      if (wordSet.has(prefix) && canBreak(str.substring(i))) {
        memo.set(str, true);
        return true;
      }
    }
    
    memo.set(str, false);
    return false;
  }
  
  return canBreak(s);
}
\`\`\`
1.  **Base Case**: An empty string is a success, as it means the entire original string has been successfully segmented.
2.  **Recursive Step**: The function iterates through all possible prefixes of the current string. If a prefix is a valid word from the dictionary, it makes a recursive call on the remainder of the string.
3.  **Memoization**: This problem has overlapping subproblems (e.g., checking the same suffix multiple times). Using a memoization cache (\`memo\`) to store the results for substrings that have already been computed is essential for performance.

### 📚 Key Concepts
- **Dynamic Programming with Memoization**: The recursive solution is optimized by storing the results of subproblems to avoid re-computation.
`,
  "knapsack-problem-conceptual": `
### 💡 Problem Breakdown
The 0/1 Knapsack problem is a classic optimization problem. Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. In the 0/1 version, you can either take an item or leave it.

### ⚙️ Solution Walkthrough
The recursive solution considers one item at a time and makes two choices for it.
\`\`\`javascript
// Conceptual
function knapsack(weights, values, capacity, n) {
  // n is the number of items being considered
  
  // Base Case: No items left or no capacity left.
  if (n === 0 || capacity === 0) {
    return 0;
  }
  
  // If the weight of the nth item is more than the capacity, we can't include it.
  if (weights[n - 1] > capacity) {
    return knapsack(weights, values, capacity, n - 1);
  }
  
  // Recursive Case: Return the maximum of two cases:
  // 1. Nth item is included.
  const included = values[n - 1] + knapsack(weights, values, capacity - weights[n - 1], n - 1);
  // 2. Nth item is not included.
  const notIncluded = knapsack(weights, values, capacity, n - 1);
  
  return Math.max(included, notIncluded);
}
\`\`\`
1.  **Base Case**: If there are no items left to consider or the knapsack has no capacity, the value is 0.
2.  **Recursive Cases**: For each item, we decide:
    *   If it's too heavy, we must skip it and recurse on the remaining items.
    *   Otherwise, we calculate the value we'd get if we *included* it (its value plus the best we can do with the rest) and the value if we *excluded* it. We return the maximum of these two choices.

### 📚 Key Concepts
- **Optimization Problem**: The goal is to find the best possible solution from a set of feasible solutions.
- **Dynamic Programming**: This problem exhibits optimal substructure and overlapping subproblems, making it a perfect candidate for a dynamic programming approach (either recursive with memoization or a bottom-up iterative solution).
`,
  "catalan-numbers-recursive": `
### 💡 Problem Breakdown
Catalan numbers are a sequence of natural numbers that occur in various counting problems in combinatorics. The nth Catalan number can be defined recursively. The task is to compute the nth Catalan number.

### ⚙️ Solution Walkthrough
The recursive formula is \`C_n = Σ(i=0 to n-1) [C_i * C_(n-1-i)]\`. The base case is \`C_0 = 1\`.
\`\`\`javascript
function catalan(n) {
  // Base Case
  if (n <= 1) {
    return 1;
  }
  
  let res = 0;
  // Recursive calls based on the formula
  for (let i = 0; i < n; i++) {
    res += catalan(i) * catalan(n - 1 - i);
  }
  
  return res;
}
\`\`\`
1.  **Base Case**: The 0th and 1st Catalan numbers are 1.
2.  **Recursive Step**: The function iterates from 0 to \`n-1\`, making two recursive calls in each iteration according to the formula and summing up the results. This is highly inefficient without memoization.

### 📚 Key Concepts
- **Combinatorics**: Catalan numbers answer questions like "How many ways can you correctly match n pairs of parentheses?" or "How many unique Binary Search Trees can you form with n keys?".
- **Complex Recurrence Relation**: The recursion depends on a summation of the results of multiple smaller subproblems.
`,
  "array-pair-sum-sequence": `
### 💡 Problem Breakdown
The task is to take an array and create a new array by summing adjacent pairs. For \`[1, 2, 3, 4, 5]\`, the pairs are (1,2), (3,4), and (5,0), resulting in \`[3, 7, 5]\`.

### ⚙️ Solution Walkthrough
A recursive function can process the first two elements and then call itself on the rest of the array.
\`\`\`javascript
function pairSum(arr) {
  // Base Case: An empty array results in an empty array.
  if (arr.length === 0) {
    return [];
  }
  // Base Case: A single element is paired with 0.
  if (arr.length === 1) {
    return [arr[0]];
  }
  
  // Recursive Case: Sum the first two, and recurse on the rest.
  const sumOfFirstPair = arr[0] + arr[1];
  const restOfTheArray = arr.slice(2);
  
  return [sumOfFirstPair, ...pairSum(restOfTheArray)];
}
\`\`\`
1.  **Base Cases**: An empty array has no pairs. An array with one element has that element as the result.
2.  **Recursive Case**: The function calculates the sum of the first two elements. It then recursively calls itself on the rest of the array (skipping the first two elements) and prepends the calculated sum to the result.

### 📚 Key Concepts
- **List Processing**: A common pattern in functional programming where the head of a list is processed and combined with a recursive result from the tail.
`,
  "deep-equals-recursive": `
### 💡 Problem Breakdown
The goal is to compare two values (primitives, arrays, or objects) for "deep equality." This means that for objects and arrays, the comparison must be recursive, checking that their contents are also identical, not just that they are the same object in memory.

### ⚙️ Solution Walkthrough
The function must handle several cases based on the types of the inputs.
\`\`\`javascript
function deepEquals(val1, val2) {
  // 1. Primitive and strict equality check
  if (val1 === val2) return true;
  
  // 2. Type and null checks
  if (typeof val1 !== 'object' || val1 === null || typeof val2 !== 'object' || val2 === null) {
    return false;
  }

  // 3. Array check
  const isArray1 = Array.isArray(val1);
  const isArray2 = Array.isArray(val2);
  if (isArray1 !== isArray2) return false;

  // 4. Key comparison
  const keys1 = Object.keys(val1);
  const keys2 = Object.keys(val2);
  if (keys1.length !== keys2.length) return false;
  
  // 5. Recursive comparison of values
  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEquals(val1[key], val2[key])) {
      return false;
    }
  }
  
  return true;
}
\`\`\`
1.  **Base Case 1 (Strict Equality)**: If the values are strictly equal (\`===\`), they are equal. This handles primitives and the case where they are the same object reference.
2.  **Base Case 2 (Type Mismatch)**: If they are not objects at this point, they must be different primitive values, so return false.
3.  **Recursive Step**: The function gets the keys of both objects. If the key counts differ, they are not equal. Then, it iterates through the keys of the first object and recursively calls \`deepEquals\` on the corresponding values from both objects. If any recursive call returns false, the objects are not equal.

### 📚 Key Concepts
- **Type Checking**: The function relies heavily on \`typeof\` and \`Array.isArray\` to handle the logic correctly.
- **Composite Recursion**: The recursion operates on a composite structure (objects/arrays), breaking it down into its constituent parts for comparison.
`,
  "flood-fill-conceptual": `
### 💡 Problem Breakdown
Flood fill is an algorithm used in image editing programs to fill a connected, similarly-colored area with a new color. Starting from a single "seed" pixel, it changes its color and then recursively does the same for all of its neighbors that matched the original color.

### ⚙️ Solution Walkthrough
A recursive function would take the pixel coordinates (x, y), the original color to replace, and the new color.
\`\`\`javascript
// Conceptual, assuming a 2D array 'screen' represents pixels
function floodFill(screen, x, y, originalColor, newColor) {
  // Base Case 1: Check if coordinates are out of bounds.
  if (x < 0 || x >= screen.width || y < 0 || y >= screen.height) {
    return;
  }
  // Base Case 2: Check if the pixel is not the color we want to replace.
  if (screen[y][x] !== originalColor) {
    return;
  }
  // Base Case 3: If pixel is already the new color, avoid infinite loop.
  if (screen[y][x] === newColor) {
      return;
  }
  
  // Change the color of the current pixel.
  screen[y][x] = newColor;
  
  // Recursive calls for all 4 neighbors.
  floodFill(screen, x + 1, y, originalColor, newColor); // Right
  floodFill(screen, x - 1, y, originalColor, newColor); // Left
  floodFill(screen, x, y + 1, originalColor, newColor); // Down
  floodFill(screen, x, y - 1, originalColor, newColor); // Up
}
\`\`\`
1.  **Base Cases**: The recursion stops if the current pixel is outside the image boundaries, or if it doesn't have the color we're trying to replace.
2.  **Recursive Step**: If the current pixel is valid, we change its color. Then, we make four recursive calls to do the same for its direct neighbors (up, down, left, right).

### 📚 Key Concepts
- **Graph Traversal**: This is essentially a Depth-First Search (DFS) on the grid of pixels, where connected pixels of the same color form the edges of the graph.
- **State Change**: The algorithm works by changing the state of the data structure (the screen array), which in turn acts as a "visited" set, preventing infinite loops.
`,
  "tree-includes-recursive": `
### 💡 Problem Breakdown
The task is to determine if a given value exists anywhere in a binary tree. This requires traversing the tree until the value is found or all nodes have been visited.

### ⚙️ Solution Walkthrough
The recursive function checks the current node's value. If it's not a match, it recursively checks the left subtree and then the right subtree.
\`\`\`javascript
// Conceptual
function treeIncludes(node, targetValue) {
  // Base Case 1: Reached the end of a branch, value not found here.
  if (node === null) {
    return false;
  }
  // Base Case 2: Value found at the current node.
  if (node.value === targetValue) {
    return true;
  }
  
  // Recursive Case: Search in the left subtree OR the right subtree.
  return treeIncludes(node.left, targetValue) || treeIncludes(node.right, targetValue);
}
\`\`\`
1.  **Base Cases**: If the node is \`null\`, the target isn't in this branch. If the current node's value matches, we've found it.
2.  **Recursive Case**: If the current node is not a match, the result depends on whether the value can be found in either the left subtree OR the right subtree. The logical OR (\`||\`) operator elegantly handles this: if the search in the left subtree returns \`true\`, the search on the right is short-circuited and never even runs.

### 📚 Key Concepts
- **Tree Traversal**: The function performs a pre-order traversal of the tree to search for the value.
- **Short-circuiting**: Using \`||\` makes the search more efficient by stopping as soon as the first occurrence of the value is found.
`,
  "graph-dfs-conceptual": `
### 💡 Problem Breakdown
Depth-First Search (DFS) is a fundamental algorithm for traversing a graph. Starting from a root node, it explores as far as possible along each branch before backtracking. Recursion is a natural way to implement DFS.

### ⚙️ Solution Walkthrough
The recursive function takes a starting node and a "visited" set to prevent infinite loops in graphs that contain cycles.
\`\`\`javascript
// Conceptual, assuming an adjacency list representation of the graph
function dfs(graph, startNode, visited = new Set()) {
  // 1. Mark the current node as visited.
  visited.add(startNode);
  console.log('Visiting:', startNode); // Process the node
  
  // 2. Get the neighbors of the current node.
  const neighbors = graph[startNode];
  
  // 3. Recurse for each unvisited neighbor.
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      // Recursive call
      dfs(graph, neighbor, visited);
    }
  }
}
\`\`\`
1.  **State Management**: A \`visited\` set is crucial. It's passed through all recursive calls to keep track of which nodes have already been processed.
2.  **Base Case**: The recursion naturally stops when a node has no unvisited neighbors.
3.  **Recursive Step**: For each neighbor of the current node, if we haven't already visited it, we make a recursive call to start a new DFS from that neighbor.

### 📚 Key Concepts
- **Graph Traversal**: A key algorithm for problems involving networks, such as finding paths, checking for connectivity, or finding cycles.
- **State Tracking**: The \`visited\` set is essential to prevent the algorithm from getting stuck in an infinite loop if the graph contains cycles.
`,
  "phone-letter-combinations": `
### 💡 Problem Breakdown
Given a string of digits (2-9), the task is to generate all possible letter combinations that the number could represent, based on a standard telephone keypad mapping. This is a classic backtracking problem.

### ⚙️ Solution Walkthrough
A recursive helper function builds up a combination string. At each step, it iterates through the possible letters for the current digit and makes a recursive call for the next digit.
\`\`\`javascript
function letterCombinations(digits) {
  const result = [];
  const map = { '2':'abc', '3':'def', '4':'ghi', '5':'jkl', '6':'mno', '7':'pqrs', '8':'tuv', '9':'wxyz' };
  
  function backtrack(combination, nextDigits) {
    // Base Case: No more digits to process, we have a complete combination.
    if (nextDigits.length === 0) {
      if (combination.length > 0) result.push(combination);
      return;
    }
    
    const letters = map[nextDigits[0]];
    for (const letter of letters) {
      // Recursive call with the new combination and the rest of the digits.
      backtrack(combination + letter, nextDigits.slice(1));
    }
  }
  
  backtrack("", digits);
  return result;
}
\`\`\`
1.  **Base Case**: When there are no more digits to process, the current \`combination\` string is complete, so we add it to our results.
2.  **Recursive Step**: The function gets the string of possible letters for the current digit. It then loops through these letters. For each letter, it makes a recursive call, passing down the updated combination string and the remaining digits.

### 📚 Key Concepts
- **Backtracking**: The function explores the "tree" of all possible combinations. The loop and recursive call structure systematically builds every possible path.
- **Mapping**: A hash map (or simple object) is used to store the mapping from digits to letters for easy lookup.
`,
  "digital-root-recursive": `
### 💡 Problem Breakdown
The digital root of a number is the single-digit value obtained by an iterative process of summing digits, on each step using the result from the previous step as input to the digit summation. The process continues until a single-digit number is reached. For 942, the sum is 9+4+2=15. Since 15 is not a single digit, we repeat: 1+5=6. The digital root is 6.

### ⚙️ Solution Walkthrough
The recursive function calculates the sum of the digits. If that sum is still more than one digit long, it calls itself with the sum.
\`\`\`javascript
function digitalRoot(n) {
  // Base Case: If n is already a single digit, return it.
  if (n < 10) {
    return n;
  }
  
  // Sum the digits of the current number.
  let sum = 0;
  let tempN = n;
  while (tempN > 0) {
    sum += tempN % 10;
    tempN = Math.floor(tempN / 10);
  }
  
  // Recursive call on the sum.
  return digitalRoot(sum);
}
\`\`\`
1.  **Base Case**: The recursion stops when the number \`n\` is less than 10.
2.  **Recursive Step**: If \`n\` is 10 or greater, the function first iteratively calculates the sum of its digits. Then, it makes a recursive call to \`digitalRoot\` with this new sum.

### 📚 Key Concepts
- **Recursion on a Derived Value**: The recursive call is not on a smaller version of the input itself (like \`n-1\`), but on a new value derived from the input (the sum of its digits).
`,
  "step-combinations": `
### 💡 Problem Breakdown
This is a classic dynamic programming problem, often called "Climbing Stairs." Given \`n\` stairs, you can take 1, 2, or 3 steps at a time. The goal is to find the total number of unique ways to reach the top.

### ⚙️ Solution Walkthrough
The recursive logic is: "the number of ways to reach step \`n\` is the sum of the ways to reach step \`n-1\`, step \`n-2\`, and step \`n-3\`."
\`\`\`javascript
function countWays(n) {
  // Base Case: If n is 0, there is 1 way (do nothing).
  if (n === 0) {
    return 1;
  }
  // Base Case: If n is negative, this is not a valid path.
  if (n < 0) {
    return 0;
  }
  
  // Recursive Case: Sum of ways from the 3 possible previous steps.
  return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
}
\`\`\`
1.  **Base Cases**: The primary success case is reaching step 0, which counts as one valid way to have arrived. If we "overshoot" and \`n\` becomes negative, that path is invalid and contributes 0 ways.
2.  **Recursive Case**: The function makes three recursive calls representing the three possible last moves (a 1-step, 2-step, or 3-step hop) and sums their results. This is very inefficient without memoization due to many overlapping subproblems.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for \`n\` is built directly from the solutions for smaller values of \`n\`.
`,
  "find-uppercase-recursive": `
### 💡 Problem Breakdown
The goal is to find the first uppercase letter in a string using recursion. The function should search the string character by character.

### ⚙️ Solution Walkthrough
The function checks if the first character of the string is uppercase. If not, it calls itself on the rest of the string.
\`\`\`javascript
function findUppercase(str) {
  // Base Case: If the string is empty, no uppercase letter was found.
  if (str.length === 0) {
    return "Not found";
  }
  
  const firstChar = str[0];
  
  // Check if the character is a letter and is uppercase.
  if (firstChar >= 'A' && firstChar <= 'Z') {
    // Base Case: Found the first uppercase letter.
    return firstChar;
  }
  
  // Recursive Case: Search in the rest of the string.
  return findUppercase(str.slice(1));
}
\`\`\`
1.  **Base Cases**: The failure case is an empty string. The success case is when the first character of the current substring is uppercase.
2.  **Recursive Case**: If the first character is not an uppercase letter, the problem is reduced to searching the rest of the string.

### 📚 Key Concepts
- **Character Code Comparison**: The check \`firstChar >= 'A' && firstChar <= 'Z'\` is a common way to determine if a character is an uppercase letter.
`,
  "memoization-conceptual": `
### 💡 Problem Breakdown
Memoization is an optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It's a way to trade memory for speed. It's particularly useful for recursive functions with overlapping subproblems, like the naive Fibonacci calculation.

### ⚙️ Solution Walkthrough
We can create a higher-order function that takes a function and returns a memoized version of it.
\`\`\`javascript
function memoize(fn) {
  const cache = {}; // This cache is kept in a closure.
  
  return function(...args) {
    const key = JSON.stringify(args); // Create a key from the arguments.
    
    if (cache[key]) {
      // If the result is in the cache, return it.
      return cache[key];
    } else {
      // Otherwise, compute the result.
      const result = fn(...args);
      // Store it in the cache.
      cache[key] = result;
      // Return the result.
      return result;
    }
  };
}

// Usage:
// const slowFib = (n) => { ... };
// const fastFib = memoize(slowFib);
// fastFib(40); // First call is slow, subsequent calls with 40 or less are instant.
\`\`\`
1.  **Closure**: The \`cache\` object is enclosed within the returned function, so it persists between calls.
2.  **Caching Logic**: When the memoized function is called, it creates a unique key from its arguments. It first checks if a result for this key already exists in the cache. If yes, it returns the cached value. If no, it calls the original function, stores the result in the cache, and then returns it.

### 📚 Key Concepts
- **Higher-Order Functions**: \`memoize\` is a higher-order function because it takes a function as input and returns a new function.
- **Closures**: The persistence of the \`cache\` object is made possible by closures.
- **Dynamic Programming**: Memoization is the "top-down" approach to dynamic programming.
`,
  "permutations-with-duplicates": `
### 💡 Problem Breakdown
This is a variation of the standard permutations problem. Given an array that may contain duplicate numbers, the task is to find all *unique* permutations. For \`[1, 1, 2]\`, the unique permutations are \`[1, 1, 2]\`, \`[1, 2, 1]\`, and \`[2, 1, 1]\`.

### ⚙️ Solution Walkthrough
A common approach is to use a backtracking algorithm similar to the standard permutations problem, but with an added condition to handle duplicates. Sorting the input array first makes it easier to skip duplicates.
\`\`\`javascript
// Conceptual
function permuteUnique(nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort to handle duplicates
  
  function backtrack(currentPerm, remainingNums) {
    if (remainingNums.length === 0) {
      result.push([...currentPerm]);
      return;
    }
    
    for (let i = 0; i < remainingNums.length; i++) {
      // *** Key change is here: ***
      // If the current element is the same as the previous one,
      // and we have already processed the previous one in this loop, skip it.
      if (i > 0 && remainingNums[i] === remainingNums[i - 1]) {
        continue;
      }
      
      const num = remainingNums[i];
      currentPerm.push(num);
      const newRemaining = [...remainingNums.slice(0, i), ...remainingNums.slice(i + 1)];
      backtrack(currentPerm, newRemaining);
      currentPerm.pop(); // Backtrack
    }
  }
  
  backtrack([], nums);
  return result;
}
\`\`\`
1.  **Sorting**: Sorting the initial array allows us to easily identify adjacent duplicates.
2.  **Backtracking with a Skip**: The core logic is in the loop. The condition \`i > 0 && remainingNums[i] === remainingNums[i - 1]\` prevents us from starting a new permutation path with a duplicate number if we've already started a path with that same number at the current level of recursion.

### 📚 Key Concepts
- **Backtracking with Constraints**: This is a more advanced backtracking problem where an additional constraint is added to prune duplicate branches from the search tree.
`,
  "longest-common-subsequence-conceptual": `
### 💡 Problem Breakdown
The Longest Common Subsequence (LCS) problem is to find the longest subsequence common to two sequences (e.g., two strings). A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements. For "AGGTAB" and "GXTXAYB", the LCS is "GTAB".

### ⚙️ Solution Walkthrough
The recursive solution considers the last characters of the two strings.
\`\`\`javascript
// Conceptual
function lcs(str1, str2, m, n) { // m, n are lengths
  // Base Case: If either string is empty, the LCS is 0.
  if (m === 0 || n === 0) {
    return 0;
  }
  
  // If the last characters match...
  if (str1[m - 1] === str2[n - 1]) {
    // The length is 1 + LCS of the strings without their last characters.
    return 1 + lcs(str1, str2, m - 1, n - 1);
  } else {
    // If they don't match, find the max of two possibilities:
    // 1. LCS of str1 without its last char, and all of str2.
    // 2. LCS of all of str1, and str2 without its last char.
    return Math.max(lcs(str1, str2, m, n - 1), lcs(str1, str2, m - 1, n));
  }
}
\`\`\`
1.  **Base Case**: If one of the strings is empty, there can be no common subsequence.
2.  **Recursive Cases**:
    *   If the last characters match, they are part of the LCS. We add 1 to our count and find the LCS for the rest of the strings.
    *   If they don't match, the LCS must be the longer of two possibilities: the LCS of the strings if we discard the last character of \`str1\`, or the LCS if we discard the last character of \`str2\`.

### 📚 Key Concepts
- **Dynamic Programming**: This problem has optimal substructure and overlapping subproblems. The naive recursive solution is exponential, and memoization is required for it to be efficient.
`,
  "edit-distance-conceptual": `
### 💡 Problem Breakdown
Edit distance (specifically, Levenshtein distance) is a measure of the difference between two sequences. It's the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into the other.

### ⚙️ Solution Walkthrough
The recursive solution is similar to LCS, considering the last characters of the two strings.
\`\`\`javascript
// Conceptual
function editDistance(str1, str2, m, n) { // m, n are lengths
  // Base Case: If one string is empty, we need to insert all chars of the other.
  if (m === 0) return n;
  if (n === 0) return m;
  
  // If the last characters are the same, no operation is needed for them.
  // Recurse on the strings without their last characters.
  if (str1[m - 1] === str2[n - 1]) {
    return editDistance(str1, str2, m - 1, n - 1);
  }
  
  // If last characters are different, consider all three operations
  // and find the minimum cost.
  return 1 + Math.min(
    editDistance(str1, str2, m, n - 1),    // Insert
    editDistance(str1, str2, m - 1, n),    // Remove
    editDistance(str1, str2, m - 1, n - 1) // Replace
  );
}
\`\`\`
1.  **Base Case**: If one string is empty, the distance is the length of the other string (that many insertions are needed).
2.  **Recursive Cases**:
    *   If the last characters match, they don't contribute to the distance. We find the distance for the rest of the strings.
    *   If they don't match, we need to perform one operation. We find the minimum cost by recursively calculating the cost of an insertion, a deletion, and a replacement, and taking the minimum of the three.

### 📚 Key Concepts
- **Dynamic Programming**: Another classic DP problem that requires memoization to be efficient. The solution builds upon the solutions to smaller subproblems (comparing shorter strings).
`,
  "is-prime-recursive": `
### 💡 Problem Breakdown
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The task is to check if a number is prime using recursion.

### ⚙️ Solution Walkthrough
A recursive helper function can be used to check for divisibility, starting from a divisor of 2.
\`\`\`javascript
function isPrime(n) {
  if (n <= 1) return false;
  
  function check(divisor) {
    // Base Case: If the divisor squared is greater than n, we've checked all necessary factors.
    if (divisor * divisor > n) {
      return true;
    }
    // Base Case: n is divisible by the current divisor, so it's not prime.
    if (n % divisor === 0) {
      return false;
    }
    // Recursive Case: Check the next divisor.
    return check(divisor + 1);
  }
  
  return check(2);
}
\`\`\`
1.  **Initial Check**: Numbers less than or equal to 1 are not prime.
2.  **Base Cases**: The recursion stops successfully if our divisor grows so large that its square exceeds the number (we only need to check for factors up to the square root of n). It stops with failure if a divisor is found.
3.  **Recursive Case**: If no divisor has been found yet, we continue checking with the next integer.

### 📚 Key Concepts
- **Trial Division**: The algorithm is a recursive version of trial division for primality testing.
- **Optimization**: Checking only up to the square root of the number is a key optimization.
`,
  "all-unique-chars-recursive": `
### 💡 Problem Breakdown
The goal is to determine if all characters in a string are unique. For example, "abcde" is true, but "hello" is false.

### ⚙️ Solution Walkthrough
A recursive function can check the string character by character, keeping track of the characters it has already seen.
\`\`\`javascript
function hasUniqueChars(str, seen = new Set()) {
  // Base Case: If the string is empty, all previous characters were unique.
  if (str.length === 0) {
    return true;
  }
  
  const firstChar = str[0];
  
  // Base Case: If we've already seen this character, it's not unique.
  if (seen.has(firstChar)) {
    return false;
  }
  
  // Add the current character to the set of seen characters.
  seen.add(firstChar);
  
  // Recursive Case: Check the rest of the string.
  return hasUniqueChars(str.slice(1), seen);
}
\`\`\`
1.  **State Management**: A \`Set\` is used to efficiently keep track of the characters encountered so far. It's passed down through the recursive calls.
2.  **Base Cases**: An empty string means success. Finding a character that's already in the \`seen\` set means failure.
3.  **Recursive Step**: If the current character is unique so far, we add it to our set and then check the rest of the string.

### 📚 Key Concepts
- **Sets for Uniqueness**: A \`Set\` is the ideal data structure for this problem because its \`.has()\` check is very fast (average O(1)), making the overall algorithm efficient.
`,
  "fractal-generation-conceptual": `
### 💡 Problem Breakdown
Fractals are complex patterns that are self-similar across different scales. They are created by repeating a simple process over and over in an ongoing feedback loop. Recursion is the natural way to model this process.

### ⚙️ Solution Walkthrough
Let's consider generating a simple fractal tree.
\`\`\`javascript
// Conceptual, using a canvas-like drawing API
function drawTree(x, y, length, angle, depth) {
  // Base Case: Stop recursing when we reach the desired depth.
  if (depth === 0) return;
  
  // Calculate the end point of the current branch.
  const endX = x + length * Math.cos(angle);
  const endY = y + length * Math.sin(angle);
  
  // Draw the branch.
  drawLine(x, y, endX, endY);
  
  // Recursive calls to draw two smaller branches from the end point.
  drawTree(endX, endY, length * 0.8, angle - 0.3, depth - 1);
  drawTree(endX, endY, length * 0.8, angle + 0.3, depth - 1);
}
\`\`\`
1.  **Base Case**: The recursion is controlled by a \`depth\` parameter. When it reaches 0, we stop drawing branches.
2.  **Recursive Step**: The function first draws one segment (a branch). Then, it makes two recursive calls to draw two smaller branches sprouting from the end of the current one, each at a slightly different angle and with a shorter length.

### 📚 Key Concepts
- **Self-Similarity**: The core property of fractals. The recursive calls create smaller versions of the original structure.
- **Parametric Control**: Parameters like \`length\` and \`angle\` are modified in each recursive call to create the branching and shrinking effect.
`,
  "is-valid-bst-conceptual": `
### 💡 Problem Breakdown
A Binary Search Tree (BST) has a specific ordering property: for any given node, all values in its left subtree must be smaller, and all values in its right subtree must be larger. The task is to validate if a given binary tree adheres to this property throughout its entire structure.

### ⚙️ Solution Walkthrough
A simple recursive check that only compares a node with its immediate children is not enough. We must ensure that *all* nodes in the left subtree are smaller and *all* in the right are larger. This is done by passing down minimum and maximum allowed values for each subtree.
\`\`\`javascript
// Conceptual
function isValidBST(node, min = null, max = null) {
  // Base Case: An empty tree is a valid BST.
  if (node === null) {
    return true;
  }
  
  // Check if the current node's value violates the min/max constraints.
  if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
    return false;
  }
  
  // Recursive Step:
  // For the left subtree, the max value it can have is the current node's value.
  // For the right subtree, the min value it can have is the current node's value.
  return isValidBST(node.left, min, node.value) && isValidBST(node.right, node.value, max);
}
\`\`\`
1.  **Base Case**: A \`null\` node doesn't violate any rules.
2.  **Constraint Check**: The function checks if the current node's value is within the valid range passed down from its parent.
3.  **Recursive Step**: The magic is in tightening the constraints for the children. When going left, the current node's value becomes the new *maximum*. When going right, the current node's value becomes the new *minimum*.

### 📚 Key Concepts
- **Invariant**: The BST property is an invariant that must hold true for the entire tree. The recursive solution works by checking this invariant at every node.
- **State Passing**: The \`min\` and \`max\` parameters carry the state (the valid range) down the tree.
`,
  "tree-sum-recursive": `
### 💡 Problem Breakdown
The goal is to calculate the sum of all the values of all nodes in a binary tree.

### ⚙️ Solution Walkthrough
The recursive logic is: "the total sum of a tree is the current node's value, plus the sum of its left subtree, plus the sum of its right subtree."
\`\`\`javascript
// Conceptual
function sumTree(node) {
  // Base Case: The sum of an empty tree is 0.
  if (node === null) {
    return 0;
  }
  
  // Recursive Step: Current value + sum of left subtree + sum of right subtree.
  return node.value + sumTree(node.left) + sumTree(node.right);
}
\`\`\`
1.  **Base Case**: A \`null\` node (an empty subtree) contributes 0 to the sum.
2.  **Recursive Step**: For any given node, the function adds its own value to the results of the recursive calls on its left and right children. This is a post-order traversal pattern.

### 📚 Key Concepts
- **Post-order Traversal**: The values of the subtrees are computed before the value of the current node is incorporated into the final sum.
- **Aggregation**: The final sum is aggregated from the values of all nodes in the tree.
`,
  "array-interleave-recursive": `
### 💡 Problem Breakdown
The task is to take two arrays of equal length and "interleave" or "zip" them together. For \`['a', 'b']\` and \`[1, 2]\`, the result should be \`['a', 1, 'b', 2]\`.

### ⚙️ Solution Walkthrough
The recursive logic is: "the interleaved version of two arrays is the first element of the first array, followed by the first element of the second array, followed by the interleaved version of the rest of both arrays."
\`\`\`javascript
function interleave(arr1, arr2) {
  // Base Case: If the arrays are empty, the result is an empty array.
  if (arr1.length === 0) {
    return [];
  }
  
  const first1 = arr1[0];
  const first2 = arr2[0];
  const rest1 = arr1.slice(1);
  const rest2 = arr2.slice(1);
  
  // Recursive Case: Prepend the first pair to the interleaved rest.
  return [first1, first2, ...interleave(rest1, rest2)];
}
\`\`\`
1.  **Base Case**: When the input arrays are empty, we're done.
2.  **Recursive Step**: The function takes the first element from each array. It then makes a recursive call with the rest of both arrays. It constructs the final result by creating a new array containing the two first elements and spreading the result of the recursive call after them.

### 📚 Key Concepts
- **List Processing**: A common pattern for processing two lists in parallel.
`,
  "is-power-of-two-recursive": `
### 💡 Problem Breakdown
The goal is to determine if a given positive integer is a power of two (e.g., 1, 2, 4, 8, 16, ...). The recursive logic is: "a number \`n\` is a power of two if it's 1, or if it's even and \`n/2\` is also a power of two."

### ⚙️ Solution Walkthrough
The function repeatedly divides the number by 2 until it hits a base case.
\`\`\`javascript
function isPowerOfTwo(n) {
  // Base Case: 1 is the 0th power of 2.
  if (n === 1) {
    return true;
  }
  // Base Case: If n is less than 1 or not even, it can't be a power of two.
  if (n < 1 || n % 2 !== 0) {
    return false;
  }
  
  // Recursive Case: Check if n/2 is a power of two.
  return isPowerOfTwo(n / 2);
}
\`\`\`
1.  **Base Cases**: The success case is when the number is reduced to 1. The failure cases are numbers less than 1 (like 0 or fractions) or any odd number greater than 1.
2.  **Recursive Case**: If the number is even and greater than 1, we continue the process by checking if \`n / 2\` is a power of two.

### 📚 Key Concepts
- **Properties of Numbers**: The solution relies on the mathematical properties of powers of two (they are always even, and dividing by 2 yields another power of two).
`,
  "is-power-of-three-recursive": `
### 💡 Problem Breakdown
Similar to the power of two problem, this task is to determine if a positive integer is a power of three (e.g., 1, 3, 9, 27, ...). The recursive logic is: "a number \`n\` is a power of three if it's 1, or if it's divisible by 3 and \`n/3\` is also a power of three."

### ⚙️ Solution Walkthrough
The function repeatedly divides the number by 3.
\`\`\`javascript
function isPowerOfThree(n) {
  // Base Case: 1 is the 0th power of 3.
  if (n === 1) {
    return true;
  }
  // Base Case: If n is less than 1 or not divisible by 3, it fails.
  if (n < 1 || n % 3 !== 0) {
    return false;
  }
  
  // Recursive Case: Check if n/3 is a power of three.
  return isPowerOfThree(n / 3);
}
\`\`\`
1.  **Base Cases**: The success case is 1. The failure cases are numbers less than 1 or any number not divisible by 3.
2.  **Recursive Case**: If the number is divisible by 3 and greater than 1, we continue by checking \`n / 3\`.

### 📚 Key Concepts
- **Generalization**: The logic is identical to the power of two problem, just with a different divisor, showing how the pattern can be generalized.
`,
  "remove-adjacent-duplicates-recursive": `
### 💡 Problem Breakdown
The task is to remove consecutive duplicate characters from a string. For "abbaca", the result should be "abaca".

### ⚙️ Solution Walkthrough
A recursive function can process the string by comparing the first two characters.
\`\`\`javascript
function removeAdjacentDuplicates(str) {
  // Base Case: Strings of length 0 or 1 have no adjacent duplicates.
  if (str.length <= 1) {
    return str;
  }
  
  // If the first two characters are the same...
  if (str[0] === str[1]) {
    // ...recursively process the string starting from the second character.
    return removeAdjacentDuplicates(str.slice(1));
  } else {
    // ...otherwise, keep the first character and process the rest.
    return str[0] + removeAdjacentDuplicates(str.slice(1));
  }
}
\`\`\`
1.  **Base Case**: A string that is too short to have adjacent duplicates is returned as is.
2.  **Recursive Cases**:
    *   If the first two characters are duplicates, we effectively discard the first one and return the result of processing the rest of the string from the second character.
    *   If they are different, we keep the first character and append it to the result of processing the rest of the string.

### 📚 Key Concepts
- **Lookahead**: The logic relies on looking ahead one character to make a decision about the current character.
`,
  "invert-binary-tree-conceptual": `
### 💡 Problem Breakdown
Inverting a binary tree means that for every node in the tree, its left and right children are swapped. This results in a mirror image of the original tree.

### ⚙️ Solution Walkthrough
The recursive algorithm is very straightforward and operates from the root down.
\`\`\`javascript
// Conceptual
function invertTree(node) {
  // Base Case: If the node is null, there's nothing to invert.
  if (node === null) {
    return null;
  }
  
  // Swap the children of the current node.
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
  
  // Recursive calls for the children.
  invertTree(node.left);
  invertTree(node.right);
  
  return node;
}
\`\`\`
1.  **Base Case**: The recursion stops when it reaches a \`null\` node (beyond a leaf).
2.  **Action**: For the current node, we swap its left and right child pointers.
3.  **Recursive Step**: We then make recursive calls to \`invertTree\` on both of the (newly positioned) children to continue the process down the entire tree. This is a pre-order traversal pattern.

### 📚 Key Concepts
- **Pre-order Traversal**: The action (swapping) is performed on the parent node *before* the recursive calls are made on its children.
- **In-place Modification**: This algorithm modifies the tree structure directly without creating a new tree.
`,
  "decode-ways-conceptual": `
### 💡 Problem Breakdown
A message containing letters A-Z is encoded into numbers using the mapping A->1, B->2, ..., Z->26. Given a string of digits, the task is to find the total number of ways it can be decoded. For "12", it could be "AB" (1, 2) or "L" (12), so there are 2 ways.

### ⚙️ Solution Walkthrough
A recursive function can explore the two main possibilities at each step: decoding a single digit, or decoding two digits.
\`\`\`javascript
// Conceptual
function numDecodings(s) {
  // Helper with index to avoid slicing strings
  function decode(index) {
    // Base Case: If we've reached the end, it's one valid decoding.
    if (index === s.length) return 1;
    // Base Case: '0' cannot be decoded by itself.
    if (s[index] === '0') return 0;
    // Base Case: Reached the last digit.
    if (index === s.length - 1) return 1;
    
    // Recursive call for decoding a single digit.
    let ways = decode(index + 1);
    
    // Check if a two-digit decoding is possible.
    const twoDigit = parseInt(s.substring(index, index + 2));
    if (twoDigit <= 26) {
      ways += decode(index + 2);
    }
    
    return ways;
  }
  return decode(0);
}
\`\`\`
1.  **Base Cases**: A successful path reaches the end of the string. A path fails if it encounters a '0' that isn't part of a '10' or '20'.
2.  **Recursive Step**: The total number of ways from the current position is the sum of:
    *   The number of ways if we decode just the current digit (and recurse from the next position).
    *   The number of ways if we decode the current and next digit as a pair (if they form a valid number from 10-26), and then recurse from two positions ahead.
3.  **Memoization**: This is another classic dynamic programming problem where memoization is required to make it efficient.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for the whole string is built from solutions for its suffixes.
`,
  "unique-binary-search-trees-conceptual": `
### 💡 Problem Breakdown
The task is to find how many structurally unique Binary Search Trees (BSTs) can be created that store the values from 1 to \`n\`.

### ⚙️ Solution Walkthrough
This problem can be solved by iterating through each number \`i\` from 1 to \`n\` and considering it as the root of the BST. If \`i\` is the root, then all numbers from \`1\` to \`i-1\` must be in the left subtree, and all numbers from \`i+1\` to \`n\` must be in the right subtree. The total number of trees is the sum of (number of unique left subtrees) * (number of unique right subtrees) for each possible root. This is a direct application of Catalan numbers.
\`\`\`javascript
// Conceptual
function numTrees(n) {
  // This is the same recurrence as the Catalan numbers problem.
  // We can use a memoization cache to make it efficient.
  const memo = new Array(n + 1).fill(0);
  
  function count(numKeys) {
    if (numKeys <= 1) return 1;
    if (memo[numKeys] > 0) return memo[numKeys];
    
    let sum = 0;
    for (let i = 1; i <= numKeys; i++) {
      let left = count(i - 1);
      let right = count(numKeys - i);
      sum += left * right;
    }
    
    memo[numKeys] = sum;
    return sum;
  }
  
  return count(n);
}
\`\`\`
1.  **Base Case**: There is 1 way to form a tree with 0 or 1 node.
2.  **Recursive Step**: The function iterates through all possible root choices (\`i\`). For each choice, it recursively calculates the number of ways to form the left and right subtrees and multiplies them. The total is the sum of these products over all possible root choices.

### 📚 Key Concepts
- **Catalan Numbers**: The solution to this problem is the nth Catalan number.
- **Dynamic Programming with Memoization**: Storing the results for \`count(k)\` is essential for an efficient solution.
`,
  "word-squares-conceptual": `
### 💡 Problem Breakdown
A "word square" is a set of words where the kth row and the kth column read the same string. Given a list of words, the task is to find all possible word squares. This is a backtracking problem.

### ⚙️ Solution Walkthrough
A recursive function builds the square row by row.
\`\`\`javascript
// Conceptual
function findWordSquares(words) {
  const result = [];
  const trie = buildTrie(words); // Pre-process words into a Trie for efficient prefix search.
  const n = words[0].length;
  
  function backtrack(currentSquare) {
    // Base Case: If the square is complete, add it to results.
    if (currentSquare.length === n) {
      result.push([...currentSquare]);
      return;
    }
    
    // Determine the prefix for the next word.
    const rowIndex = currentSquare.length;
    let prefix = "";
    for (let i = 0; i < rowIndex; i++) {
      prefix += currentSquare[i][rowIndex];
    }
    
    // Find all words in the dictionary with that prefix.
    const candidates = findWordsWithPrefix(trie, prefix);
    
    // Recurse for each candidate word.
    for (const candidate of candidates) {
      currentSquare.push(candidate);
      backtrack(currentSquare);
      currentSquare.pop(); // Backtrack
    }
  }
  
  for (const word of words) {
    backtrack([word]);
  }
  return result;
}
\`\`\`
1.  **Data Structure**: A Trie is the ideal data structure to store the dictionary, as it allows for very fast searching of all words with a given prefix.
2.  **Base Case**: A solution is found when the square has \`n\` rows.
3.  **Recursive/Backtracking Step**: For the next row, we determine the required prefix by reading down the columns of the words already in our square. We find all words that match this prefix. For each of these candidate words, we add it to the square, make a recursive call, and then backtrack.

### 📚 Key Concepts
- **Backtracking**: Systematically exploring all possible ways to build the square.
- **Trie (Prefix Tree)**: A specialized tree data structure that is highly optimized for prefix-based searches, making this algorithm feasible.
`,
  "robot-in-a-grid-conceptual": `
### 💡 Problem Breakdown
The problem is to find a path for a robot from the top-left to the bottom-right of a grid. The robot can only move right and down, and some cells are blocked. This is a pathfinding problem that can be solved with recursion.

### ⚙️ Solution Walkthrough
A recursive function explores a path. It tries to move right first, then down. If a path leads to a dead end, it returns failure, causing the previous call to try the other direction (backtracking).
\`\`\`javascript
// Conceptual
function findPath(grid) {
  const path = [];
  const failedPoints = new Set(); // Memoization for failed paths
  
  function getPath(row, col) {
    // Base Case: Out of bounds or on a blocked cell.
    if (row < 0 || col < 0 || grid[row][col] === 'blocked') {
      return false;
    }
    
    // If we've already determined this point fails, don't try again.
    if (failedPoints.has(\`\${row},\${col}\`)) {
        return false;
    }
    
    const isAtOrigin = (row === 0 && col === 0);
    
    // Recursive Step: If we are at the origin OR we can get here from the top or left...
    if (isAtOrigin || getPath(row, col - 1) || getPath(row - 1, col)) {
      // ...then this point is on a valid path.
      path.push([row, col]);
      return true;
    }
    
    // This point is not on a valid path. Cache it.
    failedPoints.add(\`\${row},\${col}\`);
    return false;
  }
  
  if (getPath(grid.length - 1, grid[0].length - 1)) {
    return path;
  }
  return null; // No path found
}
\`\`\`
1.  **Base Cases**: The recursion stops if the robot goes out of bounds or hits a blocked cell. A successful base case is reaching the destination (or, in this implementation, working backwards from the destination to the origin).
2.  **Recursive Step**: The function checks if a path exists from either the cell to the left or the cell above. If either recursive call returns true, it means the current cell is part of a valid path.
3.  **Memoization**: Caching the points that are known to not be on any valid path (\`failedPoints\`) is a crucial optimization to prevent re-exploring dead ends.

### 📚 Key Concepts
- **Pathfinding**: A common category of algorithms.
- **Backtracking**: The recursive calls naturally explore paths. If a path fails (returns false), the algorithm effectively backtracks to try an alternative route.
`,
  "magic-index-conceptual": `
### 💡 Problem Breakdown
A "magic index" in a sorted array \`A\` is an index \`i\` where \`A[i] = i\`. The task is to find such an index, if one exists. Because the array is sorted, we can use a binary search-like approach.

### ⚙️ Solution Walkthrough
A recursive function performs a binary search on the array.
\`\`\`javascript
// Conceptual
function findMagicIndex(arr, start = 0, end = arr.length - 1) {
  // Base Case: Invalid range.
  if (end < start) {
    return -1;
  }
  
  const midIndex = Math.floor((start + end) / 2);
  const midValue = arr[midIndex];
  
  // Base Case: Found the magic index.
  if (midValue === midIndex) {
    return midIndex;
  }
  
  // Recursive Steps: Search the appropriate half.
  
  // Search left side.
  const leftEnd = Math.min(midIndex - 1, midValue);
  const left = findMagicIndex(arr, start, leftEnd);
  if (left >= 0) {
    return left;
  }
  
  // Search right side.
  const rightStart = Math.max(midIndex + 1, midValue);
  const right = findMagicIndex(arr, rightStart, end);
  
  return right;
}
\`\`\`
1.  **Base Case**: The search fails if the start index crosses the end index. A successful base case is finding \`A[i] === i\`.
2.  **Recursive Step**: We look at the middle element, \`A[mid]\`.
    *   If \`A[mid] < mid\`, a magic index cannot possibly be on the left side (since elements would be even smaller than their indices). We must search the right side.
    *   If \`A[mid] > mid\`, a magic index cannot possibly be on the right side. We must search the left side.
    *   *Note*: If the array elements are not distinct, we might have to search both sides. The code above handles the non-distinct case.

### 📚 Key Concepts
- **Binary Search Modification**: This is a clever adaptation of binary search. Instead of comparing the target value to the middle element, we compare the middle element's value to its own index to decide how to narrow the search space.
`,
};
