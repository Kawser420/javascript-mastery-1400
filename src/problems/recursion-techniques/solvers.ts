// Type definitions for binary tree node and linked list node used in some problems
type TreeNode = {
  value: any;
  left?: TreeNode | null;
  right?: TreeNode | null;
  next?: TreeNode | null; // For problem 148
} | null;

type ListNode = {
  value: any;
  next: ListNode | null;
} | null;

// Type for Quad Tree Node for problem 104
type QuadNode = {
  val: boolean;
  isLeaf: boolean;
  topLeft: QuadNode | null;
  topRight: QuadNode | null;
  bottomLeft: QuadNode | null;
  bottomRight: QuadNode | null;
};

export const solvers: Record<string, Function> = {
  // problem solver--> 01
  "recursion-factorial": function factorial(n: number): number | string {
    if (n < 0) return "Input must be non-negative.";
    if (n === 0) {
      return 1;
    }
    return n * (factorial(n - 1) as number);
  },
  // problem solver--> 02
  "recursion-fibonacci": function fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  },
  // problem solver--> 03
  "recursion-sum-array": function sumArray(arr: number[]): number {
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
  },
  // problem solver--> 04
  "recursion-power-function": function power(
    base: number,
    exponent: number
  ): number {
    if (exponent === 0) {
      return 1;
    }
    return base * power(base, exponent - 1);
  },
  // problem solver--> 05
  "recursion-string-reversal": function reverseString(str: string): string {
    if (str === "") {
      return "";
    }
    return reverseString(str.substring(1)) + str.charAt(0);
  },
  // problem solver--> 06
  "recursion-countdown": function countdown(n: number): number[] {
    if (n < 1) {
      return [];
    }
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  },
  // problem solver--> 07
  "recursion-range-of-numbers": function rangeOfNumbers(
    startNum: number,
    endNum: number
  ): number[] {
    if (startNum > endNum) {
      return [];
    }
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  },
  // problem solver--> 08
  "recursion-greatest-common-divisor": function gcd(
    a: number,
    b: number
  ): number {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  },
  // problem solver--> 09
  "recursion-is-palindrome": function isPalindrome(str: string): boolean {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return isPalindrome(str.slice(1, -1));
  },
  // problem solver--> 10
  "recursion-count-occurrences": function countOccurrences(
    arr: any[],
    target: any
  ): number {
    if (arr.length === 0) {
      return 0;
    }
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
  },
  // problem solver--> 11
  "recursion-sum-of-digits": function sumDigits(n: number): number {
    n = Math.abs(n);
    if (n < 10) {
      return n;
    }
    return (n % 10) + sumDigits(Math.floor(n / 10));
  },
  // problem solver--> 12
  "recursion-is-even": function isEven(n: number): boolean {
    n = Math.abs(n);
    if (n === 0) return true;
    if (n === 1) return false;
    return isEven(n - 2);
  },
  // problem solver--> 13
  "recursion-product-of-array": function productOfArray(arr: number[]): number {
    if (arr.length === 0) {
      return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
  },
  // problem solver--> 14
  "recursion-decimal-to-binary": function toBinary(n: number): string {
    if (n < 0) return "-" + toBinary(-n);
    if (n === 0) return "0";
    if (n === 1) return "1";
    return toBinary(Math.floor(n / 2)) + (n % 2).toString();
  },
  // problem solver--> 15
  "recursion-replicate-element": function replicate(
    element: any,
    count: number
  ): any[] {
    if (count <= 0) {
      return [];
    }
    return [element, ...replicate(element, count - 1)];
  },
  // problem solver--> 16
  "recursion-binary-search": function binarySearch(
    arr: number[],
    target: number,
    left: number = 0,
    right: number = arr.length - 1
  ): number {
    if (left > right) {
      return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      return binarySearch(arr, target, left, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, right);
  },
  // problem solver--> 17
  "recursion-merge-sort": function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    function merge(leftArr: number[], rightArr: number[]): number[] {
      const result: number[] = [];
      let leftIndex = 0;
      let rightIndex = 0;
      while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
          result.push(leftArr[leftIndex++]);
        } else {
          result.push(rightArr[rightIndex++]);
        }
      }
      return result
        .concat(leftArr.slice(leftIndex))
        .concat(rightArr.slice(rightIndex));
    }
    return merge(left, right);
  },
  // problem solver--> 18
  "recursion-tree-sum": function treeSum(node: TreeNode): number {
    if (!node) {
      return 0;
    }
    return (
      node.value + treeSum(node.left ?? null) + treeSum(node.right ?? null)
    );
  },
  // problem solver--> 19
  "recursion-tree-depth": function maxDepth(node: TreeNode): number {
    if (!node) {
      return 0;
    }
    const leftDepth = maxDepth(node.left ?? null);
    const rightDepth = maxDepth(node.right ?? null);
    return Math.max(leftDepth, rightDepth) + 1;
  },
  // problem solver--> 20
  "recursion-string-permutations": function permutations(
    str: string
  ): string[] {
    const result: Set<string> = new Set();
    function findPerms(prefix: string, remaining: string) {
      if (remaining.length === 0) {
        result.add(prefix);
        return;
      }
      for (let i = 0; i < remaining.length; i++) {
        const newPrefix = prefix + remaining[i];
        const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        findPerms(newPrefix, newRemaining);
      }
    }
    findPerms("", str);
    return Array.from(result);
  },
  // problem solver--> 21
  "recursion-subsets-of-a-set": function subsets(set: any[]): any[][] {
    if (set.length === 0) {
      return [[]];
    }
    const first = set[0];
    const rest = set.slice(1);
    const subsetsWithoutFirst = subsets(rest);
    const subsetsWithFirst = subsetsWithoutFirst.map((sub) => [first, ...sub]);
    return [...subsetsWithoutFirst, ...subsetsWithFirst];
  },
  // problem solver--> 22
  "recursion-climbing-stairs": function climbStairs(n: number): number {
    if (n < 0) return 0;
    if (n === 0) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
  },
  // problem solver--> 23
  "recursion-flatten-array": function flatten(arr: any[]): any[] {
    let flatArr: any[] = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        flatArr = flatArr.concat(flatten(item));
      } else {
        flatArr.push(item);
      }
    }
    return flatArr;
  },
  // problem solver--> 24
  "recursion-pascal-triangle": function getPascalsRow(
    rowIndex: number
  ): number[] {
    if (rowIndex === 0) return [1];
    const prevRow = getPascalsRow(rowIndex - 1);
    const currentRow = [1];
    for (let i = 0; i < prevRow.length - 1; i++) {
      currentRow.push(prevRow[i] + prevRow[i + 1]);
    }
    currentRow.push(1);
    return currentRow;
  },
  // problem solver--> 25
  "recursion-tree-contains-value": function treeContains(
    node: TreeNode,
    value: any
  ): boolean {
    if (!node) return false;
    if (node.value === value) return true;
    return (
      treeContains(node.left ?? null, value) ||
      treeContains(node.right ?? null, value)
    );
  },
  // problem solver--> 26
  "recursion-n-queens": function solveNQueens(n: number): string[][] {
    const solutions: string[][] = [];
    const board = Array.from({ length: n }, () => Array(n).fill("."));
    function isSafe(row: number, col: number) {
      for (let i = 0; i < row; i++) if (board[i][col] === "Q") return false;
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j] === "Q") return false;
      for (let i = row, j = col; i >= 0 && j < n; i--, j++)
        if (board[i][j] === "Q") return false;
      return true;
    }
    function solve(row: number) {
      if (row === n) {
        solutions.push(board.map((r) => r.join("")));
        return;
      }
      for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
          board[row][col] = "Q";
          solve(row + 1);
          board[row][col] = "."; // Backtrack
        }
      }
    }
    solve(0);
    return solutions;
  },
  // problem solver--> 27
  "recursion-sudoku-solver": function solveSudoku(
    board: number[][]
  ): number[][] | string {
    const n = 9;
    function isSafe(row: number, col: number, num: number) {
      for (let x = 0; x < n; x++)
        if (board[row][x] === num || board[x][col] === num) return false;
      const startRow = row - (row % 3),
        startCol = col - (col % 3);
      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
          if (board[i + startRow][j + startCol] === num) return false;
      return true;
    }
    function solve(): boolean {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (board[i][j] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isSafe(i, j, num)) {
                board[i][j] = num;
                if (solve()) return true;
                board[i][j] = 0; // Backtrack
              }
            }
            return false;
          }
        }
      }
      return true;
    }
    if (solve()) return board;
    return "No solution exists";
  },
  // problem solver--> 28
  "recursion-coin-change": function countWays(
    amount: number,
    coins: number[]
  ): number {
    function solve(
      index: number,
      currentAmount: number,
      memo: Record<string, number> = {}
    ) {
      const key = `${index}-${currentAmount}`;
      if (key in memo) return memo[key];
      if (currentAmount === 0) return 1;
      if (currentAmount < 0 || index >= coins.length) return 0;
      const includeCoin = solve(index, currentAmount - coins[index], memo);
      const excludeCoin = solve(index + 1, currentAmount, memo);
      return (memo[key] = includeCoin + excludeCoin);
    }
    return solve(0, amount);
  },
  // problem solver--> 29
  "recursion-word-search": function exist(
    board: string[][],
    word: string
  ): boolean {
    const rows = board.length,
      cols = board[0].length;
    function backtrack(row: number, col: number, index: number) {
      if (index === word.length) return true;
      if (
        row < 0 ||
        row >= rows ||
        col < 0 ||
        col >= cols ||
        board[row][col] !== word[index]
      )
        return false;
      const temp = board[row][col];
      board[row][col] = "#";
      const found =
        backtrack(row + 1, col, index + 1) ||
        backtrack(row - 1, col, index + 1) ||
        backtrack(row, col + 1, index + 1) ||
        backtrack(row, col - 1, index + 1);
      board[row][col] = temp;
      return found;
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (backtrack(i, j, 0)) return true;
      }
    }
    return false;
  },
  // problem solver--> 30
  "recursion-tower-of-hanoi": function hanoi(disks: number): string[] {
    const steps: string[] = [];
    function solve(
      n: number,
      source: string,
      auxiliary: string,
      destination: string
    ) {
      if (n > 0) {
        solve(n - 1, source, destination, auxiliary);
        steps.push(`Move disk ${n} from ${source} to ${destination}`);
        solve(n - 1, auxiliary, source, destination);
      }
    }
    solve(disks, "A", "B", "C");
    return steps;
  },
  // problem solver--> 31
  "recursion-combinations": function combine(n: number, k: number): number[][] {
    const result: number[][] = [];
    function backtrack(start: number, path: number[]) {
      if (path.length === k) {
        result.push([...path]);
        return;
      }
      for (let i = start; i <= n; i++) {
        path.push(i);
        backtrack(i + 1, path);
        path.pop();
      }
    }
    backtrack(1, []);
    return result;
  },
  // problem solver--> 32
  "recursion-generate-parentheses": function generateParentheses(
    n: number
  ): string[] {
    const result: string[] = [];
    function backtrack(str: string, open: number, close: number) {
      if (str.length === n * 2) {
        result.push(str);
        return;
      }
      if (open < n) {
        backtrack(str + "(", open + 1, close);
      }
      if (close < open) {
        backtrack(str + ")", open, close + 1);
      }
    }
    backtrack("", 0, 0);
    return result;
  },
  // problem solver--> 33
  "recursion-letter-case-permutation": function letterCasePermutation(
    str: string
  ): string[] {
    const result: string[] = [];
    function backtrack(index: number, currentStr: string) {
      if (index === str.length) {
        result.push(currentStr);
        return;
      }
      const char = str[index];
      if (/[a-zA-Z]/.test(char)) {
        backtrack(index + 1, currentStr + char.toLowerCase());
        backtrack(index + 1, currentStr + char.toUpperCase());
      } else {
        backtrack(index + 1, currentStr + char);
      }
    }
    backtrack(0, "");
    return result;
  },
  // problem solver--> 34
  "recursion-decode-string": function decodeString(s: string): string {
    let i = 0;
    function recurse(): string {
      let res = "";
      let num = 0;
      while (i < s.length) {
        const char = s[i];
        i++;
        if (char === "[") {
          const nested = recurse();
          res += nested.repeat(num);
          num = 0;
        } else if (char === "]") {
          return res;
        } else if (/\d/.test(char)) {
          num = num * 10 + parseInt(char);
        } else {
          res += char;
        }
      }
      return res;
    }
    return recurse();
  },
  // problem solver--> 35
  "recursion-tree-in-order-traversal": function inOrderTraversal(
    node: TreeNode
  ): any[] {
    if (!node) return [];
    return [
      ...inOrderTraversal(node.left ?? null),
      node.value,
      ...inOrderTraversal(node.right ?? null),
    ];
  },
  // problem solver--> 36
  "recursion-tree-pre-order-traversal": function preOrderTraversal(
    node: TreeNode
  ): any[] {
    if (!node) return [];
    return [
      node.value,
      ...preOrderTraversal(node.left ?? null),
      ...preOrderTraversal(node.right ?? null),
    ];
  },
  // problem solver--> 37
  "recursion-tree-post-order-traversal": function postOrderTraversal(
    node: TreeNode
  ): any[] {
    if (!node) return [];
    return [
      ...postOrderTraversal(node.left ?? null),
      ...postOrderTraversal(node.right ?? null),
      node.value,
    ];
  },
  // problem solver--> 38
  "recursion-collect-strings-from-object": function collectStrings(
    obj: Record<string, any>
  ): string[] {
    let strings: string[] = [];
    for (const key in obj) {
      if (typeof obj[key] === "string") {
        strings.push(obj[key]);
      } else if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        strings = strings.concat(collectStrings(obj[key]));
      }
    }
    return strings;
  },
  // problem solver--> 39
  "recursion-fibonacci-memoization": function fibMemo(
    n: number,
    memo: Record<number, number> = {}
  ): number {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
  },
  // problem solver--> 40
  "recursion-nested-even-sum": function nestedEvenSum(
    obj: Record<string, any>
  ): number {
    let sum = 0;
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }
    return sum;
  },
  // problem solver--> 41
  "recursion-capitalize-words": function capitalizeWords(
    arr: string[]
  ): string[] {
    if (arr.length === 0) return [];
    const capitalizedFirst = arr[0].toUpperCase();
    return [capitalizedFirst, ...capitalizeWords(arr.slice(1))];
  },
  // problem solver--> 42
  "recursion-stringify-numbers": function stringifyNumbers(
    obj: Record<string, any>
  ): Record<string, any> {
    const newObj: Record<string, any> = {};
    for (const key in obj) {
      if (typeof obj[key] === "number") {
        newObj[key] = obj[key].toString();
      } else if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  },
  // problem solver--> 43
  "recursion-is-sorted": function isSorted(
    arr: number[],
    index: number = 0
  ): boolean {
    if (index >= arr.length - 1) return true;
    if (arr[index] > arr[index + 1]) return false;
    return isSorted(arr, index + 1);
  },
  // problem solver--> 44
  "recursion-reverse-linked-list": function reverseList(
    head: ListNode
  ): ListNode {
    if (!head || !head.next) {
      return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  },
  // problem solver--> 45
  "recursion-path-sum-in-tree": function hasPathSum(
    root: TreeNode,
    targetSum: number
  ): boolean {
    if (!root) return false;
    if (!root.left && !root.right) return targetSum === root.value;
    const remainingSum = targetSum - root.value;
    return (
      hasPathSum(root.left ?? null, remainingSum) ||
      hasPathSum(root.right ?? null, remainingSum)
    );
  },
  // problem solver--> 46
  "recursion-permutations-with-duplicates": function permuteUnique(
    nums: number[]
  ): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    function backtrack(path: number[], used: boolean[]) {
      if (path.length === nums.length) {
        result.push([...path]);
        return;
      }
      for (let i = 0; i < nums.length; i++) {
        if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]))
          continue;
        used[i] = true;
        path.push(nums[i]);
        backtrack(path, used);
        path.pop();
        used[i] = false;
      }
    }
    backtrack([], Array(nums.length).fill(false));
    return result;
  },
  // problem solver--> 47
  "recursion-subsets-with-duplicates": function subsetsWithDup(
    nums: number[]
  ): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    function backtrack(start: number, path: number[]) {
      result.push([...path]);
      for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        path.push(nums[i]);
        backtrack(i + 1, path);
        path.pop();
      }
    }
    backtrack(0, []);
    return result;
  },
  // problem solver--> 48
  "recursion-combination-sum": function combinationSum(
    candidates: number[],
    target: number
  ): number[][] {
    const result: number[][] = [];
    function backtrack(startIndex: number, path: number[], currentSum: number) {
      if (currentSum === target) {
        result.push([...path]);
        return;
      }
      if (currentSum > target) return;
      for (let i = startIndex; i < candidates.length; i++) {
        path.push(candidates[i]);
        backtrack(i, path, currentSum + candidates[i]);
        path.pop();
      }
    }
    backtrack(0, [], 0);
    return result;
  },
  // problem solver--> 49
  "recursion-palindrome-partitioning": function partition(
    s: string
  ): string[][] {
    const result: string[][] = [];
    function isPalindrome(sub: string) {
      let l = 0,
        r = sub.length - 1;
      while (l < r) {
        if (sub[l++] !== sub[r--]) return false;
      }
      return true;
    }
    function backtrack(start: number, path: string[]) {
      if (start === s.length) {
        result.push([...path]);
        return;
      }
      for (let i = start; i < s.length; i++) {
        const substring = s.substring(start, i + 1);
        if (isPalindrome(substring)) {
          path.push(substring);
          backtrack(i + 1, path);
          path.pop();
        }
      }
    }
    backtrack(0, []);
    return result;
  },
  // problem solver--> 50
  "recursion-quick-sort": function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [],
      right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  },
  // problem solver--> 51
  "recursion-count-vowels": function countVowels(str: string): number {
    if (str.length === 0) return 0;
    const vowels = "aeiouAEIOU";
    const firstCharIsVowel = vowels.includes(str[0]) ? 1 : 0;
    return firstCharIsVowel + countVowels(str.slice(1));
  },
  // problem solver--> 52
  "recursion-is-valid-bst": function isValidBST(root: TreeNode): boolean {
    function validate(
      node: TreeNode,
      min: number | null,
      max: number | null
    ): boolean {
      if (!node) return true;
      if (
        (min !== null && node.value <= min) ||
        (max !== null && node.value >= max)
      ) {
        return false;
      }
      return (
        validate(node.left, min, node.value) &&
        validate(node.right, node.value, max)
      );
    }
    return validate(root, null, null);
  },
  // problem solver--> 53
  "recursion-tiling-problem": function countTilingWays(n: number): number {
    if (n <= 2) return n;
    return countTilingWays(n - 1) + countTilingWays(n - 2);
  },
  // problem solver--> 54
  "recursion-all-paths-in-grid": function countPaths(
    m: number,
    n: number
  ): number {
    if (m === 1 || n === 1) return 1;
    return countPaths(m - 1, n) + countPaths(m, n - 1);
  },
  // problem solver--> 55
  "recursion-word-break": function wordBreak(
    s: string,
    wordDict: string[]
  ): boolean {
    const memo = new Map<string, boolean>();
    function check(sub: string): boolean {
      if (memo.has(sub)) return memo.get(sub)!;
      if (sub === "") return true;
      for (const word of wordDict) {
        if (sub.startsWith(word)) {
          if (check(sub.substring(word.length))) {
            memo.set(sub, true);
            return true;
          }
        }
      }
      memo.set(sub, false);
      return false;
    }
    return check(s);
  },
  // problem solver--> 56
  "recursion-find-max-in-array": function findMax(arr: number[]): number {
    if (arr.length === 1) return arr[0];
    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
  },
  // problem solver--> 57
  "recursion-lca-of-bst": function lowestCommonAncestorBST(
    root: TreeNode,
    p: number,
    q: number
  ): number | null {
    if (!root) return null;
    if (root.value > p && root.value > q) {
      return lowestCommonAncestorBST(root.left, p, q);
    } else if (root.value < p && root.value < q) {
      return lowestCommonAncestorBST(root.right, p, q);
    } else {
      return root.value;
    }
  },
  // problem solver--> 58
  "recursion-balanced-binary-tree": function isBalanced(
    root: TreeNode
  ): boolean {
    function checkHeight(node: TreeNode): number {
      if (!node) return 0;
      const leftHeight = checkHeight(node.left);
      if (leftHeight === -1) return -1;
      const rightHeight = checkHeight(node.right);
      if (rightHeight === -1) return -1;
      if (Math.abs(leftHeight - rightHeight) > 1) return -1;
      return Math.max(leftHeight, rightHeight) + 1;
    }
    return checkHeight(root) !== -1;
  },
  // problem solver--> 59
  "recursion-regular-expression-matching": function isMatch(
    s: string,
    p: string
  ): boolean {
    const memo: Record<string, boolean> = {};
    function solve(i: number, j: number): boolean {
      const key = `${i}-${j}`;
      if (key in memo) return memo[key];
      if (j === p.length) return i === s.length;

      const firstMatch = i < s.length && (p[j] === s[i] || p[j] === ".");

      if (j + 1 < p.length && p[j + 1] === "*") {
        memo[key] = solve(i, j + 2) || (firstMatch && solve(i + 1, j));
      } else {
        memo[key] = firstMatch && solve(i + 1, j + 1);
      }
      return memo[key];
    }
    return solve(0, 0);
  },
  // problem solver--> 60
  "recursion-digital-root": function digitalRoot(n: number): number {
    if (n < 10) return n;
    let sum = 0;
    let temp = n;
    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    return digitalRoot(sum);
  },
  // problem solver--> 61
  "recursion-find-first-occurrence": function findFirst(
    arr: number[],
    target: number,
    index: number = 0
  ): number {
    if (index === arr.length) return -1;
    if (arr[index] === target) return index;
    return findFirst(arr, target, index + 1);
  },
  // problem solver--> 62
  "recursion-find-last-occurrence": function findLast(
    arr: number[],
    target: number,
    index: number = arr.length - 1
  ): number {
    if (index < 0) return -1;
    if (arr[index] === target) return index;
    return findLast(arr, target, index - 1);
  },
  // problem solver--> 63
  "recursion-print-pattern": function printPattern(n: number): string[] {
    if (n <= 0) return [];
    const starString = "*".repeat(n);
    return [starString, ...printPattern(n - 1)];
  },
  // problem solver--> 64
  "recursion-tree-leaf-count": function countLeaves(node: TreeNode): number {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;
    return countLeaves(node.left) + countLeaves(node.right);
  },
  // problem solver--> 65
  "recursion-josephus-problem": function josephus(
    n: number,
    k: number
  ): number {
    if (n === 1) return 0; // 0-indexed result
    return (josephus(n - 1, k) + k) % n;
    // To convert to 1-indexed, add 1 to the final result outside this function.
  },
  // problem solver--> 66
  "recursion-phone-number-mnemonics": function letterCombinations(
    digits: string
  ): string[] {
    if (!digits) return [];
    const map = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz",
    };
    const result: string[] = [];
    function backtrack(index: number, path: string) {
      if (index === digits.length) {
        result.push(path);
        return;
      }
      const letters = map[digits[index]];
      for (const letter of letters) {
        backtrack(index + 1, path + letter);
      }
    }
    backtrack(0, "");
    return result;
  },
  // problem solver--> 67
  "recursion-flood-fill": function floodFill(
    image: number[][],
    sr: number,
    sc: number,
    newColor: number
  ): number[][] {
    const originalColor = image[sr][sc];
    if (originalColor === newColor) return image;

    function fill(r: number, c: number) {
      if (
        r < 0 ||
        r >= image.length ||
        c < 0 ||
        c >= image[0].length ||
        image[r][c] !== originalColor
      ) {
        return;
      }
      image[r][c] = newColor;
      fill(r + 1, c);
      fill(r - 1, c);
      fill(r, c + 1);
      fill(r, c - 1);
    }
    fill(sr, sc);
    return image;
  },
  // problem solver--> 68
  "recursion-unique-paths-with-obstacles": function uniquePathsWithObstacles(
    obstacleGrid: number[][]
  ): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const memo = Array(m)
      .fill(0)
      .map(() => Array(n).fill(-1));

    function count(r: number, c: number): number {
      if (r >= m || c >= n || obstacleGrid[r][c] === 1) return 0;
      if (r === m - 1 && c === n - 1) return 1;
      if (memo[r][c] !== -1) return memo[r][c];
      memo[r][c] = count(r + 1, c) + count(r, c + 1);
      return memo[r][c];
    }
    return count(0, 0);
  },
  // problem solver--> 69
  "recursion-gray-code": function grayCode(n: number): number[] {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    const prevGrayCode = grayCode(n - 1);
    const newPart = [];
    const mask = 1 << (n - 1);
    for (let i = prevGrayCode.length - 1; i >= 0; i--) {
      newPart.push(mask | prevGrayCode[i]);
    }
    return [...prevGrayCode, ...newPart];
  },
  // problem solver--> 70
  "recursion-deep-clone-object": function deepClone(obj: any): any {
    if (obj === null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) {
      return obj.map((item) => deepClone(item));
    }
    const clonedObj: Record<string, any> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  },
  // problem solver--> 71
  "recursion-ackermann-function": function ackermann(
    m: number,
    n: number
  ): number {
    if (m === 0) return n + 1;
    if (m > 0 && n === 0) return ackermann(m - 1, 1);
    // Be careful: This grows extremely fast!
    if (m > 3 && n > 1) return Infinity; // Prevent stack overflow for large inputs
    return ackermann(m - 1, ackermann(m, n - 1));
  },
  // problem solver--> 72
  "recursion-remove-duplicates-from-sorted-list": function deleteDuplicates(
    head: ListNode
  ): ListNode {
    if (!head || !head.next) return head;
    head.next = deleteDuplicates(head.next);
    return head.value === head.next.value ? head.next : head;
  },
  // problem solver--> 73
  "recursion-tree-is-symmetric": function isSymmetric(root: TreeNode): boolean {
    function isMirror(t1: TreeNode, t2: TreeNode): boolean {
      if (!t1 && !t2) return true;
      if (!t1 || !t2 || t1.value !== t2.value) return false;
      return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }
    return isMirror(root, root);
  },
  // problem solver--> 74
  "recursion-search-in-bst": function searchBST(
    root: TreeNode,
    val: number
  ): TreeNode {
    if (!root || root.value === val) return root;
    if (val < root.value) return searchBST(root.left, val);
    return searchBST(root.right, val);
  },
  // problem solver--> 75
  "recursion-construct-bst-from-sorted-array": function sortedArrayToBST(
    nums: number[]
  ): TreeNode {
    if (nums.length === 0) return null;
    const mid = Math.floor(nums.length / 2);
    const root: TreeNode = { value: nums[mid], left: null, right: null };
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
  },
  // problem solver--> 76
  "recursion-expression-add-operators": function addOperators(
    num: string,
    target: number
  ): string[] {
    const result: string[] = [];
    function backtrack(
      index: number,
      path: string,
      value: number,
      prev: number
    ) {
      if (index === num.length) {
        if (value === target) result.push(path);
        return;
      }
      for (let i = index; i < num.length; i++) {
        if (i > index && num[index] === "0") break; // Avoid numbers with leading zeros
        const currentStr = num.substring(index, i + 1);
        const currentNum = parseInt(currentStr);
        if (index === 0) {
          backtrack(i + 1, path + currentStr, currentNum, currentNum);
        } else {
          backtrack(
            i + 1,
            path + "+" + currentStr,
            value + currentNum,
            currentNum
          );
          backtrack(
            i + 1,
            path + "-" + currentStr,
            value - currentNum,
            -currentNum
          );
          // The multiplication case is tricky due to operator precedence
          backtrack(
            i + 1,
            path + "*" + currentStr,
            value - prev + prev * currentNum,
            prev * currentNum
          );
        }
      }
    }
    backtrack(0, "", 0, 0);
    return result;
  },
  // problem solver--> 77
  "recursion-knapsack-problem": function knapsack(
    values: number[],
    weights: number[],
    W: number
  ): number {
    function solve(index: number, capacity: number): number {
      if (index < 0 || capacity <= 0) return 0;
      if (weights[index] > capacity) {
        return solve(index - 1, capacity);
      }
      const include =
        values[index] + solve(index - 1, capacity - weights[index]);
      const exclude = solve(index - 1, capacity);
      return Math.max(include, exclude);
    }
    return solve(values.length - 1, W);
  },
  // problem solver--> 78
  "recursion-longest-common-subsequence": function longestCommonSubsequence(
    text1: string,
    text2: string
  ): number {
    const memo = new Map<string, number>();
    function solve(i: number, j: number): number {
      const key = `${i}-${j}`;
      if (memo.has(key)) return memo.get(key)!;
      if (i === text1.length || j === text2.length) return 0;
      if (text1[i] === text2[j]) {
        return 1 + solve(i + 1, j + 1);
      }
      const result = Math.max(solve(i + 1, j), solve(i, j + 1));
      memo.set(key, result);
      return result;
    }
    return solve(0, 0);
  },
  // problem solver--> 79
  "recursion-edit-distance": function minDistance(
    word1: string,
    word2: string
  ): number {
    const memo = new Map<string, number>();
    function solve(i: number, j: number): number {
      const key = `${i}-${j}`;
      if (memo.has(key)) return memo.get(key)!;
      if (i === word1.length) return word2.length - j;
      if (j === word2.length) return word1.length - i;

      if (word1[i] === word2[j]) {
        return solve(i + 1, j + 1);
      }
      const insert = 1 + solve(i, j + 1);
      const del = 1 + solve(i + 1, j);
      const replace = 1 + solve(i + 1, j + 1);

      const result = Math.min(insert, del, replace);
      memo.set(key, result);
      return result;
    }
    return solve(0, 0);
  },
  // problem solver--> 80
  "recursion-all-paths-source-to-target-graph": function allPathsSourceTarget(
    graph: number[][]
  ): number[][] {
    const target = graph.length - 1;
    const result: number[][] = [];

    function dfs(node: number, path: number[]) {
      if (node === target) {
        result.push([...path]);
        return;
      }
      for (const neighbor of graph[node]) {
        path.push(neighbor);
        dfs(neighbor, path);
        path.pop(); // backtrack
      }
    }
    dfs(0, [0]);
    return result;
  },
  // problem solver--> 81
  "recursion-count-and-say": function countAndSay(n: number): string {
    if (n === 1) return "1";
    const prev = countAndSay(n - 1);
    let result = "";
    let count = 1;
    for (let i = 0; i < prev.length; i++) {
      if (i + 1 < prev.length && prev[i] === prev[i + 1]) {
        count++;
      } else {
        result += count + prev[i];
        count = 1;
      }
    }
    return result;
  },
  // problem solver--> 82
  "recursion-group-sum": function groupSum(
    arr: number[],
    target: number
  ): boolean {
    function solve(index: number, currentSum: number): boolean {
      if (index === arr.length) return currentSum === target;
      // Choose the number
      if (solve(index + 1, currentSum + arr[index])) return true;
      // Don't choose the number
      if (solve(index + 1, currentSum)) return true;
      return false;
    }
    return solve(0, 0);
  },
  // problem solver--> 83
  "recursion-group-sum-clump": function groupSumClump(
    arr: number[],
    target: number
  ): boolean {
    function solve(index: number, currentSum: number): boolean {
      if (index >= arr.length) return currentSum === target;

      let i = index;
      let clumpSum = 0;
      while (i < arr.length && arr[i] === arr[index]) {
        clumpSum += arr[i];
        i++;
      }
      // Choose the clump
      if (solve(i, currentSum + clumpSum)) return true;
      // Don't choose the clump
      if (solve(i, currentSum)) return true;

      return false;
    }
    return solve(0, 0);
  },
  // problem solver--> 84
  "recursion-magic-index": function magicIndex(arr: number[]): number {
    function search(start: number, end: number): number {
      if (start > end) return -1;
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === mid) return mid;

      // Search left
      const leftResult = search(start, Math.min(mid - 1, arr[mid]));
      if (leftResult !== -1) return leftResult;
      // Search right
      return search(Math.max(mid + 1, arr[mid]), end);
    }
    return search(0, arr.length - 1);
  },
  // problem solver--> 85
  "recursion-paint-fill": function paintFill(
    screen: number[][],
    r: number,
    c: number,
    newColor: number
  ): number[][] {
    const originalColor = screen[r][c];
    if (originalColor === newColor) return screen;

    function fill(row: number, col: number) {
      if (
        row < 0 ||
        row >= screen.length ||
        col < 0 ||
        col >= screen[0].length ||
        screen[row][col] !== originalColor
      ) {
        return;
      }
      screen[row][col] = newColor;
      fill(row + 1, col);
      fill(row - 1, col);
      fill(row, col + 1);
      fill(row, col - 1);
    }
    fill(r, c);
    return screen;
  },
  // problem solver--> 86
  "recursion-robot-in-a-grid": function findPath(
    grid: number[][]
  ): [number, number][] | null {
    const path: [number, number][] = [];
    const failedPoints = new Set<string>();

    function solve(r: number, c: number): boolean {
      if (r < 0 || c < 0 || grid[r]?.[c] === 1) return false;

      const key = `${r},${c}`;
      if (failedPoints.has(key)) return false;

      const isAtOrigin = r === 0 && c === 0;
      if (isAtOrigin || solve(r, c - 1) || solve(r - 1, c)) {
        path.push([r, c]);
        return true;
      }
      failedPoints.add(key);
      return false;
    }
    if (solve(grid.length - 1, grid[0].length - 1)) return path.reverse();
    return null;
  },
  // problem solver--> 87
  "recursion-optimal-bst": function optimalBSTCost(
    keys: number[],
    freq: number[]
  ): number {
    const memo = new Map<string, number>();
    function sum(f: number[], i: number, j: number): number {
      let s = 0;
      for (let k = i; k <= j; k++) s += f[k];
      return s;
    }
    function solve(i: number, j: number): number {
      const key = `${i}-${j}`;
      if (memo.has(key)) return memo.get(key)!;
      if (j < i) return 0;
      if (j === i) return freq[i];

      const fsum = sum(freq, i, j);
      let min = Infinity;

      for (let r = i; r <= j; r++) {
        const cost = solve(i, r - 1) + solve(r + 1, j);
        if (cost < min) min = cost;
      }
      const result = min + fsum;
      memo.set(key, result);
      return result;
    }
    return solve(0, keys.length - 1);
  },
  // problem solver--> 88
  "recursion-matrix-chain-multiplication": function matrixChainOrder(
    dims: number[]
  ): number {
    const memo = new Map<string, number>();
    function solve(i: number, j: number): number {
      const key = `${i}-${j}`;
      if (memo.has(key)) return memo.get(key)!;
      if (i >= j) return 0;
      let min = Infinity;
      for (let k = i; k < j; k++) {
        const cost =
          solve(i, k) + solve(k + 1, j) + dims[i - 1] * dims[k] * dims[j];
        min = Math.min(min, cost);
      }
      memo.set(key, min);
      return min;
    }
    return solve(1, dims.length - 1);
  },
  // problem solver--> 89
  "recursion-print-all-subsequences": function getSubsequences(
    str: string
  ): string[] {
    const result: string[] = [];
    function solve(index: number, currentSubsequence: string) {
      if (index === str.length) {
        if (currentSubsequence.length > 0) result.push(currentSubsequence);
        return;
      }
      // Exclude current character
      solve(index + 1, currentSubsequence);
      // Include current character
      solve(index + 1, currentSubsequence + str[index]);
    }
    solve(0, "");
    return result;
  },
  // problem solver--> 90
  "recursion-check-ab": function checkAB(str: string): boolean {
    if (str.length > 0 && str[0] !== "a") return false;

    function solve(s: string): boolean {
      if (s.length === 0) return true;
      if (s[0] === "a") {
        if (s.length >= 3 && s.substring(1, 3) === "bb") {
          return solve(s.substring(3));
        }
        return solve(s.substring(1));
      }
      return false;
    }
    return solve(str);
  },
  // problem solver--> 91
  "recursion-staircase-search": function staircaseSearch(
    matrix: number[][],
    key: number
  ): [number, number] | null {
    function search(r: number, c: number): [number, number] | null {
      if (r >= matrix.length || c < 0) return null;
      if (matrix[r][c] === key) return [r, c];
      if (matrix[r][c] > key) return search(r, c - 1);
      return search(r + 1, c);
    }
    return search(0, matrix[0].length - 1);
  },
  // problem solver--> 92
  "recursion-friends-pairing": function countFriendsPairings(
    n: number
  ): number {
    const memo = new Map<number, number>();
    function solve(num: number): number {
      if (memo.has(num)) return memo.get(num)!;
      if (num <= 2) return num;
      const result = solve(num - 1) + (num - 1) * solve(num - 2);
      memo.set(num, result);
      return result;
    }
    return solve(n);
  },
  // problem solver--> 93
  "recursion-all-indices-of-number": function allIndices(
    arr: number[],
    x: number
  ): number[] {
    function find(index: number): number[] {
      if (index === arr.length) return [];
      const rest = find(index + 1);
      if (arr[index] === x) {
        return [index, ...rest];
      }
      return rest;
    }
    return find(0);
  },
  // problem solver--> 94
  "recursion-power-set-lexicographical": function powerSetLexo(
    str: string
  ): string[] {
    const sortedStr = str.split("").sort().join("");
    const result: string[] = [""];
    function solve(index: number, current: string) {
      for (let i = index; i < sortedStr.length; i++) {
        const next = current + sortedStr[i];
        result.push(next);
        solve(i + 1, next);
      }
    }
    solve(0, "");
    return result;
  },
  // problem solver--> 95
  "recursion-combination-sum-ii": function combinationSum2(
    candidates: number[],
    target: number
  ): number[][] {
    const result: number[][] = [];
    candidates.sort((a, b) => a - b);
    function backtrack(start: number, path: number[], currentSum: number) {
      if (currentSum === target) {
        result.push([...path]);
        return;
      }
      if (currentSum > target) return;
      for (let i = start; i < candidates.length; i++) {
        if (i > start && candidates[i] === candidates[i - 1]) continue; // Skip duplicates
        path.push(candidates[i]);
        backtrack(i + 1, path, currentSum + candidates[i]);
        path.pop();
      }
    }
    backtrack(0, [], 0);
    return result;
  },
  // problem solver--> 96
  "recursion-beautiful-arrangement": function countArrangement(
    n: number
  ): number {
    let count = 0;
    function backtrack(index: number, visited: boolean[]) {
      if (index > n) {
        count++;
        return;
      }
      for (let i = 1; i <= n; i++) {
        if (!visited[i] && (i % index === 0 || index % i === 0)) {
          visited[i] = true;
          backtrack(index + 1, visited);
          visited[i] = false;
        }
      }
    }
    backtrack(1, Array(n + 1).fill(false));
    return count;
  },
  // problem solver--> 97
  "recursion-target-sum": function findTargetSumWays(
    nums: number[],
    target: number
  ): number {
    const memo = new Map<string, number>();
    function solve(index: number, currentSum: number): number {
      const key = `${index}-${currentSum}`;
      if (memo.has(key)) return memo.get(key)!;
      if (index === nums.length) {
        return currentSum === target ? 1 : 0;
      }
      const add = solve(index + 1, currentSum + nums[index]);
      const subtract = solve(index + 1, currentSum - nums[index]);
      memo.set(key, add + subtract);
      return add + subtract;
    }
    return solve(0, 0);
  },
  // problem solver--> 98
  "recursion-permutations-in-string": function checkInclusion(
    s1: string,
    s2: string
  ): boolean {
    if (s1.length > s2.length) return false;
    const s1Count = Array(26).fill(0);
    const s2Count = Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
      s1Count[s1.charCodeAt(i) - 97]++;
      s2Count[s2.charCodeAt(i) - 97]++;
    }

    function matches(c1: number[], c2: number[]): boolean {
      for (let i = 0; i < 26; i++) if (c1[i] !== c2[i]) return false;
      return true;
    }

    // A recursive sliding window would be inefficient. This is the optimal iterative version.
    for (let i = 0; i < s2.length - s1.length; i++) {
      if (matches(s1Count, s2Count)) return true;
      s2Count[s2.charCodeAt(i) - 97]--;
      s2Count[s2.charCodeAt(i + s1.length) - 97]++;
    }
    return matches(s1Count, s2Count);
  },
  // problem solver--> 99
  "recursion-shopping-offers": function shoppingOffers(
    price: number[],
    special: number[][],
    needs: number[]
  ): number {
    const memo = new Map<string, number>();
    function solve(currentNeeds: number[]): number {
      const key = currentNeeds.join(",");
      if (memo.has(key)) return memo.get(key)!;

      // Option 1: Buy items individually
      let minPrice = currentNeeds.reduce(
        (sum, need, i) => sum + need * price[i],
        0
      );

      // Option 2: Try each special offer
      for (const offer of special) {
        const nextNeeds = [...currentNeeds];
        let canUseOffer = true;
        for (let i = 0; i < needs.length; i++) {
          if (currentNeeds[i] < offer[i]) {
            canUseOffer = false;
            break;
          }
          nextNeeds[i] -= offer[i];
        }
        if (canUseOffer) {
          minPrice = Math.min(minPrice, offer[needs.length] + solve(nextNeeds));
        }
      }
      memo.set(key, minPrice);
      return minPrice;
    }
    return solve(needs);
  },
  // problem solver--> 100
  "recursion-wildcard-matching": function isMatchWildcard(
    s: string,
    p: string
  ): boolean {
    const memo = new Map<string, boolean>();
    function solve(i: number, j: number): boolean {
      const key = `${i}-${j}`;
      if (memo.has(key)) return memo.get(key)!;
      if (j === p.length) return i === s.length;

      if (p[j] === "*") {
        const result = (i < s.length && solve(i + 1, j)) || solve(i, j + 1);
        memo.set(key, result);
        return result;
      }
      if (i < s.length && (p[j] === "?" || p[j] === s[i])) {
        const result = solve(i + 1, j + 1);
        memo.set(key, result);
        return result;
      }
      memo.set(key, false);
      return false;
    }
    return solve(0, 0);
  },
  // problem solver--> 101
  "recursion-print-nodes-at-k-distance": function distanceK(
    tree: TreeNode,
    targetValue: number,
    k: number
  ): number[] {
    const result: number[] = [];
    const parentMap = new Map<TreeNode, TreeNode>();
    let targetNode: TreeNode = null;

    function buildParentMap(node: TreeNode, parent: TreeNode) {
      if (!node) return;
      if (node.value === targetValue) targetNode = node;
      parentMap.set(node, parent);
      if (node.left) buildParentMap(node.left, node);
      if (node.right) buildParentMap(node.right, node);
    }
    buildParentMap(tree, null);

    function find(node: TreeNode, distance: number, visited: Set<TreeNode>) {
      if (!node || visited.has(node)) return;
      visited.add(node);
      if (distance === k) {
        result.push(node.value);
        return;
      }
      find(node.left, distance + 1, visited);
      find(node.right, distance + 1, visited);
      find(parentMap.get(node), distance + 1, visited);
    }

    if (targetNode) find(targetNode, 0, new Set<TreeNode>());
    return result;
  },
  // problem solver--> 102
  "recursion-flatten-binary-tree-to-linked-list": function flattenTree(
    root: TreeNode
  ): void {
    let prev: TreeNode = null;
    function solve(node: TreeNode) {
      if (!node) return;
      solve(node.right);
      solve(node.left);
      node.right = prev;
      node.left = null;
      prev = node;
    }
    solve(root);
  },
  // problem solver--> 103
  "recursion-partition-to-k-equal-sum-subsets": function canPartitionKSubsets(
    nums: number[],
    k: number
  ): boolean {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    if (totalSum % k !== 0) return false;
    const targetSum = totalSum / k;
    nums.sort((a, b) => b - a);
    if (nums[0] > targetSum) return false;

    function backtrack(index: number, subsets: number[]): boolean {
      if (index === nums.length) return true;
      for (let i = 0; i < k; i++) {
        if (subsets[i] + nums[index] <= targetSum) {
          subsets[i] += nums[index];
          if (backtrack(index + 1, subsets)) return true;
          subsets[i] -= nums[index];
        }
        if (subsets[i] === 0) break;
      }
      return false;
    }
    return backtrack(0, Array(k).fill(0));
  },
  // problem solver--> 104
  "recursion-construct-quad-tree": function construct(
    grid: number[][]
  ): QuadNode | null {
    function solve(r: number, c: number, size: number): QuadNode {
      if (size === 1)
        return {
          val: grid[r][c] === 1,
          isLeaf: true,
          topLeft: null,
          topRight: null,
          bottomLeft: null,
          bottomRight: null,
        };

      const half = size / 2;
      const topLeft = solve(r, c, half);
      const topRight = solve(r, c + half, half);
      const bottomLeft = solve(r + half, c, half);
      const bottomRight = solve(r + half, c + half, half);

      if (
        topLeft.isLeaf &&
        topRight.isLeaf &&
        bottomLeft.isLeaf &&
        bottomRight.isLeaf &&
        topLeft.val === topRight.val &&
        topRight.val === bottomLeft.val &&
        bottomLeft.val === bottomRight.val
      ) {
        return {
          val: topLeft.val,
          isLeaf: true,
          topLeft: null,
          topRight: null,
          bottomLeft: null,
          bottomRight: null,
        };
      }

      return {
        val: true,
        isLeaf: false,
        topLeft,
        topRight,
        bottomLeft,
        bottomRight,
      };
    }
    return solve(0, 0, grid.length);
  },
  // problem solver--> 105
  "recursion-verbal-arithmetic-puzzle": function isSolvable(
    words: string[],
    result: string
  ): boolean {
    const allChars = new Set<string>();
    [...words, result].forEach((word) =>
      word.split("").forEach((char) => allChars.add(char))
    );
    const uniqueChars = Array.from(allChars);
    const firstChars = new Set<string>();
    [...words, result].forEach((word) => {
      if (word.length > 1) firstChars.add(word[0]);
    });

    const usedDigits = Array(10).fill(false);
    const mapping = new Map<string, number>();

    function solve(charIndex: number): boolean {
      if (charIndex === uniqueChars.length) {
        const resultSum = parseInt(
          result
            .split("")
            .map((c) => mapping.get(c))
            .join("")
        );
        const wordsSum = words.reduce(
          (sum, word) =>
            sum +
            parseInt(
              word
                .split("")
                .map((c) => mapping.get(c))
                .join("")
            ),
          0
        );
        return resultSum === wordsSum;
      }

      const char = uniqueChars[charIndex];
      for (let digit = 0; digit <= 9; digit++) {
        if (!usedDigits[digit]) {
          if (digit === 0 && firstChars.has(char)) continue;
          mapping.set(char, digit);
          usedDigits[digit] = true;
          if (solve(charIndex + 1)) return true;
          usedDigits[digit] = false;
          mapping.delete(char);
        }
      }
      return false;
    }
    return solve(0);
  },
  // problem solver--> 106
  "recursion-string-to-integer-atoi": function myAtoi(s: string): number {
    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);

    function parse(index: number, sign: number, value: number): number {
      if (index === s.length || !/\d/.test(s[index])) {
        return Math.max(MIN, Math.min(MAX, value * sign));
      }
      const digit = parseInt(s[index]);
      if (
        sign === 1 &&
        (value > Math.floor(MAX / 10) ||
          (value === Math.floor(MAX / 10) && digit > MAX % 10))
      )
        return MAX;
      if (
        sign === -1 &&
        (value > Math.floor(-MIN / 10) ||
          (value === Math.floor(-MIN / 10) && digit > -MIN % 10))
      )
        return MIN;
      return parse(index + 1, sign, value * 10 + digit);
    }

    let i = 0;
    while (s[i] === " ") i++;
    let sign = 1;
    if (s[i] === "+" || s[i] === "-") {
      sign = s[i] === "-" ? -1 : 1;
      i++;
    }
    return parse(i, sign, 0);
  },
  // problem solver--> 107
  "recursion-reverse-nodes-in-k-group": function reverseKGroup(
    head: ListNode,
    k: number
  ): ListNode {
    if (!head) return null;
    let tail: ListNode = head;
    for (let i = 0; i < k; i++) {
      if (!tail) return head;
      tail = tail.next;
    }
    let prev: ListNode = null;
    let current: ListNode = head;
    for (let i = 0; i < k; i++) {
      let nextTemp = current!.next;
      current!.next = prev;
      prev = current;
      current = nextTemp;
    }
    if (head) head.next = reverseKGroup(current, k);
    return prev;
  },
  // problem solver--> 108
  "recursion-remove-invalid-parentheses": function removeInvalidParentheses(
    s: string
  ): string[] {
    const result = new Set<string>();
    let maxLen = 0;
    function solve(
      index: number,
      leftCount: number,
      rightCount: number,
      path: string
    ) {
      if (index === s.length) {
        if (leftCount === rightCount) {
          if (path.length > maxLen) {
            maxLen = path.length;
            result.clear();
            result.add(path);
          } else if (path.length === maxLen) {
            result.add(path);
          }
        }
        return;
      }
      const char = s[index];
      if (char === "(") {
        solve(index + 1, leftCount + 1, rightCount, path + "(");
        solve(index + 1, leftCount, rightCount, path);
      } else if (char === ")") {
        if (rightCount < leftCount) {
          solve(index + 1, leftCount, rightCount + 1, path + ")");
        }
        solve(index + 1, leftCount, rightCount, path);
      } else {
        solve(index + 1, leftCount, rightCount, path + char);
      }
    }
    solve(0, 0, 0, "");
    return Array.from(result);
  },
  // problem solver--> 109
  "recursion-split-array-into-fibonacci-sequence": function splitIntoFibonacci(
    num: string
  ): number[] {
    const result: number[] = [];
    function backtrack(index: number): boolean {
      if (index === num.length) return result.length >= 3;
      let currentNum = 0;
      for (let i = index; i < num.length; i++) {
        if (i > index && num[index] === "0") break;
        currentNum = currentNum * 10 + parseInt(num[i]);
        if (currentNum > 2 ** 31 - 1) break;
        if (
          result.length < 2 ||
          currentNum === result[result.length - 1] + result[result.length - 2]
        ) {
          result.push(currentNum);
          if (backtrack(i + 1)) return true;
          result.pop();
        } else if (
          result.length >= 2 &&
          currentNum > result[result.length - 1] + result[result.length - 2]
        ) {
          break;
        }
      }
      return false;
    }
    backtrack(0);
    return result;
  },
  // problem solver--> 110
  "recursion-solve-the-maze": function hasPath(
    maze: number[][],
    start: number[],
    destination: number[]
  ): boolean {
    const visited = new Set<string>();
    function dfs(r: number, c: number): boolean {
      const key = `${r},${c}`;
      if (visited.has(key)) return false;
      if (r === destination[0] && c === destination[1]) return true;
      visited.add(key);
      const moves = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];
      for (const [dr, dc] of moves) {
        let nr = r,
          nc = c;
        while (
          nr + dr >= 0 &&
          nr + dr < maze.length &&
          nc + dc >= 0 &&
          nc + dc < maze[0].length &&
          maze[nr + dr][nc + dc] === 0
        ) {
          nr += dr;
          nc += dc;
        }
        if (dfs(nr, nc)) return true;
      }
      return false;
    }
    return dfs(start[0], start[1]);
  },
  // problem solver--> 111
  "recursion-number-of-islands": function numIslands(grid: string[][]): number {
    let count = 0;
    const rows = grid.length;
    if (rows === 0) return 0;
    const cols = grid[0].length;
    function dfs(r: number, c: number) {
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0")
        return;
      grid[r][c] = "0";
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === "1") {
          count++;
          dfs(r, c);
        }
      }
    }
    return count;
  },
  // problem solver--> 112
  "recursion-longest-increasing-path-in-matrix": function longestIncreasingPath(
    matrix: number[][]
  ): number {
    const rows = matrix.length,
      cols = matrix[0].length;
    const memo = Array.from({ length: rows }, () => Array(cols).fill(0));
    let maxLength = 0;
    function dfs(r: number, c: number): number {
      if (memo[r][c] !== 0) return memo[r][c];
      let maxPath = 1;
      const moves = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];
      for (const [dr, dc] of moves) {
        const nr = r + dr,
          nc = c + dc;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          matrix[nr][nc] > matrix[r][c]
        ) {
          maxPath = Math.max(maxPath, 1 + dfs(nr, nc));
        }
      }
      memo[r][c] = maxPath;
      return maxPath;
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        maxLength = Math.max(maxLength, dfs(r, c));
      }
    }
    return maxLength;
  },
  // problem solver--> 113
  "recursion-restore-ip-addresses": function restoreIpAddresses(
    s: string
  ): string[] {
    const result: string[] = [];
    function backtrack(index: number, path: string[]) {
      if (path.length === 4) {
        if (index === s.length) result.push(path.join("."));
        return;
      }
      for (let i = index; i < s.length && i < index + 3; i++) {
        const part = s.substring(index, i + 1);
        if (parseInt(part) > 255 || (part.length > 1 && part[0] === "0"))
          continue;
        path.push(part);
        backtrack(i + 1, path);
        path.pop();
      }
    }
    backtrack(0, []);
    return result;
  },
  // problem solver--> 114
  "recursion-word-squares": function wordSquares(words: string[]): string[][] {
    const result: string[][] = [];
    if (!words || words.length === 0) return result;
    const n = words[0].length;
    const prefixMap = new Map<string, string[]>();
    for (const word of words) {
      for (let i = 0; i < n; i++) {
        const prefix = word.substring(0, i + 1);
        if (!prefixMap.has(prefix)) prefixMap.set(prefix, []);
        prefixMap.get(prefix)!.push(word);
      }
    }
    function backtrack(step: number, path: string[]) {
      if (step === n) {
        result.push([...path]);
        return;
      }
      let prefix = "";
      for (let i = 0; i < step; i++) prefix += path[i][step];
      const candidates = prefixMap.get(prefix) || [];
      for (const candidate of candidates) {
        path.push(candidate);
        backtrack(step + 1, path);
        path.pop();
      }
    }
    for (const word of words) {
      backtrack(1, [word]);
    }
    return result;
  },
  // problem solver--> 115
  "recursion-optimal-account-balancing": function minTransfers(
    transactions: number[][]
  ): number {
    const balances = new Map<number, number>();
    for (const [from, to, amount] of transactions) {
      balances.set(from, (balances.get(from) || 0) - amount);
      balances.set(to, (balances.get(to) || 0) + amount);
    }
    const debts = Array.from(balances.values()).filter((val) => val !== 0);
    function backtrack(index: number): number {
      if (index === debts.length) return 0;
      if (debts[index] === 0) return backtrack(index + 1);
      let minTransactions = Infinity;
      for (let i = index + 1; i < debts.length; i++) {
        if (debts[index] * debts[i] < 0) {
          debts[i] += debts[index];
          minTransactions = Math.min(minTransactions, 1 + backtrack(index + 1));
          debts[i] -= debts[index];
        }
      }
      return minTransactions;
    }
    return backtrack(0);
  },
  // problem solver--> 116
  "recursion-file-system-traversal": function getFilePaths(
    fs: object
  ): string[] {
    const allPaths: string[] = [];
    function traverse(node: object, currentPath: string) {
      for (const key in node) {
        const newPath = currentPath ? `${currentPath}/${key}` : key;
        if (typeof node[key] === "string") {
          allPaths.push(newPath);
        } else if (typeof node[key] === "object" && node[key] !== null) {
          traverse(node[key], newPath);
        }
      }
    }
    traverse(fs, "");
    // The prompt asks for root to be included, let's adjust for that
    return allPaths.map((p) => (p.startsWith("root/") ? p.substring(5) : p));
  },
  // problem solver--> 117
  "recursion-lca-of-binary-tree": function lowestCommonAncestor(
    root: TreeNode,
    pVal: number,
    qVal: number
  ): TreeNode {
    if (!root || root.value === pVal || root.value === qVal) return root;
    const left = lowestCommonAncestor(root.left, pVal, qVal);
    const right = lowestCommonAncestor(root.right, pVal, qVal);
    if (left && right) return root;
    return left || right;
  },
  // problem solver--> 118
  "recursion-word-break-ii": function wordBreakII(
    s: string,
    wordDict: string[]
  ): string[] {
    const wordSet = new Set(wordDict);
    const memo = new Map<string, string[]>();
    function solve(sub: string): string[] {
      if (memo.has(sub)) return memo.get(sub)!;
      if (sub === "") return [""];

      const results: string[] = [];
      for (const word of wordSet) {
        if (sub.startsWith(word)) {
          const nextResults = solve(sub.substring(word.length));
          for (const next of nextResults) {
            results.push(word + (next === "" ? "" : " ") + next);
          }
        }
      }
      memo.set(sub, results);
      return results;
    }
    return solve(s);
  },
  // problem solver--> 119
  "recursion-parse-lisp-expression": function evaluateLisp(
    expression: string
  ): number {
    function parse(exp: string): [any, string] {
      exp = exp.trim();
      if (exp[0] === "(") {
        const res: any[] = [];
        let sub = exp.substring(1);
        while (sub[0] !== ")") {
          const [val, remaining] = parse(sub);
          res.push(val);
          sub = remaining;
        }
        return [res, sub.substring(1)];
      }
      const match = exp.match(/^(-?\d+)|(^[a-zA-Z0-9]+)/);
      const token = match![0];
      const remaining = exp.substring(token.length);
      return [isNaN(parseInt(token)) ? token : parseInt(token), remaining];
    }

    function evaluate(expr: any, scope: Map<string, number>): number {
      if (typeof expr === "number") return expr;
      if (scope.has(expr)) return scope.get(expr)!;

      const [op, ...args] = expr;
      if (op === "add") {
        return evaluate(args[0], scope) + evaluate(args[1], scope);
      } else if (op === "mult") {
        return evaluate(args[0], scope) * evaluate(args[1], scope);
      } else {
        // let expression
        const newScope = new Map(scope);
        for (let i = 0; i < args.length - 2; i += 2) {
          newScope.set(args[i], evaluate(args[i + 1], newScope));
        }
        return evaluate(args[args.length - 1], newScope);
      }
    }
    const [parsedExp] = parse(expression);
    return evaluate(parsedExp, new Map());
  },
  // problem solver--> 120
  "recursion-tree-diameter": function diameterOfBinaryTree(
    root: TreeNode
  ): number {
    let diameter = 0;
    function height(node: TreeNode): number {
      if (!node) return 0;
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);
      diameter = Math.max(diameter, leftHeight + rightHeight);
      return Math.max(leftHeight, rightHeight) + 1;
    }
    height(root);
    return diameter;
  },
  // problem solver--> 121
  "recursion-number-of-atoms": function countOfAtoms(formula: string): string {
    let i = 0;
    function parse(): Map<string, number> {
      const counts = new Map<string, number>();
      while (i < formula.length && formula[i] !== ")") {
        if (formula[i] === "(") {
          i++;
          const nestedCounts = parse();
          i++;
          let numStr = "";
          while (i < formula.length && /\d/.test(formula[i])) {
            numStr += formula[i];
            i++;
          }
          const multiplier = parseInt(numStr || "1");
          for (const [atom, count] of nestedCounts.entries()) {
            counts.set(atom, (counts.get(atom) || 0) + count * multiplier);
          }
        } else {
          let atom = formula[i];
          i++;
          while (i < formula.length && /[a-z]/.test(formula[i])) {
            atom += formula[i];
            i++;
          }
          let numStr = "";
          while (i < formula.length && /\d/.test(formula[i])) {
            numStr += formula[i];
            i++;
          }
          const count = parseInt(numStr || "1");
          counts.set(atom, (counts.get(atom) || 0) + count);
        }
      }
      return counts;
    }
    const finalCounts = parse();
    const sortedAtoms = Array.from(finalCounts.keys()).sort();
    let result = "";
    for (const atom of sortedAtoms) {
      result += atom;
      const count = finalCounts.get(atom);
      if (count! > 1) {
        result += count;
      }
    }
    return result;
  },
  // problem solver--> 122
  "recursion-longest-univalue-path": function longestUnivaluePath(
    root: TreeNode
  ): number {
    let maxPath = 0;
    function dfs(node: TreeNode): number {
      if (!node) return 0;
      let leftLen = dfs(node.left);
      let rightLen = dfs(node.right);
      let arrowLeft = 0,
        arrowRight = 0;
      if (node.left && node.left.value === node.value) {
        arrowLeft += leftLen + 1;
      }
      if (node.right && node.right.value === node.value) {
        arrowRight += rightLen + 1;
      }
      maxPath = Math.max(maxPath, arrowLeft + arrowRight);
      return Math.max(arrowLeft, arrowRight);
    }
    dfs(root);
    return maxPath;
  },
  // problem solver--> 123
  "recursion-24-game": function judgePoint24(cards: number[]): boolean {
    function solve(nums: number[]): boolean {
      if (nums.length === 1) return Math.abs(nums[0] - 24) < 1e-6;

      for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
          if (i === j) continue;
          const nextNums: number[] = [];
          for (let k = 0; k < nums.length; k++) {
            if (k !== i && k !== j) nextNums.push(nums[k]);
          }
          if (solve([...nextNums, nums[i] + nums[j]])) return true;
          if (solve([...nextNums, nums[i] - nums[j]])) return true;
          if (solve([...nextNums, nums[i] * nums[j]])) return true;
          if (nums[j] !== 0 && solve([...nextNums, nums[i] / nums[j]]))
            return true;
        }
      }
      return false;
    }
    return solve(cards);
  },
  // problem solver--> 124
  "recursion-cracking-the-safe": function crackSafe(
    n: number,
    k: number
  ): string {
    const totalPasswords = Math.pow(k, n);
    const visited = new Set<string>();
    let result = "0".repeat(n);
    visited.add(result);

    function dfs() {
      if (visited.size === totalPasswords) return true;
      const prev = result.substring(result.length - n + 1);
      for (let i = 0; i < k; i++) {
        const next = prev + i;
        if (!visited.has(next)) {
          visited.add(next);
          result += i;
          if (dfs()) return true;
          result = result.slice(0, -1);
          visited.delete(next);
        }
      }
      return false;
    }
    dfs();
    return result;
  },
  // problem solver--> 125
  "recursion-making-a-large-island": function largestIsland(
    grid: number[][]
  ): number {
    const n = grid.length;
    const islandSizes = new Map<number, number>();
    let islandId = 2; // Start IDs from 2 to not conflict with 0 and 1
    let maxArea = 0;

    function dfs(r: number, c: number, id: number): number {
      if (r < 0 || r >= n || c < 0 || c >= n || grid[r][c] !== 1) return 0;
      grid[r][c] = id;
      return (
        1 +
        dfs(r + 1, c, id) +
        dfs(r - 1, c, id) +
        dfs(r, c + 1, id) +
        dfs(r, c - 1, id)
      );
    }

    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[r][c] === 1) {
          const size = dfs(r, c, islandId);
          islandSizes.set(islandId, size);
          maxArea = Math.max(maxArea, size);
          islandId++;
        }
      }
    }
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[r][c] === 0) {
          const neighborIds = new Set<number>();
          const moves = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
          ];
          for (const [dr, dc] of moves) {
            const nr = r + dr,
              nc = c + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] > 1) {
              neighborIds.add(grid[nr][nc]);
            }
          }
          let currentArea = 1;
          for (const id of neighborIds) {
            currentArea += islandSizes.get(id) || 0;
          }
          maxArea = Math.max(maxArea, currentArea);
        }
      }
    }
    return maxArea === 0 ? n * n : maxArea; // Handle case where grid is all 1s
  },
  // problem solver--> 126
  "recursion-basic-calculator": function calculate(s: string): number {
    let i = 0;
    function solve(): number {
      const stack: number[] = [];
      let sign = 1;
      let num = 0;
      let result = 0;
      while (i < s.length) {
        const char = s[i++];
        if (/\d/.test(char)) {
          num = num * 10 + parseInt(char);
        } else if (char === "+") {
          result += sign * num;
          num = 0;
          sign = 1;
        } else if (char === "-") {
          result += sign * num;
          num = 0;
          sign = -1;
        } else if (char === "(") {
          num = solve();
        } else if (char === ")") {
          break;
        }
      }
      result += sign * num;
      return result;
    }
    return solve();
  },
  // problem solver--> 127
  "recursion-dom-tree-traversal": function findTagText(
    dom: any,
    tagName: string
  ): string | null {
    if (dom.tag === tagName && dom.text) {
      return dom.text;
    }
    if (dom.children) {
      for (const child of dom.children) {
        const result = findTagText(child, tagName);
        if (result !== null) {
          return result;
        }
      }
    }
    return null;
  },
  // problem solver--> 128
  "recursion-rod-cutting": function cutRod(
    prices: number[],
    n: number
  ): number {
    const memo = new Map<number, number>();
    function solve(len: number): number {
      if (memo.has(len)) return memo.get(len)!;
      if (len <= 0) return 0;
      let maxVal = -1;
      for (let i = 0; i < len; i++) {
        maxVal = Math.max(maxVal, prices[i] + solve(len - (i + 1)));
      }
      memo.set(len, maxVal);
      return maxVal;
    }
    return solve(n);
  },
  // problem solver--> 129
  "recursion-longest-palindromic-subsequence": function longestPalindromeSubseq(
    s: string
  ): number {
    const memo = new Map<string, number>();
    function solve(l: number, r: number): number {
      const key = `${l}-${r}`;
      if (memo.has(key)) return memo.get(key)!;
      if (l > r) return 0;
      if (l === r) return 1;
      let result;
      if (s[l] === s[r]) {
        result = 2 + solve(l + 1, r - 1);
      } else {
        result = Math.max(solve(l + 1, r), solve(l, r - 1));
      }
      memo.set(key, result);
      return result;
    }
    return solve(0, s.length - 1);
  },
  // problem solver--> 130
  "recursion-unique-binary-search-trees-ii": function generateTrees(
    n: number
  ): (TreeNode | null)[] {
    if (n === 0) return [];
    function generate(start: number, end: number): (TreeNode | null)[] {
      if (start > end) return [null];
      const allTrees: (TreeNode | null)[] = [];
      for (let i = start; i <= end; i++) {
        const leftTrees = generate(start, i - 1);
        const rightTrees = generate(i + 1, end);
        for (const left of leftTrees) {
          for (const right of rightTrees) {
            const root: TreeNode = { value: i, left, right };
            allTrees.push(root);
          }
        }
      }
      return allTrees;
    }
    return generate(1, n);
  },
  // problem solver--> 131
  "recursion-minimum-path-sum": function minPathSum(grid: number[][]): number {
    const memo = new Map<string, number>();
    function solve(r: number, c: number): number {
      const key = `${r}-${c}`;
      if (memo.has(key)) return memo.get(key)!;
      if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];
      if (r >= grid.length || c >= grid[0].length) return Infinity;

      const down = solve(r + 1, c);
      const right = solve(r, c + 1);

      const result = grid[r][c] + Math.min(down, right);
      memo.set(key, result);
      return result;
    }
    return solve(0, 0);
  },
  // problem solver--> 132
  "recursion-knight-probability-on-chessboard": function knightProbability(
    n: number,
    k: number,
    row: number,
    column: number
  ): number {
    const moves = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];
    const memo = new Map<string, number>();

    function solve(r: number, c: number, movesLeft: number): number {
      if (r < 0 || r >= n || c < 0 || c >= n) return 0;
      if (movesLeft === 0) return 1;

      const key = `${r}-${c}-${movesLeft}`;
      if (memo.has(key)) return memo.get(key)!;

      let probability = 0;
      for (const [dr, dc] of moves) {
        probability += solve(r + dr, c + dc, movesLeft - 1);
      }

      const result = probability / 8;
      memo.set(key, result);
      return result;
    }
    return solve(row, column, k);
  },
  // problem solver--> 133
  "recursion-android-unlock-patterns": function numberOfPatterns(
    m: number,
    n: number
  ): number {
    const skip = Array.from({ length: 10 }, () => Array(10).fill(0));
    skip[1][3] = skip[3][1] = 2;
    skip[1][7] = skip[7][1] = 4;
    skip[3][9] = skip[9][3] = 6;
    skip[7][9] = skip[9][7] = 8;
    skip[1][9] = skip[9][1] = skip[3][7] = skip[7][3] = 5;
    skip[2][8] = skip[8][2] = 5;
    skip[4][6] = skip[6][4] = 5;

    const visited = Array(10).fill(false);
    let count = 0;

    function dfs(num: number, len: number) {
      if (len >= m) count++;
      if (len === n) return;

      visited[num] = true;
      for (let next = 1; next <= 9; next++) {
        const jump = skip[num][next];
        if (!visited[next] && (jump === 0 || visited[jump])) {
          dfs(next, len + 1);
        }
      }
      visited[num] = false;
    }

    dfs(1, 1);
    dfs(2, 1);
    dfs(3, 1);
    dfs(4, 1);
    count *= 4;
    dfs(5, 1);

    return count;
  },
  // problem solver--> 134
  "recursion-trie-prefix-search": function findWordsWithPrefix(
    words: string[],
    prefix: string
  ): string[] {
    class TrieNode {
      children = new Map<string, TrieNode>();
      isEndOfWord = false;
    }
    const root = new TrieNode();
    for (const word of words) {
      let node = root;
      for (const char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char)!;
      }
      node.isEndOfWord = true;
    }

    let startNode = root;
    for (const char of prefix) {
      if (!startNode.children.has(char)) return [];
      startNode = startNode.children.get(char)!;
    }

    const result: string[] = [];
    function findAllWords(node: TrieNode, currentWord: string) {
      if (node.isEndOfWord) result.push(currentWord);
      for (const [char, childNode] of node.children.entries()) {
        findAllWords(childNode, currentWord + char);
      }
    }

    findAllWords(startNode, prefix);
    return result;
  },
  // problem solver--> 135
  "recursion-interleaving-string": function isInterleave(
    s1: string,
    s2: string,
    s3: string
  ): boolean {
    if (s1.length + s2.length !== s3.length) return false;
    const memo = new Map<string, boolean>();
    function solve(i: number, j: number): boolean {
      const k = i + j;
      const key = `${i}-${j}`;
      if (memo.has(key)) return memo.get(key)!;
      if (k === s3.length) return true;

      let res = false;
      if (i < s1.length && s1[i] === s3[k]) {
        res = res || solve(i + 1, j);
      }
      if (j < s2.length && s2[j] === s3[k]) {
        res = res || solve(i, j + 1);
      }
      memo.set(key, res);
      return res;
    }
    return solve(0, 0);
  },
  // problem solver--> 136
  "recursion-max-area-of-island": function maxAreaOfIsland(
    grid: number[][]
  ): number {
    let maxArea = 0;
    const rows = grid.length,
      cols = grid[0].length;

    function dfs(r: number, c: number): number {
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0)
        return 0;
      grid[r][c] = 0; // Mark as visited
      return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 1) {
          maxArea = Math.max(maxArea, dfs(r, c));
        }
      }
    }
    return maxArea;
  },
  // problem solver--> 137
  "recursion-different-ways-to-add-parentheses": function diffWaysToCompute(
    expression: string
  ): number[] {
    const memo = new Map<string, number[]>();
    function solve(exp: string): number[] {
      if (memo.has(exp)) return memo.get(exp)!;
      const result: number[] = [];
      for (let i = 0; i < exp.length; i++) {
        const char = exp[i];
        if (char === "+" || char === "-" || char === "*") {
          const left = solve(exp.substring(0, i));
          const right = solve(exp.substring(i + 1));
          for (const l of left) {
            for (const r of right) {
              if (char === "+") result.push(l + r);
              else if (char === "-") result.push(l - r);
              else result.push(l * r);
            }
          }
        }
      }
      if (result.length === 0) result.push(parseInt(exp)); // Base case: it's a number
      memo.set(exp, result);
      return result;
    }
    return solve(expression);
  },
  // problem solver--> 138
  "recursion-subset-sum-problem": function isSubsetSum(
    set: number[],
    sum: number
  ): boolean {
    function solve(index: number, currentSum: number): boolean {
      if (currentSum === sum) return true;
      if (index === set.length || currentSum > sum) return false;
      // Include the element
      if (solve(index + 1, currentSum + set[index])) return true;
      // Exclude the element
      if (solve(index + 1, currentSum)) return true;
      return false;
    }
    return solve(0, 0);
  },
  // problem solver--> 139
  "recursion-unique-paths-iii": function uniquePathsIII(
    grid: number[][]
  ): number {
    let startR = 0,
      startC = 0,
      emptySquares = 1;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        if (grid[r][c] === 1) {
          startR = r;
          startC = c;
        } else if (grid[r][c] === 0) {
          emptySquares++;
        }
      }
    }

    let pathCount = 0;
    function dfs(r: number, c: number, count: number) {
      if (
        r < 0 ||
        r >= grid.length ||
        c < 0 ||
        c >= grid[0].length ||
        grid[r][c] === -1
      )
        return;
      if (grid[r][c] === 2) {
        if (count === emptySquares) pathCount++;
        return;
      }

      const temp = grid[r][c];
      grid[r][c] = -1; // Mark as visited
      dfs(r + 1, c, count + 1);
      dfs(r - 1, c, count + 1);
      dfs(r, c + 1, count + 1);
      dfs(r, c - 1, count + 1);
      grid[r][c] = temp; // Backtrack
    }

    dfs(startR, startC, 0);
    return pathCount;
  },
  // problem solver--> 140
  "recursion-boggle-solver": function findWords(
    board: string[][],
    dictionary: string[]
  ): string[] {
    // A full Trie implementation is needed for efficiency, this is conceptual.
    const result = new Set<string>();
    const rows = board.length,
      cols = board[0].length;

    function dfs(
      r: number,
      c: number,
      currentWord: string,
      visited: boolean[][]
    ) {
      if (!dictionary.some((w) => w.startsWith(currentWord))) return;
      if (dictionary.includes(currentWord)) result.add(currentWord);

      visited[r][c] = true;
      const moves = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];
      for (const [dr, dc] of moves) {
        const nr = r + dr,
          nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
          dfs(nr, nc, currentWord + board[nr][nc], visited);
        }
      }
      visited[r][c] = false; // backtrack
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const visited = Array.from({ length: rows }, () =>
          Array(cols).fill(false)
        );
        dfs(r, c, board[r][c], visited);
      }
    }
    return Array.from(result);
  },
  // problem solver--> 141
  "recursion-construct-tree-from-preorder-inorder": function buildTree(
    preorder: number[],
    inorder: number[]
  ): TreeNode {
    if (preorder.length === 0 || inorder.length === 0) return null;

    const rootVal = preorder[0];
    const root = { value: rootVal, left: null, right: null };
    const rootIndexInorder = inorder.indexOf(rootVal);

    const leftInorder = inorder.slice(0, rootIndexInorder);
    const rightInorder = inorder.slice(rootIndexInorder + 1);

    const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
    const rightPreorder = preorder.slice(1 + leftInorder.length);

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
  },
  // problem solver--> 142
  "recursion-construct-tree-from-inorder-postorder": function buildTreePost(
    inorder: number[],
    postorder: number[]
  ): TreeNode {
    if (inorder.length === 0 || postorder.length === 0) return null;

    const rootVal = postorder[postorder.length - 1];
    const root = { value: rootVal, left: null, right: null };
    const rootIndexInorder = inorder.indexOf(rootVal);

    const leftInorder = inorder.slice(0, rootIndexInorder);
    const rightInorder = inorder.slice(rootIndexInorder + 1);

    const leftPostorder = postorder.slice(0, leftInorder.length);
    const rightPostorder = postorder.slice(
      leftInorder.length,
      postorder.length - 1
    );

    root.left = buildTreePost(leftInorder, leftPostorder);
    root.right = buildTreePost(rightInorder, rightPostorder);

    return root;
  },
  // problem solver--> 143
  "recursion-serialize-deserialize-binary-tree": function serializeDeserialize(
    tree: TreeNode
  ) {
    function serialize(node: TreeNode): string {
      if (!node) return "null";
      return `${node.value},${serialize(node.left)},${serialize(node.right)}`;
    }

    function deserialize(data: string): TreeNode {
      const values = data.split(",");
      function build(): TreeNode {
        const val = values.shift();
        if (val === "null" || val === undefined) return null;
        const node = { value: parseInt(val), left: null, right: null };
        node.left = build();
        node.right = build();
        return node;
      }
      return build();
    }

    const serialized = serialize(tree);
    const deserialized = deserialize(serialized);
    return { serialized, deserialized };
  },
  // problem solver--> 144
  "recursion-find-kth-smallest-element-in-bst": function kthSmallest(
    root: TreeNode,
    k: number
  ): number {
    let count = 0;
    let result = -1;
    function inorder(node: TreeNode) {
      if (!node || result !== -1) return;
      inorder(node.left);
      count++;
      if (count === k) {
        result = node.value;
        return;
      }
      inorder(node.right);
    }
    inorder(root);
    return result;
  },
  // problem solver--> 145
  "recursion-partition-equal-subset-sum": function canPartition(
    nums: number[]
  ): boolean {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) return false;
    const target = sum / 2;

    const memo = new Map<string, boolean>();
    function canFindSum(index: number, currentSum: number): boolean {
      const key = `${index}-${currentSum}`;
      if (memo.has(key)) return memo.get(key)!;
      if (currentSum === target) return true;
      if (index === nums.length || currentSum > target) return false;

      const result =
        canFindSum(index + 1, currentSum + nums[index]) ||
        canFindSum(index + 1, currentSum);
      memo.set(key, result);
      return result;
    }
    return canFindSum(0, 0);
  },
  // problem solver--> 146
  "recursion-find-minimum-in-rotated-sorted-array": function findMin(
    nums: number[]
  ): number {
    function search(left: number, right: number): number {
      if (left === right) return nums[left];
      if (nums[left] < nums[right]) return nums[left];

      const mid = Math.floor((left + right) / 2);
      if (nums[mid] >= nums[left]) {
        return search(mid + 1, right);
      }
      return search(left, mid);
    }
    return search(0, nums.length - 1);
  },
  // problem solver--> 147
  "recursion-search-in-rotated-sorted-array": function searchRotated(
    nums: number[],
    target: number
  ): number {
    function search(left: number, right: number): number {
      if (left > right) return -1;
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;

      // Left part is sorted
      if (nums[left] <= nums[mid]) {
        if (target >= nums[left] && target < nums[mid]) {
          return search(left, mid - 1);
        }
        return search(mid + 1, right);
      }
      // Right part is sorted
      else {
        if (target > nums[mid] && target <= nums[right]) {
          return search(mid + 1, right);
        }
        return search(left, mid - 1);
      }
    }
    return search(0, nums.length - 1);
  },
  // problem solver--> 148
  "recursion-populating-next-right-pointers": function connect(
    root: TreeNode
  ): TreeNode {
    if (!root || !root.left) return root; // Perfect tree means left exists iff right exists

    root.left.next = root.right;
    if (root.next) {
      root.right.next = root.next.left;
    }

    connect(root.left);
    connect(root.right);

    return root;
  },
  // problem solver--> 149
  "recursion-beautiful-array": function beautifulArray(n: number): number[] {
    const memo = new Map<number, number[]>();
    function solve(num: number): number[] {
      if (memo.has(num)) return memo.get(num)!;
      if (num === 1) return [1];

      const odds = solve(Math.ceil(num / 2)).map((x) => 2 * x - 1);
      const evens = solve(Math.floor(num / 2)).map((x) => 2 * x);

      const result = [...odds, ...evens];
      memo.set(num, result);
      return result;
    }
    return solve(n);
  },
  // problem solver--> 150
  "recursion-cheapest-flights-within-k-stops": function findCheapestPrice(
    n: number,
    flights: number[][],
    src: number,
    dst: number,
    k: number
  ): number {
    const adj = new Map<number, number[][]>();
    for (const [from, to, price] of flights) {
      if (!adj.has(from)) adj.set(from, []);
      adj.get(from)!.push([to, price]);
    }
    const memo = new Map<string, number>();

    function solve(node: number, stops: number): number {
      const key = `${node}-${stops}`;
      if (memo.has(key)) return memo.get(key)!;
      if (node === dst) return 0;
      if (stops < 0) return Infinity;

      let minCost = Infinity;
      if (adj.has(node)) {
        for (const [neighbor, price] of adj.get(node)!) {
          const cost = solve(neighbor, stops - 1);
          if (cost !== Infinity) {
            minCost = Math.min(minCost, price + cost);
          }
        }
      }
      memo.set(key, minCost);
      return minCost;
    }

    const result = solve(src, k);
    return result === Infinity ? -1 : result;
  },
  // problem solver--> 151
  "recursion-zuma-game": function findMinStep(
    board: string,
    hand: string
  ): number {
    const memo = new Map<string, number>();
    const handCount = new Map<string, number>();
    for (const c of hand) handCount.set(c, (handCount.get(c) || 0) + 1);

    function cleanBoard(b: string): string {
      let start = 0;
      for (let i = 0; i <= b.length; i++) {
        if (i === b.length || b[i] !== b[start]) {
          if (i - start >= 3) return cleanBoard(b.slice(0, start) + b.slice(i));
          start = i;
        }
      }
      return b;
    }

    function solve(b: string): number {
      if (b === "") return 0;
      if (memo.has(b)) return memo.get(b)!;

      let minSteps = Infinity;
      for (let i = 0; i <= b.length; i++) {
        for (const [color, count] of handCount.entries()) {
          if (count > 0) {
            handCount.set(color, count - 1);
            const newBoard = cleanBoard(b.slice(0, i) + color + b.slice(i));
            const res = solve(newBoard);
            if (res !== Infinity) minSteps = Math.min(minSteps, 1 + res);
            handCount.set(color, count); // backtrack
          }
        }
      }
      memo.set(b, minSteps);
      return minSteps;
    }
    const result = solve(board);
    return result === Infinity ? -1 : result;
  },
  // problem solver--> 152
  "recursion-concatenated-words": function findAllConcatenatedWordsInADict(
    words: string[]
  ): string[] {
    const wordSet = new Set(words);
    const memo = new Map<string, boolean>();

    function canForm(word: string): boolean {
      if (memo.has(word)) return memo.get(word)!;
      for (let i = 1; i < word.length; i++) {
        const prefix = word.substring(0, i);
        const suffix = word.substring(i);
        if (wordSet.has(prefix) && (wordSet.has(suffix) || canForm(suffix))) {
          memo.set(word, true);
          return true;
        }
      }
      memo.set(word, false);
      return false;
    }

    const result: string[] = [];
    for (const word of words) {
      if (canForm(word)) result.push(word);
    }
    return result;
  },
  // problem solver--> 153
  "recursion-k-th-symbol-in-grammar": function kthGrammar(
    n: number,
    k: number
  ): number {
    if (n === 1) return 0;
    const parentK = Math.ceil(k / 2);
    const parentSymbol = kthGrammar(n - 1, parentK);
    const isKOdd = k % 2 === 1;
    if (parentSymbol === 0) {
      return isKOdd ? 0 : 1;
    } else {
      return isKOdd ? 1 : 0;
    }
  },
  // problem solver--> 154
  "recursion-number-of-squareful-arrays": function numSquarefulPerms(
    nums: number[]
  ): number {
    let count = 0;
    nums.sort((a, b) => a - b);

    function isSquare(n: number): boolean {
      return Math.sqrt(n) % 1 === 0;
    }

    function backtrack(path: number[], used: boolean[]) {
      if (path.length === nums.length) {
        count++;
        return;
      }
      for (let i = 0; i < nums.length; i++) {
        if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]))
          continue;
        if (path.length > 0 && !isSquare(path[path.length - 1] + nums[i]))
          continue;

        used[i] = true;
        path.push(nums[i]);
        backtrack(path, used);
        path.pop();
        used[i] = false;
      }
    }
    backtrack([], Array(nums.length).fill(false));
    return count;
  },
  // problem solver--> 155
  "recursion-escape-a-large-maze": function isEscapePossible(
    blocked: number[][],
    source: number[],
    target: number[]
  ): boolean {
    // This problem is not a good fit for pure recursion due to massive search space.
    // The key insight is that if the source and target are not enclosed by the blockers, a path exists.
    // We can check this by running a limited BFS/DFS from both source and target.
    const blockedSet = new Set(blocked.map(([r, c]) => `${r},${c}`));
    const maxArea = (blocked.length * (blocked.length - 1)) / 2;

    function canReachFar(start: number[], end: number[]): boolean {
      const visited = new Set([`${start[0]},${start[1]}`]);
      const queue = [start];
      let count = 0;

      while (queue.length > 0) {
        const [r, c] = queue.shift()!;
        count++;
        if (count > maxArea || (r === end[0] && c === end[1])) return true;

        const moves = [
          [0, 1],
          [0, -1],
          [1, 0],
          [-1, 0],
        ];
        for (const [dr, dc] of moves) {
          const nr = r + dr,
            nc = c + dc;
          const key = `${nr},${nc}`;
          if (
            nr >= 0 &&
            nr < 1e6 &&
            nc >= 0 &&
            nc < 1e6 &&
            !blockedSet.has(key) &&
            !visited.has(key)
          ) {
            visited.add(key);
            queue.push([nr, nc]);
          }
        }
      }
      return false;
    }

    return canReachFar(source, target) && canReachFar(target, source);
  },
  // problem solver--> 156
  "recursion-tiling-a-rectangle-with-fewest-squares": function tilingRectangle(
    n: number,
    m: number
  ): number {
    let minSquares = n * m;

    function backtrack(height: boolean[][], count: number) {
      if (count >= minSquares) return;

      let r = -1,
        c = -1;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (!height[i][j]) {
            r = i;
            c = j;
            break;
          }
        }
        if (r !== -1) break;
      }
      if (r === -1) {
        minSquares = Math.min(minSquares, count);
        return;
      }

      for (let size = Math.min(n - r, m - c); size >= 1; size--) {
        let canPlace = true;
        for (let i = r; i < r + size; i++) {
          for (let j = c; j < c + size; j++) {
            if (height[i][j]) {
              canPlace = false;
              break;
            }
          }
          if (!canPlace) break;
        }

        if (canPlace) {
          for (let i = r; i < r + size; i++)
            for (let j = c; j < c + size; j++) height[i][j] = true;
          backtrack(height, count + 1);
          for (let i = r; i < r + size; i++)
            for (let j = c; j < c + size; j++) height[i][j] = false; // backtrack
        }
      }
    }

    const heightGrid = Array.from({ length: n }, () => Array(m).fill(false));
    backtrack(heightGrid, 0);
    return minSquares;
  },
  // problem solver--> 157
  "recursion-path-with-maximum-gold": function getMaximumGold(
    grid: number[][]
  ): number {
    let maxGold = 0;
    const rows = grid.length,
      cols = grid[0].length;

    function dfs(r: number, c: number): number {
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0)
        return 0;

      const gold = grid[r][c];
      grid[r][c] = 0; // Mark as visited

      const down = dfs(r + 1, c);
      const up = dfs(r - 1, c);
      const right = dfs(r, c + 1);
      const left = dfs(r, c - 1);

      grid[r][c] = gold; // backtrack
      return gold + Math.max(down, up, right, left);
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] > 0) {
          maxGold = Math.max(maxGold, dfs(r, c));
        }
      }
    }
    return maxGold;
  },
  // problem solver--> 158
  "recursion-ambiguous-coordinates": function ambiguousCoordinates(
    s: string
  ): string[] {
    const result: string[] = [];
    s = s.substring(1, s.length - 1);

    function getValidNumbers(sub: string): string[] {
      if (sub.length === 0) return [];
      if (sub.length === 1) return [sub];
      if (sub[0] === "0" && sub[sub.length - 1] === "0") return [];
      if (sub[0] === "0") return [`0.${sub.substring(1)}`];
      if (sub[sub.length - 1] === "0") return [sub];

      const valid = [sub];
      for (let i = 1; i < sub.length; i++) {
        valid.push(`${sub.substring(0, i)}.${sub.substring(i)}`);
      }
      return valid;
    }

    for (let i = 1; i < s.length; i++) {
      const leftParts = getValidNumbers(s.substring(0, i));
      const rightParts = getValidNumbers(s.substring(i));
      for (const l of leftParts) {
        for (const r of rightParts) {
          result.push(`(${l}, ${r})`);
        }
      }
    }
    return result;
  },
  // problem solver--> 159
  "recursion-k-th-permutation": function getPermutation(
    n: number,
    k: number
  ): string {
    const factorials = [1];
    const nums = [];
    for (let i = 1; i <= n; i++) {
      factorials[i] = factorials[i - 1] * i;
      nums.push(i);
    }

    k--; // 0-indexed k
    let result = "";
    for (let i = n; i > 0; i--) {
      const index = Math.floor(k / factorials[i - 1]);
      result += nums[index];
      nums.splice(index, 1);
      k %= factorials[i - 1];
    }
    return result;
  },
  // problem solver--> 160
  "recursion-matchsticks-to-square": function makesquare(
    matchsticks: number[]
  ): boolean {
    const sum = matchsticks.reduce((a, b) => a + b, 0);
    if (sum % 4 !== 0) return false;
    const sideLength = sum / 4;
    matchsticks.sort((a, b) => b - a);

    function backtrack(index: number, sides: number[]): boolean {
      if (index === matchsticks.length) return true;

      for (let i = 0; i < 4; i++) {
        if (sides[i] + matchsticks[index] <= sideLength) {
          sides[i] += matchsticks[index];
          if (backtrack(index + 1, sides)) return true;
          sides[i] -= matchsticks[index]; // backtrack
        }
      }
      return false;
    }
    return backtrack(0, [0, 0, 0, 0]);
  },
  // problem solver--> 161
  "recursion-can-i-win": function canIWin(
    maxChoosableInteger: number,
    desiredTotal: number
  ): boolean {
    const sum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;
    if (sum < desiredTotal) return false;
    if (desiredTotal <= 0) return true;
    const memo = new Map<number, boolean>();

    function solve(mask: number, currentTotal: number): boolean {
      if (memo.has(mask)) return memo.get(mask)!;
      if (currentTotal >= desiredTotal) return false;

      for (let i = 1; i <= maxChoosableInteger; i++) {
        if (!((mask >> i) & 1)) {
          // if number i is not used
          if (!solve(mask | (1 << i), currentTotal + i)) {
            memo.set(mask, true);
            return true;
          }
        }
      }
      memo.set(mask, false);
      return false;
    }
    return solve(0, 0);
  },
  // problem solver--> 162
  "recursion-the-skyline-problem": function getSkyline(
    buildings: number[][]
  ): number[][] {
    if (buildings.length === 0) return [];
    if (buildings.length === 1) {
      const [l, r, h] = buildings[0];
      return [
        [l, h],
        [r, 0],
      ];
    }

    const mid = Math.floor(buildings.length / 2);
    const leftSkyline = getSkyline(buildings.slice(0, mid));
    const rightSkyline = getSkyline(buildings.slice(mid));

    function mergeSkylines(left: number[][], right: number[][]): number[][] {
      const result: number[][] = [];
      let h1 = 0,
        h2 = 0;
      let i = 0,
        j = 0;

      while (i < left.length && j < right.length) {
        let x = 0;
        if (left[i][0] < right[j][0]) {
          x = left[i][0];
          h1 = left[i][1];
          i++;
        } else if (right[j][0] < left[i][0]) {
          x = right[j][0];
          h2 = right[j][1];
          j++;
        } else {
          x = left[i][0];
          h1 = left[i][1];
          h2 = right[j][1];
          i++;
          j++;
        }
        const maxH = Math.max(h1, h2);
        if (result.length === 0 || result[result.length - 1][1] !== maxH) {
          result.push([x, maxH]);
        }
      }
      result.push(...left.slice(i));
      result.push(...right.slice(j));
      return result;
    }
    return mergeSkylines(leftSkyline, rightSkyline);
  },
  // problem solver--> 163
  "recursion-count-of-smaller-numbers-after-self": function countSmaller(
    nums: number[]
  ): number[] {
    const result = Array(nums.length).fill(0);
    const indexedNums = nums.map((num, i) => ({ val: num, index: i }));

    function mergeSort(
      arr: { val: number; index: number }[]
    ): { val: number; index: number }[] {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
      return merge(left, right);
    }

    function merge(
      left: { val: number; index: number }[],
      right: { val: number; index: number }[]
    ): { val: number; index: number }[] {
      const merged = [];
      let i = 0,
        j = 0;
      while (i < left.length) {
        while (j < right.length && left[i].val > right[j].val) {
          j++;
        }
        result[left[i].index] += j;
        i++;
      }

      // Standard merge logic to sort the array for the next level up
      i = 0;
      j = 0;
      while (i < left.length && j < right.length) {
        if (left[i].val <= right[j].val) {
          merged.push(left[i++]);
        } else {
          merged.push(right[j++]);
        }
      }
      merged.push(...left.slice(i), ...right.slice(j));
      return merged;
    }
    mergeSort(indexedNums);
    return result;
  },
  // problem solver--> 164
  "recursion-frog-jump": function canCross(stones: number[]): boolean {
    const memo = new Map<string, boolean>();
    function solve(index: number, lastJump: number): boolean {
      const key = `${index}-${lastJump}`;
      if (memo.has(key)) return memo.get(key)!;
      if (index === stones.length - 1) return true;

      for (let nextJump = lastJump - 1; nextJump <= lastJump + 1; nextJump++) {
        if (nextJump > 0) {
          let nextStoneIndex = -1;
          for (let i = index + 1; i < stones.length; i++) {
            if (stones[i] === stones[index] + nextJump) {
              nextStoneIndex = i;
              break;
            }
            if (stones[i] > stones[index] + nextJump) break;
          }
          if (nextStoneIndex !== -1 && solve(nextStoneIndex, nextJump)) {
            memo.set(key, true);
            return true;
          }
        }
      }
      memo.set(key, false);
      return false;
    }
    return solve(0, 0);
  },
  // problem solver--> 165
  "recursion-burst-balloons": function maxCoins(nums: number[]): number {
    const paddedNums = [1, ...nums, 1];
    const n = paddedNums.length;
    const memo = Array.from({ length: n }, () => Array(n).fill(0));

    function solve(left: number, right: number): number {
      if (left + 1 === right) return 0;
      if (memo[left][right] > 0) return memo[left][right];

      let max = 0;
      for (let i = left + 1; i < right; i++) {
        max = Math.max(
          max,
          paddedNums[left] * paddedNums[i] * paddedNums[right] +
            solve(left, i) +
            solve(i, right)
        );
      }
      memo[left][right] = max;
      return max;
    }
    return solve(0, n - 1);
  },
  // problem solver--> 166
  "recursion-remove-boxes": function removeBoxes(boxes: number[]): number {
    const n = boxes.length;
    const memo = Array.from({ length: n }, () =>
      Array.from({ length: n }, () => Array(n).fill(0))
    );

    function solve(l: number, r: number, k: number): number {
      if (l > r) return 0;
      if (memo[l][r][k] > 0) return memo[l][r][k];

      // Option 1: Remove the current group of boxes[l]
      let res = (k + 1) * (k + 1) + solve(l + 1, r, 0);

      // Option 2: Find another box of the same color and merge
      for (let i = l + 1; i <= r; i++) {
        if (boxes[i] === boxes[l]) {
          res = Math.max(res, solve(l + 1, i - 1, 0) + solve(i, r, k + 1));
        }
      }

      memo[l][r][k] = res;
      return res;
    }
    return solve(0, n - 1, 0);
  },
  // problem solver--> 167
  "recursion-student-attendance-record-ii": function checkRecord(
    n: number
  ): number {
    const MOD = 1e9 + 7;
    const memo = new Map<string, number>();

    function solve(
      days: number,
      absentCount: number,
      lateCount: number
    ): number {
      const key = `${days}-${absentCount}-${lateCount}`;
      if (memo.has(key)) return memo.get(key)!;
      if (absentCount >= 2 || lateCount >= 3) return 0;
      if (days === 0) return 1;

      // Add 'P'
      let count = solve(days - 1, absentCount, 0);
      // Add 'A'
      count = (count + solve(days - 1, absentCount + 1, 0)) % MOD;
      // Add 'L'
      count = (count + solve(days - 1, absentCount, lateCount + 1)) % MOD;

      memo.set(key, count);
      return count;
    }
    return solve(n, 0, 0);
  },
  // problem solver--> 168
  "recursion-find-the-shortest-superstring": function shortestSuperstring(
    words: string[]
  ): string {
    const n = words.length;
    const overlaps = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        for (let k = Math.min(words[i].length, words[j].length); k >= 0; k--) {
          if (words[i].endsWith(words[j].substring(0, k))) {
            overlaps[i][j] = k;
            break;
          }
        }
      }
    }

    const memo = new Map<string, { path: number[]; len: number }>();
    function solve(
      mask: number,
      last: number
    ): { path: number[]; len: number } {
      const key = `${mask}-${last}`;
      if (memo.has(key)) return memo.get(key)!;
      if (mask === 1 << last) return { path: [last], len: words[last].length };

      const prevMask = mask ^ (1 << last);
      let best = { path: [], len: Infinity };
      for (let i = 0; i < n; i++) {
        if ((prevMask >> i) & 1) {
          const res = solve(prevMask, i);
          const newLen = res.len + words[last].length - overlaps[i][last];
          if (newLen < best.len) {
            best = { path: [...res.path, last], len: newLen };
          }
        }
      }
      memo.set(key, best);
      return best;
    }

    let bestPath = { path: [], len: Infinity };
    const finalMask = (1 << n) - 1;
    for (let i = 0; i < n; i++) {
      const res = solve(finalMask, i);
      if (res.len < bestPath.len) {
        bestPath = res;
      }
    }

    let result = words[bestPath.path[0]];
    for (let i = 1; i < n; i++) {
      const prev = bestPath.path[i - 1];
      const curr = bestPath.path[i];
      result += words[curr].substring(overlaps[prev][curr]);
    }
    return result;
  },
  // problem solver--> 169
  "recursion-critical-connections-in-a-network": function criticalConnections(
    n: number,
    connections: number[][]
  ): number[][] {
    const adj = Array.from({ length: n }, () => [] as number[]);
    for (const [u, v] of connections) {
      adj[u].push(v);
      adj[v].push(u);
    }

    const disc = Array(n).fill(-1);
    const low = Array(n).fill(-1);
    const result: number[][] = [];
    let time = 0;

    function dfs(u: number, parent: number) {
      disc[u] = low[u] = time++;
      for (const v of adj[u]) {
        if (v === parent) continue;
        if (disc[v] === -1) {
          dfs(v, u);
          low[u] = Math.min(low[u], low[v]);
          if (low[v] > disc[u]) {
            result.push([u, v]);
          }
        } else {
          low[u] = Math.min(low[u], disc[v]);
        }
      }
    }
    dfs(0, -1);
    return result;
  },
  // problem solver--> 170
  "recursion-palindrome-partitioning-ii": function minCut(s: string): number {
    const n = s.length;
    const isPalindrome = Array.from({ length: n }, () => Array(n).fill(false));
    for (let i = n - 1; i >= 0; i--) {
      for (let j = i; j < n; j++) {
        if (s[i] === s[j] && (j - i < 2 || isPalindrome[i + 1][j - 1])) {
          isPalindrome[i][j] = true;
        }
      }
    }
    const memo = new Map<number, number>();
    function solve(start: number): number {
      if (memo.has(start)) return memo.get(start)!;
      if (start === n) return -1;
      let min = Infinity;
      for (let end = start; end < n; end++) {
        if (isPalindrome[start][end]) {
          min = Math.min(min, 1 + solve(end + 1));
        }
      }
      memo.set(start, min);
      return min;
    }
    return solve(0);
  },
  // problem solver--> 171
  "recursion-max-value-of-equation": function findMaxValueOfEquation(
    points: number[][],
    k: number
  ): number {
    // Brute force recursive approach - will time out on large inputs
    let maxVal = -Infinity;
    function solve(i: number, j: number) {
      if (i >= points.length) return;
      if (j >= points.length) {
        solve(i + 1, i + 2);
        return;
      }
      if (points[j][0] - points[i][0] > k) {
        solve(i + 1, i + 2);
        return;
      }
      const val = points[i][1] + points[j][1] + points[j][0] - points[i][0];
      maxVal = Math.max(maxVal, val);
      solve(i, j + 1);
    }
    solve(0, 1);
    return maxVal;
  },
  // problem solver--> 172
  "recursion-basic-calculator-ii": function calculateII(s: string): number {
    s = s.replace(/\s/g, "");
    let i = 0;

    function parseTerm(): number {
      let factor = parseFactor();
      while (i < s.length && (s[i] === "*" || s[i] === "/")) {
        const op = s[i++];
        const nextFactor = parseFactor();
        if (op === "*") factor *= nextFactor;
        else factor = Math.trunc(factor / nextFactor);
      }
      return factor;
    }

    function parseFactor(): number {
      if (s[i] === "(") {
        i++;
        const result = parseExpression();
        i++; // consume ')'
        return result;
      }
      let num = 0;
      while (i < s.length && /\d/.test(s[i])) {
        num = num * 10 + parseInt(s[i++]);
      }
      return num;
    }

    function parseExpression(): number {
      let term = parseTerm();
      while (i < s.length && (s[i] === "+" || s[i] === "-")) {
        const op = s[i++];
        const nextTerm = parseTerm();
        if (op === "+") term += nextTerm;
        else term -= nextTerm;
      }
      return term;
    }
    return parseExpression();
  },
  // problem solver--> 173
  "recursion-strange-printer": function strangePrinter(s: string): number {
    const n = s.length;
    const memo = Array.from({ length: n }, () => Array(n).fill(0));
    function solve(i: number, j: number): number {
      if (i > j) return 0;
      if (memo[i][j] > 0) return memo[i][j];

      let res = solve(i + 1, j) + 1;
      for (let k = i + 1; k <= j; k++) {
        if (s[k] === s[i]) {
          res = Math.min(res, solve(i, k - 1) + solve(k + 1, j));
        }
      }
      memo[i][j] = res;
      return res;
    }
    return solve(0, n - 1);
  },
  // problem solver--> 174
  "recursion-number-of-ways-to-reorder-array-to-get-same-bst":
    function numOfWays(nums: number[]): number {
      const MOD = BigInt(1e9 + 7);
      const combinations = new Map<string, bigint>();

      function getCombinations(n: number, k: number): bigint {
        const key = `${n}-${k}`;
        if (k < 0 || k > n) return 0n;
        if (k === 0 || k === n) return 1n;
        if (k > n / 2) return getCombinations(n, n - k);
        if (combinations.has(key)) return combinations.get(key)!;

        let res = 1n;
        for (let i = 1; i <= k; i++) {
          res = (res * BigInt(n - i + 1)) / BigInt(i);
        }
        combinations.set(key, res);
        return res;
      }

      function solve(arr: number[]): bigint {
        if (arr.length <= 2) return 1n;
        const root = arr[0];
        const left = arr.filter((x) => x < root);
        const right = arr.filter((x) => x > root);

        const leftWays = solve(left);
        const rightWays = solve(right);

        const combs = getCombinations(left.length + right.length, left.length);

        return (combs * leftWays * rightWays) % MOD;
      }
      return Number((solve(nums) - 1n + MOD) % MOD);
    },
  // problem solver--> 175
  "recursion-cherry-pickup-ii": function cherryPickup(
    grid: number[][]
  ): number {
    const rows = grid.length,
      cols = grid[0].length;
    const memo = new Map<string, number>();

    function solve(r: number, c1: number, c2: number): number {
      if (r === rows) return 0;
      if (c1 < 0 || c1 >= cols || c2 < 0 || c2 >= cols) return -Infinity;

      const key = `${r}-${c1}-${c2}`;
      if (memo.has(key)) return memo.get(key)!;

      const cherries = grid[r][c1] + (c1 === c2 ? 0 : grid[r][c2]);
      let maxNext = 0;
      for (let dc1 = -1; dc1 <= 1; dc1++) {
        for (let dc2 = -1; dc2 <= 1; dc2++) {
          maxNext = Math.max(maxNext, solve(r + 1, c1 + dc1, c2 + dc2));
        }
      }

      const result = cherries + maxNext;
      memo.set(key, result);
      return result;
    }
    return solve(0, 0, cols - 1);
  },
  // problem solver--> 176
  "recursion-largest-rectangle-in-histogram": function largestRectangleArea(
    heights: number[]
  ): number {
    function calculate(start: number, end: number): number {
      if (start > end) return 0;
      let minIndex = start;
      for (let i = start; i <= end; i++) {
        if (heights[i] < heights[minIndex]) {
          minIndex = i;
        }
      }
      const areaWithMin = heights[minIndex] * (end - start + 1);
      const leftArea = calculate(start, minIndex - 1);
      const rightArea = calculate(minIndex + 1, end);
      return Math.max(areaWithMin, leftArea, rightArea);
    }
    return calculate(0, heights.length - 1);
  },
  // problem solver--> 177
  "recursion-reverse-pairs": function reversePairs(nums: number[]): number {
    let count = 0;
    function mergeSort(arr: number[]): number[] {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));

      let j = 0;
      for (let i = 0; i < left.length; i++) {
        while (j < right.length && left[i] > 2 * right[j]) {
          j++;
        }
        count += j;
      }

      // Merge step
      const merged: number[] = [];
      let l = 0,
        r = 0;
      while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) merged.push(left[l++]);
        else merged.push(right[r++]);
      }
      merged.push(...left.slice(l), ...right.slice(r));
      return merged;
    }
    mergeSort(nums);
    return count;
  },
  // problem solver--> 178
  "recursion-minimum-cost-to-merge-stones": function mergeStones(
    stones: number[],
    k: number
  ): number {
    const n = stones.length;
    if ((n - 1) % (k - 1) !== 0) return -1;

    const prefixSum = [0];
    for (const stone of stones)
      prefixSum.push(prefixSum[prefixSum.length - 1] + stone);

    const memo = new Map<string, number>();
    function solve(i: number, j: number, piles: number): number {
      const key = `${i}-${j}-${piles}`;
      if (memo.has(key)) return memo.get(key)!;
      if (i === j) return piles === 1 ? 0 : Infinity;
      if (piles === 1) {
        const mergeCost = prefixSum[j + 1] - prefixSum[i];
        return mergeCost + solve(i, j, k);
      }

      let minCost = Infinity;
      for (let mid = i; mid < j; mid += k - 1) {
        minCost = Math.min(
          minCost,
          solve(i, mid, 1) + solve(mid + 1, j, piles - 1)
        );
      }
      memo.set(key, minCost);
      return minCost;
    }
    const result = solve(0, n - 1, 1);
    return result === Infinity ? -1 : result;
  },
  // problem solver--> 179
  "recursion-sum-of-distances-in-tree": function sumOfDistancesInTree(
    n: number,
    edges: number[][]
  ): number[] {
    const adj = Array.from({ length: n }, () => [] as number[]);
    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }

    const count = Array(n).fill(1);
    const ans = Array(n).fill(0);

    function dfs1(node: number, parent: number) {
      for (const child of adj[node]) {
        if (child === parent) continue;
        dfs1(child, node);
        count[node] += count[child];
        ans[node] += ans[child] + count[child];
      }
    }

    function dfs2(node: number, parent: number) {
      for (const child of adj[node]) {
        if (child === parent) continue;
        ans[child] = ans[node] - count[child] + (n - count[child]);
        dfs2(child, node);
      }
    }

    dfs1(0, -1);
    dfs2(0, -1);
    return ans;
  },
  // problem solver--> 180
  "recursion-number-of-ways-to-stay-in-the-same-place-after-some-steps":
    function numWays(steps: number, arrLen: number): number {
      const MOD = 1e9 + 7;
      const maxPos = Math.min(steps, arrLen - 1);
      const memo = new Map<string, number>();

      function solve(pos: number, stepsLeft: number): number {
        const key = `${pos}-${stepsLeft}`;
        if (memo.has(key)) return memo.get(key)!;
        if (pos < 0 || pos > maxPos || pos > stepsLeft) return 0;
        if (stepsLeft === 0) return pos === 0 ? 1 : 0;

        let ways = solve(pos, stepsLeft - 1); // Stay
        ways = (ways + solve(pos + 1, stepsLeft - 1)) % MOD; // Right
        ways = (ways + solve(pos - 1, stepsLeft - 1)) % MOD; // Left

        memo.set(key, ways);
        return ways;
      }
      return solve(0, steps);
    },
  // problem solver--> 181
  "recursion-string-transformation": function stringTransformation(
    start: string,
    end: string,
    dict: string[]
  ): number {
    const wordSet = new Set(dict);
    if (!wordSet.has(end)) return 0;

    const queue: [string, number][] = [[start, 1]];
    const visited = new Set([start]);

    while (queue.length > 0) {
      const [currentWord, level] = queue.shift()!;
      if (currentWord === end) return level;

      for (let i = 0; i < currentWord.length; i++) {
        for (let j = 0; j < 26; j++) {
          const newWord =
            currentWord.slice(0, i) +
            String.fromCharCode(97 + j) +
            currentWord.slice(i + 1);
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            visited.add(newWord);
            queue.push([newWord, level + 1]);
          }
        }
      }
    }
    return 0; // No path found
  },
  // problem solver--> 182
  "recursion-find-all-anagrams-in-a-string": function findAnagrams(
    s: string,
    p: string
  ): number[] {
    if (s.length < p.length) return [];
    const pCount = new Map<string, number>();
    for (const char of p) pCount.set(char, (pCount.get(char) || 0) + 1);

    const result: number[] = [];
    let required = pCount.size;
    let windowCount = new Map<string, number>();
    let l = 0;

    for (let r = 0; r < s.length; r++) {
      const char = s[r];
      windowCount.set(char, (windowCount.get(char) || 0) + 1);
      if (pCount.has(char) && windowCount.get(char) === pCount.get(char)) {
        required--;
      }
      while (r - l + 1 >= p.length) {
        if (required === 0) result.push(l);
        const leftChar = s[l];
        if (
          pCount.has(leftChar) &&
          windowCount.get(leftChar) === pCount.get(leftChar)
        ) {
          required++;
        }
        windowCount.set(leftChar, windowCount.get(leftChar)! - 1);
        l++;
      }
    }
    return result;
  },
  // problem solver--> 183
  "recursion-count-good-nodes-in-binary-tree": function goodNodes(
    root: TreeNode
  ): number {
    function dfs(node: TreeNode, maxVal: number): number {
      if (!node) return 0;
      let count = 0;
      if (node.value >= maxVal) {
        count = 1;
        maxVal = node.value;
      }
      return count + dfs(node.left, maxVal) + dfs(node.right, maxVal);
    }
    return dfs(root, -Infinity);
  },
  // problem solver--> 184
  "recursion-sum-root-to-leaf-numbers": function sumNumbers(
    root: TreeNode
  ): number {
    function dfs(node: TreeNode, currentSum: number): number {
      if (!node) return 0;
      const newSum = currentSum * 10 + node.value;
      if (!node.left && !node.right) {
        return newSum;
      }
      return dfs(node.left, newSum) + dfs(node.right, newSum);
    }
    return dfs(root, 0);
  },
  // problem solver--> 185
  "recursion-binary-tree-maximum-path-sum": function maxPathSum(
    root: TreeNode
  ): number {
    let maxSum = -Infinity;
    function dfs(node: TreeNode): number {
      if (!node) return 0;
      const leftSum = Math.max(0, dfs(node.left));
      const rightSum = Math.max(0, dfs(node.right));
      maxSum = Math.max(maxSum, node.value + leftSum + rightSum);
      return node.value + Math.max(leftSum, rightSum);
    }
    dfs(root);
    return maxSum;
  },
  // problem solver--> 186
  "recursion-all-nodes-distance-k-in-binary-tree": function distanceKAgain(
    root: TreeNode,
    targetValue: number,
    k: number
  ): number[] {
    // This is identical to problem 101, re-implementing for completeness
    const result: number[] = [];
    const parentMap = new Map<TreeNode, TreeNode>();
    let targetNode: TreeNode = null;

    function buildParentMap(node: TreeNode, parent: TreeNode) {
      if (!node) return;
      if (node.value === targetValue) targetNode = node;
      parentMap.set(node, parent);
      if (node.left) buildParentMap(node.left, node);
      if (node.right) buildParentMap(node.right, node);
    }
    buildParentMap(root, null);

    function find(node: TreeNode, distance: number, visited: Set<TreeNode>) {
      if (!node || visited.has(node)) return;
      visited.add(node);
      if (distance === k) {
        result.push(node.value);
        return;
      }
      find(node.left, distance + 1, visited);
      find(node.right, distance + 1, visited);
      const parent = parentMap.get(node);
      if (parent) find(parent, distance + 1, visited);
    }

    if (targetNode) find(targetNode, 0, new Set<TreeNode>());
    return result;
  },
  // problem solver--> 187
  "recursion-unique-binary-search-trees": function numTrees(n: number): number {
    const memo = new Map<number, number>();
    function solve(count: number): number {
      if (memo.has(count)) return memo.get(count)!;
      if (count <= 1) return 1;
      let total = 0;
      for (let i = 1; i <= count; i++) {
        const left = solve(i - 1);
        const right = solve(count - i);
        total += left * right;
      }
      memo.set(count, total);
      return total;
    }
    return solve(n);
  },
  // problem solver--> 188
  "recursion-step-by-step-directions-from-a-binary-tree-node-to-another":
    function getDirections(
      root: TreeNode,
      startValue: number,
      destValue: number
    ): string {
      function findPath(
        node: TreeNode,
        target: number,
        path: string[]
      ): boolean {
        if (!node) return false;
        if (node.value === target) return true;
        path.push("L");
        if (findPath(node.left, target, path)) return true;
        path.pop();
        path.push("R");
        if (findPath(node.right, target, path)) return true;
        path.pop();
        return false;
      }

      const startPath: string[] = [];
      findPath(root, startValue, startPath);
      const destPath: string[] = [];
      findPath(root, destValue, destPath);

      let i = 0;
      while (
        i < startPath.length &&
        i < destPath.length &&
        startPath[i] === destPath[i]
      ) {
        i++;
      }

      const upMoves = "U".repeat(startPath.length - i);
      const downMoves = destPath.slice(i).join("");
      return upMoves + downMoves;
    },
  // problem solver--> 189
  "recursion-minimum-difficulty-of-a-job-schedule": function minDifficulty(
    jobDifficulty: number[],
    d: number
  ): number {
    const n = jobDifficulty.length;
    if (n < d) return -1;
    const memo = new Map<string, number>();

    function solve(i: number, daysLeft: number): number {
      const key = `${i}-${daysLeft}`;
      if (memo.has(key)) return memo.get(key)!;
      if (daysLeft === 1) {
        let max = 0;
        for (let j = i; j < n; j++) max = Math.max(max, jobDifficulty[j]);
        return max;
      }

      let minDiff = Infinity;
      let maxForDay = 0;
      for (let j = i; j <= n - daysLeft; j++) {
        maxForDay = Math.max(maxForDay, jobDifficulty[j]);
        const res = solve(j + 1, daysLeft - 1);
        if (res !== Infinity) {
          minDiff = Math.min(minDiff, maxForDay + res);
        }
      }
      memo.set(key, minDiff);
      return minDiff;
    }
    const result = solve(0, d);
    return result === Infinity ? -1 : result;
  },
  // problem solver--> 190
  "recursion-path-sum-iii": function pathSumIII(
    root: TreeNode,
    targetSum: number
  ): number {
    const prefixSumCount = new Map<number, number>([[0, 1]]);

    function dfs(node: TreeNode, currentSum: number): number {
      if (!node) return 0;
      currentSum += node.value;
      let count = prefixSumCount.get(currentSum - targetSum) || 0;

      prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);
      count += dfs(node.left, currentSum);
      count += dfs(node.right, currentSum);
      prefixSumCount.set(currentSum, prefixSumCount.get(currentSum)! - 1); // backtrack

      return count;
    }
    return dfs(root, 0);
  },
  // problem solver--> 191
  "recursion-count-univalue-subtrees": function countUnivalSubtrees(
    root: TreeNode
  ): number {
    let count = 0;
    function isUnival(node: TreeNode): boolean {
      if (!node) return true;
      const isLeftUnival = isUnival(node.left);
      const isRightUnival = isUnival(node.right);

      if (isLeftUnival && isRightUnival) {
        if (node.left && node.left.value !== node.value) return false;
        if (node.right && node.right.value !== node.value) return false;
        count++;
        return true;
      }
      return false;
    }
    isUnival(root);
    return count;
  },
  // problem solver--> 192
  "recursion-all-possible-full-binary-trees": function allPossibleFBT(
    n: number
  ): (TreeNode | null)[] {
    const memo = new Map<number, (TreeNode | null)[]>();
    function solve(num: number): (TreeNode | null)[] {
      if (memo.has(num)) return memo.get(num)!;
      if (num % 2 === 0) return [];
      if (num === 1) return [{ value: 0, left: null, right: null }];

      const result: (TreeNode | null)[] = [];
      for (let i = 1; i < num; i += 2) {
        const leftTrees = solve(i);
        const rightTrees = solve(num - 1 - i);
        for (const left of leftTrees) {
          for (const right of rightTrees) {
            result.push({ value: 0, left, right });
          }
        }
      }
      memo.set(num, result);
      return result;
    }
    return solve(n);
  },
  // problem solver--> 193
  "recursion-longest-string-chain": function longestStrChain(
    words: string[]
  ): number {
    words.sort((a, b) => a.length - b.length);
    const memo = new Map<string, number>();
    let maxChain = 0;

    function findLongest(word: string): number {
      if (memo.has(word)) return memo.get(word)!;
      let maxLength = 1;
      for (let i = 0; i < word.length; i++) {
        const predecessor = word.slice(0, i) + word.slice(i + 1);
        if (words.includes(predecessor)) {
          maxLength = Math.max(maxLength, 1 + findLongest(predecessor));
        }
      }
      memo.set(word, maxLength);
      return maxLength;
    }

    for (const word of words) {
      maxChain = Math.max(maxChain, findLongest(word));
    }
    return maxChain;
  },
  // problem solver--> 194
  "recursion-alien-dictionary": function alienOrder(words: string[]): string {
    const adj = new Map<string, Set<string>>();
    for (const word of words) {
      for (const char of word) {
        if (!adj.has(char)) adj.set(char, new Set());
      }
    }

    for (let i = 0; i < words.length - 1; i++) {
      const w1 = words[i],
        w2 = words[i + 1];
      const minLen = Math.min(w1.length, w2.length);
      if (w1.length > w2.length && w1.startsWith(w2)) return ""; // Invalid order
      for (let j = 0; j < minLen; j++) {
        if (w1[j] !== w2[j]) {
          adj.get(w1[j])!.add(w2[j]);
          break;
        }
      }
    }

    const visited = new Map<string, boolean>(); // false: visiting, true: visited
    let result = "";

    function dfs(char: string): boolean {
      if (visited.has(char)) return visited.get(char)!;
      visited.set(char, false); // Mark as visiting (cycle detection)
      if (adj.has(char)) {
        for (const neighbor of adj.get(char)!) {
          if (!dfs(neighbor)) return false;
        }
      }
      visited.set(char, true);
      result = char + result;
      return true;
    }

    for (const char of adj.keys()) {
      if (!visited.has(char)) {
        if (!dfs(char)) return ""; // Cycle detected
      }
    }
    return result;
  },
  // problem solver--> 195
  "recursion-reconstruct-itinerary": function findItinerary(
    tickets: string[][]
  ): string[] {
    const adj = new Map<string, string[]>();
    tickets.sort((a, b) => a[1].localeCompare(b[1]));
    for (const [from, to] of tickets) {
      if (!adj.has(from)) adj.set(from, []);
      adj.get(from)!.push(to);
    }

    const itinerary: string[] = [];
    function dfs(airport: string) {
      const destinations = adj.get(airport);
      while (destinations && destinations.length > 0) {
        dfs(destinations.shift()!);
      }
      itinerary.unshift(airport);
    }

    dfs("JFK");
    return itinerary;
  },
  // problem solver--> 196
  "recursion-maximum-number-of-achievable-transfer-requests":
    function maximumRequests(n: number, requests: number[][]): number {
      let maxAchieved = 0;

      function backtrack(index: number, count: number) {
        if (index === requests.length) {
          const balance = Array(n).fill(0);
          // This should be done inside, but for a pure recursive solution:
          // For now, let's assume we can calculate it. The check is complex.
          // A better backtracking would pass the balance array.
          // We'll simulate it for this explanation.
          // If a subset of requests is valid, update maxAchieved.
          // This is a placeholder for the actual logic.
          return;
        }
        // Exclude request
        backtrack(index + 1, count);
        // Include request
        backtrack(index + 1, count + 1);
      }
      // The actual solver is much more complex, using a balance array in backtracking
      function solve(start: number, numRequests: number, balance: number[]) {
        if (start === requests.length) {
          if (balance.every((b) => b === 0))
            maxAchieved = Math.max(maxAchieved, numRequests);
          return;
        }

        solve(start + 1, numRequests, balance);

        const [from, to] = requests[start];
        balance[from]--;
        balance[to]++;
        solve(start + 1, numRequests + 1, balance);
        balance[from]++;
        balance[to]--;
      }
      solve(0, 0, Array(n).fill(0));
      return maxAchieved;
    },
  // problem solver--> 197
  "recursion-numbers-with-same-consecutive-differences":
    function numsSameConsecDiff(n: number, k: number): number[] {
      const result: number[] = [];
      function dfs(currentNum: number) {
        if (Math.log10(currentNum) + 1 >= n) {
          result.push(currentNum);
          return;
        }
        const lastDigit = currentNum % 10;
        if (lastDigit + k <= 9) {
          dfs(currentNum * 10 + lastDigit + k);
        }
        if (k !== 0 && lastDigit - k >= 0) {
          dfs(currentNum * 10 + lastDigit - k);
        }
      }
      for (let i = 1; i <= 9; i++) {
        dfs(i);
      }
      return result;
    },
  // problem solver--> 198
  "recursion-largest-component-size-by-common-factor":
    function largestComponentSize(nums: number[]): number {
      // This problem is best solved with Union-Find, not pure recursion.
      // The recursive part would be a DFS/BFS to find component sizes after building the graph.
      const maxNum = Math.max(...nums);
      const parent = Array.from({ length: maxNum + 1 }, (_, i) => i);

      function find(i: number): number {
        if (parent[i] === i) return i;
        parent[i] = find(parent[i]);
        return parent[i];
      }
      function union(i: number, j: number) {
        const rootI = find(i);
        const rootJ = find(j);
        if (rootI !== rootJ) parent[rootI] = rootJ;
      }

      for (const num of nums) {
        for (let i = 2; i * i <= num; i++) {
          if (num % i === 0) {
            union(num, i);
            union(num, num / i);
          }
        }
      }

      const counts = new Map<number, number>();
      let maxSize = 0;
      for (const num of nums) {
        const root = find(num);
        counts.set(root, (counts.get(root) || 0) + 1);
        maxSize = Math.max(maxSize, counts.get(root)!);
      }
      return maxSize;
    },
  // problem solver--> 199
  "recursion-the-number-of-good-subsets": function numberOfGoodSubsets(
    nums: number[]
  ): number {
    const MOD = 1_000_000_007;
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

    // frequency of each number 1..30
    const freq = new Array(31).fill(0);
    for (const n of nums) freq[n]++;

    // mask for each number: which primes divide it (skip if square factor)
    const masks: number[] = new Array(31).fill(0);
    for (let x = 2; x <= 30; x++) {
      let mask = 0;
      let valid = true;
      let t = x;
      for (let i = 0; i < primes.length; i++) {
        const p = primes[i];
        if (t % p === 0) {
          let cnt = 0;
          while (t % p === 0) {
            t /= p;
            cnt++;
          }
          if (cnt > 1) {
            // square factor -> not allowed
            valid = false;
            break;
          }
          mask |= 1 << i;
        }
      }
      masks[x] = valid ? mask : -1;
    }

    // dp[mask] = number of ways to form subset with prime factors = mask
    const dp = new Array(1 << primes.length).fill(0);
    dp[0] = 1;

    for (let x = 2; x <= 30; x++) {
      if (freq[x] === 0 || masks[x] === -1) continue;
      const m = masks[x];
      // iterate backwards to avoid double counting
      for (let s = (1 << primes.length) - 1; s >= 0; s--) {
        if ((s & m) === 0) {
          dp[s | m] = (dp[s | m] + dp[s] * freq[x]) % MOD;
        }
      }
    }

    let ans = 0;
    for (let s = 1; s < 1 << primes.length; s++) {
      ans = (ans + dp[s]) % MOD;
    }

    // each '1' can be included or not independently
    const pow2 = (exp: number): number => {
      let res = 1,
        base = 2;
      let e = exp;
      while (e > 0) {
        if (e & 1) res = (res * base) % MOD;
        base = (base * base) % MOD;
        e >>= 1;
      }
      return res;
    };

    ans = (ans * pow2(freq[1])) % MOD;
    return ans;
  },

  // problem solver--> 200
  "recursion-stone-game-iv": function winnerSquareGame(n: number): boolean {
    const memo = new Map<number, boolean>();
    function canWin(stones: number): boolean {
      if (memo.has(stones)) return memo.get(stones)!;
      if (stones === 0) return false;

      for (let k = 1; k * k <= stones; k++) {
        if (!canWin(stones - k * k)) {
          memo.set(stones, true);
          return true;
        }
      }

      memo.set(stones, false);
      return false;
    }
    return canWin(n);
  },
};
