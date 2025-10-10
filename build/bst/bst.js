"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
class BST {
    root;
    size;
    constructor(value) {
        this.root = new Node(value);
        this.size = 0;
    }
    insert(value) {
        let newNode = new Node(value);
        const recurseTree = (node) => {
            if (value > node.value) {
                if (!node.right)
                    node.right = newNode;
                else
                    recurseTree(node.right);
            }
            else if (value < node.value) {
                if (!node.left)
                    node.left = newNode;
                else
                    recurseTree(node.left);
            }
        };
        recurseTree(this.root);
    }
    min() {
        let curr = this.root;
        while (curr.left) {
            curr = curr.left;
        }
        return curr.value;
    }
    max() {
        let curr = this.root;
        while (curr.right) {
            curr = curr.right;
        }
        return curr.value;
    }
    contains(value) {
        let curr = this.root;
        while (curr) {
            if (value === curr.value)
                return true;
            else if (value > curr.value)
                curr = curr.right;
            else
                curr = curr.left;
        }
        return false;
    }
    dfsInorder() {
        const arr = [];
        const recurseTree = (node) => {
            if (!node)
                return;
            recurseTree(node.left);
            arr.push(node.value);
            recurseTree(node.right);
        };
        recurseTree(this.root);
        return arr;
    }
    dfsPreorder() {
        const arr = [];
        const recurseTree = (node) => {
            if (!node)
                return;
            arr.push(node.value);
            recurseTree(node.left);
            recurseTree(node.right);
        };
        recurseTree(this.root);
        return arr;
    }
    dfsPostorder() {
        const arr = [];
        const recurseTree = (node) => {
            if (!node)
                return;
            recurseTree(node.left);
            recurseTree(node.right);
            arr.push(node.value);
        };
        recurseTree(this.root);
        return arr;
    }
    bfs() {
        const result = [];
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            const currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return result;
    }
    kthMax(node, k) {
        const result = this.dfsInorder();
        const amount = result.length;
        return result[amount - k];
    }
    findAncestors(node, descendant) {
        const result = [];
        const traverse = (node, d) => {
            if (!node)
                return false;
            if ((traverse(node.left, d) || traverse(node.right, d)) || node.value === d) {
                result.push(node.value);
                return true;
            }
        };
        traverse(this.root, descendant);
        return result;
    }
    findHeight() {
        const traverse = (node) => {
            if (!node)
                return 0;
            const left = traverse(node.left) + 1;
            const right = traverse(node.right) + 1;
            return Math.max(left, right);
        };
        return traverse(this.root);
    }
}
exports.BST = BST;
class Node {
    value;
    left;
    right;
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//# sourceMappingURL=bst.js.map