
// This file MUST be pure JavaScript. No imports, no types.

// Inlined helper to avoid module import issues
const parseNumberArray_DS = (input: string) => {
    if (!input || typeof input !== 'string' || input.trim() === '') return [];
    const parseNumber = (val: any) => {
        const num = typeof val === 'string' ? parseFloat(val) : val;
        if (isNaN(num)) throw new Error(`Invalid number input: "${val}"`);
        return num;
    };
    return input.split(',').map(item => parseNumber(item.trim()));
};

// FIX: Cast window to any to attach property in non-module script context.
(window as any).dataStructuresSolvers = {
    'implement-stack': () => {
        class Stack {
            // FIX: Add property declaration
            items: any[];
            constructor() {
                this.items = [];
            }
            push(item: any) { this.items.push(item); }
            pop() { 
                if (this.isEmpty()) return "Underflow";
                return this.items.pop(); 
            }
            peek() { 
                if (this.isEmpty()) return "Stack is empty";
                return this.items[this.items.length - 1]; 
            }
            isEmpty() { return this.items.length === 0; }
        }
        
        const stack = new Stack();
        let result = [];
        result.push(`isEmpty? ${stack.isEmpty()}`);
        stack.push(10);
        stack.push(20);
        result.push(`Peek: ${stack.peek()}`);
        result.push(`Pop: ${stack.pop()}`);
        result.push(`isEmpty? ${stack.isEmpty()}`);
        result.push(`Final Peek: ${stack.peek()}`);
        return result.join('\n');
    },
    'implement-queue': () => {
        class Queue {
            // FIX: Add property declaration
            items: any[];
            constructor() {
                this.items = [];
            }
            enqueue(item: any) { this.items.push(item); }
            dequeue() { 
                if (this.isEmpty()) return "Underflow";
                return this.items.shift(); 
            }
            front() { 
                if (this.isEmpty()) return "Queue is empty";
                return this.items[0]; 
            }
            isEmpty() { return this.items.length === 0; }
        }
        const queue = new Queue();
        let result = [];
        result.push(`isEmpty? ${queue.isEmpty()}`);
        queue.enqueue(10);
        queue.enqueue(20);
        result.push(`Front: ${queue.front()}`);
        result.push(`Dequeue: ${queue.dequeue()}`);
        result.push(`isEmpty? ${queue.isEmpty()}`);
        result.push(`Final Front: ${queue.front()}`);
        return result.join('\n');
    },
    'implement-singly-linked-list': () => {
        class Node {
            // FIX: Add property declarations
            data: any;
            next: Node | null;
            constructor(data: any, next: Node | null = null) {
                this.data = data;
                this.next = next;
            }
        }
        class LinkedList {
            // FIX: Add property declaration
            head: Node | null;
            constructor() { this.head = null; }
            prepend(data: any) {
                this.head = new Node(data, this.head);
            }
            append(data: any) {
                const newNode = new Node(data);
                if (!this.head) {
                    this.head = newNode;
                    return;
                }
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
            print() {
                let current = this.head;
                const arr = [];
                while (current) {
                    arr.push(current.data);
                    current = current.next;
                }
                return arr.join(' -> ');
            }
        }
        const list = new LinkedList();
        list.append(10);
        list.append(20);
        list.prepend(5);
        return `List: ${list.print()}`;
    },
    'binary-search-tree-traversal': ({arr}: {arr: string}) => {
        const values = parseNumberArray_DS(arr);

        class TreeNode {
            // FIX: Add property declarations
            value: any;
            left: TreeNode | null;
            right: TreeNode | null;
            constructor(value: any) {
                this.value = value;
                this.left = null;
                this.right = null;
            }
        }

        class BST {
            // FIX: Add property declaration
            root: TreeNode | null;
            constructor() { this.root = null; }

            insert(value: any) {
                const newNode = new TreeNode(value);
                if (!this.root) {
                    this.root = newNode;
                    return this;
                }
                let current: TreeNode = this.root;
                while (true) {
                    if (value === current.value) return undefined;
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

            // FIX: Use default parameters to resolve signature error
            inOrder(node: TreeNode | null = this.root, result: any[] = []) {
                if(node) {
                    this.inOrder(node.left, result);
                    result.push(node.value);
                    this.inOrder(node.right, result);
                }
                return result;
            }
            // FIX: Use default parameters to resolve signature error
            preOrder(node: TreeNode | null = this.root, result: any[] = []) {
                if(node) {
                    result.push(node.value);
                    this.preOrder(node.left, result);
                    this.preOrder(node.right, result);
                }
                return result;
            }
            // FIX: Use default parameters to resolve signature error
            postOrder(node: TreeNode | null = this.root, result: any[] = []) {
                if(node) {
                    this.postOrder(node.left, result);
                    this.postOrder(node.right, result);
                    result.push(node.value);
                }
                return result;
            }
        }
        
        const tree = new BST();
        values.forEach(v => tree.insert(v));

        const results = [
            `In-order: ${tree.inOrder().join(', ')}`,
            `Pre-order: ${tree.preOrder().join(', ')}`,
            `Post-order: ${tree.postOrder().join(', ')}`,
        ];
        return results.join('\n');
    },
};