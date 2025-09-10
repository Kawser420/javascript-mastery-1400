

export const explanations: Record<string, string> = {
    'implement-stack': `
### 💡 Problem Breakdown
The task is to implement a Stack, a fundamental data structure. A stack follows the **LIFO** (Last-In, First-Out) principle. Think of it like a stack of plates: the last plate you put on top is the first one you take off. We need to create a class that has the following core methods:
-   **push**: Add an element to the top of the stack.
-   **pop**: Remove and return the element from the top of the stack.
-   **peek**: Look at the top element without removing it.
-   **The \`isEmpty\` method**: Check if the stack is empty.

### ⚙️ Solution Walkthrough
A JavaScript \`Array\` can be easily adapted to behave like a stack.

\`\`\`javascript
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) { this.items.push(item); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
}
\`\`\`

1.  **\`constructor\`**: Initializes an empty array \`this.items\` to store the stack's elements.
2.  **\`push(item)\`**: We use the built-in \`Array.prototype.push()\` method. It conveniently adds one or more elements to the end of an array, which perfectly models adding to the "top" of our stack.
3.  **\`pop()\`**: We use the built-in \`Array.prototype.pop()\` method. It removes the last element from an array and returns that element. This perfectly models the LIFO principle.
4.  **\`peek()\`**: To look at the top element without removing it, we simply access the last element of the array using its index, which is always \`length - 1\`.
5.  **The \`isEmpty()\` method**: We check if the internal array's length is 0.

### 📚 Key Concepts
-   **Data Structure**: A particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently.
-   **Stack**: A linear data structure which follows a LIFO (Last-In, First-Out) order.
-   **Abstraction**: We are creating a new abstraction (\`Stack\`) using an existing one (\`Array\`). We are exposing a limited, specific set of methods to interact with our data, hiding the underlying array implementation.
`,
    'implement-queue': `
### 💡 Problem Breakdown
This problem requires implementing a Queue, another fundamental data structure. A queue follows the **FIFO** (First-In, First-Out) principle. Think of a queue of people waiting in line: the first person to get in line is the first person to be served. The required methods are:
-   **The \`enqueue\` method**: Add an element to the back of the queue.
-   **The \`dequeue\` method**: Remove and return the element from the front of the queue.
-   **The \`front\` method**: Look at the front element without removing it.
-   **The \`isEmpty\` method**: Check if the queue is empty.

### ⚙️ Solution Walkthrough
Similar to a stack, a JavaScript \`Array\` can be used to build a queue.

\`\`\`javascript
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) { this.items.push(item); }
    dequeue() { return this.items.shift(); }
    front() { return this.items[0]; }
    isEmpty() { return this.items.length === 0; }
}
\`\`\`

1.  **\`constructor\`**: Initializes an empty array \`this.items\` to hold the queue data.
2.  **\`enqueue(item)\`**: We use \`Array.prototype.push()\` to add new items. This adds the item to the end of the array, which represents the "back" of our queue.
3.  **The \`dequeue()\` method**: We use the built-in \`Array.prototype.shift()\` method. This method removes the **first** element from an array and returns that removed element. This models the FIFO principle.
4.  **The \`front()\` method**: To see the front element, we simply access the first element of the array at index \`0\`.
5.  **The \`isEmpty()\` method**: Checks if the array's length is 0.

**Note on Performance**: Using \`shift()\` on very large arrays can be inefficient because it requires re-indexing all subsequent elements. For performance-critical applications, a queue is often implemented with a Linked List or a different strategy.

### 📚 Key Concepts
-   **Queue**: A linear data structure which follows a FIFO (First-In, First-Out) order.
-   **\`Array.prototype.shift()\`**: A method that removes the first element from an array and returns it. This operation can be slow on large arrays.
`,
    'implement-singly-linked-list': `
### 💡 Problem Breakdown
A Linked List is a linear data structure where elements are not stored at contiguous memory locations. The elements (\`Nodes\`) are linked using pointers. Each node contains its data and a reference (a \`"pointer"\`) to the next node in the sequence. The last node points to \`null\`. We need to implement a basic singly linked list with methods to add nodes to the end (\`append\`) and beginning (\`prepend\`).

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
    append(data) { /* ... */ }
    prepend(data) { /* ... */ }
}
\`\`\`
-   **The \`Node\` Class**: A simple class to hold the \`data\` and the \`next\` pointer.
-   **The \`LinkedList\` Class**:
    1.  **The \`constructor\` method**: Initializes the list with a \`head\` property set to \`null\`, indicating an empty list.
    2.  **The \`prepend(data)\` method**: To add a node to the beginning:
        *   Create a new \`Node\` with the given \`data\`.
        *   Set the new node's \`next\` pointer to the current \`head\`.
        *   Update the list's \`head\` to be this new node.
    3.  **The \`append(data)\` method**: To add a node to the end:
        *   If the list is empty (\`!this.head\`), simply make the new node the \`head\`.
        *   Otherwise, start at the \`head\` and traverse the list (\`while (current.next)\`) until you reach the last node (the one whose \`next\` is \`null\`).
        *   Set that last node's \`next\` pointer to the new node.

### 📚 Key Concepts
-   **Linked List**: A dynamic data structure consisting of a sequence of nodes.
-   **Node**: An object containing data and a reference (pointer) to the next node.
-   **Head**: The first node in a linked list. It's the only entry point to traverse the list.
-   **Traversal**: The process of visiting each node in the list, usually by starting at the head and following the \`next\` pointers.
`,
    'binary-search-tree-traversal': `
### 💡 Problem Breakdown
A Binary Search Tree (BST) is a node-based binary tree data structure which has the following properties:
-   The left subtree of a node contains only nodes with keys lesser than the node’s key.
-   The right subtree of a node contains only nodes with keys greater than the node’s key.
-   The left and right subtree each must also be a binary search tree.

The task is to implement a BST and three common ways to traverse (visit every node) it: In-order, Pre-order, and Post-order. These are depth-first traversals.

### ⚙️ Solution Walkthrough
The solution uses recursion to implement the traversals.

\`\`\`javascript
class TreeNode { /* ... */ }

class BST {
    // ... insert method ...
    inOrder(node = this.root, arr = []) { 
        if (node) {
            this.inOrder(node.left, arr); 
            arr.push(node.value); 
            this.inOrder(node.right, arr);
        } 
        return arr; 
    }
    // ... other traversals ...
}
\`\`\`

1.  **The \`insert(value)\` method**: A method to add new values. It starts at the root and moves left or right depending on the value until it finds an empty spot to place the new node, maintaining the BST property.
2.  **Traversals**: The three main traversals are defined by the order in which they visit the "root" node relative to its left and right children.
    *   **In-order (Left, Root, Right)**: Recursively visits the left subtree, then processes the current node's value, then recursively visits the right subtree. **For a BST, this traversal visits the nodes in ascending sorted order.**
    *   **Pre-order (Root, Left, Right)**: Processes the current node's value first, then recursively visits the left and right subtrees. This is useful for creating a copy of the tree.
    *   **Post-order (Left, Right, Root)**: Recursively visits the left and right subtrees first, then processes the current node's value. This is useful for deleting nodes from the tree.

### 📚 Key Concepts
-   **Binary Search Tree (BST)**: A sorted tree data structure that allows for fast lookups, additions, and removals (O(log n) on average).
-   **Tree Traversal**: The process of visiting each node in a tree data structure exactly once.
-   **Recursion**: The traversal algorithms are naturally recursive, as they perform the same operation (visit left/root/right) on each subtree.
`,
};