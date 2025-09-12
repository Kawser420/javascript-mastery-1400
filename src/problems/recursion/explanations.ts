
export const explanations: Record<string, string> = {
  'factorial-recursive': `
### 💡 Problem Breakdown
The goal is to calculate the factorial of a number using recursion. A factorial, denoted by \`n!\`, is the product of all positive integers up to \`n\`. A recursive function is one that calls itself to solve a problem. It needs a base case to stop and a recursive step to continue.

### ⚙️ Solution Walkthrough
The solution directly translates the mathematical definition of factorial (\`n! = n * (n-1)!\`) into a recursive function.
\`\`\`javascript
function factorial(x) {
    // Base case: The simplest case that stops the recursion. 0! is 1.
    if (x === 0) {
        return 1;
    }
    // Recursive step: The function calls itself with a smaller problem.
    return x * factorial(x - 1);
}
\`\`\`
-   **Base Case**: \`if (x === 0) { return 1; }\`. This is the stopping condition. When the input gets down to 0, the chain of recursive calls starts to resolve.
-   **Recursive Step**: \`return x * factorial(x - 1);\`. The function calls itself with a decremented number (\`x - 1\`). It multiplies the current number \`x\` by the result of the factorial of the next smaller number.

### 📚 Key Concepts
-   **Recursion**: A problem-solving technique where the solution depends on solutions to smaller instances of the same problem.
-   **Base Case**: The condition that terminates the recursion. Without it, you get a stack overflow error.
`,
  'fibonacci-recursive': `
### 💡 Problem Breakdown
The Fibonacci sequence is a series where each number is the sum of the two preceding ones, starting from 0 and 1. The task is to find the Nth number in this sequence using a recursive function.

### ⚙️ Solution Walkthrough
The solution is a direct implementation of the recursive definition: \`fib(n) = fib(n-1) + fib(n-2)\`.
\`\`\`javascript
function fib(x) {
    // Base cases: Two base cases are needed to start the sequence.
    if (x <= 1) {
        return x;
    }
    // Recursive step: The function calls itself twice.
    return fib(x - 1) + fib(x - 2);
}
\`\`\`
1.  **Base Cases**: \`if (x <= 1) { return x; }\` handles both \`fib(0)\` (returns 0) and \`fib(1)\` (returns 1).
2.  **Recursive Step**: \`return fib(x - 1) + fib(x - 2);\`. The function calls itself twice to get the two preceding numbers and adds them. This is inefficient due to re-calculating the same values many times, but it's a classic recursion example.

### 📚 Key Concepts
-   **Tree Recursion**: When a recursive function makes more than one recursive call in its recursive step, its call structure branches out like a tree.
-   **Computational Complexity**: This simple recursive solution has an exponential time complexity (O(2^n)), which is very slow for larger numbers.
`,
  'sum-array-recursive': `
### 💡 Problem Breakdown
The goal is to calculate the sum of all numbers in an array using recursion instead of a standard loop. The recursive approach involves breaking the problem down: the sum of an array is the first element plus the sum of the rest of the array.

### ⚙️ Solution Walkthrough
The function adds the first element to the result of calling itself with the remainder of the array.
\`\`\`javascript
function sum(array) {
    // Base case: The sum of an empty array is 0.
    if (array.length === 0) {
        return 0;
    }
    // Recursive step: Add the first element to the sum of the rest.
    return array[0] + sum(array.slice(1));
}
\`\`\`
1.  **Base Case**: \`if (array.length === 0) { return 0; }\`. This is our stopping condition.
2.  **Recursive Step**: It takes the first element (\`array[0]\`) and adds it to the result of calling \`sum\` on a smaller version of the array (\`array.slice(1)\`), which contains all elements except the first.

### 📚 Key Concepts
-   **Divide and Conquer**: A strategy where a problem is broken down into smaller, self-similar subproblems.
-   **`Array.prototype.slice()`**: A crucial method for this pattern, as it creates the "smaller problem" to pass to the next recursive call without modifying the original array.
`,
  'power-recursive': `
### 💡 Problem Breakdown
The goal is to calculate a base number raised to the power of an exponent (e.g., 2³ = 8) using recursion. The problem can be defined recursively: `x^y = x * x^(y-1)`.

### ⚙️ Solution Walkthrough
The function multiplies the base by the result of calling itself with a decremented exponent.
\`\`\`javascript
function power(base, exp) {
    // Base case: Any number to the power of 0 is 1.
    if (exp === 0) {
        return 1;
    }
    // Recursive step: base * base^(exp-1)
    return base * power(base, exp - 1);
}
\`\`\`
1.  **Base Case**: \`if (exp === 0) { return 1; }\` is the stopping condition.
2.  **Recursive Step**: The function breaks the problem down by multiplying the `base` with the result of `base` raised to a smaller power (`exp - 1`).

### 📚 Key Concepts
-   **Recursive Definition**: Translating a mathematical recursive definition into a programming function.
`,
  'reverse-string-recursive': `
### 💡 Problem Breakdown
The task is to reverse a string using recursion. The recursive insight is that a reversed string is its last character followed by the reverse of the rest of the string. Or, alternatively, the reverse of the first character's "tail" followed by the first character.

### ⚙️ Solution Walkthrough
The function recursively reverses the "substring" (the string without its first character) and then appends the first character to the end.
\`\`\`javascript
function reverse(str) {
    // Base case: The reverse of an empty string is itself.
    if (str === "") {
        return "";
    }
    // Recursive step: reverse the rest of the string, then add the first char.
    return reverse(str.substring(1)) + str.charAt(0);
}
\`\`\`
1.  **Base Case**: An empty string is the simplest case and stops the recursion.
2.  **Recursive Step**: For "hello", it calls `reverse("ello")` and waits. When that returns "olle", it concatenates it with "h" to get "olleh".

### 📚 Key Concepts
-   **String Manipulation**: Using methods like `.substring()` and `.charAt()` to break down the problem.
-   **Call Stack**: The call stack manages the intermediate results, holding onto the `str.charAt(0)` from each call until the base case is reached and the results can be concatenated on the way back up.
`,
  'is-palindrome-recursive': `
### 💡 Problem Breakdown
A palindrome reads the same forwards and backwards. The recursive approach is to check if the first and last characters are the same. If they are, then the problem reduces to checking if the *inner* substring is also a palindrome.

### ⚙️ Solution Walkthrough
The function compares the first and last characters and then recursively calls itself on the substring between them.
\`\`\`javascript
function isPalindrome(str) {
    // Base case: A string with 0 or 1 characters is always a palindrome.
    if (str.length <= 1) {
        return true;
    }
    // Check if first and last characters match.
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    // Recursive step: Check the inner substring.
    return isPalindrome(str.substring(1, str.length - 1));
}
\`\`\`
1.  **Base Cases**: An empty or single-character string is a palindrome. This stops the recursion. A mismatch of the outer characters also provides an early exit.
2.  **Recursive Step**: The problem is simplified by slicing off the first and last characters and checking the smaller string.

### 📚 Key Concepts
-   **Recursive Problem Reduction**: The core of recursion is simplifying the problem with each call.
`,
  'range-of-numbers-recursive': `
### 💡 Problem Breakdown
The goal is to generate an array of sequential numbers from a start to an end value using recursion.

### ⚙️ Solution Walkthrough
The function recursively generates the range for `n-1` and then pushes `n` onto the result.
\`\`\`javascript
function range(startNum, endNum) {
    // Base case: If start is greater than end, the range is empty.
    if (startNum > endNum) {
        return [];
    }
    // Recursive step: Generate the range up to endNum-1, then add endNum.
    const numbers = range(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
}
\`\`\`
1.  **Base Case**: When the end number becomes less than the start, we've gone past the beginning of the range and return an empty array to start building upon.
2.  **Recursive Step**: The function solves the problem for a smaller range (`endNum - 1`), and once that result is returned, it adds the current `endNum` to complete the range for its level.

### 📚 Key Concepts
-   **Building up a result**: The final array is constructed as the recursive calls return and unwind from the call stack.
`,
  'greatest-common-divisor-recursive': `
### 💡 Problem Breakdown
The task is to find the Greatest Common Divisor (GCD) of two integers. The Euclidean algorithm is a very efficient method for this, and it has a natural recursive definition: `gcd(a, b)` is the same as `gcd(b, a % b)`.

### ⚙️ Solution Walkthrough
The function is a direct implementation of the Euclidean algorithm.
\`\`\`javascript
function gcd(a, b) {
    // Base case: When the second number is 0, the GCD is the first number.
    if (b === 0) {
        return a;
    }
    // Recursive step: Apply the Euclidean algorithm.
    return gcd(b, a % b);
}
\`\`\`
1.  **Base Case**: The algorithm stops when `b` becomes 0. At this point, `a` holds the GCD.
2.  **Recursive Step**: The problem is reduced by making the smaller number the new `a` and the remainder the new `b`.

### 📚 Key Concepts
-   **Euclidean Algorithm**: A classic, efficient algorithm for finding the GCD.
-   **Modulo Operator (`%`)**: The core of the algorithm's recursive step.
`,
  'flatten-array-recursive': `
### 💡 Problem Breakdown
The goal is to take a nested array (an array containing other arrays) and "flatten" it into a single-level array. Recursion is a natural fit because the process of flattening a sub-array is the same as flattening the main array.

### ⚙️ Solution Walkthrough
The function iterates through the input array. If an element is another array, it recursively calls itself on that element and concatenates the result. If the element is not an array, it's simply added to the result.
\`\`\`javascript
function flatten(arr) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    });
    return result;
}
\`\`\`
1.  **Base Case**: The implicit base case is an array with no nested arrays. The loop will simply push all elements into the `result`.
2.  **Recursive Step**: `if (Array.isArray(item))`. If an item is an array, the function calls itself to handle that nested structure.

### 📚 Key Concepts
-   **Type Checking**: Using `Array.isArray()` to determine the recursive step.
`,
  'sum-of-digits-recursive': `
### 💡 Problem Breakdown
The task is to sum the individual digits of a number (e.g., 123 -> 1+2+3=6). The recursive logic is: the sum of digits of `n` is its last digit (`n % 10`) plus the sum of digits of the rest of the number (`floor(n / 10)`).

### ⚙️ Solution Walkthrough
The function uses modulo and division to break the number down.
\`\`\`javascript
function sumDigits(num) {
    // Base case: If the number is a single digit, return the number itself.
    if (num < 10) {
        return num;
    }
    // Recursive step: Add the last digit to the sum of the rest.
    return (num % 10) + sumDigits(Math.floor(num / 10));
}
\`\`\`
1.  **Base Case**: A single-digit number is the simplest case.
2.  **Recursive Step**:
    - `num % 10`: Gets the last digit.
    - `Math.floor(num / 10)`: Removes the last digit.
    - The function calls itself with the smaller number.

### 📚 Key Concepts
-   **Integer Arithmetic**: Using modulo and division to manipulate numbers.
`,
  'binary-search-recursive': `
### 💡 Problem Breakdown
Binary search is an efficient algorithm for finding an item in a **sorted** array. The recursive approach involves checking the middle element. If it's the target, we're done. If our target is smaller, we recursively search the left half. If it's larger, we recursively search the right half.

### ⚙️ Solution Walkthrough
A helper function is used to keep track of the left and right boundaries of the search space.
\`\`\`javascript
function search(arr, target, left, right) {
    // Base case: The search space is invalid, target not found.
    if (left > right) {
        return -1;
    }
    const mid = Math.floor((left + right) / 2);
    // Base case: Target found.
    if (arr[mid] === target) {
        return mid;
    }
    // Recursive steps: Search the appropriate half.
    if (arr[mid] > target) {
        return search(arr, target, left, mid - 1);
    } else {
        return search(arr, target, mid + 1, right);
    }
}
\`\`\`
### 📚 Key Concepts
-   **Divide and Conquer**: The search space is halved in each step, leading to O(log n) time complexity.
-   **Helper Function**: A common pattern in recursion where an outer function provides a clean public API and an inner, recursive function manages the complex state (like `left` and `right` indices).
`,
  'count-occurrences-recursive': `
### 💡 Problem Breakdown
The goal is to count how many times a specific value appears in an array using recursion. The recursive idea is: the total count is (1 if the first element is a match, 0 otherwise) + (the count of occurrences in the rest of the array).

### ⚙️ Solution Walkthrough
The function checks the first element and adds its result to the recursive call on the rest of the array.
\`\`\`javascript
function count(arr, target) {
    // Base case: No occurrences in an empty array.
    if (arr.length === 0) {
        return 0;
    }
    // Is the first element a match?
    const match = (arr[0] === target) ? 1 : 0;
    // Recursive step: Add match to the count from the rest of the array.
    return match + count(arr.slice(1), target);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Accumulation**: Building up a result (the count) as the recursive calls return.
`,
  'sum-nested-object-recursive': `
### 💡 Problem Breakdown
The task is to traverse a nested object and sum up all the values that are of the `number` type. Recursion is ideal because the process for summing values in a sub-object is the same as for the main object.

### ⚙️ Solution Walkthrough
The function iterates over the object's keys. If a value is a number, it's added to the sum. If a value is another object, the function recursively calls itself on that object and adds the result.
\`\`\`javascript
function sumValues(obj) {
    let sum = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursive step for nested objects
            sum += sumValues(obj[key]);
        }
    }
    return sum;
}
\`\`\`
### 📚 Key Concepts
-   **Object Traversal**: Iterating over the properties of an object.
-   **Type Checking**: Using `typeof` to decide whether to add a value or recurse further.
`,
  'tree-traversal-conceptual': `
### 💡 Problem Breakdown
This is a conceptual explanation of Depth-First Search (DFS) for a binary tree. DFS explores as far as possible down one branch before backtracking. Recursion is the most natural way to implement it.

### ⚙️ Solution Walkthrough
The order in which you process the current node's value relative to its recursive calls on the left and right children defines the traversal type.
\`\`\`javascript
// Simplified conceptual code
function traverse(node) {
    if (node === null) return;
    
    // Pre-order: Process root now
    console.log(node.value); 
    traverse(node.left);
    traverse(node.right);

    // In-order: Process root in the middle
    traverse(node.left);
    console.log(node.value);
    traverse(node.right);

    // Post-order: Process root last
    traverse(node.left);
    traverse(node.right);
    console.log(node.value);
}
\`\`\`
### 📚 Key Concepts
-   **Binary Tree**: A tree data structure where each node has at most two children.
-   **Depth-First Search (DFS)**: An algorithm for traversing tree or graph data structures.
`,
  'permutations-string-recursive': `
### 💡 Problem Breakdown
The task is to generate every possible ordering (permutation) of the characters in a string. This is a classic backtracking problem, which is a form of recursion.

### ⚙️ Solution Walkthrough
The recursive function works by picking each character from the "remaining" string, adding it to the "current" permutation, and then recursively calling itself with the remaining characters.
\`\`\`javascript
function permute(current, remaining) {
    // Base case: If no characters remain, we've found a full permutation.
    if (remaining.length === 0) {
        console.log(current);
        return;
    }
    // Recursive step:
    for (let i = 0; i < remaining.length; i++) {
        // Pick a character
        const nextChar = remaining[i];
        // Form new current and remaining strings
        const newCurrent = current + nextChar;
        const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        // Recurse
        permute(newCurrent, newRemaining);
    }
}
permute('', 'abc');
\`\`\`
### 📚 Key Concepts
-   **Backtracking**: A general algorithmic technique that involves trying to build a solution incrementally, and abandoning a path ("backtracking") as soon as it's determined that it cannot possibly lead to a valid solution.
`,
  'collatz-conjecture-recursive': `
### 💡 Problem Breakdown
The Collatz conjecture is a famous unsolved problem in mathematics. It involves a sequence defined by a simple rule: if a number is even, divide it by 2; if it's odd, multiply by 3 and add 1. The conjecture states that this sequence will always eventually reach 1. The task is to count the steps using recursion.

### ⚙️ Solution Walkthrough
The recursive function implements the rules and passes an incremented step count with each call.
\`\`\`javascript
function collatz(num, steps) {
    // Base case: We've reached 1.
    if (num === 1) {
        return steps;
    }
    // Recursive steps:
    if (num % 2 === 0) {
        return collatz(num / 2, steps + 1);
    } else {
        return collatz(3 * num + 1, steps + 1);
    }
}
\`\`\`
### 📚 Key Concepts
-   **Recursive State**: Using function parameters (like `steps`) to pass state down through the recursive calls.
`,
  'find-all-paths-in-grid-recursive': `
### 💡 Problem Breakdown
The task is to count all possible unique paths from the top-left corner of an M x N grid to the bottom-right corner, given that you can only move right or down.

### ⚙️ Solution Walkthrough
The recursive insight is that the number of paths to any cell (r, c) is the sum of the paths to the cell above it (r-1, c) and the cell to its left (r, c-1). We can implement this by thinking forward: the paths from (r, c) are the sum of paths from (r+1, c) and (r, c+1).
\`\`\`javascript
function countPaths(r, c, maxRows, maxCols) {
    // Base case: If we're at the destination, that's 1 valid path.
    if (r === maxRows - 1 && c === maxCols - 1) {
        return 1;
    }
    // Base case: If we go out of bounds, that's 0 valid paths.
    if (r >= maxRows || c >= maxCols) {
        return 0;
    }
    // Recursive step: Sum of paths from moving down and moving right.
    return countPaths(r + 1, c, maxRows, maxCols) + countPaths(r, c + 1, maxRows, maxCols);
}
\`\`\`
### 📚 Key Concepts
-   **Dynamic Programming**: This problem is a classic example of dynamic programming, where the solution to a larger problem is built from the solutions of smaller subproblems. The recursive solution is clear but inefficient due to re-calculating the same subproblems. Memoization would optimize it significantly.
`,
  'merge-sort-recursive': `
### 💡 Problem Breakdown
Merge sort is a highly efficient, comparison-based sorting algorithm. It's a prime example of the "divide and conquer" paradigm, which is inherently recursive.

### ⚙️ Solution Walkthrough
The algorithm has two main parts: the recursive splitting and the merging.
\`\`\`javascript
function mergeSort(arr) {
    // 1. Base Case: An array with 0 or 1 elements is already sorted.
    if (arr.length < 2) {
        return arr;
    }
    
    // 2. Recursive (Divide) Step: Split the array into two halves.
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    // Recursively sort both halves.
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    
    // 3. Conquer Step: Merge the two sorted halves.
    return merge(sortedLeft, sortedRight);
}
// 'merge' is a helper function that takes two sorted arrays and merges them.
\`\`\`
### 📚 Key Concepts
-   **Divide and Conquer**: The core strategy of breaking a problem into smaller, easier-to-solve subproblems.
-   **Recursion**: The `mergeSort` function calls itself on the left and right halves of the array.
`,
  'is-even-odd-recursive': `
### 💡 Problem Breakdown
The goal is to determine if a non-negative integer is even or odd without using the modulo operator (%). Recursion provides a way to do this by repeatedly subtracting 2 until the number becomes 0 or 1.

### ⚙️ Solution Walkthrough
The function reduces the number by 2 in each recursive call.
\`\`\`javascript
function isEven(num) {
    // Base case: 0 is even.
    if (num === 0) {
        return true;
    }
    // Base case: 1 is odd.
    if (num === 1) {
        return false;
    }
    // Recursive step: The evenness is the same as the number minus 2.
    return isEven(num - 2);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Problem Reduction**: The problem `isEven(n)` is reduced to the simpler problem `isEven(n-2)`.
-   **Mutual Recursion**: This problem can also be solved with mutual recursion, where `isEven` calls `isOdd` and `isOdd` calls `isEven`.
`,
  'array-of-multiples-recursive': `
### 💡 Problem Breakdown
The task is to generate an array of multiples of a number `num`, up to a certain `length`. For example, `(7, 5)` should produce `[7, 14, 21, 28, 35]`.

### ⚙️ Solution Walkthrough
The recursive function generates the array for `length - 1` and then adds the next multiple.
\`\`\`javascript
function multiples(num, length) {
    // Base case: The sequence of length 0 is an empty array.
    if (length === 0) {
        return [];
    }
    // Recursive step: Get the array for length-1...
    const arr = multiples(num, length - 1);
    // ...and add the next multiple.
    arr.push(num * length);
    return arr;
}
\`\`\`
### 📚 Key Concepts
-   **Building a Result**: Similar to the `range` problem, the final array is constructed as the recursive calls unwind from the base case.
`,
  'product-of-array-recursive': `
### 💡 Problem Breakdown
This is similar to summing an array recursively, but with multiplication. The product of an array is its first element multiplied by the product of the rest of the array.

### ⚙️ Solution Walkthrough
The function multiplies the first element by the result of calling itself on the rest of the array.
\`\`\`javascript
function product(arr) {
    // Base case: The product of an empty array is 1 (the multiplicative identity).
    if (arr.length === 0) {
        return 1;
    }
    // Recursive step:
    return arr[0] * product(arr.slice(1));
}
\`\`\`
### 📚 Key Concepts
-   **Identity Element**: The base case for a recursive reduction often uses the identity element for the operation (0 for addition, 1 for multiplication).
`,
  'find-in-nested-array-recursive': `
### 💡 Problem Breakdown
This is similar to flattening an array, but the goal is to stop as soon as a target value is found. The function must search through a deeply nested array for a specific value.

### ⚙️ Solution Walkthrough
The function iterates through the array. If an element is the target, it returns `true`. If an element is an array, it recursively calls itself. If the recursive call returns `true`, it propagates that result up.
\`\`\`javascript
function find(arr, target) {
    for (const item of arr) {
        if (item === target) {
            return true;
        }
        if (Array.isArray(item)) {
            if (find(item, target)) {
                return true; // Propagate the "found" signal
            }
        }
    }
    return false; // Not found at this level
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Search**: Applying a search algorithm to a nested data structure.
`,
  'exponentiation-by-squaring-recursive': `
### 💡 Problem Breakdown
This is a more efficient recursive algorithm for calculating powers, especially for large exponents. It's based on the observation that `x^n = (x^2)^(n/2)` if `n` is even, and `x^n = x * (x^2)^((n-1)/2)` if `n` is odd. This reduces the number of multiplications significantly.

### ⚙️ Solution Walkthrough
The function checks if the exponent is even or odd to determine the recursive step.
\`\`\`javascript
function fastPower(base, exp) {
    if (exp === 0) return 1;
    if (exp % 2 === 0) {
        const half = fastPower(base, exp / 2);
        return half * half;
    } else {
        const half = fastPower(base, (exp - 1) / 2);
        return base * half * half;
    }
}
\`\`\`
### 📚 Key Concepts
-   **Divide and Conquer**: The problem size (the exponent) is halved at each step, leading to O(log n) complexity, which is much faster than the simple O(n) recursive solution.
`,
  'decimal-to-binary-recursive': `
### 💡 Problem Breakdown
The task is to convert a number from base-10 (decimal) to base-2 (binary). The recursive logic is based on how manual conversion works: the binary representation of `n` is the binary representation of `n/2` followed by the remainder `n % 2`.

### ⚙️ Solution Walkthrough
The function recursively calls itself on `n/2` and appends the remainder.
\`\`\`javascript
function toBinary(num) {
    if (num === 0) return "0";
    if (num === 1) return "1";
    // Get binary of the integer part of num/2, then add the remainder.
    return toBinary(Math.floor(num / 2)) + (num % 2);
}
\`\`\`
### 📚 Key Concepts
-   **Number Systems**: Understanding the logic of base conversion.
`,
  'replicate-string-recursive': `
### 💡 Problem Breakdown
The goal is to create a new string by concatenating a given string to itself a specified number of times, using recursion.

### ⚙️ Solution Walkthrough
The function concatenates the string with the result of calling itself with a decremented counter.
\`\`\`javascript
function replicate(str, times) {
    // Base case: If times is 0 or less, we're done.
    if (times <= 0) {
        return "";
    }
    // Recursive step:
    return str + replicate(str, times - 1);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Construction**: Building a result by repeatedly applying an operation.
`,
  'recursive-every': `
### 💡 Problem Breakdown
The `every` method tests whether all elements in an array pass a test. The recursive logic is: an array satisfies the test if its first element passes AND every element in the rest of the array also passes.

### ⚙️ Solution Walkthrough
The function checks the first element. If it fails, it returns `false`. Otherwise, it recursively calls itself on the rest of the array.
\`\`\`javascript
function every(arr, predicate) {
    // Base case: An empty array vacuously satisfies any condition.
    if (arr.length === 0) {
        return true;
    }
    // If the first element fails the test, the whole thing fails.
    if (!predicate(arr[0])) {
        return false;
    }
    // Recursive step: Check the rest of the array.
    return every(arr.slice(1), predicate);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Logic**: Translating the definition of a universal quantifier ("for all") into a recursive structure.
`,
  'recursive-some': `
### 💡 Problem Breakdown
The `some` method tests whether at least one element in an array passes a test. The recursive logic is: an array satisfies the test if its first element passes OR some element in the rest of the array passes.

### ⚙️ Solution Walkthrough
The function checks the first element. If it passes, it returns `true`. Otherwise, it recursively calls itself on the rest of the array.
\`\`\`javascript
function some(arr, predicate) {
    // Base case: No element in an empty array can satisfy the condition.
    if (arr.length === 0) {
        return false;
    }
    // If the first element passes, we're done.
    if (predicate(arr[0])) {
        return true;
    }
    // Recursive step: Check the rest of the array.
    return some(arr.slice(1), predicate);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Logic**: Translating the definition of an existential quantifier ("there exists") into a recursive structure.
`,
  'recursive-filter': `
### 💡 Problem Breakdown
The `filter` method creates a new array with all elements that pass a test. The recursive approach involves checking the first element. If it passes, it's included in the result, which is then concatenated with the filtered result of the rest of the array.

### ⚙️ Solution Walkthrough
The function builds a new array based on the predicate's result for each element.
\`\`\`javascript
function filter(arr, predicate) {
    // Base case: An empty array filters to an empty array.
    if (arr.length === 0) {
        return [];
    }
    const first = arr[0];
    const rest = arr.slice(1);
    const filteredRest = filter(rest, predicate);

    if (predicate(first)) {
        return [first, ...filteredRest];
    } else {
        return filteredRest;
    }
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Construction**: Building a new data structure (the filtered array) through recursion.
`,
  'recursive-map': `
### 💡 Problem Breakdown
The `map` method creates a new array by applying a function to every element. The recursive logic is: the mapped array is the result of applying the function to the first element, concatenated with the mapped result of the rest of the array.

### ⚙️ Solution Walkthrough
The function applies the mapper to the first element and prepends it to the recursive result.
\`\`\`javascript
function map(arr, mapper) {
    // Base case: Mapping an empty array results in an empty array.
    if (arr.length === 0) {
        return [];
    }
    // Recursive step: Map the first element and concatenate with the mapped rest.
    const mappedFirst = mapper(arr[0]);
    const mappedRest = map(arr.slice(1), mapper);
    return [mappedFirst, ...mappedRest];
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Transformation**: Creating a new data structure by recursively transforming the elements of an input structure.
`,
  'tower-of-hanoi-conceptual': `
### 💡 Problem Breakdown
The Tower of Hanoi is a classic puzzle that is elegantly solved with recursion. The goal is to move a stack of N disks from a source peg to a destination peg using an auxiliary peg, with the rules that you can only move one disk at a time and a larger disk can never be on top of a smaller one.

### ⚙️ Solution Walkthrough
The recursive solution breaks the problem of moving N disks into three simpler steps. To move N disks from Source to Destination:
1.  **Move N-1 disks from Source to Auxiliary peg.** (This is a recursive call).
2.  **Move the Nth (largest) disk from Source to Destination peg.** (This is a single move, the "base" action of each step).
3.  **Move the N-1 disks from Auxiliary peg to Destination peg.** (This is another recursive call).

The base case for the recursion is moving a single disk (N=1), which is a direct move from source to destination.

### 📚 Key Concepts
-   **Recursive Abstraction**: The beauty of the solution is that you don't need to think about *how* to move the N-1 disks; you just abstractly trust the recursive call to handle it.
`,
  'count-consonants-recursive': `
### 💡 Problem Breakdown
The task is to count the consonants in a string using recursion. A consonant is any letter that isn't a vowel. The recursive logic is: the total count is (1 if the first character is a consonant) + (the count in the rest of the string).

### ⚙️ Solution Walkthrough
The function checks the first character of the string, decides if it's a consonant, and adds that (1 or 0) to the result of calling itself on the rest of the string.
\`\`\`javascript
const vowels = "aeiou";
function countConsonants(str) {
    if (str === "") return 0; // Base case
    
    const first = str[0].toLowerCase();
    const isConsonant = first >= 'a' && first <= 'z' && !vowels.includes(first);
    
    // Recursive step
    return (isConsonant ? 1 : 0) + countConsonants(str.slice(1));
}
\`\`\`
### 📚 Key Concepts
-   **Character Classification**: The logic involves checking if a character falls into a certain category (consonant).
`,
  'pascals-triangle-recursive': `
### 💡 Problem Breakdown
Pascal's Triangle is a triangular array of numbers where each number is the sum of the two numbers directly above it. The value of an entry at row `n` and column `k` can be defined recursively. This is related to binomial coefficients.

### ⚙️ Solution Walkthrough
The value at `(n, k)` is `pascal(n-1, k-1) + pascal(n-1, k)`. The base cases are the edges of the triangle, which are always 1.
\`\`\`javascript
// This function finds the value at a specific coordinate
function pascalValue(row, col) {
    // Base case: Edges are always 1
    if (col === 0 || col === row) {
        return 1;
    }
    // Recursive step
    return pascalValue(row - 1, col - 1) + pascalValue(row - 1, col);
}
// To get the full row, you'd loop and call this function.
\`\`\`
**Note**: This is highly inefficient due to re-calculating the same values. Memoization would be essential for a practical solution.

### 📚 Key Concepts
-   **Combinatorics**: The mathematical principles underlying Pascal's triangle.
`,
  'search-nested-object-recursive': `
### 💡 Problem Breakdown
The goal is to search a deeply nested object for a specific key and return its value. Recursion is needed to traverse the arbitrary depth of the object structure.

### ⚙️ Solution Walkthrough
The function iterates over the keys of the current object. If a key matches, it returns the value. If a value is another object, it makes a recursive call.
\`\`\`javascript
function find(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    for (const prop in obj) {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            const result = find(obj[prop], key);
            if (result !== undefined) {
                return result;
            }
        }
    }
}
\`\`\`
### 📚 Key Concepts
-   **Object Traversal**: Navigating through the properties of nested objects.
-   **Propagation**: The result from a deep recursive call must be passed all the way up the call stack.
`,
  'count-down-up-recursive': `
### 💡 Problem Breakdown
This is a classic recursion problem that demonstrates how code can be executed both *before* and *after* the recursive call within the same function. This influences the order of operations.

### ⚙️ Solution Walkthrough
The function logs the number, makes the recursive call, and then logs the number again on its way back up the call stack.
\`\`\`javascript
function count(n) {
    console.log(n); // Action on the way down
    if (n > 1) {
        count(n - 1); // Recursive call
    }
    console.log(n); // Action on the way up
}
\`\`\`
For `count(3)`, the execution order of logs would be: 3, 2, 1, 1, 2, 3. The first logs happen as the function calls deeper and deeper. The second logs happen as the functions return and the call stack unwinds.

### 📚 Key Concepts
-   **Call Stack**: This problem is a great way to visualize how the call stack works, executing code as it goes down and as it comes back up.
`,
  'remove-duplicates-recursive': `
### 💡 Problem Breakdown
The task is to remove duplicate elements from an array using recursion. The logic is: process the first element, then recursively process the rest of the array, ensuring the first element isn't included again if it has already been seen.

### ⚙️ Solution Walkthrough
A helper function is used to keep track of the elements that have already been included in the result. A `Set` is a good choice for this.
\`\`\`javascript
function remove(arr, seen = new Set()) {
    if (arr.length === 0) { // Base case
        return [];
    }
    const [first, ...rest] = arr;
    const restUnique = remove(rest, seen);
    
    if (seen.has(first)) {
        return restUnique;
    } else {
        seen.add(first);
        return [first, ...restUnique];
    }
}
\`\`\`
### 📚 Key Concepts
-   **State Passing**: The `seen` set is passed down through the recursive calls to maintain state.
`,
  'string-contains-char-recursive': `
### 💡 Problem Breakdown
The goal is to check if a string contains a character using recursion. The logic: a string contains the character if its first character is a match, OR if the rest of the string contains the character.

### ⚙️ Solution Walkthrough
The function checks the first character and, if no match, recursively calls itself on the rest of the string.
\`\`\`javascript
function contains(str, char) {
    if (str === '') return false; // Base case: not found
    if (str[0] === char) return true; // Base case: found
    return contains(str.slice(1), char); // Recursive step
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Search**: Applying a simple linear search pattern recursively.
`,
  'length-of-array-recursive': `
### 💡 Problem Breakdown
This is an academic exercise to demonstrate recursion. The task is to calculate the length of an array without using the `.length` property. The length of an array is 1 + the length of the rest of the array.

### ⚙️ Solution Walkthrough
The function adds 1 for the current element and recursively calls itself on the rest of the array.
\`\`\`javascript
function len(arr) {
    // Base case: An empty array has length 0.
    if (arr[0] === undefined) { 
        return 0;
    }
    // Recursive step: 1 (for the first element) + length of the rest.
    return 1 + len(arr.slice(1));
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Counting**: Building a count by adding 1 at each level of recursion.
`,
  'is-sorted-recursive': `
### 💡 Problem Breakdown
The task is to check if an array is sorted in ascending order using recursion. The recursive idea is: an array is sorted if its first element is less than or equal to its second element, AND the rest of the array (from the second element onward) is also sorted.

### ⚙️ Solution Walkthrough
The function compares the first two elements and then recursively checks the rest of the array.
\`\`\`javascript
function isSorted(arr) {
    // Base case: Arrays with 0 or 1 elements are always sorted.
    if (arr.length <= 1) {
        return true;
    }
    // If the first two elements are out of order, it's not sorted.
    if (arr[0] > arr[1]) {
        return false;
    }
    // Recursive step: Check if the rest of the array is sorted.
    return isSorted(arr.slice(1));
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Validation**: Using recursion to verify a property over a whole data structure.
`,
  'recursive-min': `
### 💡 Problem Breakdown
The task is to find the minimum value in an array using recursion. The logic is: the minimum of an array is the smaller of two values: the first element, and the minimum of the rest of the array.

### ⚙️ Solution Walkthrough
The function finds the minimum of the "tail" of the array recursively, then compares it with the "head".
\`\`\`javascript
function findMin(arr) {
    // Base case: In an array with one element, that element is the minimum.
    if (arr.length === 1) {
        return arr[0];
    }
    const first = arr[0];
    const minOfRest = findMin(arr.slice(1)); // Recursive step
    
    return first < minOfRest ? first : minOfRest;
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Comparison**: Finding a result by comparing an element with a recursively computed result from the rest of the data.
`,
  'recursive-max': `
### 💡 Problem Breakdown
This is the counterpart to finding the minimum. The maximum of an array is the larger of two values: the first element, and the maximum of the rest of the array.

### ⚙️ Solution Walkthrough
The function finds the maximum of the "tail" of the array recursively, then compares it with the "head".
\`\`\`javascript
function findMax(arr) {
    if (arr.length === 1) return arr[0]; // Base case
    const first = arr[0];
    const maxOfRest = findMax(arr.slice(1)); // Recursive step
    return first > maxOfRest ? first : maxOfRest;
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Comparison**: A common pattern for finding min/max or other aggregate properties.
`,
  'deep-reverse-array-recursive': `
### 💡 Problem Breakdown
The task is to reverse an array, but if any of its elements are also arrays, they should be reversed as well, and so on for any level of nesting.

### ⚙️ Solution Walkthrough
The function first reverses the top-level array. Then, it maps over the reversed array, and if an element is an array, it recursively calls itself on that element.
\`\`\`javascript
function deepReverse(arr) {
    const reversed = arr.reverse();
    return reversed.map(item =>
        Array.isArray(item) ? deepReverse(item) : item
    );
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Transformation**: Applying a transformation (reversing) at all levels of a nested data structure.
`,
  'balance-parentheses-recursive': `
### 💡 Problem Breakdown
The goal is to check if a string containing parentheses is "balanced," meaning each opening parenthesis has a corresponding closing parenthesis. A recursive approach can track the count of open parentheses.

### ⚙️ Solution Walkthrough
A helper function traverses the string, incrementing a counter for `(` and decrementing for `)`.
\`\`\`javascript
function check(str, count) {
    if (str === '') return count === 0; // Base case: end of string
    if (count < 0) return false; // Base case: closing before opening
    
    const first = str[0];
    const newCount = first === '(' ? count + 1 : (first === ')' ? count - 1 : count);
    
    return check(str.slice(1), newCount); // Recursive step
}
\`\`\`
### 📚 Key Concepts
-   **State Passing**: The `count` variable is passed through the recursive calls to maintain the current balance state.
`,
  'get-all-keys-nested-object-recursive': `
### 💡 Problem Breakdown
The task is to traverse a nested object and collect all the property keys from all levels into a single array.

### ⚙️ Solution Walkthrough
The function gets the keys from the current object level, then iterates through them. If a property's value is another object, it recursively calls itself and concatenates the results.
\`\`\`javascript
function getKeys(obj) {
    let keys = Object.keys(obj);
    for (const key of keys) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            keys = keys.concat(getKeys(obj[key]));
        }
    }
    return keys;
}
\`\`\`
### 📚 Key Concepts
-   **Object Traversal**: Navigating through nested object structures.
`,
  'subsets-of-set-recursive': `
### 💡 Problem Breakdown
The goal is to generate the "power set" – the set of all possible subsets of a given set (represented as an array). The recursive approach is: the power set of `[1, 2, 3]` is the power set of `[2, 3]` combined with the power set of `[2, 3]` where `1` is added to each subset.

### ⚙️ Solution Walkthrough
The function recursively finds the subsets of the "rest" of the array, then creates new subsets by adding the first element to each of those.
\`\`\`javascript
function subsets(arr) {
    if (arr.length === 0) return [[]]; // Base case: the power set of empty set
    
    const first = arr[0];
    const rest = arr.slice(1);
    
    const subsWithoutFirst = subsets(rest); // Recursive step
    const subsWithFirst = subsWithoutFirst.map(sub => [first, ...sub]);
    
    return [...subsWithoutFirst, ...subsWithFirst];
}
\`\`\`
### 📚 Key Concepts
-   **Combinatorics**: The mathematical principles of counting and arrangement.
`,
  'collect-strings-from-object-recursive': `
### 💡 Problem Breakdown
This is a filtering traversal. The function needs to go through a nested object and collect all values that are of type `string` into an array.

### ⚙️ Solution Walkthrough
The function iterates through the object's properties. If a value is a string, it's added to the result array. If it's an object, the function recursively calls itself on that object.
\`\`\`javascript
function collectStrings(obj) {
    let stringsArr = [];
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
    return stringsArr;
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Filtering**: Traversing a data structure to collect items that match a specific criterion.
`,
  'capitalize-words-recursive': `
### 💡 Problem Breakdown
The task is to take an array of words and return a new array where every word is capitalized, using recursion.

### ⚙️ Solution Walkthrough
The function capitalizes the first word and concatenates it with the result of recursively capitalizing the rest of the array.
\`\`\`javascript
function capitalize(arr) {
    if (arr.length === 0) return []; // Base case
    const capitalizedFirst = arr[0].toUpperCase();
    const capitalizedRest = capitalize(arr.slice(1)); // Recursive step
    return [capitalizedFirst, ...capitalizedRest];
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Transformation**: Similar to the recursive `map` problem, this transforms each element of a data structure.
`,
  'capitalize-first-letter-recursive': `
### 💡 Problem Breakdown
Similar to the previous problem, but here we only capitalize the first letter of each word in an array of strings.

### ⚙️ Solution Walkthrough
The function processes the first word, then recursively calls itself on the rest of the array.
\`\`\`javascript
function capFirst(arr) {
    if (arr.length === 0) return []; // Base case
    const word = arr[0];
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return [capitalized, ...capFirst(arr.slice(1))]; // Recursive step
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Transformation**: A pattern for applying an operation to all elements of a list recursively.
`,
  'stringify-numbers-recursive': `
### 💡 Problem Breakdown
The goal is to traverse a nested object and convert any value that is a number into a string, modifying the object in place or creating a new one.

### ⚙️ Solution Walkthrough
The function iterates through the object's properties. If a value is a number, it's converted. If it's an object, the function calls itself recursively.
\`\`\`javascript
function stringifyNumbers(obj) {
    const newObj = {};
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]); // Recursive step
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
\`\`\`
### 📚 Key Concepts
-   **Deep Transformation**: Recursively traversing and modifying a nested data structure.
`,
  'tail-call-optimization-conceptual': `
### 💡 Problem Breakdown
This is a conceptual explanation of a compiler optimization. A "tail call" is when a function's very last action is to call another function. In recursion, if the recursive call is in a tail-call position, the engine can optimize it by reusing the current stack frame instead of creating a new one, preventing stack overflow errors for deep recursion.

### ⚙️ Solution Walkthrough
A factorial function is rewritten to be tail-recursive.
\`\`\`javascript
// NOT tail-recursive: an operation (n *) happens AFTER the call.
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// IS tail-recursive: the last thing is the function call.
function tailFactorial(n, accumulator = 1) {
  if (n === 0) return accumulator;
  return tailFactorial(n - 1, n * accumulator);
}
\`\`\`
1.  **Accumulator**: The key is to pass the intermediate result (the accumulator) down into the next recursive call, so no computation is needed on the way back up the call stack.

### 📚 Key Concepts
-   **Tail Call Optimization (TCO)**: An optimization that can make certain types of recursion as efficient as iteration. Note: JavaScript engine support for TCO is limited and not guaranteed.
`,
  'mutual-recursion': `
### 💡 Problem Breakdown
Mutual recursion is when two or more functions call each other in a recursive cycle. This can be used to solve problems that have two or more alternating states.

### ⚙️ Solution Walkthrough
The classic example is determining if a number is even or odd. `isEven` calls `isOdd`, and `isOdd` calls `isEven`.
\`\`\`javascript
function isEven(n) {
  if (n === 0) return true;
  return isOdd(n - 1); // Calls the other function
}
function isOdd(n) {
  if (n === 0) return false;
  return isEven(n - 1); // Calls the first function
}
\`\`\`
1.  **State Transition**: Each function handles one state (even or odd) and transitions to the other state by calling the other function with a smaller version of the problem.

### 📚 Key Concepts
-   **Mutual Recursion**: A recursive pattern involving more than one function.
`,
  'ackermann-function-conceptual': `
### 💡 Problem Breakdown
The Ackermann function is a famous example in computation theory. It's a recursive function that grows incredibly quickly. It's not practically useful for most programming tasks but serves as an excellent example of a function that is computable but not "primitive recursive," demonstrating the limits of certain computational models.

### ⚙️ Solution Walkthrough
The function is defined by three simple recursive rules.
\`\`\`javascript
function A(m, n) {
    if (m === 0) {
        return n + 1;
    } else if (n === 0) {
        return A(m - 1, 1);
    } else {
        return A(m - 1, A(m, n - 1));
    }
}
\`\`\`
Even small inputs like `A(4, 2)` produce numbers so large they cannot be computed by simple programs. The solution demonstrates the concept rather than being runnable for large inputs.

### 📚 Key Concepts
-   **Computability Theory**: A branch of computer science that studies which problems are solvable by algorithms.
-   **Rapid Growth**: A key characteristic of the Ackermann function, used to illustrate computational complexity.
`,
  'count-leaves-in-tree-conceptual': `
### 💡 Problem Breakdown
In a tree data structure, a "leaf" node is a node that has no children. The task is to write a recursive function to count all such nodes in a binary tree.

### ⚙️ Solution Walkthrough
The function traverses the tree. For each node, it checks if it's a leaf.
\`\`\`javascript
function countLeaves(node) {
    // Base case 1: An empty tree has no leaves.
    if (node === null) {
        return 0;
    }
    // Base case 2: If a node has no children, it's a leaf.
    if (node.left === null && node.right === null) {
        return 1;
    }
    // Recursive step: The total leaves is the sum of leaves in the left and right subtrees.
    return countLeaves(node.left) + countLeaves(node.right);
}
\`\`\`
### 📚 Key Concepts
-   **Binary Tree**: A fundamental hierarchical data structure.
-   **Tree Traversal**: The process of visiting (in this case, checking) every node in the tree.
`,
  'tree-depth-recursive': `
### 💡 Problem Breakdown
The depth (or height) of a binary tree is the length of the longest path from the root node down to the furthest leaf node. The task is to calculate this using recursion.

### ⚙️ Solution Walkthrough
The recursive logic is: the depth of a tree is 1 (for the current node) plus the maximum of the depths of its left and right subtrees.
\`\`\`javascript
function findDepth(node) {
    // Base case: The depth of an empty tree is 0.
    if (node === null) {
        return 0;
    }
    // Recursive step:
    const leftDepth = findDepth(node.left);
    const rightDepth = findDepth(node.right);
    
    // The depth is 1 + the depth of the deeper subtree.
    return 1 + Math.max(leftDepth, rightDepth);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Definition**: Translating the definition of a property (depth) into a recursive function.
`,
  'combinations-recursive': `
### 💡 Problem Breakdown
The goal is to find all possible combinations of a certain size `k` from a given set of elements (an array). This is a classic backtracking problem.

### ⚙️ Solution Walkthrough
A recursive helper function builds up a combination. It explores two paths at each step: including the current element in the combination, or not including it.
\`\`\`javascript
// Conceptual logic for a backtracking helper function
function findCombinations(arr, k, start = 0, currentCombo = []) {
    // Base case: a valid combination is found.
    if (currentCombo.length === k) {
        // process the combination
        return;
    }
    // Base case: not enough elements left to form a combination.
    if (start === arr.length) {
        return;
    }
    // Recursive step 1: Include the current element.
    findCombinations(arr, k, start + 1, [...currentCombo, arr[start]]);
    // Recursive step 2: Do NOT include the current element.
    findCombinations(arr, k, start + 1, currentCombo);
}
\`\`\`
### 📚 Key Concepts
-   **Backtracking**: A recursive technique for solving problems by trying to build a solution incrementally and abandoning paths that cannot succeed.
-   **Combinatorics**: The mathematical study of counting and arrangements.
`,
  'coin-change-problem-recursive': `
### 💡 Problem Breakdown
This is a classic dynamic programming problem. Given a set of coin denominations and a target amount, the goal is to find the number of different ways you can make change for that amount.

### ⚙️ Solution Walkthrough
The recursive function breaks the problem down: the number of ways to make `amount` with `coins` is the sum of:
1.  The number of ways to make `amount` *without* using the current coin.
2.  The number of ways to make `amount - current_coin_value` *with* the current coin.
\`\`\`javascript
// Inefficient recursive solution without memoization
function countWays(coins, amount, index) {
    // Base cases
    if (amount === 0) return 1;
    if (amount < 0 || index < 0) return 0;
    
    // Recursive step:
    // 1. Ways without this coin: countWays(coins, amount, index - 1)
    // 2. Ways with this coin: countWays(coins, amount - coins[index], index)
    return countWays(coins, amount - coins[index], index) + countWays(coins, amount, index - 1);
}
\`\`\`
### 📚 Key Concepts
-   **Dynamic Programming**: Solving a complex problem by breaking it down into a collection of simpler subproblems. Memoization is essential to make this recursive approach efficient.
`,
  'array-includes-recursive': `
### 💡 Problem Breakdown
The task is to mimic the `.includes()` array method using recursion. The logic is: an array includes a target if its first element is the target, OR if the rest of the array includes the target.

### ⚙️ Solution Walkthrough
The function checks the first element, and if it's not a match, it recursively calls itself on the rest of the array.
\`\`\`javascript
function includes(arr, target) {
    // Base case: If the array is empty, the target can't be in it.
    if (arr.length === 0) {
        return false;
    }
    // Base case: The first element is a match.
    if (arr[0] === target) {
        return true;
    }
    // Recursive step: Check the rest of the array.
    return includes(arr.slice(1), target);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Search**: Applying a simple linear search pattern recursively.
`,
  'array-indexOf-recursive': `
### 💡 Problem Breakdown
This problem involves mimicking the `.indexOf()` method recursively. The logic is slightly more complex than `.includes()` because we need to keep track of the current index.

### ⚙️ Solution Walkthrough
A helper function is used to pass the current index down through the recursive calls.
\`\`\`javascript
function indexOf(arr, target, index = 0) {
    // Base case: The array is empty, target not found.
    if (arr.length === 0) {
        return -1;
    }
    // Base case: The first element is a match.
    if (arr[0] === target) {
        return index;
    }
    // Recursive step: Search the rest of the array, incrementing the index.
    return indexOf(arr.slice(1), target, index + 1);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive State**: Using an additional parameter (`index`) to maintain state across recursive calls.
`,
  'repeat-function-recursive': `
### 💡 Problem Breakdown
The goal is to execute a given callback function a specific number of times (`n`) using recursion.

### ⚙️ Solution Walkthrough
The function calls the callback once, then recursively calls itself with a decremented counter.
\`\`\`javascript
function repeat(fn, times) {
    // Base case: If times is 0 or less, stop.
    if (times <= 0) {
        return;
    }
    fn(); // Execute the callback
    repeat(fn, times - 1); // Recursive step
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Action**: Using recursion to repeat an action rather than to compute a value.
`,
  'deep-object-clone-recursive': `
### 💡 Problem Breakdown
A deep clone creates a completely independent copy of an object, including all nested objects and arrays. Recursion is perfect for this, as the process of cloning a sub-object is the same as cloning the top-level object.

### ⚙️ Solution Walkthrough
The function checks the type of the input. If it's a primitive, it's returned directly. If it's an object or array, a new one is created, and the function recursively clones each of its properties/elements.
\`\`\`javascript
function clone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Base case for primitives
    }
    const newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        // Recursive step for each property
        newObj[key] = clone(obj[key]);
    }
    return newObj;
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Copying**: Applying a copy operation at all levels of a nested data structure.
`,
  'find-all-indices-recursive': `
### 💡 Problem Breakdown
The task is to find all indices of a target value in an array. A recursive approach would find the indices in the "rest" of the array and then check if the first element is also a match.

### ⚙️ Solution Walkthrough
The function recursively finds indices in the sub-array and adjusts them.
\`\`\`javascript
function findAllIndices(arr, target, index = 0) {
    // Base case: Empty array has no indices.
    if (arr.length === 0) {
        return [];
    }
    const first = arr[0];
    const rest = arr.slice(1);
    
    // Recursive step: Find indices in the rest of the array.
    const indicesInRest = findAllIndices(rest, target, index + 1);
    
    if (first === target) {
        return [index, ...indicesInRest];
    } else {
        return indicesInRest;
    }
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Data Collection**: Building up an array of results from recursive calls.
`,
  'luhn-algorithm-recursive-conceptual': `
### 💡 Problem Breakdown
The Luhn algorithm is a checksum formula used to validate identification numbers like credit card numbers. It involves summing digits in a specific way (doubling every second digit from the right, and subtracting 9 if the doubled value is > 9). This can be done recursively.

### ⚙️ Solution Walkthrough
A recursive function would process the number one digit at a time, from right to left.
\`\`\`javascript
// Conceptual recursive helper
function luhnCheck(numberString, position) {
    // Base case: If the string is empty, the sum is 0.
    if (numberString === "") return 0;
    
    let lastDigit = parseInt(numberString.slice(-1));
    const rest = numberString.slice(0, -1);
    
    // Double every second digit (from the right)
    if (position % 2 !== 0) {
        lastDigit *= 2;
        if (lastDigit > 9) {
            lastDigit -= 9;
        }
    }
    
    // Recursive step
    return lastDigit + luhnCheck(rest, position + 1);
}
// The main function would call this and check if the final sum % 10 === 0.
\`\`\`
### 📚 Key Concepts
-   **Recursive Processing**: Breaking down a problem by processing one piece of data (the last digit) at a time.
`,
  'directory-traversal-conceptual': `
### 💡 Problem Breakdown
Traversing a file system is a classic use case for recursion. A directory can contain files and other directories. The process to list the contents of a sub-directory is identical to the process for the root directory.

### ⚙️ Solution Walkthrough
A recursive function takes a directory path as input.
\`\`\`javascript
// Conceptual code for a Node.js environment
function traverse(directoryPath) {
    const items = fs.readdirSync(directoryPath); // Get items in directory
    for (const item of items) {
        const fullPath = path.join(directoryPath, item);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            console.log("Entering directory:", fullPath);
            traverse(fullPath); // Recursive call for sub-directories
        } else {
            console.log("Found file:", fullPath);
        }
    }
}
\`\`\`
### 📚 Key Concepts
-   **Hierarchical Data Structures**: Recursion is a natural fit for processing tree-like structures, such as file systems or the DOM.
`,
  'json-stringify-recursive-conceptual': `
### 💡 Problem Breakdown
This is a conceptual problem to outline the recursive logic behind `JSON.stringify`. The function needs to handle different data types and recursively process nested objects and arrays.

### ⚙️ Solution Walkthrough
A function checks the type of its input to decide how to format it.
1.  **Base Cases**:
    - If input is a `string`, wrap it in double quotes.
    - If input is a `number`, `boolean`, or `null`, convert it to a string.
    - If input is `undefined` or a `function`, return `undefined` (to be omitted by object/array logic).
2.  **Recursive Step (Array)**: If input is an array, map over each element, recursively calling the stringify function on it. Join the results with commas and wrap in `[]`.
3.  **Recursive Step (Object)**: If input is an object, get its keys. For each key, create a string `"<key>":<value>`, where the value is the result of recursively calling the stringify function. Join these pairs with commas and wrap in `{}`.

### 📚 Key Concepts
-   **Recursive Serialization**: Converting a complex, nested data structure into a string representation by recursively processing its constituent parts.
`,
  'dom-traversal-recursive-conceptual': `
### 💡 Problem Breakdown
The Document Object Model (DOM) is a tree structure. Recursion is therefore a very natural way to traverse it to find or manipulate elements.

### ⚙️ Solution Walkthrough
A recursive function takes a DOM node as input. It processes the node, and then loops through its children, recursively calling itself on each child.
\`\`\`javascript
// Conceptual code for a browser environment
function walkTheDOM(node, func) {
    func(node); // Process the current node
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func); // Recursive call for each child
        node = node.nextSibling;
    }
}

// Example usage:
// walkTheDOM(document.body, (node) => {
//   if (node.nodeType === 1) console.log(node.tagName);
// });
\`\`\`
### 📚 Key Concepts
-   **Tree Traversal**: The fundamental algorithm for processing every node in a tree.
-   **DOM API**: Using properties like `.firstChild` and `.nextSibling` to navigate the tree structure.
`,
  'quick-sort-conceptual': `
### 💡 Problem Breakdown
Quick sort is another efficient, comparison-based sorting algorithm that uses the "divide and conquer" paradigm. It works by selecting a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. It then recursively sorts the sub-arrays.

### ⚙️ Solution Walkthrough
The recursive logic is as follows:
\`\`\`javascript
function quickSort(arr) {
    // 1. Base Case: An array with 0 or 1 elements is already sorted.
    if (arr.length < 2) {
        return arr;
    }
    
    // 2. Recursive (Divide) Step:
    const pivot = arr[0];
    const less = arr.slice(1).filter(el => el <= pivot);
    const greater = arr.slice(1).filter(el => el > pivot);
    
    // Recursively sort the sub-arrays.
    const sortedLess = quickSort(less);
    const sortedGreater = quickSort(greater);
    
    // 3. Conquer Step: Combine the results.
    return [...sortedLess, pivot, ...sortedGreater];
}
\`\`\`
### 📚 Key Concepts
-   **Divide and Conquer**: The core strategy of partitioning the array and recursively solving the subproblems.
-   **Pivot**: The element chosen to partition the array. The choice of pivot can significantly affect the algorithm's performance.
`,
  'object-dot-path-access-recursive': `
### 💡 Problem Breakdown
The goal is to safely access a nested property in an object using a string path like 'a.b.c'. If any intermediate property is missing, it should return undefined instead of throwing an error.

### ⚙️ Solution Walkthrough
A recursive function takes the object and an array of path parts. It uses the first part to access the next level down and recursively calls itself with the sub-object and the rest of the path parts.
\`\`\`javascript
function getValueByPath(obj, pathParts) {
    // Base case: If object is invalid or path is empty, return.
    if (obj === undefined || obj === null) return undefined;
    if (pathParts.length === 0) return obj;
    
    // Recursive step:
    const [currentKey, ...restKeys] = pathParts;
    return getValueByPath(obj[currentKey], restKeys);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Traversal**: Navigating a data structure based on a sequence of keys.
-   **Modern Alternative**: The optional chaining operator (`?.`) often solves this problem more concisely in modern JavaScript: `obj?.a?.b?.c`.
`,
  'n-queens-problem-conceptual': `
### 💡 Problem Breakdown
This is a classic computer science puzzle. The problem is to place N chess queens on an N×N chessboard so that no two queens threaten each other. This means no two queens can be on the same row, column, or diagonal. It's solved using a recursive technique called backtracking.

### ⚙️ Solution Walkthrough
A recursive function, say `solve(row)`, tries to place a queen in the current `row`.
1.  **Base Case**: If `row` is equal to N, it means we have successfully placed a queen in every row, so we have found a valid solution.
2.  **Recursive Step**:
    - Loop through every column (`col`) in the current `row`.
    - For each `col`, check if it's "safe" to place a queen at `(row, col)`. This involves checking all previous rows for conflicts in the same column or diagonals.
    - If it is safe, "place" the queen (e.g., record its position).
    - Make a recursive call to `solve(row + 1)` to try and place a queen in the next row.
    - If the recursive call succeeds, propagate that success.
    - If it fails, "un-place" the queen (this is the **backtracking** step) and try the next column in the loop.

### 📚 Key Concepts
-   **Backtracking**: A general algorithm for finding all solutions to some computational problems by incrementally building candidates and abandoning a candidate as soon as it determines that it cannot possibly be completed to a valid solution.
`,
  'sudoku-solver-conceptual': `
### 💡 Problem Breakdown
The goal is to solve a 9x9 Sudoku puzzle. This is another classic problem that is elegantly solved with recursive backtracking.

### ⚙️ Solution Walkthrough
A recursive function, `solve()`, finds the next empty cell on the board.
1.  **Base Case**: If there are no more empty cells, the puzzle is solved, and we return `true`.
2.  **Recursive Step**:
    - For the current empty cell, try placing each number from 1 to 9.
    - For each number, check if placing it in the current cell is "valid" (i.e., it doesn't violate Sudoku rules in its row, column, or 3x3 square).
    - If the number is valid, "place" it on the board.
    - Make a recursive call to `solve()`.
    - If the recursive call returns `true`, it means a solution was found down that path, so we propagate `true`.
    - If it returns `false`, the number we placed was a dead end. We must "un-place" it (reset the cell to empty) and try the next number in our 1-9 loop. This is the **backtracking** step.

### 📚 Key Concepts
-   **Backtracking**: The core algorithm for exploring the search space of possible solutions.
`,
  'word-break-problem-recursive': `
### 💡 Problem Breakdown
Given a string and a dictionary of words, the task is to determine if the string can be broken down into a sequence of one or more words from the dictionary.

### ⚙️ Solution Walkthrough
A recursive function, `canBreak(s)`, checks the string `s`.
1.  **Base Case**: If `s` is an empty string, it means we have successfully broken down the entire original string, so we return `true`.
2.  **Recursive Step**:
    - Loop through every word in the dictionary.
    - If the string `s` starts with the current `word`:
        - Make a recursive call to `canBreak()` with the *rest* of the string (`s.substring(word.length)`).
        - If that recursive call returns `true`, it means the rest of the string can also be broken down, so we have found a valid segmentation. Return `true`.
3.  If the loop finishes without finding a valid segmentation, return `false`.

**Note**: This naive recursive solution is very inefficient. Memoization (caching the results for substrings that have already been computed) is required to make it practical.

### 📚 Key Concepts
-   **Dynamic Programming**: This is a classic DP problem. The recursive solution explores the problem space, and memoization optimizes it by storing the results of subproblems.
`,
  'knapsack-problem-conceptual': `
### 💡 Problem Breakdown
The 0/1 Knapsack problem is a famous optimization problem. Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. In the 0/1 version, you can either take an item or leave it.

### ⚙️ Solution Walkthrough
A recursive function, `knapsack(index, capacity)`, considers the item at the current `index`.
1.  **Base Case**: If `index` is less than 0 (no more items) or `capacity` is 0, we can't add any more value, so return 0.
2.  **Recursive Step**: For the item at `index`, there are two choices:
    - **Exclude the item**: The maximum value is whatever we can get from the remaining items and the same capacity. This is a recursive call: `knapsack(index - 1, capacity)`.
    - **Include the item** (only if its weight is less than or equal to the remaining capacity): The value is `item_value +` the maximum value we can get from the remaining items and the *reduced* capacity. This is a recursive call: `value[index] + knapsack(index - 1, capacity - weight[index])`.
3.  The function returns the maximum of these two choices.

**Note**: Like many recursive solutions to DP problems, this is inefficient without memoization.

### 📚 Key Concepts
-   **Optimization Problem**: A problem that seeks to find the best solution from all feasible solutions.
-   **Dynamic Programming**: The recursive solution breaks the problem into overlapping subproblems.
`,
  'catalan-numbers-recursive': `
### 💡 Problem Breakdown
Catalan numbers are a sequence of natural numbers that appear in various counting problems in combinatorics. The nth Catalan number can be defined by a recursive formula.

### ⚙️ Solution Walkthrough
The recursive function is a direct implementation of the formula: C_n = Σ(i=0 to n-1) [C_i * C_(n-1-i)].
\`\`\`javascript
function catalan(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    let res = 0;
    // Recursive step (summation)
    for (let i = 0; i < n; i++) {
        res += catalan(i) * catalan(n - 1 - i);
    }
    return res;
}
\`\`\`
**Note**: This is very inefficient and requires memoization for practical use.

### 📚 Key Concepts
-   **Combinatorics**: The field of mathematics concerning counting. Catalan numbers are used to count things like the number of correct ways to stack parentheses or the number of unique binary search trees.
`,
  'array-pair-sum-sequence': `
### 💡 Problem Breakdown
The task is to transform an array by summing adjacent pairs of elements. For example, `[1,2,3,4]` becomes `[3, 7]`. If the array has an odd number of elements, the last element is paired with 0.

### ⚙️ Solution Walkthrough
A recursive function processes the first two elements and then calls itself on the rest of the array.
\`\`\`javascript
function pairSum(arr) {
    // Base cases
    if (arr.length === 0) return [];
    if (arr.length === 1) return [arr[0]];
    
    // Recursive step: sum the first two, and recurse on the rest.
    const sumOfFirstPair = arr[0] + arr[1];
    return [sumOfFirstPair, ...pairSum(arr.slice(2))];
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Data Transformation**: Creating a new array by recursively processing chunks of the input array.
`,
  'deep-equals-recursive': `
### 💡 Problem Breakdown
The goal is to compare two values (primitives, arrays, or objects) for deep equality. This means not just checking if they are the same object in memory (`===`), but checking if their contents are structurally identical.

### ⚙️ Solution Walkthrough
The recursive function `deepEquals` handles different types.
1.  **Base Case (Primitives)**: If the values are not objects, compare them with `===`.
2.  **Recursive Step (Arrays)**: If both are arrays, check if they have the same length. Then, loop through and recursively call `deepEquals` on each pair of elements.
3.  **Recursive Step (Objects)**: If both are objects, check if they have the same number of keys. Then, loop through the keys of one object and recursively call `deepEquals` on the corresponding values from both objects.
4.  Handle edge cases like `null` and different types.

### 📚 Key Concepts
-   **Structural Equality**: Comparing the contents of objects rather than their references.
-   **Recursive Comparison**: The core logic is recursive because comparing two sub-objects is the same problem as comparing the top-level objects.
`,
  'flood-fill-conceptual': `
### 💡 Problem Breakdown
Flood fill is the algorithm used by the "paint bucket" tool in image editing software. Starting from a single pixel, it changes the color of that pixel and all adjacent pixels of the same original color to a new color.

### ⚙️ Solution Walkthrough
A recursive function `fill(x, y, targetColor, newColor)` is the core of the algorithm.
1.  **Base Cases**:
    - If the coordinates `(x, y)` are outside the image boundaries, return.
    - If the color of the pixel at `(x, y)` is *not* the `targetColor`, return (we've hit a boundary).
2.  **Action**: Change the color of the pixel at `(x, y)` to `newColor`.
3.  **Recursive Step**: Recursively call `fill` for all four neighbors: `(x+1, y)`, `(x-1, y)`, `(x, y+1)`, and `(x, y-1)`.

**Note**: To prevent infinite recursion in graphs with cycles, a "visited" set is often used, but for a simple grid fill, checking the target color serves the same purpose.

### 📚 Key Concepts
-   **Graph Traversal**: This is a form of Depth-First Search (DFS) on the grid of pixels.
`,
  'tree-includes-recursive': `
### 💡 Problem Breakdown
The task is to search a binary tree to see if it contains a specific value.

### ⚙️ Solution Walkthrough
A recursive function `includes(node, value)` traverses the tree.
1.  **Base Case 1**: If the current `node` is `null`, the value is not in this branch, so return `false`.
2.  **Base Case 2**: If `node.value` is equal to the target `value`, we've found it, so return `true`.
3.  **Recursive Step**: If the value wasn't found at the current node, it might be in the left subtree OR the right subtree. We recursively search both.
    - `return includes(node.left, value) || includes(node.right, value);`

### 📚 Key Concepts
-   **Tree Traversal**: The search systematically visits nodes until the value is found or the tree is exhausted.
`,
  'graph-dfs-conceptual': `
### 💡 Problem Breakdown
Depth-First Search (DFS) is a key algorithm for traversing a graph. It explores as far as possible along each branch before backtracking. Recursion is the most natural way to implement DFS. A critical component is tracking "visited" nodes to avoid getting stuck in infinite loops if the graph contains cycles.

### ⚙️ Solution Walkthrough
A recursive function `dfs(node, visitedSet)` performs the traversal.
1.  **Base Case**: If the current `node` has already been visited (i.e., it's in the `visitedSet`), return immediately to prevent an infinite loop.
2.  **Action**:
    - Add the current `node` to the `visitedSet`.
    - Process the node (e.g., print its value).
3.  **Recursive Step**: For each `neighbor` of the current `node`, recursively call `dfs(neighbor, visitedSet)`.

### 📚 Key Concepts
-   **Graph**: A data structure consisting of nodes (or vertices) and edges that connect them.
-   **Depth-First Search (DFS)**: A traversal algorithm that prioritizes depth.
`,
  'phone-letter-combinations': `
### 💡 Problem Breakdown
Given a string of digits (like "23"), the task is to generate all possible letter combinations that the number could represent, based on a standard telephone keypad mapping (2 -> "abc", 3 -> "def", etc.). This is a backtracking problem.

### ⚙️ Solution Walkthrough
A recursive backtracking function builds up the combinations.
\`\`\`javascript
// Simplified helper function
function findCombinations(currentCombination, remainingDigits) {
    // Base case: No digits left, so we have a full combination.
    if (remainingDigits === "") {
        results.push(currentCombination);
        return;
    }
    const currentDigit = remainingDigits[0];
    const letters = keypadMap[currentDigit];
    
    // Recursive step: Loop through the letters for the current digit.
    for (const letter of letters) {
        findCombinations(currentCombination + letter, remainingDigits.slice(1));
    }
}
\`\`\`
### 📚 Key Concepts
-   **Backtracking**: The algorithm explores each possible path (each letter for a digit) and recursively builds upon it.
`,
  'digital-root-recursive': `
### 💡 Problem Breakdown
The digital root of a number is the single-digit value obtained by an iterative process of summing digits, on each step using the result from the previous step as input to the digit summation. The process continues until a single-digit number is reached. For example, the digital root of 942 is 6 (9+4+2=15, 1+5=6).

### ⚙️ Solution Walkthrough
A recursive function checks if the number is already a single digit. If not, it sums the digits and calls itself with the sum.
\`\`\`javascript
function digitalRoot(n) {
    // Base case: The number is already a single digit.
    if (n < 10) {
        return n;
    }
    // Get the sum of the digits.
    const sum = String(n).split('').reduce((acc, digit) => acc + Number(digit), 0);
    // Recursive step: Find the digital root of the sum.
    return digitalRoot(sum);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Definition**: The problem is defined in terms of a simpler version of itself.
`,
  'step-combinations': `
### 💡 Problem Breakdown
This is a classic dynamic programming problem, often called "Climbing Stairs." If you can take 1, 2, or 3 steps at a time, the number of ways to reach step `n` is the sum of the ways to reach step `n-1`, `n-2`, and `n-3`.

### ⚙️ Solution Walkthrough
The recursive function directly implements this relationship.
\`\`\`javascript
function countWays(n) {
    // Base cases
    if (n < 0) return 0; // Invalid path
    if (n === 0) return 1; // One way to reach the start (by not moving)
    
    // Recursive step
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
}
\`\`\`
**Note**: This is inefficient without memoization.

### 📚 Key Concepts
-   **Dynamic Programming**: The solution to the problem of size `n` depends on the solutions to smaller subproblems.
`,
  'find-uppercase-recursive': `
### 💡 Problem Breakdown
The goal is to find the first uppercase letter in a string using recursion.

### ⚙️ Solution Walkthrough
The function checks the first character. If it's uppercase, it returns it. If not, it recursively calls itself on the rest of the string.
\`\`\`javascript
function findUppercase(str) {
    // Base case: Reached the end of the string, none found.
    if (str === "") {
        return "Not found";
    }
    const first = str[0];
    // Base case: Found an uppercase letter.
    if (first >= 'A' && first <= 'Z') {
        return first;
    }
    // Recursive step: Check the rest of the string.
    return findUppercase(str.slice(1));
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Search**: A simple linear scan implemented recursively.
`,
  'memoization-conceptual': `
### 💡 Problem Breakdown
Memoization is an optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It's a specific form of caching and is a cornerstone of making many recursive algorithms efficient.

### ⚙️ Solution Walkthrough
A higher-order function wraps the function to be memoized. It uses a closure to store the cache.
\`\`\`javascript
// Conceptual wrapper
function memoize(fn) {
    const cache = {}; // The cache is stored in the closure
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key]; // Return cached result
        }
        const result = fn(...args);
        cache[key] = result; // Compute and cache the result
        return result;
    }
}
const slowFib = (n) => { /* inefficient recursive fibonacci */ };
const fastFib = memoize(slowFib); // Create a memoized version
\`\`\`
### 📚 Key Concepts
-   **Caching**: Storing computed results to avoid re-computation.
-   **Closures**: Provide the private, persistent state needed to store the cache.
-   **Pure Functions**: Memoization is most effective on pure functions, which are guaranteed to return the same output for the same input.
`,
  'permutations-with-duplicates': `
### 💡 Problem Breakdown
This is a more complex version of the permutations problem. If the input array has duplicate numbers, the naive recursive approach will generate duplicate permutations. The goal is to generate only the unique permutations.

### ⚙️ Solution Walkthrough
The common solution involves backtracking. To avoid duplicates, you either use a frequency map of the numbers or sort the array first. With a sorted array, you can add a check: if the current number is the same as the previous number, and the previous number has not been used in this path, skip the current number.
\`\`\`javascript
// Conceptual logic within the recursive backtracking function
// Assume the input array is sorted.
for (let i = 0; i < nums.length; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
    }
    // ... proceed with the backtracking step ...
}
\`\`\`
### 📚 Key Concepts
-   **Backtracking**: A recursive algorithm for exploring all possible solutions.
-   **Handling Duplicates**: A common constraint in permutation and combination problems that requires extra logic to avoid redundant work.
`,
  'longest-common-subsequence-conceptual': `
### 💡 Problem Breakdown
The Longest Common Subsequence (LCS) problem is to find the length of the longest subsequence that is common to two given sequences (e.g., strings). A subsequence is a sequence that can be derived from another by deleting some or no elements without changing the order of the remaining elements.

### ⚙️ Solution Walkthrough
A recursive function `lcs(str1, str2)` is defined.
1.  **Base Case**: If either string is empty, the LCS is 0.
2.  **Recursive Step**:
    - If the last characters of both strings match: The LCS length is `1 + lcs(str1_without_last, str2_without_last)`.
    - If the last characters do not match: The LCS length is the `max` of two possibilities: `lcs(str1_without_last, str2)` and `lcs(str1, str2_without_last)`.

**Note**: This requires memoization (dynamic programming) to be efficient.

### 📚 Key Concepts
-   **Dynamic Programming**: Breaking the problem into overlapping subproblems.
`,
  'edit-distance-conceptual': `
### 💡 Problem Breakdown
The Edit Distance (or Levenshtein distance) between two strings is the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into the other.

### ⚙️ Solution Walkthrough
A recursive function `editDistance(str1, str2)` is defined.
1.  **Base Case**: If one string is empty, the distance is the length of the other string.
2.  **Recursive Step**:
    - If the last characters of both strings match, the distance is the same as the distance for the strings without their last characters: `editDistance(str1-1, str2-1)`.
    - If the last characters do not match, the distance is `1 + min` of three possibilities:
        - Insert: `editDistance(str1, str2-1)`
        - Delete: `editDistance(str1-1, str2)`
        - Substitute: `editDistance(str1-1, str2-1)`

**Note**: This also requires memoization to be efficient.

### 📚 Key Concepts
-   **Dynamic Programming**: A classic DP problem solved by considering the optimal solutions to smaller subproblems.
`,
  'is-prime-recursive': `
### 💡 Problem Breakdown
A prime number is a number greater than 1 that has no positive divisors other than 1 and itself. The task is to check for primality using recursion.

### ⚙️ Solution Walkthrough
A recursive helper function checks for divisibility starting from a divisor of 2.
\`\`\`javascript
function isPrime(n, divisor = 2) {
    // Base cases
    if (n <= 2) return (n === 2);
    if (n % divisor === 0) return false;
    if (divisor * divisor > n) return true;
    
    // Recursive step: Check the next divisor.
    return isPrime(n, divisor + 1);
}
\`\`\`
1.  **Base Cases**: Handle small numbers, a successful check (divisor exceeds square root), and a failed check (number is divisible).
2.  **Recursive Step**: If no conclusion can be drawn, check the next potential divisor.

### 📚 Key Concepts
-   **Primality Test**: The algorithm for determining if a number is prime.
`,
  'all-unique-chars-recursive': `
### 💡 Problem Breakdown
The goal is to determine if all characters in a string are unique, using recursion.

### ⚙️ Solution Walkthrough
A recursive helper function can keep track of the characters seen so far in a `Set`.
\`\`\`javascript
function isUnique(str, seen = new Set()) {
    // Base case: If the string is empty, all previous chars were unique.
    if (str === "") {
        return true;
    }
    const first = str[0];
    // Base case: We've seen this character before.
    if (seen.has(first)) {
        return false;
    }
    // Add the current character to the seen set.
    seen.add(first);
    // Recursive step: Check the rest of the string.
    return isUnique(str.slice(1), seen);
}
\`\`\`
### 📚 Key Concepts
-   **State Passing**: The `seen` set is passed through the recursive calls to maintain the state of which characters have been encountered.
`,
  'fractal-generation-conceptual': `
### 💡 Problem Breakdown
Fractals are complex, self-similar patterns. Recursion is the natural way to generate them because the process of drawing a part of the fractal is often the same as drawing the whole fractal, just at a smaller scale.

### ⚙️ Solution Walkthrough
Consider drawing a fractal tree.
\`\`\`javascript
// Conceptual pseudo-code
function drawBranch(x, y, angle, length, depth) {
    // Base case: If depth is 0, stop.
    if (depth === 0) return;
    
    // Calculate the end point of the current branch
    const endX = x + length * Math.cos(angle);
    const endY = y + length * Math.sin(angle);
    
    // Draw the line for the current branch
    drawLine(x, y, endX, endY);
    
    // Recursive step: Draw two smaller branches from the end point.
    drawBranch(endX, endY, angle - 20, length * 0.8, depth - 1);
    drawBranch(endX, endY, angle + 20, length * 0.8, depth - 1);
}
\`\`\`
### 📚 Key Concepts
-   **Self-Similarity**: The property of fractals where a small part of the shape resembles the whole. This maps directly to the concept of a recursive function calling itself.
`,
  'is-valid-bst-conceptual': `
### 💡 Problem Breakdown
A Binary Search Tree (BST) has a specific ordering property: for any given node, all values in its left subtree must be smaller, and all values in its right subtree must be larger. The task is to validate this property for an entire tree recursively.

### ⚙️ Solution Walkthrough
A recursive helper function must not only check the immediate children but also ensure that all nodes in a subtree respect the constraints imposed by their ancestors. This is done by passing down a valid range (`min`, `max`).
\`\`\`javascript
// Conceptual code
function isValid(node, min, max) {
    // Base case: An empty tree is a valid BST.
    if (node === null) return true;
    
    // Check if the current node violates the min/max constraints.
    if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
        return false;
    }
    
    // Recursive step: Check the left and right subtrees with updated constraints.
    // The left child's max is the current node's value.
    // The right child's min is the current node's value.
    return isValid(node.left, min, node.value) && isValid(node.right, node.value, max);
}
\`\`\`
### 📚 Key Concepts
-   **Binary Search Tree (BST)**: A sorted tree data structure.
-   **Constraint Propagation**: The recursive calls pass down updated constraints (`min` and `max`) that must be satisfied by all nodes in that subtree.
`,
  'tree-sum-recursive': `
### 💡 Problem Breakdown
The task is to find the sum of all values in a binary tree.

### ⚙️ Solution Walkthrough
The recursive logic is: the total sum of a tree is the current node's value, plus the sum of its left subtree, plus the sum of its right subtree.
\`\`\`javascript
function sumTree(node) {
    // Base case: The sum of an empty tree is 0.
    if (node === null) {
        return 0;
    }
    // Recursive step:
    return node.value + sumTree(node.left) + sumTree(node.right);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Accumulation**: Building a total sum by recursively summing the parts of the data structure.
`,
  'array-interleave-recursive': `
### 💡 Problem Breakdown
The goal is to merge two arrays by taking elements from each in an alternating fashion, e.g., `[a,b]` and `[1,2]` becomes `[a,1,b,2]`.

### ⚙️ Solution Walkthrough
The recursive function takes the first element from each array and prepends them to the result of the recursive call on the rest of the arrays.
\`\`\`javascript
function interleave(arr1, arr2) {
    // Base case: If arrays are empty, we're done.
    if (arr1.length === 0) {
        return [];
    }
    // Recursive step:
    const first1 = arr1[0];
    const first2 = arr2[0];
    const rest = interleave(arr1.slice(1), arr2.slice(1));
    return [first1, first2, ...rest];
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Construction**: Building a new array by combining elements and the result of a recursive call.
`,
  'is-power-of-two-recursive': `
### 💡 Problem Breakdown
A number is a power of two if it can be written as 2^k for some integer k. This means it must be positive and repeatedly divisible by 2 until it becomes 1.

### ⚙️ Solution Walkthrough
The recursive function continuously divides the number by 2.
\`\`\`javascript
function isPowerOfTwo(n) {
    // Base case: 1 is a power of two (2^0).
    if (n === 1) return true;
    // Base case: If it's less than 1 or not divisible by 2, it can't be.
    if (n < 1 || n % 2 !== 0) return false;
    // Recursive step:
    return isPowerOfTwo(n / 2);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Validation**: Checking a property by recursively simplifying the input.
`,
  'is-power-of-three-recursive': `
### 💡 Problem Breakdown
This is similar to checking for a power of two, but the divisor is 3. A number is a power of three if it's positive and repeatedly divisible by 3 until it becomes 1.

### ⚙️ Solution Walkthrough
The recursive function continuously divides the number by 3.
\`\`\`javascript
function isPowerOfThree(n) {
    if (n === 1) return true;
    if (n < 1 || n % 3 !== 0) return false;
    return isPowerOfThree(n / 3);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Validation**: A general pattern for checking properties based on divisibility.
`,
  'remove-adjacent-duplicates-recursive': `
### 💡 Problem Breakdown
The goal is to remove consecutive duplicate characters from a string. For example, "abbaca" -> "abaca".

### ⚙️ Solution Walkthrough
The recursive function checks if the first two characters are the same. If they are, it skips the first one and recurses. If not, it keeps the first one and recurses.
\`\`\`javascript
function removeAdjacentDuplicates(str) {
    if (str.length <= 1) return str; // Base case
    
    // If first two are duplicates, recurse on the string without the first char.
    if (str[0] === str[1]) {
        return removeAdjacentDuplicates(str.slice(1));
    }
    // Otherwise, keep the first char and recurse on the rest.
    return str[0] + removeAdjacentDuplicates(str.slice(1));
}
\`\`\`
### 📚 Key Concepts
-   **Recursive String Building**: Constructing a new string based on recursive processing of an input string.
`,
  'invert-binary-tree-conceptual': `
### 💡 Problem Breakdown
Inverting (or mirroring) a binary tree means that for every node, its left and right children are swapped. This operation needs to be applied to all nodes in the tree.

### ⚙️ Solution Walkthrough
A recursive function `invert(node)` is the natural solution.
1.  **Base Case**: If the current `node` is `null`, do nothing and return.
2.  **Action**: Swap the left and right children of the current `node`.
    - `const temp = node.left;`
    - `node.left = node.right;`
    - `node.right = temp;`
3.  **Recursive Step**: Recursively call `invert` for both of the (new) children:
    - `invert(node.left);`
    - `invert(node.right);`

The post-order nature of the recursion (recursing first, then swapping) would also work.

### 📚 Key Concepts
-   **Recursive Tree Transformation**: Applying a structural change to every node in a tree using recursion.
`,
  'decode-ways-conceptual': `
### 💡 Problem Breakdown
This is a dynamic programming problem where letters 'A'-'Z' are mapped to numbers 1-26. Given a string of digits, the goal is to count the number of ways it can be decoded. For example, "12" can be decoded as "AB" (1, 2) or "L" (12).

### ⚙️ Solution Walkthrough
A recursive function `count(s)` is defined.
1.  **Base Case**: If `s` is empty, there is 1 way to decode it (the empty way).
2.  **Recursive Step**: The total number of ways is the sum of two possibilities:
    - **One-digit decode**: The number of ways to decode the rest of the string (`s.slice(1)`). This is valid if the first digit is not '0'.
    - **Two-digit decode**: If the first two digits form a number between 10 and 26, add the number of ways to decode the rest of the string (`s.slice(2)`).

**Note**: This needs memoization to be efficient.

### 📚 Key Concepts
-   **Dynamic Programming**: The solution depends on the solutions to smaller subproblems (the rest of the string).
`,
  'unique-binary-search-trees-conceptual': `
### 💡 Problem Breakdown
The task is to find how many structurally unique Binary Search Trees (BSTs) can be created that store values from 1 to `n`. This is a combinatorial problem whose solution is the nth Catalan number.

### ⚙️ Solution Walkthrough
A recursive function `countTrees(n)` is defined.
1.  **Base Case**: If `n` is 0 or 1, there is 1 unique tree.
2.  **Recursive Step**: To find the number of trees for `n` nodes, we can choose each number `i` from 1 to `n` to be the root.
    - If `i` is the root, then there will be `i-1` nodes in the left subtree and `n-i` nodes in the right subtree.
    - The total number of unique trees with `i` as the root is `countTrees(i-1) * countTrees(n-i)`.
3.  The final result is the sum of these products for all possible roots from 1 to `n`.

### 📚 Key Concepts
-   **Combinatorics**: A problem that involves counting arrangements.
-   **Catalan Numbers**: The sequence of numbers that solves this problem.
`,
  'word-squares-conceptual': `
### 💡 Problem Breakdown
A "word square" is a set of words where the kth row and kth column read the same string. Given a list of words, the task is to find all possible word squares. This is a backtracking problem.

### ⚙️ Solution Walkthrough
A recursive helper function `find(currentSquare)` builds the square row by row.
1.  **Base Case**: If the `currentSquare` has reached the desired size (e.g., its length is equal to the length of the words), a valid word square has been found.
2.  **Recursive Step**:
    - Determine the `prefix` for the next word. If we are building row `k`, the prefix is formed by taking the `k`-th character of the first `k` words already in the square.
    - Find all words in the original list that start with this `prefix`.
    - For each of these valid words:
        - Add the word to the `currentSquare`.
        - Make a recursive call: `find(currentSquare)`.
        - **Backtrack**: Remove the word from `currentSquare` to allow exploration of other possibilities.

### 📚 Key Concepts
-   **Backtracking**: The core algorithm for exploring the search space of possible solutions and abandoning paths that fail.
-   **Trie (Prefix Tree)**: A Trie data structure is often used to efficiently find all words with a given prefix, which is a key part of this problem.
`,
  'robot-in-a-grid-conceptual': `
### 💡 Problem Breakdown
This is a pathfinding problem on a grid, often solved with recursion. The goal is to find a path from the top-left to the bottom-right, avoiding obstacles.

### ⚙️ Solution Walkthrough
A recursive function `findPath(row, col, path)` attempts to find a path starting from `(row, col)`.
1.  **Base Cases**:
    - If `(row, col)` is out of bounds or is an obstacle, return `false` (this path is invalid).
    - If `(row, col)` is the destination, add it to the path and return `true` (a solution is found).
2.  **Recursive Step**:
    - Assume the current cell `(row, col)` is part of the path.
    - First, try moving right: recursively call `findPath(row, col + 1, path)`. If this call returns `true`, it means a path was found, so we also return `true`.
    - If moving right failed, try moving down: recursively call `findPath(row + 1, col, path)`. If this call returns `true`, we return `true`.
3.  **Backtracking**: If neither moving right nor moving down leads to a solution, it means the current cell is part of a dead end. Remove it from the path and return `false`.

### 📚 Key Concepts
-   **Backtracking**: The algorithm explores a path and backtracks if it hits a dead end.
-   **Pathfinding**: A common category of algorithms for finding a route between two points.
`,
  'magic-index-conceptual': `
### 💡 Problem Breakdown
A "magic index" in a sorted array `A` is an index `i` where the value at that index is equal to the index itself, i.e., `A[i] = i`. The task is to explain a recursive algorithm to find such an index if one exists. Because the array is sorted, we can use a binary search approach.

### ⚙️ Solution Walkthrough
A recursive helper function implements a binary search. It takes the array and the left/right boundaries of the current search space.
\`\`\`javascript
function findMagicIndex(arr) {
    function search(left, right) {
        if (left > right) { // Base case: not found
            return -1;
        }
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === mid) { // Base case: found
            return mid;
        }
        
        // Recursive steps: search the correct half
        if (arr[mid] > mid) {
            // If value is greater than index, magic index can't be on the right.
            return search(left, mid - 1);
        } else {
            // If value is less than index, magic index can't be on the left.
            return search(mid + 1, right);
        }
    }
    return search(0, arr.length - 1);
}
\`\`\`
1.  **Base Cases**: The recursion stops if the search space is invalid (`left > right`), indicating the element was not found. It also stops if a magic index is found (`arr[mid] === mid`).
2.  **Recursive Step**: The core of the algorithm is deciding which half of the array to search next.
    - If `arr[mid] > mid`, it means that for any index `j > mid`, `arr[j]` must also be greater than `j` (since the array is sorted and values increase by at least 1). So, we only need to search the left half.
    - Conversely, if `arr[mid] < mid`, we only need to search the right half.

### 📚 Key Concepts
-   **Binary Search**: A highly efficient searching algorithm for sorted arrays that works by repeatedly dividing the search interval in half. Its recursive nature makes it a great example of divide and conquer.
-   **Divide and Conquer**: Breaking a problem down into smaller subproblems until they become simple enough to be solved directly.
`
};
