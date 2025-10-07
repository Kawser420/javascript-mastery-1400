// Helper for tree-based problems
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Helper for async demos
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const solvers: Record<string, Function> = {
  // problem solver--> 01
  "recursion-factorial": () => {
    const factorial = (n: number): number => {
      if (n < 0) return NaN;
      if (n === 0) {
        return 1; // Base case
      }
      return n * factorial(n - 1); // Recursive step
    };
    return `Factorial of 5 is ${factorial(5)}.`;
  },
  // problem solver--> 02
  "recursion-sum-range": () => {
    const sumRange = (n: number): number => {
      if (n <= 0) {
        return 0; // Base case
      }
      return n + sumRange(n - 1); // Recursive step
    };
    return `Sum of range up to 5 is ${sumRange(5)}.`;
  },
  // problem solver--> 03
  "recursion-power-function": () => {
    const power = (base: number, exp: number): number => {
      if (exp === 0) {
        return 1; // Base case
      }
      return base * power(base, exp - 1); // Recursive step
    };
    return `2 to the power of 5 is ${power(2, 5)}.`;
  },
  // problem solver--> 04
  "recursion-fibonacci-sequence": () => {
    const fibonacci = (n: number): number => {
      if (n <= 1) {
        return n; // Base cases
      }
      return fibonacci(n - 1) + fibonacci(n - 2); // Recursive step
    };
    return `The 7th Fibonacci number is ${fibonacci(7)}.`;
  },
  // problem solver--> 05
  "recursion-array-sum": () => {
    const sumArray = (arr: number[]): number => {
      if (arr.length === 0) {
        return 0; // Base case
      }
      return arr[0] + sumArray(arr.slice(1)); // Recursive step
    };
    const nums = [1, 2, 3, 4, 5];
    return `Sum of [${nums.join(", ")}] is ${sumArray(nums)}.`;
  },
  // problem solver--> 06
  "recursion-string-reversal": () => {
    const reverseString = (str: string): string => {
      if (str === "") {
        return ""; // Base case
      }
      return reverseString(str.substring(1)) + str.charAt(0); // Recursive step
    };
    return `Reversing "hello" gives "${reverseString("hello")}".`;
  },
  // problem solver--> 07
  "recursion-countdown": () => {
    const countdown = (n: number): string => {
      if (n <= 0) {
        return "Done!"; // Base case
      }
      console.log(n);
      return countdown(n - 1); // Recursive step
    };
    countdown(3);
    return "Countdown finished. Check the console.";
  },
  // problem solver--> 08
  "recursion-palindrome-check": () => {
    const isPalindrome = (str: string): boolean => {
      if (str.length <= 1) {
        return true; // Base case
      }
      if (str[0] !== str[str.length - 1]) {
        return false;
      }
      return isPalindrome(str.substring(1, str.length - 1)); // Recursive step
    };
    return `Is "racecar" a palindrome? ${isPalindrome(
      "racecar"
    )}. Is "hello" a palindrome? ${isPalindrome("hello")}.`;
  },
  // problem solver--> 09
  "recursion-greatest-common-divisor": () => {
    const gcd = (a: number, b: number): number => {
      if (b === 0) {
        return a; // Base case
      }
      return gcd(b, a % b); // Recursive step
    };
    return `The GCD of 48 and 18 is ${gcd(48, 18)}.`;
  },
  // problem solver--> 10
  "recursion-count-vowels": () => {
    const countVowels = (str: string): number => {
      if (str.length === 0) return 0;
      const first = "aeiou".includes(str[0].toLowerCase()) ? 1 : 0;
      return first + countVowels(str.slice(1));
    };
    return `The number of vowels in "hello world" is ${countVowels(
      "hello world"
    )}.`;
  },
  // problem solver--> 11
  "recursion-array-product": () => {
    const productOfArray = (arr: number[]): number => {
      if (arr.length === 0) return 1;
      return arr[0] * productOfArray(arr.slice(1));
    };
    const nums = [1, 2, 3, 4];
    return `Product of [${nums.join(", ")}] is ${productOfArray(nums)}.`;
  },
  // problem solver--> 12
  "recursion-find-max-in-array": () => {
    const findMax = (arr: number[]): number => {
      if (arr.length === 1) return arr[0];
      const maxOfRest = findMax(arr.slice(1));
      return arr[0] > maxOfRest ? arr[0] : maxOfRest;
    };
    const nums = [3, 8, 2, 10, 5];
    return `Max of [${nums.join(", ")}] is ${findMax(nums)}.`;
  },
  // problem solver--> 13
  "recursion-is-even-odd": () => {
    const isEven = (n: number): boolean => {
      if (n === 0) return true;
      if (n === 1) return false;
      return isEven(n - 2);
    };
    return `Is 10 even? ${isEven(10)}. Is 7 even? ${isEven(7)}.`;
  },
  // problem solver--> 14
  "recursion-binary-representation": () => {
    const toBinary = (n: number): string => {
      if (n === 0) return "0";
      if (n === 1) return "1";
      return toBinary(Math.floor(n / 2)) + (n % 2).toString();
    };
    return `Binary representation of 25 is ${toBinary(25)}.`;
  },
  // problem solver--> 15
  "recursion-count-occurrences": () => {
    const countChars = (str: string, char: string): number => {
      if (str.length === 0) return 0;
      const first = str[0] === char ? 1 : 0;
      return first + countChars(str.slice(1), char);
    };
    return `Number of 'l's in "hello world" is ${countChars(
      "hello world",
      "l"
    )}.`;
  },
  // problem solver--> 16
  "recursion-sum-of-digits": () => {
    const sumDigits = (n: number): number => {
      if (n < 10) return n;
      return (n % 10) + sumDigits(Math.floor(n / 10));
    };
    return `Sum of digits of 12345 is ${sumDigits(12345)}.`;
  },
  // problem solver--> 17
  "recursion-collatz-conjecture-steps": () => {
    const collatz = (n: number): number => {
      if (n === 1) return 0;
      if (n % 2 === 0) return 1 + collatz(n / 2);
      return 1 + collatz(3 * n + 1);
    };
    return `Steps for 27 to reach 1 is ${collatz(27)}.`;
  },
  // problem solver--> 18
  "recursion-repeat-string": () => {
    const repeatString = (str: string, num: number): string => {
      if (num <= 0) return "";
      return str + repeatString(str, num - 1);
    };
    return `Repeating "abc" 3 times gives "${repeatString("abc", 3)}".`;
  },
  // problem solver--> 19
  "recursion-array-includes": () => {
    const includes = (arr: any[], val: any): boolean => {
      if (arr.length === 0) return false;
      if (arr[0] === val) return true;
      return includes(arr.slice(1), val);
    };
    const arr = [1, 2, 3, 4, 5];
    return `Does [${arr.join(", ")}] include 3? ${includes(
      arr,
      3
    )}. Does it include 6? ${includes(arr, 6)}.`;
  },
  // problem solver--> 20
  "recursion-nested-object-sum": () => {
    const sumNested = (obj: any): number => {
      let sum = 0;
      for (const key in obj) {
        if (typeof obj[key] === "object") {
          sum += sumNested(obj[key]);
        } else if (typeof obj[key] === "number") {
          sum += obj[key];
        }
      }
      return sum;
    };
    const data = { a: 1, b: { c: 2, d: { e: 3 } }, f: 4 };
    return `Sum of nested object is ${sumNested(data)}.`;
  },
  // problem solver--> 21
  "recursion-range-of-numbers": () => {
    const range = (start: number, end: number): number[] => {
      if (start > end) return [];
      if (start === end) return [start];
      return [start, ...range(start + 1, end)];
    };
    return `Range from 2 to 5 is [${range(2, 5).join(", ")}]`;
  },
  // problem solver--> 22
  "recursion-tree-node-count": () => {
    const countNodes = (node: TreeNode | null): number => {
      if (!node) return 0;
      return 1 + countNodes(node.left) + countNodes(node.right);
    };
    const tree = new TreeNode(
      1,
      new TreeNode(2),
      new TreeNode(3, new TreeNode(4))
    );
    return `The sample tree has ${countNodes(tree)} nodes.`;
  },
  // problem solver--> 23
  "recursion-first-char-uppercase": () => {
    const capitalizeFirst = (arr: string[]): string[] => {
      if (arr.length === 0) return [];
      const capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
      return [capitalized, ...capitalizeFirst(arr.slice(1))];
    };
    const words = ["hello", "world"];
    return `Capitalized: [${capitalizeFirst(words).join(", ")}]`;
  },
  // problem solver--> 24
  "recursion-remove-duplicates-string": () => {
    const removeConsecutive = (str: string): string => {
      if (str.length <= 1) return str;
      if (str[0] === str[1]) return removeConsecutive(str.slice(1));
      return str[0] + removeConsecutive(str.slice(1));
    };
    return `Removing consecutive duplicates from "aaabbbccc" gives "${removeConsecutive(
      "aaabbbccc"
    )}"`;
  },
  // problem solver--> 25
  "recursion-sum-squares": () => {
    const sumSquares = (n: number): number => {
      if (n <= 0) return 0;
      return n * n + sumSquares(n - 1);
    };
    return `Sum of squares up to 3 is ${sumSquares(3)}. (1+4+9=14)`;
  },
  // problem solver--> 26
  "recursion-string-length": () => {
    const len = (str: string): number => {
      if (str === "") return 0;
      return 1 + len(str.slice(1));
    };
    return `Recursive length of "hello" is ${len("hello")}.`;
  },
  // problem solver--> 27
  "recursion-tower-of-hanoi-moves": () => {
    const hanoiMoves = (disks: number): number => {
      if (disks === 1) return 1;
      return 2 * hanoiMoves(disks - 1) + 1;
    };
    return `Minimum moves for 3 disks is ${hanoiMoves(3)}.`;
  },
  // problem solver--> 28
  "recursion-count-down-up": () => {
    const downUp = (n: number) => {
      if (n <= 0) return;
      console.log(`Down: ${n}`);
      downUp(n - 1);
      console.log(`Up: ${n}`);
    };
    downUp(3);
    return `Sequence logged to console.`;
  },
  // problem solver--> 29
  "recursion-pascal-triangle-number": () => {
    const pascal = (row: number, col: number): number => {
      if (col === 0 || col === row) return 1;
      return pascal(row - 1, col - 1) + pascal(row - 1, col);
    };
    return `Number at row 4, col 2 of Pascal's triangle is ${pascal(4, 2)}.`;
  },
  // problem solver--> 30
  "recursion-balanced-parentheses-check": () => {
    const isBalanced = (str: string, count = 0): boolean => {
      if (count < 0) return false;
      if (str.length === 0) return count === 0;
      const newCount = str[0] === "(" ? count + 1 : count - 1;
      return isBalanced(str.slice(1), newCount);
    };
    return `Is '(())()' balanced? ${isBalanced(
      "(())()"
    )}. Is '(()' balanced? ${isBalanced("(()")}.`;
  },
  // problem solver--> 31
  "recursion-array-flatten": () => {
    const flatten = (arr: any[]): number[] => {
      let result: number[] = [];
      for (const item of arr) {
        if (Array.isArray(item)) {
          result = result.concat(flatten(item)); // Recursive step
        } else {
          result.push(item); // Base case (for an element)
        }
      }
      return result;
    };
    const nested = [1, [2, 3], [4, [5]]];
    return `[1, [2, 3], [4, [5]]] flattens to [${flatten(nested).join(", ")}]`;
  },
  // problem solver--> 32
  "recursion-binary-search": () => {
    const binarySearch = (
      arr: number[],
      target: number,
      left = 0,
      right = arr.length - 1
    ): number => {
      if (left > right) return -1;
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
      return binarySearch(arr, target, mid + 1, right);
    };
    const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
    return `Index of 23 in sorted array is ${binarySearch(arr, 23)}.`;
  },
  // problem solver--> 33
  "recursion-memoized-fibonacci": () => {
    const fib = (n: number, memo: Record<number, number> = {}): number => {
      if (n in memo) return memo[n];
      if (n <= 1) return n;
      memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
      return memo[n];
    };
    return `The 40th Fibonacci number is ${fib(40)}. (Fast!)`;
  },
  // problem solver--> 34
  "recursion-string-permutations": () => {
    const permutations = (str: string): string[] => {
      if (str.length <= 1) return [str];
      const result: string[] = [];
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const rest = str.slice(0, i) + str.slice(i + 1);
        const permsOfRest = permutations(rest);
        permsOfRest.forEach((p) => result.push(char + p));
      }
      return result;
    };
    return `Permutations of "abc": [${permutations("abc").join(", ")}]`;
  },
  // problem solver--> 35
  "recursion-tree-traversal-inorder": () => {
    const inorder = (
      node: TreeNode | null,
      result: number[] = []
    ): number[] => {
      if (!node) return result;
      inorder(node.left, result);
      result.push(node.val);
      inorder(node.right, result);
      return result;
    };
    const tree = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(5)
    );
    return `In-order traversal: [${inorder(tree).join(", ")}]`;
  },
  // problem solver--> 36
  "recursion-tree-traversal-preorder": () => {
    const preorder = (
      node: TreeNode | null,
      result: number[] = []
    ): number[] => {
      if (!node) return result;
      result.push(node.val);
      preorder(node.left, result);
      preorder(node.right, result);
      return result;
    };
    const tree = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(5)
    );
    return `Pre-order traversal: [${preorder(tree).join(", ")}]`;
  },
  // problem solver--> 37
  "recursion-tree-traversal-postorder": () => {
    const postorder = (
      node: TreeNode | null,
      result: number[] = []
    ): number[] => {
      if (!node) return result;
      postorder(node.left, result);
      postorder(node.right, result);
      result.push(node.val);
      return result;
    };
    const tree = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(5)
    );
    return `Post-order traversal: [${postorder(tree).join(", ")}]`;
  },
  // problem solver--> 38
  "recursion-deep-object-clone": () => {
    const deepClone = (obj: any): any => {
      if (obj === null || typeof obj !== "object") return obj;
      if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
      }
      const clonedObj: any = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          clonedObj[key] = deepClone(obj[key]);
        }
      }
      return clonedObj;
    };
    const original = { a: 1, b: { c: [2, 3] } };
    const clone = deepClone(original);
    original.b.c[0] = 99;
    return `Original and clone are different objects. Clone value: ${JSON.stringify(
      clone
    )}`;
  },
  // problem solver--> 39
  "recursion-subsets-of-a-set": () => {
    const subsets = (arr: any[]): any[][] => {
      if (arr.length === 0) return [[]];
      const first = arr[0];
      const rest = arr.slice(1);
      const subsetsOfRest = subsets(rest);
      const withFirst = subsetsOfRest.map((sub) => [first, ...sub]);
      return [...subsetsOfRest, ...withFirst];
    };
    return `Subsets of [1, 2]: ${JSON.stringify(subsets([1, 2]))}`;
  },
  // problem solver--> 40
  "recursion-merge-sort-conceptual": () => {
    const merge = (left: number[], right: number[]): number[] => {
      let result = [],
        i = 0,
        j = 0;
      while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
      }
      return result.concat(left.slice(i)).concat(right.slice(j));
    };
    const mergeSort = (arr: number[]): number[] => {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
      return merge(left, right);
    };
    const arr = [8, 3, 5, 4, 7, 6, 1, 2];
    return `Sorted array: [${mergeSort(arr).join(", ")}]`;
  },
  // problem solver--> 41
  "recursion-tree-depth": () => {
    const maxDepth = (node: TreeNode | null): number => {
      if (!node) return 0;
      return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
    };
    const tree = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );
    return `Max depth of the tree is ${maxDepth(tree)}.`;
  },
  // problem solver--> 42
  "recursion-pathfinding-grid": () => {
    const countPaths = (m: number, n: number): number => {
      if (m === 1 || n === 1) return 1;
      return countPaths(m - 1, n) + countPaths(m, n - 1);
    };
    return `Paths in a 3x3 grid: ${countPaths(3, 3)}.`;
  },
  // problem solver--> 43
  "recursion-balanced-brackets": () => {
    // This is better solved iteratively with a stack, but a recursive approach can be demonstrated.
    return `This is best solved iteratively. A recursive solution would be complex and inefficient, involving reducing the string by removing adjacent pairs, which is not robust for all cases. The iterative stack-based approach is standard.`;
  },
  // problem solver--> 44
  "recursion-collect-strings-from-object": () => {
    const collectStrings = (obj: any): string[] => {
      let strings: string[] = [];
      for (const key in obj) {
        if (typeof obj[key] === "string") {
          strings.push(obj[key]);
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          strings = strings.concat(collectStrings(obj[key]));
        }
      }
      return strings;
    };
    const data = { a: "hello", b: { c: "world", d: 1 }, e: ["test"] };
    return `Collected strings: [${collectStrings(data).join(", ")}]`;
  },
  // problem solver--> 45
  "recursion-all-combinations-of-length-k": () => {
    const combinations = (arr: any[], k: number): any[][] => {
      if (k === 0) return [[]];
      if (arr.length < k) return [];
      const first = arr[0];
      const rest = arr.slice(1);
      const combsWithoutFirst = combinations(rest, k);
      const combsWithFirst = combinations(rest, k - 1).map((c) => [
        first,
        ...c,
      ]);
      return [...combsWithoutFirst, ...combsWithFirst];
    };
    return `Combinations of length 2 from [1,2,3]: ${JSON.stringify(
      combinations([1, 2, 3], 2)
    )}`;
  },
  // problem solver--> 46
  "recursion-digital-root": () => {
    const digitalRoot = (n: number): number => {
      if (n < 10) return n;
      const sum = String(n)
        .split("")
        .reduce((acc, digit) => acc + Number(digit), 0);
      return digitalRoot(sum);
    };
    return `Digital root of 942 is ${digitalRoot(942)}.`;
  },
  // problem solver--> 47
  "recursion-valid-bst-check": () => {
    const isValidBST = (
      node: TreeNode | null,
      min = -Infinity,
      max = Infinity
    ): boolean => {
      if (!node) return true;
      if (node.val <= min || node.val >= max) return false;
      return (
        isValidBST(node.left, min, node.val) &&
        isValidBST(node.right, node.val, max)
      );
    };
    const valid = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const invalid = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    return `Is first tree valid? ${isValidBST(
      valid
    )}. Is second tree valid? ${isValidBST(invalid)}.`;
  },
  // problem solver--> 48
  "recursion-tree-leaf-sum": () => {
    const sumLeaves = (node: TreeNode | null): number => {
      if (!node) return 0;
      if (!node.left && !node.right) return node.val;
      return sumLeaves(node.left) + sumLeaves(node.right);
    };
    const tree = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );
    return `Sum of leaf nodes is ${sumLeaves(tree)}. (9+15+7=31)`;
  },
  // problem solver--> 49
  "recursion-find-path-in-tree": () => {
    const findPath = (
      node: TreeNode | null,
      target: number
    ): number[] | null => {
      if (!node) return null;
      if (node.val === target) return [node.val];
      const leftPath = findPath(node.left, target);
      if (leftPath) return [node.val, ...leftPath];
      const rightPath = findPath(node.right, target);
      if (rightPath) return [node.val, ...rightPath];
      return null;
    };
    const tree = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4)),
      new TreeNode(3)
    );
    return `Path to 4 is [${findPath(tree, 4)?.join(" -> ")}]`;
  },
  // problem solver--> 50
  "recursion-graph-dfs": () => {
    const dfs = (
      graph: Record<string, string[]>,
      start: string,
      visited = new Set<string>()
    ): string[] => {
      visited.add(start);
      for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
          dfs(graph, neighbor, visited);
        }
      }
      return Array.from(visited);
    };
    const graph = { A: ["B", "C"], B: ["D"], C: [], D: [] };
    return `DFS traversal from A: [${dfs(graph, "A").join(", ")}]`;
  },
  // problem solver--> 51
  "recursion-integer-to-roman": () => {
    const intToRoman = (num: number): string => {
      const map = [
        { val: 1000, sym: "M" },
        { val: 900, sym: "CM" },
        { val: 500, sym: "D" },
        { val: 400, sym: "CD" },
        { val: 100, sym: "C" },
        { val: 90, sym: "XC" },
        { val: 50, sym: "L" },
        { val: 40, sym: "XL" },
        { val: 10, sym: "X" },
        { val: 9, sym: "IX" },
        { val: 5, sym: "V" },
        { val: 4, sym: "IV" },
        { val: 1, sym: "I" },
      ];
      for (const item of map) {
        if (num >= item.val) {
          return item.sym + intToRoman(num - item.val);
        }
      }
      return "";
    };
    return `58 in Roman is ${intToRoman(58)}.`;
  },
  // problem solver--> 52
  "recursion-flatten-object": () => {
    const flattenObject = (obj: any, prefix = ""): any => {
      return Object.keys(obj).reduce((acc: any, k) => {
        const pre = prefix.length ? prefix + "." : "";
        if (
          typeof obj[k] === "object" &&
          obj[k] !== null &&
          !Array.isArray(obj[k])
        ) {
          Object.assign(acc, flattenObject(obj[k], pre + k));
        } else {
          acc[pre + k] = obj[k];
        }
        return acc;
      }, {});
    };
    const nested = { a: { b: 1, c: { d: 2 } }, e: 3 };
    return `Flattened object: ${JSON.stringify(flattenObject(nested))}`;
  },
  // problem solver--> 53
  "recursion-step-combinations": () => {
    const climbStairs = (
      n: number,
      memo: Record<number, number> = {}
    ): number => {
      if (n < 0) return 0;
      if (n === 0) return 1;
      if (memo[n]) return memo[n];
      memo[n] =
        climbStairs(n - 1, memo) +
        climbStairs(n - 2, memo) +
        climbStairs(n - 3, memo);
      return memo[n];
    };
    return `Ways to climb 4 steps: ${climbStairs(4)}.`;
  },
  // problem solver--> 54
  "recursion-is-tree-symmetric": () => {
    const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
      if (!t1 && !t2) return true;
      if (!t1 || !t2 || t1.val !== t2.val) return false;
      return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    };
    const isSymmetric = (root: TreeNode | null): boolean => {
      return isMirror(root, root);
    };
    const symmetricTree = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    );
    return `Is the tree symmetric? ${isSymmetric(symmetricTree)}`;
  },
  // problem solver--> 55
  "recursion-lowest-common-ancestor-bst": () => {
    const lca = (
      root: TreeNode | null,
      p: TreeNode,
      q: TreeNode
    ): TreeNode | null => {
      if (!root) return null;
      if (root.val > p.val && root.val > q.val) return lca(root.left, p, q);
      if (root.val < p.val && root.val < q.val) return lca(root.right, p, q);
      return root;
    };
    const root = new TreeNode(6, new TreeNode(2), new TreeNode(8));
    return `LCA of 2 and 8 is ${
      lca(root, new TreeNode(2), new TreeNode(8))?.val
    }`;
  },
  // problem solver--> 56
  "recursion-quick-sort-conceptual": () => {
    const quickSort = (arr: number[]): number[] => {
      if (arr.length <= 1) return arr;
      const pivot = arr[arr.length - 1];
      const left = [],
        right = [];
      for (let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
      }
      return [...quickSort(left), pivot, ...quickSort(right)];
    };
    const arr = [8, 3, 5, 4, 7, 6, 1, 2];
    return `Sorted array: [${quickSort(arr).join(", ")}]`;
  },
  // problem solver--> 57
  "recursion-generate-parentheses": () => {
    const generate = (n: number): string[] => {
      const result: string[] = [];
      const backtrack = (str: string, open: number, close: number) => {
        if (str.length === n * 2) {
          result.push(str);
          return;
        }
        if (open < n) backtrack(str + "(", open + 1, close);
        if (close < open) backtrack(str + ")", open, close + 1);
      };
      backtrack("", 0, 0);
      return result;
    };
    return `Generated parentheses for n=2: [${generate(2).join(", ")}]`;
  },
  // problem solver--> 58
  "recursion-telephone-letter-combinations": () => {
    const letterCombinations = (digits: string): string[] => {
      if (!digits) return [];
      const map: Record<string, string> = {
        "2": "abc",
        "3": "def",
        "4": "ghi" /* etc */,
      };
      const result: string[] = [];
      const backtrack = (index: number, path: string) => {
        if (index === digits.length) {
          result.push(path);
          return;
        }
        const letters = map[digits[index]];
        for (const char of letters) {
          backtrack(index + 1, path + char);
        }
      };
      backtrack(0, "");
      return result;
    };
    return `Combinations for "23": [${letterCombinations("23").join(", ")}]`;
  },
  // problem solver--> 59
  "recursion-tree-to-linked-list": () => {
    // This problem requires in-place modification and is complex to show in a single return.
    return `This function modifies the tree in-place. A recursive solution would process the right subtree, then the left, and link them, making the current node the new head. It's a classic advanced recursion problem.`;
  },
  // problem solver--> 60
  "recursion-word-break": () => {
    const wordBreak = (
      s: string,
      wordDict: string[],
      memo: Record<string, boolean> = {}
    ): boolean => {
      if (s in memo) return memo[s];
      if (s === "") return true;
      for (let word of wordDict) {
        if (s.startsWith(word)) {
          if (wordBreak(s.slice(word.length), wordDict, memo)) {
            memo[s] = true;
            return true;
          }
        }
      }
      memo[s] = false;
      return false;
    };
    const dict = ["apple", "pen"];
    return `Can "applepenapple" be broken? ${wordBreak("applepenapple", dict)}`;
  },
  // problem solver--> 61
  "recursion-n-queens-problem": () => {
    const solveNQueens = (n: number): number => {
      let count = 0;
      const solve = (
        row: number,
        cols: Set<number>,
        diag1: Set<number>,
        diag2: Set<number>
      ) => {
        if (row === n) {
          count++;
          return;
        }
        for (let col = 0; col < n; col++) {
          if (cols.has(col) || diag1.has(row + col) || diag2.has(row - col))
            continue;
          cols.add(col);
          diag1.add(row + col);
          diag2.add(row - col);
          solve(row + 1, cols, diag1, diag2);
          cols.delete(col);
          diag1.delete(row + col);
          diag2.delete(row - col); // Backtrack
        }
      };
      solve(0, new Set(), new Set(), new Set());
      return count;
    };
    return `Number of solutions for N=4 is ${solveNQueens(4)}.`;
  },
  // problem solver--> 62
  "recursion-sudoku-solver": () => {
    return `A Sudoku solver is a prime example of backtracking. The recursive function would try placing numbers 1-9 in an empty cell. For each valid number, it recurses to the next cell. If the recursion leads to a dead end, it backtracks, erasing the number and trying the next one.`;
  },
  // problem solver--> 63
  "recursion-longest-common-subsequence": () => {
    const lcs = (
      s1: string,
      s2: string,
      m = s1.length,
      n = s2.length,
      memo = {}
    ): number => {
      const key = `${m},${n}`;
      if (key in memo) return memo[key];
      if (m === 0 || n === 0) return 0;
      if (s1[m - 1] === s2[n - 1]) {
        return (memo[key] = 1 + lcs(s1, s2, m - 1, n - 1, memo));
      }
      return (memo[key] = Math.max(
        lcs(s1, s2, m - 1, n, memo),
        lcs(s1, s2, m, n - 1, memo)
      ));
    };
    return `LCS length for "AGGTAB" and "GXTXAYB" is ${lcs(
      "AGGTAB",
      "GXTXAYB"
    )}.`;
  },
  // problem solver--> 64
  "recursion-knapsack-problem": () => {
    return `The recursive solution explores two choices for each item: either include it in the knapsack or not. The function would be \`knapsack(W, wt, val, n)\`. The base case is when n=0 or W=0. The recursive step is the max of including the nth item vs. not including it.`;
  },
  // problem solver--> 65
  "recursion-word-search-grid": () => {
    return `This is another backtracking problem. The main function iterates through each cell of the grid. If a cell matches the first letter of the word, a recursive helper (DFS) is called. The DFS explores adjacent cells, marking visited cells to avoid reuse, and backtracks if a path fails.`;
  },
  // problem solver--> 66
  "recursion-expression-evaluation": () => {
    return `A recursive descent parser uses a set of mutually recursive functions to process a grammar. For example, a function 'parseExpression' might call 'parseTerm', which in turn calls 'parseFactor'. This structure naturally handles operator precedence and nested parentheses.`;
  },
  // problem solver--> 67
  "recursion-tail-call-optimization-concept": () => {
    const factorialTail = (n: number, accumulator = 1): number => {
      if (n === 0) return accumulator;
      return factorialTail(n - 1, n * accumulator); // Tail call
    };
    return `Tail-recursive factorial of 5 is ${factorialTail(
      5
    )}. The recursive call is the very last operation.`;
  },
  // problem solver--> 68
  "recursion-rat-in-a-maze": () => {
    return `The solution uses backtracking. A recursive helper function explores paths (down and right). It marks visited cells in a solution matrix. If it hits a dead end (a wall or already visited), it backtracks by unmarking the cell and returns false.`;
  },
  // problem solver--> 69
  "recursion-edit-distance": () => {
    return `The recursive function \`editDistance(str1, str2, m, n)\` considers three operations on the last characters: Insert, Delete, and Replace. It recursively calls itself for each of these three possibilities and returns the minimum, plus one. Memoization is key for performance.`;
  },
  //   // problem solver--> 70
  //   'recursion-regular-expression-matching': () => {
  //     return `A recursive function \`isMatch(text, pattern)\` handles this. The base case is an empty pattern. The recursive step handles the `*` by trying to match zero or more characters, and the `.` by matching any single character. This is a complex backtracking problem.`;
  //   },
  //   // problem solver--> 71
  //   'recursion-optimal-bst': () => {
  //     return `A recursive function would calculate the cost for all possible roots in a given range of keys (i to j). It recursively finds the optimal cost for the left subtree (i to root-1) and right subtree (root+1 to j) and sums them up, choosing the root that gives the minimum total cost.`;
  //   },
  //   // problem solver--> 72
  //   'recursion-sierpinski-triangle': () => {
  //     return `A recursive function `drawTriangle(points, depth)` would be used. The base case is `depth === 0`. The recursive step calculates the midpoints of the current triangle's sides and makes three recursive calls for the three new corner triangles, each with `depth - 1`.`;
  //   },
  //   // problem solver--> 73
  //   'recursion-find-all-paths-in-graph': () => {
  //     return `This is solved with a backtracking/DFS approach. A recursive function `findPaths(current, target, path)` explores neighbors. It adds the current node to the path. If it reaches the target, it adds a copy of the path to the results. It then backtracks by removing the current node from the path to explore other branches.`;
  //   },
  // problem solver--> 74
  "recursion-mutual-recursion": () => {
    // These need to be defined where they can see each other.
    const isOdd = (n: number): boolean => {
      if (n === 0) return false;
      return isEven(n - 1);
    };
    const isEven = (n: number): boolean => {
      if (n === 0) return true;
      return isOdd(n - 1);
    };
    return `Is 5 odd? ${isOdd(5)}. Is 6 even? ${isEven(6)}.`;
  },
  // problem solver--> 75
  "recursion-matrix-chain-multiplication": () => {
    return `The recursive solution finds the minimum cost by trying every possible split point 'k' for a chain of matrices from i to j. The cost for a split is the cost of the left subproblem (i to k), the cost of the right subproblem (k+1 to j), and the cost of multiplying the two resulting matrices.`;
  },
  // problem solver--> 76
  "recursion-y-combinator-concept": () => {
    const U = (f: Function) => f(f);
    const factorialMaker =
      (f: Function) =>
      (n: number): number =>
        n === 0 ? 1 : n * U(f)(n - 1);
    const factorial = U(factorialMaker);
    return `Anonymous recursive factorial of 5 is ${factorial(5)}.`;
  },
  // problem solver--> 77
  //   'recursion-flood-fill': () => {
  //     return `A recursive function `fill(screen, x, y, newColor)` is called. It first checks boundaries and if the current cell is already the new color. It then changes the current cell's color and makes four recursive calls for the adjacent cells (up, down, left, right).`;
  //   },
  // problem solver--> 78
  "recursion-trie-implementation": () => {
    return `A Trie is a tree-like structure. The 'insert' method would have a recursive helper that traverses the trie. If a character's node doesn't exist, it creates one. The 'search' method would also have a recursive helper that returns false if a character's node is missing at any point.`;
  },
  // problem solver--> 79
  "recursion-boggle-solver": () => {
    return `This combines a Trie for efficient dictionary lookups with a recursive DFS/backtracking search on the grid. The recursive function explores all 8 neighbors of a cell, building a prefix. If the prefix exists in the Trie, it continues. If it's a valid word, it's added to the results. Visited cells are marked to prevent reuse in the same word.`;
  },
  // problem solver--> 80
  "recursion-json-parser": () => {
    return `This is a classic recursive descent parser. You'd have functions like 'parseValue', 'parseObject', 'parseArray'. 'parseValue' would look at the current token to decide whether to call 'parseObject', 'parseArray', etc. 'parseObject' would recursively call 'parseValue' for each value in its key-value pairs.`;
  },
  // Fallback for problems 81-200
  ...Object.fromEntries(
    Array.from({ length: 120 }, (_, i) => i + 81).map((i) => [
      `recursion-placeholder-${i}`,
      () =>
        `This is a placeholder solver for problem #${i}. A real-world solution would implement the described algorithm. This requires dedicated, specific logic.`,
    ])
  ),
};
