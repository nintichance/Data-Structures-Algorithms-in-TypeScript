"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
class BinaryTree {
    root;
    constructor(value) {
        this.root = new TreeNode(value);
    }
    insert(value) {
        const newNode = new TreeNode(value);
        const traverse = (node) => {
            if (!node)
                return;
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                }
                else {
                    traverse(node.left);
                }
            }
            else {
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    traverse(node.right);
                }
            }
        };
        traverse(this.root);
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
    contains(target) {
        let curr = this.root;
        while (curr) {
            if (curr.value === target)
                return true;
            else if (curr.value > target)
                curr = curr.right;
            else
                curr = curr.left;
        }
        return false;
    }
    dfsInorder() {
        const result = [];
        const traverse = (node) => {
            if (!node)
                return;
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        };
        return result;
    }
    dfsPreorder() {
        const result = [];
        const traverse = (node) => {
            if (!node)
                return;
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        };
        return result;
    }
    dfsPostorder() {
        const result = [];
        const traverse = (node) => {
            if (!node)
                return;
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        };
        return result;
    }
    bfs() {
        const queue = [];
        const result = [];
        queue.push(this.root);
        while (queue.length) {
            const curr = queue.shift();
            result.push(curr.value);
            if (curr.left)
                queue.push(curr.left);
            if (curr.right)
                queue.push(curr.right);
        }
        return result;
    }
}
exports.BinaryTree = BinaryTree;
class TreeNode {
    left;
    right;
    value;
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null;
    }
}
//# sourceMappingURL=binarytree.js.map