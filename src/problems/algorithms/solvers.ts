const parseNumber = (input: any): number => {
  const num = Number(input);
  if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
  return num;
};
const parseNumArray = (input: string): number[] => {
  if (!input || typeof input !== "string" || input.trim() === "") return [];
  return input.split(",").map((item) => parseNumber(item.trim()));
};
const parseStrArray = (input: string): string[] => {
  if (!input || typeof input !== "string" || input.trim() === "") return [];
  return input.split(",").map((item) => item.trim());
};
const parseJson = (input: string): any => {
  try {
    if (/^(\[.*\])$/.test(input.trim())) {
      return new Function(`return ${input}`)();
    }
    throw new Error();
  } catch (e) {
    throw new Error(
      "Invalid JSON/Array format. Ensure string values are in quotes."
    );
  }
};

export const solvers: Record<string, Function> = {
  "two-sum": ({ arr, target }: { arr: string; target: any }) => {
    const nums = parseNumArray(arr);
    const t = parseNumber(target);
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
      const complement = t - nums[i];
      if (map.has(complement)) {
        return `[${map.get(complement)}, ${i}]`;
      }
      map.set(nums[i], i);
    }
    return "No two sum solution";
  },
  "linear-search": ({ arr, target }: { arr: string; target: any }) => {
    const nums = parseNumArray(arr);
    const t = parseNumber(target);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === t) return `Found at index: ${i}`;
    }
    return "Target not found";
  },
  "binary-search": ({ arr, target }: { arr: string; target: any }) => {
    const nums = parseNumArray(arr);
    const t = parseNumber(target);
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === t) return `Found at index: ${mid}`;
      if (nums[mid] < t) left = mid + 1;
      else right = mid - 1;
    }
    return "Target not found";
  },
  "bubble-sort": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1]) {
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        }
      }
    }
    return `[${nums.join(", ")}]`;
  },
  "selection-sort": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    for (let i = 0; i < nums.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
      }
    }
    return `[${nums.join(", ")}]`;
  },
  "insertion-sort": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    for (let i = 1; i < nums.length; i++) {
      let current = nums[i];
      let j = i - 1;
      while (j >= 0 && nums[j] > current) {
        nums[j + 1] = nums[j];
        j--;
      }
      nums[j + 1] = current;
    }
    return `[${nums.join(", ")}]`;
  },
  fizzbuzz: ({ num }: { num: any }) => {
    const n = parseNumber(num);
    let result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) result.push("FizzBuzz");
      else if (i % 3 === 0) result.push("Fizz");
      else if (i % 5 === 0) result.push("Buzz");
      else result.push(i);
    }
    return result.join(", ");
  },
  "merge-sort-conceptual": () =>
    `(Conceptual) A recursive function splits the array in half until it has arrays of length 1. Then, a helper function merges the sorted halves back together, creating a fully sorted array.`,
  "quick-sort-conceptual": () =>
    `(Conceptual) A pivot element is chosen. The array is partitioned into two subarrays: elements less than the pivot and elements greater. The algorithm recursively sorts the two subarrays.`,
  "kadanes-algorithm": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length === 0) return 0;
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    for (let i = 1; i < nums.length; i++) {
      maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
  },
  "greedy-coin-change": ({ amount }: { amount: any }) => {
    const denominations = [25, 10, 5, 1];
    let remaining = parseNumber(amount);
    const change: Record<string, number> = {};
    for (const coin of denominations) {
      const count = Math.floor(remaining / coin);
      if (count > 0) {
        change[coin] = count;
        remaining %= coin;
      }
    }
    return JSON.stringify(change);
  },
  "is-prime": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  },
  "sieve-of-eratosthenes": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) isPrime[j] = false;
      }
    }
    const primes = isPrime.reduce(
      (acc, prime, index) => (prime ? [...acc, index] : acc),
      [] as number[]
    );
    return `[${primes.join(", ")}]`;
  },
  "fibonacci-iterative": ({ num }: { num: any }) => {
    const n = parseNumber(num);
    if (n <= 1) return n;
    let a = 0,
      b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  },
  "climbing-stairs": ({ steps }: { steps: any }) => {
    const n = parseNumber(steps);
    if (n <= 2) return n;
    let oneStepBack = 2;
    let twoStepsBack = 1;
    let allWays = 0;
    for (let i = 3; i <= n; i++) {
      allWays = oneStepBack + twoStepsBack;
      twoStepsBack = oneStepBack;
      oneStepBack = allWays;
    }
    return allWays;
  },
  "best-time-to-buy-sell-stock-algo": ({ prices }: { prices: string }) => {
    const priceList = parseNumArray(prices);
    let minPrice = Infinity;
    let maxProfit = 0;
    for (const price of priceList) {
      minPrice = Math.min(minPrice, price);
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
  },
  "euclidean-algorithm-gcd": ({ a, b }: { a: any; b: any }) => {
    let numA = parseNumber(a);
    let numB = parseNumber(b);
    while (numB) {
      [numA, numB] = [numB, numA % numB];
    }
    return numA;
  },
  "knapsack-problem-conceptual": () =>
    `(Conceptual) Solved with Dynamic Programming. Create a 2D DP table where dp[i][w] is the max value using first 'i' items with capacity 'w'. The value is either the value without item 'i' (dp[i-1][w]) or the value with item 'i' (value[i] + dp[i-1][w - weight[i]]).`,
  "longest-common-subsequence-conceptual": () =>
    `(Conceptual) DP solution. A 2D table dp[i][j] stores the LCS length of str1 up to i and str2 up to j. If chars match, dp[i][j] = 1 + dp[i-1][j-1]. If not, it's max(dp[i-1][j], dp[i][j-1]).`,
  "edit-distance-conceptual": () =>
    `(Conceptual) DP solution. A 2D table dp[i][j] stores the distance between str1 up to i and str2 up to j. If chars match, it's dp[i-1][j-1]. If not, it's 1 + min(insert, delete, replace), which correspond to the 3 adjacent cells in the DP table.`,
  "tower-of-hanoi-algo-conceptual": () =>
    `(Conceptual) A classic recursive problem. To move N disks from A to C: 1. Recursively move N-1 disks from A to B. 2. Move the Nth disk from A to C. 3. Recursively move N-1 disks from B to C.`,
  "backtracking-permutations-conceptual": () =>
    `(Conceptual) A recursive function explores all paths. It iterates through numbers, and for each unused number, it adds it to the current permutation, recursively calls itself, and then "backtracks" by removing the number to try other paths.`,
  "graph-dfs-algo-conceptual": () =>
    `(Conceptual) Use a stack (or recursion). Start at a node, push to stack. While stack is not empty, pop a node, visit it, and push its unvisited neighbors to the stack. Use a 'visited' set to avoid cycles.`,
  "graph-bfs-algo-conceptual": () =>
    `(Conceptual) Use a queue. Start at a node, add to queue. While queue is not empty, dequeue a node, visit it, and add its unvisited neighbors to the queue. Use a 'visited' set.`,
  "dijkstra-algorithm-conceptual": () =>
    `(Conceptual) Finds the shortest path in a weighted graph. Uses a Priority Queue to always visit the nearest unvisited node. Maintains a distance map. For each visited node, it checks its neighbors and updates their distances if a shorter path is found.`,
  "counting-sort-conceptual": () =>
    `(Conceptual) A non-comparison sort. 1. Create a count array to store the frequency of each number. 2. Modify the count array to store the sum of previous counts (cumulative frequency). 3. Build the output array by placing elements at their correct positions based on the cumulative count array.`,
  "radix-sort-conceptual": () =>
    `(Conceptual) A non-comparison sort for integers. It sorts numbers digit by digit, starting from the least significant digit to the most significant, using a stable sorting algorithm (like counting sort) for each pass.`,
  "heap-sort-conceptual": () =>
    `(Conceptual) 1. Build a Max Heap from the input array (heapify). 2. The largest element is at the root. Swap it with the last element of the heap and reduce heap size by one. 3. "Sink down" the new root to maintain the heap property. 4. Repeat step 2 until the heap is empty.`,
  "sliding-window-maximum-conceptual": () =>
    `(Conceptual) An efficient O(n) solution uses a deque. The deque stores indices of elements in the current window, maintained in decreasing order of value. The max of the window is always at the front of the deque.`,
  "kmp-algorithm-conceptual": () =>
    `(Conceptual) An efficient string search. It preprocesses the pattern to create a "Longest Proper Prefix which is also Suffix" (LPS) array. This array is used to skip redundant comparisons in the text after a mismatch occurs.`,
  "rabin-karp-algorithm-conceptual": () =>
    `(Conceptual) A string search algorithm that uses hashing. It calculates the hash of the pattern, then calculates the hash of each substring of the text of the same length. If hashes match, it does a full character comparison to confirm.`,
  "big-o-notation-algo": () =>
    `(Conceptual) A way to describe an algorithm's performance as its input size grows. O(1) is constant time, O(n) is linear, O(log n) is logarithmic, O(n^2) is quadratic. It focuses on the worst-case scenario.`,
  "count-set-bits": ({ num }: { num: any }) => {
    let n = parseNumber(num);
    let count = 0;
    while (n > 0) {
      n &= n - 1;
      count++;
    }
    return count;
  },
  "single-number": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return nums.reduce((acc, num) => acc ^ num, 0);
  },
  "pascals-triangle": ({ rows }: { rows: any }) => {
    const n = parseNumber(rows);
    if (n === 0) return "[]";
    const triangle = [[1]];
    for (let i = 1; i < n; i++) {
      const prevRow = triangle[i - 1];
      const newRow = [1];
      for (let j = 1; j < i; j++) {
        newRow.push(prevRow[j - 1] + prevRow[j]);
      }
      newRow.push(1);
      triangle.push(newRow);
    }
    return JSON.stringify(triangle);
  },
  "dutch-national-flag-problem": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let low = 0,
      mid = 0,
      high = nums.length - 1;
    while (mid <= high) {
      if (nums[mid] === 0) {
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        mid++;
      } else {
        [nums[mid], nums[high]] = [nums[high], nums[mid]];
        high--;
      }
    }
    return `[${nums.join(", ")}]`;
  },
  "divide-and-conquer-conceptual": () =>
    `(Conceptual) A three-step paradigm: 1. Divide: Break the problem into smaller, independent subproblems. 2. Conquer: Solve the subproblems recursively. 3. Combine: Combine the solutions to the subproblems to solve the original problem. (e.g., Merge Sort).`,
  "dynamic-programming-conceptual": () =>
    `(Conceptual) An optimization technique for recursive problems with overlapping subproblems. Solved by storing the results of subproblems (memoization) to avoid re-computation. Bottom-up DP builds a table of solutions from the smallest subproblem up.`,
  "greedy-algorithms-conceptual": () =>
    `(Conceptual) A paradigm that builds a solution step-by-step by always making the locally optimal choice at each stage. It doesn't always find the global optimum but works for specific problems (e.g., making change with standard coin denominations).`,
  "backtracking-conceptual": () =>
    `(Conceptual) A recursive technique for solving problems by trying to build a solution incrementally. If a path is determined to be invalid, the algorithm "backtracks" to the previous state and tries a different path. (e.g., Sudoku, N-Queens).`,
  "a-star-search-conceptual": () =>
    `(Conceptual) A pathfinding algorithm used in graphs. It is an informed search algorithm as it uses a heuristic function (an estimate of the distance to the goal) to guide its search, making it more efficient than Dijkstra's for many pathfinding problems.`,
  "bellman-ford-conceptual": () =>
    `(Conceptual) A single-source shortest path algorithm that works with negative edge weights. It repeatedly relaxes all edges V-1 times. A final pass is used to detect negative weight cycles.`,
  "floyd-warshall-conceptual": () =>
    `(Conceptual) An all-pairs shortest path algorithm. It uses a DP approach to iteratively consider all possible intermediate vertices for every pair of source and destination vertices.`,
  "randomized-algorithms-conceptual": () =>
    `(Conceptual) An algorithm that employs a degree of randomness as part of its logic. A common example is choosing a random pivot in Quick Sort to help avoid the worst-case performance on already sorted data.`,
  "boyer-moore-voting-algorithm": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let candidate = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
      if (count === 0) {
        candidate = nums[i];
      }
      count += nums[i] === candidate ? 1 : -1;
    }
    return candidate;
  },
  "tries-conceptual": () =>
    `(Conceptual) A tree-like data structure where each node represents a character. Paths from the root spell out prefixes. It's highly efficient for autocomplete and dictionary searches.`,
  "k-closest-points": ({ points, k }: { points: string; k: any }) => {
    const pts = parseJson(points);
    const numK = parseNumber(k);
    return JSON.stringify(
      pts
        .sort(
          (a: number[], b: number[]) =>
            a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2)
        )
        .slice(0, numK)
    );
  },
  "top-k-frequent-elements": ({ arr, k }: { arr: string; k: any }) => {
    const nums = parseNumArray(arr);
    const numK = parseNumber(k);
    const map = new Map<number, number>();
    nums.forEach((n) => map.set(n, (map.get(n) || 0) + 1));
    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
    return `[${sorted
      .slice(0, numK)
      .map((entry) => entry[0])
      .join(", ")}]`;
  },
  "lru-cache-algo-conceptual": () =>
    `(Conceptual) Use a Hash Map for O(1) lookup and a Doubly Linked List for O(1) removal/addition of nodes. The map stores keys and pointers to the list nodes. When an item is accessed (get/put), move its node to the front of the list. If the cache is full, remove the node at the end of the list.`,
  "min-stack-conceptual": () =>
    `(Conceptual) Use two stacks. The main stack works as normal. The second stack (the 'min' stack) stores the minimum value seen so far. When pushing, if the new value is <= the top of the min stack, push it to the min stack. When popping, if the popped value is the top of the min stack, pop from the min stack as well.`,
  "huffman-coding-conceptual": () =>
    `(Conceptual) A greedy algorithm for data compression. 1. Calculate character frequencies. 2. Create a leaf node for each character and add it to a priority queue. 3. While the queue has > 1 node, extract the two nodes with the lowest frequency, create a new internal node with them as children, and insert it back into the queue. The result is a prefix tree used for encoding.`,
  "water-jug-problem-conceptual": () =>
    `(Conceptual) Model the problem as a state-space graph. Each state is the amount of water in the jugs. Edges represent valid operations (fill, empty, pour). Use BFS to find the shortest path from the start state (0,0) to a state where one jug has the target amount.`,
  "manachers-algorithm-conceptual": () =>
    `(Conceptual) An advanced O(n) algorithm for the longest palindromic substring problem. It transforms the string to handle even-length palindromes easily and uses an auxiliary array to store the radius of the palindrome centered at each position, cleverly reusing previous calculations to avoid redundant checks.`,
  "union-find-conceptual": () =>
    `(Conceptual) A data structure (DSU) for tracking disjoint sets. Has two main operations: \`find\` (returns the representative of a set) and \`union\` (merges two sets). Optimized with path compression and union by rank/size. Used in Kruskal's algorithm to detect cycles.`,
  "ford-fulkerson-conceptual": () =>
    `(Conceptual) An algorithm to find the maximum flow in a flow network. It repeatedly finds an "augmenting path" (a path from source to sink with available capacity) in the residual graph and adds its flow to the total. This is often done using BFS to find the path.`,
  "reservoir-sampling-conceptual": () =>
    `(Conceptual) An algorithm for selecting k items from a list of unknown size. 1. Store the first k items in a "reservoir" array. 2. For each subsequent item i, generate a random number j between 0 and i. 3. If j is less than k, replace the item at reservoir[j] with the current item i.`,
  "b-tree-algo-conceptual": () =>
    `(Conceptual) Search is similar to a BST. Insertion adds to a leaf. If the leaf overflows, it's split, and the median key is promoted to the parent. Deletion may cause a node to underflow, requiring a merge with a sibling or borrowing a key from it.`,
  "aho-corasick-conceptual": () =>
    `(Conceptual) A string search algorithm that finds all occurrences of a set of keywords. It builds a Trie of the keywords and then adds "failure links." These links are used after a mismatch to jump to another node in the Trie that shares the longest possible prefix, avoiding backtracking in the text.`,
  "fft-conceptual": () =>
    `(Conceptual) Fast Fourier Transform is a divide-and-conquer algorithm to compute the Discrete Fourier Transform. It recursively breaks down a transform of size N into smaller transforms, using the properties of complex roots of unity. It's a cornerstone of digital signal processing.`,
  "miller-rabin-primality-conceptual": () =>
    `(Conceptual) A probabilistic primality test. It checks if a number is 'composite' based on properties that all prime numbers satisfy. If the number fails the test, it's definitely composite. If it passes, it is 'probably' prime with a very high probability.`,
  "longest-increasing-subsequence": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    if (nums.length === 0) return 0;
    const dp = Array(nums.length).fill(1);
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
      max = Math.max(max, dp[i]);
    }
    return max;
  },
  "coin-change": ({ coins: c, amount: a }: { coins: string; amount: any }) => {
    const coinTypes = parseNumArray(c);
    const totalAmount = parseNumber(a);
    const dp = Array(totalAmount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= totalAmount; i++) {
      for (const coin of coinTypes) {
        if (i - coin >= 0) {
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
      }
    }
    const result = dp[totalAmount];
    return result === Infinity ? -1 : result;
  },
  "word-break-algo": ({ s, wordDict }: { s: string; wordDict: string }) => {
    const words = new Set(parseStrArray(wordDict));
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
        if (dp[j] && words.has(s.substring(j, i))) {
          dp[i] = true;
          break;
        }
      }
    }
    return dp[s.length];
  },
  "rotate-array": ({ arr, k }: { arr: string; k: any }) => {
    const nums = parseNumArray(arr);
    const steps = parseNumber(k) % nums.length;
    if (steps === 0) return `[${nums.join(", ")}]`;
    const reverse = (a: number[], start: number, end: number) => {
      while (start < end) {
        [a[start], a[end]] = [a[end], a[start]];
        start++;
        end--;
      }
    };
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, steps - 1);
    reverse(nums, steps, nums.length - 1);
    return `[${nums.join(", ")}]`;
  },
  "find-the-duplicate-number-algo": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    let slow = nums[0];
    let fast = nums[0];
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow !== fast);
    slow = nums[0];
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
    return slow;
  },
  "kth-largest-element-in-array": ({ arr, k }: { arr: string; k: any }) => {
    const nums = parseNumArray(arr);
    const numK = parseNumber(k);
    nums.sort((a, b) => b - a);
    return nums[numK - 1];
  },
  "valid-sudoku": ({ board }: { board: string }) => {
    const b = parseJson(board);
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const val = b[r][c];
        if (val === ".") continue;
        const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
          return false;
        }
        rows[r].add(val);
        cols[c].add(val);
        boxes[boxIndex].add(val);
      }
    }
    return true;
  },
  "search-in-rotated-sorted-array": ({
    arr,
    target,
  }: {
    arr: string;
    target: any;
  }) => {
    const nums = parseNumArray(arr);
    const t = parseNumber(target);
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === t) return `Found at index: ${mid}`;
      if (nums[left] <= nums[mid]) {
        if (t >= nums[left] && t < nums[mid]) right = mid - 1;
        else left = mid + 1;
      } else {
        if (t > nums[mid] && t <= nums[right]) left = mid + 1;
        else right = mid - 1;
      }
    }
    return "Target not found";
  },
  "number-of-islands-algo": ({ grid }: { grid: string }) => {
    const g = parseJson(grid);
    if (!g || g.length === 0) return 0;
    let count = 0;
    const dfs = (r: number, c: number) => {
      if (
        r < 0 ||
        c < 0 ||
        r >= g.length ||
        c >= g[0].length ||
        g[r][c] === "0"
      )
        return;
      g[r][c] = "0";
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
    };
    for (let r = 0; r < g.length; r++) {
      for (let c = 0; c < g[0].length; c++) {
        if (g[r][c] === "1") {
          count++;
          dfs(r, c);
        }
      }
    }
    return count;
  },
  "kruskals-algorithm-conceptual": () =>
    `(Conceptual) An MST algorithm. 1. Sort all edges by weight. 2. Iterate through sorted edges. 3. For each edge, if adding it does not form a cycle, add it to the MST. Use a Union-Find data structure to efficiently check for cycles.`,
};
