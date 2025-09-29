export const explanations: Record<string, string> = {
  // problem explanation--> 01
  'recursion-factorial': `
<h3>💡 Problem Breakdown</h3>
<p>The factorial of a number 'n' (n!) is the product of all integers from 1 to n. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120. The key insight for recursion is that the factorial of a number is that number multiplied by the factorial of the number just below it. So, 5! = 5 * 4!.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive function needs two main parts:</p>
<ol>
  <li><b>Base Case:</b> The condition under which the recursion stops. For factorial, if n is 0, the factorial is 1. This prevents an infinite loop.</li>
  <li><b>Recursive Step:</b> The part where the function calls itself with a modified input, bringing it closer to the base case. Here, we return <code>n * factorial(n - 1)</code>. The function calls itself with a smaller number (n-1) until it hits the base case (n=0).</li>
</ol>
<p>The call stack would look like this for <code>factorial(3)</code>:</p>
<ul>
    <li><code>factorial(3)</code> returns 3 * <code>factorial(2)</code></li>
    <li><code>factorial(2)</code> returns 2 * <code>factorial(1)</code></li>
    <li><code>factorial(1)</code> returns 1 * <code>factorial(0)</code></li>
    <li><code>factorial(0)</code> returns 1 (base case)</li>
</ul>
<p>Then the results are multiplied back up the chain: 1 * 1 = 1, then 2 * 1 = 2, then 3 * 2 = 6.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Call Stack</li>
</ul>
`,
  // problem explanation--> 02
  'recursion-fibonacci': `
<h3>💡 Problem Breakdown</h3>
<p>The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, ... The task is to find the number at a specific index 'n'.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive definition of the Fibonacci sequence is F(n) = F(n-1) + F(n-2). This translates directly into a recursive function.</p>
<ol>
  <li><b>Base Cases:</b> We need two base cases to start the sequence. If n is 0, we return 0. If n is 1, we return 1.</li>
  <li><b>Recursive Step:</b> For any other n, we return the sum of the function called with n-1 and n-2: <code>fibonacci(n - 1) + fibonacci(n - 2)</code>.</li>
</ol>
<p><b>Note:</b> This simple recursive solution is elegant but very inefficient for larger 'n' due to repeated calculations of the same Fibonacci numbers. This problem is a classic introduction to memoization, an optimization technique often used with recursion.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Multiple Base Cases</li>
  <li>Recursive Step</li>
  <li>Tree Recursion (function calls itself multiple times)</li>
</ul>
`,
  // problem explanation--> 03
  'recursion-sum-array': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the sum of all elements in an array. The recursive approach is to think about how to break the problem down into a smaller version of itself. The sum of an array is the first element plus the sum of the rest of the array.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the array is empty, its sum is 0. This is our stopping condition.</li>
  <li><b>Recursive Step:</b> If the array is not empty, we take the first element (<code>arr[0]</code>) and add it to the result of calling the sum function on the rest of the array (<code>arr.slice(1)</code>).</li>
</ol>
<p>For <code>sum([1, 2, 3])</code>:</p>
<ul>
    <li><code>sum([1, 2, 3])</code> returns 1 + <code>sum([2, 3])</code></li>
    <li><code>sum([2, 3])</code> returns 2 + <code>sum([3])</code></li>
    <li><code>sum([3])</code> returns 3 + <code>sum([])</code></li>
    <li><code>sum([])</code> returns 0 (base case)</li>
</ul>
<p>The results are summed up the chain: 3 + 0 = 3, then 2 + 3 = 5, then 1 + 5 = 6.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Using <code>.slice()</code> to reduce the problem size</li>
</ul>
`,
  // problem explanation--> 04
  'recursion-power-function': `
<h3>💡 Problem Breakdown</h3>
<p>We want to calculate <code>base^exponent</code>. The recursive idea is that <code>base^exponent</code> is equal to <code>base * base^(exponent - 1)</code>. For example, 2^5 = 2 * 2^4.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> Any number raised to the power of 0 is 1. So, if the exponent is 0, we return 1.</li>
  <li><b>Recursive Step:</b> For any other exponent, we return the base multiplied by the result of the function called with the same base and an exponent of one less: <code>base * power(base, exponent - 1)</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
</ul>
`,
  // problem explanation--> 05
  'recursion-string-reversal': `
<h3>💡 Problem Breakdown</h3>
<p>To reverse a string like "hello", we can think of it recursively. The reverse of "hello" is the reverse of "ello" plus the first character, "h".</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> The reverse of an empty string is just an empty string. If the input string's length is 0, we return "".</li>
  <li><b>Recursive Step:</b> We call the reverse function on the substring starting from the second character (<code>str.substring(1)</code>). When that returns, we append the first character (<code>str.charAt(0)</code>) to the end of the result.</li>
</ol>
<p>For <code>reverse("abc")</code>:</p>
<ul>
    <li><code>reverse("abc")</code> calls <code>reverse("bc")</code> + "a"</li>
    <li><code>reverse("bc")</code> calls <code>reverse("c")</code> + "b"</li>
    <li><code>reverse("c")</code> calls <code>reverse("")</code> + "c" -> returns "c"</li>
    <li>The results are combined: "c" + "b" -> "cb", then "cb" + "a" -> "cba".</li>
</ul>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>String manipulation (<code>substring</code>, <code>charAt</code>)</li>
</ul>
`,
  // problem explanation--> 06
  'recursion-countdown': `
<h3>💡 Problem Breakdown</h3>
<p>The task is to generate an array of numbers from n down to 1. Recursively, the countdown from n is n followed by the countdown from n-1.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If n is less than 1, the countdown is complete, so we return an empty array.</li>
  <li><b>Recursive Step:</b> We call the countdown function with <code>n - 1</code>. This gives us the array for the rest of the countdown (e.g., for n=5, it gives [4, 3, 2, 1]). We then use <code>.unshift(n)</code> to add the current number 'n' to the beginning of that array and return it.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Array manipulation (<code>unshift</code>)</li>
</ul>
`,
  // problem explanation--> 07
  'recursion-range-of-numbers': `
<h3>💡 Problem Breakdown</h3>
<p>We need to generate an array of numbers from a start number to an end number. A recursive way to think about this is that the range from start to end is the range from start to (end-1), with the end number then added to it.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the start number is greater than the end number, the range is invalid or empty. We return an empty array.</li>
  <li><b>Recursive Step:</b> We call the range function with the same start number but with <code>endNum - 1</code>. This gives us the array for the preceding part of the range. We then <code>.push(endNum)</code> onto this array and return it.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Array manipulation (<code>push</code>)</li>
</ul>
`,
  // problem explanation--> 08
  'recursion-greatest-common-divisor': `
<h3>💡 Problem Breakdown</h3>
<p>The Greatest Common Divisor (GCD) is the largest positive integer that divides two integers without a remainder. The Euclidean algorithm is an efficient method for computing the GCD. It's based on the principle that the GCD of two numbers does not change if the larger number is replaced by its remainder when divided by the smaller number.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive formula for the Euclidean algorithm is: <code>gcd(a, b)</code> is equivalent to <code>gcd(b, a % b)</code>.</p>
<ol>
  <li><b>Base Case:</b> If 'b' is 0, then the GCD is 'a'. This is our stopping condition.</li>
  <li><b>Recursive Step:</b> We call the gcd function again, but with the arguments swapped: 'b' becomes the new 'a', and the remainder of 'a' divided by 'b' (<code>a % b</code>) becomes the new 'b'. The recursion continues until the second number becomes 0.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Euclidean Algorithm</li>
</ul>
`,
  // problem explanation--> 09
  'recursion-is-palindrome': `
<h3>💡 Problem Breakdown</h3>
<p>A palindrome is a word that reads the same forwards and backwards. To check this recursively, we can observe that a string is a palindrome if its first and last characters are the same, AND the substring between them is also a palindrome.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the string has 0 or 1 characters, it's considered a palindrome. We return <code>true</code>.</li>
  <li><b>Check Step:</b> We compare the first character (<code>str[0]</code>) with the last character (<code>str[str.length - 1]</code>). If they are not the same, we know it's not a palindrome and can immediately return <code>false</code>.</li>
  <li><b>Recursive Step:</b> If the first and last characters match, we then call the function again on the substring inside them (<code>str.slice(1, -1)</code>) to check if the rest of the string is also a palindrome.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>String slicing</li>
</ul>
`,
  // problem explanation--> 10
  'recursion-count-occurrences': `
<h3>💡 Problem Breakdown</h3>
<p>We need to count how many times a target value appears in an array. The recursive approach is to check the first element of the array, and then add that result (either 1 or 0) to the count of occurrences in the rest of the array.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the array is empty, there are no occurrences, so we return 0.</li>
  <li><b>Recursive Step:</b> We check if the first element (<code>arr[0]</code>) is equal to the target. We create a partial count (1 if it matches, 0 if it doesn't). Then, we return this partial count plus the result of calling the function on the rest of the array (<code>arr.slice(1)</code>).</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
</ul>
`,
  // problem explanation--> 11
  'recursion-sum-of-digits': `
<h3>💡 Problem Breakdown</h3>
<p>The goal is to sum the digits of a number (e.g., 123 -> 1+2+3=6). The recursive insight is that the sum of digits of a number 'n' is its last digit (n % 10) plus the sum of digits of the rest of the number (the number without its last digit, which is Math.floor(n / 10)).</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the number 'n' is a single digit (less than 10), the sum is just the number itself.</li>
  <li><b>Recursive Step:</b> If 'n' is larger than 9, we calculate the last digit using the modulo operator (<code>n % 10</code>). We get the rest of the number by integer division (<code>Math.floor(n / 10)</code>). We return the sum of the last digit and the recursive call on the rest of the number.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Modulo and Integer Division</li>
</ul>
`,
  // problem explanation--> 12
  'recursion-is-even': `
<h3>💡 Problem Breakdown</h3>
<p>This problem is a fun way to think about recursion. The properties of even and odd numbers are mutually dependent. A number N is even if N-1 is odd. A number N is odd if N-1 is even. We can simplify this: N is even if N-2 is also even.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Cases:</b> We need two base cases to terminate the recursion. The smallest non-negative even number is 0, which is even. The smallest positive odd number is 1, which is odd. So, if n=0, return true. If n=1, return false.</li>
  <li><b>Recursive Step:</b> For any other number n, its evenness is the same as the evenness of <code>n-2</code>. So we return the result of <code>isEven(n - 2)</code>. The function handles positive integers, so we take the absolute value first.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Mutual Recursion (conceptual)</li>
  <li>Multiple Base Cases</li>
  <li>Recursive Step</li>
</ul>
`,
  // problem explanation--> 13
  'recursion-product-of-array': `
<h3>💡 Problem Breakdown</h3>
<p>Similar to summing an array, we want to find the product of all elements. The recursive structure is that the product of an array is its first element multiplied by the product of the rest of the array.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the array is empty, the product should be 1 (the multiplicative identity). This ensures that multiplying by this result doesn't change the final product. Returning 0 would make the entire product 0.</li>
  <li><b>Recursive Step:</b> If the array is not empty, we return the first element (<code>arr[0]</code>) multiplied by the result of calling the function on the rest of the array (<code>arr.slice(1)</code>).</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Multiplicative Identity</li>
</ul>
`,
  // problem explanation--> 14
  'recursion-decimal-to-binary': `
<h3>💡 Problem Breakdown</h3>
<p>To convert a decimal number to binary, we can repeatedly divide the number by 2 and record the remainder. The binary representation is the sequence of these remainders read in reverse order. For example, 13 in binary: 13/2 = 6 rem 1, 6/2 = 3 rem 0, 3/2 = 1 rem 1, 1/2 = 0 rem 1. Reading remainders bottom-up gives 1101.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursion can build the string in the correct order as the call stack unwinds.</p>
<ol>
  <li><b>Base Case:</b> If the number is 0 or 1, its binary representation is simply "0" or "1". We can handle n < 2.</li>
  <li><b>Recursive Step:</b> We make the recursive call with the number integer-divided by 2 (<code>Math.floor(n / 2)</code>). This gets the leading part of the binary string. We then append the remainder of the current number divided by 2 (<code>n % 2</code>) to that result. The string concatenation happens after the recursive call returns, effectively building the result in the correct order.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Integer division and modulo arithmetic</li>
</ul>
`,
  // problem explanation--> 15
  'recursion-replicate-element': `
<h3>💡 Problem Breakdown</h3>
<p>The goal is to create an array where a specific element is repeated a certain number of times. For example, replicating 5 for 3 times gives [5, 5, 5]. The recursive approach is to note that replicating an element 'count' times is the same as creating an array with that element, and then adding the result of replicating it 'count - 1' times.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the count is 0 or less, we need no more elements. We return an empty array.</li>
  <li><b>Recursive Step:</b> If the count is greater than 0, we construct a new array. The first item is our element. The rest of the items (<code>...</code>) come from the result of the recursive call with <code>count - 1</code>. This builds the array from the front.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Array Spread Syntax</li>
</ul>
`,
  // problem explanation--> 16
  'recursion-binary-search': `
<h3>💡 Problem Breakdown</h3>
<p>Binary search is a highly efficient search algorithm for **sorted** arrays. It works by repeatedly dividing the search interval in half. This "divide and conquer" strategy is a natural fit for recursion.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function needs to keep track of the current search boundaries (left and right).</p>
<ol>
  <li><b>Base Case:</b> If the left pointer crosses the right pointer (<code>left > right</code>), it means the element is not in the array. We return -1.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Find the middle index of the current search interval.</li>
      <li>If the middle element is our target, we've found it and return its index.</li>
      <li>If the target is smaller than the middle element, we know it must be in the left half. We recursively call the search function on the left subarray by updating the right boundary: <code>binarySearch(arr, target, left, mid - 1)</code>.</li>
      <li>If the target is larger, we recursively call the search function on the right subarray by updating the left boundary: <code>binarySearch(arr, target, mid + 1, right)</code>.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Divide and Conquer</li>
  <li>Base Case</li>
  <li>Recursive Step on a smaller subarray</li>
</ul>
`,
  // problem explanation--> 17
  'recursion-merge-sort': `
<h3>💡 Problem Breakdown</h3>
<p>Merge Sort is a classic sorting algorithm that perfectly exemplifies the "divide and conquer" paradigm. The core idea is:
<ol>
    <li><b>Divide:</b> Split the array into two halves.</li>
    <li><b>Conquer:</b> Recursively sort each half.</li>
    <li><b>Combine:</b> Merge the two sorted halves back into one sorted array.</li>
</ol>
</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If an array has 0 or 1 elements, it is already sorted by definition. The recursion stops here.</li>
  <li><b>Recursive Step (Divide & Conquer):</b> If the array has more than one element, find the middle point. Recursively call <code>mergeSort</code> on the left half and the right half.</li>
  <li><b>Combine (Merge):</b> This is the key step. Write a helper function that takes two sorted arrays. It iterates through both, picking the smaller element at each step to build a new, single sorted array.</li>
</ol>
<p>The recursion continues until all subarrays have only one element. Then, the merging process combines them back together in sorted order at each level of the call stack.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Divide and Conquer</li>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Merge Operation</li>
</ul>
`,
  // problem explanation--> 18
  'recursion-tree-sum': `
<h3>💡 Problem Breakdown</h3>
<p>A binary tree is an inherently recursive data structure. The sum of all nodes in a tree is the value of the root node, plus the sum of all nodes in its left subtree, plus the sum of all nodes in its right subtree.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the current node is null (representing an empty tree or the child of a leaf node), its sum is 0. This stops the recursion.</li>
  <li><b>Recursive Step:</b> If the node is not null, the total sum is <code>node.value</code> plus the result of calling <code>treeSum</code> on its left child (<code>node.left</code>) and its right child (<code>node.right</code>).</li>
</ol>
<p>The function effectively performs a traversal of the tree, accumulating the values at each node.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal</li>
  <li>Base Case (null node)</li>
  <li>Recursive Step (processing children)</li>
</ul>
`,
  // problem explanation--> 19
  'recursion-tree-depth': `
<h3>💡 Problem Breakdown</h3>
<p>The maximum depth (or height) of a binary tree is the length of the longest path from the root to a leaf. This can be defined recursively: the depth of a tree is 1 (for the current node) plus the maximum of the depths of its left and right subtrees.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the current node is null, it has a depth of 0.</li>
  <li><b>Recursive Step:</b> If the node is not null, we recursively call the function on the left child to find the depth of the left subtree (<code>leftDepth</code>) and on the right child for the right subtree (<code>rightDepth</code>).</li>
  <li><b>Combine:</b> We take the maximum of <code>leftDepth</code> and <code>rightDepth</code> and add 1 (for the current node) to get the depth of the tree rooted at the current node.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal (Post-order)</li>
  <li>Base Case (null node)</li>
  <li>Combining results from subproblems</li>
</ul>
`,
  // problem explanation--> 20
  'recursion-string-permutations': `
<h3>💡 Problem Breakdown</h3>
<p>A permutation is a rearrangement of the letters of a string. For "abc", the permutations are "abc", "acb", "bac", "bca", "cab", "cba". The recursive idea is to pick each character as the first character, and then find all permutations of the remaining characters.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>We use a recursive helper function, often called a backtracking function.</p>
<ol>
  <li><b>Base Case:</b> If the "remaining" string is empty, it means we have used all characters to form a full permutation. We add the "prefix" we've built to our results.</li>
  <li><b>Recursive Step:</b> We iterate through each character in the "remaining" string. For each character:
    <ul>
      <li>We form a new prefix by adding the chosen character.</li>
      <li>We form a new remaining string by removing the chosen character.</li>
      <li>We make a recursive call with the new prefix and new remaining string.</li>
    </ul>
  </li>
</ol>
<p>This explores every possible ordering of the characters.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>State-space Search</li>
  <li>Base Case</li>
  <li>Recursive Step (Looping and Recursing)</li>
</ul>
`,
  // problem explanation--> 21
  'recursion-subsets-of-a-set': `
<h3>💡 Problem Breakdown</h3>
<p>The power set of a set is the set of all its possible subsets, including the empty set and the set itself. For a set {1, 2, 3}, the power set is {{}, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}. A recursive way to think about this is: the power set of {1, 2, 3} consists of all the subsets of {2, 3}, plus all of those same subsets with {1} added to them.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the input set (array) is empty, its power set contains only one subset: the empty set itself. So we return <code>[[]]</code>.</li>
  <li><b>Recursive Step:</b> We take the first element out. We then recursively find all subsets of the *rest* of the elements. This gives us one half of our final answer.</li>
  <li><b>Combine:</b> We then create the other half by taking each subset from the recursive call and adding the first element to it. Finally, we combine the two halves.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Set Theory</li>
  <li>Combining Results</li>
</ul>
`,
  // problem explanation--> 22
  'recursion-climbing-stairs': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic dynamic programming problem that has a very clear recursive structure. To get to the Nth step, you must have come from either the (N-1)th step or the (N-2)th step. Therefore, the total number of ways to reach step N is the sum of the ways to reach step N-1 and the ways to reach step N-2.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>This structure is identical to the Fibonacci sequence.</p>
<ol>
  <li><b>Base Cases:</b> If n is 0, there is one way (do nothing). If n is negative, it's an impossible path, so there are 0 ways. We can simplify this: if n is 0, return 1. if n is less than 0, return 0.</li>
  <li><b>Recursive Step:</b> For any other n, we return the sum of the ways to get to the previous two steps: <code>climbStairs(n-1) + climbStairs(n-2)</code>.</li>
</ol>
<p>Like the standard Fibonacci problem, this is inefficient for large 'n' and is a prime candidate for memoization.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Relation (Fibonacci-like)</li>
  <li>Base Cases</li>
  <li>Dynamic Programming</li>
</ul>
`,
  // problem explanation--> 23
  'recursion-flatten-array': `
<h3>💡 Problem Breakdown</h3>
<p>The goal is to take an array that contains other arrays as elements, possibly at multiple levels, and produce a single, one-dimensional array with all the elements. The recursive approach involves checking each element: if it's not an array, we keep it; if it is an array, we recursively flatten it.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> The base case is implicitly handled. The recursion stops when we encounter a non-array element.</li>
  <li><b>Recursive Step:</b> We iterate through the input array. For each element:
    <ul>
      <li>If the element is an array (checked with <code>Array.isArray()</code>), we make a recursive call to flatten that sub-array and concatenate its result to our main result array.</li>
      <li>If the element is not an array, we simply push it onto our result array.</li>
    </ul>
  </li>
</ol>
<p>This process continues until all nested arrays have been expanded.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Type Checking (<code>Array.isArray</code>)</li>
  <li>Iteration and Recursion</li>
  <li>Array Concatenation</li>
</ul>
`,
  // problem explanation--> 24
  'recursion-pascal-triangle': `
<h3>💡 Problem Breakdown</h3>
<p>Pascal's Triangle is a triangular array of numbers where each number is the sum of the two numbers directly above it. The edges of the triangle are all 1s.
<br>Row 0: [1]
<br>Row 1: [1, 1]
<br>Row 2: [1, 2, 1]
<br>Row 3: [1, 3, 3, 1]
<br>The recursive definition is that any row can be calculated from the previous row.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the requested row is 0, we return <code>[1]</code>.</li>
  <li><b>Recursive Step:</b> To get row 'n', we first recursively ask for row 'n-1'. Once we have the previous row, we can construct the current row. It always starts with a 1. Then, for each pair of adjacent elements in the previous row, we sum them and add it to our current row. Finally, it always ends with a 1.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Relation</li>
  <li>Building a result from a recursive call's return value</li>
</ul>
`,
  // problem explanation--> 25
  'recursion-tree-contains-value': `
<h3>💡 Problem Breakdown</h3>
<p>To find if a value exists in a binary tree, we can use a recursive search. We check the current node's value. If it's not a match, the value could still be in the left subtree OR the right subtree.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the current node is null, we've reached the end of a branch without finding the value, so we return <code>false</code>.</li>
  <li><b>Check Step:</b> We check if the current node's value is the one we're looking for. If it is, we've found it and can return <code>true</code>.</li>
  <li><b>Recursive Step:</b> If it's not a match, we recursively call the function on the left child. If that returns true, we're done. If not, we then recursively call the function on the right child. The final result is <code>treeContains(node.left, value) || treeContains(node.right, value)</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal (Pre-order search)</li>
  <li>Base Case (null node)</li>
  <li>Logical OR (||) for combining boolean results</li>
</ul>
`,
  // problem explanation--> 26
  'recursion-n-queens': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic and challenging computer science problem that demonstrates the power of backtracking. The goal is to place N queens on an N×N board so that none can attack each other. This means no two queens can be on the same row, column, or diagonal.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The core idea is to place queens one row at a time.</p>
<ol>
  <li><b>Base Case:</b> If we have successfully placed a queen in every row (i.e., our current row index equals N), we have found a valid solution. We format the current board state and add it to our list of solutions.</li>
  <li><b>Recursive Step (Backtracking):</b>
    <ul>
      <li>We are trying to place a queen in the current <code>row</code>.</li>
      <li>We iterate through every <code>column</code> in that row.</li>
      <li>For each column, we check if it's "safe" to place a queen there (i.e., it's not attacked by any queens in previous rows).</li>
      <li>If it's safe, we "make a choice": place a queen at <code>(row, col)</code>.</li>
      <li>Then we "explore": make a recursive call to solve for the next row (<code>row + 1</code>).</li>
      <li>After the recursive call returns, we "unmake the choice" (or "backtrack"): we remove the queen from <code>(row, col)</code>. This allows us to explore placing the queen in the next column of the current row.</li>
    </ul>
  </li>
</ol>
<p>The "isSafe" function is crucial, checking the column and both diagonals upwards from the current position.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>State-space Search</li>
  <li>Constraints (the rules of chess)</li>
  <li>Choose, Explore, Unchoose pattern</li>
</ul>
`,
  // problem explanation--> 27
  'recursion-sudoku-solver': `
<h3>💡 Problem Breakdown</h3>
<p>This is another classic backtracking problem. We need to fill a 9x9 grid following Sudoku rules: each row, column, and 3x3 subgrid must contain the digits 1-9 without repetition. The recursive strategy is to find an empty cell and try placing each valid number (1-9) in it one by one.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Find an empty cell:</b> Scan the board to find the next cell with a 0. If no empty cells are found, the board is solved.</li>
  <li><b>Base Case:</b> If the board is solved (no empty cells), we have found a solution. Return <code>true</code>.</li>
  <li><b>Recursive Step (Backtracking):</b>
    <ul>
      <li>For the found empty cell at (row, col), iterate through numbers 1 to 9.</li>
      <li>For each number, check if it's "safe" to place it at (row, col) according to Sudoku rules.</li>
      <li>If it's safe, "make a choice": place the number in the cell.</li>
      <li>"Explore": Make a recursive call to continue solving the rest of the board. If the recursive call returns <code>true</code>, it means a solution was found, so we also return <code>true</code>.</li>
      <li>If the recursive call returns <code>false</code>, it means our choice led to a dead end. We must "unmake the choice" (backtrack) by setting the cell back to 0 and try the next number.</li>
    </ul>
  </li>
  <li>If we try all numbers from 1-9 in the cell and none lead to a solution, we return <code>false</code> to the previous call.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Constraint Satisfaction</li>
  <li>State-space Search</li>
</ul>
`,
  // problem explanation--> 28
  'recursion-coin-change': `
<h3>💡 Problem Breakdown</h3>
<p>This problem asks for the *number of combinations* of coins to make a certain amount. This is different from finding the *minimum* number of coins. The recursive approach involves making a decision for each type of coin: either we "include" it in our solution and reduce the amount, or we "exclude" it and move to the next type of coin.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will need to track the current amount and which coin we are considering.</p>
<ol>
  <li><b>Base Cases:</b>
    <ul>
      <li>If the amount is 0, we have found one valid way to make change. Return 1.</li>
      <li>If the amount is negative, or if we have run out of coins to consider, this path is invalid. Return 0.</li>
    </ul>
  </li>
  <li><b>Recursive Step:</b> For the current coin, we have two choices:
    <ul>
      <li><b>Include:</b> Use the current coin. The number of ways is found by recursively calling the function with the *same* coin but with the amount reduced by the coin's value.</li>
      <li><b>Exclude:</b> Don't use the current coin. The number of ways is found by recursively calling the function for the *next* coin with the same amount.</li>
    </ul>
  </li>
  <li><b>Combine:</b> The total number of ways is the sum of the results from the "include" and "exclude" choices.</li>
</ol>
<p>This problem has overlapping subproblems (e.g., the number of ways to make 5 cents is calculated many times), so it's a perfect candidate for memoization to improve performance.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Choice (Include/Exclude)</li>
  <li>Overlapping Subproblems</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 29
  'recursion-word-search': `
<h3>💡 Problem Breakdown</h3>
<p>This is a path-finding problem on a grid, which is a common application for recursive backtracking (often implemented as a Depth-First Search or DFS). For each cell in the grid, we need to check if a path starting from it can form the target word.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Main Function:</b> Iterate through every cell (r, c) of the board. If the character at (r, c) matches the first letter of the word, start a recursive search from that cell.</li>
  <li><b>Recursive Helper (DFS/Backtrack):</b> This function takes the current position (r, c) and the current index in the word to find.
    <ul>
      <li><b>Base Case 1 (Success):</b> If the word index has reached the end of the word, we have successfully found the entire word. Return <code>true</code>.</li>
      <li><b>Base Case 2 (Failure):</b> If the current position is out of bounds, or if the character on the board doesn't match the character at the current word index, this path is invalid. Return <code>false</code>.</li>
      <li><b>Recursive Step:</b>
        <ol>
          <li>"Make a choice": To prevent reusing a letter, we temporarily mark the current cell (r, c) as visited (e.g., by changing its character to '#').</li>
          <li>"Explore": Make recursive calls for all four adjacent neighbors (up, down, left, right), passing the next word index (index + 1).</li>
          <li>If any of the recursive calls return <code>true</code>, it means a path was found. We can stop and return <code>true</code>.</li>
          <li>"Unmake the choice" (Backtrack): If no path was found from this cell, we must restore the original character to the board so it can be used in other potential paths.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>If the main loop finishes without the recursive search ever returning true, the word does not exist. Return <code>false</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking / Depth-First Search (DFS)</li>
  <li>Grid Traversal</li>
  <li>State Management (marking visited cells)</li>
</ul>
`,
  // problem explanation--> 30
  'recursion-tower-of-hanoi': `
<h3>💡 Problem Breakdown</h3>
<p>The Tower of Hanoi is a famous mathematical puzzle. The goal is to move a stack of N disks from a source rod to a destination rod, using a third auxiliary rod, with two rules: 1. Only one disk can be moved at a time. 2. A larger disk can never be placed on top of a smaller disk.</p>
<p>The recursive solution is surprisingly elegant. To move N disks from Source to Destination:</p>
<ol>
  <li>Move N-1 disks from Source to Auxiliary (using Destination as the spare).</li>
  <li>Move the largest disk (disk N) from Source to Destination.</li>
  <li>Move the N-1 disks from Auxiliary to Destination (using Source as the spare).</li>
</ol>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If there are no disks to move (n=0), do nothing.</li>
  <li><b>Recursive Step:</b> The function takes the number of disks 'n' and the names of the three rods (source, aux, dest). It implements the three steps described above by making two recursive calls for n-1 disks and one step for the largest disk. The key is correctly swapping the roles of the auxiliary and destination rods in the recursive calls.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Problem Decomposition</li>
  <li>Base Case</li>
  <li>Parameter Swapping</li>
</ul>
`,
  // problem explanation--> 31
  'recursion-combinations': `
<h3>💡 Problem Breakdown</h3>
<p>The goal is to find all possible unique groups of size 'k' from a set of numbers 1 to 'n'. For example, if n=4 and k=2, the combinations are [1,2], [1,3], [1,4], [2,3], [2,4], [3,4]. Unlike permutations, the order doesn't matter ([1,2] is the same as [2,1]). This suggests a backtracking approach where we build a combination step-by-step.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>We use a recursive helper function to explore the choices.</p>
<ol>
  <li><b>Base Case:</b> If the current combination we're building (the 'path') has reached the desired size 'k', we've found a valid combination. We add a copy of it to our results and return.</li>
  <li><b>Recursive Step:</b> We iterate through the numbers from a 'start' position up to 'n'.
    <ul>
      <li>"Choose": Add the current number 'i' to our path.</li>
      <li>"Explore": Make a recursive call to find the rest of the combination, starting from the *next* number (<code>i + 1</code>). This ensures we don't reuse numbers and don't generate duplicate combinations like [2,1].</li>
      <li>"Unchoose" (Backtrack): Remove the number 'i' from our path so we can explore the next choice in the loop.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Combinatorics</li>
  <li>Choose, Explore, Unchoose pattern</li>
</ul>
`,
  // problem explanation--> 32
  'recursion-generate-parentheses': `
<h3>💡 Problem Breakdown</h3>
<p>We need to generate all strings of 'n' pairs of parentheses that are "well-formed". A string is well-formed if: 1. The total number of opening brackets equals the total number of closing brackets. 2. At no point in the string is the count of closing brackets greater than the count of opening brackets.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>This is a classic backtracking problem where we build the string character by character, making sure we don't violate the rules at any step.</p>
<ol>
  <li><b>Base Case:</b> When the length of the string we are building reaches 2*n, we have a complete combination. We add it to our results.</li>
  <li><b>Recursive Choices (Constraints):</b> The recursive function keeps track of the number of open and close parentheses used so far.
    <ul>
      <li><b>Choice 1 (Add ')'):</b> We can add an opening parenthesis as long as we haven't used all 'n' of them yet (<code>open < n</code>).</li>
      <li><b>Choice 2 (Add ')'):</b> We can add a closing parenthesis only if the number of closing brackets is strictly less than the number of opening brackets (<code>close < open</code>). This enforces the "well-formed" rule.</li>
    </ul>
  </li>
  <li>The function recursively calls itself for each valid choice, adding the character to the path. There is no explicit "unchoose" step needed if new strings are passed in each recursive call.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Constraint Satisfaction</li>
</ul>
`,
  // problem explanation--> 33
  'recursion-letter-case-permutation': `
<h3>💡 Problem Breakdown</h3>
<p>The goal is to generate all possible strings by changing the case of the letters in an input string. Digits remain unchanged. For "a1b2", the possibilities are "a1b2", "a1B2", "A1b2", "A1B2". This is a backtracking problem where at each letter, we have two choices: lowercase or uppercase.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function explores the string character by character.</p>
<ol>
  <li><b>Base Case:</b> If our current index has reached the end of the string, the "current string" we've built is a complete permutation. We add it to our results.</li>
  <li><b>Recursive Step:</b> We look at the character at the current index.
    <ul>
      <li>If it's a digit, there's no choice to make. We simply append it to our current string and recurse on the next index.</li>
      <li>If it's a letter, we have two branches of exploration:
        <ol>
          <li>Append its lowercase version and recurse on the next index.</li>
          <li>Append its uppercase version and recurse on the next index.</li>
        </ol>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>State-space Search (a binary tree of choices for each letter)</li>
</ul>
`,
  // problem explanation--> 34
  'recursion-decode-string': `
<h3>💡 Problem Breakdown</h3>
<p>This problem involves parsing a nested structure. The presence of nested brackets like `3[a2[c]]` is a strong indicator that recursion is a good approach. The idea is to have a recursive function that is responsible for decoding one level of brackets. When it encounters an inner bracket, it calls itself to solve that subproblem.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive function can process the string. Using a global index or passing the index by reference is a common pattern for this type of parsing.</p>
<ol>
  <li>The function iterates through the string.</li>
  <li>If it sees a digit, it accumulates it into a number (e.g., '1', '2' -> 12).</li>
  <li>If it sees an opening bracket `[`, it means a nested pattern begins. It makes a recursive call. The result of this recursive call is the string that needs to be repeated. The accumulated number tells us how many times to repeat it.</li>
  <li>If it sees a closing bracket `]`, it means the current level of decoding is complete. It should return the result it has built so far to its caller.</li>
  <li>If it sees a letter, it simply appends it to the result for the current level.</li>
</ol>
<p>This naturally handles the nesting, as each recursive call only concerns itself with finding its corresponding closing bracket.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Descent Parsing</li>
  <li>String Parsing</li>
  <li>Stack (implicitly managed by the recursive call stack)</li>
</ul>
`,
  // problem explanation--> 35
  'recursion-tree-in-order-traversal': `
<h3>💡 Problem Breakdown</h3>
<p>Tree traversal is a fundamental tree operation. In-order traversal follows a specific pattern: <b>Left -> Root -> Right</b>. For a Binary Search Tree (BST), this traversal visits the nodes in sorted ascending order.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive implementation directly follows the definition.</p>
<ol>
  <li><b>Base Case:</b> If the current node is null, we have nothing to traverse, so we return an empty array.</li>
  <li><b>Recursive Step:</b>
    <ol>
      <li>First, recursively traverse the <b>left</b> subtree. This will give an array of all values in the left branch.</li>
      <li>Then, process the <b>root</b>. We add the current node's value to our result.</li>
      <li>Finally, recursively traverse the <b>right</b> subtree. This gives an array of all values in the right branch.</li>
    </ol>
  </li>
  <li>Combine the results from the three steps using array spread syntax: <code>[...leftResult, root.value, ...rightResult]</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Tree Traversal</li>
  <li>Base Case (null node)</li>
</ul>
`,
  // problem explanation--> 36
  'recursion-tree-pre-order-traversal': `
<h3>💡 Problem Breakdown</h3>
<p>Pre-order traversal is another fundamental tree operation. It follows the pattern: <b>Root -> Left -> Right</b>. This traversal is useful for creating a copy of a tree, as you process the root before its children.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive implementation directly follows the definition.</p>
<ol>
  <li><b>Base Case:</b> If the current node is null, return an empty array.</li>
  <li><b>Recursive Step:</b>
    <ol>
      <li>First, process the <b>root</b>. We take the current node's value.</li>
      <li>Then, recursively traverse the <b>left</b> subtree.</li>
      <li>Finally, recursively traverse the <b>right</b> subtree.</li>
    </ol>
  </li>
  <li>Combine the results: <code>[root.value, ...leftResult, ...rightResult]</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Tree Traversal</li>
  <li>Base Case (null node)</li>
</ul>
`,
  // problem explanation--> 37
  'recursion-tree-post-order-traversal': `
<h3>💡 Problem Breakdown</h3>
<p>Post-order traversal is a fundamental tree operation following the pattern: <b>Left -> Right -> Root</b>. This traversal is useful in scenarios where you need to process a node's children before the node itself, such as deleting nodes from a tree or calculating the size of subtrees.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive implementation directly follows the definition.</p>
<ol>
  <li><b>Base Case:</b> If the current node is null, return an empty array.</li>
  <li><b>Recursive Step:</b>
    <ol>
      <li>First, recursively traverse the <b>left</b> subtree.</li>
      <li>Then, recursively traverse the <b>right</b> subtree.</li>
      <li>Finally, process the <b>root</b>. We take the current node's value.</li>
    </ol>
  </li>
  <li>Combine the results: <code>[...leftResult, ...rightResult, root.value]</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Tree Traversal</li>
  <li>Base Case (null node)</li>
</ul>
`,
  // problem explanation--> 38
  'recursion-collect-strings-from-object': `
<h3>💡 Problem Breakdown</h3>
<p>The task is to traverse a potentially nested object and extract all the values that are strings. Since the nesting can be arbitrarily deep, recursion is a natural fit. We need to check the type of each value in the object.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li>The function iterates through the keys of the input object.</li>
  <li>For each value:
    <ul>
      <li>If the value is a string, add it to our result array.</li>
      <li>If the value is an object (and not null or an array), it means we have a nested structure. We make a recursive call with this nested object and concatenate its results to our main result array.</li>
      <li>For any other type (number, boolean, etc.), we ignore it.</li>
    </ul>
  </li>
  <li>The base case is implicit: if an object has no string values and no nested objects, the loop finishes and an empty array is returned for that level.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Object Traversal (for...in loop)</li>
  <li>Type Checking (<code>typeof</code>)</li>
  <li>Recursion on Nested Data Structures</li>
</ul>
`,
  // problem explanation--> 39
  'recursion-fibonacci-memoization': `
<h3>💡 Problem Breakdown</h3>
<p>The simple recursive Fibonacci solution is very slow because it recalculates the same values over and over. For example, to compute <code>fib(5)</code>, we compute <code>fib(4)</code> and <code>fib(3)</code>. To compute <code>fib(4)</code>, we compute <code>fib(3)</code> and <code>fib(2)</code>. Notice that <code>fib(3)</code> is computed twice. This redundancy grows exponentially. Memoization solves this by storing (caching) the results of expensive function calls.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>We enhance the recursive function to use a cache (often an object or a Map).</p>
<ol>
  <li>The function now takes an additional argument, <code>memo</code>, which is the cache, often with a default value of an empty object.</li>
  <li><b>Cache Check:</b> At the very beginning of the function, we check if the result for the current 'n' is already in our memo. If it is, we immediately return the stored value instead of re-computing.</li>
  <li><b>Base Cases:</b> Same as before (if n <= 1, return n).</li>
  <li><b>Recursive Step & Cache Store:</b> If the value is not in the cache, we perform the recursive calculation as before: <code>fibMemo(n - 1, memo) + fibMemo(n - 2, memo)</code>. But before returning, we store the computed result in our memo: <code>memo[n] = result</code>.</li>
</ol>
<p>This ensures that the Fibonacci number for any given 'n' is only ever calculated once.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Memoization / Caching</li>
  <li>Dynamic Programming</li>
  <li>Time Complexity Optimization</li>
</ul>
`,
  // problem explanation--> 40
  'recursion-nested-even-sum': `
<h3>💡 Problem Breakdown</h3>
<p>This problem is similar to "Collect Strings from Object," but with a different goal. We need to traverse a nested object and sum up all the values that are even numbers.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li>Initialize a local <code>sum</code> variable to 0.</li>
  <li>Iterate through the keys of the input object.</li>
  <li>For each value:
    <ul>
      <li>If the value is a number and it's even (<code>value % 2 === 0</code>), add it to our <code>sum</code>.</li>
      <li>If the value is an object (and not null), it's a nested structure. We make a recursive call with this nested object and add its returned sum to our current <code>sum</code>.</li>
      <li>Ignore all other types.</li>
    </ul>
  </li>
  <li>Return the final <code>sum</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Object Traversal</li>
  <li>Type Checking</li>
  <li>Recursion on Nested Data Structures</li>
</ul>
`,
  // problem explanation--> 41
  'recursion-capitalize-words': `
<h3>💡 Problem Breakdown</h3>
<p>We need to process an array of strings and return a new array where every string has been capitalized. The recursive strategy is to capitalize the first word and then combine it with the capitalized version of the rest of the array.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the input array is empty, there's nothing to capitalize. Return an empty array.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Take the first word from the array (<code>arr[0]</code>) and convert it to uppercase.</li>
      <li>Make a recursive call with the rest of the array (<code>arr.slice(1)</code>).</li>
      <li>Combine the capitalized first word with the result of the recursive call into a new array. The spread syntax (<code>...</code>) is clean for this: <code>[capitalizedFirst, ...capitalizeWords(arr.slice(1))]</code>.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Array Slicing and Spreading</li>
</ul>
`,
  // problem explanation--> 42
  'recursion-stringify-numbers': `
<h3>💡 Problem Breakdown</h3>
<p>This problem requires traversing a nested object and creating a new object where all number values have been converted to their string representations. The structure of the object should otherwise remain the same. This is a transformation task, well-suited for recursion.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li>The function should create a new empty object, <code>newObj</code>, to avoid mutating the original.</li>
  <li>Iterate through the keys of the input object.</li>
  <li>For each value:
    <ul>
      <li>If the value is a number, convert it to a string (<code>value.toString()</code>) and add it to <code>newObj</code>.</li>
      <li>If the value is an object (but not an array or null), make a recursive call with that object and assign the result to the corresponding key in <code>newObj</code>.</li>
      <li>Otherwise (for strings, booleans, arrays, etc.), copy the value over to <code>newObj</code> as-is.</li>
    </ul>
  </li>
  <li>Return the completed <code>newObj</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Object Traversal</li>
  <li>Type Checking</li>
  <li>Immutable Transformation (creating a new object)</li>
  <li>Recursion on Nested Data Structures</li>
</ul>
`,
  // problem explanation--> 43
  'recursion-is-sorted': `
<h3>💡 Problem Breakdown</h3>
<p>To check if an array is sorted, we need to ensure that every element is less than or equal to the element that follows it. Recursively, an array is sorted if its first element is less than or equal to its second, AND the rest of the array (from the second element onwards) is also sorted.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The function can track the current index it's checking.</p>
<ol>
  <li><b>Base Case:</b> If the index reaches the end of the array (<code>index >= arr.length - 1</code>), it means all pairs have been checked successfully. Return <code>true</code>.</li>
  <li><b>Check Step:</b> Compare the element at the current index (<code>arr[index]</code>) with the next one (<code>arr[index + 1]</code>). If it's greater, the array is not sorted. Return <code>false</code>.</li>
  <li><b>Recursive Step:</b> If the pair is in order, continue the check by making a recursive call for the next index: <code>isSorted(arr, index + 1)</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Passing state (index) through parameters</li>
</ul>
`,
  // problem explanation--> 44
  'recursion-reverse-linked-list': `
<h3>💡 Problem Breakdown</h3>
<p>Reversing a linked list is a classic problem. To reverse a list like 1->2->3, the recursive insight is: if we reverse the rest of the list (2->3 becomes 3->2), we just need to attach the head (1) to the end. The head of the reversed rest (3) will become the new head of the entire reversed list.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the list is empty (<code>head</code> is null) or has only one node (<code>head.next</code> is null), it is already its own reverse. Return the head.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Make a recursive call on the rest of the list: <code>reverseList(head.next)</code>. This call will fully reverse the rest of the list and return the new head (in our example, the node with value 3).</li>
      <li>Let's say the current <code>head</code> is node 2. Its <code>next</code> is node 3. After the recursive call, the link from 3 to 2 is gone, and instead 3 now points to null. We need to re-establish the link in the reverse direction. The node that *was* after our head (<code>head.next</code>, which is 3) should now point back to our current head (2). This is done with: <code>head.next.next = head</code>.</li>
      <li>Finally, we must break the original forward link from our head: <code>head.next = null</code>.</li>
      <li>Crucially, we return the <code>newHead</code> that was returned from our initial recursive call, as this will be the head of the fully reversed list.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Linked Lists</li>
  <li>Pointer Manipulation</li>
  <li>Passing results up the call stack</li>
</ul>
`,
  // problem explanation--> 45
  'recursion-path-sum-in-tree': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find if there's any path from the root of a tree down to a leaf where the sum of the node values along the path equals a target sum. A leaf is defined as a node with no children.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case 1 (Failure):</b> If the current node is null, we've gone past a leaf. This path is invalid. Return <code>false</code>.</li>
  <li><b>Subtract Value:</b> At the current node, we subtract its value from the target sum we're looking for. Let's call this <code>remainingSum</code>.</li>
  <li><b>Base Case 2 (Success):</b> We check if the current node is a leaf (both left and right children are null). If it is, we check if the <code>remainingSum</code> is now exactly 0. If it is, we've found a valid path. Return <code>true</code>.</li>
  <li><b>Recursive Step:</b> If it's not a leaf, we need to continue searching. The path could go down the left OR the right. We recursively call the function on the left child and the right child, passing the <code>remainingSum</code>. We return <code>true</code> if either of these calls returns <code>true</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal (DFS)</li>
  <li>Leaf Node identification</li>
  <li>Passing modified state (the sum) down the recursion</li>
</ul>
`,
  // problem explanation--> 46
  'recursion-permutations-with-duplicates': `
<h3>💡 Problem Breakdown</h3>
<p>This is a variation of the standard permutation problem. The challenge is to generate only unique permutations when the input array contains duplicate numbers. For [1, 1, 2], the unique permutations are [1,1,2], [1,2,1], and [2,1,1].</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The key to avoiding duplicates is to sort the input array first. Then, in our backtracking function, we add a condition to skip using a number if it's the same as the previous number and the previous number has not been used in this path yet.</p>
<ol>
  <li>Sort the input <code>nums</code> array.</li>
  <li>Use a backtracking helper function with a path and a `used` boolean array.</li>
  <li><b>Base Case:</b> If the path length equals the original array length, we've found a full permutation. Add it to the results.</li>
  <li><b>Recursive Step:</b> Loop through the numbers.
    <ul>
      <li>If the current number is already used, skip it.</li>
      <li><b>The key condition:</b> If the current number is the same as the previous one (<code>nums[i] === nums[i-1]</code>) AND the previous one has NOT been used yet in this level of recursion (<code>!used[i-1]</code>), then we skip the current number. This ensures that we only pick the first of any duplicate numbers to start a new permutation branch.</li>
      <li>If the number can be used, add it to the path, mark it as used, recurse, and then backtrack (remove from path, mark as unused).</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Handling Duplicates</li>
  <li>Sorting as a prerequisite</li>
</ul>
`,
  // problem explanation--> 47
  'recursion-subsets-with-duplicates': `
<h3>💡 Problem Breakdown</h3>
<p>This is a variation of the power set problem. Given a set that may contain duplicates like [1, 2, 2], we need to find all unique subsets. For [1, 2, 2], the unique subsets are [[], [1], [2], [1,2], [2,2], [1,2,2]].</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>Similar to permutations with duplicates, the key is to sort the input array first. This groups the duplicates together and allows us to easily skip them during our backtracking process.</p>
<ol>
  <li>Sort the input <code>nums</code> array.</li>
  <li>Use a backtracking helper function. At each step, we add the current path to our results.</li>
  <li><b>Recursive Step:</b> We loop through the numbers starting from a given `start` index.
    <ul>
      <li><b>The key condition:</b> If the current index `i` is greater than the `start` index and the current number is the same as the previous one (<code>nums[i] === nums[i-1]</code>), we skip this number. This prevents us from starting a new subset branch with a duplicate number if we've already processed its identical sibling at this level.</li>
      <li>"Choose": Add the current number to the path.</li>
      <li>"Explore": Recurse, starting from the next index (<code>i + 1</code>).</li>
      <li>"Unchoose": Backtrack by removing the number from the path.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Handling Duplicates in Subsets</li>
  <li>Sorting as a prerequisite</li>
</ul>
`,
  // problem explanation--> 48
  'recursion-combination-sum': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find all unique combinations of numbers from a given set that sum up to a target. The same number can be used multiple times. This is a classic backtracking problem where we explore different combinations of numbers.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The backtracking function explores adding numbers to a combination.</p>
<ol>
  <li><b>Base Case 1 (Success):</b> If the current sum of our combination equals the target, we have found a valid combination. We add a copy of it to our results and return.</li>
  <li><b>Base Case 2 (Failure):</b> If the current sum exceeds the target, this path is invalid. We return.</li>
  <li><b>Recursive Step:</b> We iterate through the candidate numbers. To avoid duplicate combinations (like [2,3] and [3,2]), we pass a `startIndex` to the recursive call.
    <ul>
      <li>"Choose": Add the current candidate number to our path.</li>
      <li>"Explore": Make a recursive call. Crucially, we pass the *same* start index `i` to the next call, because we are allowed to reuse the same number.</li>
      <li>"Unchoose": Backtrack by removing the number from the path.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Combinatorics</li>
</ul>
`,
  // problem explanation--> 49
  'recursion-palindrome-partitioning': `
<h3>💡 Problem Breakdown</h3>
<p>The goal is to split a string into substrings where every substring is a palindrome. We need to find all possible ways to do this. For "aab", the possibilities are ["a", "a", "b"] and ["aa", "b"]. This is a backtracking problem where we try to make a "cut" at every possible position.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will try to find the next palindromic substring starting from a given index.</p>
<ol>
  <li><b>Base Case:</b> If our starting index has reached the end of the string, it means we have successfully partitioned the entire string. We add the current partition path to our results.</li>
  <li><b>Recursive Step:</b> We iterate from the start index to the end of the string. At each position `i`, we form a substring from `start` to `i`.
    <ul>
      <li>We check if this substring is a palindrome.</li>
      <li>If it is, we "choose" this substring by adding it to our current path.</li>
      <li>We then "explore" by making a recursive call to partition the rest of the string, starting from the next index (<code>i + 1</code>).</li>
      <li>"Unchoose": After the recursive call returns, we backtrack by removing the substring from our path to explore other possibilities.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Palindrome Checking</li>
  <li>String Partitioning</li>
</ul>
`,
  // problem explanation--> 50
  'recursion-quick-sort': `
<h3>💡 Problem Breakdown</h3>
<p>Quick Sort is another "divide and conquer" sorting algorithm. It's often faster in practice than Merge Sort. The steps are:
<ol>
  <li><b>Pick a pivot:</b> Choose an element from the array as the pivot (e.g., the last element).</li>
  <li><b>Partition:</b> Reorder the array so that all elements with values less than the pivot come before it, while all elements with values greater than the pivot come after it.</li>
  <li><b>Conquer:</b> Recursively apply the above steps to the sub-array of elements with smaller values and the sub-array of elements with greater values.</li>
</ol>
</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The simplest (though not most space-efficient) recursive implementation is shown.</p>
<ol>
  <li><b>Base Case:</b> If the array has 1 or 0 elements, it's already sorted. Return it.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Choose a pivot (e.g., the last element).</li>
      <li>Create two new empty arrays, `left` and `right`.</li>
      <li>Iterate through the array (excluding the pivot). If an element is less than the pivot, push it to `left`; otherwise, push it to `right`.</li>
      <li>Recursively call `quickSort` on the `left` and `right` arrays.</li>
      <li>Combine the sorted `left` array, the pivot, and the sorted `right` array to get the final result.</li>
    </ul>
  </li>
</ol>
<p>Note: In-place partitioning is more common in production code to save space.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Divide and Conquer</li>
  <li>Pivot and Partition</li>
  <li>Base Case</li>
  <li>Recursive Step</li>
</ul>
`,
  // problem explanation--> 51
  'recursion-count-vowels': `
<h3>💡 Problem Breakdown</h3>
<p>The task is to count the vowels in a string recursively. The recursive idea is to check if the first character of the string is a vowel, and then add that result (1 if it is, 0 if it isn't) to the vowel count of the rest of the string.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the string is empty, it contains no vowels. Return 0.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Check if the first character (<code>str[0]</code>) is a vowel. A helper string or set of vowels can be used for this check.</li>
      <li>If it is a vowel, the count for this step is 1. Otherwise, it's 0.</li>
      <li>Make a recursive call with the rest of the string (<code>str.slice(1)</code>).</li>
      <li>Return the sum of the count from this step and the result of the recursive call.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>String Slicing</li>
</ul>
`,
  // problem explanation--> 52
  'recursion-is-valid-bst': `
<h3>💡 Problem Breakdown</h3>
<p>A Binary Search Tree (BST) has a specific ordering property: for any given node, all values in its left subtree must be smaller, and all values in its right subtree must be larger. This property must hold true for all nodes in the tree, not just the immediate children.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>Simply checking <code>node.left.value < node.value < node.right.value</code> is not enough. The key is to pass down constraints (a minimum and maximum allowed value) to the children.</p>
<ol>
  <li>Create a recursive helper function that takes a node, a `min` value, and a `max` value.</li>
  <li><b>Base Case:</b> If the node is null, it's a valid part of a BST. Return <code>true</code>.</li>
  <li><b>Constraint Check:</b> Check if the current node's value violates the constraints. If <code>node.value <= min</code> or <code>node.value >= max</code>, the tree is invalid. Return <code>false</code>.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>When recursing to the left child, the child must be less than the current node's value. So, we update the `max` constraint for the left subtree: <code>validate(node.left, min, node.value)</code>.</li>
      <li>When recursing to the right child, the child must be greater than the current node's value. So, we update the `min` constraint for the right subtree: <code>validate(node.right, node.value, max)</code>.</li>
    </ul>
  </li>
  <li>The tree is valid only if both recursive calls return <code>true</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Search Tree (BST) Properties</li>
  <li>Passing constraints as parameters</li>
  <li>Recursive Tree Traversal</li>
</ul>
`,
  // problem explanation--> 53
  'recursion-tiling-problem': `
<h3>💡 Problem Breakdown</h3>
<p>We want to find the number of ways to tile a 2 x n board with 2 x 1 tiles. Let's analyze the choices for the last column(s).
<ul>
    <li>We can place one tile vertically to cover the last column. This leaves a 2 x (n-1) board to be tiled.</li>
    <li>We can place two tiles horizontally to cover the last two columns. This leaves a 2 x (n-2) board to be tiled.</li>
</ul>
The total number of ways to tile a 2 x n board is the sum of the ways to tile a 2 x (n-1) board and the ways to tile a 2 x (n-2) board.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>This recursive relation, <code>ways(n) = ways(n-1) + ways(n-2)</code>, is exactly the Fibonacci sequence.</p>
<ol>
  <li><b>Base Cases:</b>
    <ul>
      <li>For a 2 x 1 board (n=1), there's only one way (one vertical tile).</li>
      <li>For a 2 x 2 board (n=2), there are two ways (two vertical tiles or two horizontal tiles).</li>
    </ul>
    So, if n <= 2, we can simply return n.
  </li>
  <li><b>Recursive Step:</b> For any n > 2, we return <code>countTilingWays(n - 1) + countTilingWays(n - 2)</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Relation (Fibonacci)</li>
  <li>Problem Decomposition</li>
</ul>
`,
  // problem explanation--> 54
  'recursion-all-paths-in-grid': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the number of paths from the top-left (0,0) to the bottom-right (M-1, N-1) of a grid, moving only right or down. To reach cell (m, n), we must have come from either the cell above, (m-1, n), or the cell to the left, (m, n-1). Therefore, the total number of paths to (m, n) is the sum of the paths to (m-1, n) and the paths to (m, n-1).</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If we are on the first row (m=1) or the first column (n=1), there is only one way to reach any cell: by moving only right or only down, respectively. So, if m=1 or n=1, we return 1. This is our stopping condition.</li>
  <li><b>Recursive Step:</b> For any other cell (m, n), we return the sum of the paths to the cell above and the cell to the left: <code>countPaths(m - 1, n) + countPaths(m, n - 1)</code>.</li>
</ol>
<p>This problem has many overlapping subproblems and can be optimized with memoization.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Grid Traversal</li>
  <li>Recursive Relation</li>
  <li>Dynamic Programming</li>
</ul>
`,
  // problem explanation--> 55
  'recursion-word-break': `
<h3>💡 Problem Breakdown</h3>
<p>The problem asks if a string can be completely segmented into words from a given dictionary. For a string 's', we can check if it has a prefix that is a valid word. If it does, we then need to solve the same problem for the remaining suffix of the string. This structure is perfect for recursion.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the string we are checking is empty (""), it means the previous steps have successfully segmented the entire original string. We return <code>true</code>.</li>
  <li><b>Recursive Step:</b> We iterate through all possible prefixes of the current string.
    <ul>
      <li>For each prefix, we check if it exists in the dictionary.</li>
      <li>If it does, we make a recursive call with the rest of the string (the suffix).</li>
      <li>If this recursive call returns <code>true</code>, it means the entire string can be broken down. We can immediately return <code>true</code>.</li>
    </ul>
  </li>
  <li>If the loop finishes without any prefix leading to a valid solution, we return <code>false</code>.</li>
</ol>
<p>This approach can be very slow due to re-computing results for the same substrings. Memoization is crucial for an efficient solution, where we store the result for each substring we process.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>String Partitioning</li>
  <li>Recursive Decomposition</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 56
  'recursion-find-max-in-array': `
<h3>💡 Problem Breakdown</h3>
<p>To find the maximum element in an array recursively, we can compare the first element with the maximum element of the rest of the array. The larger of these two will be the maximum of the entire array.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the array has only one element, that element is the maximum. Return <code>arr[0]</code>.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Make a recursive call to find the maximum of the rest of the array: <code>findMax(arr.slice(1))</code>. Let's call this <code>maxOfRest</code>.</li>
      <li>Compare the first element, <code>arr[0]</code>, with <code>maxOfRest</code>.</li>
      <li>Return the larger of the two.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Divide and Conquer</li>
</ul>
`,
  // problem explanation--> 57
  'recursion-lca-of-bst': `
<h3>💡 Problem Breakdown</h3>
<p>The Lowest Common Ancestor (LCA) of two nodes p and q in a tree is the lowest node that has both p and q as descendants. In a Binary Search Tree (BST), we can use the ordering property to find the LCA efficiently. The first node we encounter that has a value between p and q (inclusive) must be their LCA. This is because this node is the "split point" where the paths to p and q diverge.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the root is null, we can't find anything. Return null.</li>
  <li><b>Recursive Logic:</b>
    <ul>
      <li>If both p and q are smaller than the current root's value, the LCA must be in the left subtree. We recurse on the left child.</li>
      <li>If both p and q are larger than the current root's value, the LCA must be in the right subtree. We recurse on the right child.</li>
      <li>Otherwise, it means the current root is the split point (one value is on the left, one is on the right, or one of them is the root itself). The current root is the LCA. We return the root.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Search Tree (BST) Properties</li>
  <li>Lowest Common Ancestor (LCA)</li>
  <li>Recursive Search</li>
</ul>
`,
  // problem explanation--> 58
  'recursion-balanced-binary-tree': `
<h3>💡 Problem Breakdown</h3>
<p>A binary tree is height-balanced if, for every node, the height difference between its left and right subtrees is no more than 1. This suggests a recursive solution where we compute the height of the subtrees for each node.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A simple approach would be to calculate the height of left and right subtrees for each node and check the difference. However, this is inefficient as height calculation is repeated. A better way is to combine the height calculation and the balance check in one recursive function.</p>
<ol>
  <li>Create a recursive helper function that returns the height of a subtree. We'll use a special value (like -1) to signal that the subtree is *not* balanced.</li>
  <li><b>Base Case:</b> If the node is null, its height is 0, and it's balanced.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Recursively call the helper on the left child. If it returns -1, the left subtree is unbalanced, so we immediately propagate -1 up.</li>
      <li>Do the same for the right child.</li>
      <li>Check the balance at the current node: if the absolute difference between the left and right heights is greater than 1, this subtree is unbalanced. Return -1.</li>
      <li>If it is balanced, return the height of this subtree: <code>1 + Math.max(leftHeight, rightHeight)</code>.</li>
    </ul>
  </li>
  <li>The main function calls this helper on the root and returns <code>true</code> if the result is not -1.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Post-order Traversal</li>
  <li>Using return values to signal status</li>
  <li>Tree Height/Depth</li>
</ul>
`,
  // problem explanation--> 59
  'recursion-regular-expression-matching': `
<h3>💡 Problem Breakdown</h3>
<p>This is a complex matching problem that can be solved with recursion and memoization. We need to match a string 's' against a pattern 'p' that includes special characters '.' (matches any single character) and '*' (matches zero or more of the preceding character).</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will check if a suffix of 's' matches a suffix of 'p'. We track our position with indices i (for s) and j (for p).</p>
<ol>
  <li><b>Base Case:</b> If we've reached the end of the pattern (j == p.length), the match is successful only if we've also reached the end of the string (i == s.length).</li>
  <li><b>Recursive Logic:</b>
    <ul>
      <li>First, check if the current characters match (<code>s[i] === p[j]</code> or <code>p[j] === '.'</code>). Let's call this <code>firstMatch</code>.</li>
      <li><b>Handling '*':</b> If the next character in the pattern is '*', we have two choices:
        <ol>
          <li>The '*' matches zero occurrences of the preceding character. We skip the character and the '*' in the pattern and continue matching from <code>isMatch(i, j + 2)</code>.</li>
          <li>The '*' matches one or more occurrences. This is only possible if <code>firstMatch</code> is true. We match one character in the string and continue matching from the *same* pattern position (the '*' can be used again): <code>firstMatch && isMatch(i + 1, j)</code>.</li>
        </ol>
      </li>
      <li><b>No '*':</b> If the next character is not '*', the match depends entirely on <code>firstMatch</code>. If they match, we move to the next character in both the string and the pattern: <code>firstMatch && isMatch(i + 1, j + 1)</code>.</li>
    </ul>
  </li>
</ol>
<p>This has many overlapping subproblems, so memoization is essential for performance.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming with Recursion</li>
  <li>Memoization</li>
  <li>String Matching</li>
  <li>Handling complex logical choices</li>
</ul>
`,
  // problem explanation--> 60
  'recursion-digital-root': `
<h3>💡 Problem Breakdown</h3>
<p>The digital root is the single-digit sum obtained by an iterative process of summing digits. For example, for 38: 3 + 8 = 11. Since 11 is not a single digit, we repeat: 1 + 1 = 2. The digital root is 2. This process of "repeating until a condition is met" is a form of recursion.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the input number 'n' is already a single digit (n < 10), it is its own digital root. We return n.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>If 'n' is not a single digit, we first need to calculate the sum of its digits. This can be done with a simple loop or with another recursive function (like in problem #11).</li>
      <li>Once we have the sum of the digits, we make a recursive call to <code>digitalRoot</code> with this new sum.</li>
    </ul>
  </li>
</ol>
<p>The recursion continues until the sum of digits becomes a single-digit number.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>Problem reduction</li>
</ul>
`,
  // problem explanation--> 61
  'recursion-find-first-occurrence': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the index of the first time a target value appears in an array. A recursive strategy is to check the first element. If it's a match, we're done. If not, the first occurrence in the whole array is the same as the first occurrence in the rest of the array.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The function needs to know which part of the array it's currently searching. Passing an `index` is a common way to do this.</p>
<ol>
  <li><b>Base Case:</b> If the `index` has reached the end of the array, the element was not found. Return -1.</li>
  <li><b>Check Step:</b> If the element at the current `index` (<code>arr[index]</code>) is the target, we have found the first occurrence. Return the `index`.</li>
  <li><b>Recursive Step:</b> If it's not a match, we continue the search from the next position by returning the result of the recursive call: <code>findFirst(arr, target, index + 1)</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Linear Search</li>
  <li>Passing state (index) through parameters</li>
  <li>Base Case</li>
</ul>
`,
  // problem explanation--> 62
  'recursion-find-last-occurrence': `
<h3>💡 Problem Breakdown</h3>
<p>This is the reverse of the previous problem. We want the index of the last time a target appears. A recursive approach can be to find the last occurrence in the "rest" of the array first. If it's found there, that's our answer. If not, we then check if the current element is a match.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A cleaner way is to search from the end of the array backwards.</p>
<ol>
  <li><b>Base Case:</b> If the `index` becomes negative, we've searched the whole array without a match. Return -1.</li>
  <li><b>Check Step:</b> If the element at the current `index` (<code>arr[index]</code>) is the target, we've found the last occurrence (since we're searching from the end). Return the `index`.</li>
  <li><b>Recursive Step:</b> If it's not a match, continue the search towards the beginning by returning the result of the recursive call: <code>findLast(arr, target, index - 1)</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Linear Search (backwards)</li>
  <li>Passing state (index) through parameters</li>
</ul>
`,
  // problem explanation--> 63
  'recursion-print-pattern': `
<h3>💡 Problem Breakdown</h3>
<p>The goal is to generate an array of strings representing a right-aligned triangle of stars. For n=4, the output is ["****", "***", "**", "*"]. The recursive pattern is that the pattern for 'n' is a string of 'n' stars, followed by the pattern for 'n-1'.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If n is 0 or less, the pattern is empty. Return an empty array.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Create the string for the current level, which is '*' repeated 'n' times.</li>
      <li>Make a recursive call to get the pattern for <code>n-1</code>.</li>
      <li>Return a new array containing the current string followed by the elements from the recursive call's result.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Base Case</li>
  <li>Recursive Step</li>
  <li>String and Array construction</li>
</ul>
`,
  // problem explanation--> 64
  'recursion-tree-leaf-count': `
<h3>💡 Problem Breakdown</h3>
<p>A leaf node in a binary tree is a node that has no children (both its left and right children are null). We need to count how many such nodes exist in a given tree. The recursive definition is: the total number of leaves is the number of leaves in the left subtree plus the number of leaves in the right subtree.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case 1:</b> If the current node is null, it's not a leaf. Return 0.</li>
  <li><b>Base Case 2:</b> If the current node is not null, but both its left and right children are null, then it is a leaf node. Return 1.</li>
  <li><b>Recursive Step:</b> If the current node is not a leaf, the total number of leaves is the sum of the leaves in its left subtree and the leaves in its right subtree. We return <code>countLeaves(node.left) + countLeaves(node.right)</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal</li>
  <li>Leaf Node identification</li>
  <li>Base Cases</li>
</ul>
`,
  // problem explanation--> 65
  'recursion-josephus-problem': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic mathematical puzzle. With 'n' people in a circle, every 'k'-th person is eliminated. The problem is to find the survivor. There's a clever recursive formula to solve this. If we know the position of the survivor for n-1 people, we can find the position for n people. The survivor's position shifts by 'k' in the circle of size 'n'.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive relation is <code>josephus(n, k) = (josephus(n - 1, k) + k) % n</code>. The result is often 0-indexed.</p>
<ol>
  <li><b>Base Case:</b> If there is only one person (n=1), they are the survivor. Their 0-indexed position is 0. Return 0.</li>
  <li><b>Recursive Step:</b> For 'n' people, we first solve the problem for <code>n-1</code> people. Then, we apply the formula: we add 'k' to this result and take the modulo 'n' to wrap around the circle.</li>
</ol>
<p>To get a 1-indexed answer, you would add 1 to the final 0-indexed result.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Relation</li>
  <li>Modular Arithmetic</li>
  <li>Mathematical Puzzles</li>
</ul>
`,
  // problem explanation--> 66
  'recursion-phone-number-mnemonics': `
<h3>💡 Problem Breakdown</h3>
<p>This is similar to the string permutation problem. We are given a sequence of digits, and each digit maps to several possible letters. We need to find all possible strings that can be formed. For "23", we need to combine each letter from '2' ("a", "b", "c") with each letter from '3' ("d", "e", "f"). This is a backtracking problem where we build the mnemonic string digit by digit.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function explores the combinations.</p>
<ol>
  <li><b>Base Case:</b> If the index we are considering is at the end of the digits string, the path we have built is a complete mnemonic. Add it to the results.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Get the current digit and find the corresponding letters from a mapping (e.g., a map or object).</li>
      <li>Loop through each letter that the current digit can represent.</li>
      <li>For each letter, "choose" it by appending it to the current path.</li>
      <li>"Explore" by making a recursive call for the next digit's index (<code>index + 1</code>).</li>
      <li>After the recursive call returns, we implicitly "unchoose" by not modifying the path variable in the loop's next iteration.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>State-space Search</li>
  <li>Mapping</li>
</ul>
`,
  // problem explanation--> 67
  'recursion-flood-fill': `
<h3>💡 Problem Breakdown</h3>
<p>Flood fill is a classic algorithm used in paint programs. Starting from a pixel, it changes the color of that pixel and all adjacent pixels of the same original color. This process then repeats for those newly colored pixels, spreading outwards. This spreading behavior is naturally recursive.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>We use a recursive helper function (a Depth-First Search or DFS) to perform the fill.</p>
<ol>
  <li><b>Initial Setup:</b> Store the original color of the starting pixel. If the original color is already the new color, there's nothing to do.</li>
  <li><b>Recursive Helper (DFS):</b>
    <ul>
      <li><b>Base Case (Boundaries/Color Check):</b> The recursion stops if the current pixel is outside the grid boundaries, or if its color is not the original color we are trying to replace.</li>
      <li><b>Recursive Step:</b>
        <ol>
          <li>Change the color of the current pixel to the new color. This also marks it as "visited" for this fill operation.</li>
          <li>Make recursive calls for all four neighbors (up, down, left, right).</li>
        </ol>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Grid Traversal</li>
  <li>Depth-First Search (DFS)</li>
  <li>Base Cases (Boundary checks)</li>
</ul>
`,
  // problem explanation--> 68
  'recursion-unique-paths-with-obstacles': `
<h3>💡 Problem Breakdown</h3>
<p>This is a variation of the "All Paths in a Grid" problem. We still need to find the number of paths from top-left to bottom-right moving only down or right, but now some cells are blocked. The recursive relation is similar: the number of paths to (r, c) is the sum of paths to (r-1, c) and (r, c-1), but if (r, c) is an obstacle, the number of paths to it is 0.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case 1 (Failure):</b> If the current cell (r, c) is out of bounds or is an obstacle (value 1), it cannot be part of a valid path. Return 0.</li>
  <li><b>Base Case 2 (Success):</b> If the current cell is the destination (bottom-right), we have found one valid path. Return 1.</li>
  <li><b>Recursive Step:</b> If none of the base cases are met, the number of paths from the current cell is the sum of the paths from the cell below and the cell to the right: <code>count(r + 1, c) + count(r, c + 1)</code>.</li>
</ol>
<p>This has many overlapping subproblems and must be optimized with memoization to be efficient.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Grid Traversal</li>
  <li>Recursive Relation with Constraints</li>
  <li>Memoization / Dynamic Programming</li>
</ul>
`,
  // problem explanation--> 69
  'recursion-gray-code': `
<h3>💡 Problem Breakdown</h3>
<p>A Gray code sequence is an ordering of binary numbers where any two adjacent numbers differ by only one bit. The sequence for n bits can be generated recursively from the sequence for n-1 bits.
<br>For n=1: [0, 1]
<br>For n=2: Take the n=1 sequence [0, 1]. Reverse it to get [1, 0]. Prepend a '0' to the first list -> [00, 01]. Prepend a '1' to the reversed list -> [11, 10]. Combine them: [00, 01, 11, 10]. This is the Gray code for n=2.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If n=1, the sequence is [0, 1]. If n=0, it's [0].</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Recursively get the Gray code sequence for <code>n-1</code>.</li>
      <li>Create a new list by reversing this previous sequence.</li>
      <li>Add a '1' bit to the front of each number in the reversed list. This can be done by adding <code>2^(n-1)</code> to each number.</li>
      <li>Concatenate the original <code>n-1</code> sequence with the newly created list.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Sequence Generation</li>
  <li>Bit Manipulation</li>
  <li>Base Case</li>
</ul>
`,
  // problem explanation--> 70
  'recursion-deep-clone-object': `
<h3>💡 Problem Breakdown</h3>
<p>A "shallow clone" copies only the top-level properties. If a property is an object or array, the copy holds a reference to the original nested object. A "deep clone" creates a new copy of everything, including all nested objects and arrays. Recursion is perfect for this, as we can apply the cloning logic to every nested object we find.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the value to be cloned is not an object (e.g., a number, string, null), it doesn't need to be cloned. Return it as-is.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Determine if the object is an array or a regular object. Create a new empty array or object accordingly.</li>
      <li>Iterate through the keys (for objects) or indices (for arrays) of the input object.</li>
      <li>For each value, make a recursive call to <code>deepClone</code> on that value.</li>
      <li>Assign the result of the recursive call to the corresponding key/index in your new object/array.</li>
      <li>Return the new, fully cloned object/array.</li>
    </ul>
  </li>
</ol>
<p>This handles arbitrary levels of nesting.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Deep vs. Shallow Copy</li>
  <li>Recursion on Nested Data Structures</li>
  <li>Type Checking</li>
</ul>
`,
  // problem explanation--> 71
  'recursion-ackermann-function': `
<h3>💡 Problem Breakdown</h3>
<p>The Ackermann function is a famous example in computability theory. It's defined by a set of recursive rules and is notable for growing extremely quickly. The goal is to translate its mathematical definition directly into a recursive function.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The implementation is a direct translation of the rules provided:</p>
<ol>
  <li><b>Base Case 1:</b> If m = 0, return n + 1.</li>
  <li><b>Base Case 2:</b> If m > 0 and n = 0, make a recursive call: <code>ackermann(m - 1, 1)</code>.</li>
  <li><b>Recursive Step:</b> If m > 0 and n > 0, this involves a nested recursive call: <code>ackermann(m - 1, ackermann(m, n - 1))</code>. The inner call must be fully resolved before the outer call can proceed.</li>
</ol>
<p><b>Warning:</b> This function will cause a stack overflow for even small inputs (like m=4, n=2) because of its immense growth rate and deep recursion.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Direct translation of a mathematical recursion</li>
  <li>Nested Recursion</li>
  <li>Computability Theory</li>
</ul>
`,
  // problem explanation--> 72
  'recursion-remove-duplicates-from-sorted-list': `
<h3>💡 Problem Breakdown</h3>
<p>Given a sorted linked list, we need to remove any nodes that have the same value as the node before them. The recursive approach is to handle the rest of the list first, and then decide what to do with the current head node.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the list is empty or has only one node, there are no duplicates to remove. Return the head.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>First, recursively call the function on the rest of the list: <code>head.next = deleteDuplicates(head.next)</code>. This ensures that the tail of the list is already free of duplicates when we process the head.</li>
      <li>After the recursive call returns, we check if the current head's value is the same as the value of the (now de-duplicated) next node.</li>
      <li>If they are the same, it means the current head is a duplicate. We should skip it by returning <code>head.next</code>.</li>
      <li>If they are different, the current head is not a duplicate. We keep it by returning <code>head</code>.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Linked Lists</li>
  <li>Post-order processing (handling children before the parent)</li>
</ul>
`,
  // problem explanation--> 73
  'recursion-tree-is-symmetric': `
<h3>💡 Problem Breakdown</h3>
<p>A tree is symmetric if its left subtree is a mirror image of its right subtree. This means the root's left child must have the same structure as the root's right child, the root's left-left child must mirror the root's right-right child, and the root's left-right child must mirror the root's right-left child.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>This requires a recursive helper function that compares two nodes at a time.</p>
<ol>
  <li>Create a helper function <code>isMirror(t1, t2)</code>. The main function will call this with the root's left and right children.</li>
  <li><b>Base Cases for <code>isMirror</code>:</b>
    <ul>
      <li>If both t1 and t2 are null, they are mirrors. Return <code>true</code>.</li>
      <li>If one is null and the other is not, or if their values are different, they are not mirrors. Return <code>false</code>.</li>
    </ul>
  </li>
  <li><b>Recursive Step for <code>isMirror</code>:</b> For two nodes to be mirrors, two conditions must be met:
    <ul>
      <li>The left subtree of t1 must be a mirror of the right subtree of t2.</li>
      <li>The right subtree of t1 must be a mirror of the left subtree of t2.</li>
    </ul>
    We return <code>isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)</code>.
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal</li>
  <li>Symmetry</li>
  <li>Recursive helper function with multiple parameters</li>
</ul>
`,
  // problem explanation--> 74
  'recursion-search-in-bst': `
<h3>💡 Problem Breakdown</h3>
<p>Searching in a Binary Search Tree (BST) is highly efficient due to its ordering property. For any node, if the value we're looking for is smaller, we know it can only be in the left subtree. If it's larger, it can only be in the right subtree.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case 1 (Not Found):</b> If the root node is null, the value does not exist in this branch. Return null.</li>
  <li><b>Base Case 2 (Found):</b> If the root's value equals the target value, we've found the node. Return the root.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>If the target value is less than the root's value, we only need to search the left subtree. Return the result of <code>searchBST(root.left, val)</code>.</li>
      <li>If the target value is greater than the root's value, we only need to search the right subtree. Return the result of <code>searchBST(root.right, val)</code>.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Search Tree (BST) Properties</li>
  <li>Recursive Search</li>
</ul>
`,
  // problem explanation--> 75
  'recursion-construct-bst-from-sorted-array': `
<h3>💡 Problem Breakdown</h3>
<p>We need to convert a sorted array into a height-balanced Binary Search Tree. To keep the tree balanced, the best choice for the root of any subtree is the middle element of the corresponding array segment. This makes the number of nodes in the left and right subtrees as equal as possible.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the input array segment is empty, there's no node to create. Return null.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Find the middle element of the current array segment. This will be the root of the current subtree.</li>
      <li>Create a new tree node with the middle element's value.</li>
      <li>The left child of this new node will be the root of the BST built from the left half of the array (all elements before the middle). Make a recursive call for this.</li>
      <li>The right child will be the root of the BST built from the right half of the array (all elements after the middle). Make another recursive call for this.</li>
      <li>Return the newly created root node.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Search Tree (BST) construction</li>
  <li>Divide and Conquer</li>
  <li>Height-Balanced Tree</li>
</ul>
`,
  // problem explanation--> 76
  'recursion-expression-add-operators': `
<h3>💡 Problem Breakdown</h3>
<p>This is a challenging backtracking problem. We need to explore all possible ways of placing '+', '-', or '*' operators between the digits of a number string to see if any combination evaluates to the target. We also need to handle multi-digit numbers (e.g., using "12" instead of "1", "2"). The multiplication operator adds significant complexity because it breaks the simple left-to-right evaluation order.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive helper function needs to track several pieces of state: the current index in the number string, the expression path built so far, the value of the expression so far, and the value of the last operand (for handling multiplication).</p>
<ol>
  <li><b>Base Case:</b> If we've reached the end of the number string, we check if the evaluated value equals the target. If so, add the path to our results.</li>
  <li><b>Recursive Step:</b> Loop from the current index to the end of the string to form the next number.
    <ul>
      <li>Handle leading zeros: if a number is longer than one digit and starts with '0', it's invalid, so we break the loop.</li>
      <li>If it's the first number in the expression, we just recurse with this number as the initial value.</li>
      <li>Otherwise, we try all three operators:
        <ul>
          <li><b>'+':</b> Recurse with <code>value + currentNum</code>. The new "previous" operand is <code>currentNum</code>.</li>
          <li><b>'-':</b> Recurse with <code>value - currentNum</code>. The new "previous" operand is <code>-currentNum</code>.</li>
          <li><b>'*':</b> This is the tricky part. To maintain correct order of operations, the new value is <code>(value - prev) + (prev * currentNum)</code>. We subtract the previous operand, then add the result of the multiplication. The new "previous" operand is <code>prev * currentNum</code>.</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>String Parsing</li>
  <li>Handling Operator Precedence</li>
</ul>
`,
  // problem explanation--> 77
  'recursion-knapsack-problem': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic dynamic programming problem. We have a set of items, each with a weight and a value, and a knapsack with a maximum weight capacity. We want to maximize the total value of items in the knapsack. For each item, we have a binary choice: either we take the item, or we leave it (the "0/1" property).</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will decide for each item, starting from the last one.</p>
<ol>
  <li><b>Base Cases:</b> If we have no items left to consider (index is negative) or if the knapsack has no capacity left, we can't add any more value. Return 0.</li>
  <li><b>Recursive Step:</b> For the item at the current `index`:
    <ul>
      <li>If the item's weight is greater than the remaining capacity, we cannot include it. The only choice is to move to the next item: <code>solve(index - 1, capacity)</code>.</li>
      <li>If we can fit the item, we have two choices:
        <ol>
          <li><b>Include:</b> The value is <code>values[index]</code> plus the result of a recursive call for the remaining items and reduced capacity: <code>solve(index - 1, capacity - weights[index])</code>.</li>
          <li><b>Exclude:</b> The value is the result of a recursive call for the remaining items with the same capacity: <code>solve(index - 1, capacity)</code>.</li>
        </ol>
      </li>
      <li>We return the maximum of the "include" and "exclude" options.</li>
    </ul>
  </li>
</ol>
<p>This has overlapping subproblems and should be optimized with memoization.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>Recursive Choice (Include/Exclude)</li>
  <li>Optimization Problem</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 78
  'recursion-longest-common-subsequence': `
<h3>💡 Problem Breakdown</h3>
<p>A subsequence is formed by deleting zero or more characters from a string. We need to find the length of the longest string that is a subsequence of *both* input strings. The recursive approach considers the characters at the current positions of both strings.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function tracks the current indices (i, j) in both strings.</p>
<ol>
  <li><b>Base Case:</b> If either index goes past the end of its string, there's nothing more to match. Return 0.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>If the characters at the current indices match (<code>text1[i] === text2[j]</code>), then this character is part of the LCS. The length is 1 plus the LCS of the rest of the strings: <code>1 + solve(i + 1, j + 1)</code>.</li>
      <li>If the characters do not match, we have two possibilities: the LCS is either in the rest of text1 compared to text2 (<code>solve(i + 1, j)</code>) or in text1 compared to the rest of text2 (<code>solve(i, j + 1)</code>). We take the maximum of these two possibilities.</li>
    </ul>
  </li>
</ol>
<p>This has many overlapping subproblems and requires memoization for an efficient solution.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>Subsequences</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 79
  'recursion-edit-distance': `
<h3>💡 Problem Breakdown</h3>
<p>Edit distance (specifically, Levenshtein distance) is the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into another. This can be solved by recursively considering the options for the last characters of the strings.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function compares suffixes of the two words, tracked by indices (i, j).</p>
<ol>
  <li><b>Base Case:</b> If one string is empty (e.g., i reaches the end), the number of operations needed is the length of the remaining part of the other string (insertions).</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>If the characters at the current indices match (<code>word1[i] === word2[j]</code>), no operation is needed for this character. The cost is the edit distance of the rest of the strings: <code>solve(i + 1, j + 1)</code>.</li>
      <li>If the characters do not match, we must perform one operation. We explore all three possibilities and take the minimum:
        <ol>
          <li><b>Insert:</b> We "insert" a character into word1 to match word2[j]. The cost is 1 plus the edit distance of word1 and the rest of word2: <code>1 + solve(i, j + 1)</code>.</li>
          <li><b>Delete:</b> We "delete" the character from word1. The cost is 1 plus the edit distance of the rest of word1 and word2: <code>1 + solve(i + 1, j)</code>.</li>
          <li><b>Replace:</b> We "replace" word1[i] with word2[j]. The cost is 1 plus the edit distance of the rest of both strings: <code>1 + solve(i + 1, j + 1)</code>.</li>
        </ol>
      </li>
    </ul>
  </li>
</ol>
<p>This requires memoization to be efficient.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>Edit Distance / Levenshtein Distance</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 80
  'recursion-all-paths-source-to-target-graph': `
<h3>💡 Problem Breakdown</h3>
<p>We are given a Directed Acyclic Graph (DAG) and need to find all possible paths from a source node (0) to a target node (n-1). Since the graph is a DAG, we don't have to worry about infinite cycles, making a standard Depth-First Search (DFS) a perfect recursive approach.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>We use a recursive DFS helper function that keeps track of the current path.</p>
<ol>
  <li><b>Base Case:</b> If the current node we are visiting is the target node, we have found a valid path. We add a copy of the current path to our results and return.</li>
  <li><b>Recursive Step:</b> For the current node, we look at its neighbors in the adjacency list.
    <ul>
      <li>For each neighbor:
        <ol>
          <li>"Choose": Add the neighbor to our current path.</li>
          <li>"Explore": Make a recursive call to the DFS function with the neighbor as the new current node.</li>
          <li>"Unchoose" (Backtrack): After the recursive call returns, remove the neighbor from the path. This is crucial so that other branches of the search from the current node don't see this neighbor in their path.</li>
        </ol>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Graph Traversal</li>
  <li>Depth-First Search (DFS)</li>
  <li>Backtracking</li>
  <li>Adjacency List</li>
</ul>
`,
  // problem explanation--> 81
  'recursion-count-and-say': `
<h3>💡 Problem Breakdown</h3>
<p>This is a sequence generation problem. Each term in the sequence is derived from reading out the previous term.
<br>n=1: "1"
<br>n=2: read "1" as "one 1" -> "11"
<br>n=3: read "11" as "two 1s" -> "21"
<br>n=4: read "21" as "one 2, one 1" -> "1211"
<br>The recursive definition is that the nth term is the "saying" of the (n-1)th term.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If n=1, the result is "1".</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>First, recursively call the function to get the string for <code>n-1</code>. Let's call it <code>prev</code>.</li>
      <li>Iterate through the <code>prev</code> string, keeping track of the current digit and a count of its consecutive occurrences.</li>
      <li>When the digit changes or the string ends, append the count and the digit to your result string and reset the count.</li>
      <li>Return the newly constructed result string.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Sequence Generation</li>
  <li>String Manipulation</li>
</ul>
`,
  // problem explanation--> 82
  'recursion-group-sum': `
<h3>💡 Problem Breakdown</h3>
<p>This problem asks if a subset of numbers in an array can sum up to a specific target. This is a classic decision problem that can be solved with backtracking. For each number in the array, we have two choices: either we include it in our group, or we don't.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function explores these choices.</p>
<ol>
  <li><b>Base Case:</b> If we have considered all the numbers (our index is at the end of the array), we check if the <code>currentSum</code> equals the <code>target</code>. If it does, we've found a solution, so we return <code>true</code>. Otherwise, <code>false</code>.</li>
  <li><b>Recursive Step:</b> For the number at the current `index`:
    <ul>
      <li><b>Choice 1 (Include):</b> Make a recursive call for the next index (<code>index + 1</code>), adding the current number to the sum (<code>currentSum + arr[index]</code>). If this call returns <code>true</code>, we've found a solution.</li>
      <li><b>Choice 2 (Exclude):</b> Make a recursive call for the next index (<code>index + 1</code>) with the sum unchanged (<code>currentSum</code>). If this call returns <code>true</code>, we've also found a solution.</li>
    </ul>
  </li>
  <li>If neither choice leads to a solution, we return <code>false</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Subset Sum Problem</li>
  <li>Recursive Choice (Include/Exclude)</li>
</ul>
`,
  // problem explanation--> 83
  'recursion-group-sum-clump': `
<h3>💡 Problem Breakdown</h3>
<p>This is a variation of the Group Sum problem with an added constraint: if you choose a number, you must also choose all adjacent numbers that are identical to it (a "clump"). This changes our decision-making process.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function's logic needs to be adapted to handle clumps.</p>
<ol>
  <li><b>Base Case:</b> Same as before: if the index is past the end of the array, check if the sum equals the target.</li>
  <li><b>Recursive Step:</b> At the current `index`:
    <ul>
      <li>First, identify the clump. Find the end of the consecutive block of identical numbers and calculate the sum of this clump.</li>
      <li><b>Choice 1 (Include the Clump):</b> Make a recursive call starting from the index *after* the clump, adding the clump's sum to the current total.</li>
      <li><b>Choice 2 (Exclude the Clump):</b> Make a recursive call starting from the index *after* the clump, with the sum unchanged.</li>
    </ul>
  </li>
  <li>If either choice returns <code>true</code>, a solution exists.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Handling Constraints</li>
  <li>Preprocessing (identifying clumps)</li>
</ul>
`,
  // problem explanation--> 84
  'recursion-magic-index': `
<h3>💡 Problem Breakdown</h3>
<p>A "magic index" is an index `i` where the value at that index, `A[i]`, is equal to `i`. Since the array is sorted, we can use a binary search-like approach to find it faster than a linear scan.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will perform a modified binary search.</p>
<ol>
  <li><b>Base Case:</b> If start > end, the index is not in this range. Return -1.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Find the middle index, `mid`.</li>
      <li>If `arr[mid] === mid`, we've found a magic index. Return `mid`.</li>
      <li><b>The tricky part (if values are not distinct):</b> A magic index could still be on either side.
        <ul>
          <li>Search the left side. The search range is from `start` to `min(mid - 1, arr[mid])`. We can jump ahead because if `arr[mid]` is 5, there's no point looking for a magic index at index 6 on the left.</li>
          <li>If the left search finds something, return it.</li>
          <li>Otherwise, search the right side. The range is from `max(mid + 1, arr[mid])` to `end`.</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
<p>If the integers are distinct, the search is simpler: if `arr[mid] > mid`, search left; if `arr[mid] < mid`, search right.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Search Modification</li>
  <li>Divide and Conquer</li>
</ul>
`,
  // problem explanation--> 85
  'recursion-paint-fill': `
<h3>💡 Problem Breakdown</h3>
<p>This problem is identical to "Flood Fill" (problem #67). It's a classic algorithm for filling a contiguous area of a single color with a new color. The recursive nature comes from the "spreading" of the paint to adjacent, same-colored pixels.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive Depth-First Search (DFS) is the most intuitive approach.</p>
<ol>
  <li><b>Initial Setup:</b> Get the original color at the start point (r, c). If it's already the new color, do nothing.</li>
  <li><b>Recursive Helper (DFS):</b>
    <ul>
      <li><b>Base Cases:</b> Stop recursing if the current coordinates (row, col) are out of the screen's bounds, or if the color at the current coordinate is not the original color we're trying to replace.</li>
      <li><b>Recursive Step:</b>
        <ol>
          <li>Set the color of the current coordinate to the new color. This is the "fill" action and also prevents infinite loops by acting as a "visited" marker for this fill operation.</li>
          <li>Make four recursive calls: for the pixel above, below, to the left, and to the right.</li>
        </ol>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Grid Traversal</li>
  <li>Depth-First Search (DFS)</li>
  <li>State change as a visited marker</li>
</ul>
`,
  // problem explanation--> 86
  'recursion-robot-in-a-grid': `
<h3>💡 Problem Breakdown</h3>
<p>This is a pathfinding problem. We need to find a path from the top-left to the bottom-right of a grid, avoiding "off-limits" cells. Since we can only move right and down, we are always making progress towards the goal. A recursive backtracking approach is suitable.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function can try to find a path *backwards* from the destination to the origin. This is often simpler to implement.</p>
<ol>
  <li><b>Base Case 1 (Failure):</b> If the current cell is out of bounds or is an off-limits cell, this is not a valid path. Return <code>false</code>.</li>
  <li><b>Base Case 2 (Success):</b> If the current cell is the origin (top-left), we have successfully found a path. Return <code>true</code>.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Try to find a path by moving up: make a recursive call for the cell <code>(r-1, c)</code>.</li>
      <li>If that doesn't work, try to find a path by moving left: make a recursive call for the cell <code>(r, c-1)</code>.</li>
      <li>If either recursive call returns <code>true</code>, it means a path exists from the current cell. We add the current cell's coordinates to our path list and return <code>true</code>.</li>
    </ul>
  </li>
  <li>If neither direction leads to a solution, this cell is a dead end. To optimize, we can memoize this failed point so we don't explore it again. Return <code>false</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Pathfinding</li>
  <li>Backtracking / DFS</li>
  <li>Memoization of failed paths</li>
</ul>
`,
  // problem explanation--> 87
  'recursion-optimal-bst': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic dynamic programming problem. We want to construct a Binary Search Tree from a given set of keys that minimizes the total search cost, given the search frequency for each key. The cost is the sum of (frequency * level) for each key. The recursive idea is to try every key as the root and calculate the cost.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will find the minimum cost for a BST built from a sub-array of keys.</p>
<ol>
  <li><b>Base Case:</b> If the sub-array is empty (j < i), the cost is 0. If it has one element (j === i), the cost is just its frequency.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Calculate the sum of frequencies for the current range of keys. This will be added to the cost of the subproblems.</li>
      <li>Iterate through each key 'r' in the current range, considering it as the root of the subtree.</li>
      <li>The total cost for this choice is: <code>cost(i, r-1) + cost(r+1, j)</code>. We recursively find the optimal cost for the left and right subtrees.</li>
      <li>Keep track of the minimum cost found among all possible choices of 'r' as the root.</li>
    </ul>
  </li>
  <li>The final result is the minimum cost found, plus the sum of frequencies for the current range.</li>
</ol>
<p>This has many overlapping subproblems and must be memoized.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>Optimal Substructure</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 88
  'recursion-matrix-chain-multiplication': `
<h3>💡 Problem Breakdown</h3>
<p>This is another classic dynamic programming problem. When multiplying a chain of matrices, the order of multiplication can dramatically affect the total number of operations. We need to find the parenthesization that minimizes the operation count. The recursive approach is to find the optimal split point for the last multiplication.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function finds the minimum cost to multiply a sub-chain of matrices from index i to j.</p>
<ol>
  <li><b>Base Case:</b> If we are multiplying a single matrix (i >= j), the cost is 0.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>We iterate through all possible split points 'k' from i to j-1. A split at 'k' means we are computing <code>(M[i]...M[k]) * (M[k+1]...M[j])</code> as the final step.</li>
      <li>The cost for a split at 'k' is:
        <ul>
          <li>The cost to compute the left part: <code>solve(i, k)</code>.</li>
          <li>The cost to compute the right part: <code>solve(k+1, j)</code>.</li>
          <li>The cost to multiply the two resulting matrices together. If matrix A is p x q and B is q x r, the cost is p * q * r.</li>
        </ul>
      </li>
      <li>We keep track of the minimum cost found across all possible split points 'k'.</li>
    </ul>
  </li>
</ol>
<p>This requires memoization to be efficient.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>Optimal Parenthesization</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 89
  'recursion-print-all-subsequences': `
<h3>💡 Problem Breakdown</h3>
<p>A subsequence is formed by deleting zero or more characters from a string while maintaining the relative order of the remaining characters. For "abc", the subsequences are "", "a", "b", "c", "ab", "ac", "bc", "abc". For each character in the string, we have two choices: either we include it in our current subsequence, or we don't.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>This is a classic backtracking problem based on the include/exclude pattern.</p>
<ol>
  <li><b>Base Case:</b> When our index has reached the end of the input string, the "current subsequence" we've built is one of the valid subsequences. We add it to our results.</li>
  <li><b>Recursive Step:</b> For the character at the current `index`:
    <ul>
      <li><b>Choice 1 (Exclude):</b> Make a recursive call for the next index (<code>index + 1</code>), keeping the current subsequence unchanged.</li>
      <li><b>Choice 2 (Include):</b> Make a recursive call for the next index (<code>index + 1</code>), appending the current character to the subsequence.</li>
    </ul>
  </li>
</ol>
<p>By exploring both branches for every character, we generate all 2^n possibilities.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Recursive Choice (Include/Exclude)</li>
  <li>Subsequences</li>
</ul>
`,
  // problem explanation--> 90
  'recursion-check-ab': `
<h3>💡 Problem Breakdown</h3>
<p>This problem asks us to validate a string against a set of recursive rules. This is a pattern matching problem where the rules define a simple grammar. We can write a recursive function that checks the string from left to right, ensuring a rule is satisfied at each step.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Initial Check:</b> The first rule is that the string must begin with 'a'. If not, we can fail immediately.</li>
  <li><b>Recursive Function:</b>
    <ul>
      <li><b>Base Case:</b> If the string is empty, it means all previous characters have followed the rules. Return <code>true</code>.</li>
      <li><b>Recursive Step:</b> Check the first character of the current string slice.
        <ul>
          <li>If it's 'a', it must be followed by nothing, another 'a', or "bb". We check these conditions and recurse on the appropriate substring.</li>
          <li>If it's 'b', it must be part of a "bb" pair that is followed by nothing or an 'a'. We check this and recurse.</li>
          <li>If any character or sequence violates a rule, return <code>false</code>.</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Pattern Matching</li>
  <li>String Slicing</li>
  <li>State Machine (conceptual)</li>
</ul>
`,
  // problem explanation--> 91
  'recursion-staircase-search': `
<h3>💡 Problem Breakdown</h3>
<p>We are given a matrix that is sorted both row-wise and column-wise. This special property allows for a very efficient search that is more like a binary search than a full grid traversal. The key insight is to start at either the top-right or bottom-left corner. Let's start at the top-right.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Start Point:</b> Begin the search at <code>(row=0, col=N-1)</code>.</li>
  <li><b>Base Case:</b> If the row or column goes out of bounds, the element is not in the matrix. Return null.</li>
  <li><b>Recursive Logic:</b>
    <ul>
      <li>Compare the key with the element at the current position.</li>
      <li>If they are equal, we've found it. Return the coordinates.</li>
      <li>If the key is *smaller* than the current element, we know it cannot be in the current column (because all elements below are larger). So, we can eliminate this column and move left: <code>search(row, col - 1)</code>.</li>
      <li>If the key is *larger* than the current element, we know it cannot be in the current row (because all elements to the left are smaller). So, we can eliminate this row and move down: <code>search(row + 1, col)</code>.</li>
    </ul>
  </li>
</ol>
<p>This approach eliminates one row or one column at each step, leading to an efficient O(M+N) search time.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Matrix Properties</li>
  <li>Search Space Reduction</li>
</ul>
`,
  // problem explanation--> 92
  'recursion-friends-pairing': `
<h3>💡 Problem Breakdown</h3>
<p>For 'n' friends, we want to find the total number of ways they can be arranged into singles and pairs. Let's consider the last friend, friend 'n'.
<ul>
  <li><b>Option 1:</b> Friend 'n' remains single. The problem then reduces to finding the number of pairings for the remaining n-1 friends.</li>
  <li><b>Option 2:</b> Friend 'n' pairs up with someone. Friend 'n' has n-1 choices for a partner. Once paired, the problem reduces to finding the number of pairings for the remaining n-2 friends.</li>
</ul>
This gives the recursive relation: <code>f(n) = f(n-1) + (n-1) * f(n-2)</code>.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Cases:</b> If n is 1, there's 1 way (single). If n is 2, there are 2 ways (both single, or paired). So, if n <= 2, return n.</li>
  <li><b>Recursive Step:</b> For any n > 2, we directly apply the formula derived above: <code>solve(n - 1) + (n - 1) * solve(n - 2)</code>.</li>
</ol>
<p>This should be memoized to avoid re-computing the same subproblems.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Relation</li>
  <li>Combinatorics</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 93
  'recursion-all-indices-of-number': `
<h3>💡 Problem Breakdown</h3>
<p>The goal is to find every index where a number 'x' appears in an array. A recursive approach can build the list of indices as the call stack unwinds.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li>The recursive function takes the array, the target 'x', and the current `index` to check.</li>
  <li><b>Base Case:</b> If the `index` reaches the end of the array, there are no more indices to find. Return an empty array.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>First, make a recursive call for the rest of the array: <code>find(index + 1)</code>. This will return an array of all indices found in the part of the array we haven't checked yet.</li>
      <li>Then, check the element at the current `index`.</li>
      <li>If <code>arr[index] === x</code>, we prepend the current `index` to the array of indices returned by the recursive call.</li>
      <li>If it doesn't match, we simply return the result from the recursive call unchanged.</li>
    </ul>
  </li>
</ol>
<p>This post-order processing style builds the final array correctly.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Post-order processing</li>
  <li>Passing state (index) through parameters</li>
</ul>
`,
  // problem explanation--> 94
  'recursion-power-set-lexicographical': `
<h3>💡 Problem Breakdown</h3>
<p>This is a variation of the standard power set (subsequences) problem. The additional requirement is that the final list of subsequences must be sorted lexicographically (alphabetically). For "cab", the sorted string is "abc", and the result should be sorted: "", "a", "ab", "abc", "ac", "b", "bc", "c".</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The key is to sort the input string first. Then, a standard backtracking approach that builds the subsequences will naturally generate them in lexicographical order.</p>
<ol>
  <li>Sort the input string first (e.g., "cab" -> "abc").</li>
  <li>Use a backtracking helper function.</li>
  <li><b>Recursive Logic:</b>
    <ul>
      <li>At each step, add the current path to the results.</li>
      <li>Loop from the current `start` index to the end of the sorted string.</li>
      <li>"Choose": Append the character `sortedStr[i]` to the current path.</li>
      <li>"Explore": Recurse, starting from the next index `i + 1`.</li>
      <li>"Unchoose": Backtrack by removing the character.</li>
    </ul>
  </li>
</ol>
<p>Because we iterate through the sorted string and always move forward (<code>i + 1</code>), the subsequences are generated in the desired order.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Subsequences</li>
  <li>Lexicographical Order</li>
  <li>Sorting as a prerequisite</li>
</ul>
`,
  // problem explanation--> 95
  'recursion-combination-sum-ii': `
<h3>💡 Problem Breakdown</h3>
<p>This is a variation of the Combination Sum problem. There are two key differences: 1. The input array can have duplicates. 2. Each number can be used only once in a combination. The goal is to find all *unique* combinations that sum to the target.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>Sorting the input is crucial for handling the duplicates.</p>
<ol>
  <li>Sort the `candidates` array.</li>
  <li>Use a backtracking helper function.</li>
  <li><b>Base Cases:</b> If the sum equals the target, add the path to results. If the sum exceeds the target, stop this path.</li>
  <li><b>Recursive Step:</b> Loop from the `start` index.
    <ul>
      <li><b>Duplicate Handling:</b> The key condition is: if the current index `i` is greater than the `start` index and the current number is the same as the previous one (<code>candidates[i] === candidates[i-1]</code>), we skip it. This ensures that we only generate combinations starting with the first occurrence of a duplicate number, preventing duplicate combinations.</li>
      <li>"Choose": Add `candidates[i]` to the path.</li>
      <li>"Explore": Recurse, starting from the *next* index (<code>i + 1</code>), as each number can be used only once.</li>
      <li>"Unchoose": Backtrack by removing the number.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Handling Duplicates</li>
  <li>Combinatorics</li>
</ul>
`,
  // problem explanation--> 96
  'recursion-beautiful-arrangement': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the number of permutations of numbers 1 to 'n' that satisfy a specific divisibility rule. This is a counting problem that can be solved by exploring all permutations and checking if they are "beautiful". This is a classic backtracking problem.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will try to place a number at each position in the permutation.</p>
<ol>
  <li>We use a `visited` array to keep track of which numbers (1 to n) have been placed in our permutation so far.</li>
  <li><b>Base Case:</b> If the position we are trying to fill (`index`) is greater than 'n', it means we have successfully placed a number at all positions from 1 to n. We have found one beautiful arrangement, so we increment our global count.</li>
  <li><b>Recursive Step:</b> We iterate through all numbers `i` from 1 to 'n'.
    <ul>
      <li>Check if the number `i` has already been used (is visited).</li>
      <li>If not, check if placing `i` at the current `index` satisfies the beautiful arrangement rule: <code>(i % index === 0 || index % i === 0)</code>.</li>
      <li>If both conditions are met, "choose" the number `i`: mark it as visited.</li>
      <li>"Explore": Make a recursive call to place a number at the next position (<code>index + 1</code>).</li>
      <li>"Unchoose": Backtrack by marking the number `i` as not visited.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Permutations with Constraints</li>
  <li>State Management (visited array)</li>
</ul>
`,
  // problem explanation--> 97
  'recursion-target-sum': `
<h3>💡 Problem Breakdown</h3>
<p>Given an array of numbers, we need to find how many ways we can assign a '+' or '-' sign to each number such that the sum of the resulting expression equals a target. For each number, we have two choices, which suggests a recursive, backtracking approach.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function explores the choices for each number.</p>
<ol>
  <li>The function will take the current `index` and the `currentSum` as parameters.</li>
  <li><b>Base Case:</b> When the `index` reaches the end of the array, we have processed all numbers. We check if the `currentSum` equals the `target`. If it does, we have found one valid way, so we return 1. Otherwise, we return 0.</li>
  <li><b>Recursive Step:</b> For the number at the current `index`:
    <ul>
      <li><b>Choice 1 (Add):</b> Make a recursive call for the next index (<code>index + 1</code>), adding the current number to the sum (<code>currentSum + nums[index]</code>).</li>
      <li><b>Choice 2 (Subtract):</b> Make a recursive call for the next index (<code>index + 1</code>), subtracting the current number from the sum (<code>currentSum - nums[index]</code>).</li>
    </ul>
  </li>
  <li>The total number of ways is the sum of the results from the "add" and "subtract" branches.</li>
</ol>
<p>This has overlapping subproblems and should be optimized with memoization.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking / DFS</li>
  <li>Recursive Choice</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 98
  'recursion-permutations-in-string': `
<h3>💡 Problem Breakdown</h3>
<p>This problem asks if any permutation of a short string `s1` exists as a substring within a longer string `s2`. This is not a recursion problem in its optimal form; it's a classic "sliding window" problem. The core idea is that any permutation of `s1` will have the exact same character counts. We can slide a window of `s1.length` across `s2` and check if the character counts inside the window match the counts for `s1`.</p>
<h3>⚙️ Solution Walkthrough (Sliding Window Approach)</h3>
<ol>
    <li>First, calculate the character frequency map (or an array of 26 integers) for the pattern string `s1`.</li>
    <li>Create a second frequency map for the first `s1.length` characters of `s2`.</li>
    <li>Slide a window across `s2`:
        <ul>
            <li>In each step, compare the frequency map of the current window with the map of `s1`. If they match, return `true`.</li>
            <li>To "slide" the window, add the character entering the window on the right to the window's frequency map, and remove the character leaving the window on the left.</li>
        </ul>
    </li>
    <li>If the loop finishes without finding a match, return `false`.</li>
</ol>
<p>A recursive solution would involve generating all permutations of `s1` and checking if each is a substring of `s2`, but this would be highly inefficient (factorial time complexity).</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Sliding Window Algorithm</li>
  <li>Frequency Maps / Hash Maps</li>
  <li>Anagrams</li>
</ul>
`,
  // problem explanation--> 99
  'recursion-shopping-offers': `
<h3>💡 Problem Breakdown</h3>
<p>We want to find the minimum cost to purchase a list of needed items, given individual prices and special package offers. This is an optimization problem. At any point, we have a choice: either buy an item individually or use a special offer (if it doesn't give us more items than we need). This choice structure suggests a recursive approach.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function's state will be the current list of `needs`.</p>
<ol>
  <li><b>Base Case:</b> The "base" cost for the current `needs` is to buy everything individually. Calculate this cost. This is our initial `minPrice`.</li>
  <li><b>Recursive Step:</b> Iterate through each `special` offer.
    <ul>
      <li>For an offer to be usable, we must need at least as many of each item as the offer provides.</li>
      <li>If the offer is usable, calculate the `nextNeeds` array by subtracting the offer's items from our current needs.</li>
      <li>The cost of this path is the offer's price plus the result of a recursive call with the `nextNeeds`.</li>
      <li>Update `minPrice = Math.min(minPrice, cost_of_this_path)`.</li>
    </ul>
  </li>
  <li>Return the final `minPrice`.</li>
</ol>
<p>The state (`needs` array) can be converted to a string to be used as a key for memoization, which is crucial for performance.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking / DFS</li>
  <li>Optimization Problem</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 100
  'recursion-wildcard-matching': `
<h3>💡 Problem Breakdown</h3>
<p>This is another complex string matching problem, similar to Regular Expression Matching but with slightly different rules for the wildcard character '*'. Here, '*' can match any sequence of characters (including an empty one), but it doesn't depend on the preceding character.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will track indices in the string (i) and pattern (j).</p>
<ol>
  <li><b>Base Cases:</b>
    <ul>
      <li>If we've reached the end of both the string and the pattern, it's a match.</li>
      <li>If we've reached the end of the pattern but not the string, it's a mismatch.</li>
      <li>If we've reached the end of the string but not the pattern, it's a match only if the rest of the pattern consists of only '*'.</li>
    </ul>
  </li>
  <li><b>Recursive Step:</b>
    <ul>
      <li><b>If `p[j]` is '*':</b> We have two choices:
        <ol>
          <li>The '*' matches an empty sequence. We ignore the '*' and continue matching from the next character in the pattern: <code>solve(i, j + 1)</code>.</li>
          <li>The '*' matches one or more characters. We match one character in the string and continue matching from the *same* pattern position (the '*' can keep matching): <code>solve(i + 1, j)</code>.</li>
        </ol>
        The result is true if either choice leads to a match.
      </li>
      <li><b>If `p[j]` is '?':</b> It matches any single character. We must match `s[i]`, so we continue with <code>solve(i + 1, j + 1)</code>.</li>
      <li><b>If `p[j]` is a letter:</b> It must match `s[i]`. If it does, we continue with <code>solve(i + 1, j + 1)</code>. If not, it's a mismatch.</li>
    </ul>
  </li>
</ol>
<p>Memoization is required for an efficient solution.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming with Recursion</li>
  <li>Memoization</li>
  <li>Wildcard Matching</li>
</ul>
`,

  // problem explanation--> 101
  'recursion-print-nodes-at-k-distance': `
<h3>💡 Problem Breakdown</h3>
<p>This is a challenging tree problem because it requires traversing not just downwards (to children) but also upwards (to parents). A standard DFS/BFS from the target node only covers its descendants. To solve this, we need to treat the tree like a graph.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Step 1: Build Parent Pointers.</b> First, traverse the entire tree once to create a map where each node points to its parent. This allows us to move upwards. Also, find the reference to the target node during this traversal.</li>
  <li><b>Step 2: Graph Traversal from Target.</b> Starting from the target node, perform a graph traversal (like BFS or DFS). A queue is often used for BFS to explore layer by layer.
    <ul>
        <li>Use a <code>visited</code> set to ensure we don't visit the same node twice (which would cause an infinite loop when moving between parent and child).</li>
        <li>The state in our queue/recursion will be <code>(node, distance)</code>.</li>
        <li>Start with <code>(targetNode, 0)</code>.</li>
        <li>In each step, explore the node's left child, right child, and its parent (from the map), incrementing the distance.</li>
        <li>If the current distance equals 'k', add the node's value to our result list.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Graph Traversal on a Tree</li>
  <li>Converting a tree to a graph representation (implicitly with parent pointers)</li>
  <li>Breadth-First Search (BFS) or Depth-First Search (DFS)</li>
  <li>State management (visited set)</li>
</ul>
`,
  // problem explanation--> 102
  'recursion-flatten-binary-tree-to-linked-list': `
<h3>💡 Problem Breakdown</h3>
<p>The goal is to restructure a binary tree into a shape resembling a linked list, using the <code>right</code> child pointer as the <code>next</code> pointer. The order of nodes in the list must follow a pre-order traversal (Root, Left, Right).</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A clever recursive approach uses a post-order traversal (Right, Left, Root) to build the list backwards. We use a variable outside the recursion (or passed by reference) to keep track of the previously processed node (the "head" of the already-flattened part of the list).</p>
<ol>
  <li>Initialize a <code>prev</code> variable to <code>null</code>. This will point to the node that should come *after* the current node in the final list.</li>
  <li>Define a recursive function <code>flatten(node)</code>.</li>
  <li><b>Base Case:</b> If the node is null, return.</li>
  <li><b>Recursive Step (Post-order):</b>
    <ol>
      <li>First, recurse on the right subtree: <code>flatten(node.right)</code>.</li>
      <li>Then, recurse on the left subtree: <code>flatten(node.left)</code>.</li>
      <li><b>Process the current node:</b> After the right and left subtrees have been flattened, we rewire the current node.
        <ul>
          <li>Set <code>node.right</code> to the <code>prev</code> node (which is the head of the just-processed right subtree).</li>
          <li>Set <code>node.left</code> to <code>null</code>.</li>
          <li>Update <code>prev</code> to be the current node, making it the new "head" for the next node up the call stack.</li>
        </ul>
      </li>
    </ol>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal (specifically, a reverse pre-order or post-order approach)</li>
  <li>In-place modification of data structures</li>
  <li>Using an external pointer/state across recursive calls</li>
</ul>
`,
  // problem explanation--> 103
  'recursion-partition-to-k-equal-sum-subsets': `
<h3>💡 Problem Breakdown</h3>
<p>This is a hard backtracking problem. We need to determine if we can partition an array into 'k' subsets, each having the same sum. It's a variation of the subset sum problem, but for multiple subsets simultaneously.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Initial Checks:</b>
    <ul>
      <li>Calculate the total sum of the array. If this sum is not divisible by 'k', it's impossible. Return <code>false</code>.</li>
      <li>The target sum for each subset is <code>totalSum / k</code>.</li>
      <li>Sorting the input array in descending order can be a powerful optimization, as it helps prune the search space earlier.</li>
    </ul>
  </li>
  <li><b>Backtracking Function:</b> The function will try to place each number from the input array into one of the 'k' subset "buckets".
    <ul>
      <li>The state of our recursion can be the index of the number we are currently trying to place.</li>
      <li><b>Base Case:</b> If we have placed all numbers (index reaches the end of the array), we have succeeded. Return <code>true</code>.</li>
      <li><b>Recursive Step:</b> For the current number <code>nums[index]</code>, iterate through the 'k' subset sums.
        <ul>
          <li>Try to add the current number to the i-th subset. If the new sum does not exceed the <code>targetSum</code>, "choose" it.</li>
          <li>"Explore": Make a recursive call to place the next number (<code>index + 1</code>). If this call returns <code>true</code>, we have found a solution, so propagate <code>true</code> up.</li>
          <li>"Unchoose" (Backtrack): If the recursive call failed, remove the current number from the i-th subset's sum to explore other possibilities.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>If the loop finishes without finding a valid placement for the current number, return <code>false</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Partition Problem</li>
  <li>Pruning the search space</li>
</ul>
`,
  // problem explanation--> 104
  'recursion-construct-quad-tree': `
<h3>💡 Problem Breakdown</h3>
<p>A Quad Tree is a way to represent a grid. If a grid region is homogeneous (all 0s or all 1s), it's represented by a leaf node. If it's not homogeneous, it's an internal node with four children, each representing a quadrant of that region. This structure is inherently recursive.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will take the coordinates and size of the current sub-grid it's responsible for.</p>
<ol>
  <li><b>Check for Homogeneity:</b> The first step is to check if all values in the current sub-grid are the same. Loop through the cells and compare them to the top-left cell's value.</li>
  <li><b>Base Case (Homogeneous):</b> If all values are the same, create and return a leaf node. The node's value is the common value in the grid, and <code>isLeaf</code> is true.</li>
  <li><b>Recursive Step (Not Homogeneous):</b> If the values are different:
    <ul>
      <li>Create an internal node (<code>isLeaf</code> is false).</li>
      <li>Calculate the size of the quadrants (<code>size / 2</code>).</li>
      <li>Make four recursive calls, one for each quadrant, passing the correct starting coordinates and the new size.
        <ul>
          <li>Top-Left: <code>solve(r, c, half)</code></li>
          <li>Top-Right: <code>solve(r, c + half, half)</code></li>
          <li>Bottom-Left: <code>solve(r + half, c, half)</code></li>
          <li>Bottom-Right: <code>solve(r + half, c + half, half)</code></li>
        </ul>
      </li>
      <li>Assign the results of these calls to the corresponding children of the internal node.</li>
      <li>Return the internal node.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Quad Tree</li>
  <li>Recursive Decomposition</li>
  <li>Divide and Conquer</li>
  <li>Grid Processing</li>
</ul>
`,
  // problem explanation--> 105
  'recursion-verbal-arithmetic-puzzle': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic constraint satisfaction problem that can be solved with backtracking. We need to assign a unique digit (0-9) to each unique letter such that the arithmetic equation holds true. There are additional constraints, like the leading letter of a number cannot be assigned the digit 0.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Preparation:</b>
    <ul>
      <li>Extract all unique characters from the words and the result.</li>
      <li>Identify all characters that appear as the first letter of a word with length > 1. These cannot be 0.</li>
    </ul>
  </li>
  <li><b>Backtracking Function:</b> The recursive function will try to assign a digit to each unique character, one by one.
    <ul>
      <li><b>State:</b> The function will track the index of the character we are currently assigning.</li>
      <li><b>Base Case:</b> If we have assigned a digit to every unique character, we then check if the equation is satisfied. If it is, we've found a solution. Return <code>true</code>.</li>
      <li><b>Recursive Step:</b> For the current character, iterate through all possible digits (0-9).
        <ul>
          <li>Check if the digit has already been used.</li>
          <li>Check the leading zero constraint: if the current character is a leading character, it cannot be assigned 0.</li>
          <li>If the digit is valid, "choose" it: map the character to the digit and mark the digit as used.</li>
          <li>"Explore": Make a recursive call for the next character. If this call returns <code>true</code>, propagate the success up by returning <code>true</code>.</li>
          <li>"Unchoose" (Backtrack): If the recursive call failed, undo the assignment: unmap the character and mark the digit as unused.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>If the loop over digits finishes without finding a solution, return <code>false</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Constraint Satisfaction</li>
  <li>Permutations</li>
</ul>
`,
  // problem explanation--> 106
  'recursion-string-to-integer-atoi': `
<h3>💡 Problem Breakdown</h3>
<p>The goal is to parse an integer from a string, following specific rules: ignore leading whitespace, handle an optional sign, read digits until a non-digit character is found, and handle overflow by clamping the result to the 32-bit integer range. While typically done iteratively, it can be framed recursively.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive helper function can be used to process the digits after the initial whitespace and sign are handled.</p>
<ol>
    <li><b>Preprocessing:</b> First, iteratively move an index past any leading whitespace. Then, check for a '+' or '-' sign and store it.</li>
    <li><b>Recursive Helper:</b> This function takes the current index, the sign, and the number built so far.
        <ul>
            <li><b>Base Case:</b> If the index reaches the end of the string, or the character at the index is not a digit, the number is complete. Return the final value (<code>value * sign</code>), clamped to the 32-bit range.</li>
            <li><b>Overflow Check:</b> Before adding the next digit, check if doing so would cause an overflow. If <code>value</code> is already greater than <code>(MAX_INT / 10)</code>, or if it's equal and the next digit is too large, return the clamped max/min value.</li>
            <li><b>Recursive Step:</b> If no overflow, append the new digit (<code>value * 10 + digit</code>) and recurse on the next index (<code>index + 1</code>).</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>String Parsing</li>
  <li>State management through parameters</li>
  <li>Edge Case Handling (whitespace, sign, overflow)</li>
</ul>
`,
  // problem explanation--> 107
  'recursion-reverse-nodes-in-k-group': `
<h3>💡 Problem Breakdown</h3>
<p>This is a challenging linked list problem. We need to reverse the list in segments of size 'k'. The core of the problem is a standard list reversal, but we need to manage the connections between the reversed segments.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>Recursion provides an elegant way to structure the solution. The function will reverse one group of 'k' nodes and then recursively call itself to handle the rest of the list.</p>
<ol>
  <li><b>Base Case / Pre-check:</b> First, check if there are at least 'k' nodes remaining from the current head. Traverse 'k' nodes. If you reach the end before 'k' nodes, then this last segment is too short and should not be reversed. Return the original head of this segment.</li>
  <li><b>Reverse one group:</b> If there are enough nodes, iteratively reverse the next 'k' nodes. Keep track of the new head of this reversed group. The original head of this group becomes the new tail.</li>
  <li><b>Recursive Step:</b> The new tail's <code>next</code> pointer should point to the result of the recursive call on the rest of the list (which starts at the (k+1)-th node). <code>original_head.next = reverseKGroup(k_plus_1_node, k)</code>.</li>
  <li>Return the new head of the reversed group.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Linked Lists</li>
  <li>List Reversal (iterative sub-problem)</li>
  <li>Managing connections between sub-problems</li>
</ul>
`,
  // problem explanation--> 108
  'recursion-remove-invalid-parentheses': `
<h3>💡 Problem Breakdown</h3>
<p>The goal is to find all possible valid strings by removing the minimum number of parentheses. This implies a search problem. Since we want the minimum removals, we are looking for the longest possible valid strings. A Breadth-First Search (BFS) is a natural fit, but a recursive Depth-First Search (DFS) can also be used, though it's more complex to manage the "minimum removal" constraint.</p>
<h3>⚙️ Solution Walkthrough (DFS/Backtracking)</h3>
<p>A pure DFS would explore all 2^n possibilities of keeping/removing each parenthesis, which is too slow. A more optimized DFS approach is needed.</p>
<ol>
    <li><b>First Pass (Find Min Removals):</b> First, iterate through the string to determine the number of left and right parentheses that *must* be removed to have a chance at a valid string.</li>
    <li><b>Backtracking Function:</b> The recursive function will explore removal combinations.
        <ul>
            <li><b>State:</b> Track the current index, the counts of left/right parentheses to remove, and the current balance of open parentheses.</li>
            <li><b>Base Case:</b> If we reach the end of the string, and the counts of removals are zero and the balance is zero, we have a valid string. Add it to a set to handle duplicates.</li>
            <li><b>Recursive Step:</b>
                <ul>
                    <li>If the character is a parenthesis, we have two choices: remove it (if our removal count for it is > 0) or keep it. We make recursive calls for both choices.</li>
                    <li>If it's a letter, we must keep it. Recurse on the next index.</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking / DFS</li>
  <li>Parentheses Validation</li>
  <li>State management (multiple counters)</li>
  <li>Set for handling duplicates</li>
</ul>
`,
  // problem explanation--> 109
  'recursion-split-array-into-fibonacci-sequence': `
<h3>💡 Problem Breakdown</h3>
<p>We need to partition a string of digits into a sequence of numbers that form a Fibonacci sequence. The numbers can have varying lengths. This is a backtracking problem where we try all possible ways to partition the string.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will try to find the next number in the sequence starting from a given index.</p>
<ol>
  <li>The state of our backtracking function will be the current `index` in the digit string and the `path` (the list of numbers found so far).</li>
  <li><b>Base Case:</b> If the `index` reaches the end of the string, we have successfully partitioned the whole string. If the path has at least 3 numbers, it's a valid Fibonacci sequence. Return <code>true</code>.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Iterate from the current `index` to the end of the string to form the next potential number.</li>
      <li>Handle leading zeros: a number longer than one digit cannot start with '0'.</li>
      <li>Check the Fibonacci property:
        <ul>
          <li>If the path has fewer than 2 numbers, any valid number can be chosen.</li>
          <li>If the path has 2 or more numbers, the current number must be the sum of the last two numbers in the path. If it's smaller, continue the loop to make the number bigger. If it's larger, we can prune this path and break the loop.</li>
        </ul>
      </li>
      <li>If the number is valid, "choose" it (add to path), "explore" with a recursive call for the next index, and if it succeeds, return <code>true</code>. If not, "unchoose" it (remove from path) and continue the loop.</li>
    </ul>
  </li>
  <li>If the loop finishes without finding a valid next number, return <code>false</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>String Partitioning</li>
  <li>Pruning the search space</li>
</ul>
`,
  // problem explanation--> 110
  'recursion-solve-the-maze': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic pathfinding problem on a grid. We need to determine if a path exists from a start to a destination, avoiding walls. A Depth-First Search (DFS) is a natural recursive way to explore the maze.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive DFS function explores from a given cell.</p>
<ol>
  <li>We need a way to keep track of visited cells to avoid infinite loops. A 2D array or a Set of coordinate strings can be used.</li>
  <li><b>Base Cases:</b>
    <ul>
      <li>If the current cell is out of bounds, a wall, or already visited, this path is invalid. Return <code>false</code>.</li>
      <li>If the current cell is the destination, we've found a path. Return <code>true</code>.</li>
    </ul>
  </li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Mark the current cell as visited.</li>
      <li>Make recursive calls for all four neighbors (up, down, left, right).</li>
      <li>If *any* of the recursive calls return <code>true</code>, it means a path was found from that neighbor. We propagate this success by returning <code>true</code>.</li>
    </ul>
  </li>
  <li>If all recursive calls return <code>false</code>, there is no path from the current cell. Return <code>false</code>. (Note: For some problems, you might need to backtrack by un-marking the cell as visited here, but for simple path existence, it's not strictly necessary).</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Grid Traversal</li>
  <li>Depth-First Search (DFS)</li>
  <li>Pathfinding</li>
  <li>State management (visited set)</li>
</ul>
`,
  // problem explanation--> 111
  'recursion-number-of-islands': `
<h3>💡 Problem Breakdown</h3>
<p>This problem involves counting connected components in a grid. An "island" is a group of connected '1's. The strategy is to scan the grid. Whenever we find a '1' that we haven't visited yet, we know we've found a new island. We then use a recursive search (like DFS) to find all parts of that same island and mark them as visited so we don't count them again.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li>Initialize an <code>island_count</code> to 0.</li>
  <li>Iterate through every cell of the grid.</li>
  <li>If a cell contains a '1':
    <ul>
      <li>Increment <code>island_count</code>.</li>
      <li>Call a recursive helper function (DFS) to "sink" the island. This function will find all connected '1's and change them to '0's (or another marker) to mark them as visited.</li>
    </ul>
  </li>
  <li><b>Recursive Helper (DFS):</b>
    <ul>
      <li><b>Base Case:</b> Stop if the cell is out of bounds or is water ('0').</li>
      <li><b>Recursive Step:</b> Change the current cell from '1' to '0'. Then, make recursive calls for all four neighbors (up, down, left, right).</li>
    </ul>
  </li>
  <li>Return <code>island_count</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Grid Traversal</li>
  <li>Depth-First Search (DFS)</li>
  <li>Connected Components</li>
  <li>In-place modification as a visited marker</li>
</ul>
`,
  // problem explanation--> 112
  'recursion-longest-increasing-path-in-matrix': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the longest path in a matrix where each step moves to an adjacent cell with a strictly greater value. Since a path can start from any cell, we need to find the longest path starting from *every* cell and then take the maximum of all of them. This suggests a recursive DFS approach from each cell.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>To avoid re-computing the longest path from a cell multiple times, we use memoization.</p>
<ol>
  <li>Initialize a memoization cache (a 2D array of the same size as the matrix) to store the results.</li>
  <li><b>Recursive Helper (DFS):</b> This function will find the length of the longest increasing path *starting* from cell (r, c).
    <ul>
      <li>If the result for (r, c) is already in the cache, return it.</li>
      <li>Initialize <code>maxPath</code> for the current cell to 1 (the cell itself).</li>
      <li>Explore all four neighbors. For each neighbor (nr, nc):
        <ul>
          <li>If the neighbor is in bounds and its value is greater than the current cell's value, make a recursive call: <code>1 + dfs(nr, nc)</code>.</li>
          <li>Update <code>maxPath</code> with the maximum length found among all valid neighbors.</li>
        </ul>
      </li>
      <li>Store <code>maxPath</code> in the cache and return it.</li>
    </ul>
  </li>
  <li><b>Main Loop:</b> Iterate through every cell in the matrix, calling the DFS helper for each one. Keep track of the overall maximum length found.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Depth-First Search (DFS)</li>
  <li>Memoization / Dynamic Programming</li>
  <li>Grid Traversal</li>
</ul>
`,
  // problem explanation--> 113
  'recursion-restore-ip-addresses': `
<h3>💡 Problem Breakdown</h3>
<p>An IP address has four parts (octets), each ranging from 0 to 255. We need to find all the ways to insert three dots into a digit string to form a valid IP address. This is a partitioning problem that can be solved with backtracking.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will try to form the next valid part of the IP address.</p>
<ol>
  <li><b>State:</b> The function will track the current `index` in the string and the `path` (an array of the IP parts found so far).</li>
  <li><b>Base Case:</b> If we have found 4 parts and we have used up the entire string (<code>path.length === 4 && index === s.length</code>), we have found a valid IP address. Join the parts with dots and add to the results.</li>
  <li><b>Failure Conditions:</b> If we have 4 parts but haven't used the whole string, or if we've used the whole string but don't have 4 parts, this path is invalid.</li>
  <li><b>Recursive Step:</b> Loop to create the next part of the IP. A part can be 1, 2, or 3 digits long.
    <ul>
      <li>For each possible length (1 to 3), extract the substring.</li>
      <li><b>Validate the part:</b>
        <ul>
          <li>It cannot have a leading zero unless it is just "0".</li>
          <li>Its integer value must be <= 255.</li>
        </ul>
      </li>
      <li>If the part is valid, "choose" it (add to path), "explore" with a recursive call for the next index, and then "unchoose" (remove from path) to backtrack.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>String Partitioning</li>
  <li>Constraint Validation</li>
</ul>
`,
  // problem explanation--> 114
  'recursion-word-squares': `
<h3>💡 Problem Breakdown</h3>
<p>A word square is a set of words where the k-th row and k-th column are identical for all k. For a square of size N, this means that for the word at row `i`, its j-th character must be the same as the i-th character of the word at row `j`. This constraint suggests a backtracking approach where we build the square row by row.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Preprocessing:</b> To efficiently find words that can fit in the next row, we need a way to search for words with a specific prefix. A Trie is ideal, but a simpler hash map from prefixes to words also works. For each word, generate all its prefixes and store the word in the map under each prefix.</li>
  <li><b>Backtracking Function:</b> The function will try to find a valid word for the next row.
    <ul>
      <li><b>State:</b> The current row number we are trying to fill (`step`) and the current `path` (the list of words forming the square so far).</li>
      <li><b>Base Case:</b> If `step` equals the word length, we have a complete square. Add it to the results.</li>
      <li><b>Recursive Step:</b>
        <ol>
          <li>Determine the required prefix for the next word. The prefix is formed by taking the `step`-th character from each word already in our path.</li>
          <li>Look up this prefix in our precomputed map to get a list of candidate words.</li>
          <li>For each candidate word, "choose" it, "explore" by recursing for the next step, and then "unchoose" to backtrack.</li>
        </ol>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Prefix Trees (Trie) or Prefix Maps for efficient lookup</li>
  <li>Constraint Propagation</li>
</ul>
`,
  // problem explanation--> 115
  'recursion-optimal-account-balancing': `
<h3>💡 Problem Breakdown</h3>
<p>This is a hard problem about settling debts. The key insight is to first calculate the net balance for each person. Some will have a positive balance (creditors), and some will have a negative balance (debtors). The problem then becomes finding the minimum number of transactions to make all balances zero. This is a matching problem that can be solved with backtracking.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Calculate Balances:</b> Create a map to store the net balance for each person. Iterate through the transactions, decreasing the balance for the sender and increasing it for the receiver.</li>
  <li><b>Filter Debts:</b> Create an array containing only the non-zero balances. This is the set of debts we need to settle.</li>
  <li><b>Backtracking Function:</b> The recursive function will try to settle one person's debt at a time.
    <ul>
      <li><b>State:</b> The `index` of the person in the debt array we are currently trying to settle.</li>
      <li><b>Base Case:</b> If the `index` reaches the end of the debt array, all debts have been settled. It took 0 more transactions. Return 0.</li>
      <li><b>Skip Zeros:</b> If the current person's balance is already 0, skip them and recurse on the next person.</li>
      <li><b>Recursive Step:</b> For the person at `index`, iterate through all subsequent people `i`.
        <ul>
          <li>If person `index` and person `i` can make a transaction (i.e., one is a debtor and one is a creditor), we "try" this transaction: `debts[i] += debts[index]`.</li>
          <li>The cost is 1 (for this transaction) plus the result of a recursive call to settle the rest, starting from `index + 1`.</li>
          <li>Keep track of the minimum cost found across all possible transactions.</li>
          <li>"Unchoose" (Backtrack): Revert the change to `debts[i]`.</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Debt Settlement / Flow Network</li>
  <li>Optimization</li>
</ul>
`,
  // problem explanation--> 116
  'recursion-file-system-traversal': `
<h3>💡 Problem Breakdown</h3>
<p>File systems are inherently hierarchical, making them a perfect fit for recursive traversal. We need to explore a nested object structure and build up file paths as we go deeper. A file is a leaf in this structure, while a directory is an internal node.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>We use a recursive helper function that keeps track of the path to the current directory.</p>
<ol>
  <li>The recursive function takes two arguments: the current `node` (which is an object representing a directory) and the `currentPath` string.</li>
  <li><b>Recursive Logic:</b> Iterate through the keys (file/directory names) in the current `node` object.
    <ul>
      <li>Construct the `newPath` for the current item.</li>
      <li>Check the type of the value associated with the key.
        <ul>
          <li>If it's a string, we've found a file. Add the `newPath` to our results list.</li>
          <li>If it's an object, it's a subdirectory. Make a recursive call, passing the subdirectory object as the new `node` and the `newPath` as the new `currentPath`.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>The main function starts the process by calling the helper with the root of the file system object and an initial empty path.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Tree/Object Traversal</li>
  <li>Depth-First Search (DFS)</li>
  <li>Path construction</li>
</ul>
`,
  // problem explanation--> 117
  'recursion-lca-of-binary-tree': `
<h3>💡 Problem Breakdown</h3>
<p>This is a more general version of the Lowest Common Ancestor problem, as the tree is not a BST. We cannot use the value ordering to guide our search. The LCA of two nodes p and q is the deepest node that has both p and q in its subtrees (one could be in the left, one in the right, or the node itself could be p or q).</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function can be designed to return the LCA if found in its subtree, or one of the nodes (p or q) if found, or null otherwise.</p>
<ol>
  <li><b>Base Cases:</b>
    <ul>
      <li>If the current root is null, return null.</li>
      <li>If the current root's value is p or q, then this node is a potential LCA. Return the root.</li>
    </ul>
  </li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Recursively search for p and q in the left subtree: <code>left = lca(root.left, p, q)</code>.</li>
      <li>Recursively search in the right subtree: <code>right = lca(root.right, p, q)</code>.</li>
    </ul>
  </li>
  <li><b>Combine Results:</b>
    <ul>
      <li>If both <code>left</code> and <code>right</code> are non-null, it means p and q were found in different subtrees. Therefore, the current <code>root</code> is their LCA. Return <code>root</code>.</li>
      <li>If only one of them is non-null, it means both p and q were found in that subtree. The non-null value is the LCA. Return either <code>left</code> or <code>right</code>.</li>
      <li>If both are null, neither p nor q were found in this subtree. Return null.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Tree Traversal (Post-order)</li>
  <li>Lowest Common Ancestor (LCA)</li>
  <li>Combining results from subproblems</li>
</ul>
`,
  // problem explanation--> 118
  'recursion-word-break-ii': `
<h3>💡 Problem Breakdown</h3>
<p>This problem is an extension of Word Break I. Instead of just determining *if* a string can be segmented, we need to find *all* the ways it can be segmented into valid dictionary words. This requires a backtracking approach to explore all valid partitions.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will find all valid sentences for a given suffix of the original string.</p>
<ol>
  <li><b>Base Case:</b> If the input string is empty, it means we've successfully segmented the part of the string leading up to this point. We return an array containing an empty string <code>[""]</code> to signal this success.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Iterate through the dictionary words.</li>
      <li>If the current string `s` starts with a given `word`:
        <ol>
          <li>Make a recursive call with the remaining suffix: <code>solve(s.substring(word.length))</code>.</li>
          <li>This call will return a list of all valid sentences for the suffix.</li>
          <li>For each of these returned sentences, prepend the current `word` (and a space, if needed) to form a complete sentence for the string `s`.</li>
          <li>Add all these newly formed sentences to our result list.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>Return the list of all sentences found.</li>
</ol>
<p>Memoization is crucial. The state to memoize is the list of sentences for each substring.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking / DFS</li>
  <li>String Partitioning</li>
  <li>Memoization</li>
  <li>Building results from subproblems</li>
</ul>
`,
  // problem explanation--> 119
  'recursion-parse-lisp-expression': `
<h3>💡 Problem Breakdown</h3>
<p>This is a challenging parsing and evaluation problem. Lisp expressions are naturally recursive: an expression is a list of other expressions. We need to handle nested scopes for `let` variables, which makes a recursive evaluation strategy with a scope parameter ideal.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The solution has two main parts: a parser and an evaluator.</p>
<ol>
  <li><b>Parser:</b> A recursive function that takes a string and turns it into a nested array structure that represents the expression tree. This isn't the main recursion of the problem but is a prerequisite.</li>
  <li><b>Recursive Evaluator:</b> This function, <code>evaluate(expr, scope)</code>, takes the parsed expression and the current variable scope (a map).
    <ul>
      <li><b>Base Cases:</b>
        <ul>
          <li>If the expression is an integer, return it.</li>
          <li>If it's a variable (a string), look it up in the current `scope` and return its value.</li>
        </ul>
      </li>
      <li><b>Recursive Step (Expression is a list):</b>
        <ul>
          <li><b>`add`/`mult`:** Recursively evaluate the two arguments in the current `scope` and return their sum/product.</li>
          <li><b>`let`:** This is the key part. Create a *new* scope that inherits from the current one. Iterate through the variable assignments in the `let` expression, evaluating the value of each new variable using the *new, evolving scope*. Finally, recursively evaluate the main body of the `let` expression using this fully populated new scope.</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Descent Parsing</li>
  <li>Interpreters</li>
  <li>Scope Management</li>
  <li>Recursion on Expression Trees</li>
</ul>
`,
  // problem explanation--> 120
  'recursion-tree-diameter': `
<h3>💡 Problem Breakdown</h3>
<p>The diameter of a tree is the longest path between any two nodes. This path might go through the root, or it might be entirely contained within the left or right subtree. This suggests a recursive solution where we calculate information about subtrees and combine it.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive function can return the *height* (or depth) of the subtree rooted at the current node. While doing so, it can update a global or "by-reference" variable that tracks the maximum diameter found so far.</p>
<ol>
  <li>Initialize a `diameter` variable to 0.</li>
  <li><b>Recursive Helper (calculates height):</b>
    <ul>
      <li><b>Base Case:</b> If the node is null, its height is 0.</li>
      <li><b>Recursive Step:</b>
        <ol>
          <li>Recursively find the height of the left subtree, <code>leftHeight = height(node.left)</code>.</li>
          <li>Recursively find the height of the right subtree, <code>rightHeight = height(node.right)</code>.</li>
          <li><b>Calculate Diameter at this Node:</b> The longest path that passes *through the current node* as its highest point is <code>leftHeight + rightHeight</code>. Update the global `diameter` with this value if it's larger than the current max.</li>
          <li><b>Return Value:</b> The function must return the height of the current subtree to its parent, which is <code>1 + Math.max(leftHeight, rightHeight)</code>.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>Call the helper on the root and then return the final `diameter`.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal (Post-order)</li>
  <li>Tree Height/Depth</li>
  <li>Using recursion to return one value (height) while updating another (diameter)</li>
</ul>
`,
  // problem explanation--> 121
  'recursion-number-of-atoms': `
<h3>💡 Problem Breakdown</h3>
<p>This is a complex parsing problem. The presence of parentheses indicates a recursive structure. An expression inside parentheses acts like a single "molecule" that gets multiplied by the subsequent number. We can use a recursive approach, where each level of recursion handles one level of parentheses.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive parsing function can process the formula from left to right. A global index is often easiest to manage.</p>
<ol>
    <li>The recursive function <code>parse()</code> returns a map of atom counts for the segment it's responsible for.</li>
    <li><b>Main Loop:</b> The function iterates through the formula string.
        <ul>
            <li><b>If it sees '(':</b> It makes a recursive call to <code>parse()</code> to handle the nested expression. When that returns, it reads the number after the closing ')' and multiplies the counts from the nested map.</li>
            <li><b>If it sees ')':</b> This is the base case for the current level of recursion. It breaks the loop and returns the counts it has accumulated.</li>
            <li><b>If it sees an uppercase letter:</b> It parses the full atom name (e.g., 'Mg') and the subsequent number, then adds it to the current level's count map.</li>
        </ul>
    </li>
    <li>The final result is formatted by sorting the atom names from the top-level map and building the string.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Descent Parsing</li>
  <li>Stack (can be used implicitly by recursion)</li>
  <li>String/Character processing</li>
</ul>
`,
  // problem explanation--> 122
  'recursion-longest-univalue-path': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the longest path of nodes with the same value. This path can be a "straight line" down a branch or can "bend" at a node, going down both its left and right subtrees. This structure is similar to the Tree Diameter problem.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>We use a post-order recursive traversal. The recursive function will return the length of the longest "arrow" (a straight path starting from the current node and going down one branch) of univalue nodes.</p>
<ol>
    <li>Initialize a global <code>maxPath</code> variable to 0.</li>
    <li><b>Recursive Helper (DFS):</b>
        <ul>
            <li><b>Base Case:</b> If the node is null, return 0.</li>
            <li><b>Recursive Step:</b>
                <ol>
                    <li>Recursively get the arrow lengths from the left and right children.</li>
                    <li>Calculate the potential arrow length from the current node to the left (<code>arrowLeft</code>). This is <code>1 + leftLen</code> only if the left child exists and has the same value. Otherwise, it's 0.</li>
                    <li>Do the same for the right child (<code>arrowRight</code>).</li>
                    <li><b>Update Global Max:</b> A path can "bend" at the current node. The length of such a path is <code>arrowLeft + arrowRight</code>. Update the global <code>maxPath</code> with this value.</li>
                    <li><b>Return Value:</b> The function must return the length of the longest straight arrow starting from the current node, which is <code>Math.max(arrowLeft, arrowRight)</code>.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>Call the helper on the root and return <code>maxPath</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal (Post-order)</li>
  <li>Path calculation</li>
  <li>Using recursion to return local info while updating global info</li>
</ul>
`,
  // problem explanation--> 123
  'recursion-24-game': `
<h3>💡 Problem Breakdown</h3>
<p>Given four numbers, we need to see if we can arrange them with the operators +, -, *, / to make 24. This is a backtracking problem where we explore all possible combinations of picking two numbers, applying an operator, and then recursively solving the problem with the new, smaller set of numbers.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Recursive Function State:</b> The function takes a list of the current numbers.</li>
    <li><b>Base Case:</b> If the list has only one number, check if it's equal to 24 (allowing for floating-point inaccuracies).</li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>Pick any two distinct numbers (<code>a</code> and <code>b</code>) from the list.</li>
            <li>Create a new list containing the remaining numbers.</li>
            <li>For each operator (+, -, *, /):
                <ol>
                    <li>Calculate the result (e.g., <code>a + b</code>).</li>
                    <li>Make a recursive call with the new list plus this result.</li>
                    <li>If any recursive call returns <code>true</code>, a solution exists. Propagate <code>true</code> up.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>If all combinations of numbers and operators have been tried and none resulted in a solution, return <code>false</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Permutations and Combinations</li>
  <li>Handling all operator possibilities</li>
</ul>
`,
  // problem explanation--> 124
  'recursion-cracking-the-safe': `
<h3>💡 Problem Breakdown</h3>
<p>This is a very hard problem related to De Bruijn sequences. The goal is to find the shortest string that contains every possible n-digit password (using k digits) as a substring. The shortest superstring is formed by overlapping these passwords as much as possible. This can be modeled as finding a Hamiltonian path in a graph where nodes are passwords and edges represent overlaps.</p>
<h3>⚙️ Solution Walkthrough (DFS)</h3>
<p>A more direct approach is a DFS that builds the result string directly.</p>
<ol>
    <li>The nodes in our graph are the <code>k^(n-1)</code> possible prefixes of length <code>n-1</code>. An edge from one prefix to another exists if they overlap. The goal is to visit every possible full password of length `n`.</li>
    <li>Start with a password of n zeros. This is our initial string.</li>
    <li>Use a <code>visited</code> set to keep track of the n-digit passwords we have formed.</li>
    <li><b>Recursive DFS:</b>
        <ul>
            <li><b>Base Case:</b> If we have visited all <code>k^n</code> possible passwords, we have succeeded.</li>
            <li><b>Recursive Step:</b> Consider the last <code>n-1</code> digits of our current result string. This is our current "prefix" node. Try appending each of the `k` possible digits (0 to k-1) to form a new n-digit password.
                <ul>
                    <li>If this new password has not been visited, add it to the visited set, append the new digit to our result string, and recurse.</li>
                    <li>If the recursion succeeds, return <code>true</code>.</li>
                    <li>If not, backtrack: remove the digit from the result and from the visited set.</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Graph Theory (De Bruijn graphs, Hamiltonian paths)</li>
  <li>Depth-First Search (DFS)</li>
  <li>Backtracking</li>
</ul>
`,
  // problem explanation--> 125
  'recursion-making-a-large-island': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the largest possible island we can create by changing at most one '0' to a '1'. A brute-force approach would be to try changing every '0', then finding the largest island for each case, but that's too slow. A better approach is to first identify all existing islands and their sizes. Then, for each '0', check which distinct islands it would connect and sum their sizes.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Step 1: Identify and Size Islands.</b>
        <ul>
            <li>Iterate through the grid. When you find a '1', it's part of an unvisited island.</li>
            <li>Start a recursive DFS from this '1'. The DFS should do two things:
                <ol>
                    <li>Count the number of cells in the island.</li>
                    <li>Change the '1's to a unique <code>islandId</code> (starting from 2 to avoid conflict with 0 and 1).</li>
                </ol>
            </li>
            <li>Store the size of this island in a map: <code>islandSizes[islandId] = size</code>.</li>
        </ul>
    </li>
    <li><b>Step 2: Check Zeros.</b>
        <ul>
            <li>Iterate through the grid again. When you find a '0':
                <ol>
                    <li>Look at its four neighbors.</li>
                    <li>Collect the unique <code>islandId</code>s of its neighboring islands into a set.</li>
                    <li>Calculate the potential new island size by summing the sizes of these unique neighboring islands (from your map) and adding 1 (for the '0' itself).</li>
                    <li>Keep track of the maximum potential size found.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>The answer is the maximum of the largest existing island and the largest potential island.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Depth-First Search (DFS)</li>
  <li>Connected Components</li>
  <li>Two-pass algorithm</li>
</ul>
`,
  // problem explanation--> 126
  'recursion-basic-calculator': `
<h3>💡 Problem Breakdown</h3>
<p>This problem requires parsing and evaluating an arithmetic expression with addition, subtraction, and parentheses. The parentheses introduce a recursive structure: an expression inside parentheses can be considered a sub-problem that needs to be evaluated first. A common approach is to use a stack, but recursion can naturally handle the nested structure.</p>
<h3>⚙️ Solution Walkthrough (Recursive)</h3>
<p>We can design a recursive function that evaluates the expression from left to right. A global index is helpful to keep track of our position in the string.</p>
<ol>
  <li>The recursive function will calculate the value of the expression until it hits a closing parenthesis ')' or the end of the string.</li>
  <li><b>State:</b> It maintains a running <code>result</code>, the current <code>num</code> being built, and the current <code>sign</code> (+1 or -1).</li>
  <li><b>Logic:</b> Iterate through the string.
    <ul>
      <li>If the character is a digit, update <code>num</code>.</li>
      <li>If it's '+' or '-', add the previous <code>sign * num</code> to the <code>result</code>, then update the sign and reset <code>num</code>.</li>
      <li><b>If it's '(':</b> This is the recursive step. The value of the expression inside the parentheses is a new number. We set <code>num = solve()</code>, where <code>solve()</code> is a recursive call.</li>
      <li><b>If it's ')':</b> This is the base case for the current recursive call. Add the last number to the result and return.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Descent Parsing</li>
  <li>Expression Evaluation</li>
  <li>State management (implicit stack via recursion)</li>
</ul>
`,
  // problem explanation--> 127
  'recursion-dom-tree-traversal': `
<h3>💡 Problem Breakdown</h3>
<p>A DOM tree, like a file system, is a hierarchical structure. We need to find the first node that matches a given tag name and return its text content. This is a classic tree search problem, which can be solved with a recursive Depth-First Search (DFS).</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li>The recursive function takes the current `node` and the `tagName` to find.</li>
    <li><b>Base Case (Match Found):</b> If the current node's `tag` property matches the `tagName`, we've found our target. Return its `text` property.</li>
    <li><b>Recursive Step:</b> If the current node is not a match, we need to search its children.
        <ul>
            <li>Check if the node has a `children` array.</li>
            <li>If it does, iterate through each `child` in the array.</li>
            <li>Make a recursive call for each `child`.</li>
            <li>If any recursive call returns a non-null result, it means the tag was found in that subtree. We should immediately stop searching and return that result to propagate it up the call stack.</li>
        </ul>
    </li>
    <li><b>Base Case (Not Found):</b> If we've searched the entire subtree rooted at the current node without finding the tag, return null.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal</li>
  <li>Depth-First Search (DFS)</li>
  <li>Early exit on success</li>
</ul>
`,
  // problem explanation--> 128
  'recursion-rod-cutting': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic dynamic programming problem. We have a rod of length 'n' and want to cut it into pieces to maximize the total price. For a rod of length 'n', we can make a cut at any position 'i' (from 1 to n). This gives us a piece of length 'i' and a remaining rod of length 'n-i'. The total value would be the price of the piece of length 'i' plus the maximum value we can get from the remaining rod of length 'n-i'.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will find the maximum value for a rod of a given length.</p>
<ol>
    <li><b>State:</b> The function <code>solve(len)</code> will compute the max value for a rod of length <code>len</code>.</li>
    <li><b>Base Case:</b> If the length is 0 or less, we can't get any value. Return 0.</li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>Initialize a <code>maxValue</code> to -1.</li>
            <li>Iterate a cut position `i` from 1 to `len`.</li>
            <li>For each cut, the value is <code>price[i-1] + solve(len - i)</code>.</li>
            <li>Update <code>maxValue</code> with the maximum value found across all possible first cuts `i`.</li>
        </ul>
    </li>
    <li>Return <code>maxValue</code>.</li>
</ol>
<p>This has many overlapping subproblems (e.g., <code>solve(2)</code> will be calculated many times), so it must be optimized with memoization.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>Optimal Substructure</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 129
  'recursion-longest-palindromic-subsequence': `
<h3>💡 Problem Breakdown</h3>
<p>This is different from finding the longest palindromic *substring*. A subsequence doesn't have to be contiguous. For "bbbab", the longest palindromic subsequence is "bbbb". The recursive approach considers the characters at the ends of the string.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will find the length for a substring defined by start (l) and end (r) indices.</p>
<ol>
    <li><b>Base Cases:</b>
        <ul>
            <li>If l > r, the string is empty, length is 0.</li>
            <li>If l === r, the string has one character, which is a palindrome of length 1.</li>
        </ul>
    </li>
    <li><b>Recursive Step:</b>
        <ul>
            <li><b>If `s[l] === s[r]`:** The characters at the ends match. They can be part of the palindrome. The total length is 2 plus the length of the LPS of the inner string: <code>2 + solve(l + 1, r - 1)</code>.</li>
            <li><b>If `s[l] !== s[r]`:** The end characters don't match, so they can't both be part of the same palindrome. We have two choices:
                <ol>
                    <li>Exclude the left character and find the LPS of the rest: <code>solve(l + 1, r)</code>.</li>
                    <li>Exclude the right character and find the LPS of the rest: <code>solve(l, r - 1)</code>.</li>
                </ol>
                We take the maximum of these two results.
            </li>
        </ul>
    </li>
</ol>
<p>This requires memoization to be efficient, using the (l, r) pair as the key.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>Subsequences</li>
  <li>Palindromes</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 130
  'recursion-unique-binary-search-trees-ii': `
<h3>💡 Problem Breakdown</h3>
<p>This problem asks us to construct all possible unique Binary Search Trees for a given number of nodes 'n'. The recursive insight is that for any number `i` chosen as the root, all numbers smaller than `i` must form the left subtree, and all numbers larger must form the right subtree. We can recursively generate all possible left and right subtrees and combine them.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will generate all unique BSTs for a range of numbers [start, end].</p>
<ol>
    <li><b>Base Case:</b> If start > end, there are no numbers in the range, so there is one "empty" tree. Return an array containing <code>null</code>.</li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>Initialize an empty list, <code>allTrees</code>.</li>
            <li>Iterate a number `i` from `start` to `end`. This `i` will be the root of the trees we are currently building.</li>
            <li>Make a recursive call to generate all possible left subtrees from the range `[start, i - 1]`.</li>
            <li>Make another recursive call to generate all possible right subtrees from the range `[i + 1, end]`.</li>
            <li>Now, combine them. For every generated `leftTree`, and for every generated `rightTree`, create a new root node with value `i` and attach the left and right trees. Add this new tree to <code>allTrees</code>.</li>
        </ul>
    </li>
    <li>Return the <code>allTrees</code> list.</li>
</ol>
<p>The main function calls this helper with the range `[1, n]`.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Search Trees</li>
  <li>Recursive Construction</li>
  <li>Divide and Conquer</li>
  <li>Combinations of subproblems</li>
</ul>
`,
  // problem explanation--> 131
  'recursion-minimum-path-sum': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic grid traversal problem. We need to find the path from top-left to bottom-right with the minimum sum, moving only right or down. The minimum path sum to reach cell (r, c) is the value of cell (r, c) plus the minimum of the path sums from the cell above (r-1, c) and the cell to the left (r, c-1).</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive solution can calculate this from the destination backwards to the start, but it's more intuitive to think of it from start to finish.</p>
<ol>
    <li>The recursive function <code>solve(r, c)</code> calculates the minimum path sum starting from cell (r, c) to the destination.</li>
    <li><b>Base Case:</b> If we are at the destination cell (bottom-right), the minimum path sum from here is just the value of the cell itself.</li>
    <li><b>Failure Case:</b> If we go out of bounds, this is an invalid path. Return <code>Infinity</code> to ensure it's never chosen as the minimum.</li>
    <li><b>Recursive Step:</b> From cell (r, c), we can go down or right. The minimum path sum from here is <code>grid[r][c]</code> plus the minimum of the path sums from the cell below and the cell to the right: <code>grid[r][c] + Math.min(solve(r + 1, c), solve(r, c + 1))</code>.</li>
</ol>
<p>This has many overlapping subproblems and requires memoization for efficiency.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>Grid Traversal</li>
  <li>Memoization</li>
  <li>Optimization Problem</li>
</ul>
`,
  // problem explanation--> 132
  'recursion-knight-probability-on-chessboard': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the probability that a knight, starting at a specific cell, remains on the board after exactly 'k' random moves. Probability problems can often be solved with recursion by counting favorable outcomes. The probability from a cell is the sum of the probabilities of ending up on the board from all possible next positions, divided by the total number of moves (8).</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function <code>solve(r, c, movesLeft)</code> will calculate the number of ways the knight can stay on the board.</p>
<ol>
    <li><b>Base Case 1 (Off-board):</b> If the current position (r, c) is off the board, it's an unfavorable outcome. Return 0.</li>
    <li><b>Base Case 2 (No moves left):</b> If <code>movesLeft</code> is 0, the knight has stopped. Since it's on the board, this is a favorable outcome. Return 1.</li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>Initialize a <code>probability_sum</code> to 0.</li>
            <li>Iterate through all 8 possible knight moves (dr, dc).</li>
            <li>For each move, make a recursive call for the new position (<code>r + dr</code>, <code>c + dc</code>) with one fewer move (<code>movesLeft - 1</code>).</li>
            <li>Add the result of this recursive call to <code>probability_sum</code>.</li>
        </ul>
    </li>
    <li>The probability from the current state is <code>probability_sum / 8</code>.</li>
</ol>
<p>Memoization is crucial here, using the state `(r, c, movesLeft)` as the key.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming / Memoization</li>
  <li>Probability</li>
  <li>Grid Traversal</li>
</ul>
`,
  // problem explanation--> 133
  'recursion-android-unlock-patterns': `
<h3>💡 Problem Breakdown</h3>
<p>This is a backtracking problem to count all valid unlock patterns of a certain length. A pattern is a permutation of keys. The main constraint is that a move over an intermediate key is only valid if that intermediate key has already been visited. For example, moving from 1 to 3 is only valid if 2 has been visited.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Preprocessing:</b> Create a "skip" table. This 2D array will store the intermediate key that must be visited to make a jump. For example, <code>skip[1][3] = 2</code>.</li>
    <li><b>Backtracking Function:</b> The recursive function <code>dfs(current_key, length)</code> will explore paths starting from <code>current_key</code>.
        <ul>
            <li><b>Length Check:</b> If the current path length is within the valid range [m, n], increment the total count.</li>
            <li><b>Base Case:</b> If the length reaches 'n', we can't go further. Stop this path.</li>
            <li><b>Recursive Step:</b>
                <ol>
                    <li>Mark the <code>current_key</code> as visited.</li>
                    <li>Iterate through all possible next keys (1 to 9).</li>
                    <li>For a <code>next_key</code> to be valid:
                        <ul>
                            <li>It must not have been visited yet.</li>
                            <li>The jump to it must be valid: either there's no skip key (<code>skip[current][next] === 0</code>) or the skip key has been visited.</li>
                        </ul>
                    </li>
                    <li>If the move is valid, recurse: <code>dfs(next_key, length + 1)</code>.</li>
                    <li>Backtrack: Unmark the <code>current_key</code> as visited.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li><b>Symmetry Optimization:</b> Notice that the paths starting from 1, 3, 7, 9 are symmetric, and paths from 2, 4, 6, 8 are symmetric. We can calculate the paths for 1, 2, and 5 and multiply the results accordingly to save computation.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Permutations with Constraints</li>
  <li>Symmetry Optimization</li>
</ul>
`,
  // problem explanation--> 134
  'recursion-trie-prefix-search': `
<h3>💡 Problem Breakdown</h3>
<p>A Trie (or prefix tree) is a tree-like data structure perfect for storing a dictionary of words and performing prefix-based searches. To find all words with a given prefix, we first traverse the Trie to the node representing the end of the prefix. Then, from that node, we recursively traverse its entire subtree to collect all words that can be formed.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Step 1: Build the Trie.</b> This is an iterative or recursive process where you insert each word character by character into the tree structure.</li>
    <li><b>Step 2: Traverse to Prefix Node.</b> Iterate through the characters of the `prefix`. For each character, move down the Trie from the root. If at any point a character does not exist in the current node's children, no words have this prefix. Return an empty list.</li>
    <li><b>Step 3: Recursive Collection (DFS).</b> Once you reach the node for the last character of the prefix, start a recursive DFS from this node.
        <ul>
            <li>The DFS function takes the current `node` and the `currentWord` built so far.</li>
            <li><b>Base Case/Check:</b> If the current node marks the end of a word (<code>node.isEndOfWord</code>), add the <code>currentWord</code> to your results.</li>
            <li><b>Recursive Step:</b> Iterate through the children of the current node. For each child, make a recursive call, passing the child node and appending the corresponding character to the `currentWord`.</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Trie (Prefix Tree)</li>
  <li>Depth-First Search (DFS)</li>
  <li>Tree Traversal</li>
</ul>
`,
  // problem explanation--> 135
  'recursion-interleaving-string': `
<h3>💡 Problem Breakdown</h3>
<p>We need to determine if string `s3` can be formed by interleaving the characters of `s1` and `s2` while maintaining the relative order of characters within `s1` and `s2`. This means that at any point in constructing `s3`, we can take the next available character from either `s1` or `s2`.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive solution can explore these choices. The function's state will be the current indices in `s1` (i) and `s2` (j). The corresponding index in `s3` will be `i + j`.</p>
<ol>
    <li><b>Initial Check:</b> If <code>s1.length + s2.length !== s3.length</code>, it's impossible. Return <code>false</code>.</li>
    <li><b>Recursive Function <code>solve(i, j)</code>:</b>
        <ul>
            <li><b>Base Case:</b> If we have successfully constructed all of `s3` (i.e., <code>i + j === s3.length</code>), it's a valid interleaving. Return <code>true</code>.</li>
            <li><b>Recursive Step:</b> Consider the character <code>s3[i + j]</code>.
                <ul>
                    <li>If this character matches the next character in `s1` (<code>s1[i]</code>), we can try matching it. Make a recursive call: <code>solve(i + 1, j)</code>. If it returns true, we have a solution.</li>
                    <li>If this character matches the next character in `s2` (<code>s2[j]</code>), we can try that path as well. Make a recursive call: <code>solve(i, j + 1)</code>. If it returns true, we also have a solution.</li>
                </ul>
            </li>
            <li>If neither choice leads to a solution, this path is a dead end. Return <code>false</code>.</li>
        </ul>
    </li>
</ol>
<p>This has overlapping subproblems and must be memoized with the state `(i, j)` as the key.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming / Memoization</li>
  <li>Recursive Choice</li>
  <li>String Matching</li>
</ul>
`,
  // problem explanation--> 136
  'recursion-max-area-of-island': `
<h3>💡 Problem Breakdown</h3>
<p>This is an extension of the "Number of Islands" problem. Instead of just counting the islands, we need to find the area (number of '1's) of each island and return the maximum area found. The overall strategy is the same: scan the grid, and when an unvisited '1' is found, start a recursive search to find its entire area.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li>Initialize a <code>maxArea</code> variable to 0.</li>
  <li>Iterate through every cell of the grid.</li>
  <li>If a cell contains a '1':
    <ul>
      <li>This is the start of a new island. Call a recursive helper function (DFS) to find its area.</li>
      <li>Update <code>maxArea = Math.max(maxArea, current_island_area)</code>.</li>
    </ul>
  </li>
  <li><b>Recursive Helper (DFS):</b> This function will calculate the area of an island starting from a given cell.
    <ul>
      <li><b>Base Case:</b> Stop if the cell is out of bounds or is water ('0'). Return 0.</li>
      <li><b>Recursive Step:</b>
        <ol>
          <li>Change the current cell from '1' to '0' to mark it as visited and avoid recounting.</li>
          <li>The area from this point is 1 (for the current cell) plus the areas from the recursive calls to all four neighbors.</li>
          <li>Return this total area.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>Return <code>maxArea</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Grid Traversal</li>
  <li>Depth-First Search (DFS)</li>
  <li>Connected Components</li>
  <li>Optimization (finding a maximum)</li>
</ul>
`,
  // problem explanation--> 137
  'recursion-different-ways-to-add-parentheses': `
<h3>💡 Problem Breakdown</h3>
<p>The problem asks for all possible results of an expression by placing parentheses in different ways. The recursive insight is that the final operation in any parenthesization occurs at one of the operators. For "2*3-4*5", the final operation could be the '*' at index 1, the '-' at index 3, or the '*' at index 5. We can recursively compute all possible results for the left and right sides of each operator and then combine them.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will take an expression string and return a list of all possible values.</p>
<ol>
    <li><b>Base Case:</b> If the expression string contains no operators, it's just a number. Convert it to an integer and return it in a list.</li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>Initialize an empty list for the results.</li>
            <li>Iterate through the expression string. If you find an operator:
                <ol>
                    <li>Split the expression into a left part and a right part at the operator.</li>
                    <li>Make a recursive call on the left part to get all its possible values (<code>leftResults</code>).</li>
                    <li>Make a recursive call on the right part to get all its possible values (<code>rightResults</code>).</li>
                    <li>Combine the results. For each value <code>l</code> in <code>leftResults</code> and each value <code>r</code> in <code>rightResults</code>, apply the current operator and add the new value to your main result list.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>Return the list of results.</li>
</ol>
<p>Memoization, with the expression string as the key, is essential for efficiency.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Divide and Conquer</li>
  <li>Recursion on expressions</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 138
  'recursion-subset-sum-problem': `
<h3>💡 Problem Breakdown</h3>
<p>This is a fundamental dynamic programming and backtracking problem, identical to "Group Sum" (problem #82). We are given a set of numbers and a target sum, and we need to determine if *any* subset of these numbers adds up exactly to the target. For each number, we have two choices: include it in our subset or exclude it.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive function explores this decision tree.</p>
<ol>
    <li><b>State:</b> The function needs to know the `index` of the number it's currently considering and the `currentSum` of the subset built so far.</li>
    <li><b>Base Case 1 (Success):</b> If `currentSum` equals the target `sum`, we've found a valid subset. Return <code>true</code>.</li>
    <li><b>Base Case 2 (Failure):</b> If `currentSum` exceeds the target, or if we've run out of numbers to consider (`index` is at the end of the array), this path is not a solution. Return <code>false</code>.</li>
    <li><b>Recursive Step:</b> For the number at the current `index`:
        <ul>
            <li><b>Choice 1 (Include):</b> Make a recursive call for the next index, adding the current number to the sum: <code>solve(index + 1, currentSum + set[index])</code>.</li>
            <li><b>Choice 2 (Exclude):</b> Make a recursive call for the next index, keeping the sum the same: <code>solve(index + 1, currentSum)</code>.</li>
        </ul>
    </li>
    <li>If either of these recursive calls returns <code>true</code>, then a solution exists. Return <code>true</code>. Otherwise, return <code>false</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Subset Sum Problem</li>
  <li>Recursive Choice (Include/Exclude)</li>
</ul>
`,
  // problem explanation--> 139
  'recursion-unique-paths-iii': `
<h3>💡 Problem Breakdown</h3>
<p>This is an advanced pathfinding problem. It's a variation of "Unique Paths" but with several crucial constraints: there are obstacles, and we must visit *every single* non-obstacle square exactly once. This "exactly once" constraint turns it into a Hamiltonian path problem on a grid, which requires a backtracking DFS approach.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Preprocessing:</b> First, iterate through the grid to find the starting cell's coordinates and count the total number of empty squares (`emptySquares`) we need to visit.</li>
    <li><b>Backtracking DFS Function:</b> The recursive function will explore paths.
        <ul>
            <li><b>State:</b> The function needs the current coordinates (r, c) and the number of squares visited so far (`count`).</li>
            <li><b>Base Cases:</b>
                <ul>
                    <li>If the current cell is out of bounds or an obstacle (-1), stop this path.</li>
                    <li>If the current cell is the destination (2): check if we have visited all empty squares (`count` should equal `emptySquares + 1`). If so, we found a valid path; increment the global solution count.</li>
                </ul>
            </li>
            <li><b>Recursive Step:</b>
                <ol>
                    <li>Mark the current cell as visited to avoid cycles. A common way is to temporarily change its value to -1.</li>
                    <li>Make recursive calls for all four neighbors (up, down, left, right), incrementing the `count`.</li>
                    <li>Backtrack: After the recursive calls return, change the cell's value back to its original state so that other paths can explore it.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>Start the DFS from the starting cell and return the final count.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking / DFS</li>
  <li>Hamiltonian Path</li>
  <li>Grid Traversal with Constraints</li>
  <li>State management (in-place modification)</li>
</ul>
`,
  // problem explanation--> 140
  'recursion-boggle-solver': `
<h3>💡 Problem Breakdown</h3>
<p>Boggle involves finding all valid dictionary words on a grid of letters. A word can be formed by moving between adjacent (including diagonal) cells, without reusing a cell in a single word. This is a classic application of recursive backtracking, combined with a Trie for efficient dictionary lookups.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Preprocessing:</b> Insert all dictionary words into a Trie. This allows us to very quickly check if a sequence of letters is a prefix of any valid word. If it's not, we can stop exploring that path immediately.</li>
    <li><b>Backtracking DFS Function:</b> The recursive function will explore paths on the board.
        <ul>
            <li><b>State:</b> The function needs the current cell (r, c), the current Trie node, and the word built so far. A `visited` grid is also needed.</li>
            <li><b>Recursive Step:</b>
                <ol>
                    <li>Mark the current cell as visited.</li>
                    <li>Check the current Trie node. If it marks the end of a word, add the word to our results.</li>
                    <li>Iterate through all 8 neighbors. For each neighbor:
                        <ul>
                            <li>If the neighbor is in bounds, not visited, and its character exists as a child of the current Trie node:
                                <ul>
                                    <li>Make a recursive call for the neighbor, passing the child Trie node and the updated word.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Backtrack: Unmark the current cell as visited.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li><b>Main Loop:</b> Start a DFS from every cell on the board to find all possible words.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking / DFS</li>
  <li>Trie (Prefix Tree)</li>
  <li>Grid Traversal</li>
  <li>Pruning the search space</li>
</ul>
`,
  // problem explanation--> 141
  'recursion-construct-tree-from-preorder-inorder': `
<h3>💡 Problem Breakdown</h3>
<p>Given pre-order and in-order traversals of a tree, we can uniquely reconstruct it. The key properties are:
<ul>
  <li>The first element in a pre-order traversal is always the root of the tree/subtree.</li>
  <li>In an in-order traversal, all elements to the left of the root belong to the left subtree, and all elements to the right belong to the right subtree.</li>
</ul>
This gives us a recursive way to build the tree.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the given traversal arrays are empty, there is no tree to build. Return <code>null</code>.</li>
  <li><b>Recursive Step:</b>
    <ol>
      <li>Take the first element from the pre-order array. This is the value of the current root node. Create the root node.</li>
      <li>Find this root value in the in-order array. This tells us which elements belong to the left and right subtrees.</li>
      <li>Split the in-order array into left and right parts based on the root's position.</li>
      <li>Split the pre-order array into left and right parts. The left part will have the same number of elements as the left in-order array.</li>
      <li>Make a recursive call to build the left subtree using the left pre-order and left in-order arrays.</li>
      <li>Make another recursive call to build the right subtree using the right pre-order and right in-order arrays.</li>
      <li>Attach the results as the left and right children of the root and return the root.</li>
    </ol>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Tree Traversal (Pre-order, In-order)</li>
  <li>Recursive Construction</li>
  <li>Divide and Conquer</li>
</ul>
`,
  // problem explanation--> 142
  'recursion-construct-tree-from-inorder-postorder': `
<h3>💡 Problem Breakdown</h3>
<p>This is very similar to the previous problem, but uses post-order and in-order traversals. The key properties are:
<ul>
  <li>The *last* element in a post-order traversal is always the root of the tree/subtree.</li>
  <li>The in-order traversal still separates the left and right subtrees relative to the root.</li>
</ul>
This allows for a similar recursive construction strategy.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Base Case:</b> If the traversal arrays are empty, return <code>null</code>.</li>
  <li><b>Recursive Step:</b>
    <ol>
      <li>Take the *last* element from the post-order array. This is the value of the current root. Create the root node.</li>
      <li>Find this root value in the in-order array to partition it into left and right subtree elements.</li>
      <li>Split the post-order array. The first part corresponds to the left subtree, and the second part corresponds to the right subtree. Their sizes will match the sizes of the in-order partitions.</li>
      <li>Recursively build the left subtree using the left in-order and left post-order arrays.</li>
      <li>Recursively build the right subtree using the right in-order and right post-order arrays.</li>
      <li>Attach the children and return the root.</li>
    </ol>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Tree Traversal (In-order, Post-order)</li>
  <li>Recursive Construction</li>
  <li>Divide and Conquer</li>
</ul>
`,
  // problem explanation--> 143
  'recursion-serialize-deserialize-binary-tree': `
<h3>💡 Problem Breakdown</h3>
<p>Serialization means converting a data structure (like a tree) into a format (like a string) that can be stored or transmitted. Deserialization is the reverse process. A pre-order traversal is a natural way to serialize a tree because the root always comes first, which helps in reconstruction.</p>
<h3>⚙️ Solution Walkthrough</h3>
<h4>Serialization (Recursive DFS)</h4>
<ol>
  <li>The recursive function takes a node.</li>
  <li><b>Base Case:</b> If the node is null, append a special marker (like "null" or "#") to the string to represent an empty branch.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Append the current node's value to the string.</li>
      <li>Recursively call serialize for the left child.</li>
      <li>Recursively call serialize for the right child.</li>
    </ul>
  </li>
</ol>
<h4>Deserialization (Recursive DFS)</h4>
<ol>
  <li>First, split the serialized string into an array of values.</li>
  <li>The recursive helper function will build the tree. It consumes values from the array.
    <ul>
      <li>Take the next value from the array.</li>
      <li><b>Base Case:</b> If the value is the "null" marker, this branch is empty. Return <code>null</code>.</li>
      <li><b>Recursive Step:</b>
        <ul>
          <li>Create a new node with the current value.</li>
          <li>Recursively call the helper to build the left child.</li>
          <li>Recursively call the helper to build the right child.</li>
          <li>Return the created node.</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Serialization</li>
  <li>Pre-order Traversal (DFS)</li>
  <li>Recursive Construction from a stream/array</li>
</ul>
`,
  // problem explanation--> 144
  'recursion-find-kth-smallest-element-in-bst': `
<h3>💡 Problem Breakdown</h3>
<p>A key property of a Binary Search Tree (BST) is that an in-order traversal (Left, Root, Right) visits the nodes in ascending sorted order. Therefore, the k-th smallest element is simply the k-th element you encounter during an in-order traversal.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>We can perform a recursive in-order traversal and keep a counter.</p>
<ol>
  <li>Initialize a counter and a result variable in an outer scope.</li>
  <li><b>Recursive In-order Helper:</b>
    <ul>
      <li><b>Base Case:</b> If the node is null, or if we've already found the result, return.</li>
      <li><b>Recursive Step (In-order):</b>
        <ol>
          <li>First, recurse on the left child.</li>
          <li>Process the current node:
            <ul>
              <li>Increment the counter.</li>
              <li>If the counter now equals `k`, we've found our element. Store its value in the result variable and return to stop further traversal.</li>
            </ul>
          </li>
          <li>Recurse on the right child.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>Call the helper on the root and return the result.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Search Tree (BST) Properties</li>
  <li>In-order Traversal</li>
  <li>Using state across recursive calls</li>
</ul>
`,
  // problem explanation--> 145
  'recursion-partition-equal-subset-sum': `
<h3>💡 Problem Breakdown</h3>
<p>This is a variation of the Subset Sum problem. We need to determine if the array can be split into two subsets with equal sums. This is only possible if the total sum of the array is even. If it is, the problem reduces to: "Can we find a subset that sums up to <code>(total sum) / 2</code>?". If we can find such a subset, the remaining elements will automatically form the other subset with the same sum.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li>Calculate the total sum of the array. If it's odd, return <code>false</code>.</li>
  <li>The target sum for our subset search is <code>totalSum / 2</code>.</li>
  <li>Now, this is a standard Subset Sum problem (like #138). Use a recursive backtracking function to solve it.
    <ul>
      <li><b>State:</b> <code>solve(index, currentSum)</code>.</li>
      <li><b>Base Case (Success):</b> If <code>currentSum === target</code>, return <code>true</code>.</li>
      <li><b>Base Case (Failure):</b> If <code>currentSum > target</code> or <code>index</code> is out of bounds, return <code>false</code>.</li>
      <li><b>Recursive Step:</b> Return <code>solve(index + 1, currentSum + nums[index]) || solve(index + 1, currentSum)</code>. (Include or Exclude).</li>
    </ul>
  </li>
</ol>
<p>This should be memoized for efficiency.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Problem Reduction</li>
  <li>Subset Sum Problem</li>
  <li>Backtracking</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 146
  'recursion-find-minimum-in-rotated-sorted-array': `
<h3>💡 Problem Breakdown</h3>
<p>A rotated sorted array is an array that was sorted and then had a block of elements moved from the end to the beginning. The array has two sorted halves. The minimum element is the "pivot" point, the start of the first sorted half. The O(log n) requirement strongly suggests a binary search.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function performs a modified binary search.</p>
<ol>
  <li><b>Base Cases:</b>
    <ul>
      <li>If the search range has only one element (<code>left === right</code>), that's the minimum.</li>
      <li>If the first element of the range is smaller than the last, the range is fully sorted, so the first element is the minimum.</li>
    </ul>
  </li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Calculate the middle index, <code>mid</code>.</li>
      <li>Compare <code>nums[mid]</code> with the first element of the range, <code>nums[left]</code>.
        <ul>
          <li>If <code>nums[mid] >= nums[left]</code>, it means the pivot (the minimum element) must be in the right half of the search range. Recurse on <code>(mid + 1, right)</code>.</li>
          <li>If <code>nums[mid] < nums[left]</code>, it means the pivot is in the left half (including `mid` itself). Recurse on <code>(left, mid)</code>.</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Search Modification</li>
  <li>Rotated Sorted Array Properties</li>
  <li>Divide and Conquer</li>
</ul>
`,
  // problem explanation--> 147
  'recursion-search-in-rotated-sorted-array': `
<h3>💡 Problem Breakdown</h3>
<p>This is similar to the previous problem, but now we're searching for a target value. The key challenge is that in a rotated sorted array, when you split it at the midpoint, one half will always be normally sorted, while the other will be rotated. We need to identify the sorted half to decide where to continue our search.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function performs a modified binary search.</p>
<ol>
  <li><b>Base Case:</b> If <code>left > right</code>, the target is not in the array. Return -1.</li>
  <li><b>Recursive Step:</b>
    <ul>
      <li>Find the middle index, <code>mid</code>. If <code>nums[mid] === target</code>, return <code>mid</code>.</li>
      <li><b>Identify the sorted half:</b> Check if the left part (<code>nums[left]</code> to <code>nums[mid]</code>) is sorted. This is true if <code>nums[left] <= nums[mid]</code>.
        <ul>
          <li><b>If left half is sorted:</b> Check if the target lies within the range of the sorted left half. If yes, recurse on the left side. Otherwise, recurse on the right side.</li>
          <li><b>If right half is sorted:</b> Check if the target lies within the range of the sorted right half. If yes, recurse on the right side. Otherwise, recurse on the left side.</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Search Modification</li>
  <li>Rotated Sorted Array Properties</li>
  <li>Divide and Conquer</li>
</ul>
`,
  // problem explanation--> 148
  'recursion-populating-next-right-pointers': `
<h3>💡 Problem Breakdown</h3>
<p>For each node in a perfect binary tree, we need to set its `next` pointer to the node on its immediate right at the same level. A recursive approach can establish these connections level by level.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function connects nodes and then calls itself for the subtrees.</p>
<ol>
  <li><b>Base Case:</b> If the root is null or it's a leaf node (no children), there's nothing to connect. Return.</li>
  <li><b>Recursive Step (Connecting children):</b>
    <ul>
      <li>The most direct connection is a node's left child pointing to its right child: <code>root.left.next = root.right</code>.</li>
      <li>The less obvious connection is a node's right child pointing to the left child of the node's `next` sibling. This is possible only if the current root itself has a `next` pointer: <code>root.right.next = root.next.left</code>.</li>
    </ul>
  </li>
  <li><b>Recurse on subtrees:</b>
    <ul>
      <li>Crucially, we must recurse on the right subtree *first*, then the left. This ensures that the `next` pointers for the parent level are already established when the left subtree needs them to make its right-to-left connections. This is not strictly necessary for a perfect tree but is good practice. In a standard pre-order recursion (left then right), the connections still work for a perfect tree.</li>
      <li><code>connect(root.left)</code></li>
      <li><code>connect(root.right)</code></li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal</li>
  <li>Level-order connections</li>
  <li>Perfect Binary Tree Properties</li>
</ul>
`,
  // problem explanation--> 149
  'recursion-beautiful-array': `
<h3>💡 Problem Breakdown</h3>
<p>This is a tricky problem with a non-obvious recursive construction. A "beautiful" array has the property that for any `i < k < j`, `nums[k] * 2 !== nums[i] + nums[j]`. This means no element is the arithmetic mean of two other elements that surround it. The key insight is that this property is maintained if we separate odd and even numbers. If we have a beautiful array, we can scale and transform it to create larger beautiful arrays.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function `solve(n)` will construct a beautiful array of size `n`.</p>
<ol>
  <li><b>Base Case:</b> For n=1, the array `[1]` is beautiful.</li>
  <li><b>Recursive Step (Divide and Conquer):</b>
    <ul>
      <li>A beautiful array can be formed by concatenating all the odd numbers followed by all the even numbers.
        <ul>
          <li>Let's say `B` is a beautiful array for some number `m`.</li>
          <li>Then `2*B - 1` (map `x -> 2*x - 1`) gives a beautiful array of all odd numbers.</li>
          <li>And `2*B` (map `x -> 2*x`) gives a beautiful array of all even numbers.</li>
          <li>Concatenating them, `[...odds, ...evens]`, preserves the beautiful property because the sum of an odd and an even number is always odd, which cannot be twice another integer.</li>
        </ul>
      </li>
      <li>So, to get a beautiful array for `n`, we recursively find a beautiful array for the odd part (size <code>ceil(n/2)</code>) and one for the even part (size <code>floor(n/2)</code>), transform them, and concatenate.</li>
    </ul>
  </li>
</ol>
<p>Memoization is useful to store the results for each `n`.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Divide and Conquer</li>
  <li>Recursive Construction</li>
  <li>Mathematical Properties</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 150
  'recursion-cheapest-flights-within-k-stops': `
<h3>💡 Problem Breakdown</h3>
<p>This is a shortest path problem on a weighted, directed graph, with an additional constraint on the number of edges (stops) in the path. We need to find the minimum cost from a source to a destination using at most `k` stops. This is a variation of Bellman-Ford or Dijkstra's algorithm, but a recursive DFS with memoization is a very natural way to model the state.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will find the cheapest price from a given node to the destination with a certain number of stops remaining.</p>
<ol>
    <li><b>Preprocessing:</b> It's helpful to convert the `flights` list into an adjacency list (a map where keys are source cities and values are lists of `[destination, price]`).</li>
    <li><b>Recursive Function State:</b> <code>solve(node, stops_left)</code></li>
    <li><b>Base Cases:</b>
        <ul>
            <li>If <code>node === dst</code>, we've reached the destination. The cost from here is 0.</li>
            <li>If <code>stops_left < 0</code>, we've used too many stops. This path is invalid. Return <code>Infinity</code>.</li>
        </ul>
    </li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>Initialize <code>minCost = Infinity</code>.</li>
            <li>For each neighbor of the current `node`, get the `price` of the flight.</li>
            <li>Make a recursive call for that neighbor with one fewer stop: <code>cost_from_neighbor = solve(neighbor, stops_left - 1)</code>.</li>
            <li>If a valid path was found from the neighbor, update our minimum cost: <code>minCost = Math.min(minCost, price + cost_from_neighbor)</code>.</li>
        </ul>
    </li>
    <li>Return <code>minCost</code>.</li>
</ol>
<p>Memoization is essential, using the state `(node, stops_left)` as the key.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Graph Algorithms (Shortest Path)</li>
  <li>Depth-First Search (DFS)</li>
  <li>Memoization / Dynamic Programming</li>
</ul>
`,
  // problem explanation--> 151
  'recursion-zuma-game': `
<h3>💡 Problem Breakdown</h3>
<p>This is a very difficult backtracking problem with optimization. The goal is to clear a board of colored balls by inserting balls from our hand. When three or more of the same color are adjacent, they disappear, which can trigger a chain reaction. We want the minimum number of insertions.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The core idea is to try every possible move (inserting each ball from our hand at every possible position on the board) and recursively find the minimum steps for the resulting board state.</p>
<ol>
    <li><b>Helper Function <code>cleanBoard(board)</code>:</b> Create a recursive helper that takes a board string and repeatedly removes any groups of 3 or more identical adjacent characters until no such groups exist. This simulates the chain reaction.</li>
    <li><b>Backtracking Function <code>solve(board)</code>:</b>
        <ul>
            <li><b>State:</b> The state is the current board configuration (a string) and the count of balls remaining in our hand (managed implicitly or explicitly).</li>
            <li><b>Memoization:</b> The state (board string + hand string) must be memoized to avoid re-computing results for the same situation.</li>
            <li><b>Base Case:</b> If the board is empty, we succeeded. It took 0 more steps. Return 0.</li>
            <li><b>Recursive Step:</b>
                <ol>
                    <li>Initialize <code>minSteps = Infinity</code>.</li>
                    <li>Iterate through every possible insertion point <code>i</code> in the board.</li>
                    <li>Iterate through every unique color <code>c</code> in our hand.
                        <ul>
                            <li>If we have a ball of color <code>c</code>, "use" it.</li>
                            <li>Create a <code>newBoard</code> by inserting <code>c</code> at position <code>i</code>.</li>
                            <li>Run the <code>cleanBoard</code> helper on this <code>newBoard</code>.</li>
                            <li>Recursively call <code>solve(cleanedBoard)</code>.</li>
                            <li>If the recursive call doesn't return infinity, update <code>minSteps = Math.min(minSteps, 1 + recursive_result)</code>.</li>
                            <li>"Un-use" the ball (backtrack the hand count).</li>
                        </ul>
                    </li>
                </ol>
            </li>
            <li>Return <code>minSteps</code>.</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking / Brute-force search</li>
  <li>Memoization</li>
  <li>String manipulation</li>
  <li>State management</li>
</ul>
`,
  // problem explanation--> 152
  'recursion-concatenated-words': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find all words in a given list that are formed by concatenating at least two other (shorter) words from the same list. For example, if "cat", "dog", and "catdog" are in the list, "catdog" is a concatenated word.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>This is a variation of the Word Break problem. For each word in the list, we need to check if it can be segmented into other words from the list. We must also ensure it's made of at least two words.</p>
<ol>
    <li><b>Preprocessing:</b> Put all words into a Set for fast O(1) lookups.</li>
    <li><b>Main Loop:</b> Iterate through each <code>word</code> in the original list. For each word, call a recursive helper function to check if it's concatenated.</li>
    <li><b>Recursive Helper <code>canForm(word)</code>:</b>
        <ul>
            <li><b>Memoization:</b> Use a map to store the result for each subproblem (each suffix of the original word) to avoid re-computation.</li>
            <li><b>Recursive Step:</b> Iterate from <code>i = 1</code> to the length of the current <code>word</code>.
                <ul>
                    <li>Split the word into a <code>prefix</code> (from start to `i`) and a <code>suffix</code> (from `i` to end).</li>
                    <li>Check if the <code>prefix</code> exists in our word set.</li>
                    <li>If it does, we then need to check the <code>suffix</code>. The suffix is valid if either:
                        <ol>
                            <li>It also exists directly in the word set.</li>
                            <li>A recursive call <code>canForm(suffix)</code> returns true.</li>
                        </ol>
                    </li>
                    <li>If both prefix and suffix are valid, then the current <code>word</code> can be formed. Memoize and return <code>true</code>.</li>
                </ul>
            </li>
            <li>If the loop finishes, the word cannot be formed. Memoize and return <code>false</code>.</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming / Memoization</li>
  <li>Word Break Problem</li>
  <li>String manipulation (substring)</li>
  <li>Set for efficient lookups</li>
</ul>
`,
  // problem explanation--> 153
  'recursion-k-th-symbol-in-grammar': `
<h3>💡 Problem Breakdown</h3>
<p>The problem describes a grammar that expands recursively. Row `n` is built from row `n-1`. We need to find the k-th symbol in row `n`. Since `n` can be large, we cannot actually build the string. We need to find a mathematical relationship between a symbol at `(n, k)` and a symbol in the previous row.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The key observation is how the symbols are generated. The first half of row `n` is identical to row `n-1`. The second half is the *inverse* of row `n-1`.
<ul>
    <li>If <code>k</code> is in the first half of row <code>n</code>, its value is the same as the symbol at position `k` in row `n-1`.</li>
    <li>If <code>k</code> is in the second half, its value is the *opposite* of the symbol at position <code>k - (length of row n-1)</code> in row `n-1`.</li>
</ul>
This leads to a "tail-recursive" or "divide-and-conquer" solution.</p>
<ol>
    <li><b>Base Case:</b> If <code>n === 1</code>, the row is just "0". Return 0.</li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>Calculate the length of the previous row, which is <code>2^(n-2)</code>.</li>
            <li>If `k` is less than or equal to this length, the symbol is the same as the one in the previous row at the same position `k`. Recurse: <code>kthGrammar(n - 1, k)</code>.</li>
            <li>If `k` is greater than this length, the symbol is the inverse of the one in the previous row. Recurse for the corresponding position in the first half and flip the result: <code>1 - kthGrammar(n - 1, k - length_of_prev_row)</code>.</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Pattern Recognition</li>
  <li>Divide and Conquer</li>
  <li>Binary Representation (the problem is equivalent to counting set bits in k-1)</li>
</ul>
`,
  // problem explanation--> 154
  'recursion-number-of-squareful-arrays': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the number of permutations of an array where the sum of any two adjacent elements is a perfect square. This is a classic backtracking problem where we try to build a valid permutation element by element.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Preprocessing:</b> Sort the input array. This helps in handling duplicate numbers efficiently to avoid generating duplicate permutations.</li>
    <li><b>Backtracking Function:</b> The recursive function will build a valid permutation.
        <ul>
            <li><b>State:</b> The function needs the current permutation being built (`path`) and a way to track which elements from the original array have been used (a `used` boolean array).</li>
            <li><b>Base Case:</b> If the `path` length equals the original array's length, we have successfully built a full squareful permutation. Increment the total count.</li>
            <li><b>Recursive Step:</b>
                <ol>
                    <li>Iterate through all numbers in the original `nums` array.</li>
                    <li><b>Pruning/Constraints:</b> Skip a number if:
                        <ul>
                            <li>It has already been used (<code>used[i]</code> is true).</li>
                            <li>It's a duplicate of the previous number, and the previous number was not used. This is a standard trick to avoid duplicate permutations (e.g., for `[1, 8, 8]`, we only start a path with the first '8').</li>
                            <li>If the path is not empty, check if the sum of the last element in the path and the current number is a perfect square. If not, skip it.</li>
                        </ul>
                    </li>
                    <li>If the number is valid, "choose" it (add to path, mark as used), "explore" (recurse), and then "unchoose" (remove from path, mark as unused) to backtrack.</li>
                </ol>
            </li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Permutations with Duplicates</li>
  <li>Constraint Checking</li>
</ul>
`,
  // problem explanation--> 155
  'recursion-escape-a-large-maze': `
<h3>💡 Problem Breakdown</h3>
<p>The maze is enormous (10^6 x 10^6), so a standard recursive DFS/BFS exploring the whole maze will time out or run out of memory. The key insight lies in the number of `blocked` cells. The number of blockers is relatively small (at most 200). This means they can only enclose a finite, and relatively small, area. If the source and target are not in the same enclosed area (or one is enclosed and the other isn't), a path must exist.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The strategy is to check if the source and target are enclosed. We can do this by running a limited-depth search (BFS or DFS) from both the source and the target.</p>
<ol>
    <li>The maximum area a set of `n` blockers can enclose is roughly `n * (n-1) / 2`. This gives us a safe upper bound on the number of cells to explore.</li>
    <li><b>Run a limited search from the source:**
        <ul>
            <li>Start a BFS/DFS from the `source`.</li>
            <li>Keep track of visited cells.</li>
            <li>Stop the search if you either reach the `target` or you have visited more cells than the maximum possible enclosed area.</li>
            <li>If you reach the target, a path exists.</li>
            <li>If you exceed the area limit, it means the source is not trapped in a small area.</li>
        </ul>
    </li>
    <li><b>Run a limited search from the target:</b> Do the same thing, but starting from the `target` and trying to reach the `source`.</li>
    <li>If *both* searches show that their respective start points are not trapped in a small area, then a path must exist between them in the vast open grid.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Graph Theory (Connectivity)</li>
  <li>Breadth-First Search (BFS) / Depth-First Search (DFS)</li>
  <li>Problem simplification based on constraints</li>
</ul>
`,
  // problem explanation--> 156
  'recursion-tiling-a-rectangle-with-fewest-squares': `
<h3>💡 Problem Breakdown</h3>
<p>This is a very hard tiling puzzle. The goal is to find the minimum number of squares to tile a rectangle. This is not a simple dynamic programming problem because the cuts are not always straight across. The optimal solution might involve complex arrangements. This requires a backtracking search to explore all possible ways of placing squares.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The backtracking function will try to fill the first available empty spot in the rectangle.</p>
<ol>
    <li>The state can be represented by a 2D boolean grid (`height`) showing which cells are covered, and the current `count` of squares used.</li>
    <li><b>Base Case:</b> If the entire grid is covered, update the global minimum count with the current `count`.</li>
    <li><b>Pruning:</b> If the current `count` is already greater than or equal to the best-known minimum, stop this path.</li>
    <li><b>Recursive Step:</b>
        <ol>
            <li>Find the top-most, left-most uncovered cell (r, c).</li>
            <li>Try to place squares of all possible sizes starting at this cell. Iterate the `size` from the largest possible down to 1.</li>
            <li>For a given `size`, check if a square of that size can be placed without overlapping any already-covered cells.</li>
            <li>If it can be placed:
                <ul>
                    <li>"Choose": Mark the cells of the square as covered.</li>
                    <li>"Explore": Make a recursive call with the updated grid and `count + 1`.</li>
                    <li>"Unchoose" (Backtrack): Unmark the cells of the square.</li>
                </ul>
            </li>
        </ol>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Tiling Problems</li>
  <li>State Representation (Grid)</li>
  <li>Pruning the search space</li>
</ul>
`,
  // problem explanation--> 157
  'recursion-path-with-maximum-gold': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find a path in a grid that collects the most gold. We can start and end anywhere. The path cannot revisit cells. This is a classic backtracking problem where we explore all possible paths from every possible starting cell.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Main Loop:</b> We need to find the max gold starting from *any* cell. So, we'll have an outer loop that iterates through every cell (r, c) in the grid and starts a recursive search from there. Keep track of a global `maxGold`.</li>
    <li><b>Recursive DFS Function:</b> This function, <code>dfs(r, c)</code>, will calculate the maximum gold that can be collected starting from cell (r, c).
        <ul>
            <li><b>Base Case:</b> If the cell (r, c) is out of bounds or contains 0 gold, this path ends. Return 0.</li>
            <li><b>Recursive Step:</b>
                <ol>
                    <li>"Choose": To avoid revisiting, we must mark the current cell. A common trick is to temporarily set its value to 0. Store its original gold value.</li>
                    <li>"Explore": Make recursive calls for all four neighbors (up, down, left, right). Find the maximum gold collected from these recursive calls.</li>
                    <li>"Unchoose" (Backtrack): After exploring, restore the cell's original gold value so that it's available for other starting paths.</li>
                    <li>Return the gold from the current cell plus the maximum gold found from its neighbors.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>Update the global `maxGold` after each initial DFS call from the main loop.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking / Depth-First Search (DFS)</li>
  <li>Grid Traversal</li>
  <li>State management (in-place modification)</li>
</ul>
`,
  // problem explanation--> 158
  'recursion-ambiguous-coordinates': `
<h3>💡 Problem Breakdown</h3>
<p>The problem is about partitioning a string of digits into two parts (for x and y coordinates) and then finding all the ways to place a decimal point in each part to make them valid numbers. A number is valid if it doesn't have extraneous zeros (e.g., "00" is invalid, "0.01" is invalid, but "0.5" and "0" are valid).</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Outer Loop (Partitioning):</b> Iterate a split point `i` through the digit string. This splits the string into a `leftPart` (for x) and a `rightPart` (for y).</li>
    <li><b>Helper Function <code>getValidNumbers(part)</code>:</b> Create a helper function that takes a digit string and returns a list of all valid string representations of numbers it can form.
        <ul>
            <li>If the part is "0", the only valid number is "0".</li>
            <li>If the part starts with "0" and ends with "0" (and length > 1), it's invalid.</li>
            <li>If the part starts with "0", the only valid form is "0." followed by the rest of the digits.</li>
            <li>If the part ends with "0", it cannot have a decimal point.</li>
            <li>Otherwise, the part itself is a valid integer. Also, we can insert a decimal point at any position, so we generate all such strings (e.g., for "123", we generate "1.23", "12.3").</li>
        </ul>
    </li>
    <li><b>Combine Results:</b> For each split point `i`, call the helper for the `leftPart` and `rightPart`. Then, take the Cartesian product: for every valid `x` and every valid `y`, form the coordinate string `"(x, y)"` and add it to the final result list.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>String Partitioning</li>
  <li>Brute-force Generation</li>
  <li>Constraint Validation (number formatting rules)</li>
</ul>
`,
  // problem explanation--> 159
  'recursion-k-th-permutation': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the k-th lexicographical permutation of the numbers [1, 2, ..., n]. Generating all n! permutations and picking the k-th one would be too slow. A more direct, mathematical approach is needed. The key is to determine the digits of the permutation one by one, from left to right.</p>
<h3>⚙️ Solution Walkthrough (Factorial Number System)</h3>
<p>This is a constructive, not a backtracking, approach, though it has a recursive feel.</p>
<ol>
    <li><b>Preprocessing:</b> Calculate factorials up to `n-1`. This helps us know how many permutations start with a given prefix. There are `(n-1)!` permutations for each possible starting digit.</li>
    <li><b>Determine the First Digit:</b> The `k`-th permutation will be in one of `n` blocks, each of size `(n-1)!`. The index of the starting digit is `floor((k-1) / (n-1)!)`. Find this digit from the list of available numbers.</li>
    <li><b>Update `k`:</b> After choosing the first digit, we have a subproblem. We need to find the `(k-1) % (n-1)!`-th permutation of the remaining `n-1` numbers.</li>
    <li><b>Repeat:</b> Continue this process. In each step, we use the updated `k` and the factorial of the remaining numbers minus one to determine the next digit to pick from the list of available numbers.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Combinatorics (Factorial number system)</li>
  <li>Permutations</li>
  <li>Constructive Algorithm</li>
</ul>
`,
  // problem explanation--> 160
  'recursion-matchsticks-to-square': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic partition problem, very similar to "Partition to K Equal Sum Subsets" where `k` is 4. We need to partition the set of matchsticks into 4 subsets, each summing to the same value (the side length of the square).</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Initial Checks:</b>
        <ul>
            <li>Calculate the total perimeter by summing all matchstick lengths.</li>
            <li>If the perimeter is not divisible by 4, it's impossible to form a square. Return `false`.</li>
            <li>The required side length is `perimeter / 4`.</li>
            <li>If any single matchstick is longer than the side length, it's also impossible. Return `false`.</li>
        </ul>
    </li>
    <li><b>Optimization:</b> Sorting the matchsticks in descending order can significantly speed up the backtracking by trying to place the largest sticks first, which prunes the search space more quickly.</li>
    <li><b>Backtracking Function:</b>
        <ul>
            <li><b>State:</b> The function needs the `index` of the matchstick we are currently trying to place and an array `sides` representing the current lengths of the four sides being built.</li>
            <li><b>Base Case:</b> If `index` reaches the end of the matchsticks array, it means we have successfully placed all sticks. Return `true`.</li>
            <li><b>Recursive Step:</b> For the current matchstick, try to place it on each of the four sides.
                <ul>
                    <li>If adding the stick to a side does not exceed the `sideLength`, "choose" it (add its length to the side).</li>
                    <li>"Explore": Recurse for the next stick. If the recursive call returns `true`, we have found a solution.</li>
                    <li>"Unchoose" (Backtrack): If not, remove the stick's length from that side and try the next side.</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Partition Problem</li>
  <li>Pruning / Optimization</li>
</ul>
`,
  // problem explanation--> 161
  'recursion-can-i-win': `
<h3>💡 Problem Breakdown</h3>
<p>This is a game theory problem. We need to determine if the first player has a winning strategy. Since both players play optimally, we can use recursion with memoization to explore the game tree. A state in the game is defined by the set of numbers that have already been chosen and the current running total.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function <code>canWin(state)</code> will determine if the current player to move can force a win from the given state.</p>
<ol>
    <li><b>State Representation:</b> The set of used numbers can be efficiently represented by a bitmask. The current total can also be part of the state.</li>
    <li><b>Initial Checks:</b>
        <ul>
            <li>If the sum of all choosable numbers is less than the desired total, no one can ever win. Return `false`.</li>
        </ul>
    </li>
    <li><b>Recursive Function <code>solve(mask, currentTotal)</code>:</b>
        <ul>
            <li><b>Memoization:</b> Use a map to store the result for each `mask`.</li>
            <li><b>Base Case:</b> If <code>currentTotal >= desiredTotal</code>, the *previous* player already won. The current player loses. Return <code>false</code>.</li>
            <li><b>Recursive Step:</b> Iterate through all choosable numbers `i`.
                <ul>
                    <li>If number `i` has not been used yet (check the bitmask):
                        <ul>
                            <li>Imagine the current player chooses `i`. The game then transitions to a new state. The *other* player will now be facing this new state.</li>
                            <li>We want to find a move `i` such that the other player *cannot* win from the resulting state. So, we make a recursive call: <code>solve(new_mask, new_total)</code>.</li>
                            <li>If this recursive call returns <code>false</code> (meaning the opponent loses), then our current move is a winning move. We can memoize and return <code>true</code>.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>If the loop finishes and we haven't found a winning move, it means all our moves lead to a state where the opponent can win. We lose. Memoize and return <code>false</code>.</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Game Theory (Minimax)</li>
  <li>Recursion with Memoization</li>
  <li>State representation (Bitmasking)</li>
</ul>
`,
  // problem explanation--> 162
  'recursion-the-skyline-problem': `
<h3>💡 Problem Breakdown</h3>
<p>The skyline is defined by "critical points" where the height changes. The problem can be solved efficiently using a divide and conquer approach, which is naturally recursive. We can split the set of buildings in half, recursively find the skyline for each half, and then merge the two resulting skylines.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Base Case:</b> If there is only one building `[l, r, h]`, its skyline is two points: `[l, h]` (start) and `[r, 0]` (end). If there are no buildings, the skyline is empty.</li>
    <li><b>Recursive Step (Divide):</b>
        <ul>
            <li>Split the list of buildings into a left half and a right half.</li>
            <li>Recursively call the function on the left half to get `leftSkyline`.</li>
            <li>Recursively call on the right half to get `rightSkyline`.</li>
        </ul>
    </li>
    <li><b>Combine Step (Merge):</b> This is the most complex part.
        <ul>
            <li>"Sweep" across the two skylines from left to right, using two pointers.</li>
            <li>At each x-coordinate from either skyline, we calculate the new maximum height (`max(currentLeftHeight, currentRightHeight)`).</li>
            <li>If this new maximum height is different from the last height in our merged result, we add a new critical point `[x, newMaxHeight]` to the result.</li>
            <li>This merge process continues until both input skylines are fully processed.</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Divide and Conquer</li>
  <li>Merge Algorithm (similar to Merge Sort)</li>
  <li>Sweep-line Algorithm concept</li>
</ul>
`,
  // problem explanation--> 163
  'recursion-count-of-smaller-numbers-after-self': `
<h3>💡 Problem Breakdown</h3>
<p>A naive solution would be to iterate through the array for each element, which is O(n^2). A more efficient solution uses a modified merge sort. The key idea is that during the merge step of merge sort, when we move an element from the right subarray into the merged array, we know that it is smaller than all the remaining elements in the left subarray. This is the information we need.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li>We need to keep track of the original indices of the numbers, so we'll sort an array of objects like <code>{val, index}</code>.</li>
    <li><b>Modified Merge Sort:</b>
        <ul>
            <li>The function recursively splits the array as usual.</li>
            <li><b>Modified Merge Step:</b> When merging two sorted halves (left and right):
                <ul>
                    <li>As we compare elements from the left and right subarrays:</li>
                    <li>If we are about to place an element from the left subarray (<code>left[i]</code>), we know it is larger than all the elements we have already placed from the right subarray. The number of such elements (`j`) is the count of smaller numbers from the right side that have "jumped" past it.</li>
                    <li>We add this count `j` to the result for the original index of <code>left[i]</code>: <code>result[left[i].index] += j</code>.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>After the merge sort is complete, the `result` array will contain the correct counts.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Divide and Conquer (Merge Sort)</li>
  <li>Inversion Counting modification</li>
  <li>Sorting with index preservation</li>
</ul>
`,
  // problem explanation--> 164
  'recursion-frog-jump': `
<h3>💡 Problem Breakdown</h3>
<p>The frog is on a sequence of stones. Its next jump size depends on its previous jump size. This suggests a recursive solution where the state is defined by the frog's current position and the size of the jump that got it there. We need to find if any path reaches the last stone.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive DFS with memoization can explore the possible jumps.</p>
<ol>
    <li><b>Preprocessing:</b> It's helpful to have a Set of stone positions for quick O(1) lookups.</li>
    <li><b>Recursive Function State:</b> <code>solve(current_position, last_jump_size)</code>.</li>
    <li><b>Memoization:</b> Use a map with a key like <code>`${position}-${jump}`</code> to store results.</li>
    <li><b>Base Case:</b> If <code>current_position</code> is the same as the last stone's position, we've successfully crossed. Return <code>true</code>.</li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>The frog can try three possible jump sizes for the next jump: <code>last_jump_size - 1</code>, <code>last_jump_size</code>, and <code>last_jump_size + 1</code>.</li>
            <li>For each valid (<code>> 0</code>) potential jump size:
                <ol>
                    <li>Calculate the <code>next_position</code>.</li>
                    <li>Check if a stone exists at that position.</li>
                    <li>If it does, make a recursive call: <code>solve(next_position, new_jump_size)</code>.</li>
                    <li>If any of these recursive calls return <code>true</code>, it means a path to the end exists. Memoize and return <code>true</code>.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>If all jump options from the current position fail to reach the end, memoize and return <code>false</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Depth-First Search (DFS)</li>
  <li>Memoization / Dynamic Programming</li>
  <li>State representation</li>
</ul>
`,
  // problem explanation--> 165
  'recursion-burst-balloons': `
<h3>💡 Problem Breakdown</h3>
<p>This is a hard dynamic programming problem. The key challenge is that when you burst a balloon, its neighbors change, which affects the score of future bursts. This makes it hard to decide what to burst first. The crucial insight is to reverse the thinking: instead of deciding which balloon to burst *first*, decide which balloon to burst *last*.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>Let <code>solve(left, right)</code> be the maximum coins you can get from bursting all balloons in the range <code>(left, right)</code> (exclusive). The balloons at <code>left</code> and <code>right</code> are the boundaries that will remain until the end.</p>
<ol>
    <li><b>Preprocessing:</b> Add virtual balloons with value 1 at both ends of the array. This simplifies boundary calculations.</li>
    <li><b>Recursive Function <code>solve(left, right)</code>:</b>
        <ul>
            <li><b>Base Case:</b> If <code>left + 1 === right</code>, there are no balloons to burst between them. Return 0.</li>
            <li><b>Recursive Step:</b> Iterate through every possible balloon `i` to be the *last one* burst in the range `(left, right)`.
                <ul>
                    <li>If we burst balloon `i` last, the coins we get from this specific burst are <code>nums[left] * nums[i] * nums[right]</code>.</li>
                    <li>Before bursting `i`, we must have already burst all balloons to its left (in the range <code>(left, i)</code>) and all balloons to its right (in the range <code>(i, right)</code>).</li>
                    <li>The total score for this choice is <code>solve(left, i) + solve(i, right) + (coins from bursting i)</code>.</li>
                    <li>Keep track of the maximum score across all choices of `i`.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Memoize the results for <code>(left, right)</code> to avoid re-computation.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming (specifically, Interval DP)</li>
  <li>Memoization</li>
  <li>Problem transformation (thinking about the last action)</li>
</ul>
`,
  // problem explanation--> 166
  'recursion-remove-boxes': `
<h3>💡 Problem Breakdown</h3>
<p>This is a very hard dynamic programming problem. The score depends on removing contiguous blocks of same-colored boxes. The state needs to capture not just the subarray of boxes we're considering, but also how many boxes of the same color as the first element are "attached" to its left from previous operations.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>Let <code>solve(l, r, k)</code> be the maximum score from the subarray <code>boxes[l...r]</code>, given that there are `k` boxes to the left of <code>boxes[l]</code> that have the same color as <code>boxes[l]</code>.</p>
<ol>
    <li><b>Base Case:</b> If <code>l > r</code>, the subarray is empty. Score is 0.</li>
    <li><b>Recursive Step for <code>solve(l, r, k)</code>:</b>
        <ol>
            <li><b>Option 1: Remove the current group immediately.</b> The group consists of the `k` attached boxes plus the initial contiguous block of boxes at `l`. Let's say this block has size `m`. The score would be <code>(k+m)^2</code> plus the score from the rest of the array: <code>(k+m)^2 + solve(l+m, r, 0)</code>.</li>
            <li><b>Option 2: Try to merge with other blocks.</b> Find another box <code>boxes[i]</code> (where <code>i > l</code>) that has the same color as <code>boxes[l]</code>. If we find one, we can try to remove the boxes *between* `l` and `i` first. This gives us a score of <code>solve(l+1, i-1, 0)</code>. After they are gone, the block at `l` and the block at `i` become adjacent. We are now left with a subproblem where we have `k+1` boxes of that color attached to the left of the subarray `boxes[i...r]`. The score is <code>solve(l+1, i-1, 0) + solve(i, r, k+1)</code>.</li>
        </ol>
    </li>
    <li>The function returns the maximum score from all these options. Memoization on the state <code>(l, r, k)</code> is essential.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>State representation (3D DP)</li>
  <li>Memoization</li>
</ul>
`,
  // problem explanation--> 167
  'recursion-student-attendance-record-ii': `
<h3>💡 Problem Breakdown</h3>
<p>We need to count the number of valid attendance strings of length `n`. The constraints depend on the total count of 'A's and the consecutive count of 'L's. This suggests a recursive solution where the state tracks these counts.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will build the string character by character and count the valid completions from a given state.</p>
<ol>
    <li><b>Recursive Function State:</b> <code>solve(days_left, absent_count, consecutive_late_count)</code>.</li>
    <li><b>Memoization:</b> Use a map with the state as the key.</li>
    <li><b>Base Case 1 (Invalid):</b> If <code>absent_count >= 2</code> or <code>consecutive_late_count >= 3</code>, this is an invalid state. Return 0.</li>
    <li><b>Base Case 2 (Valid):</b> If <code>days_left === 0</code>, we have successfully built a valid string of length `n`. Return 1.</li>
    <li><b>Recursive Step:</b> From the current state, we have three choices for the next day:
        <ol>
            <li><b>Present ('P'):</b> Make a recursive call <code>solve(days_left - 1, absent_count, 0)</code>. The late count resets.</li>
            <li><b>Absent ('A'):</b> Make a recursive call <code>solve(days_left - 1, absent_count + 1, 0)</code>. The late count resets.</li>
            <li><b>Late ('L'):</b> Make a recursive call <code>solve(days_left - 1, absent_count, consecutive_late_count + 1)</code>.</li>
        </ol>
    </li>
    <li>The total number of ways is the sum of the results from these three choices (modulo the large number).</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming / Memoization</li>
  <li>Counting Problems</li>
  <li>State representation</li>
</ul>
`,
  // problem explanation--> 168
  'recursion-find-the-shortest-superstring': `
<h3>💡 Problem Breakdown</h3>
<p>This problem is equivalent to finding the path that visits every node in a graph exactly once and has the minimum total weight. This is the Traveling Salesperson Problem (TSP), which is NP-hard. For small `n`, we can solve it with dynamic programming and bitmasking.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Preprocessing:</b> Create a graph where nodes are the words. The weight of an edge from word `i` to word `j` is the length of word `j` minus the length of the maximum overlap between the end of `i` and the start of `j`.</li>
    <li><b>DP State:</b> <code>dp(mask, last_word_index)</code> will be the length of the shortest superstring for the subset of words represented by the bitmask `mask`, ending with the word at `last_word_index`.</li>
    <li><b>Recursive Function <code>solve(mask, last)</code>:</b>
        <ul>
            <li><b>Base Case:</b> If the mask has only one bit set (representing a single word), the length is just the length of that word.</li>
            <li><b>Recursive Step:</b> To compute <code>dp(mask, last)</code>, we try all possible previous words `prev` from the subset `mask`.
                <ul>
                    <li>The cost would be <code>solve(mask_without_last, prev) + cost_of_edge(prev, last)</code>.</li>
                    <li>We take the minimum over all possible `prev`.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>After filling the DP table, find the minimum value in the last row (where the mask includes all words).</li>
    <li>Backtrack through the DP table to reconstruct the actual path (the order of words) that gives the minimum length.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming with Bitmasking</li>
  <li>Traveling Salesperson Problem (TSP)</li>
  <li>Graph representation of a problem</li>
</ul>
`,
  // problem explanation--> 169
  'recursion-critical-connections-in-a-network': `
<h3>💡 Problem Breakdown</h3>
<p>A "critical connection" or "bridge" in a graph is an edge whose removal increases the number of connected components. This problem can be solved using a well-known algorithm based on Depth First Search (DFS), often attributed to Tarjan.</p>
<h3>⚙️ Solution Walkthrough (Tarjan's Bridge-Finding Algorithm)</h3>
<p>The algorithm uses a recursive DFS and keeps track of two values for each node `u`:</p>
<ul>
    <li><b>Discovery Time `disc[u]`:** The time (step count) at which `u` was first visited.</li>
    <li><b>Low-link Value `low[u]`:** The lowest discovery time reachable from `u` (including itself) through its DFS subtree, possibly using one back-edge.</li>
</ul>
<ol>
    <li>Start a DFS from an arbitrary node. Keep a global `time` counter.</li>
    <li><b>In the DFS for node `u`:</b>
        <ul>
            <li>Set `disc[u] = low[u] = time++`.</li>
            <li>For each neighbor `v` of `u`:
                <ul>
                    <li>If `v` is the parent that called `u`, ignore it.</li>
                    <li>If `v` has not been visited, recursively call `dfs(v, u)`. After the call returns, update `low[u] = Math.min(low[u], low[v])`.
                        <ul>
                            <li><b>Bridge Condition:</b> If <code>low[v] > disc[u]</code>, it means there is no back-edge from `v` or its descendants to `u` or any of its ancestors. Therefore, the edge `(u, v)` is a bridge.</li>
                        </ul>
                    </li>
                    <li>If `v` has been visited, it means we found a back-edge. Update `low[u] = Math.min(low[u], disc[v])`.</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Graph Theory (Bridges, Connectivity)</li>
  <li>Depth-First Search (DFS)</li>
  <li>Tarjan's Bridge-Finding Algorithm</li>
</ul>
`,
  // problem explanation--> 170
  'recursion-palindrome-partitioning-ii': `
<h3>💡 Problem Breakdown</h3>
<p>This is an optimization problem. We need to partition a string into palindromic substrings, but instead of finding all partitions, we want the one that uses the minimum number of cuts. This suggests a dynamic programming approach.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Preprocessing (Optional but helpful):</b> Create a 2D DP table <code>isPalindrome[i][j]</code> which is true if the substring from `i` to `j` is a palindrome. This can be pre-calculated efficiently.</li>
    <li><b>Recursive Function <code>solve(start_index)</code>:</b> This function will compute the minimum number of cuts needed for the suffix of the string starting at `start_index`.
        <ul>
            <li><b>Memoization:</b> Use an array/map to store the results for each starting index.</li>
            <li><b>Base Case:</b> If <code>start_index</code> is at or beyond the end of the string, or if the entire remaining string is a palindrome, 0 cuts are needed.</li>
            <li><b>Recursive Step:</b>
                <ul>
                    <li>Initialize <code>minCuts = Infinity</code>.</li>
                    <li>Iterate an `end_index` from `start_index` to the end of the string.</li>
                    <li>At each `end_index`, check if the substring from `start_index` to `end_index` is a palindrome.</li>
                    <li>If it is, this is a valid first cut. The total cuts for this choice would be <code>1 + solve(end_index + 1)</code>.</li>
                    <li>Update `minCuts` with the minimum value found across all valid cuts.</li>
                </ul>
            </li>
            <li>Memoize and return `minCuts`.</li>
        </ul>
    </li>
    <li>The final answer is <code>solve(0)</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>Memoization</li>
  <li>Palindrome Checking</li>
  <li>Optimization Problem</li>
</ul>
`,
  // problem explanation--> 171
  'recursion-max-value-of-equation': `
<h3>💡 Problem Breakdown</h3>
<p>The problem asks to maximize <code>yi + yj + |xi - xj|</code>. Since the points are sorted by x-coordinate, <code>xi < xj</code> for <code>i < j</code>, so <code>|xi - xj| = xj - xi</code>. The equation becomes <code>yi + yj + xj - xi</code>. We can rearrange this to <code>(yj + xj) + (yi - xi)</code>. For a fixed point `j`, we want to find a point `i` (with <code>i < j</code> and <code>xj - xi <= k</code>) that maximizes <code>yi - xi</code>.</p>
<h3>⚙️ Solution Walkthrough (Optimized)</h3>
<p>A brute-force recursive solution would be too slow. The optimized solution uses a sliding window approach with a data structure that can efficiently query for the maximum `yi - xi` in the current window.</p>
<ol>
    <li>Use a deque (double-ended queue) to store the indices `i` of the points in the current valid window. The deque will be maintained in decreasing order of their `yi - xi` values.</li>
    <li>Iterate through the points with index `j` (from left to right).
        <ul>
            <li><b>Maintain Window:</b> Remove indices `i` from the front of the deque if they are now too far away (<code>points[j][0] - points[i][0] > k</code>).</li>
            <li><b>Calculate Max:</b> If the deque is not empty, the index at the front of the deque gives the best `yi - xi` value for the current `j`. Calculate the potential maximum for this `j` and update the global max.</li>
            <li><b>Maintain Deque Order:</b> Before adding the current point `j` to the deque, remove indices from the back of the deque if their `yi - xi` value is less than or equal to the value for `j`. This keeps the deque sorted by value.</li>
            <li>Add `j` to the back of the deque.</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Equation Rearrangement</li>
  <li>Sliding Window Deque (Monotonic Queue)</li>
  <li>Optimization</li>
</ul>
`,
  // problem explanation--> 172
  'recursion-basic-calculator-ii': `
<h3>💡 Problem Breakdown</h3>
<p>This problem extends the basic calculator to include multiplication and division, which have higher precedence than addition and subtraction. This means we can't simply evaluate left-to-right. A recursive descent parser is a natural way to handle operator precedence.</p>
<h3>⚙️ Solution Walkthrough (Recursive Descent)</h3>
<p>We define a hierarchy of functions based on operator precedence:</p>
<ol>
    <li><b><code>parseExpression()</code>:</b> Handles the lowest precedence operators (+, -). It calls <code>parseTerm()</code> to get the value of a term, then loops to handle any subsequent '+' or '-' operations.</li>
    <li><b><code>parseTerm()</code>:</b> Handles the higher precedence operators (*, /). It calls <code>parseFactor()</code> to get the value of a factor, then loops to handle any subsequent '*' or '/' operations.</li>
    <li><b><code>parseFactor()</code>:</b> Handles the highest precedence items: numbers and parenthesized expressions.
        <ul>
            <li>If it sees a number, it parses the full number and returns it.</li>
            <li>If it sees an opening parenthesis '(', it makes a recursive call to <code>parseExpression()</code> to evaluate the sub-expression and consumes the closing ')'.</li>
        </ul>
    </li>
</ol>
<p>A global index is used to keep track of the current position in the string as it's being consumed by the parser functions.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Descent Parsing</li>
  <li>Operator Precedence</li>
  <li>Expression Trees (implicit)</li>
</ul>
`,
  // problem explanation--> 173
  'recursion-strange-printer': `
<h3>💡 Problem Breakdown</h3>
<p>This is a difficult dynamic programming problem. The key is to figure out the recursive structure. Let <code>dp(i, j)</code> be the minimum turns to print the substring <code>s[i...j]</code>. The base case is <code>dp(i, i) = 1</code> (one turn for one character).</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>For <code>dp(i, j)</code>, we can always print the character <code>s[i]</code> first and then solve for the rest, which gives <code>1 + dp(i+1, j)</code>. However, we can do better if there's another character <code>s[k]</code> within the range `(i, j]` that is the same as <code>s[i]</code>. If <code>s[k] === s[i]</code>, we can use the same print operation that printed <code>s[i]</code> to also print <code>s[k]</code>. This splits the problem into two independent subproblems: printing the part between `i` and `k` (<code>s[i+1...k-1]</code>) and the part after `k` (<code>s[k+1...j]</code>). The number of turns would then be <code>dp(i, k-1) + dp(k+1, j)</code>. We take the minimum over all such `k`.</p>
<ol>
    <li><b>Recursive Function <code>solve(i, j)</code>:</b>
        <ul>
            <li><b>Base Case:</b> If <code>i > j</code>, we need 0 turns.</li>
            <li><b>Memoization:</b> Check if the result for <code>(i, j)</code> is already computed.</li>
            <li><b>Recursive Step:</b>
                <ol>
                    <li>Initialize the answer with the simple case: <code>res = 1 + solve(i + 1, j)</code>.</li>
                    <li>Iterate <code>k</code> from <code>i+1</code> to <code>j</code>.</li>
                    <li>If <code>s[k] === s[i]</code>, update the answer: <code>res = Math.min(res, solve(i, k - 1) + solve(k + 1, j))</code>. Note: some formulations might use <code>solve(i+1, k)</code> here depending on the exact state definition.</li>
                </ol>
            </li>
            <li>Memoize and return <code>res</code>.</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming (Interval DP)</li>
  <li>Memoization</li>
  <li>Optimal Substructure</li>
</ul>
`,
  // problem explanation--> 174
  'recursion-number-of-ways-to-reorder-array-to-get-same-bst': `
<h3>💡 Problem Breakdown</h3>
<p>The first element of an array always becomes the root of the BST. All smaller elements go to the left, and all larger elements go to the right. The key insight is that the relative order of elements *within* the left group and *within* the right group must be preserved to form the same respective subtrees. However, we can interleave the elements from the left and right groups in any way we choose. The problem reduces to finding how many ways we can interleave the left subarray and the right subarray, multiplied by the number of ways to form the left and right subtrees recursively.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li>The number of ways to interleave `m` elements from the left and `n` elements from the right into `m+n` spots is given by the binomial coefficient "m+n choose m". We need a way to calculate combinations.</li>
    <li><b>Recursive Function <code>solve(arr)</code>:</b>
        <ul>
            <li><b>Base Case:</b> If the array has 2 or fewer elements, there's only 1 way to arrange them to form the BST. Return 1.</li>
            <li><b>Recursive Step:</b>
                <ol>
                    <li>The first element is the root.</li>
                    <li>Partition the rest of the array into a `left` subarray (elements smaller than the root) and a `right` subarray.</li>
                    <li>Calculate the number of ways to interleave these two subarrays: <code>combinations(left.length + right.length, left.length)</code>.</li>
                    <li>Recursively find the number of valid orderings for the left subtree: <code>solve(left)</code>.</li>
                    <li>Recursively find the number of valid orderings for the right subtree: <code>solve(right)</code>.</li>
                    <li>The total number of ways is the product of these three values.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>The final answer is <code>solve(nums) - 1</code> because the original ordering is not counted as a "reordering".</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Binary Search Trees</li>
  <li>Combinatorics (Binomial Coefficient)</li>
  <li>Divide and Conquer</li>
  <li>Recursion on Subproblems</li>
</ul>
`,
  // problem explanation--> 175
  'recursion-cherry-pickup-ii': `
<h3>💡 Problem Breakdown</h3>
<p>This is a dynamic programming problem involving two paths simultaneously. We have two robots moving down the grid. The state of our system at any point is defined by the current row and the column positions of both robots. We want to maximize the cherries collected.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive function with memoization can solve this. The function will represent the maximum cherries that can be collected from a given state downwards.</p>
<ol>
    <li><b>Recursive Function State:</b> <code>solve(row, col1, col2)</code>, where `row` is the current row, and `col1`, `col2` are the columns of robot 1 and robot 2.</li>
    <li><b>Base Case:</b> If `row` reaches the end of the grid, no more cherries can be collected. Return 0.</li>
    <li><b>Memoization:</b> Use a 3D array or a map with a key like <code>`${row}-${col1}-${col2}`</code>.</li>
    <li><b>Recursive Step:</b>
        <ol>
            <li>Calculate the cherries collected at the current row: <code>cherries = grid[row][col1] + (col1 === col2 ? 0 : grid[row][col2])</code>.</li>
            <li>Find the maximum cherries that can be collected from the *next* row. Robot 1 can move to <code>col1-1, col1, col1+1</code> and robot 2 can move to <code>col2-1, col2, col2+1</code>. We need to explore all 9 (3x3) possible combinations of their next moves.</li>
            <li>Iterate through all possible next positions (<code>next_col1</code>, <code>next_col2</code>) and make a recursive call <code>solve(row + 1, next_col1, next_col2)</code>.</li>
            <li>The total for the current state is <code>cherries + max(results of all 9 recursive calls)</code>.</li>
            <li>Memoize and return this total.</li>
        </ol>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>Memoization</li>
  <li>Grid Traversal (from two points)</li>
  <li>State representation</li>
</ul>
`,
  // problem explanation--> 176
  'recursion-largest-rectangle-in-histogram': `
<h3>💡 Problem Breakdown</h3>
<p>We want to find the rectangle with the largest area in a histogram. For any given bar, the tallest rectangle that includes this bar will have the height of this bar and will extend as far left and right as possible without encountering a shorter bar. A divide and conquer approach can solve this.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will find the largest rectangle in a given range of the histogram `[start, end]`.</p>
<ol>
    <li><b>Base Case:</b> If <code>start > end</code>, the range is invalid. Return 0.</li>
    <li><b>Recursive Step (Divide):</b>
        <ol>
            <li>Find the index of the *shortest* bar in the current range <code>[start, end]</code>. Let this be <code>minIndex</code>.</li>
            <li>The largest rectangle can be one of three possibilities:
                <ol>
                    <li>A rectangle whose height is limited by this shortest bar, spanning the entire current range. Its area is <code>heights[minIndex] * (end - start + 1)</code>.</li>
                    <li>The largest rectangle is entirely within the left part of the range, to the left of the shortest bar. We find this with a recursive call: <code>calculate(start, minIndex - 1)</code>.</li>
                    <li>The largest rectangle is entirely within the right part. We find this with another recursive call: <code>calculate(minIndex + 1, end)</code>.</li>
                </ol>
            </li>
            <li>Return the maximum of these three values.</li>
        </ol>
    </li>
</ol>
<p>While this recursive solution is correct, its performance can be O(n^2) in the worst case (a sorted histogram). The most optimal solution uses a stack and is iterative, achieving O(n) time.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Divide and Conquer</li>
  <li>Optimization Problem</li>
  <li>Recursive partitioning</li>
</ul>
`,
  // problem explanation--> 177
  'recursion-reverse-pairs': `
<h3>💡 Problem Breakdown</h3>
<p>We need to count pairs `(i, j)` where `i < j` and `nums[i] > 2 * nums[j]`. A naive O(n^2) check is too slow. This problem has a structure that lends itself to a divide and conquer approach, specifically a modified merge sort, similar to the "Count of Smaller Numbers After Self" problem.</p>
<h3>⚙️ Solution Walkthrough (Merge Sort)</h3>
<p>The key idea is that when we are merging two sorted subarrays, `left` and `right`, for any element `left[i]`, we need to find how many elements `right[j]` satisfy the condition `left[i] > 2 * right[j]`.</p>
<ol>
    <li>The `mergeSort` function recursively splits the array until it reaches single-element arrays.</li>
    <li><b>Modified Merge Step:</b> When merging a sorted `left` and `right` subarray:
        <ol>
            <li>Before the standard merge, we do the counting. Use two pointers, `i` for the left array and `j` for the right.</li>
            <li>For each element `left[i]`, advance pointer `j` in the right array as long as `left[i] > 2 * right[j]`.</li>
            <li>The value of `j` at this point tells us how many elements in the right array form a reverse pair with `left[i]`. Add `j` to the global `count`.</li>
            <li>After iterating through all `i` in the left array, the count for this merge step is complete.</li>
            <li>Proceed with the standard merge logic to create a single sorted array to be returned to the parent call.</li>
        </ol>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Divide and Conquer (Merge Sort)</li>
  <li>Inversion Counting (modified)</li>
  <li>Two-pointer technique within a recursive structure</li>
</ul>
`,
  // problem explanation--> 178
  'recursion-minimum-cost-to-merge-stones': `
<h3>💡 Problem Breakdown</h3>
<p>This is a hard dynamic programming problem. We need to find the minimum cost to merge all piles into one by repeatedly merging `k` consecutive piles. The problem has optimal substructure and overlapping subproblems.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Initial Check:</b> If we start with `n` piles and each merge operation reduces the pile count by `k-1`, then to get to 1 pile, `(n-1)` must be a multiple of `(k-1)`. If not, it's impossible.</li>
    <li><b>Preprocessing:</b> A prefix sum array is very useful to quickly calculate the sum of stones in a range, which is the cost of a merge.</li>
    <li><b>Recursive Function State:</b> A 3D DP state is needed: <code>solve(i, j, piles)</code> will be the minimum cost to merge the subarray of stones from index `i` to `j` into exactly `piles` number of piles.</li>
    <li><b>Recursive Logic for <code>solve(i, j, piles)</code>:</b>
        <ul>
            <li><b>Base Case:</b> If <code>i === j</code>, we have one pile. The cost is 0 if <code>piles === 1</code>, otherwise it's <code>Infinity</code> (impossible).</li>
            <li><b>Recursive Step for <code>piles === 1</code>:</b> To get 1 pile, we must have first merged the stones into `k` piles and then performed one final merge. The cost is <code>solve(i, j, k) + sum(stones[i...j])</code>.</li>
            <li><b>Recursive Step for <code>piles > 1</code>:</b> To get `piles` number of piles, we must have merged a left part into 1 pile and a right part into <code>piles - 1</code> piles. We can split the array at any point `mid`. The cost is <code>solve(i, mid, 1) + solve(mid + 1, j, piles - 1)</code>. We iterate through all possible split points `mid` and take the minimum.</li>
        </ul>
    </li>
    <li>Memoization is essential for the state <code>(i, j, piles)</code>. The final answer is <code>solve(0, n-1, 1)</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming (Interval DP)</li>
  <li>Memoization (3D state)</li>
  <li>Prefix Sums</li>
</ul>
`,
  // problem explanation--> 179
  'recursion-sum-of-distances-in-tree': `
<h3>💡 Problem Breakdown</h3>
<p>A naive approach of running a BFS/DFS from every node to calculate the sum of distances to all other nodes would be O(n^2), which is too slow. A more efficient O(n) solution uses two recursive DFS traversals.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>DFS 1 (Post-order Traversal):</b>
        <ul>
            <li>This DFS travels from the leaves up to the root (arbitrarily chosen, say node 0).</li>
            <li>For each node `u`, it calculates two things:
                <ol>
                    <li><code>count[u]</code>: The number of nodes in the subtree rooted at `u` (including `u`).</li>
                    <li><code>ans[u]</code>: The sum of distances from `u` to all nodes in its own subtree. This can be calculated from the results of its children: <code>ans[u] = sum(ans[child] + count[child]) for all children</code>.</li>
                </ol>
            </li>
            <li>After this pass, <code>ans[0]</code> will hold the correct final answer for the root node.</li>
        </ul>
    </li>
    <li><b>DFS 2 (Pre-order Traversal):</b>
        <ul>
            <li>This DFS travels from the root down to the leaves.</li>
            <li>It uses the results from DFS 1 to calculate the correct answer for all other nodes.</li>
            <li>When moving from a parent `u` to a child `v`, the answer for `v` can be derived from the answer for `u`. The distances to nodes in `v`'s subtree decrease by 1 each. The distances to nodes *not* in `v`'s subtree increase by 1 each.</li>
            <li>The formula is: <code>ans[v] = ans[u] - count[v] + (n - count[v])</code>.</li>
            <li>We apply this formula recursively down the tree.</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Algorithms</li>
  <li>Depth-First Search (DFS)</li>
  <li>Dynamic Programming on Trees</li>
  <li>Re-rooting technique</li>
</ul>
`,
  // problem explanation--> 180
  'recursion-number-of-ways-to-stay-in-the-same-place-after-some-steps': `
<h3>💡 Problem Breakdown</h3>
<p>This is a counting problem that can be solved with dynamic programming. We need to find the number of sequences of `steps` moves (left, right, stay) that start at index 0 and end at index 0, without going out of bounds. The state is defined by the number of steps remaining and the current position.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will count the number of ways to get back to index 0 from a given state.</p>
<ol>
    <li><b>State:</b> <code>solve(pos, stepsLeft)</code> will be the number of ways to return to 0 from position `pos` with `stepsLeft` steps remaining.</li>
    <li><b>Optimization:</b> Notice that we can never reach an index greater than `steps`. So, the effective array length is `min(steps, arrLen)`.</li>
    <li><b>Base Case 1 (Success):</b> If <code>stepsLeft === 0</code>, we have used all steps. If <code>pos === 0</code>, we found one valid way. Return 1. Otherwise, return 0.</li>
    <li><b>Base Case 2 (Pruning):</b> If <code>pos < 0</code>, <code>pos >= arrLen</code>, or <code>pos > stepsLeft</code> (it's impossible to get back to 0 in time), this is an invalid path. Return 0.</li>
    <li><b>Recursive Step:</b> From the current state, we have three possible moves. The total number of ways is the sum of the ways from the resulting states:
        <ul>
            <li>Move Left: <code>solve(pos - 1, stepsLeft - 1)</code></li>
            <li>Move Right: <code>solve(pos + 1, stepsLeft - 1)</code></li>
            <li>Stay: <code>solve(pos, stepsLeft - 1)</code></li>
        </ul>
    </li>
    <li>Memoize the result for the state `(pos, stepsLeft)`. Remember to use modulo arithmetic at each addition.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming / Memoization</li>
  <li>Counting Problems</li>
  <li>State representation</li>
  <li>Pruning the search space</li>
</ul>
`,
  // problem explanation--> 181
  'recursion-string-transformation': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic shortest path problem on a graph. The nodes of the graph are the words (`start`, `end`, and all words in the dictionary). An edge exists between two words if they differ by exactly one letter. We want to find the length of the shortest path from `start` to `end`. Breadth-First Search (BFS) is the standard algorithm for finding shortest paths in unweighted graphs.</p>
<h3>⚙️ Solution Walkthrough (BFS)</h3>
<p>While not purely recursive in its typical implementation, BFS explores the graph layer by layer.</p>
<ol>
    <li><b>State:</b> A queue will store tuples of `(currentWord, level)`. A `visited` set is needed to avoid cycles.</li>
    <li><b>Initialization:</b> Add `(start, 1)` to the queue and `start` to the visited set.</li>
    <li><b>BFS Loop:</b> While the queue is not empty:
        <ol>
            <li>Dequeue the current `word` and its `level`.</li>
            <li>If `word === end`, we have found the shortest path. Return `level`.</li>
            <li><b>Find Neighbors:</b> Generate all possible "neighbors" of the current word. A neighbor is a word that can be formed by changing one letter.
                <ul>
                    <li>For each character position in the word, try changing it to every letter from 'a' to 'z'.</li>
                    <li>For each `newWord` generated: if it's in the dictionary and hasn't been visited, add it to the visited set and enqueue it with `level + 1`.</li>
                </ul>
            </li>
        </ol>
    </li>
    <li>If the loop finishes and we haven't reached the end, no path exists. Return 0.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Graph Theory (Shortest Path)</li>
  <li>Breadth-First Search (BFS)</li>
  <li>Implicit Graph (nodes/edges are not given, but defined by rules)</li>
</ul>
`,
  // problem explanation--> 182
  'recursion-find-all-anagrams-in-a-string': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find all occurrences of anagrams of a pattern string `p` within a larger string `s`. An anagram has the same characters with the same frequencies. This problem is best solved with the sliding window technique, which is iterative. A recursive approach would be highly inefficient due to repeated work.</p>
<h3>⚙️ Solution Walkthrough (Sliding Window)</h3>
<ol>
    <li><b>Character Counts:</b> Create a frequency map (an array of size 26 or a hash map) for the characters in the pattern `p`.</li>
    <li><b>Initialize Window:</b> Create a window of the same size as `p` at the beginning of `s`. Create a frequency map for the characters in this initial window.</li>
    <li><b>Sliding:</b> Iterate from the end of the initial window to the end of `s`.
        <ol>
            <li><b>Check:</b> In each step, compare the frequency map of the current window with the frequency map of `p`. If they are identical, the window contains an anagram. Add the starting index of the window to the results.</li>
            <li><b>Slide:</b> To move the window one step to the right, add the new character at the right end to the window's frequency map and remove the character at the left end.</li>
        </ol>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Sliding Window Technique</li>
  <li>Frequency Maps / Character Counting</li>
  <li>String Searching</li>
</ul>
`,
  // problem explanation--> 183
  'recursion-count-good-nodes-in-binary-tree': `
<h3>💡 Problem Breakdown</h3>
<p>A node is "good" if its value is greater than or equal to the value of all nodes on the path from the root to it. This means we need to keep track of the maximum value encountered so far as we traverse down the tree.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive Depth-First Search (DFS) is a perfect fit. The recursive function can pass down the maximum value seen on the path so far.</p>
<ol>
    <li><b>Recursive Function State:</b> <code>dfs(node, maxSoFar)</code>.</li>
    <li><b>Base Case:</b> If `node` is null, there are no good nodes here. Return 0.</li>
    <li><b>Recursive Step:</b>
        <ol>
            <li><b>Check Current Node:</b> Compare the current node's value with `maxSoFar`. If <code>node.value >= maxSoFar</code>, then this node is a "good" node. Initialize a local <code>count = 1</code>. Otherwise, <code>count = 0</code>.</li>
            <li><b>Update Max for Children:</b> The new maximum value to pass down to the children is <code>Math.max(maxSoFar, node.value)</code>.</li>
            <li><b>Recurse:</b> Make recursive calls for the left and right children using this new maximum:
                <ul>
                    <li><code>count += dfs(node.left, newMax)</code></li>
                    <li><code>count += dfs(node.right, newMax)</code></li>
                </ul>
            </li>
            <li>Return the total `count`.</li>
        </ol>
    </li>
    <li>The initial call will be <code>dfs(root, -Infinity)</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal (DFS, Pre-order)</li>
  <li>Passing state down through recursion</li>
</ul>
`,
  // problem explanation--> 184
  'recursion-sum-root-to-leaf-numbers': `
<h3>💡 Problem Breakdown</h3>
<p>Each path from the root to a leaf forms a number. We need to find all such numbers and sum them up. As we traverse down a path, we are essentially building a number digit by digit.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>A recursive DFS can be used to traverse all root-to-leaf paths. The recursive function will carry the value of the number formed by the path so far.</p>
<ol>
    <li><b>Recursive Function State:</b> <code>dfs(node, currentNumber)</code>.</li>
    <li><b>Base Case:</b> If `node` is null, this path is invalid. Return 0.</li>
    <li><b>Recursive Step:</b>
        <ol>
            <li>Update the number for the current path: <code>newNumber = currentNumber * 10 + node.value</code>.</li>
            <li><b>Leaf Check:</b> If the current node is a leaf (no left and no right child), then we have completed a root-to-leaf path. The number for this path is <code>newNumber</code>. Return it.</li>
            <li><b>Recurse:</b> If it's not a leaf, make recursive calls for the left and right children, passing the <code>newNumber</code>. The total sum from this node's subtrees is the sum of the results from these two calls: <code>dfs(node.left, newNumber) + dfs(node.right, newNumber)</code>.</li>
            <li>Return this sum.</li>
        </ol>
    </li>
    <li>The initial call will be <code>dfs(root, 0)</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal (DFS, Pre-order)</li>
  <li>Path-based calculations</li>
  <li>Passing state down through recursion</li>
</ul>
`,
  // problem explanation--> 185
  'recursion-binary-tree-maximum-path-sum': `
<h3>💡 Problem Breakdown</h3>
<p>This is a classic and challenging tree problem. We need to find the path with the maximum sum between any two nodes. The path can start and end anywhere and does not have to go through the root. The key difficulty is that a path can "bend" at a node, including its left and right children.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The structure is similar to the "Tree Diameter" problem. The recursive function will return the maximum path sum starting from the current node and going *downwards* in a straight line (an "arrow"). While doing this, it will update a global variable for the overall maximum path sum, which could include a "bend".</p>
<ol>
    <li>Initialize a global `maxSum` variable to <code>-Infinity</code>.</li>
    <li><b>Recursive Helper (DFS):</b> The function returns the max "arrow" sum from the current node.
        <ul>
            <li><b>Base Case:</b> If the node is null, the path sum is 0.</li>
            <li><b>Recursive Step:</b>
                <ol>
                    <li>Recursively find the max arrow sum from the left child: <code>leftSum = dfs(node.left)</code>. Since paths can't have negative contributions, we take <code>Math.max(0, leftSum)</code>.</li>
                    <li>Do the same for the right child: <code>rightSum = Math.max(0, dfs(node.right))</code>.</li>
                    <li><b>Update Global Max:</b> A path that "bends" at the current node has a sum of <code>node.value + leftSum + rightSum</code>. We update the global `maxSum` with this value if it's larger.</li>
                    <li><b>Return Value:</b> The function must return the max *straight* path sum downwards from the current node to its parent. This is <code>node.value + Math.max(leftSum, rightSum)</code>.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>Call the helper on the root and then return the final `maxSum`.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal (DFS, Post-order)</li>
  <li>Path Sums</li>
  <li>Distinguishing between return value and global state update</li>
</ul>
`,
  // problem explanation--> 186
  'recursion-all-nodes-distance-k-in-binary-tree': `
<h3>💡 Problem Breakdown</h3>
<p>This is a challenging tree problem because it requires traversing not just downwards (to children) but also upwards (to parents). A standard DFS/BFS from the target node only covers its descendants. To solve this, we need to treat the tree like a graph.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
  <li><b>Step 1: Build Parent Pointers.</b> First, traverse the entire tree once to create a map where each node points to its parent. This allows us to move upwards. Also, find the reference to the target node during this traversal.</li>
  <li><b>Step 2: Graph Traversal from Target.</b> Starting from the target node, perform a graph traversal (like BFS or DFS).
    <ul>
        <li>Use a <code>visited</code> set to ensure we don't visit the same node twice (which would cause an infinite loop when moving between parent and child).</li>
        <li>The state in our recursion/queue will be <code>(node, distance)</code>.</li>
        <li>Start with <code>(targetNode, 0)</code>.</li>
        <li>In each step, explore the node's left child, right child, and its parent (from the map), incrementing the distance.</li>
        <li>If the current distance equals 'k', add the node's value to our result list.</li>
    </ul>
  </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Graph Traversal on a Tree</li>
  <li>Converting a tree to a graph representation (implicitly with parent pointers)</li>
  <li>Breadth-First Search (BFS) or Depth-First Search (DFS)</li>
</ul>
`,
  // problem explanation--> 187
  'recursion-unique-binary-search-trees': `
<h3>💡 Problem Breakdown</h3>
<p>This is a counting problem related to Catalan numbers. We need to find the number of structurally unique BSTs with `n` nodes. The key insight is recursive: if we pick a number `i` as the root, then `i-1` nodes must form the left subtree, and `n-i` nodes must form the right subtree. The total number of trees with `i` as the root is the product of the number of possible left subtrees and the number of possible right subtrees.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function `solve(n)` will compute the number of unique BSTs with `n` nodes.</p>
<ol>
    <li><b>Base Case:</b> If `n <= 1`, there is only one way to form the tree (either empty or a single node). Return 1.</li>
    <li><b>Memoization:</b> Use an array or map to store the results for each `n`.</li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>Initialize a `total` count to 0.</li>
            <li>Iterate a root choice `i` from 1 to `n`.</li>
            <li>For each `i`, the number of nodes in the left subtree is `i - 1`, and in the right is `n - i`.</li>
            <li>The number of combinations for this root `i` is <code>solve(i - 1) * solve(n - i)</code>.</li>
            <li>Add this to the `total`.</li>
        </ul>
    </li>
    <li>Memoize and return the `total`.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming / Memoization</li>
  <li>Catalan Numbers</li>
  <li>Recursive Counting</li>
  <li>Binary Search Trees</li>
</ul>
`,
  // problem explanation--> 188
  'recursion-step-by-step-directions-from-a-binary-tree-node-to-another': `
<h3>💡 Problem Breakdown</h3>
<p>The problem asks for the shortest path between two nodes in a binary tree. The shortest path will always go "up" from the start node to their lowest common ancestor (LCA), and then "down" from the LCA to the destination node. The path up is represented by 'U's, and the path down by 'L's and 'R's.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Find LCA:</b> First, find the Lowest Common Ancestor of the start and destination nodes. (This can be done with the recursive method from problem #117).</li>
    <li><b>Find Path from LCA:</b> We need a recursive helper function <code>findPath(node, target, path_array)</code> that finds the path from a given `node` to a `target` value and stores the directions ('L' or 'R') in an array.
        <ul>
            <li>This is a standard recursive DFS. If the target is found, return true. Try the left path, if it fails, backtrack and try the right path.</li>
        </ul>
    </li>
    <li><b>Calculate Paths:</b>
        <ul>
            <li>Call `findPath` from the LCA to the `startValue` to get the path down to the start.</li>
            <li>Call `findPath` from the LCA to the `destValue` to get the path down to the destination.</li>
        </ul>
    </li>
    <li><b>Combine Paths:</b>
        <ul>
            <li>The path from the start node *up* to the LCA consists of one 'U' for every step in the path *down* from the LCA to the start.</li>
            <li>Concatenate this with the path down from the LCA to the destination.</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Lowest Common Ancestor (LCA)</li>
  <li>Pathfinding in a Tree (DFS)</li>
  <li>Problem Decomposition</li>
</ul>
`,
  // problem explanation--> 189
  'recursion-minimum-difficulty-of-a-job-schedule': `
<h3>💡 Problem Breakdown</h3>
<p>This is a dynamic programming problem. We need to partition the `jobDifficulty` array into `d` contiguous subarrays (one for each day). We want to minimize the sum of the maximums of these subarrays. The state of our subproblem can be defined by the starting job index and the number of days remaining.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function `solve(i, daysLeft)` will find the minimum difficulty for scheduling jobs from index `i` to the end in `daysLeft` days.</p>
<ol>
    <li><b>Initial Check:</b> If the number of jobs is less than the number of days `d`, it's impossible. Return -1.</li>
    <li><b>Memoization:</b> Use a 2D array or map to store results for the state `(i, daysLeft)`.</li>
    <li><b>Base Case:</b> If <code>daysLeft === 1</code>, we must do all remaining jobs (from `i` to end) on this last day. The difficulty is the maximum of the jobs in this range.</li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>Initialize `minDifficulty = Infinity`.</li>
            <li>Initialize `maxForDay = 0`.</li>
            <li>Iterate a split point `j` from `i` up to the latest possible end for the current day (which is <code>n - daysLeft</code>).
                <ul>
                    <li>Update `maxForDay` with <code>jobDifficulty[j]</code>.</li>
                    <li>The total difficulty for this split is `maxForDay + solve(j + 1, daysLeft - 1)`.</li>
                    <li>Update `minDifficulty` with the minimum found across all splits.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Memoize and return `minDifficulty`.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming</li>
  <li>Memoization</li>
  <li>Partition Problem</li>
  <li>Optimization</li>
</ul>
`,
  // problem explanation--> 190
  'recursion-path-sum-iii': `
<h3>💡 Problem Breakdown</h3>
<p>We need to count paths that sum to a target, where the paths can start and end anywhere in the tree, as long as they go downwards. A naive solution would be to start a DFS from every node to find paths starting at that node. This is O(n^2) or O(n log n). A more efficient O(n) solution uses the concept of prefix sums.</p>
<h3>⚙️ Solution Walkthrough (Prefix Sum)</h3>
<p>As we traverse the tree, we maintain the sum of the path from the root to the current node (the prefix sum). If the current prefix sum is `currSum`, and we are looking for a `targetSum`, we need to find if there was a previous node on this path with a prefix sum of `currSum - targetSum`. If so, the path between that previous node and the current node has the desired sum.</p>
<ol>
    <li>Use a hash map `prefixSumCount` to store the frequencies of prefix sums encountered on the current path from the root. Initialize it with `{0: 1}` to handle paths that start from the root.</li>
    <li><b>Recursive DFS Function <code>dfs(node, currentSum)</code>:</b>
        <ul>
            <li><b>Base Case:</b> If `node` is null, return 0.</li>
            <li><b>Process Current Node:</b>
                <ol>
                    <li>Update the prefix sum: <code>currentSum += node.value</code>.</li>
                    <li>Check the map for <code>prefixSumCount[currentSum - targetSum]</code>. This gives the number of paths ending at the current node with the target sum. Add this to our total `count`.</li>
                    <li>Increment the count for the current prefix sum in the map: <code>prefixSumCount[currentSum]++</code>.</li>
                </ol>
            </li>
            <li><b>Recurse:</b> <code>count += dfs(node.left, currentSum) + dfs(node.right, currentSum)</code>.</li>
            <li><b>Backtrack:</b> After the recursive calls for the children return, we must remove the current node's prefix sum from the map to ensure it doesn't affect sibling paths: <code>prefixSumCount[currentSum]--</code>.</li>
            <li>Return the `count`.</li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Prefix Sum Technique on a Tree</li>
  <li>Hash Map for efficient lookups</li>
  <li>Backtracking state in a DFS</li>
</ul>
`,
  // problem explanation--> 191
  'recursion-count-univalue-subtrees': `
<h3>💡 Problem Breakdown</h3>
<p>A univalue subtree is one where all nodes have the same value. We need to count how many such subtrees exist in a given binary tree. A post-order traversal is a natural fit, as we need to know if the children form univalue subtrees before we can decide about the parent.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function will do two things: check if the subtree at the current node is univalue, and as a side effect, increment a global counter.</p>
<ol>
    <li>Initialize a global <code>count</code> to 0.</li>
    <li><b>Recursive Helper <code>isUnival(node)</code>:</b> This function returns `true` if the subtree at `node` is univalue, and `false` otherwise.
        <ul>
            <li><b>Base Case:</b> If `node` is null, it's technically a univalue subtree (vacuously true), so return `true`.</li>
            <li><b>Recursive Step (Post-order):</b>
                <ol>
                    <li>Recursively check the left and right children: <code>isLeftUnival = isUnival(node.left)</code>, <code>isRightUnival = isUnival(node.right)</code>.</li>
                    <li>If both children form univalue subtrees, now check the values. The current subtree is univalue only if the parent's value matches the children's values (if they exist).
                        <ul>
                            <li>Condition: <code>(node.left ? node.value === node.left.value : true)</code></li>
                            <li>Condition: <code>(node.right ? node.value === node.right.value : true)</code></li>
                        </ul>
                    </li>
                    <li>If all conditions are met (both children are univalue and values match), then the current subtree is univalue. Increment the global `count` and return `true`.</li>
                    <li>If any condition fails, return `false`.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>Call the helper on the root and return the final `count`.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Tree Traversal (Post-order)</li>
  <li>Recursive definition of a property</li>
  <li>Side effects in recursion</li>
</ul>
`,
  // problem explanation--> 192
  'recursion-all-possible-full-binary-trees': `
<h3>💡 Problem Breakdown</h3>
<p>A full binary tree is one where every node has either 0 or 2 children. An important property is that any full binary tree must have an odd number of nodes. The problem asks us to generate all possible structures for a given `n`. This is a constructive recursion problem, similar to "Unique Binary Search Trees II".</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function <code>solve(n)</code> will return a list of all possible full binary trees with `n` nodes.</p>
<ol>
    <li><b>Memoization:</b> Use a map to store the list of trees for each `n`.</li>
    <li><b>Base Cases:</b>
        <ul>
            <li>If `n` is even, it's impossible. Return an empty list.</li>
            <li>If `n === 1`, there's only one possibility: a single node. Return a list containing this node.</li>
        </ul>
    </li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>A tree with `n` nodes has a root, a left subtree, and a right subtree. The total nodes are `1 (root) + left_nodes + right_nodes = n`.</li>
            <li>Iterate through all possible numbers of nodes for the left subtree, `i`. Since subtrees must also be full, `i` must be odd (1, 3, 5, ...).</li>
            <li>The number of nodes for the right subtree will be `n - 1 - i`.</li>
            <li>Recursively get all possible left subtrees: <code>leftTrees = solve(i)</code>.</li>
            <li>Recursively get all possible right subtrees: <code>rightTrees = solve(n - 1 - i)</code>.</li>
            <li>Combine them: for every `leftTree` and every `rightTree`, create a new root node and attach them. Add this new tree to the results.</li>
        </ul>
    </li>
    <li>Memoize and return the result list.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Recursive Construction</li>
  <li>Divide and Conquer</li>
  <li>Memoization</li>
  <li>Properties of Full Binary Trees</li>
</ul>
`,
  // problem explanation--> 193
  'recursion-longest-string-chain': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the longest sequence of words where each word is a "predecessor" of the next (formed by adding one character). This can be modeled as finding the longest path in a Directed Acyclic Graph (DAG), where words are nodes and an edge exists from `word1` to `word2` if `word2` is a predecessor of `word1`. This structure lends itself to a recursive DFS with memoization.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Preprocessing:</b> Sort the words by length. This ensures that when we process a word, we have already processed all of its potential predecessors. Also, put all words into a Set for fast lookups.</li>
    <li><b>Recursive Function <code>findLongest(word)</code>:</b> This function will find the length of the longest chain *ending* with the given `word`.
        <ul>
            <li><b>Memoization:</b> Use a map to store the result for each word.</li>
            <li><b>Base Case:</b> The shortest chain is the word itself, so length is 1.</li>
            <li><b>Recursive Step:</b>
                <ul>
                    <li>Initialize <code>maxLength = 1</code>.</li>
                    <li>Generate all possible predecessors of the current `word` by removing one character at each position.</li>
                    <li>For each generated `predecessor`, check if it exists in our word set.</li>
                    <li>If it does, the chain length can be <code>1 + findLongest(predecessor)</code>. Update <code>maxLength</code> with the maximum value found.</li>
                </ul>
            </li>
            <li>Memoize and return <code>maxLength</code>.</li>
        </ul>
    </li>
    <li><b>Main Loop:</b> Iterate through the sorted words and call <code>findLongest</code> for each one. Keep track of the overall maximum chain length found.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Dynamic Programming / Memoization</li>
  <li>Longest Path in a DAG</li>
  <li>String Manipulation</li>
</ul>
`,
  // problem explanation--> 194
  'recursion-alien-dictionary': `
<h3>💡 Problem Breakdown</h3>
<p>The list of words is sorted according to an unknown alphabetical order. We can deduce the relative order of characters by comparing adjacent words. For example, if "wrt" comes before "wrf", it implies that 't' comes before 'f'. These ordering rules form a directed graph where characters are nodes and a rule 't' -> 'f' is a directed edge. The problem is then to find a topological sort of this graph.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Step 1: Build the Graph.</b>
        <ul>
            <li>Create an adjacency list (map) for all unique characters.</li>
            <li>Compare every pair of adjacent words in the input list. Find the first character that differs. This gives you an ordering rule. Add a directed edge in your graph (e.g., from `w1[j]` to `w2[j]`).</li>
            <li>Handle edge cases like "abc" coming before "ab", which is invalid.</li>
        </ul>
    </li>
    <li><b>Step 2: Topological Sort (using DFS).</b>
        <ul>
            <li>A topological sort gives a linear ordering of nodes such that for every directed edge from `u` to `v`, `u` comes before `v` in the ordering. This is exactly what we need.</li>
            <li>We need a `visited` set to track the state of each node (unvisited, visiting, visited) to detect cycles. A cycle means the ordering is contradictory and impossible.</li>
            <li><b>Recursive DFS Function:</b>
                <ul>
                    <li>Mark the current node as "visiting".</li>
                    <li>For each neighbor, recursively call DFS. If a neighbor is currently in the "visiting" state, we've found a cycle. Return failure.</li>
                    <li>After visiting all neighbors, mark the current node as "visited" and prepend it to our result string.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Iterate through all characters in the graph, calling DFS on any that haven't been visited yet. If a cycle is ever detected, return an empty string. Otherwise, return the resulting sorted string.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Graph Algorithms</li>
  <li>Topological Sort</li>
  <li>Depth-First Search (DFS)</li>
  <li>Cycle Detection</li>
</ul>
`,
  // problem explanation--> 195
  'recursion-reconstruct-itinerary': `
<h3>💡 Problem Breakdown</h3>
<p>We are given a set of flights (directed edges) and need to find an itinerary (a path) that uses every flight exactly once. If there are multiple solutions, we need the one that is lexicographically smallest. This is a problem of finding an Eulerian path in a graph. The recursive DFS approach is a good fit, especially for handling the lexical order requirement.</p>
<h3>⚙️ Solution Walkthrough (Hierholzer's Algorithm with DFS)</h3>
<ol>
    <li><b>Build the Graph:</b> Create an adjacency list where keys are departure airports and values are lists of arrival airports. Crucially, sort the list of destinations for each airport lexicographically. This ensures that when we explore, we always try the lexicographically smallest destination first.</li>
    <li><b>Recursive DFS Function:</b>
        <ul>
            <li>The DFS will build the itinerary *backwards*.</li>
            <li><b>Recursive Step:</b>
                <ul>
                    <li>While the current airport has destinations to visit:
                        <ol>
                            <li>Take the next available destination (since we sorted, this will be the smallest one). Remove it from the list to mark it as "used".</li>
                            <li>Make a recursive call from that destination.</li>
                        </ol>
                    </li>
                    <li>Once an airport has no more destinations to visit, it means we've reached the end of a path. Prepend this airport to our final itinerary list.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Start the DFS from "JFK". The resulting list, when constructed backwards this way, will be the correct Eulerian path.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Graph Theory (Eulerian Path)</li>
  <li>Depth-First Search (DFS)</li>
  <li>Greedy approach (by sorting destinations)</li>
</ul>
`,
  // problem explanation--> 196
  'recursion-maximum-number-of-achievable-transfer-requests': `
<h3>💡 Problem Breakdown</h3>
<p>We need to find the largest subset of requests that can be granted while keeping the net change of employees in every building at zero. Since the number of requests is small (<= 16), we can explore all possible subsets of requests and check each one for validity. This is a classic backtracking problem.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li>Initialize <code>maxAchieved = 0</code>.</li>
    <li><b>Backtracking Function State:</b> <code>solve(index, num_requests_granted, building_balance_array)</code>.</li>
    <li><b>Base Case:</b> If <code>index</code> reaches the end of the requests list:
        <ul>
            <li>Check if all building balances are zero.</li>
            <li>If they are, update <code>maxAchieved = Math.max(maxAchieved, num_requests_granted)</code>.</li>
            <li>Return.</li>
        </ul>
    </li>
    <li><b>Recursive Step for <code>requests[index]</code>:</b>
        <ol>
            <li><b>Choice 1 (Exclude):</b> Don't grant this request. Make a recursive call for the next index without changing the balance or count: <code>solve(index + 1, num_requests_granted, balance)</code>.</li>
            <li><b>Choice 2 (Include):</b> Grant this request.
                <ul>
                    <li>Update the balance array (decrement for `from`, increment for `to`).</li>
                    <li>Make a recursive call: <code>solve(index + 1, num_requests_granted + 1, balance)</code>.</li>
                    <li>Backtrack: Revert the changes to the balance array.</li>
                </ul>
            </li>
        </ol>
    </li>
    <li>Start the process with <code>solve(0, 0, new Array(n).fill(0))</code>.</li>
</ol>
<p>An optimization is to prune the search if <code>(total_requests - index) + num_requests_granted <= maxAchieved</code>, meaning even if we grant all remaining requests, we can't beat the current best.</p>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Backtracking</li>
  <li>Subset Generation</li>
  <li>State management</li>
  <li>Pruning</li>
</ul>
`,
  // problem explanation--> 197
  'recursion-numbers-with-same-consecutive-differences': `
<h3>💡 Problem Breakdown</h3>
<p>We need to generate all numbers of a specific length `n` where the difference between any two adjacent digits is `k`. This is a constructive problem that can be solved by building the numbers digit by digit using a recursive DFS approach.</p>
<h3>⚙️ Solution Walkthrough</h3>
<ol>
    <li><b>Main Loop:</b> The first digit cannot be 0. So, we start a recursive search for each possible starting digit from 1 to 9.</li>
    <li><b>Recursive DFS Function <code>dfs(currentNum)</code>:</b>
        <ul>
            <li><b>Base Case:</b> If the number of digits in <code>currentNum</code> equals `n`, we have a valid number. Add it to our results and return.</li>
            <li><b>Recursive Step:</b>
                <ol>
                    <li>Get the last digit of the current number: <code>lastDigit = currentNum % 10</code>.</li>
                    <li>Calculate the two possible next digits: <code>nextDigit1 = lastDigit + k</code> and <code>nextDigit2 = lastDigit - k</code>.</li>
                    <li>If <code>nextDigit1</code> is a valid single digit (0-9), make a recursive call with the new number: <code>dfs(currentNum * 10 + nextDigit1)</code>.</li>
                    <li>If `k` is not 0 (to avoid duplicates) and <code>nextDigit2</code> is a valid single digit, make a recursive call: <code>dfs(currentNum * 10 + nextDigit2)</code>.</li>
                </ol>
            </li>
        </ul>
    </li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Depth-First Search (DFS)</li>
  <li>Backtracking / Recursive Construction</li>
  <li>Number manipulation</li>
</ul>
`,
  // problem explanation--> 198
  'recursion-largest-component-size-by-common-factor': `
<h3>💡 Problem Breakdown</h3>
<p>This is a graph problem. The numbers are nodes, and an edge exists between two numbers if their greatest common divisor (GCD) is greater than 1. We need to find the size of the largest connected component in this graph. Building the full graph and running DFS would be too slow because checking every pair of numbers is O(n^2). The key is to use the prime factors. If two numbers share a prime factor, they are connected. This suggests a Union-Find (Disjoint Set Union) approach.</p>
<h3>⚙️ Solution Walkthrough (Union-Find)</h3>
<p>The recursive part in a pure sense is the `find` operation in the Union-Find data structure.</p>
<ol>
    <li><b>Union-Find Structure:</b> Create a `parent` array to represent the disjoint sets.</li>
    <li><b>Prime Factorization:</b> For each number `num` in the input array:
        <ul>
            <li>Find all its prime factors `p`.</li>
            <li>For each prime factor `p`, unite the set containing `num` with the set containing `p`: <code>union(num, p)</code>. This connects all numbers that share a prime factor.</li>
        </ul>
    </li>
    <li><b>Count Components:</b> After processing all numbers, iterate through the original `nums` array again.
        <ul>
            <li>For each `num`, find the root of its set using the recursive <code>find(num)</code> operation.</li>
            <li>Use a hash map to count the number of elements belonging to each root.</li>
        </ul>
    </li>
    <li>The largest value in the hash map is the size of the largest component.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Union-Find (Disjoint Set Union)</li>
  <li>Graph Theory (Connected Components)</li>
  <li>Number Theory (Prime Factorization)</li>
</ul>
`,
 // problem explanation--> 199
  'recursion-the-number-of-good-subsets': `
<h3>💡 Problem Breakdown</h3>
<p>This is a challenging combinatorial problem. A "good subset" is one whose product is "square-free" – meaning its prime factorization contains no repeated primes. For example, the product 6 (2*3) is fine, but 12 (2*2*3) is not. The key constraints are the small size of numbers (1 to 30) and the modulo arithmetic.</p>
<p>The small number range is a huge hint. It means we only need to consider the 10 primes less than or equal to 30: <code>[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]</code>. This small, fixed number of primes strongly suggests a <strong>bitmasking</strong> approach where each bit in an integer can represent the presence of one of these primes.</p>

<h3>⚙️ Solution Walkthrough</h3>
<p>This problem is best solved using Dynamic Programming with bitmasking, not a simple recursion which would be too slow. The core idea is to build up the count of good subsets based on the prime factors they contain.</p>
<ol>
    <li><strong>Preprocessing & Masking:</strong>
        <ul>
            <li>First, count the frequency of each number in the input <code>nums</code>.</li>
            <li>For each number <code>x</code> from 2 to 30, we create a "prime factor mask". This is an integer where the <code>i</code>-th bit is set to 1 if the <code>i</code>-th prime in our list is a factor of <code>x</code>.</li>
            <li>During this step, we discard any number that is not square-free (e.g., 4, 8, 9, 12, etc.), as they can never be part of a good subset.</li>
        </ul>
    </li>
    <li><strong>Dynamic Programming State:</strong>
        <ul>
            <li>We define a DP array, <code>dp</code>, of size 1024 (2<sup>10</sup>).</li>
            <li><code>dp[mask]</code> will store the number of good subsets whose product has the combined prime factors represented by <code>mask</code>.</li>
            <li>We initialize <code>dp[0] = 1</code>, representing the single empty subset, which has no prime factors.</li>
        </ul>
    </li>
    <li><strong>DP Transition:</strong>
        <ul>
            <li>We iterate through each number <code>x</code> from 2 to 30. If <code>x</code> is present in our input and is valid (square-free), we get its mask, let's call it <code>m</code>.</li>
            <li>We then iterate through all existing prime masks <code>s</code> we have already computed in our <code>dp</code> array.</li>
            <li>The crucial check is <code>(s & m) === 0</code>. This bitwise AND checks if the set of primes for mask <code>s</code> and the set of primes for our new number <code>x</code> are disjoint (have no overlap).</li>
            <li>If they are disjoint, we can form new good subsets. The number of new ways to form a subset with the combined mask <code>s | m</code> is the number of ways we could form <code>s</code> (which is <code>dp[s]</code>) multiplied by the frequency of our number <code>x</code>.</li>
            <li>We update the DP state: <code>dp[s | m] = (dp[s | m] + dp[s] * freq[x]) % MOD</code>.</li>
        </ul>
    </li>
    <li><strong>Final Calculation:</strong>
        <ul>
            <li>The total number of good subsets (from numbers > 1) is the sum of all values in <code>dp</code>, excluding <code>dp[0]</code>.</li>
            <li>The number 1 is a special case. It can be included in any good subset without affecting its "goodness". If there are <code>k</code> occurrences of 1, each one can either be included or not, giving 2<sup>k</sup> possibilities. We multiply our final answer by this factor.</li>
        </ul>
    </li>
</ol>

<h3>📚 Key Concepts</h3>
<ul>
    <li><strong>Dynamic Programming:</strong> Building up a solution from smaller subproblems.</li>
    <li><strong>Bitmasking:</strong> Using the bits of an integer to represent a set (in this case, a set of prime factors).</li>
    <li><strong>Prime Factorization:</strong> Breaking down numbers into their prime components.</li>
    <li><strong>Combinatorics:</strong> Counting combinations, especially handling duplicates (using frequencies) and special cases (the number 1).</li>
</ul>
`,
  // problem explanation--> 200
  'recursion-stone-game-iv': `
<h3>💡 Problem Breakdown</h3>
<p>This is a game theory problem. Alice wins if she can make a move to a state from which Bob *cannot* win. Bob wins if *all* of Alice's possible moves lead to a state from which Bob *can* win. This suggests a recursive solution where `canWin(n)` depends on the results of `canWin` for smaller numbers.</p>
<h3>⚙️ Solution Walkthrough</h3>
<p>The recursive function <code>canWin(stones)</code> will determine if the current player to move can force a win when there are `stones` left.</p>
<ol>
    <li><b>Memoization:</b> Use an array or map to store the results for each number of stones `n` to avoid re-computing.</li>
    <li><b>Base Case:</b> If <code>stones === 0</code>, the current player has no moves and loses. Return `false`.</li>
    <li><b>Recursive Step:</b>
        <ul>
            <li>The current player wants to find *at least one* move that leads to a losing state for the opponent.</li>
            <li>Iterate through all possible moves: remove `k*k` stones, where `k*k <= stones`.</li>
            <li>For each move, the number of remaining stones is <code>stones - k*k</code>.</li>
            <li>The opponent will now face this state. We make a recursive call: <code>canWin(stones - k*k)</code>.</li>
            <li>If this recursive call returns <code>false</code> (meaning the opponent loses from that state), then our current move is a winning move. We can immediately memoize and return <code>true</code>.</li>
        </ul>
    </li>
    <li>If the loop finishes and we haven't found any move that forces the opponent to lose, it means all our moves lead to a winning state for the opponent. The current player loses. Memoize and return <code>false</code>.</li>
</ol>
<h3>📚 Key Concepts</h3>
<ul>
  <li>Game Theory (Winning/Losing States)</li>
  <li>Minimax (implicit)</li>
  <li>Dynamic Programming / Memoization</li>
</ul>
`,
};
