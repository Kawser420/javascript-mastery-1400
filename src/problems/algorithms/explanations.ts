export const explanations: Record<string, string> = {
  "two-sum": `
### 💡 Problem Breakdown
This is a classic algorithm question. Given a list of numbers and a target sum, you need to find two numbers in the list that add up exactly to that target. The function should return the positions (indices) of these two numbers.

### ⚙️ Solution Walkthrough
The optimal solution uses a hash map (a JavaScript \`Map\` or plain object) to solve this problem in a single pass, achieving O(n) time complexity.
\`\`\`javascript
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}
\`\`\`
1.  **Initialization**: A \`Map\` is created to store numbers we've seen and their indices.
2.  **Loop**: We iterate through the array.
3.  **Calculate Complement**: For the current number, we calculate its "complement" – the other number needed to reach the target.
4.  **Check the Map**: We check if this complement already exists as a key in our map.
    *   **If it exists**: We have found our pair! The value in the map is the index of the complement, and \`i\` is the index of the current number.
    *   **If it doesn't**: We add the current number and its index to the map, so we can find it in a future iteration.

### 📚 Key Concepts
- **Time Complexity**: A measure of how an algorithm's runtime grows with input size. O(n) is linear time, which is very efficient.
- **Hash Map**: A data structure that provides very fast lookups (on average O(1) or constant time). This is the key to the solution's efficiency.
`,
  "linear-search": `
### 💡 Problem Breakdown
Linear search is the most straightforward search algorithm. It sequentially checks each element of a list until a match is found or the whole list has been searched.

### ⚙️ Solution Walkthrough
The solution uses a simple \`for\` loop to iterate through the array.
\`\`\`javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target found, return its index
        }
    }
    return -1; // Target not found
}
\`\`\`
1.  **Iteration**: The loop starts at the first element (index 0).
2.  **Comparison**: In each iteration, it checks if the current element \`arr[i]\` is equal to the \`target\`.
3.  **Return**: If a match is found, the loop is terminated, and the index is returned immediately. If the loop completes without finding a match, -1 is returned.

### 📚 Key Concepts
- **Time Complexity**: Linear search has a time complexity of O(n) because, in the worst case, it has to check every single element in the array.
- **Unsorted Data**: This algorithm works on both sorted and unsorted arrays.
`,
  "binary-search": `
### 💡 Problem Breakdown
Binary search is a highly efficient algorithm for finding an item from a **sorted** list of items. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.

### ⚙️ Solution Walkthrough
The solution uses a \`while\` loop and three pointers: \`left\`, \`right\`, and \`mid\`.
\`\`\`javascript
function binarySearch(sortedArr, target) {
    let left = 0, right = sortedArr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArr[mid] === target) return mid;
        if (sortedArr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
\`\`\`
1.  **Initialization**: \`left\` starts at the first index (0) and \`right\` starts at the last index.
2.  **Loop**: The loop continues as long as our search window is valid (\`left <= right\`).
3.  **Compare**: The target is compared to the middle element. If they match, we're done. If the target is larger, we know it must be in the right half, so we update \`left\`. If the target is smaller, we search the left half by updating \`right\`.

### 📚 Key Concepts
- **Divide and Conquer**: An algorithmic paradigm where you break a problem into subproblems. Binary search is a prime example.
- **Time Complexity**: O(log n) (logarithmic time). Because the search space is halved with each comparison, it is extremely fast.
- **Prerequisite**: The input array must be sorted for this algorithm to work.
`,
  "bubble-sort": `
### 💡 Problem Breakdown
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because larger elements "bubble" to the end.

### ⚙️ Solution Walkthrough
The solution uses a nested loop. The outer loop shrinks the unsorted part of the array, and the inner loop performs the comparisons and swaps.
\`\`\`javascript
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}
\`\`\`
After the first pass of the outer loop, the largest element is guaranteed to be at the very end. This is why the inner loop's boundary is \`arr.length - 1 - i\`.

### 📚 Key Concepts
- **Sorting Algorithm**: An algorithm that puts elements of a list into a certain order.
- **In-Place Sort**: An algorithm which transforms input using no auxiliary data structure.
- **Time Complexity**: O(n²) (quadratic time). This makes it inefficient for large lists. It's mainly used for educational purposes due to its simplicity.
`,
  "selection-sort": `
### 💡 Problem Breakdown
Selection sort is another simple sorting algorithm. It works by dividing the input list into two parts: a sorted sublist which is built up from left to right, and a sublist of the remaining unsorted items. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list.

### ⚙️ Solution Walkthrough
The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.
\`\`\`javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
    }
  }
  return arr;
}
\`\`\`
1.  **Outer Loop**: Iterates from the first element to the second-to-last, expanding the sorted portion of the array.
2.  **Inner Loop**: Finds the index of the minimum element in the remaining unsorted portion.
3.  **Swap**: Swaps the found minimum element with the first element of the unsorted portion.

### 📚 Key Concepts
- **In-Place Sort**: It sorts the array without requiring significant additional memory.
- **Time Complexity**: O(n²) (quadratic time), as it uses nested loops. It is inefficient for large datasets but simple to understand.
`,
  "insertion-sort": `
### 💡 Problem Breakdown
Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It iterates through the input elements and, for each element, it "inserts" it into its correct position in the already-sorted part of the array.

### ⚙️ Solution Walkthrough
The algorithm iterates from the second element. It takes the current element and compares it with the elements in the sorted portion (to its left), shifting them to the right until it finds the correct spot for the current element.
\`\`\`javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    // Move elements of arr[0..i-1], that are greater than current,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
\`\`\`
1.  **Outer Loop**: Iterates through the array, picking an element to be inserted into the sorted part.
2.  **Inner \`while\` Loop**: Shifts elements in the sorted part to the right to make space for the \`current\` element.

### 📚 Key Concepts
- **Time Complexity**: O(n²) in the average and worst case. However, it is very efficient for small datasets or for datasets that are already nearly sorted (O(n) in the best case).
- **Stable Sort**: Insertion sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements.
`,
  fizzbuzz: `
### 💡 Problem Breakdown
FizzBuzz is a classic programming interview question. The task is to loop through numbers from 1 to a given number \`n\`. For each number, you must check for certain conditions:
-   If the number is divisible by both 3 and 5, print "FizzBuzz".
-   If the number is divisible by 3 (but not 5), print "Fizz".
-   If the number is divisible by 5 (but not 3), print "Buzz".
-   Otherwise, print the number itself.

### ⚙️ Solution Walkthrough
The solution uses a \`for\` loop and a series of \`if...else if...else\` statements to check the conditions in the correct order.
\`\`\`javascript
function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push('FizzBuzz');
        else if (i % 3 === 0) result.push('Fizz');
        else if (i % 5 === 0) result.push('Buzz');
        else result.push(i);
    }
    return result.join(', ');
}
\`\`\`
1.  **Order of Checks is Crucial**: The first check is \`if (i % 15 === 0)\`. We check for divisibility by 15 (which is 3 * 5) first. If we checked for divisibility by 3 first, then for the number 15, the code would print "Fizz" and stop, which is incorrect.
2.  **Modulo Operator (\`%\`)**: The modulo operator is used to check for divisibility. If \`number % divisor\` is 0, it means the number is perfectly divisible.

### 📚 Key Concepts
- **Control Flow**: Using constructs like loops and conditional statements (\`if/else\`) to direct the execution of a program.
`,
  "merge-sort-conceptual": `
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
- **Divide and Conquer**: The core strategy of breaking a problem into smaller, easier-to-solve subproblems.
- **Recursion**: The \`mergeSort\` function calls itself on the left and right halves of the array.
- **Time Complexity**: O(n log n), which is very efficient for large datasets.
- **Space Complexity**: O(n), as it requires extra space to store the merged sub-arrays.
`,
  "quick-sort-conceptual": `
### 💡 Problem Breakdown
Quick sort is another efficient, "divide and conquer" sorting algorithm. It works by selecting a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. It then recursively sorts the sub-arrays.

### ⚙️ Solution Walkthrough
The recursive logic is as follows:
\`\`\`javascript
function quickSort(arr) {
    // 1. Base Case: An array with 0 or 1 elements is already sorted.
    if (arr.length < 2) {
        return arr;
    }
    
    // 2. Recursive (Divide) Step:
    const pivot = arr[0]; // Simple pivot selection
    const less = arr.slice(1).filter(el => el <= pivot);
    const greater = arr.slice(1).filter(el => el > pivot);
    
    // Recursively sort the sub-arrays.
    const sortedLess = quickSort(less);
    const sortedGreater = quickSort(greater);
    
    // 3. Conquer Step: Combine the results.
    return [...sortedLess, pivot, ...sortedGreater];
}
\`\`\`
**Note**: This implementation is simple to understand but not in-place and can be inefficient. A proper in-place implementation uses a \`partition\` helper function with pointers.

### 📚 Key Concepts
- **Divide and Conquer**: The core strategy of partitioning the array and recursively solving the subproblems.
- **Pivot**: The element chosen to partition the array. The choice of pivot can significantly affect the algorithm's performance.
- **Time Complexity**: Average case is O(n log n). Worst case (with a bad pivot on sorted data) is O(n²).
`,
  "kadanes-algorithm": `
### 💡 Problem Breakdown
This is a classic algorithm for finding the contiguous subarray within a one-dimensional array of numbers that has the largest sum.

### ⚙️ Solution Walkthrough
The algorithm is remarkably simple and efficient, running in O(n) time.
1.  Initialize two variables: \`maxSoFar\` and \`maxEndingHere\`, both to the value of the first element in the array.
2.  Iterate through the array starting from the second element.
3.  For each element, update \`maxEndingHere\`. The new \`maxEndingHere\` is the larger of two values: the current element itself, or the current element plus the previous \`maxEndingHere\`. This step essentially asks, "Should we start a new subarray here, or continue the existing one?"
4.  After updating \`maxEndingHere\`, compare it with \`maxSoFar\` and update \`maxSoFar\` if \`maxEndingHere\` is larger.
5.  The final result is \`maxSoFar\`.

### 📚 Key Concepts
- **Kadane's Algorithm**: A dynamic programming approach where the maximum subarray sum ending at the current position is calculated based on the maximum sum ending at the previous position.
- **Time Complexity**: O(n), as it only requires a single pass through the array.
`,
  "greedy-coin-change": `
### 💡 Problem Breakdown
A greedy algorithm is an approach that makes the locally optimal choice at each stage with the hope of finding a global optimum. For making change with standard coin denominations (like 25, 10, 5, 1), a greedy approach works.

### ⚙️ Solution Walkthrough
The algorithm iterates from the largest coin denomination to the smallest.
\`\`\`javascript
function makeChange(amount) {
  const denominations = [25, 10, 5, 1];
  let remaining = amount;
  const change = {};
  for (const coin of denominations) {
    const count = Math.floor(remaining / coin);
    if (count > 0) {
      change[coin] = count;
      remaining %= coin;
    }
  }
  return change;
}
\`\`\`
1.  **Greedy Choice**: At each step, we take as many of the largest possible coin as we can.
2.  **Update**: We then subtract that value from the remaining amount and move to the next smaller coin.
**Note**: This greedy approach does not work for all coin systems (e.g., if you had coins of 1, 3, and 4, to make 6, greedy would give one 4 and two 1s (3 coins), while the optimal is two 3s (2 coins)).

### 📚 Key Concepts
- **Greedy Algorithm**: A simple, intuitive algorithmic paradigm.
- **Optimal Substructure**: The problem has optimal substructure, but the greedy choice is only guaranteed to be optimal for certain (canonical) coin systems.
`,
  "is-prime": `
### 💡 Problem Breakdown
A prime number is a number greater than 1 that has no positive divisors other than 1 and itself. The task is to write an efficient function to check for primality.

### ⚙️ Solution Walkthrough
The solution iterates from 2 up to the square root of the number, checking for divisibility.
\`\`\`javascript
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
\`\`\`
1.  **Base Cases**: Numbers less than or equal to 1 are not prime.
2.  **Optimization**: We only need to check for divisors up to the square root of \`n\`. If \`n\` has a divisor larger than its square root, it must also have a corresponding divisor that is smaller.

### 📚 Key Concepts
- **Primality Test**: The algorithm for determining if a number is prime.
- **Time Complexity**: The square root optimization makes this algorithm much faster than checking all the way up to \`n\`.
`,
  "sieve-of-eratosthenes": `
### 💡 Problem Breakdown
This is a highly efficient ancient algorithm for finding all prime numbers up to a specified integer. It works by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2.

### ⚙️ Solution Walkthrough
1.  Create a boolean array \`isPrime\` of size \`n+1\`, and initialize all entries to \`true\`.
2.  Mark 0 and 1 as not prime.
3.  Loop from \`p = 2\` up to \`p*p <= n\`.
4.  If \`isPrime[p]\` is still \`true\`, then \`p\` is a prime. Now, mark all multiples of \`p\` (starting from \`p*p\`) as not prime.
5.  After the loop, all indices \`i\` for which \`isPrime[i]\` is \`true\` are prime numbers.

### 📚 Key Concepts
- **Sieve Algorithm**: An algorithm that works by marking off or eliminating candidates.
- **Time Complexity**: Very efficient, approximately O(n log log n).
`,
  "fibonacci-iterative": `
### 💡 Problem Breakdown
The recursive solution for Fibonacci is elegant but very inefficient due to repeated computations. An iterative (loop-based) solution is much more performant.

### ⚙️ Solution Walkthrough
The solution uses two variables to keep track of the previous two numbers in the sequence and calculates the next number in a loop.
\`\`\`javascript
function fib(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    // A concise way to update a and b
    [a, b] = [b, a + b];
  }
  return b;
}
\`\`\`
1.  **Initialization**: \`a\` and \`b\` are initialized to the first two numbers in the sequence (0 and 1).
2.  **Loop**: The loop starts from 2 and goes up to \`n\`. In each step, it calculates the next Fibonacci number and updates the two previous numbers.
3.  **Destructuring Assignment**: \`[a, b] = [b, a + b]\` is a clean way to perform the swap and update in one line.

### 📚 Key Concepts
- **Iterative vs. Recursive**: An example of a problem where an iterative solution is significantly better in terms of performance.
- **Time Complexity**: O(n), a huge improvement over the recursive O(2^n).
- **Space Complexity**: O(1), as it uses a constant amount of extra space.
`,
  "climbing-stairs": `
### 💡 Problem Breakdown
This is a classic dynamic programming problem. The number of ways to reach step \`n\` is the sum of the ways to reach step \`n-1\` (by taking one step) and the ways to reach step \`n-2\` (by taking two steps). This is the exact same recurrence relation as the Fibonacci sequence.

### ⚙️ Solution Walkthrough
The solution is an iterative, bottom-up dynamic programming approach that is identical to calculating Fibonacci numbers.
\`\`\`javascript
function climbStairs(n) {
  if (n <= 2) return n;
  let twoStepsBack = 1; // Ways to reach step 1
  let oneStepBack = 2;  // Ways to reach step 2
  let allWays = 0;
  for (let i = 3; i <= n; i++) {
    allWays = oneStepBack + twoStepsBack;
    twoStepsBack = oneStepBack;
    oneStepBack = allWays;
  }
  return allWays;
}
\`\`\`
1.  **Base Cases**: The ways to reach step 1 is 1. The ways to reach step 2 is 2 (\`1+1\` or \`2\`).
2.  **Iteration**: We build up the solution for step \`i\` based on the already-computed solutions for \`i-1\` and \`i-2\`.

### 📚 Key Concepts
- **Dynamic Programming**: The problem has optimal substructure and overlapping subproblems.
- **Pattern Recognition**: Recognizing that the problem is a variation of the Fibonacci sequence.
`,
  "best-time-to-buy-sell-stock-algo": `
### 💡 Problem Breakdown
You are given an array of stock prices over time. The task is to find the maximum profit you can make by buying the stock on one day and selling it on a future day. You can only complete one transaction.

### ⚙️ Solution Walkthrough
A simple and efficient O(n) solution involves a single pass through the array.
1.  Initialize two variables: \`minPrice\` to a very large number (\`Infinity\`) and \`maxProfit\` to 0.
2.  Iterate through the \`prices\` array.
3.  For each \`price\`:
    - Update the minimum price seen so far: \`minPrice = Math.min(minPrice, price)\`.
    - Calculate the potential profit if we were to sell today: \`profit = price - minPrice\`.
    - Update the maximum profit seen so far: \`maxProfit = Math.max(maxProfit, profit)\`.
4.  Return \`maxProfit\` after the loop.

### 📚 Key Concepts
- **Single Pass Algorithm**: Solving the problem by iterating through the data only once.
- **Greedy Approach**: At each step, we keep track of the lowest price seen so far and calculate the potential profit based on that, which leads to the global maximum.
`,
  "euclidean-algorithm-gcd": `
### 💡 Problem Breakdown
The task is to find the Greatest Common Divisor (GCD) of two integers. The Euclidean algorithm is a very efficient method for this, based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its remainder when divided by the smaller number.

### ⚙️ Solution Walkthrough
An iterative solution uses a \`while\` loop.
\`\`\`javascript
function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}
\`\`\`
1.  **Loop**: The loop continues as long as \`b\` is not 0.
2.  **Update**: In each step, \`a\` becomes \`b\`, and \`b\` becomes the remainder of the old \`a\` divided by the old \`b\`.
3.  **Result**: When \`b\` becomes 0, \`a\` holds the GCD.

### 📚 Key Concepts
- **Euclidean Algorithm**: A classic, highly efficient algorithm for finding the GCD.
- **Modulo Operator (\`%\`)**: The core of the algorithm's iterative step.
`,
  "knapsack-problem-conceptual": `
### 💡 Problem Breakdown
The 0/1 Knapsack problem is a famous optimization problem. Given a set of items, each with a weight and a value, determine which items to include in a collection so that the total weight is less than or equal to a given capacity and the total value is as large as possible. You can either take an item or leave it (0/1).

### ⚙️ Solution Walkthrough
This is a classic dynamic programming problem.
1.  Create a 2D DP table, \`dp[i][w]\`, which will store the maximum value achievable using the first \`i\` items with a knapsack capacity of \`w\`.
2.  Iterate through the items (\`i\`) and capacities (\`w\`).
3.  For each cell \`dp[i][w]\`, there are two choices for item \`i\`:
    - **Don't include the item**: The value is the same as the max value without it: \`dp[i-1][w]\`.
    - **Include the item** (if its weight is less than \`w\`): The value is \`value[i] + dp[i-1][w - weight[i]]\`.
4.  \`dp[i][w]\` is the maximum of these two choices.
5.  The final answer is in the bottom-right cell of the table.

### 📚 Key Concepts
- **Dynamic Programming**: The solution builds upon the optimal solutions to smaller subproblems.
- **Optimization Problem**: A problem that seeks to find the best solution among all feasible solutions.
`,
  "longest-common-subsequence-conceptual": `
### 💡 Problem Breakdown
The Longest Common Subsequence (LCS) problem is to find the length of the longest subsequence that is common to two given sequences (e.g., strings). A subsequence is a sequence that can be derived from another by deleting some or no elements without changing the order of the remaining elements.

### ⚙️ Solution Walkthrough
This is solved with dynamic programming.
1.  Create a 2D DP table, \`dp[i][j]\`, which will store the length of the LCS for the first \`i\` characters of \`str1\` and the first \`j\` characters of \`str2\`.
2.  Iterate through the strings. For each cell \`dp[i][j]\`:
    - If \`str1[i-1] === str2[j-1]\`: The characters match. The LCS is one character longer than the LCS of the strings without these characters: \`dp[i][j] = 1 + dp[i-1][j-1]\`.
    - If they don't match: The LCS is the same as the longest of the two possibilities: \`dp[i-1][j]\` or \`dp[i][j-1]\`.
3.  The final answer is in the bottom-right cell.

### 📚 Key Concepts
- **Dynamic Programming**: A standard DP problem that involves building a 2D table of solutions to subproblems.
`,
  "edit-distance-conceptual": `
### 💡 Problem Breakdown
The Edit Distance (or Levenshtein distance) between two strings is the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into the other.

### ⚙️ Solution Walkthrough
This is another classic dynamic programming problem.
1.  Create a 2D DP table, \`dp[i][j]\`, which stores the edit distance between the first \`i\` characters of \`str1\` and the first \`j\` characters of \`str2\`.
2.  Initialize the first row and column, which represent the distance from an empty string (which is just the number of insertions needed).
3.  Iterate through the strings. For each cell \`dp[i][j]\`:
    - If \`str1[i-1] === str2[j-1]\`: The characters match, so no operation is needed. The cost is the same as the previous subproblem: \`dp[i][j] = dp[i-1][j-1]\`.
    - If they don't match: The cost is \`1 + min\` of the three possible operations: deletion (\`dp[i-1][j]\`), insertion (\`dp[i][j-1]\`), or substitution (\`dp[i-1][j-1]\`).

### 📚 Key Concepts
- **Dynamic Programming**: The solution for \`dp[i][j]\` is built upon the solutions of the adjacent subproblems.
`,
  "tower-of-hanoi-algo-conceptual": `
### 💡 Problem Breakdown
The Tower of Hanoi is a classic puzzle that is elegantly solved with recursion. The goal is to move a stack of N disks from a source peg to a destination peg using an auxiliary peg, with the rules that you can only move one disk at a time and a larger disk can never be on top of a smaller one.

### ⚙️ Solution Walkthrough
The recursive solution breaks the problem of moving N disks into three simpler steps. To move N disks from Source to Destination:
1.  **Move N-1 disks from Source to Auxiliary peg.** (This is a recursive call).
2.  **Move the Nth (largest) disk from Source to Destination peg.** (This is a single move, the "base" action of each step).
3.  **Move the N-1 disks from Auxiliary peg to Destination peg.** (This is another recursive call).

The base case for the recursion is moving a single disk (N=1), which is a direct move from source to destination.

### 📚 Key Concepts
- **Recursive Abstraction**: The beauty of the solution is that you don't need to think about *how* to move the N-1 disks; you just abstractly trust the recursive call to handle it.
`,
  "backtracking-permutations-conceptual": `
### 💡 Problem Breakdown
Backtracking is a general algorithmic technique for finding all (or some) solutions to a computational problem, notably constraint satisfaction problems. It incrementally builds candidates for the solutions and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution.

### ⚙️ Solution Walkthrough
Generating permutations is a classic example.
A recursive function \`findPermutations(currentPermutation, remainingElements)\` is used.
1.  **Base Case**: If \`remainingElements\` is empty, a full permutation has been formed, so add it to the results.
2.  **Recursive Step**:
    - Loop through each element in \`remainingElements\`.
    - Choose an element to be the next in the permutation.
    - Make a recursive call with the updated \`currentPermutation\` and the \`remainingElements\` (without the one just chosen).
    - **Backtracking**: This is implicit. After the recursive call returns, the loop continues to the next element, effectively trying a different path.

### 📚 Key Concepts
- **Backtracking**: A refined brute-force search that prunes the search space.
`,
  "graph-dfs-algo-conceptual": `
### 💡 Problem Breakdown
Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It's often implemented with recursion or an explicit stack.

### ⚙️ Solution Walkthrough
Using an explicit stack:
1.  Initialize a \`stack\` and push the starting node onto it.
2.  Initialize a \`visited\` set to keep track of visited nodes.
3.  Loop while the \`stack\` is not empty.
4.  Pop a node from the stack. If it hasn't been visited:
    - Mark it as visited and process it.
    - Get its neighbors. Push the unvisited neighbors onto the stack.

### 📚 Key Concepts
- **Depth-First Search (DFS)**: A traversal algorithm that prioritizes depth.
- **Stack**: The core data structure for an iterative DFS.
`,
  "graph-bfs-algo-conceptual": `
### 💡 Problem Breakdown
Breadth-First Search (BFS) is a graph traversal algorithm that explores the neighbor nodes first, before moving to the next level neighbors. It explores the graph layer by layer. It's useful for finding the shortest path in an unweighted graph.

### ⚙️ Solution Walkthrough
BFS is implemented with a queue.
1.  Initialize a \`queue\` and enqueue the starting node.
2.  Initialize a \`visited\` set.
3.  Loop while the \`queue\` is not empty.
4.  Dequeue a node. Process it.
5.  Get its neighbors. Enqueue any unvisited neighbors and mark them as visited.

### 📚 Key Concepts
- **Breadth-First Search (BFS)**: A traversal algorithm that explores level by level.
- **Queue**: The core data structure that enables the FIFO (First-In, First-Out) exploration required for BFS.
`,
  "dijkstra-algorithm-conceptual": `
### 💡 Problem Breakdown
Dijkstra's algorithm is a classic algorithm for finding the shortest paths from a single starting node to all other nodes in a **weighted graph with non-negative edge weights**.

### ⚙️ Solution Walkthrough
It's a greedy algorithm that uses a priority queue to be efficient.
1.  **Initialization**:
    - Create a \`distances\` map to store the shortest distance found so far to each node (initialize all to \`Infinity\` except the start node to 0).
    - Create a \`priority queue\` to store nodes to visit, prioritized by their distance. Add the start node.
2.  **Loop**: While the priority queue is not empty:
    - Extract the node with the smallest distance (the "closest" unvisited node).
    - For each of its \`neighbors\`:
        - Calculate the distance to the neighbor through the current node.
        - If this new path is shorter than the previously known distance, update the \`distances\` map and add the neighbor to the priority queue with its new, shorter distance.

### 📚 Key Concepts
- **Greedy Algorithm**: At each step, it chooses the locally optimal path (the closest unvisited node).
- **Priority Queue**: The key data structure that makes Dijkstra's efficient by always providing the next closest node to visit.
`,
  "counting-sort-conceptual": `
### 💡 Problem Breakdown
Counting sort is a non-comparison-based sorting algorithm. It's highly efficient but only works when the input consists of integers within a known, reasonably small range.

### ⚙️ Solution Walkthrough
1.  **Find Range**: Find the minimum and maximum values in the input array.
2.  **Count Frequencies**: Create a \`count\` array. Iterate through the input array and count the frequency of each number, storing it in the \`count\` array.
3.  **Calculate Cumulative Counts**: Modify the \`count\` array so that each index stores the sum of the previous counts. This now tells you the final position of each element.
4.  **Build Output Array**: Iterate through the input array in reverse. For each element, place it in the output array at the position indicated by the \`count\` array, and then decrement the count.

### 📚 Key Concepts
- **Non-Comparison Sort**: It does not compare elements to each other, which allows it to beat the O(n log n) lower bound of comparison sorts.
- **Time Complexity**: O(n + k), where n is the number of elements and k is the range of the input.
`,
  "radix-sort-conceptual": `
### 💡 Problem Breakdown
Radix sort is another non-comparison-based sorting algorithm for integers. It works by sorting numbers digit by digit, from the least significant digit to the most significant.

### ⚙️ Solution Walkthrough
1.  Find the maximum number in the array to determine the number of digits to process.
2.  Loop from the 1s place, then 10s place, then 100s, and so on.
3.  In each loop, use a **stable** sorting algorithm (like counting sort) to sort the array based on the current digit. "Stable" means that if two numbers have the same digit at the current place, their relative order is preserved from the previous pass. This is crucial for the algorithm to work.

### 📚 Key Concepts
- **Stable Sort**: A sorting algorithm that preserves the original order of equal elements.
- **Radix**: The base of a numeral system (e.g., base 10 for decimal numbers).
`,
  "heap-sort-conceptual": `
### 💡 Problem Breakdown
Heap sort is an efficient, in-place, comparison-based sorting algorithm. It uses a Max Heap data structure.

### ⚙️ Solution Walkthrough
The algorithm has two main phases:
1.  **Heapify**: Build a Max Heap from the input array. This can be done in O(n) time by starting from the last non-leaf node and "sinking down" each element to its correct position. After this phase, the largest element is at the root of the heap (index 0).
2.  **Sort Down**:
    - Swap the root element (the maximum) with the last element of the heap.
    - "Remove" the last element from the heap (by decrementing a size pointer).
    - The new root is likely in the wrong place, so "sink it down" to restore the max heap property for the reduced heap.
    - Repeat this process until the heap is empty. The original array will now be sorted in ascending order.

### 📚 Key Concepts
- **Heap**: A specialized tree-based data structure that satisfies the heap property.
- **Time Complexity**: O(n log n) for all cases.
`,
  "sliding-window-maximum-conceptual": `
### 💡 Problem Breakdown
The sliding window technique is an algorithmic pattern for problems that involve processing a contiguous subarray or substring. The "window" of a fixed size slides over the data. The challenge is often to perform this efficiently without re-computing from scratch for each window position.

### ⚙️ Solution Walkthrough
To find the maximum in each window efficiently (O(n) total time), a **deque** (double-ended queue) is used.
1.  The deque will store *indices* of array elements.
2.  The deque is kept in decreasing order of value. The maximum element in the window is always at the front of the deque.
3.  As the window slides:
    - Remove indices from the front that are no longer in the window.
    - Remove indices from the back that correspond to values smaller than the current element.
    - Add the current element's index to the back.
    - The element at the front is the max for the current window.

### 📚 Key Concepts
- **Sliding Window**: An algorithmic pattern.
- **Deque**: The key data structure for the optimal O(n) solution.
`,
  "kmp-algorithm-conceptual": `
### 💡 Problem Breakdown
The Knuth-Morris-Pratt (KMP) algorithm is a highly efficient string searching algorithm. Its key feature is that it avoids re-comparing characters that have already been matched. It achieves this by preprocessing the *pattern* to understand its internal structure.

### ⚙️ Solution Walkthrough
1.  **Preprocessing (Build LPS Array)**: Create a "Longest Proper Prefix which is also Suffix" (LPS) array for the pattern. \`lps[i]\` stores the length of the longest proper prefix of \`pattern[0...i]\` which is also a suffix of \`pattern[0...i]\`. This takes O(m) time, where m is the pattern length.
2.  **Searching**: Use two pointers, one for the text and one for the pattern.
    - When characters match, advance both pointers.
    - When a mismatch occurs, instead of resetting the pattern pointer to 0, use the LPS array to find the correct position to "shift" the pattern to, based on the internal repetitions, avoiding redundant checks. This search phase takes O(n) time.

### 📚 Key Concepts
- **String Searching**: The problem of finding occurrences of a pattern in a text.
- **Time Complexity**: O(n + m), a significant improvement over the naive O(n*m) approach.
`,
  "rabin-karp-algorithm-conceptual": `
### 💡 Problem Breakdown
The Rabin-Karp algorithm is another string-searching algorithm. Its key idea is to use **hashing** to quickly check if a substring of the text is likely to match the pattern.

### ⚙️ Solution Walkthrough
1.  Calculate the hash of the pattern string.
2.  Iterate through the text, maintaining a "sliding window" of the same length as the pattern.
3.  For each window, calculate its hash. A **rolling hash** function is used, which allows the hash of the next window to be calculated in O(1) time from the previous window's hash.
4.  If the hash of the window matches the hash of the pattern, it's a "spurious hit." You must then do a full character-by-character comparison to confirm a true match.

### 📚 Key Concepts
- **Hashing**: The core technique used for fast initial comparisons.
- **Rolling Hash**: An efficient way to calculate hashes for sliding windows.
`,
  "big-o-notation-algo": `
### 💡 Problem Breakdown
Big-O notation is a mathematical notation used to classify algorithms according to how their run time or space requirements grow as the input size grows. It describes the upper bound or worst-case scenario.

### ⚙️ Solution Walkthrough
Common complexities:
- **O(1) - Constant**: The time is independent of the input size (e.g., accessing an array element by index).
- **O(log n) - Logarithmic**: The time grows very slowly. The problem size is halved at each step (e.g., binary search).
- **O(n) - Linear**: The time is directly proportional to the input size (e.g., looping through an array).
- **O(n log n) - Log-linear**: A very efficient time for sorting algorithms (e.g., merge sort, heap sort).
- **O(n²) - Quadratic**: The time is proportional to the square of the input size (e.g., nested loops, bubble sort).

### 📚 Key Concepts
- **Algorithmic Complexity**: A way to analyze and compare the efficiency of algorithms.
`,
  "count-set-bits": `
### 💡 Problem Breakdown
The task is to count the number of '1's in the binary representation of an integer.

### ⚙️ Solution Walkthrough
A clever bitwise trick, Brian Kernighan's algorithm, can solve this efficiently.
\`\`\`javascript
function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    // This operation unsets the rightmost set bit
    n = n & (n - 1);
    count++;
  }
  return count;
}
\`\`\`
1.  **\`n & (n - 1)\`**: The bitwise AND of a number and that number minus one has the effect of clearing the least significant (rightmost) '1' bit.
2.  **Loop**: The loop continues until the number becomes 0. The number of iterations is exactly the number of set bits.

### 📚 Key Concepts
- **Bitwise Operations**: Low-level operations that work directly on the binary representation of numbers.
`,
  "single-number": `
### 💡 Problem Breakdown
You are given an array where every number appears twice, except for one number that appears only once. The task is to find that unique number efficiently.

### ⚙️ Solution Walkthrough
The solution uses the properties of the bitwise XOR operator (\`^\`).
- \`x ^ x = 0\` (XORing a number with itself results in zero).
- \`x ^ 0 = x\` (XORing a number with zero results in the number itself).
- XOR is associative and commutative.

If you XOR all the numbers in the array together, the pairs of duplicate numbers will cancel each other out (become 0), leaving only the unique number.
\`\`\`javascript
function singleNumber(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}
\`\`\`
### 📚 Key Concepts
- **Bitwise XOR**: A powerful operator for solving problems involving duplicates and uniqueness.
- **Time Complexity**: O(n) with O(1) space, making it highly efficient.
`,
  "pascals-triangle": `
### 💡 Problem Breakdown
Pascal's triangle is a triangular array of numbers where the edges are all 1s, and each number inside the triangle is the sum of the two numbers directly above it. The task is to generate the first \`n\` rows.

### ⚙️ Solution Walkthrough
An iterative, bottom-up approach is straightforward.
1.  Initialize a \`triangle\` array with the first row, \`[[1]]\`.
2.  Loop from \`i = 1\` up to \`numRows - 1\`.
3.  In each iteration, get the \`prevRow\`.
4.  Create a \`newRow\` starting with 1.
5.  Calculate the values in the middle of the \`newRow\` by summing adjacent elements of the \`prevRow\`.
6.  End the \`newRow\` with 1.
7.  Push the \`newRow\` to the \`triangle\`.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for row \`i\` is built directly from the solution for row \`i-1\`.
`,
  "dutch-national-flag-problem": `
### 💡 Problem Breakdown
This is a famous sorting problem. Given an array containing only three distinct values (often 0, 1, and 2), the goal is to sort it in-place in a single pass.

### ⚙️ Solution Walkthrough
The algorithm uses three pointers: \`low\`, \`mid\`, and \`high\`.
1.  Initialize \`low = 0\`, \`mid = 0\`, \`high = arr.length - 1\`. The goal is to shrink the unsorted section (\`mid\` to \`high\`).
2.  Loop while \`mid <= high\`.
3.  Inspect the element at \`arr[mid]\`:
    - If it's **0**: Swap \`arr[low]\` with \`arr[mid]\`, then increment both \`low\` and \`mid\`.
    - If it's **1**: Do nothing, just increment \`mid\`.
    - If it's **2**: Swap \`arr[mid]\` with \`arr[high]\`, then decrement \`high\` (do *not* increment \`mid\`, as the swapped element at \`mid\` needs to be processed).

### 📚 Key Concepts
- **In-Place Algorithm**: A single-pass, constant-space sorting algorithm.
- **Three-Way Partitioning**: The core idea of partitioning the array into three sections (0s, 1s, and 2s).
`,
  "divide-and-conquer-conceptual": `
### 💡 Problem Breakdown
Divide and Conquer is a major algorithmic paradigm. It involves breaking a problem down into smaller, self-similar subproblems, solving those subproblems recursively, and then combining their solutions to solve the original problem.

### ⚙️ Solution Walkthrough
The three steps are:
1.  **Divide**: Break the problem of size \`n\` into \`k\` subproblems of smaller size.
2.  **Conquer**: Solve the \`k\` subproblems recursively. The base case for the recursion is a subproblem that is small enough to be solved directly.
3.  **Combine**: Combine the solutions of the subproblems into a solution for the original problem.

**Examples**:
-   **Merge Sort**: Divides the array in half, conquers by recursively sorting the halves, combines by merging the sorted halves.
-   **Binary Search**: Divides by checking the middle element, conquers by recursively searching one of the halves. There is no "combine" step.

### 📚 Key Concepts
- **Algorithmic Paradigm**: A general approach or strategy for designing algorithms.
`,
  "dynamic-programming-conceptual": `
### 💡 Problem Breakdown
Dynamic Programming (DP) is an optimization technique for solving complex problems by breaking them down into simpler, overlapping subproblems. It's applicable when a problem has:
1.  **Optimal Substructure**: The optimal solution to the overall problem can be constructed from the optimal solutions of its subproblems.
2.  **Overlapping Subproblems**: The recursive solution involves solving the same subproblems multiple times.

### ⚙️ Solution Walkthrough
There are two main DP approaches:
1.  **Memoization (Top-Down)**: A recursive function is written. A cache (map or array) is used to store the results of subproblems. Before computing, the function checks the cache. If the result is there, it's returned instantly. Otherwise, it's computed, stored in the cache, and then returned.
2.  **Tabulation (Bottom-Up)**: The solution is built iteratively. A table (usually an array or 2D array) is created. The table is filled out starting from the simplest base cases, and each entry is calculated based on previously filled entries.

**Example**: The iterative Fibonacci solution is a bottom-up DP approach.

### 📚 Key Concepts
- **Dynamic Programming**: A powerful technique for optimization.
`,
  "greedy-algorithms-conceptual": `
### 💡 Problem Breakdown
A greedy algorithm is a simple, intuitive algorithmic paradigm that builds up a solution piece by piece, always making the choice that seems best at the moment (the "locally optimal" choice).

### ⚙️ Solution Walkthrough
For some problems, making the locally optimal choice at each step leads to the globally optimal solution.
-   **Example (Works)**: Making change with standard US coins (25, 10, 5, 1). Always taking the largest coin possible will lead to the minimum number of coins.
-   **Example (Fails)**: The 0/1 Knapsack problem. A greedy approach of always taking the item with the highest value-to-weight ratio does not guarantee the optimal solution.

### 📚 Key Concepts
- **Greedy Algorithm**: An algorithm that makes a series of locally optimal choices.
- **Greedy Choice Property**: The property of a problem that ensures a globally optimal solution can be arrived at by making a sequence of locally optimal choices.
`,
  "backtracking-conceptual": `
### 💡 Problem Breakdown
Backtracking is a general algorithmic technique for finding all (or some) solutions to a computational problem, notably constraint satisfaction problems. It incrementally builds candidates for the solutions and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution.

### ⚙️ Solution Walkthrough
It's a refined brute-force search that is often implemented with recursion.
A recursive function \`solve(current_state)\`:
1.  **Base Case**: If \`current_state\` is a valid, complete solution, process it and return.
2.  **Recursive Step**:
    - Iterate through all possible "next moves" from the \`current_state\`.
    - For each valid move:
        - Apply the move to create a \`new_state\`.
        - Make a recursive call: \`solve(new_state)\`.
        - **Backtrack**: Undo the move to return to \`current_state\` so that other paths can be explored.

**Examples**: Sudoku solvers, N-Queens problem, generating permutations.

### 📚 Key Concepts
- **Backtracking**: A recursive technique for exploring a search space by trying and undoing choices.
`,
  "a-star-search-conceptual": `
### 💡 Problem Breakdown
A* (pronounced "A-star") is a popular and efficient pathfinding and graph traversal algorithm. It's known for being an "informed" search algorithm because it uses a heuristic to guide its search.

### ⚙️ Solution Walkthrough
A* works like Dijkstra's algorithm, but its priority queue is sorted by a different value: \`f(n) = g(n) + h(n)\`.
- **\`g(n)\`**: The actual cost (distance) from the start node to the current node \`n\`.
- **\`h(n)\`**: The **heuristic**—an estimated cost from the current node \`n\` to the goal. This must be an "admissible" heuristic, meaning it never overestimates the actual cost.
- **\`f(n)\`**: The estimated total cost of the path through node \`n\`.

By always exploring the node with the lowest \`f(n)\` score, A* intelligently prioritizes paths that seem to be heading in the right direction, making it much faster than Dijkstra's for many pathfinding problems.

### 📚 Key Concepts
- **Informed Search**: A search algorithm that uses problem-specific knowledge (the heuristic) to be more efficient.
- **Heuristic Function**: An educated guess or estimate. The quality of the heuristic is crucial to A*'s performance.
`,
  "bellman-ford-conceptual": `
### 💡 Problem Breakdown
The Bellman-Ford algorithm is a single-source shortest path algorithm that can handle graphs with **negative edge weights**, which is something Dijkstra's algorithm cannot do.

### ⚙️ Solution Walkthrough
1.  **Initialization**: Initialize distances from the source to all other vertices as \`Infinity\`, and the distance to the source itself as 0.
2.  **Relax Edges**: Repeat \`V-1\` times (where V is the number of vertices):
    - For every edge \`(u, v)\` with weight \`w\` in the graph, "relax" the edge: if \`distance[u] + w < distance[v]\`, then update \`distance[v] = distance[u] + w\`.
3.  **Check for Negative Cycles**: Repeat the relaxation process one more time. If any distance is updated during this Vth pass, it means the graph contains a negative-weight cycle that is reachable from the source.

### 📚 Key Concepts
- **Shortest Path Algorithm**: An algorithm for finding the path with the minimum total weight.
- **Negative Weight Cycles**: A cycle in a graph whose edges sum to a negative value. Bellman-Ford can detect these.
`,
  "floyd-warshall-conceptual": `
### 💡 Problem Breakdown
The Floyd-Warshall algorithm is an algorithm for finding the shortest paths between **all pairs** of vertices in a weighted, directed graph (the "all-pairs shortest path" problem). It can handle negative edge weights but not negative cycles.

### ⚙️ Solution Walkthrough
It's a dynamic programming algorithm that uses a V x V matrix to store distances.
1.  **Initialization**: Initialize the distance matrix with the direct edge weights, \`Infinity\` if no direct edge exists, and 0 for the distance from a vertex to itself.
2.  **Main Loop**: Use three nested loops:
    - \`for k from 1 to V\` (the intermediate vertex)
    - \`for i from 1 to V\` (the source vertex)
    - \`for j from 1 to V\` (the destination vertex)
3.  **Update Rule**: Inside the loops, apply the update rule: \`dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])\`. This checks if the path from \`i\` to \`j\` is shorter by going through the intermediate vertex \`k\`.
After the loops complete, the matrix will contain the shortest path distances between all pairs of vertices.

### 📚 Key Concepts
- **All-Pairs Shortest Path**: A different class of shortest path problem from the single-source problems.
- **Dynamic Programming**: The algorithm iteratively builds up the solution by considering all possible intermediate vertices.
`,
  "randomized-algorithms-conceptual": `
### 💡 Problem Breakdown
A randomized algorithm is one that employs a degree of randomness as part of its logic. The behavior of the algorithm can vary from run to run, even with the same input. This can be useful for avoiding worst-case scenarios or for solving problems where a deterministic approach is too complex or slow.

### ⚙️ Solution Walkthrough
**Example: Randomized Quick Sort**
- The worst-case O(n²) performance of Quick Sort occurs when the chosen pivot is consistently the smallest or largest element.
- A **randomized** version of Quick Sort mitigates this by choosing a *random* element as the pivot in each partitioning step.
- This doesn't eliminate the worst-case, but it makes it extremely unlikely to occur in practice, leading to an expected time complexity of O(n log n).

Other examples include Reservoir Sampling and the Miller-Rabin primality test.

### 📚 Key Concepts
- **Randomization**: Using randomness to improve an algorithm's average-case performance or to solve problems that are difficult to solve deterministically.
`,
  "boyer-moore-voting-algorithm": `
### 💡 Problem Breakdown
The majority element in an array is the element that appears more than \`n/2\` times. The task is to find this element efficiently. The Boyer-Moore Voting Algorithm solves this in O(n) time and O(1) space.

### ⚙️ Solution Walkthrough
The algorithm works by maintaining a \`candidate\` and a \`count\`.
1.  Initialize a \`candidate\` variable (e.g., to the first element) and a \`count\` to 0.
2.  Iterate through the array.
3.  If \`count\` is 0, set the \`candidate\` to the current number.
4.  If the current number is the same as the \`candidate\`, increment \`count\`.
5.  If it's different, decrement \`count\`.
6.  The \`candidate\` remaining at the end of the loop will be the majority element. This works because the count of the majority element will always outweigh the combined counts of all other elements, ensuring it is the final candidate.

### 📚 Key Concepts
- **Boyer-Moore Voting Algorithm**: A clever algorithm for finding the majority element.
`,
  "tries-conceptual": `
### 💡 Problem Breakdown
A Trie (pronounced "try"), also known as a prefix tree, is a tree-like data structure that is very efficient for storing and retrieving strings. Each node represents a character, and the path from the root to a node represents a prefix. This makes it ideal for applications like autocomplete.

### ⚙️ Solution Walkthrough
1.  **Structure**: The Trie is made of nodes. Each node has:
    - A \`children\` map (e.g., an object) where keys are characters and values are other Trie nodes.
    - An \`isEndOfWord\` boolean flag.
2.  **Insertion**: To insert a word, you traverse the Trie from the root, character by character. If a character's node doesn't exist in the current node's \`children\`, you create it. When you reach the end of the word, you mark that final node's \`isEndOfWord\` flag as \`true\`.
3.  **Search**: To search for a word, you traverse the Trie. If you can't find a character at any point, the word doesn't exist. If you reach the end of the word, you must check if that final node's \`isEndOfWord\` flag is \`true\`.

### 📚 Key Concepts
- **Trie**: A data structure optimized for string prefix operations.
- **Prefix**: A sequence of characters at the beginning of a string.
`,
  "k-closest-points": `
### 💡 Problem Breakdown
Given a list of points (e.g., \`[[x1, y1], [x2, y2], ...]\`) and an integer K, the task is to find the K points that are closest to the origin (0,0) in Euclidean distance.

### ⚙️ Solution Walkthrough
A straightforward solution involves calculating the distance for each point and sorting.
1.  **Calculate Distances**: For each point \`(x, y)\`, the squared Euclidean distance to the origin is \`x² + y²\`. We can use the squared distance to avoid calculating square roots, as it preserves the order.
2.  **Sort**: Sort the array of points based on their calculated squared distances in ascending order.
3.  **Slice**: Take the first \`K\` elements from the sorted array.

A more optimized solution for very large datasets would use a Max Heap of size K to find the K smallest elements in O(n log k) time.

### 📚 Key Concepts
- **Euclidean Distance**: A measure of the straight-line distance between two points.
- **Sorting**: A fundamental algorithmic technique for ordering data.
`,
  "top-k-frequent-elements": `
### 💡 Problem Breakdown
The task is to find the \`k\` most frequently occurring elements in an array.

### ⚙️ Solution Walkthrough
This is a multi-step problem that combines frequency counting and sorting.
1.  **Frequency Count**: Iterate through the input array and use a hash map (\`Map\` or object) to store the frequency of each number.
2.  **Sort by Frequency**: Convert the map's entries into an array of \`[number, frequency]\` pairs. Sort this array in descending order based on the frequency.
3.  **Get Top K**: Take the first \`k\` elements from the sorted array and extract just the numbers.

For very large datasets, a more optimal solution uses a Min Heap of size \`k\` (or Quickselect) to find the top k elements in O(n log k) or O(n) average time, respectively.

### 📚 Key Concepts
- **Frequency Counter**: A common pattern using a hash map.
- **Sorting**: Used to order the elements by their frequency.
`,
  "lru-cache-algo-conceptual": `
### 💡 Problem Breakdown
LRU stands for "Least Recently Used." An LRU cache is a fixed-size cache that automatically evicts the least recently used item when it needs to make space for a new item. The challenge is to design this data structure with \`get\` and \`put\` operations that run in O(1) average time complexity.

### ⚙️ Solution Walkthrough
The optimal solution requires combining two data structures:
1.  **A Hash Map (like a JavaScript \`Map\`)**: This provides O(1) lookup of items by their key. The map will store the key and a reference (or pointer) to a node in a linked list.
2.  **A Doubly Linked List**: This is used to maintain the order of use. The list will have a "most recently used" end and a "least recently used" end.
-   **\`get(key)\`**: Look up the key in the map. If it exists, get the corresponding node from the linked list, move that node to the "most recently used" end of the list, and return its value.
-   **\`put(key, value)\`**: If the key exists, update its value and move its node to the "most recently used" end. If it's a new key:
    - If the cache is full, remove the item at the "least recently used" end of the list (and also from the map).
    - Create a new node, add it to the "most recently used" end of the list, and add the key and node reference to the map.

### 📚 Key Concepts
- **Doubly Linked List**: Allows for O(1) insertion and deletion of nodes.
- **Hash Map**: Allows for O(1) lookup.
- **Data Structure Combination**: Combining the strengths of two different data structures to meet complex requirements.
`,
  "min-stack-conceptual": `
### 💡 Problem Breakdown
The challenge is to design a Stack data structure that, in addition to the standard \`push\`, \`pop\`, and \`top\` operations, also supports a \`getMin\` operation that returns the minimum element in the stack in **constant time (O(1))**.

### ⚙️ Solution Walkthrough
The most common solution is to use two stacks:
1.  **Main Stack**: A regular stack to store all the elements.
2.  **Min Stack**: A second stack to keep track of the minimums.
-   **\`push(x)\`**: Push \`x\` onto the main stack. Then, compare \`x\` with the value at the top of the min stack. If \`x\` is less than or equal to the current minimum, push \`x\` onto the min stack as well.
-   **\`pop()\`**: Pop the value from the main stack. If this popped value is equal to the value at the top of the min stack, pop from the min stack as well.
-   **\`getMin()\`**: Simply return the value at the top of the min stack.

### 📚 Key Concepts
- **Auxiliary Data Structure**: Using an additional data structure to efficiently track a property of the main data structure.
`,
  "huffman-coding-conceptual": `
### 💡 Problem Breakdown
Huffman coding is a greedy algorithm used for lossless data compression. It works by assigning variable-length codes to input characters, with the lengths of the assigned codes being based on the frequencies of corresponding characters. The most frequent character gets the smallest code.

### ⚙️ Solution Walkthrough
1.  **Frequency Count**: Calculate the frequency of each character in the source data.
2.  **Build Forest**: Create a leaf node for each character and add it to a **priority queue**. The priority is the character's frequency (lowest frequency has highest priority).
3.  **Build Tree**: While there is more than one node in the priority queue:
    - Dequeue the two nodes with the lowest frequencies.
    - Create a new internal node with these two nodes as children. The frequency of this new node is the sum of its children's frequencies.
    - Enqueue this new internal node back into the priority queue.
4.  **Assign Codes**: The final single node in the queue is the root of the Huffman tree. Traverse the tree from the root to each leaf node, assigning 0 for a left turn and 1 for a right turn. The path taken forms the binary code for the character at the leaf.

### 📚 Key Concepts
- **Greedy Algorithm**: At each step, it greedily combines the two least frequent nodes.
- **Priority Queue**: The key data structure for efficiently finding the least frequent nodes.
- **Prefix Codes**: The resulting codes have the property that no code is a prefix of another, which ensures they can be decoded unambiguously.
`,
  "water-jug-problem-conceptual": `
### 💡 Problem Breakdown
This is a classic state-space search puzzle. You have two jugs with different capacities and an infinite water supply. The goal is to measure a specific target amount of water.

### ⚙️ Solution Walkthrough
This problem can be modeled as a graph and solved with a search algorithm like Breadth-First Search (BFS), which is guaranteed to find the shortest sequence of steps.
1.  **State Representation**: A "state" can be represented by a pair of numbers \`(a, b)\`, where \`a\` is the amount of water in the first jug and \`b\` is the amount in the second.
2.  **Graph**: Each state is a node in the graph. An edge exists between two states if you can get from one to the other in a single operation.
3.  **Operations (Edges)**: The possible operations are:
    - Fill a jug completely.
    - Empty a jug completely.
    - Pour water from one jug to another until the source is empty or the destination is full.
4.  **BFS**: Start a BFS from the initial state \`(0, 0)\`. Use a "visited" set to avoid re-visiting states. The first time you reach a state where one of the jugs contains the target amount, you have found a solution.

### 📚 Key Concepts
- **State-Space Search**: A process in which successive states of an instance are considered, with the goal of finding a goal state with a desired property.
- **Breadth-First Search (BFS)**: An ideal algorithm for finding the shortest path in an unweighted graph.
`,
  "manachers-algorithm-conceptual": `
### 💡 Problem Breakdown
Manacher's algorithm is a highly efficient, linear-time (O(n)) algorithm for finding the longest palindromic substring in a string. It's an optimization over the O(n²) "Expand from Center" approach.

### ⚙️ Solution Walkthrough
The algorithm is complex, but the core ideas are:
1.  **Transform String**: The input string is transformed to handle even-length palindromes easily. A special character (e.g., '#') is inserted between each character and at the ends (e.g., "aba" -> "#a#b#a#"). Now, every palindrome is odd-length.
2.  **Palindrome Radii Array**: An array \`P\` is created, where \`P[i]\` stores the radius of the palindrome centered at index \`i\` in the transformed string.
3.  **Reuse Information**: This is the key insight. As the algorithm scans the string, it maintains the \`center\` and \`right\` boundary of the rightmost-reaching palindrome found so far. For a new position \`i\`, if it falls within this boundary, its initial palindrome radius can be at least partially inferred from its "mirror" position on the other side of the \`center\`, avoiding redundant character comparisons.

### 📚 Key Concepts
- **Dynamic Programming**: The algorithm reuses previously computed information (the palindrome radii of mirrored positions) to optimize its calculations.
`,
  "union-find-conceptual": `
### 💡 Problem Breakdown
A Disjoint Set Union (DSU), also known as a Union-Find data structure, is a data structure that tracks a partition of a set into disjoint (non-overlapping) subsets. It provides two main operations with near-constant time complexity on average.

### ⚙️ Solution Walkthrough
It's typically implemented with an array, where \`parent[i]\` stores the parent of element \`i\`.
1.  **\`find(i)\`**: This operation finds the "representative" (or root) of the set that element \`i\` belongs to. It does this by following the parent pointers up to the root (an element whose parent is itself). **Path compression** is an optimization where we make every node on the find path point directly to the root.
2.  **\`union(i, j)\`**: This operation merges the two sets containing elements \`i\` and \`j\`. It first finds the roots of both elements. If they are not already the same, it makes one root the parent of the other. **Union by rank/size** is an optimization to keep the trees flat by always attaching the smaller tree to the root of the larger tree.

### 📚 Key Concepts
- **Disjoint Sets**: A collection of sets with no common elements.
- **Use Cases**: Kruskal's algorithm for MSTs, detecting cycles in graphs.
`,
  "ford-fulkerson-conceptual": `
### 💡 Problem Breakdown
The Ford-Fulkerson method is a greedy algorithm that computes the maximum flow in a flow network. A flow network is a directed graph where each edge has a capacity. The goal is to find the maximum rate at which "flow" (e.g., water or data) can be sent from a source node to a sink node.

### ⚙️ Solution Walkthrough
1.  **Residual Graph**: The algorithm works on a "residual graph," which represents the remaining available capacity on the edges.
2.  **Find Augmenting Path**: Start with zero flow. While there exists an "augmenting path" from the source to the sink in the residual graph:
    - An augmenting path is a simple path with available capacity.
    - Find such a path using a graph traversal like BFS or DFS.
3.  **Augment Flow**: Determine the "bottleneck" capacity of this path (the minimum residual capacity of any edge on the path).
4.  **Update**: Increase the total flow by this bottleneck capacity. Update the residual graph by decreasing the capacity of forward edges and increasing the capacity of backward edges along the path.

The algorithm terminates when no more augmenting paths can be found.

### 📚 Key Concepts
- **Max-Flow Min-Cut Theorem**: The underlying theorem that states the maximum flow in a network is equal to the minimum capacity of a cut that separates the source and sink.
- **Greedy Algorithm**: At each step, it greedily finds any available path to push more flow through.
`,
  "reservoir-sampling-conceptual": `
### 💡 Problem Breakdown
Reservoir sampling is a family of randomized algorithms for choosing a simple random sample of \`k\` items from a list of items of unknown or very large size (\`n\`). The key is that it can be done in a single pass, using memory only for the \`k\` items in the reservoir.

### ⚙️ Solution Walkthrough
The most common algorithm (Algorithm R) works as follows:
1.  **Initialization**: Create a "reservoir" array of size \`k\` and fill it with the first \`k\` items from the input stream.
2.  **Iteration**: For each subsequent item \`i\` (from \`k+1\` to \`n\`):
    - Generate a random integer \`j\` between 0 and \`i\` (inclusive).
    - If \`j\` is less than \`k\`, replace the element at index \`j\` in the reservoir with the current item \`i\`.
3.  After iterating through the entire stream, the reservoir contains a true random sample of \`k\` items.

### 📚 Key Concepts
- **Randomized Algorithm**: An algorithm that uses randomness as part of its logic.
- **Single Pass**: The algorithm processes the data stream only once, which is crucial when the data cannot be stored entirely in memory.
`,
  "b-tree-algo-conceptual": `
### 💡 Problem Breakdown
This is a conceptual problem about the algorithms used in a B-Tree, a self-balancing tree data structure that is optimized for systems that read and write large blocks of data (like databases and filesystems). It keeps data sorted and allows for efficient search, insertion, and deletion.

### ⚙️ Solution Walkthrough
- **Search**: Similar to a Binary Search Tree, but within each node, you may need to do a linear or binary search to find which child pointer to follow next.
- **Insertion**: A new key is always inserted into a leaf node.
    - If the leaf node is not full, the key is added.
    - If the leaf node is **full**, it is **split** into two nodes. The median key is moved up to the parent node. This process may propagate up the tree.
- **Deletion**: Deletion is more complex.
    - If a key is deleted from a node and the node remains at least half-full, the operation is simple.
    - If deleting the key causes the node to **underflow** (become less than half-full), it must either **borrow** a key from an adjacent sibling or **merge** with an adjacent sibling. This may cause the parent to underflow, propagating the process up the tree.

### 📚 Key Concepts
- **Self-Balancing Tree**: The split and merge operations are what keep the B-Tree balanced, ensuring its height remains low and operations remain efficient (O(log n)).
`,
  "aho-corasick-conceptual": `
### 💡 Problem Breakdown
The Aho-Corasick algorithm is a highly efficient string-searching algorithm. Its goal is to find all occurrences of a set of keywords (a dictionary) within an input text in a single pass. It combines the logic of a Trie and a finite automaton.

### ⚙️ Solution Walkthrough
1.  **Build Trie**: Construct a standard Trie from all the keywords in the dictionary.
2.  **Build Failure Links**: This is the key step. For each node in the Trie, a "failure link" is created. This link points to the longest proper suffix of the string represented by the current node that is also a prefix of some keyword. This can be done by a breadth-first traversal of the Trie.
3.  **Searching**: Traverse the input text character by character, moving through the Trie.
    - If the current character matches a child of the current node, move to that child.
    - If there is a mismatch, follow the **failure link** from the current node and try the comparison again. This avoids backtracking in the input text.
    - Whenever you enter a node that is marked as the end of a keyword, you have found a match.

### 📚 Key Concepts
- **Trie**: The base data structure.
- **Finite Automaton**: The Trie with failure links acts as a state machine for matching multiple patterns simultaneously.
`,
  "fft-conceptual": `
### 💡 Problem Breakdown
The Fast Fourier Transform (FFT) is a highly efficient algorithm for computing the Discrete Fourier Transform (DFT) and its inverse. The DFT converts a signal from its original domain (e.g., time) to a representation in the frequency domain. FFT is a cornerstone of digital signal processing and has applications in many other fields.

### ⚙️ Solution Walkthrough
FFT is a **divide-and-conquer** algorithm. The most common version is the Cooley-Tukey algorithm:
1.  **Divide**: It takes a DFT of size N and breaks it down into two smaller DFTs of size N/2. This is done by separating the input signal into its even-indexed and odd-indexed elements.
2.  **Conquer**: It recursively computes the DFT of these two smaller signals. The base case is a DFT of size 1, which is just the element itself.
3.  **Combine**: It combines the results of the two smaller DFTs in O(n) time using the properties of complex roots of unity (often called "twiddle factors") to produce the final DFT of size N.

This reduces the complexity from O(n²) for a naive DFT to a much more efficient **O(n log n)**.

### 📚 Key Concepts
- **Divide and Conquer**: The core algorithmic paradigm.
- **Fourier Transform**: A mathematical transform that decomposes a function into its constituent frequencies.
`,
  "miller-rabin-primality-conceptual": `
### 💡 Problem Breakdown
The Miller-Rabin test is a probabilistic primality test. For very large numbers, deterministic primality tests are too slow. A probabilistic test doesn't prove primality with 100% certainty, but it can determine if a number is "probably prime" to an arbitrarily high degree of confidence.

### ⚙️ Solution Walkthrough
The algorithm is based on properties of prime numbers from Fermat's Little Theorem.
1.  It checks a series of equalities that must hold true for prime numbers.
2.  To test a number \`n\`, it picks a random number \`a\` (the "witness").
3.  It performs a series of calculations based on \`a\` and \`n\`.
4.  If the calculations result in a contradiction of the properties of primes, then \`n\` is **definitely composite**. The witness \`a\` has proven this.
5.  If the calculations do *not* result in a contradiction, then \`n\` is **probably prime**. The witness \`a\` is called a "strong liar."
6.  The process is repeated for several different random witnesses. The more witnesses that fail to prove compositeness, the higher the probability that \`n\` is actually prime.

### 📚 Key Concepts
- **Probabilistic Algorithm**: An algorithm whose output is not guaranteed to be correct, but has a known (and often very low) probability of error.
- **Number Theory**: The mathematical principles that underlie the test.
`,
  "longest-increasing-subsequence": `
### 💡 Problem Breakdown
The task is to find the length of the longest subsequence of a given sequence in which the subsequence's elements are in strictly increasing order. A subsequence is derived from an array by deleting some or no elements without changing the order of the remaining elements.

### ⚙️ Solution Walkthrough
This is a classic dynamic programming problem.
1.  Create a DP array, \`dp\`, of the same size as the input array, and initialize all its values to 1. \`dp[i]\` will store the length of the LIS ending at index \`i\`.
2.  Use two nested loops. The outer loop iterates from \`i = 1\` to the end of the array.
3.  The inner loop iterates from \`j = 0\` to \`i-1\`.
4.  Inside the inner loop, if \`nums[i]\` is greater than \`nums[j]\`, it means we can potentially extend the LIS ending at \`j\`. We update \`dp[i]\` with \`Math.max(dp[i], dp[j] + 1)\`.
5.  Keep track of the overall maximum value in the \`dp\` array. This will be the final answer.

### 📚 Key Concepts
- **Dynamic Programming**: The solution builds upon the optimal solutions to subproblems (the LIS ending at previous indices).
- **Time Complexity**: O(n²) for this straightforward DP approach. A more advanced O(n log n) solution also exists.
`,
  "coin-change": `
### 💡 Problem Breakdown
Given a set of coin denominations and a total amount, the goal is to find the *minimum* number of coins required to make up that amount. If the amount cannot be made up, return -1.

### ⚙️ Solution Walkthrough
This is a classic dynamic programming problem that can be solved with a bottom-up approach.
1.  Create a DP array, \`dp\`, of size \`amount + 1\`, and initialize all its values to \`Infinity\` (or a large number).
2.  Set the base case: \`dp[0] = 0\` (it takes 0 coins to make an amount of 0).
3.  Loop from \`i = 1\` up to the \`amount\`.
4.  For each amount \`i\`, loop through the available \`coins\`.
5.  If a \`coin\` is less than or equal to \`i\`, we can potentially use it. The number of coins would be \`1 + dp[i - coin]\`. We update \`dp[i]\` with the minimum value found so far: \`dp[i] = Math.min(dp[i], 1 + dp[i - coin])\`.
6.  The final answer is \`dp[amount]\`. If it's still \`Infinity\`, the amount couldn't be made.

### 📚 Key Concepts
- **Dynamic Programming**: The solution for amount \`i\` is built by looking at the optimal solutions for smaller amounts (\`i - coin\`).
`,
  "word-break-algo": `
### 💡 Problem Breakdown
This is a classic dynamic programming problem. Given a string and a dictionary of words, determine if the string can be segmented into a sequence of one or more dictionary words.

### ⚙️ Solution Walkthrough
Dynamic programming is used to solve this efficiently.
1.  Create a boolean DP array, \`dp\`, of size \`s.length + 1\`. \`dp[i]\` will be \`true\` if the substring \`s.substring(0, i)\` can be broken down.
2.  Initialize \`dp[0] = true\` (an empty string can always be formed).
3.  Use nested loops. The outer loop iterates from \`i = 1\` to \`s.length\`. The inner loop iterates from \`j = 0\` to \`i\`.
4.  Inside the inner loop, check two conditions:
    - Is \`dp[j]\` true? (Meaning the substring up to \`j\` is valid).
    - Is the substring from \`j\` to \`i\` (\`s.substring(j, i)\`) present in the word dictionary?
5.  If both are true, it means we can form the substring up to \`i\`. Set \`dp[i] = true\` and \`break\` the inner loop.
6.  The final answer is the value of \`dp[s.length]\`.

### 📚 Key Concepts
- **Dynamic Programming**: The solution builds upon the results of smaller subproblems (can we form the substring up to \`j\`?) to solve the larger problem (can we form the substring up to \`i\`?).
`,
  "rotate-array": `
### 💡 Problem Breakdown
The task is to rotate the elements of an array to the right by \`k\` steps. For example, rotating \`[1,2,3,4,5]\` right by 2 results in \`[4,5,1,2,3]\`. The modification should ideally be in-place.

### ⚙️ Solution Walkthrough
A clever in-place solution uses three reversals.
1.  Handle the case where \`k\` is larger than the array length by taking \`k = k % arr.length\`.
2.  **Reverse the entire array**: \`[5,4,3,2,1]\`.
3.  **Reverse the first \`k\` elements**: \`[4,5,3,2,1]\`.
4.  **Reverse the remaining \`n-k\` elements**: \`[4,5,1,2,3]\`.

This sequence of reversals results in the correct right rotation.
\`\`\`javascript
function reverse(arr, start, end) { /* ... */ }
function rotate(nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}
\`\`\`
### 📚 Key Concepts
- **In-Place Algorithm**: A solution that uses constant extra space.
- **Array Reversal**: A simple operation that can be composed to solve a more complex problem.
`,
  "find-the-duplicate-number-algo": `
### 💡 Problem Breakdown
You are given an array of \`n+1\` integers where each number is in the range \`[1, n]\`. This setup guarantees that at least one number is duplicated. The task is to find that single duplicate number without modifying the array and using only constant extra space.

### ⚙️ Solution Walkthrough
This problem can be cleverly mapped to finding a cycle in a linked list. The Floyd's Tortoise and Hare (cycle detection) algorithm provides a solution that meets the constraints.
1.  Treat the array values as pointers. The value at \`nums[i]\` points to the next index to visit.
2.  **Cycle Detection**: Use two pointers, \`slow\` and \`fast\`. \`slow\` moves one step at a time (\`slow = nums[slow]\`), and \`fast\` moves two steps (\`fast = nums[nums[fast]]\`). They are guaranteed to meet inside the cycle.
3.  **Find Cycle Entrance**: Once they meet, reset one pointer (e.g., \`slow\`) to the start of the array (index 0). Now, move both \`slow\` and \`fast\` one step at a time. The point where they meet again is the entrance to the cycle, which corresponds to the duplicate number.

### 📚 Key Concepts
- **Floyd's Cycle-Finding Algorithm**: A pointer algorithm for finding a cycle in a sequence.
- **Problem Transformation**: The ability to re-frame a problem (finding a duplicate) as another, well-known problem (finding a cycle).
`,
  "kth-largest-element-in-array": `
### 💡 Problem Breakdown
The task is to find the kth largest element in an unsorted array. This is not the kth distinct element, but the element that would be at the kth position if the array were sorted in descending order.

### ⚙️ Solution Walkthrough
1.  **Simple Solution (Sorting)**: The most straightforward approach is to sort the array in descending order and then pick the element at index \`k-1\`. This has a time complexity of O(n log n).
    \`\`\`javascript
    nums.sort((a, b) => b - a);
    return nums[k - 1];
    \`\`\`
2.  **Optimized Solution (Quickselect)**: A more optimal approach is to use a variation of the Quick Sort algorithm called Quickselect. This algorithm has an average time complexity of O(n). It partitions the array around a pivot and recursively searches only in the partition that is guaranteed to contain the kth element.

### 📚 Key Concepts
- **Sorting**: The simplest approach relies on sorting.
- **Quickselect**: An efficient selection algorithm that is related to Quick Sort.
`,
  "valid-sudoku": `
### 💡 Problem Breakdown
The task is to determine if a 9x9 Sudoku board is valid according to the rules, but only for the cells that are already filled. A board is valid if:
1.  Each row contains the digits 1-9 without repetition.
2.  Each column contains the digits 1-9 without repetition.
3.  Each of the nine 3x3 sub-boxes contains the digits 1-9 without repetition.

### ⚙️ Solution Walkthrough
The solution involves a single pass through the board, using hash sets to keep track of the numbers seen in each row, column, and 3x3 box.
1.  Create three arrays of Sets: \`rows\`, \`cols\`, and \`boxes\`, each of size 9.
2.  Iterate through the board with nested loops from \`r=0\` to 8 and \`c=0\` to 8.
3.  For each cell, if it contains a number:
    - Check if that number is already in the \`Set\` for the current row, column, or box. If it is, the board is invalid, so return \`false\`.
    - Calculate the box index: \`boxIndex = Math.floor(r/3) * 3 + Math.floor(c/3)\`.
    - Add the number to the sets for \`rows[r]\`, \`cols[c]\`, and \`boxes[boxIndex]\`.
4.  If the loops complete without finding any conflicts, the board is valid.

### 📚 Key Concepts
- **Hash Set**: A \`Set\` provides O(1) average time complexity for insertion and lookup, making it perfect for checking for duplicates.
`,
  "search-in-rotated-sorted-array": `
### 💡 Problem Breakdown
You are given a sorted array of unique integers that has been rotated at some unknown pivot point. The task is to search for a target value in this array. The challenge is to do this in O(log n) time.

### ⚙️ Solution Walkthrough
A standard binary search won't work directly because the array is not fully sorted. However, a modified binary search can solve it. The key insight is that when you split the array at the middle, at least one of the two halves will always be perfectly sorted.
1.  Use a binary search with \`left\` and \`right\` pointers.
2.  In each step, find the \`mid\` point.
3.  Check if the left half (\`nums[left]\` to \`nums[mid]\`) is sorted.
    - If it is, check if the \`target\` lies within the range of this sorted half.
    - If yes, search in the left half (\`right = mid - 1\`).
    - If no, search in the right, unsorted half (\`left = mid + 1\`).
4.  If the left half is not sorted, it means the right half must be.
    - Perform the same checks for the right half and adjust the pointers accordingly.

### 📚 Key Concepts
- **Binary Search**: The core algorithm, modified to handle the rotated nature of the array.
- **Invariant**: The property that one half of the array is always sorted is the invariant that allows the algorithm to work.
`,
  "number-of-islands-algo": `
### 💡 Problem Breakdown
This is a classic graph traversal problem presented as a grid. An "island" is a group of connected '1's (land). The goal is to count how many distinct islands exist in the grid.

### ⚙️ Solution Walkthrough
The approach is to iterate through the entire grid and perform a graph traversal (like DFS or BFS) whenever we encounter a piece of land that we haven't visited yet.
1.  Initialize an \`islandCount\` to 0.
2.  Loop through every cell (\`row\`, \`col\`) of the grid.
3.  If you find a cell that is '1' (land):
    - Increment \`islandCount\` (we've found a new island).
    - Start a traversal (DFS is common and can be implemented with a simple recursive helper function) from this cell.
    - The traversal should visit all connected '1's that are part of this same island and "sink" them by changing their value to '0' (or a visited marker).
4.  By the end of the main loop, the \`islandCount\` will be correct because the sinking process ensures that each island is only counted once.

### 📚 Key Concepts
- **Graph Traversal (DFS/BFS)**: The core algorithm used to find and mark all parts of an island.
- **Implicit Graph**: The grid can be thought of as a graph where each cell is a node and adjacent land cells have edges between them.
`,
  "kruskals-algorithm-conceptual": `
### 💡 Problem Breakdown
Kruskal's algorithm is a greedy algorithm to find a Minimum Spanning Tree (MST) for a connected, weighted, undirected graph. An MST is a subset of the edges that connects all the vertices together, without any cycles and with the minimum possible total edge weight.

### ⚙️ Solution Walkthrough
1.  **Sort Edges**: Create a list of all edges in the graph and sort them by weight in ascending order.
2.  **Initialize**: Start with an empty MST and a **Disjoint Set Union (DSU)** data structure containing all the vertices, each in its own set.
3.  **Iterate**: Loop through the sorted edges. For each edge \`(u, v)\`:
    - Use the DSU's \`find\` operation to check if vertices \`u\` and \`v\` are already in the same set (i.e., connected).
    - If they are **not** in the same set, it means adding this edge will not form a cycle. Add the edge to the MST and use the DSU's \`union\` operation to merge the sets of \`u\` and \`v\`.
4.  The algorithm stops when the MST has \`V-1\` edges.

### 📚 Key Concepts
- **Greedy Algorithm**: It makes the locally optimal choice by considering the cheapest edges first.
- **Disjoint Set Union (DSU)**: The key data structure for efficiently detecting cycles.
`,
};
