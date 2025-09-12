
export const explanations: Record<string, string> = {
  'implement-stack': `
### 💡 Problem Breakdown
The task is to implement a Stack, a fundamental data structure. A stack follows the **LIFO** (Last-In, First-Out) principle. Think of it like a stack of plates: the last plate you put on top is the first one you take off. We need to create a class with the core methods: \`push\`, \`pop\`, \`peek\`, and \`isEmpty\`.

### ⚙️ Solution Walkthrough
A JavaScript \`Array\` can be easily adapted to behave like a stack, as its built-in methods map directly to stack operations.
\`\`\`javascript
class Stack {
    constructor() {
        this.items = [];
    }
    // Add an element to the top
    push(item) { this.items.push(item); }
    // Remove and return the top element
    pop() { return this.items.pop(); }
    // Look at the top element without removing
    peek() { return this.items[this.items.length - 1]; }
    // Check if the stack is empty
    isEmpty() { return this.items.length === 0; }
}
\`\`\`
1.  **\`push(item)\`**: The built-in \`Array.prototype.push()\` adds an element to the end of the array, which we consider the "top" of our stack.
2.  **\`pop()\`**: \`Array.prototype.pop()\` removes and returns the last element, perfectly modeling the LIFO principle.
3.  **\`peek()\`**: To look at the top element, we simply access the last element of the array at index \`length - 1\`.

### 📚 Key Concepts
-   **Data Structure**: A way of organizing and storing data for efficient access and modification.
-   **Stack**: A linear data structure following a LIFO (Last-In, First-Out) order.
-   **Abstraction**: We create a new \`Stack\` abstraction using an existing one (\`Array\`), exposing a specific set of methods to interact with our data.
`,
  'implement-queue': `
### 💡 Problem Breakdown
This problem requires implementing a Queue, another fundamental data structure. A queue follows the **FIFO** (First-In, First-Out) principle. Think of a queue of people waiting in line: the first person to get in line is the first person to be served.

### ⚙️ Solution Walkthrough
Similar to a stack, a JavaScript \`Array\` can be used to build a queue.
\`\`\`javascript
class Queue {
    constructor() {
        this.items = [];
    }
    // Add an element to the back
    enqueue(item) { this.items.push(item); }
    // Remove and return the front element
    dequeue() { return this.items.shift(); }
    // Look at the front element
    front() { return this.items[0]; }
    // Check if the queue is empty
    isEmpty() { return this.items.length === 0; }
}
\`\`\`
1.  **\`enqueue(item)\`**: We use \`Array.prototype.push()\` to add new items to the end of the array, which represents the "back" of our queue.
2.  **\`dequeue()\`**: We use the built-in \`Array.prototype.shift()\` method. This method removes the **first** element from an array, modeling the FIFO principle.
3.  **Performance Note**: Using \`shift()\` on very large arrays can be inefficient (O(n)) because it requires re-indexing all subsequent elements. For performance-critical applications, a queue is often implemented with a Linked List or a different strategy.

### 📚 Key Concepts
-   **Queue**: A linear data structure which follows a FIFO (First-In, First-Out) order.
`,
  'implement-singly-linked-list': `
### 💡 Problem Breakdown
A Linked List is a linear data structure where elements (\`Nodes\`) are not stored at contiguous memory locations but are linked using pointers. Each node contains its data and a reference (a \`"next"\` pointer) to the next node in the sequence.

### ⚙️ Solution Walkthrough
The solution requires two classes: one for the \`Node\` and one for the \`LinkedList\` itself.
\`\`\`javascript
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList { 
    constructor() {
        this.head = null; // The head is the entry point to the list
    }
    // Add a node to the beginning
    prepend(data) {
        this.head = new Node(data, this.head);
    }
    // Add a node to the end
    append(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(data);
    }
}
\`\`\`
### 📚 Key Concepts
-   **Linked List**: A dynamic data structure consisting of a sequence of nodes.
-   **Node**: An object containing data and a reference (pointer) to the next node.
-   **Head**: The first node in a linked list. It's the only entry point to traverse the list.
-   **Traversal**: The process of visiting each node in the list, usually by starting at the head and following the \`next\` pointers.
`,
  'implement-doubly-linked-list': `
### 💡 Problem Breakdown
A Doubly Linked List is an enhancement of a singly linked list. Each node contains its data, a pointer to the *next* node, and a pointer to the *previous* node. This allows for traversal in both directions.

### ⚙️ Solution Walkthrough
The \`Node\` class is updated to include a \`prev\` pointer. Methods like \`append\` and \`delete\` become more complex because both \`next\` and \`prev\` pointers of adjacent nodes must be correctly updated.
\`\`\`javascript
class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
// The LinkedList class would hold 'head' and 'tail' pointers for efficiency.
class DoublyLinkedList {
    // ... implementation of append, prepend, delete ...
}
\`\`\`
For example, when appending, you would set the new node's \`prev\` to the old tail, and the old tail's \`next\` to the new node.

### 📚 Key Concepts
-   **Doubly Linked List**: A linked list where nodes are connected bidirectionally.
-   **Traversal**: Can be done forwards (using \`next\`) or backwards (using \`prev\`).
`,
  'implement-hash-table': `
### 💡 Problem Breakdown
A Hash Table (or Hash Map) is a data structure that maps keys to values for highly efficient lookup. It uses a "hash function" to compute an index, or "bucket," from a key, where the value can be stored.

### ⚙️ Solution Walkthrough
A basic implementation uses an array for the buckets and a simple hash function.
\`\`\`javascript
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            total = (total * WEIRD_PRIME + key.charCodeAt(i)) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = []; // Separate chaining for collisions
        }
        this.keyMap[index].push([key, value]);
    }
}
\`\`\`
1.  **Hash Function**: The \`_hash\` function takes a key and deterministically computes an index within the bounds of the array.
2.  **Collision Handling**: It's possible for two different keys to hash to the same index. This is a "collision." A common way to handle this is "separate chaining," where each bucket stores a small array or linked list of the key-value pairs that belong there.

### 📚 Key Concepts
-   **Hash Table**: A data structure for efficient key-value storage and retrieval (average O(1) time).
-   **Hash Function**: A function that maps data of arbitrary size to a fixed-size value.
-   **Collision**: When two distinct keys hash to the same index.
`,
  'binary-search-tree-insertion': `
### 💡 Problem Breakdown
A Binary Search Tree (BST) is a node-based binary tree data structure with a specific property: for any given node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater. The task is to implement the insertion method.

### ⚙️ Solution Walkthrough
To insert a new value, you start at the root and traverse the tree, comparing the new value to the current node's value to decide whether to go left or right, until you find an empty spot.
\`\`\`javascript
class Node { /* ... */ }
class BST {
    constructor() { this.root = null; }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
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
\`\`\`
### 📚 Key Concepts
-   **Binary Search Tree (BST)**: A sorted tree data structure that allows for fast lookups, additions, and removals (O(log n) on average for a balanced tree).
`,
  'binary-search-tree-find': `
### 💡 Problem Breakdown
The structure of a BST makes searching very efficient. The task is to add a method that finds if a value exists in the tree.

### ⚙️ Solution Walkthrough
The search process is similar to insertion. You start at the root and traverse left or right based on comparing the target value with the current node's value.
\`\`\`javascript
class BST {
    // ... insert method ...
    find(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true; // Found
            }
            // Decide whether to go left or right
            current = value < current.value ? current.left : current.right;
        }
        return false; // Not found
    }
}
\`\`\`
Because you discard half of the remaining tree at each step, this search is very fast (O(log n) on average).

### 📚 Key Concepts
-   **Tree Traversal**: The process of visiting nodes in a tree. Searching is a form of traversal.
`,
  'binary-search-tree-traversal': `
### 💡 Problem Breakdown
This is a conceptual problem about the three main Depth-First Search (DFS) traversal methods for a binary tree. The order in which you "visit" the root node relative to its left and right children defines the traversal.

### ⚙️ Solution Walkthrough
Recursion is the most natural way to implement these traversals.
\`\`\`javascript
// In-order (Left, Root, Right)
function inOrder(node) {
  if (node) { inOrder(node.left); visit(node); inOrder(node.right); }
}
// Pre-order (Root, Left, Right)
function preOrder(node) {
  if (node) { visit(node); preOrder(node.left); preOrder(node.right); }
}
// Post-order (Left, Right, Root)
function postOrder(node) {
  if (node) { postOrder(node.left); postOrder(node.right); visit(node); }
}
\`\`\`
-   **In-order** traversal of a BST visits the nodes in ascending sorted order.
-   **Pre-order** is useful for creating a copy of the tree.
-   **Post-order** is useful for deleting nodes from the tree.

### 📚 Key Concepts
-   **Depth-First Search (DFS)**: A traversal algorithm that explores as far as possible down each branch before backtracking.
`,
  'tree-bfs-traversal': `
### 💡 Problem Breakdown
Breadth-First Search (BFS) is another way to traverse a tree. Instead of going deep down one branch, it explores the tree level by level. It visits all the nodes at depth 0 (the root), then all nodes at depth 1, and so on.

### ⚙️ Solution Walkthrough
BFS is implemented iteratively using a **Queue** data structure.
\`\`\`javascript
function bfs(root) {
    const queue = [root]; // Start the queue with the root
    const visited = [];
    
    while (queue.length > 0) {
        // Dequeue a node
        const node = queue.shift();
        visited.push(node.value);
        
        // Enqueue its children
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return visited;
}
\`\`\`
1.  Add the root to a queue.
2.  Loop as long as the queue is not empty.
3.  In each iteration, remove a node from the front of the queue, process it, and add its children to the back of the queue.

### 📚 Key Concepts
-   **Breadth-First Search (BFS)**: A traversal algorithm that explores nodes level by level.
-   **Queue**: The core data structure that enables the FIFO (First-In, First-Out) exploration required for BFS.
`,
  'implement-graph-conceptual': `
### 💡 Problem Breakdown
A Graph is a non-linear data structure consisting of "vertices" (or nodes) and "edges" that connect them. There are two primary ways to represent a graph in code:
1.  **Adjacency List**: This is the most common representation. It's a map or an object where the keys are the vertices, and the values are an array of the vertices that are adjacent to it (its "neighbors"). This is very space-efficient for "sparse" graphs (graphs with relatively few edges).
2.  **Adjacency Matrix**: This is a V x V matrix (where V is the number of vertices). \`matrix[i][j] = 1\` if there's an edge from vertex \`i\` to vertex \`j\`, and 0 otherwise. This is faster for checking if an edge exists between two specific vertices but uses more space, making it suitable for "dense" graphs.

### 📚 Key Concepts
-   **Graph**: A data structure representing a set of objects where some pairs of objects are connected by links.
`,
  'graph-dfs-traversal-conceptual': `
### 💡 Problem Breakdown
Depth-First Search (DFS) on a graph is similar to DFS on a tree. It explores as far as possible along each branch before backtracking. The key difference is that graphs can have cycles, so we must keep track of visited nodes to avoid infinite loops.

### ⚙️ Solution Walkthrough
DFS can be implemented iteratively with a Stack, or recursively.
\`\`\`javascript
// Recursive DFS
function dfs(startNode, graph, visited = new Set()) {
    if (visited.has(startNode)) return; // Base case for cycles
    
    visited.add(startNode);
    console.log(startNode); // "Visit" the node
    
    const neighbors = graph[startNode];
    for (const neighbor of neighbors) {
        dfs(neighbor, graph, visited); // Recursive step
    }
}
\`\`\`
### 📚 Key Concepts
-   **Depth-First Search (DFS)**: A graph traversal algorithm.
-   **Visited Set**: A crucial data structure to prevent infinite loops in graphs with cycles.
`,
  'graph-bfs-traversal-conceptual': `
### 💡 Problem Breakdown
Breadth-First Search (BFS) on a graph explores neighbors of the starting node first, then the neighbors of those neighbors, and so on, level by level. It's useful for finding the shortest path in an unweighted graph.

### ⚙️ Solution Walkthrough
BFS is always implemented iteratively with a Queue.
\`\`\`javascript
function bfs(startNode, graph) {
    const queue = [startNode];
    const visited = new Set([startNode]);
    
    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node); // "Visit" the node
        
        const neighbors = graph[node];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
\`\`\`
### 📚 Key Concepts
-   **Breadth-First Search (BFS)**: A graph traversal algorithm.
-   **Queue**: The core data structure that enables the level-by-level exploration.
`,
  'implement-trie': `
### 💡 Problem Breakdown
A Trie (pronounced "try"), also known as a prefix tree, is a tree-like data structure that is very efficient for storing and retrieving strings. Each node represents a character, and the path from the root to a node represents a prefix.

### ⚙️ Solution Walkthrough
A Trie is built from nodes. Each node contains a map of its children (character -> TrieNode) and a boolean flag indicating if it marks the end of a word.
\`\`\`javascript
class TrieNode {
    constructor() { this.children = {}; this.isEndOfWord = false; }
}
class Trie {
    constructor() { this.root = new TrieNode(); }
    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }
    // ... search method similar to insert ...
}
\`\`\`
### 📚 Key Concepts
-   **Trie**: A data structure optimized for string prefix operations.
-   **Use Cases**: Commonly used for autocomplete features and spell checkers.
`,
  'implement-max-heap': `
### 💡 Problem Breakdown
A Heap is a specialized tree-based data structure that satisfies the "heap property." In a **Max Heap**, for any given node, its value is greater than or equal to the values of its children. Heaps are often implemented using an array for efficiency.

### ⚙️ Solution Walkthrough
The implementation uses an array and helper methods to find parent/child indices.
1.  **`insert`**: Add the new element to the end of the array. Then, "bubble up" the element: compare it with its parent and swap if it's larger. Repeat until the heap property is restored.
2.  **`extractMax`**: The maximum element is always at the root (index 0). To remove it, swap it with the last element in the array and pop it. Then, "sink down" the new root: compare it with its children and swap with the larger child. Repeat until the heap property is restored.

### 📚 Key Concepts
-   **Heap**: A data structure for efficiently finding the min or max element.
-   **Use Cases**: Priority Queues and the Heap Sort algorithm.
`,
  'implement-min-heap': `
### 💡 Problem Breakdown
A **Min Heap** is the opposite of a Max Heap. For any given node, its value is less than or equal to the values of its children. The minimum element of the collection is always at the root.

### ⚙️ Solution Walkthrough
The logic is the same as a Max Heap, but the comparisons are reversed.
1.  **`insert`**: Add to the end and "bubble up," swapping with the parent if the new element is *smaller*.
2.  **`extractMin`**: Swap the root with the last element and pop. Then, "sink down" the new root by swapping it with its *smaller* child until the heap property is restored.

### 📚 Key Concepts
-   **Min Heap**: A data structure for efficiently finding the minimum element.
`,
  'queue-from-stacks': `
### 💡 Problem Breakdown
This is a classic interview question that tests your understanding of the underlying principles of stacks (LIFO) and queues (FIFO). The goal is to simulate FIFO behavior using two LIFO structures.

### ⚙️ Solution Walkthrough
Two stacks are used, an \`inStack\` and an \`outStack\`.
1.  **\`enqueue(value)\`**: Always push the new value onto the \`inStack\`.
2.  **\`dequeue()\`**:
    - If the \`outStack\` is empty, we need to "reverse" the \`inStack\`. Do this by popping every element from \`inStack\` and pushing it onto \`outStack\`.
    - Now, the \`outStack\` holds the elements in the correct FIFO order. Pop from \`outStack\` and return the value.

This process is called "amortized O(1)" because while the transfer operation is O(n), it only happens occasionally.

### 📚 Key Concepts
-   **Data Structure Simulation**: Implementing one data structure's behavior using others.
`,
  'stack-from-queues': `
### 💡 Problem Breakdown
This is the inverse of the previous problem: simulating LIFO behavior using two FIFO structures. This is generally less efficient.

### ⚙️ Solution Walkthrough
One common approach:
1.  **\`push(value)\`**: To add an element, first enqueue it to the second queue (\`q2\`). Then, dequeue everything from the main queue (\`q1\`) and enqueue it into \`q2\`. Finally, swap the names of \`q1\` and \`q2\`. This ensures the newly added element is always at the front of \`q1\`.
2.  **\`pop()\`**: Simply dequeue from \`q1\`.

This makes the \`push\` operation expensive (O(n)).

### 📚 Key Concepts
-   **Data Structure Simulation**: Demonstrates a deeper understanding of the properties of queues and stacks.
`,
  'linked-list-find-middle': `
### 💡 Problem Breakdown
The task is to find the middle node of a singly linked list. A naive solution would be to traverse it once to find the length, then traverse it again to the \`length / 2\` node. The challenge is to do it in a single pass.

### ⚙️ Solution Walkthrough
The "slow and fast pointer" technique is used.
1.  Initialize two pointers, \`slow\` and \`fast\`, both starting at the head of the list.
2.  Iterate through the list. In each step, move \`slow\` by one node (\`slow = slow.next\`) and move \`fast\` by two nodes (\`fast = fast.next.next\`).
3.  When the \`fast\` pointer reaches the end of the list (or \`null\`), the \`slow\` pointer will be at the middle node.

### 📚 Key Concepts
-   **Two-Pointer Technique**: A common and powerful pattern for solving linked list problems efficiently.
`,
  'linked-list-detect-cycle': `
### 💡 Problem Breakdown
The task is to determine if a linked list contains a cycle (i.e., a node's \`next\` pointer points back to a previous node in the list).

### ⚙️ Solution Walkthrough
This is the classic application of Floyd's Cycle-Finding Algorithm, also known as the "Tortoise and the Hare."
1.  Initialize two pointers, \`slow\` (the tortoise) and \`fast\` (the hare), both at the head.
2.  Iterate through the list. In each step, move \`slow\` by one node and \`fast\` by two nodes.
3.  If the pointers ever meet (\`slow === fast\`), it means there is a cycle in the list.
4.  If the \`fast\` pointer reaches the end of the list (\`null\`), there is no cycle.

### 📚 Key Concepts
-   **Floyd's Cycle-Finding Algorithm**: A pointer algorithm for detecting cycles in a sequence.
`,
  'linked-list-reverse': `
### 💡 Problem Breakdown
The task is to reverse a singly linked list in-place. This means the direction of all the \`next\` pointers must be flipped.

### ⚙️ Solution Walkthrough
An iterative solution uses three pointers: \`prev\`, \`current\`, and \`next\`.
1.  Initialize \`prev = null\` and \`current = head\`.
2.  Loop while \`current\` is not \`null\`.
3.  Inside the loop:
    - Store the next node: \`next = current.next\`.
    - Reverse the pointer: \`current.next = prev\`.
    - Move pointers one step forward: \`prev = current\`, \`current = next\`.
4.  When the loop finishes, \`prev\` will be pointing to the new head of the reversed list.

### 📚 Key Concepts
-   **Pointer Manipulation**: The core of linked list problems involves carefully managing and re-assigning pointers.
`,
  'bst-validation': `
### 💡 Problem Breakdown
The task is to check if a binary tree is a valid Binary Search Tree. It's not enough to just check if \`node.left.value < node.value < node.right.value\`. A node in the left subtree must be less than *all* of its ancestors on the right, and vice versa.

### ⚙️ Solution Walkthrough
A recursive helper function is used that passes down a valid range (\`min\`, \`max\`) for each node.
\`\`\`javascript
function isValidBST(node, min = null, max = null) {
  if (!node) return true; // An empty tree is a valid BST
  
  // The current node's value must be within the valid range
  if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
    return false;
  }
  
  // Recursively check the left and right subtrees with updated constraints
  return isValidBST(node.left, min, node.value) &&
         isValidBST(node.right, node.value, max);
}
\`\`\`
### 📚 Key Concepts
-   **Constraint Propagation**: The recursive calls pass down updated \`min\` and \`max\` constraints that must be satisfied by all nodes in that subtree.
`,
  'bst-min-max': `
### 💡 Problem Breakdown
Due to the properties of a Binary Search Tree, finding the minimum and maximum values is very simple.

### ⚙️ Solution Walkthrough
-   **Minimum Value**: The minimum value is always the leftmost node. To find it, start at the root and continuously traverse to the left child until you can't anymore.
-   **Maximum Value**: The maximum value is always the rightmost node. Start at the root and continuously traverse to the right child.

\`\`\`javascript
function findMin(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node.value;
}
\`\`\`
### 📚 Key Concepts
-   **BST Property**: The inherent ordering of a BST makes finding extremes a simple traversal.
`,
  'bst-height': `
### 💡 Problem Breakdown
The height (or depth) of a binary tree is the length of the longest path from the root node down to the furthest leaf node. The task is to calculate this using recursion.

### ⚙️ Solution Walkthrough
The recursive logic is: the height of a tree is 1 (for the current node) plus the maximum of the heights of its left and right subtrees.
\`\`\`javascript
function findHeight(node) {
    // Base case: The height of an empty tree is 0.
    if (node === null) {
        return 0;
    }
    // Recursive step:
    const leftHeight = findHeight(node.left);
    const rightHeight = findHeight(node.right);
    
    // The height is 1 + the height of the deeper subtree.
    return 1 + Math.max(leftHeight, rightHeight);
}
\`\`\`
### 📚 Key Concepts
-   **Recursive Definition**: Translating the definition of a property (height) into a recursive function.
`,
  'bst-is-balanced': `
### 💡 Problem Breakdown
A height-balanced binary tree is a tree in which the depth of the two subtrees of *every* node never differ by more than one. This property is important for ensuring that operations on the tree remain efficient (O(log n)).

### ⚙️ Solution Walkthrough
A recursive function can check for balance. The function should return the height of a subtree if it's balanced, or a special value (like -1) if it's not.
1.  **Base Case**: An empty tree is balanced and has a height of 0.
2.  **Recursive Step**: Recursively find the height of the left and right subtrees.
3.  **Check Balance**: If either subtree is unbalanced, propagate the unbalanced signal up. Then, check if the absolute difference in heights of the current node's subtrees is greater than 1. If it is, the current node is unbalanced.
4.  If balanced, return the current node's height (1 + max of child heights).

### 📚 Key Concepts
-   **Balanced Binary Tree**: A key property for maintaining the performance guarantees of a BST.
`,
  'bst-level-order-traversal': `
### 💡 Problem Breakdown
This is another name for a Breadth-First Search (BFS) on a tree. The goal is to traverse the tree level by level, from left to right, and return the node values in a nested array, where each inner array represents a level.

### ⚙️ Solution Walkthrough
A Queue is used to perform the BFS. The key trick is to know the number of nodes at each level.
1.  Add the root to a queue.
2.  Loop while the queue is not empty.
3.  Inside the loop, first get the \`levelSize\` (the current size of the queue).
4.  Create a \`currentLevel\` array.
5.  Loop \`levelSize\` times. In each of these inner iterations:
    - Dequeue a node.
    - Add its value to the \`currentLevel\` array.
    - Enqueue its left and right children (if they exist).
6.  After the inner loop, push the \`currentLevel\` array to the final result.

### 📚 Key Concepts
-   **Breadth-First Search (BFS)**: A traversal algorithm that explores nodes level by level.
-   **Queue**: The core data structure for BFS.
`,
  'bst-lowest-common-ancestor': `
### 💡 Problem Breakdown
The Lowest Common Ancestor (LCA) of two nodes in a tree is the deepest node that has both nodes as descendants. In a BST, its ordered property allows for a very efficient search.

### ⚙️ Solution Walkthrough
Start at the root of the BST.
1.  If the values of both target nodes are *less than* the current node's value, then the LCA must be in the left subtree. Move to the left child.
2.  If the values of both target nodes are *greater than* the current node's value, then the LCA must be in the right subtree. Move to the right child.
3.  Otherwise, the current node must be the "split point" where the paths to the two target nodes diverge. This means the current node is the LCA. This also covers the case where one of the target nodes is the current node.

### 📚 Key Concepts
-   **BST Property**: Leveraging the sorted nature of the tree to efficiently find the LCA in O(log n) time.
`,
  'implement-priority-queue': `
### 💡 Problem Breakdown
A Priority Queue is an abstract data type where each element has a "priority" associated with it. Elements with higher priority are served before elements with lower priority. It's often implemented using a Heap data structure for efficiency.

### ⚙️ Solution Walkthrough
A Min Heap is a good choice for the underlying structure, where a smaller number indicates a higher priority.
1.  **`enqueue(value, priority)`**: Create a node with the value and priority. Insert this node into the Min Heap. The heap's "bubble up" logic will place it in the correct position based on its priority in O(log n) time.
2.  **`dequeue()`**: Call `extractMin` on the Min Heap. This will remove and return the root of the heap (the element with the highest priority) and restructure the heap, all in O(log n) time.

### 📚 Key Concepts
-   **Priority Queue**: A data structure for managing items with priorities.
-   **Heap**: The ideal underlying data structure for an efficient Priority Queue implementation.
`,
  'hash-table-collision-handling': `
### 💡 Problem Breakdown
A "hash collision" occurs when a hash function generates the same index for two different keys. Since you can't store both values in the same array slot, you need a strategy to handle this.
### ⚙️ Solution Walkthrough
1.  **Separate Chaining**: This is the most common method. Instead of storing a single value, each bucket in the array stores a pointer to another data structure, typically a linked list. When a collision occurs, the new key-value pair is simply added to the linked list at that index.
2.  **Open Addressing (e.g., Linear Probing)**: This method tries to find another open slot in the array itself. With linear probing, if the bucket at \`index\` is full, it checks \`index + 1\`, then \`index + 2\`, and so on, until an empty slot is found. This can lead to "clustering," where long runs of occupied slots degrade performance.

### 📚 Key Concepts
-   **Collision**: A fundamental problem in hashing that must be handled for a hash table to work correctly.
`,
  'linked-list-remove-duplicates': `
### 💡 Problem Breakdown
The task is to remove duplicate values from an unsorted singly linked list.

### ⚙️ Solution Walkthrough
1.  **With a Buffer (Hash Set)**: This is the more efficient approach.
    - Create a \`Set\` to keep track of the values you've seen.
    - Iterate through the list with two pointers, \`current\` and \`prev\`.
    - For each \`current\` node, check if its value is in the \`Set\`.
        - If it is, you've found a duplicate. "Remove" it by setting \`prev.next = current.next\`.
        - If it's not, add its value to the \`Set\` and advance \`prev\` to \`current\`.
    - Advance \`current\`.
2.  **Without a Buffer**: This requires a nested loop (the "runner" technique). For each node (\`current\`), have a second pointer (\`runner\`) iterate through the rest of the list, removing any nodes that have the same value as \`current\`. This is less efficient (O(n^2) time).

### 📚 Key Concepts
-   **Time-Space Tradeoff**: The solution with a buffer is faster (O(n) time) but uses extra space (O(n) space). The solution without a buffer is slower (O(n^2) time) but uses constant extra space.
`,
  'linked-list-find-nth-to-last': `
### 💡 Problem Breakdown
The goal is to find the nth-to-last element of a singly linked list. For example, if n=2, you want the second-to-last element.

### ⚙️ Solution Walkthrough
The most efficient solution uses the two-pointer technique.
1.  Initialize two pointers, \`p1\` and \`p2\`, both at the head of the list.
2.  Move the \`p1\` pointer \`n\` nodes forward into the list.
3.  Now, move both \`p1\` and \`p2\` one step at a time, together. The distance between them will always be \`n\`.
4.  When the \`p1\` pointer reaches the end of the list, the \`p2\` pointer will be at the nth-to-last element.

### 📚 Key Concepts
-   **Two-Pointer Technique**: A versatile pattern for solving linked list problems that involve finding nodes based on their position or relationship.
`,
'implement-deque': `
### 💡 Problem Breakdown
A Deque (pronounced "deck") stands for Double-Ended Queue. It's a hybrid data structure that combines the properties of a stack and a queue. You can add and remove elements from both the front and the back.

### ⚙️ Solution Walkthrough
A simple implementation can use a JavaScript array, which conveniently has methods for all four required operations.
\`\`\`javascript
class Deque {
    constructor() { this.items = []; }
    // Add to the front
    addFront(item) { this.items.unshift(item); }
    // Add to the back
    addRear(item) { this.items.push(item); }
    // Remove from the front
    removeFront() { return this.items.shift(); }
    // Remove from the back
    removeRear() { return this.items.pop(); }
}
\`\`\`
**Note**: For performance-critical applications, using `.shift()` and `.unshift()` can be inefficient (O(n)). A more optimal implementation would use a doubly linked list.

### 📚 Key Concepts
- **Deque**: A generalized version of a queue that allows insertion and deletion at both ends.
`,
'trie-autocomplete': `
### 💡 Problem Breakdown
This is a classic application of a Trie. The goal is to add a method that, given a prefix string, returns all the words stored in the Trie that start with that prefix.

### ⚙️ Solution Walkthrough
The solution involves two main steps:
1.  **Traverse to Prefix Node**: First, traverse the Trie from the root down to the node that represents the end of the input prefix. If the prefix doesn't exist in the Trie, return an empty array.
2.  **DFS from Prefix Node**: Once you have the prefix node, perform a Depth-First Search (DFS) or Breadth-First Search (BFS) on the subtree starting from that node. Collect all words by recursively exploring all paths. A word is found when you reach a node where `isEndOfWord` is true.

### 📚 Key Concepts
- **Trie**: The ideal data structure for prefix-based searches.
- **Depth-First Search (DFS)**: A recursive traversal algorithm perfect for exploring all paths from a given node.
`,
'bst-delete-node': `
### 💡 Problem Breakdown
Deleting a node from a Binary Search Tree is the most complex operation, as you must maintain the BST property after removal. There are three cases to consider for the node to be deleted.

### ⚙️ Solution Walkthrough
A recursive function is often used to find and delete the node.
1.  **Case 1: Node is a leaf (no children)**: Simply remove the node by setting its parent's pointer to \`null\`.
2.  **Case 2: Node has one child**: Replace the node with its child by linking the node's parent to the node's child.
3.  **Case 3: Node has two children**: This is the tricky case.
    - Find the **in-order successor** of the node. This is the smallest node in the node's right subtree.
    - Copy the value of the successor to the node you want to delete.
    - Recursively call the delete function to remove the successor node (which is now a much simpler case, as it will have at most one child).

### 📚 Key Concepts
- **In-order Successor**: The next node in the in-order traversal, crucial for deletion.
- **Recursive Deletion**: The problem is simplified by reducing the two-child case to a one-child or zero-child case.
`,
'graph-dijkstra-conceptual': `
### 💡 Problem Breakdown
Dijkstra's algorithm is a classic algorithm for finding the shortest paths from a single starting node to all other nodes in a **weighted graph with non-negative edge weights**.

### ⚙️ Solution Walkthrough
It's a greedy algorithm that uses a priority queue to be efficient.
1.  **Initialization**:
    - Create a \`distances\` map to store the shortest distance found so far to each node (initialize all to \`Infinity\` except the start node to 0).
    - Create a \`priority queue\` to store nodes to visit, prioritized by their distance. Add the start node.
    - Create a \`previous\` map to reconstruct the path later.
2.  **Loop**: While the priority queue is not empty:
    - Extract the node with the smallest distance (the "closest" unvisited node).
    - For each of its \`neighbors\`:
        - Calculate the distance to the neighbor through the current node.
        - If this new path is shorter than the previously known distance to the neighbor, update the \`distances\` map, update the \`previous\` map, and add the neighbor to the priority queue with its new, shorter distance.

### 📚 Key Concepts
- **Greedy Algorithm**: At each step, it chooses the locally optimal path (the closest unvisited node).
- **Priority Queue**: The key data structure that makes Dijkstra's efficient by always providing the next closest node to visit.
`,
'graph-has-cycle-conceptual': `
### 💡 Problem Breakdown
The task is to determine if a graph contains a cycle. The approach is different for directed vs. undirected graphs. This explanation focuses on a **directed graph**.

### ⚙️ Solution Walkthrough
A Depth-First Search (DFS) is used. To detect a cycle, we need to track not just the globally \`visited\` nodes, but also the nodes currently in the "recursion stack" for the current path.
1.  Create two sets: \`visited\` (to avoid re-processing nodes) and \`recursionStack\` (to detect cycles).
2.  Start a DFS from each unvisited node in the graph.
3.  The DFS function \`(node)\`:
    - Add the \`node\` to both \`visited\` and \`recursionStack\`.
    - For each \`neighbor\` of the node:
        - If the \`neighbor\` is already in the \`recursionStack\`, we've found a back edge, which means there is a cycle. Return \`true\`.
        - If the \`neighbor\` is not visited, recursively call DFS on it. If that call returns \`true\`, propagate it up.
    - **Backtrack**: Remove the \`node\` from the \`recursionStack\` before the function returns.
4.  If the DFS completes for all nodes without finding a cycle, return \`false\`.

### 📚 Key Concepts
- **Depth-First Search (DFS)**: The core traversal algorithm.
- **Back Edge**: In a DFS traversal, an edge that points from a node to one of its ancestors in the DFS tree. A back edge indicates a cycle.
`,
'set-data-structure-usage': `
### 💡 Problem Breakdown
The ES6 \`Set\` data structure is designed to store a collection of unique values. This makes it an extremely efficient and straightforward tool for finding the number of unique elements in an array.

### ⚙️ Solution Walkthrough
A \`Set\` is created directly from the input array. The \`.size\` property then gives the count of unique elements.
\`\`\`javascript
const numbers = [1, 2, 3, 2, 1, 4];
const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers.size); // 4
\`\`\`
1.  **\`new Set(iterable)\`**: The \`Set\` constructor can take any iterable object (like an array). It automatically iterates over the elements and adds only the unique ones to the new \`Set\`.
2.  **`.size`**: This property returns the number of elements in the \`Set\`.

### 📚 Key Concepts
- **`Set`**: A built-in data structure for storing unique values.
- **Uniqueness**: A common requirement in data processing, made simple by the \`Set\` object.
`,
'map-data-structure-usage': `
### 💡 Problem Breakdown
The ES6 \`Map\` data structure is ideal for creating frequency counters, where you map an item to its count. It's generally preferred over using a plain object for this task because it avoids prototype chain issues and can handle non-string keys.

### ⚙️ Solution Walkthrough
The code iterates through a string. For each character, it updates its count in a \`Map\`.
\`\`\`javascript
const str = "hello";
const frequencyMap = new Map();

for (const char of str) {
  const count = frequencyMap.get(char) || 0;
  frequencyMap.set(char, count + 1);
}
// frequencyMap will be {'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1}
\`\`\`
1.  **`map.get(char) || 0`**: This is a concise way to get the current count or default to 0 if the character hasn't been seen yet.
2.  **`map.set(char, ...)`**: This sets the new, incremented count for the character.

### 📚 Key Concepts
- **`Map`**: A built-in data structure for key-value pairs.
- **Frequency Counter**: A common pattern for solving many problems involving strings and arrays.
`,
'linked-list-is-palindrome': `
### 💡 Problem Breakdown
The task is to check if a singly linked list is a palindrome (reads the same forwards and backwards). The challenge is that you can't easily iterate backwards in a singly linked list.

### ⚙️ Solution Walkthrough
An efficient solution involves a few steps:
1.  **Find the Middle**: Use the "slow and fast pointer" technique to find the middle of the linked list.
2.  **Reverse the Second Half**: Starting from the middle node, reverse the second half of the list.
3.  **Compare**: Now you have two "sub-lists." Iterate through the original first half and the reversed second half simultaneously, comparing the values of the nodes. If any mismatch is found, it's not a palindrome.
4.  **Restore (Optional)**: If you need to restore the original list, reverse the second half again to put it back in its original order.

### 📚 Key Concepts
- **Two-Pointer Technique**: Used to efficiently find the middle of the list.
- **In-place Reversal**: The sub-list reversal is a key part of the algorithm.
`,
'bst-successor-conceptual': `
### 💡 Problem Breakdown
The "in-order successor" of a node 'n' in a Binary Search Tree is the node that would be visited immediately after 'n' in an in-order traversal. This is the node with the smallest value that is still larger than 'n'.

### ⚙️ Solution Walkthrough
There are two main cases for a node 'n':
1.  **If the node 'n' has a right subtree**: The successor is the minimum value in that right subtree. To find this, you go to the right child once, and then traverse as far left as possible.
2.  **If the node 'n' has no right subtree**: The successor is one of its ancestors. You must travel up the tree from 'n'. The successor is the first ancestor for which 'n' is in its left subtree.

### 📚 Key Concepts
- **In-order Traversal**: The fundamental concept that defines what a "successor" is.
- **BST Property**: The ordered nature of the tree is used to efficiently find the successor.
`,
'graph-topological-sort-conceptual': `
### 💡 Problem Breakdown
Topological Sort is an algorithm for ordering the vertices of a **Directed Acyclic Graph (DAG)**. For every directed edge from vertex \`u\` to vertex \`v\`, \`u\` must come before \`v\` in the ordering. This is commonly used for scheduling tasks with dependencies (e.g., you must take "Calculus I" before "Calculus II").

### ⚙️ Solution Walkthrough
A common algorithm uses Depth-First Search (DFS).
1.  Create a \`visited\` set and a \`stack\` (or list) to store the sorted result.
2.  Loop through all vertices in the graph. If a vertex hasn't been visited, perform a DFS from it.
3.  The DFS function \`(node)\`:
    - Mark the \`node\` as visited.
    - For each \`neighbor\` of the node, recursively call DFS if the neighbor hasn't been visited.
    - **After** visiting all the descendants of the \`node\` (i.e., after the recursive calls for all its neighbors have returned), push the \`node\` onto the \`stack\`.
4.  The final sorted order is the \`stack\` reversed.

### 📚 Key Concepts
- **Directed Acyclic Graph (DAG)**: A directed graph with no cycles, which is a prerequisite for topological sorting.
- **Depth-First Search (DFS)**: The core traversal algorithm used to determine the ordering.
`,
'lru-cache-conceptual': `
### 💡 Problem Breakdown
LRU stands for "Least Recently Used." An LRU cache is a fixed-size cache that automatically evicts the least recently used item when it needs to make space for a new item. The challenge is to design this data structure with \`get\` and \`put\` operations that run in O(1) average time complexity.

### ⚙️ Solution Walkthrough
The optimal solution requires combining two data structures:
1.  **A Hash Map (like a JavaScript \`Map\`)**: This provides O(1) lookup of items by their key. The map will store the key and a reference (or pointer) to a node in a linked list.
2.  **A Doubly Linked List**: This is used to maintain the order of use. The list will have a "most recently used" end and a "least recently used" end.
-   **`get(key)`**: Look up the key in the map. If it exists, get the corresponding node from the linked list, move that node to the "most recently used" end of the list, and return its value.
-   **`put(key, value)`**: If the key exists, update its value and move its node to the "most recently used" end. If it's a new key:
    - If the cache is full, remove the item at the "least recently used" end of the list (and also from the map).
    - Create a new node, add it to the "most recently used" end of the list, and add the key and node reference to the map.

### 📚 Key Concepts
-   **Doubly Linked List**: Allows for O(1) insertion and deletion of nodes when you have a reference to the node.
-   **Hash Map**: Allows for O(1) lookup.
-   **Data Structure Combination**: Combining the strengths of two different data structures to meet complex requirements.
`,
'bst-from-sorted-array': `
### 💡 Problem Breakdown
The goal is to convert a sorted array into a height-balanced Binary Search Tree. A height-balanced tree is important for ensuring that search operations remain efficient (O(log n)).

### ⚙️ Solution Walkthrough
A recursive "divide and conquer" approach is perfect for this.
1.  Create a recursive helper function \`build(arr, start, end)\`.
2.  **Base Case**: If \`start > end\`, it means the subarray is empty, so return \`null\`.
3.  **Recursive Step**:
    - Find the middle index of the current subarray: \`mid = Math.floor((start + end) / 2)\`.
    - The element at \`arr[mid]\` will become the root of the current subtree. Create a new \`Node\` with this value.
    - Recursively build the left subtree by calling \`build(arr, start, mid - 1)\`.
    - Recursively build the right subtree by calling \`build(arr, mid + 1, end)\`.
    - Link the subtrees to the root and return the root.

This approach naturally creates a balanced tree because we are always picking the middle element as the root.

### 📚 Key Concepts
- **Divide and Conquer**: The core strategy of splitting the array and recursively solving for the sub-arrays.
- **Height-Balanced BST**: A tree where the depth of the two subtrees of every node never differs by more than one.
`,
'implement-adjacency-list': `
### 💡 Problem Breakdown
An adjacency list is the most common way to represent a graph in code, especially for sparse graphs. It's a map where each key is a vertex, and its value is a list (e.g., an array) of all the vertices it's connected to.

### ⚙️ Solution Walkthrough
A \`Graph\` class is created that has a property to hold the adjacency list.
\`\`\`javascript
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        // For an undirected graph, add edges both ways
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}
\`\`\`
1.  **\`adjacencyList\`**: A plain object is used to store the list.
2.  **`addVertex`**: Adds a new key to the list with an empty array.
3.  **`addEdge`**: Adds each vertex to the other's list of neighbors.

### 📚 Key Concepts
- **Graph Representation**: A fundamental concept in graph theory.
`,
'number-of-islands-conceptual': `
### 💡 Problem Breakdown
This is a classic graph traversal problem disguised in a grid. An "island" is a group of connected '1's (land). The goal is to count how many distinct islands exist in the grid.

### ⚙️ Solution Walkthrough
The approach is to iterate through the entire grid.
1.  Initialize an \`islandCount\` to 0.
2.  Loop through every cell (\`row\`, \`col\`) of the grid.
3.  If you find a cell that is '1' (land):
    - Increment \`islandCount\`.
    - Start a traversal (either DFS or BFS) from this cell.
    - The traversal should visit all connected '1's that are part of this same island and "sink" them by changing their value to '0' (or a visited marker).
4.  By the end of the main loop, the \`islandCount\` will be correct because the sinking process ensures that each island is only counted once.

### 📚 Key Concepts
- **Graph Traversal (DFS/BFS)**: The core algorithm used to find and mark all parts of an island.
- **Implicit Graph**: The grid can be thought of as a graph where each cell is a node and adjacent land cells have edges between them.
`,
'bst-serialize-deserialize-conceptual': `
### 💡 Problem Breakdown
This is a common interview problem that tests your understanding of tree traversals.
- **Serialization**: The process of converting a tree structure into a format (like a string) that can be stored or transmitted.
- **Deserialization**: The process of reconstructing the original tree from the serialized format.

### ⚙️ Solution Walkthrough
A **Pre-order Traversal** is a very common and effective way to serialize a tree.
1.  **Serialization (\`serialize(node)\`)**:
    - If the current \`node\` is \`null\`, append a special marker (e.g., "null") to your string.
    - Otherwise, append the \`node.value\`, and then recursively call \`serialize(node.left)\` and \`serialize(node.right)\`.
    - The result would be a string like "8,3,1,null,null,6,null,null,10,null,14,null,null".
2.  **Deserialization (\`deserialize(string)\`)**:
    - Split the string into an array of values.
    - Use a recursive helper function that consumes values from this array.
    - \`build()\`:
        - Get the next value from the array.
        - If the value is "null", return \`null\`.
        - Otherwise, create a new \`Node\` with the value.
        - Recursively call \`build()\` to create the left subtree, then again for the right subtree.
        - Return the created \`node\`.

### 📚 Key Concepts
-   **Tree Traversal**: Pre-order traversal is key because it processes the root before its children, which makes reconstruction straightforward.
-   **Serialization**: Converting data structures to a storable/transmittable format.
`,
'avl-tree-conceptual': `
### 💡 Problem Breakdown
An AVL Tree is a self-balancing Binary Search Tree. The "balance factor" of a node (the height of its left subtree minus the height of its right subtree) is always maintained to be -1, 0, or 1. This guarantees that the tree's height is always logarithmic, ensuring that operations like insertion, deletion, and search are always efficient (O(log n)).

### ⚙️ Solution Walkthrough
The key to an AVL tree is the **rotation** process.
1.  Perform a standard BST insertion or deletion.
2.  After the modification, travel back up the tree from the point of change to the root.
3.  At each node, update its height and check its balance factor.
4.  If a node becomes unbalanced, perform the necessary **rotations** to restore the balance. There are four types of rotations (single left/right, and double left-right/right-left) depending on the structure of the imbalance.

### 📚 Key Concepts
- **Self-Balancing BST**: A type of BST that automatically maintains a balanced height.
- **Rotations**: The core operations (left and right rotations) used to rebalance the tree structure after modifications.
`,
'red-black-tree-conceptual': `
### 💡 Problem Breakdown
A Red-Black Tree is another type of self-balancing Binary Search Tree. Instead of storing heights, it maintains balance by enforcing a set of rules about the "color" (red or black) of each node.

### ⚙️ Solution Walkthrough
The five rules of a Red-Black Tree (e.g., "a red node cannot have a red child," "every path from a given node to any of its descendant null nodes contains the same number of black nodes") guarantee that the longest path from the root to a leaf is no more than twice as long as the shortest path. When an insertion or deletion violates these rules, the tree uses **re-coloring** and **rotations** to fix the violations and restore balance.

### 📚 Key Concepts
- **Self-Balancing BST**: A different strategy for achieving the same goal as an AVL tree.
- **Node Coloring**: The core mechanism used to track and enforce the tree's balance properties.
`,
'b-tree-conceptual': `
### 💡 Problem Breakdown
A B-Tree is a self-balancing tree data structure that generalizes the binary search tree, allowing for nodes with more than two children. Unlike a BST, a node in a B-Tree can contain multiple keys. This is what makes it ideal for systems that read and write large blocks of data, like databases and filesystems.

### ⚙️ Solution Walkthrough
1.  **Structure**: All leaf nodes are at the same depth. A node with \`k\` keys has \`k+1\` children. The keys in a node separate the values in its child subtrees.
2.  **Operations**: When inserting or deleting, nodes may become too full or too empty. To fix this, a full node is **split** into two, and a key is promoted to the parent. An empty node may **merge** with a sibling or borrow a key from it. These operations ensure the tree remains balanced.
3.  **Benefit**: By having a high "fanout" (many children per node), the height of the tree is kept very low, which is crucial for minimizing disk I/O operations.

### 📚 Key Concepts
- **B-Tree**: A specialized tree optimized for on-disk storage.
- **Fanout**: The number of children a node can have.
`,
'bloom-filter-conceptual': `
### 💡 Problem Breakdown
A Bloom Filter is a space-efficient, probabilistic data structure used to test whether an element is a member of a set. It is "probabilistic" because it can have **false positives** (it might say an element is in the set when it's not) but it can **never** have **false negatives** (if it says an element is not in the set, it is definitely not in the set).

### ⚙️ Solution Walkthrough
1.  **Setup**: An m-bit array, initially all set to 0, and k different hash functions.
2.  **`add(item)`**: To add an item, feed it to the k hash functions to get k array positions. Set the bits at all these positions to 1.
3.  **`check(item)`**: To check if an item is in the set, feed it to the k hash functions to get k array positions. Check if the bits at *all* these positions are 1.
    - If any of the bits is 0, the item is definitely not in the set.
    - If all the bits are 1, the item is *probably* in the set. It could be a false positive if other items happened to set the same bits.

### 📚 Key Concepts
- **Probabilistic Data Structure**: A data structure that may produce erroneous results but with a known probability.
- **Use Cases**: Useful in cases where false positives are acceptable, such as checking for previously seen articles for a user or checking for malicious URLs in a browser.
`,
'skip-list-conceptual': `
### 💡 Problem Breakdown
A Skip List is a probabilistic data structure that provides an alternative to balanced trees for storing sorted data. It's essentially a linked list with additional pointers that form "express lanes," allowing for faster searching.

### ⚙️ Solution Walkthrough
1.  **Structure**: It's a series of linked lists layered on top of each other. The bottom list is a normal sorted linked list.
2.  Each node has a random chance of also being included in the level above it. For example, a node might have a 50% chance of being in level 2, a 25% chance of being in level 3, and so on.
3.  **Search**: To search for an element, you start at the highest level. You traverse forward until you are about to "overshoot" the target value. Then, you drop down one level and continue the search from there. This allows you to "skip" over large portions of the list.

### 📚 Key Concepts
- **Probabilistic Data Structure**: The random nature of the levels provides good performance on average (O(log n) for search, insertion, and deletion).
- **Linked List Enhancement**: A way to get tree-like performance from a list-like structure.
`,
'graph-clone-conceptual': `
### 💡 Problem Breakdown
The task is to create a deep copy of a graph. This means creating new nodes for every node in the original graph and ensuring the connections (edges) between the new nodes match the connections in the original. The main challenge is handling cycles and ensuring each original node is only cloned once.

### ⚙️ Solution Walkthrough
A hash map is essential to store the mapping between the original nodes and their newly created copies. A traversal algorithm (like DFS or BFS) is used.
1.  Create a map: \`map<originalNode, copiedNode>\`.
2.  Start a traversal (e.g., DFS) from the starting node.
3.  The \`clone(node)\` function:
    - If \`node\` is already in the map, return the copy from the map.
    - Create a new node \`copy\` with the same value as the original.
    - Add the mapping to the map: \`map.set(node, copy)\`.
    - Iterate through the \`neighbors\` of the original \`node\`.
    - For each \`neighbor\`, recursively call \`clone(neighbor)\` and add the result to the \`copy.neighbors\` list.
    - Return the \`copy\`.

### 📚 Key Concepts
- **Graph Traversal**: The core mechanism for visiting every node and edge.
- **Hash Map**: Used to track visited/cloned nodes to prevent infinite loops and redundant work.
`,
'graph-prims-algorithm-conceptual': `
### 💡 Problem Breakdown
A Minimum Spanning Tree (MST) is a subset of the edges of a connected, weighted, undirected graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. Prim's algorithm is a greedy algorithm to find an MST.

### ⚙️ Solution Walkthrough
1.  Start with an empty MST and a set containing a single starting vertex.
2.  Use a **priority queue** to store all edges that connect a vertex in the MST to a vertex outside the MST. The priority is the edge weight.
3.  While the MST doesn't include all vertices:
    - Extract the edge with the minimum weight from the priority queue.
    - If the vertex at the other end of this edge is not yet in the MST, add the edge to the MST and the vertex to our set of visited vertices.
    - Add all new edges connecting this new vertex to unvisited vertices into the priority queue.

### 📚 Key Concepts
- **Minimum Spanning Tree (MST)**: A fundamental concept in graph theory with applications in network design.
- **Greedy Algorithm**: At each step, it makes the locally optimal choice by adding the cheapest possible edge.
- **Priority Queue**: The key data structure for efficiently finding the next cheapest edge.
`,
'graph-kruskals-algorithm-conceptual': `
### 💡 Problem Breakdown
Kruskal's algorithm is another greedy algorithm for finding a Minimum Spanning Tree (MST) in a connected, weighted, undirected graph.

### ⚙️ Solution Walkthrough
1.  Create a list of all edges in the graph and sort them by weight in ascending order.
2.  Initialize an empty MST.
3.  Initialize a **Disjoint Set Union (DSU)** data structure with all the vertices, each in its own set.
4.  Iterate through the sorted edges. For each edge \`(u, v)\`:
    - Use the DSU's \`find\` operation to check if vertices \`u\` and \`v\` are already in the same set.
    - If they are **not** in the same set, it means adding this edge will not form a cycle. Add the edge to the MST and use the DSU's \`union\` operation to merge the sets of \`u\` and \`v\`.
5.  Stop when the MST has \`V-1\` edges.

### 📚 Key Concepts
- **Greedy Algorithm**: It makes the locally optimal choice by considering the cheapest edges first.
- **Disjoint Set Union (DSU)**: The key data structure for efficiently detecting cycles.
`,
'disjoint-set-union-conceptual': `
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
'fenwick-tree-conceptual': `
### 💡 Problem Breakdown
A Fenwick Tree, or Binary Indexed Tree (BIT), is a data structure that can efficiently perform two operations on an array of numbers:
1.  Update an element's value.
2.  Calculate the prefix sum (the sum of elements from the start up to a given index).
Both operations can be done in O(log n) time.

### ⚙️ Solution Walkthrough
A BIT is stored in an array. Each index in the BIT array stores the sum of a specific range of elements from the original array. The ranges are determined by bitwise operations on the indices.
-   **Update**: When a value at an index \`i\` is updated, you traverse "up" the tree by repeatedly adding the last set bit of the index (\`i += i & -i\`), updating all the ranges that include \`i\`.
-   **Query (Prefix Sum)**: To get the sum up to index \`i\`, you traverse "down" by repeatedly subtracting the last set bit (\`i -= i & -i\`), summing up the values from the relevant ranges.

### 📚 Key Concepts
- **Prefix Sum**: A running total of an array.
- **Bitwise Operations**: The core of the Fenwick Tree's efficient index manipulation.
`,
'segment-tree-conceptual': `
### 💡 Problem Breakdown
A Segment Tree is a powerful tree-based data structure used for storing information about intervals or segments. It's particularly efficient for performing range queries (e.g., "what is the minimum value in the range from index \`i\` to \`j\`?") and range updates.

### ⚙️ Solution Walkthrough
1.  **Structure**: It's a binary tree. The root represents the entire array range [0, n-1]. Each node represents an interval, and its children represent the two halves of that interval. The leaf nodes represent individual elements of the array.
2.  **Build**: The tree is built recursively from the bottom up. The value in a parent node is the result of combining its children's values (e.g., the sum or the minimum).
3.  **Query**: A range query \`(i, j)\` is answered by traversing the tree. If a node's interval is completely within \`(i, j)\`, its value is used. If it partially overlaps, the query is recursively made on its children. This takes O(log n) time.

### 📚 Key Concepts
- **Range Queries**: A common type of database or algorithmic query.
- **Divide and Conquer**: The underlying principle for the tree's structure and its query/update algorithms.
`,
'linked-list-partition': `
### 💡 Problem Breakdown
The task is to reorder a linked list based on a pivot value \`x\`. All nodes with values less than \`x\` should come before all nodes with values greater than or equal to \`x\`. The relative order within the two partitions does not need to be preserved.

### ⚙️ Solution Walkthrough
A simple and stable approach is to create two new, separate linked lists: a "less than" list and a "greater than or equal to" list.
1.  Initialize two dummy heads, \`lessHead\` and \`greaterHead\`, and corresponding tail pointers.
2.  Iterate through the original linked list with a \`current\` pointer.
3.  For each node, if its value is less than \`x\`, append it to the tail of the "less than" list.
4.  Otherwise, append it to the tail of the "greater than or equal to" list.
5.  After iterating through the whole original list, connect the tail of the "less than" list to the head of the "greater than" list. The head of the combined list is \`lessHead.next\`.

### 📚 Key Concepts
- **Pointer Manipulation**: A core linked list skill involving rearranging \`next\` pointers.
- **Dummy Nodes**: Using a dummy head node is a common trick that simplifies list manipulation code by avoiding special cases for an empty list.
`,
'linked-list-sum-lists': `
### 💡 Problem Breakdown
This is a classic interview question. You are given two linked lists where each node represents a digit of a number in reverse order. The task is to add these two numbers and return the result as a new linked list in the same format.

### ⚙️ Solution Walkthrough
You can iterate through both lists simultaneously, just like you would perform addition by hand.
1.  Initialize a new result list (with a dummy head), and a \`carry\` variable set to 0.
2.  Use pointers to traverse both input lists. Loop as long as either list pointer is not \`null\` or the \`carry\` is not 0.
3.  In each iteration:
    - Get the values of the current nodes (or 0 if a pointer is \`null\`).
    - Calculate \`sum = value1 + value2 + carry\`.
    - The value for the new node in the result list is \`sum % 10\`.
    - The new \`carry\` for the next iteration is \`Math.floor(sum / 10)\`.
    - Create the new node and append it to the result list.
    - Advance the pointers for the input lists.
4.  Return the \`next\` of the dummy head.

### 📚 Key Concepts
- **Linked List Traversal**: Iterating through lists simultaneously.
- **Schoolbook Arithmetic**: The algorithm mimics the process of manual addition.
`,
'bst-tree-to-doubly-linked-list': `
### 💡 Problem Breakdown
The task is to convert a Binary Search Tree into a sorted, circular Doubly Linked List, in-place. The "left" pointer of the tree node should become the "prev" pointer, and the "right" pointer should become the "next" pointer.

### ⚙️ Solution Walkthrough
This can be solved elegantly with an in-order traversal. The key is to keep track of the previously visited node during the traversal.
1.  Perform a recursive in-order traversal on the BST.
2.  Maintain two external pointers: \`head\` (to store the first node visited) and \`prev\` (to store the last node visited).
3.  The recursive function \`inOrder(node)\`:
    - Recursively call on the left child: \`inOrder(node.left)\`.
    - **Process the current node**:
        - If \`prev\` is \`null\`, this is the first node (the smallest), so set \`head = node\`.
        - Otherwise, link \`prev\` and the current \`node\`: \`prev.right = node\` and \`node.left = prev\`.
        - Update \`prev = node\`.
    - Recursively call on the right child: \`inOrder(node.right)\`.
4.  After the entire traversal is complete, link the \`head\` and the final \`prev\` to make the list circular.

### 📚 Key Concepts
- **In-order Traversal**: The core traversal method that visits nodes in sorted order.
- **In-place Modification**: Re-wiring the existing node pointers to form the new data structure.
`,
'graph-bellman-ford-conceptual': `
### 💡 Problem Breakdown
The Bellman-Ford algorithm finds the shortest paths from a single source vertex to all other vertices in a weighted, directed graph. Its key advantage over Dijkstra's is that it can handle graphs with **negative edge weights**.

### ⚙️ Solution Walkthrough
The algorithm is simpler but less efficient than Dijkstra's.
1.  **Initialization**: Initialize distances from the source to all other vertices as \`Infinity\`, and the distance to the source itself as 0.
2.  **Relax Edges**: Repeat \`V-1\` times (where V is the number of vertices):
    - For every edge \`(u, v)\` with weight \`w\` in the graph, "relax" the edge: if \`distance[u] + w < distance[v]\`, then update \`distance[v] = distance[u] + w\`.
3.  **Check for Negative Cycles**: Repeat the relaxation process one more time (the Vth time). If any distance is updated during this pass, it means the graph contains a negative-weight cycle that is reachable from the source.

### 📚 Key Concepts
- **Shortest Path Algorithm**: An algorithm for finding the path with the minimum total weight.
- **Negative Weight Cycles**: A cycle in a graph whose edges sum to a negative value. Bellman-Ford can detect these.
`,
'graph-floyd-warshall-conceptual': `
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
- **All-Pairs Shortest Path**: A different class of shortest path problem from the single-source problems solved by Dijkstra's and Bellman-Ford.
- **Dynamic Programming**: The algorithm iteratively builds up the solution by considering all possible intermediate vertices.
`,
'circular-queue': `
### 💡 Problem Breakdown
A standard queue implemented with an array can be inefficient because the \`shift()\` operation takes O(n) time. A circular queue (or circular buffer) is a fixed-size queue that uses an array and two pointers (\`head\` and \`tail\`) to achieve O(1) time complexity for both enqueue and dequeue operations.

### ⚙️ Solution Walkthrough
1.  **Structure**: An array of a fixed size, and \`head\` and \`tail\` pointers, initially at 0. A \`count\` variable is also useful.
2.  **`enqueue(item)`**: Add the item at the \`tail\` index. Increment \`tail\`. If \`tail\` reaches the end of the array, it "wraps around" to 0. This wrap-around is done using the modulo operator: \`tail = (tail + 1) % capacity\`. Check for overflow (queue is full).
3.  **`dequeue()`**: Remove the item from the \`head\` index. Increment \`head\` in the same circular manner: \`head = (head + 1) % capacity\`. Check for underflow (queue is empty).

### 📚 Key Concepts
- **Circular Buffer**: A data structure that uses a single, fixed-size buffer as if it were connected end-to-end.
- **Modulo Arithmetic**: The key to implementing the "wrap-around" behavior of the pointers.
`,
'trie-delete-word': `
### 💡 Problem Breakdown
Deleting a word from a Trie is more complex than insertion because you must only remove nodes that are not part of another word's prefix.

### ⚙️ Solution Walkthrough
A recursive approach is often used.
1.  The recursive function \`delete(node, word, index)\` traverses down the Trie.
2.  **Base Case**: When the end of the word is reached (\`index === word.length\`), set the current node's \`isEndOfWord\` flag to \`false\`.
3.  **Recursive Step**: Recurse on the next character.
4.  **Cleanup (on the way back up)**: After the recursive call returns, check the current node. If it no longer has any children and its \`isEndOfWord\` is false, it can be safely deleted from its parent's children map.

### 📚 Key Concepts
- **Recursive Deletion**: Traversing a data structure to a point and then cleaning up nodes on the way back up the call stack.
`,
'heap-heapify-conceptual': `
### 💡 Problem Breakdown
"Heapify" is the process of building a valid heap from an unsorted array. A naive approach would be to create an empty heap and insert each element one by one, which takes O(n log n) time. A more efficient, bottom-up algorithm can do it in O(n) time.

### ⚙️ Solution Walkthrough
The efficient heapify algorithm works as follows:
1.  Start at the last non-leaf node in the array. In a binary heap represented as an array, this is the node at index \`floor(n/2) - 1\`.
2.  Work backwards from this node up to the root (index 0).
3.  For each node, perform the "sink down" (or "heapify down") operation. This is the same operation used in \`extractMax/Min\`: compare the node with its children and swap with the larger/smaller child until the heap property is restored for the subtree rooted at that node.

By starting from the bottom, we ensure that by the time we process a node, its subtrees are already valid heaps.

### 📚 Key Concepts
- **Heapify**: An efficient algorithm for building a heap in linear time.
`,
'bst-kth-smallest-element': `
### 💡 Problem Breakdown
The task is to find the kth smallest element in a Binary Search Tree.

### ⚙️ Solution Walkthrough
The key insight is that an **in-order traversal** of a BST visits the nodes in ascending sorted order.
1.  Perform an in-order traversal of the BST.
2.  As you visit each node, store its value in an array.
3.  After the traversal is complete, the array will be sorted. The kth smallest element is simply the element at index \`k-1\` in this array.

A more optimized solution can stop the traversal early. You can perform an in-order traversal and maintain a counter. When the counter reaches \`k\`, the current node is the one you're looking for.

### 📚 Key Concepts
- **In-order Traversal**: The fundamental traversal method for getting sorted data from a BST.
`,
'graph-bipartite-check-conceptual': `
### 💡 Problem Breakdown
A graph is bipartite if its vertices can be divided into two disjoint and independent sets, U and V, such that every edge connects a vertex in U to one in V. In other words, there are no edges that connect two vertices within the same set.

### ⚙️ Solution Walkthrough
This can be solved using a graph traversal (BFS or DFS) and a "coloring" scheme.
1.  Initialize a \`colors\` map to store the color (e.g., 1 or 2) of each vertex.
2.  Loop through all vertices. If a vertex hasn't been visited (colored) yet, start a traversal (e.g., BFS) from it.
3.  Start the BFS by coloring the source node with color 1 and adding it to the queue.
4.  While the queue is not empty:
    - Dequeue a node \`u\`.
    - For each \`neighbor\` \`v\` of \`u\`:
        - If \`v\` has not been colored, color it with the opposite color of \`u\` and enqueue it.
        - If \`v\` *has* been colored and has the *same* color as \`u\`, then an edge exists between two nodes of the same set. The graph is not bipartite, so return \`false\`.
5.  If the traversal completes for all components of the graph without finding such a conflict, the graph is bipartite.

### 📚 Key Concepts
- **Bipartite Graph**: A fundamental property of graphs.
- **Graph Coloring**: A technique used in many graph algorithms to track state during a traversal.
`,
'fenwick-tree-range-sum-conceptual': `
### 💡 Problem Breakdown
A Fenwick Tree (or Binary Indexed Tree) is highly efficient at calculating prefix sums (sum from the start to index \`i\`). The task is to calculate the sum of an arbitrary range \`[i, j]\`.

### ⚙️ Solution Walkthrough
The solution uses the property of prefix sums. The sum of the range \`[i, j]\` is equal to the (sum of elements up to \`j\`) minus the (sum of elements up to \`i-1\`).
\`\`\`javascript
// Assume 'query(k)' gives the prefix sum up to index k.
function rangeSum(i, j) {
  if (i > 0) {
    return query(j) - query(i - 1);
  } else {
    return query(j);
  }
}
\`\`\`
Since both \`query\` operations take O(log n) time, the range sum query is also very efficient.

### 📚 Key Concepts
- **Prefix Sum**: A technique where pre-calculating running totals allows for rapid calculation of range sums.
`,
'segment-tree-range-update-conceptual': `
### 💡 Problem Breakdown
While a simple Segment Tree can handle range queries, updating every element in a range one by one is inefficient (O(n)). **Lazy propagation** is an optimization technique that allows for range updates in O(log n) time.

### ⚙️ Solution Walkthrough
1.  **Lazy Array**: An additional array, \`lazy\`, of the same size as the segment tree is used. \`lazy[i]\` stores the pending update for the node \`i\`.
2.  **Update Operation**: To update a range, traverse the tree.
    - If a node's range is completely covered by the update range, update the value in the \`lazy\` array for that node and return. Do **not** go down to its children.
    - If a node's range partially overlaps, first "push down" any lazy value from the current node to its children, then recursively call the update on the relevant children.
3.  **Query Operation**: Before querying a node, first "push down" any lazy value it has to its children, updating their values and their own lazy tags. Then proceed with the query as normal.

### 📚 Key Concepts
- **Lazy Propagation**: A technique for deferring updates on a data structure until they are needed, allowing for efficient range updates.
`,
'sparse-table-conceptual': `
### 💡 Problem Breakdown
A Sparse Table is a data structure used to answer range queries on a static (unchanging) array very quickly. The most common use is for Range Minimum/Maximum Query (RMQ). After a preprocessing step, it can answer any range query in O(1) time.

### ⚙️ Solution Walkthrough
1.  **Preprocessing (O(n log n))**: Create a 2D table, \`st\`. \`st[i][j]\` will store the answer (e.g., the minimum) for the range starting at index \`i\` with length \`2^j\`. This table is built up using dynamic programming.
2.  **Query (O(1))**: To find the minimum in a range \`[L, R]\`, find the largest power of two, \`k\`, that is less than or equal to the range length. The answer is the minimum of two pre-calculated values: the minimum of the range starting at \`L\` of length \`2^k\`, and the minimum of the range ending at \`R\` of length \`2^k\`. These two ranges will overlap, but for an idempotent operation like `min`, this is fine.

### 📚 Key Concepts
- **Idempotent Operation**: An operation where applying it multiple times has the same result as applying it once (e.g., `min(a, a) = a`).
- **Dynamic Programming**: Used in the preprocessing step to build the table.
`,
'suffix-array-conceptual': `
### 💡 Problem Breakdown
A Suffix Array is a data structure used for advanced string searching. It is a sorted array of all the suffixes of a given string. For the string "banana", the suffixes are "banana", "anana", "nana", "ana", "na", "a". The suffix array would be the sorted indices of these suffixes.

### ⚙️ Solution Walkthrough
1.  **Generation**: Generate all suffixes of the string.
2.  **Sorting**: Sort these suffixes lexicographically. The suffix array stores the original starting indices of these sorted suffixes.
3.  **Searching**: To find a pattern in the original string, you can now perform a binary search on the suffix array, as it is sorted. This is much faster than a linear scan.

An **LCP (Longest Common Prefix) array** is often built alongside a suffix array to solve even more complex string problems. Efficient construction of a suffix array is complex, often taking O(n log n) or O(n) time.

### 📚 Key Concepts
- **Suffix**: A substring that starts from a particular index and goes to the end of the string.
- **String Algorithms**: A field of computer science dedicated to the efficient processing of strings.
`,
'k-d-tree-conceptual': `
### 💡 Problem Breakdown
A K-D Tree (k-dimensional tree) is a space-partitioning data structure for organizing points in a k-dimensional space. It is a binary tree where each level splits the data along a different dimension.

### ⚙️ Solution Walkthrough
1.  **Build**: To build a K-D Tree, you recursively partition the points.
    - At the root (level 0), you might find the median point along the x-axis. This point becomes the root. All points with a smaller x-value go to the left subtree, and all points with a larger x-value go to the right.
    - At level 1, you split along the y-axis.
    - At level 2, you split along the z-axis (for 3D), and so on, cycling through the dimensions.
2.  **Search**: This structure makes searches like "find all points within this rectangle" (range search) or "find the nearest neighbor to this point" much more efficient than a linear scan, as you can prune entire subtrees that are outside the search area.

### 📚 Key Concepts
- **Space Partitioning**: The core idea of dividing a space into smaller, manageable regions.
- **Multi-dimensional Data**: A data structure for handling data with more than one attribute (e.g., coordinates, feature vectors).
`,
};
