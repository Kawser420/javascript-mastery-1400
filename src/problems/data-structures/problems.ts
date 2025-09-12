
import type { Problem } from "../../types";

export const problems: Problem[] = [
  {
    id: "implement-stack",
    title: "Implement a Stack",
    description: "Implement a Stack class with `push`, `pop`, `peek`, and `isEmpty` methods. A stack is a LIFO (Last-In, First-Out) data structure.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Stack",
  },
  {
    id: "implement-queue",
    title: "Implement a Queue",
    description: "Implement a Queue class with `enqueue`, `dequeue`, `front`, and `isEmpty` methods. A queue is a FIFO (First-In, First-Out) data structure.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Queue",
  },
  {
    id: "implement-singly-linked-list",
    title: "Implement a Singly Linked List",
    description: "Implement a Singly Linked List with methods to `append`, `prepend`, `delete`, and `find`.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Linked List",
  },
  {
    id: "implement-doubly-linked-list",
    title: "Implement a Doubly Linked List",
    description: "Implement a Doubly Linked List, which includes nodes with pointers to both the next and previous nodes.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Doubly Linked List",
  },
  {
    id: "implement-hash-table",
    title: "Implement a Hash Table",
    description: "Implement a basic Hash Table class with `set`, `get`, and `remove` methods, including a simple hashing function.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Hash Table",
  },
  {
    id: "binary-search-tree-insertion",
    title: "Binary Search Tree: Insertion",
    description: "Implement a Binary Search Tree (BST) class and an `insert` method that adds new values while maintaining the BST property.",
    category: "Data Structures",
    inputs: [{ id: "arr", label: "Values to insert (comma-separated)", type: "text", defaultValue: "8,3,10,1,6,14" }],
    buttonText: "Insert and Verify",
  },
  {
    id: "binary-search-tree-find",
    title: "Binary Search Tree: Find",
    description: "Add a `find` method to the BST class that returns `true` if a value exists in the tree and `false` otherwise.",
    category: "Data Structures",
    inputs: [{ id: "arr", label: "Values to insert", type: "text", defaultValue: "8,3,10,1,6,14" }],
    buttonText: "Find value 6",
  },
  {
    id: "binary-search-tree-traversal",
    title: "Binary Search Tree: Traversals",
    description: "Implement the three main DFS traversal methods for a BST: In-order, Pre-order, and Post-order.",
    category: "Data Structures",
    inputs: [{ id: "arr", label: "Values to insert", type: "text", defaultValue: "8,3,10,1,6,14" }],
    buttonText: "Traverse BST",
  },
  {
    id: "tree-bfs-traversal",
    title: "Tree: Breadth-First Search (BFS)",
    description: "Implement a Breadth-First Search (BFS) traversal method for a Binary Search Tree, which visits nodes level by level.",
    category: "Data Structures",
    inputs: [{ id: "arr", label: "Values to insert", type: "text", defaultValue: "8,3,10,1,6,14" }],
    buttonText: "Run BFS",
  },
  {
    id: "implement-graph-conceptual",
    title: "Graph Representation (Conceptual)",
    description: "Explain the two common ways to represent a graph: an Adjacency List and an Adjacency Matrix.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Representations",
  },
  {
    id: "graph-dfs-traversal-conceptual",
    title: "Graph: Depth-First Search (DFS)",
    description: "Implement a Depth-First Search (DFS) traversal for a graph represented by an Adjacency List.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Run DFS (Conceptual)",
  },
  {
    id: "graph-bfs-traversal-conceptual",
    title: "Graph: Breadth-First Search (BFS)",
    description: "Implement a Breadth-First Search (BFS) traversal for a graph represented by an Adjacency List.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Run BFS (Conceptual)",
  },
  {
    id: "implement-trie",
    title: "Implement a Trie (Prefix Tree)",
    description: "Implement a Trie data structure with `insert` and `search` methods. A Trie is efficient for storing and retrieving strings.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Trie",
  },
  {
    id: "implement-max-heap",
    title: "Implement a Max Heap",
    description: "Implement a Max Heap data structure with `insert` and `extractMax` methods. A heap is a specialized tree-based data structure.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Max Heap",
  },
  {
    id: "implement-min-heap",
    title: "Implement a Min Heap",
    description: "Implement a Min Heap data structure with `insert` and `extractMin` methods.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Min Heap",
  },
  {
    id: "queue-from-stacks",
    title: "Queue from Two Stacks",
    description: "Implement a Queue using two Stacks. The implemented queue should support the enqueue and dequeue operations.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Queue",
  },
  {
    id: "stack-from-queues",
    title: "Stack from Two Queues",
    description: "Implement a Stack using two Queues. The implemented stack should support the push and pop operations.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Stack",
  },
  {
    id: "linked-list-find-middle",
    title: "Linked List: Find Middle Element",
    description: "Write a function to find the middle element of a singly linked list in one pass.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Find Middle (Conceptual)",
  },
  {
    id: "linked-list-detect-cycle",
    title: "Linked List: Detect Cycle",
    description: "Write a function that determines if a linked list has a cycle in it.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Detect Cycle (Conceptual)",
  },
  {
    id: "linked-list-reverse",
    title: "Linked List: Reverse",
    description: "Write a function to reverse a singly linked list.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Reverse List (Conceptual)",
  },
  {
    id: "bst-validation",
    title: "Validate Binary Search Tree",
    description: "Write a function to check if a binary tree is a valid Binary Search Tree (BST).",
    category: "Data Structures",
    inputs: [],
    buttonText: "Validate BST (Conceptual)",
  },
  {
    id: "bst-min-max",
    title: "BST: Find Min and Max",
    description: "Write functions to find the minimum and maximum values in a Binary Search Tree.",
    category: "Data Structures",
    inputs: [{ id: "arr", label: "Values to insert", type: "text", defaultValue: "8,3,10,1,6,14" }],
    buttonText: "Find Min/Max",
  },
  {
    id: "bst-height",
    title: "BST: Find Height",
    description: "Write a function to calculate the height (or depth) of a binary tree.",
    category: "Data Structures",
    inputs: [{ id: "arr", label: "Values to insert", type: "text", defaultValue: "8,3,10,1,6,14" }],
    buttonText: "Calculate Height",
  },
  {
    id: "bst-is-balanced",
    title: "Check if Binary Tree is Balanced",
    description: "Write a function to determine if a binary tree is height-balanced (the depths of the two subtrees of every node never differ by more than one).",
    category: "Data Structures",
    inputs: [],
    buttonText: "Check Balance (Conceptual)",
  },
  {
    id: "bst-level-order-traversal",
    title: "BST: Level Order Traversal",
    description: "Given a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
    category: "Data Structures",
    inputs: [{ id: "arr", label: "Values to insert (JSON array with nulls)", type: "text", defaultValue: "[3,9,20,null,null,15,7]" }],
    buttonText: "Traverse by Level",
  },
  {
    id: "bst-lowest-common-ancestor",
    title: "Lowest Common Ancestor of a BST",
    description: "Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Find LCA (Conceptual)",
  },
  {
    id: "implement-priority-queue",
    title: "Implement a Priority Queue",
    description: "Implement a Priority Queue using a Min Heap, supporting `enqueue` with a priority and `dequeue`.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Priority Queue",
  },
  {
    id: "hash-table-collision-handling",
    title: "Hash Table Collision Handling (Conceptual)",
    description: "Explain the two common methods for handling hash collisions: Separate Chaining and Open Addressing (e.g., Linear Probing).",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Collision Handling",
  },
  {
    id: "linked-list-remove-duplicates",
    title: "Linked List: Remove Duplicates",
    description: "Write code to remove duplicates from an unsorted linked list.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Remove Duplicates (Conceptual)",
  },
  {
    id: "linked-list-find-nth-to-last",
    title: "Linked List: Find Nth to Last Element",
    description: "Implement an algorithm to find the nth to last element of a singly linked list.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Find Nth (Conceptual)",
  },
  {
    id: "implement-deque",
    title: "Implement a Deque",
    description: "Implement a Deque (double-ended queue) with methods like `addFront`, `addRear`, `removeFront`, and `removeRear`.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Deque"
  },
  {
    id: "trie-autocomplete",
    title: "Trie: Autocomplete Suggestions",
    description: "Add a method to the Trie class that returns all words with a given prefix.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Get Suggestions (Conceptual)"
  },
  {
    id: "bst-delete-node",
    title: "Binary Search Tree: Deletion",
    description: "Implement the `delete` method for a BST, handling the three cases: node is a leaf, node has one child, and node has two children.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Delete Node (Conceptual)"
  },
  {
    id: "graph-dijkstra-conceptual",
    title: "Graph: Dijkstra's Algorithm (Conceptual)",
    description: "Explain Dijkstra's algorithm for finding the shortest path between nodes in a weighted graph.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Dijkstra's"
  },
  {
    id: "graph-has-cycle-conceptual",
    title: "Graph: Detect Cycle (Conceptual)",
    description: "Explain how to detect a cycle in a directed graph using DFS and tracking the recursion stack.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Cycle Detection"
  },
  {
    id: "set-data-structure-usage",
    title: "Set Data Structure Usage",
    description: "Demonstrate using a `Set` to efficiently find the number of unique elements in an array.",
    category: "Data Structures",
    inputs: [{ id: "arr", label: "Array with duplicates", type: "text", defaultValue: "1,2,3,2,1,4" }],
    buttonText: "Count Unique"
  },
  {
    id: "map-data-structure-usage",
    title: "Map Data Structure Usage",
    description: "Use a `Map` to create a frequency counter for characters in a string.",
    category: "Data Structures",
    inputs: [{ id: "str", label: "String to count", type: "text", defaultValue: "hello" }],
    buttonText: "Count Frequencies"
  },
  {
    id: "linked-list-is-palindrome",
    title: "Linked List: Is Palindrome",
    description: "Write a function to check if a singly linked list is a palindrome.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Check Palindrome (Conceptual)"
  },
  {
    id: "bst-successor-conceptual",
    title: "BST: In-order Successor",
    description: "Write a function to find the in-order successor of a given node in a Binary Search Tree.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Find Successor (Conceptual)"
  },
  {
    id: "graph-topological-sort-conceptual",
    title: "Graph: Topological Sort (Conceptual)",
    description: "Explain the Topological Sort algorithm for a Directed Acyclic Graph (DAG), used for ordering tasks with dependencies.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain TopoSort"
  },
  {
    id: "lru-cache-conceptual",
    title: "LRU Cache (Conceptual)",
    description: "Explain how to design a Least Recently Used (LRU) cache using a combination of a Hash Map and a Doubly Linked List for O(1) performance.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain LRU Cache"
  },
  {
    id: "bst-from-sorted-array",
    title: "BST from Sorted Array",
    description: "Given a sorted array, write a function to convert it into a height-balanced Binary Search Tree.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Convert Array (Conceptual)"
  },
  {
    id: "implement-adjacency-list",
    title: "Implement Graph (Adjacency List)",
    description: "Implement a Graph class using an Adjacency List with methods to add vertices and edges.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Graph"
  },
  {
    id: "number-of-islands-conceptual",
    title: "Number of Islands (Conceptual)",
    description: "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands using DFS or BFS.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Island Count"
  },
  {
    id: "bst-serialize-deserialize-conceptual",
    title: "Serialize and Deserialize BST",
    description: "Design an algorithm to serialize a Binary Search Tree to a string and deserialize the string back to the BST.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Serialization"
  },
  {
    id: "avl-tree-conceptual",
    title: "AVL Tree (Conceptual)",
    description: "Explain the concept of an AVL tree as a self-balancing binary search tree and the rotations (LL, RR, LR, RL) used to maintain balance.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain AVL Tree"
  },
  {
    id: "red-black-tree-conceptual",
    title: "Red-Black Tree (Conceptual)",
    description: "Explain the concept of a Red-Black Tree, another type of self-balancing BST with specific rules for node coloring.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Red-Black Tree"
  },
  {
    id: "b-tree-conceptual",
    title: "B-Tree (Conceptual)",
    description: "Explain the concept of a B-Tree, a self-balancing tree data structure that maintains sorted data and is commonly used in databases and filesystems.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain B-Tree"
  },
  {
    id: "bloom-filter-conceptual",
    title: "Bloom Filter (Conceptual)",
    description: "Explain the concept of a Bloom Filter, a space-efficient probabilistic data structure used to test whether an element is a member of a set.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Bloom Filter"
  },
  {
    id: "skip-list-conceptual",
    title: "Skip List (Conceptual)",
    description: "Explain the concept of a Skip List, a probabilistic data structure that allows for fast search within an ordered sequence of elements, like a linked list with 'express lanes'.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Skip List"
  },
  {
    id: "graph-clone-conceptual",
    title: "Clone a Graph",
    description: "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Clone Graph (Conceptual)"
  },
  {
    id: "graph-prims-algorithm-conceptual",
    title: "Graph: Prim's Algorithm (Conceptual)",
    description: "Explain Prim's algorithm for finding a Minimum Spanning Tree (MST) for a weighted undirected graph.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Prim's"
  },
  {
    id: "graph-kruskals-algorithm-conceptual",
    title: "Graph: Kruskal's Algorithm (Conceptual)",
    description: "Explain Kruskal's algorithm, another greedy algorithm for finding a Minimum Spanning Tree (MST).",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Kruskal's"
  },
  {
    id: "disjoint-set-union-conceptual",
    title: "Disjoint Set Union (DSU) / Union-Find",
    description: "Explain the Disjoint Set Union data structure, which keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets. It has two primary operations: `find` and `union`.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain DSU"
  },
  {
    id: "fenwick-tree-conceptual",
    title: "Fenwick Tree (Binary Indexed Tree)",
    description: "Explain the Fenwick Tree, a data structure that can efficiently update elements and calculate prefix sums in an array of numbers.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Fenwick Tree"
  },
  {
    id: "segment-tree-conceptual",
    title: "Segment Tree (Conceptual)",
    description: "Explain the Segment Tree, a tree data structure used for storing information about intervals or segments. It allows querying which of the stored segments contain a given point.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Segment Tree"
  },
  {
    id: "linked-list-partition",
    title: "Linked List: Partition",
    description: "Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Partition (Conceptual)"
  },
  {
    id: "linked-list-sum-lists",
    title: "Linked List: Sum Lists",
    description: "You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order. Write a function that adds the two numbers and returns the sum as a linked list.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Sum Lists (Conceptual)"
  },
  {
    id: "bst-tree-to-doubly-linked-list",
    title: "BST to Doubly Linked List",
    description: "Convert a Binary Search Tree into a sorted circular Doubly Linked List in-place.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Convert (Conceptual)"
  },
  {
    id: "graph-bellman-ford-conceptual",
    title: "Graph: Bellman-Ford Algorithm",
    description: "Explain the Bellman-Ford algorithm for finding the shortest paths from a single source vertex to all other vertices in a weighted digraph, which can handle negative edge weights.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Bellman-Ford"
  },
  {
    id: "graph-floyd-warshall-conceptual",
    title: "Graph: Floyd-Warshall Algorithm",
    description: "Explain the Floyd-Warshall algorithm for finding the shortest paths between all pairs of vertices in a weighted graph (all-pairs shortest path problem).",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Floyd-Warshall"
  },
  {
    id: "circular-queue",
    title: "Implement a Circular Queue",
    description: "Implement a Circular Queue using a fixed-size array. This is an efficient way to implement a queue that avoids the O(n) cost of `shift()`.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Test Circular Queue (Conceptual)"
  },
  {
    id: "trie-delete-word",
    title: "Trie: Delete Word",
    description: "Add a method to the Trie class to delete a word, which involves removing nodes that are no longer part of any other word.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Delete Word (Conceptual)"
  },
  {
    id: "heap-heapify-conceptual",
    title: "Heap: Heapify",
    description: "Explain the 'heapify' process, an efficient O(n) algorithm to build a heap from an unsorted array.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Heapify"
  },
  {
    id: "bst-kth-smallest-element",
    title: "BST: Kth Smallest Element",
    description: "Given a Binary Search Tree, write a function to find the kth smallest element in it.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Find Kth Smallest (Conceptual)"
  },
  {
    id: "graph-bipartite-check-conceptual",
    title: "Graph: Bipartite Check",
    description: "Explain how to determine if a graph is bipartite (its vertices can be divided into two disjoint sets such that every edge connects a vertex in one set to one in the other) using BFS or DFS and coloring.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Bipartite Check"
  },
  {
    id: "fenwick-tree-range-sum-conceptual",
    title: "Fenwick Tree: Range Sum",
    description: "Explain how to calculate the sum of a range `[i, j]` using a Fenwick Tree by computing `query(j) - query(i-1)`.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Range Sum"
  },
  {
    id: "segment-tree-range-update-conceptual",
    title: "Segment Tree: Range Update",
    description: "Explain how to perform a range update (e.g., add a value to all elements in a range `[i, j]`) on a Segment Tree using lazy propagation.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Range Update"
  },
  {
    id: "sparse-table-conceptual",
    title: "Sparse Table (Conceptual)",
    description: "Explain the Sparse Table data structure, used for answering range query problems (like Range Minimum Query) in O(1) time after an O(n log n) preprocessing step.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Sparse Table"
  },
  {
    id: "suffix-array-conceptual",
    title: "Suffix Array (Conceptual)",
    description: "Explain the Suffix Array, a data structure that provides a sorted list of all suffixes of a string, used for complex string searching problems.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain Suffix Array"
  },
  {
    id: "k-d-tree-conceptual",
    title: "K-D Tree (Conceptual)",
    description: "Explain the K-D Tree, a space-partitioning data structure for organizing points in a k-dimensional space, used for range searches and nearest neighbor searches.",
    category: "Data Structures",
    inputs: [],
    buttonText: "Explain K-D Tree"
  }
];
