// HELPER FUNCTIONS
const parseNumber = (input: any): number => {
  const num = Number(input);
  if (isNaN(num)) throw new Error(`Invalid number input: "${input}"`);
  return num;
};
const parseNumArray = (input: string): (number | null)[] => {
  if (!input || typeof input !== "string" || input.trim() === "") return [];
  return input.split(",").map((item) => {
    const trimmed = item.trim();
    if (trimmed.toLowerCase() === "null") return null;
    return parseNumber(trimmed);
  });
};

// Node classes for Tree problems
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }
  insert(value: number): BST {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return this; // No duplicates
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

export const solvers: Record<string, Function> = {
  "implement-stack": () => {
    class Stack {
      items: any[] = [];
      push(item: any) {
        this.items.push(item);
      }
      pop() {
        return this.items.pop();
      }
      peek() {
        return this.items[this.items.length - 1];
      }
      isEmpty() {
        return this.items.length === 0;
      }
    }
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const peek = stack.peek();
    const pop = stack.pop();
    return `Pushed 1, 2. Peek: ${peek}. Popped: ${pop}. Is empty: ${stack.isEmpty()}`;
  },
  "implement-queue": () => {
    class Queue {
      items: any[] = [];
      enqueue(item: any) {
        this.items.push(item);
      }
      dequeue() {
        return this.items.shift();
      }
      front() {
        return this.items[0];
      }
      isEmpty() {
        return this.items.length === 0;
      }
    }
    const queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    const front = queue.front();
    const dequeued = queue.dequeue();
    return `Enqueued 'a', 'b'. Front: ${front}. Dequeued: ${dequeued}. New front: ${queue.front()}`;
  },
  "implement-singly-linked-list": () =>
    `(Conceptual) A Node class holds a value and a 'next' pointer. The LinkedList class holds a 'head' pointer. Append iterates to the end and sets the last node's 'next'. Prepend sets the new node's 'next' to the current head and updates the head.`,
  "implement-doubly-linked-list": () =>
    `(Conceptual) Similar to a singly linked list, but each node also has a 'prev' pointer. Insertion and deletion are more complex as you must update both the 'next' pointer of the previous node and the 'prev' pointer of the next node.`,
  "implement-hash-table": () =>
    `(Conceptual) A class that uses a large array (buckets). A hash function converts a key into an array index. The 'set' method hashes the key to find the index and stores the key-value pair. The 'get' method hashes the key to find the value. Collision handling (e.g., separate chaining) is needed.`,
  "binary-search-tree-insertion": ({ arr }: { arr: string }) => {
    const tree = new BST();
    parseNumArray(arr).forEach((val) => val !== null && tree.insert(val));
    return `Tree created. Root is ${tree.root?.value}. Root's left is ${tree.root?.left?.value}. Root's right is ${tree.root?.right?.value}.`;
  },
  "binary-search-tree-find": ({ arr }: { arr: string }) => {
    const tree = new BST();
    parseNumArray(arr).forEach((val) => val !== null && tree.insert(val));
    const find = (value: number) => {
      let current = tree.root;
      while (current) {
        if (value === current.value) return true;
        current = value < current.value ? current.left : current.right;
      }
      return false;
    };
    return `Found 6: ${find(6)}. Found 99: ${find(99)}.`;
  },
  "binary-search-tree-traversal": ({ arr }: { arr: string }) => {
    const tree = new BST();
    parseNumArray(arr).forEach((val) => val !== null && tree.insert(val));
    const inOrder: number[] = [];
    const preOrder: number[] = [];
    const postOrder: number[] = [];
    const dfsInOrder = (node: TreeNode | null) => {
      if (node) {
        dfsInOrder(node.left);
        inOrder.push(node.value);
        dfsInOrder(node.right);
      }
    };
    const dfsPreOrder = (node: TreeNode | null) => {
      if (node) {
        preOrder.push(node.value);
        dfsPreOrder(node.left);
        dfsPreOrder(node.right);
      }
    };
    const dfsPostOrder = (node: TreeNode | null) => {
      if (node) {
        dfsPostOrder(node.left);
        dfsPostOrder(node.right);
        postOrder.push(node.value);
      }
    };
    dfsInOrder(tree.root);
    dfsPreOrder(tree.root);
    dfsPostOrder(tree.root);
    return `In-order: [${inOrder.join(", ")}]\nPre-order: [${preOrder.join(
      ", "
    )}]\nPost-order: [${postOrder.join(", ")}]`;
  },
  "tree-bfs-traversal": ({ arr }: { arr: string }) => {
    const tree = new BST();
    parseNumArray(arr).forEach((val) => val !== null && tree.insert(val));
    const result: number[] = [];
    const queue: (TreeNode | null)[] = [tree.root];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node) {
        result.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    return `BFS Result: [${result.join(", ")}]`;
  },
  "implement-graph-conceptual": () =>
    `(Conceptual) Adjacency List: A map where keys are nodes and values are an array of their neighbors (e.g., \`{ A: ['B', 'C'] }\`). Space efficient for sparse graphs. Adjacency Matrix: A V x V matrix where \`matrix[i][j] = 1\` if there's an edge. Faster to check for an edge, but uses more space.`,
  "graph-dfs-traversal-conceptual": () =>
    `(Conceptual) Use a stack (or recursion). Start at a node, push to stack. While stack is not empty, pop a node, visit it, and push its unvisited neighbors to the stack. Use a 'visited' set to avoid cycles.`,
  "graph-bfs-traversal-conceptual": () =>
    `(Conceptual) Use a queue. Start at a node, add to queue. While queue is not empty, dequeue a node, visit it, and add its unvisited neighbors to the queue. Use a 'visited' set.`,
  "implement-trie": () => {
    class TrieNode {
      children: Record<string, TrieNode> = {};
      isEndOfWord = false;
    }
    class Trie {
      root = new TrieNode();
      insert(word: string) {
        let current = this.root;
        for (const char of word) {
          if (!current.children[char]) current.children[char] = new TrieNode();
          current = current.children[char];
        }
        current.isEndOfWord = true;
      }
      search(word: string) {
        let current = this.root;
        for (const char of word) {
          if (!current.children[char]) return false;
          current = current.children[char];
        }
        return current.isEndOfWord;
      }
    }
    const trie = new Trie();
    trie.insert("app");
    trie.insert("apple");
    return `Search 'app': ${trie.search("app")}, Search 'appl': ${trie.search(
      "appl"
    )}`;
  },
  "implement-max-heap": () =>
    `(Conceptual) Usually implemented with an array. Insert adds to the end and 'bubbles up' (swaps with parent) to maintain the heap property. ExtractMax removes the root, replaces it with the last element, and 'sinks down' (swaps with larger child) to fix the heap.`,
  "implement-min-heap": () =>
    `(Conceptual) Same as a Max Heap, but the parent is always smaller than its children. 'Bubble up' swaps if the child is smaller than the parent. 'Sink down' swaps with the smaller of the two children.`,
  "queue-from-stacks": () =>
    `(Conceptual) Use two stacks, \`inStack\` and \`outStack\`. For \`enqueue\`, push to \`inStack\`. For \`dequeue\`, if \`outStack\` is empty, pop everything from \`inStack\` and push it to \`outStack\`. Then pop from \`outStack\`.`,
  "stack-from-queues": () =>
    `(Conceptual) Use two queues, \`q1\` and \`q2\`. For \`push\`, add to \`q1\`. For \`pop\`, move all but the last element from \`q1\` to \`q2\`, get the last element, then swap the queues' names.`,
  "linked-list-find-middle": () =>
    `(Conceptual) Use two pointers, a 'slow' and a 'fast' pointer, both starting at the head. Move 'slow' one step at a time and 'fast' two steps at a time. When 'fast' reaches the end of the list, 'slow' will be at the middle.`,
  "linked-list-detect-cycle": () =>
    `(Conceptual) Use two pointers, 'slow' and 'fast' (Floyd's Tortoise and Hare algorithm). Move 'slow' one step and 'fast' two steps. If they ever meet, there is a cycle.`,
  "linked-list-reverse": () =>
    `(Conceptual) Iterate through the list with three pointers: \`prev\`, \`current\`, and \`next\`. In each iteration, set \`current.next\` to \`prev\`, then advance all three pointers.`,
  "bst-validation": () =>
    `(Conceptual) A recursive helper function \`isValid(node, min, max)\`. The function checks if \`node.value\` is within the valid range. For the left child, the new max is \`node.value\`. For the right child, the new min is \`node.value\`.`,
  "bst-min-max": ({ arr }: { arr: string }) => {
    const tree = new BST();
    parseNumArray(arr).forEach((val) => val !== null && tree.insert(val));
    const findMin = () => {
      let current = tree.root;
      while (current?.left) current = current.left;
      return current?.value;
    };
    const findMax = () => {
      let current = tree.root;
      while (current?.right) current = current.right;
      return current?.value;
    };
    return `Min: ${findMin()}, Max: ${findMax()}`;
  },
  "bst-height": ({ arr }: { arr: string }) => {
    const tree = new BST();
    parseNumArray(arr).forEach((val) => val !== null && tree.insert(val));
    const findHeight = (node: TreeNode | null): number => {
      if (!node) return 0;
      return 1 + Math.max(findHeight(node.left), findHeight(node.right));
    };
    return `Height: ${findHeight(tree.root)}`;
  },
  "bst-is-balanced": () =>
    `(Conceptual) A recursive function that calculates the height of a node's left and right subtrees. If the difference in height is > 1 at any node, the tree is not balanced. The function should return the height or a special value (e.g., -1) to indicate imbalance.`,
  "bst-level-order-traversal": ({ arr }: { arr: string }) => {
    const values = parseNumArray(arr);
    if (values.length === 0 || values[0] === null) return "[]";
    const root = new TreeNode(values[0]!);
    const q = [root];
    let i = 1;
    while (i < values.length) {
      const current = q.shift()!;
      if (values[i] !== null && values[i] !== undefined) {
        current.left = new TreeNode(values[i]!);
        q.push(current.left);
      }
      i++;
      if (i < values.length && values[i] !== null && values[i] !== undefined) {
        current.right = new TreeNode(values[i]!);
        q.push(current.right);
      }
      i++;
    }
    const result: number[][] = [];
    const queue: (TreeNode | null)[] = [root];
    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel: number[] = [];
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        if (node) {
          currentLevel.push(node.value);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
        }
      }
      result.push(currentLevel);
    }
    return JSON.stringify(result);
  },
  "bst-lowest-common-ancestor": () =>
    `(Conceptual) Start at the root. If both target nodes are smaller than the current node, move left. If both are larger, move right. The first node you encounter where the targets are on opposite sides (or one is the node itself) is the LCA.`,
  "implement-priority-queue": () =>
    `(Conceptual) Use a Min Heap. The \`enqueue\` method adds a new element (with its priority) and lets it 'bubble up' to its correct position. The \`dequeue\` method simply calls \`extractMin\` on the heap to get the element with the highest priority (lowest priority number).`,
  "hash-table-collision-handling": () =>
    `(Conceptual) Separate Chaining: Each bucket in the array stores a linked list of key-value pairs that hash to the same index. Open Addressing: If a bucket is full, probe for the next available bucket (e.g., Linear Probing checks the next index, then the next, etc.).`,
  "linked-list-remove-duplicates": () =>
    `(Conceptual) With a buffer (like a Set): Iterate through the list. For each node, check if its value is in the set. If so, remove the node. If not, add the value to the set. Without a buffer: Use two pointers (runner technique), an O(n^2) approach.`,
  "linked-list-find-nth-to-last": () =>
    `(Conceptual) Use two pointers. Move the first pointer \`n\` nodes into the list. Then, move both pointers one step at a time. When the first pointer reaches the end, the second pointer will be at the nth-to-last element.`,
  "implement-deque": () => {
    class Deque {
      items: any[] = [];
      addFront(item: any) {
        this.items.unshift(item);
      }
      addRear(item: any) {
        this.items.push(item);
      }
      removeFront() {
        return this.items.shift();
      }
      removeRear() {
        return this.items.pop();
      }
    }
    const deque = new Deque();
    deque.addFront(1);
    deque.addRear(2);
    return `Remove Front: ${deque.removeFront()}, Remove Rear: ${deque.removeRear()}`;
  },
  "trie-autocomplete": () =>
    `(Conceptual) Add a \`getWordsWithPrefix\` method. Traverse the trie to the node corresponding to the prefix. Then, perform a DFS (or BFS) from that node, collecting all words found by visiting nodes where \`isEndOfWord\` is true.`,
  "bst-delete-node": () =>
    `(Conceptual) Deletion has 3 cases. 1) Node is a leaf: just remove it. 2) Node has one child: replace the node with its child. 3) Node has two children: find its in-order successor (the smallest node in the right subtree), copy its value to the node to be deleted, then recursively delete the successor.`,
  "graph-dijkstra-conceptual": () =>
    `(Conceptual) Finds the shortest path in a weighted graph. Uses a Priority Queue to always visit the nearest unvisited node. Maintains a distance map. For each visited node, it checks its neighbors and updates their distances if a shorter path is found.`,
  "graph-has-cycle-conceptual": () =>
    `(Conceptual) For a directed graph, use DFS. Keep track of visited nodes and nodes currently in the recursion stack. If DFS encounters a node that is already in the current recursion stack, a cycle is detected.`,
  "set-data-structure-usage": ({ arr }: { arr: string }) => {
    const nums = parseNumArray(arr);
    return new Set(nums).size;
  },
  "map-data-structure-usage": ({ str }: { str: string }) => {
    const map = new Map<string, number>();
    for (const char of str) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    return JSON.stringify(Object.fromEntries(map));
  },
  "linked-list-is-palindrome": () =>
    `(Conceptual) 1. Find the middle of the list. 2. Reverse the second half of the list. 3. Compare the first half with the reversed second half. 4. (Optional) Restore the list by reversing the second half again.`,
  "bst-successor-conceptual": () =>
    `(Conceptual) For a node 'n', if it has a right subtree, the successor is the minimum value in that right subtree. If it has no right subtree, the successor is the first ancestor for which 'n' is in the left subtree.`,
  "graph-topological-sort-conceptual": () =>
    `(Conceptual) An ordering of vertices in a Directed Acyclic Graph (DAG) where for every directed edge from vertex u to vertex v, u comes before v. Often done with DFS: the sort is the reverse of the post-order traversal completion times.`,
  "lru-cache-conceptual": () =>
    `(Conceptual) Use a Doubly Linked List for O(1) removal/addition and a Hash Map for O(1) lookup. The map stores keys and pointers to the list nodes. When an item is accessed, move its node to the front of the list. If cache is full, remove the node at the end.`,
  "bst-from-sorted-array": () =>
    `(Conceptual) A recursive function. The middle element of the current array becomes the root. The left half of the array is used to recursively build the left subtree. The right half builds the right subtree. This ensures the tree is height-balanced.`,
  "implement-adjacency-list": () => {
    class Graph {
      adjacencyList: Record<string, string[]> = {};
      addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
      }
      addEdge(v1: string, v2: string) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
      }
    }
    const g = new Graph();
    g.addVertex("A");
    g.addVertex("B");
    g.addEdge("A", "B");
    return JSON.stringify(g.adjacencyList);
  },
  "number-of-islands-conceptual": () =>
    `(Conceptual) Iterate through the 2D grid. If you find a '1' (land), increment an island counter and start a DFS or BFS from that cell. The search should visit all connected land cells and change them to '0' (or a visited marker) to ensure they aren't counted again.`,
  "bst-serialize-deserialize-conceptual": () =>
    `(Conceptual) Serialize: Use a pre-order traversal. For each node, append its value to a string. If a node is null, append a special marker (e.g., '#'). Deserialize: Use a queue of the serialized values. A recursive helper function builds the tree, consuming values from the queue.`,
  "avl-tree-conceptual": () =>
    `(Conceptual) An AVL tree is a self-balancing BST. After every insertion or deletion, it checks the 'balance factor' (height of left subtree - height of right subtree) of its ancestors. If the factor is > 1 or < -1, it performs 'rotations' to rebalance the tree.`,
  "red-black-tree-conceptual": () =>
    `(Conceptual) A self-balancing BST where each node is colored red or black. It maintains balance through a set of strict rules (e.g., a red node cannot have a red child). Insertions/deletions may require re-coloring and rotations to preserve these rules.`,
  "b-tree-conceptual": () =>
    `(Conceptual) A self-balancing tree designed for databases and filesystems. Nodes can have many children and many keys. This keeps the tree height low, minimizing disk reads.`,
  "bloom-filter-conceptual": () =>
    `(Conceptual) A probabilistic data structure. It uses a bit array and multiple hash functions. To add an item, hash it multiple times and set the bits at the resulting indices to 1. To check if an item exists, hash it and see if all corresponding bits are 1. Can have false positives but no false negatives.`,
  "skip-list-conceptual": () =>
    `(Conceptual) A probabilistic data structure that balances a linked list. Nodes have a random chance of also having pointers to nodes further down the list, creating multiple levels of "express lanes" for fast traversal.`,
  "graph-clone-conceptual": () =>
    `(Conceptual) Use a hash map to store a mapping from original nodes to their copies. Use DFS or BFS to traverse the original graph. For each node, if it's not in the map, create a copy and add it. Then, recursively clone its neighbors and add them to the copied node's neighbor list.`,
  "graph-prims-algorithm-conceptual": () =>
    `(Conceptual) A greedy algorithm for finding a Minimum Spanning Tree (MST). Start with a vertex. At each step, add the cheapest edge that connects a vertex in the MST to a vertex outside the MST. A priority queue is used to efficiently find this cheapest edge.`,
  "graph-kruskals-algorithm-conceptual": () =>
    `(Conceptual) Another greedy MST algorithm. Sort all edges by weight. Iterate through the sorted edges. For each edge, if adding it to the result does not form a cycle, add it. A Disjoint Set Union (DSU) data structure is used to efficiently check for cycles.`,
  "disjoint-set-union-conceptual": () =>
    `(Conceptual) A DSU tracks sets of elements. \`find(i)\` returns a representative (or root) of the set containing element \`i\`. \`union(i, j)\` merges the sets containing \`i\` and \`j\`. Used in Kruskal's algorithm to detect cycles.`,
  "fenwick-tree-conceptual": () =>
    `(Conceptual) A data structure, also known as a Binary Indexed Tree (BIT), that supports efficient prefix sum queries and element updates on an array in O(log n) time. It uses bitwise operations to represent a tree structure within an array.`,
  "segment-tree-conceptual": () =>
    `(Conceptual) A tree data structure used for storing information about intervals or segments. It allows querying which of the stored segments contain a given point.`,
  "linked-list-partition": () =>
    `(Conceptual) Create two new linked lists, one for nodes less than 'x' and one for nodes greater than or equal to 'x'. Iterate through the original list, adding each node to the appropriate new list. Finally, connect the tail of the 'less than' list to the head of the 'greater than' list.`,
  "linked-list-sum-lists": () =>
    `(Conceptual) Iterate through both lists simultaneously with a \`carry\` variable. Create a new result list. For each position, calculate \`sum = digit1 + digit2 + carry\`. The new node's value is \`sum % 10\`, and the new carry is \`floor(sum / 10)\`. Handle lists of different lengths.`,
  "bst-tree-to-doubly-linked-list": () =>
    `(Conceptual) Perform an in-order traversal of the BST. During the traversal, instead of printing the node, re-wire its left and right pointers to connect it to the previously visited node, forming a doubly linked list.`,
  "graph-bellman-ford-conceptual": () =>
    `(Conceptual) An algorithm that finds the shortest path from a single source to all other vertices. It works by relaxing edges: it iterates through all edges V-1 times. In each iteration, it updates the distance to each vertex if a shorter path is found. A Vth iteration is done to detect negative weight cycles.`,
  "graph-floyd-warshall-conceptual": () =>
    `(Conceptual) An all-pairs shortest path algorithm. It uses dynamic programming. It iterates through all vertices 'k' and, for every pair of vertices (i, j), it checks if the path from i to j through k is shorter than the currently known path.`,
  "circular-queue": () =>
    `(Conceptual) Use a fixed-size array with 'head' and 'tail' pointers. When an element is enqueued or dequeued, the pointers move. When a pointer reaches the end of the array, it "wraps around" to the beginning using the modulo operator.`,
  "trie-delete-word": () =>
    `(Conceptual) Recursively traverse to the node for the last character of the word and set its \`isEndOfWord\` to false. On the way back up the recursion, if a node has no children and is not the end of another word, it can be deleted from its parent's children map.`,
  "heap-heapify-conceptual": () =>
    `(Conceptual) To build a heap from an array in O(n) time, you can start from the last non-leaf node and work backwards to the root. For each node, perform the 'sink down' operation to fix the heap property for the subtree rooted at that node.`,
  "bst-kth-smallest-element": () =>
    `(Conceptual) Perform an in-order traversal of the BST. The in-order traversal visits nodes in ascending order. Keep a counter, and the kth node you visit will be the kth smallest element.`,
  "graph-bipartite-check-conceptual": () =>
    `(Conceptual) Use BFS or DFS. Start at a vertex and assign it a color (e.g., 1). Add its neighbors to the queue/stack and assign them the opposite color (e.g., 2). Continue traversing. If you ever find an edge connecting two vertices of the same color, the graph is not bipartite.`,
  "fenwick-tree-range-sum-conceptual": () =>
    `(Conceptual) A Fenwick Tree (BIT) excels at prefix sums. The sum of a range \`[i, j]\` is calculated by finding the prefix sum up to \`j\` and subtracting the prefix sum up to \`i-1\`. Both operations are O(log n).`,
  "segment-tree-range-update-conceptual": () =>
    `(Conceptual) For range updates (e.g., add 5 to all elements from index i to j), a 'lazy propagation' technique is used. Instead of updating all leaf nodes, you update a node that covers the range and mark it with a 'lazy' tag. This tag is then pushed down to its children only when they are visited by a subsequent query or update.`,
  "sparse-table-conceptual": () =>
    `(Conceptual) A Sparse Table preprocesses an array to answer range queries (like Range Minimum Query) in O(1) time. It pre-calculates the answers for all ranges that have a power-of-two length. A query for any range can then be answered by combining the results of two overlapping power-of-two ranges. The preprocessing takes O(n log n) time.`,
  "suffix-array-conceptual": () =>
    `(Conceptual) A Suffix Array is a sorted array of all suffixes of a string. It allows for fast substring searches. Combined with an LCP (Longest Common Prefix) array, it can solve many complex string problems. Building it efficiently is complex, often requiring O(n log n) algorithms.`,
  "k-d-tree-conceptual": () =>
    `(Conceptual) A K-D Tree is a binary tree used to partition space with k-dimensional data. At each level of the tree, it splits the data along a different dimension. This is efficient for nearest neighbor searches and range queries in multi-dimensional space.`,
};
