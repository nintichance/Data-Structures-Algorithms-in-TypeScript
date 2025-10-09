export class BinaryTree {
    root: TreeNode;
    constructor(value: number) {
        this.root = new TreeNode(value);
    }

    insert(value: number) {
        const newNode = new TreeNode(value);
        const traverse = (node: TreeNode | null) => {
            if (!node) return
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    traverse(node.left)
                }
            } else {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    traverse(node.right)
                }
            }
        }
        traverse(this.root);
    }

    min(): number {
        let curr = this.root;
        while (curr.left) {
            curr = curr.left
        }
        return curr.value;
    }

    max(): number {
        let curr = this.root;
        while(curr.right) {
            curr = curr.right;
        }
        return curr.value;
    }

    contains(target: number): boolean {
        let curr: TreeNode | null = this.root;
        while (curr) {
            if (curr.value === target) return true;
            else if (curr.value > target) curr = curr.right;
            else curr = curr.left;
        }
        return false
    }

    dfsInorder(): number[] {
        const result: number[] = []
        const traverse = (node: TreeNode | null) => {
            if (!node) return 
            traverse(node!.left);
            result.push(node.value)
            traverse(node!.right);
        }
        return result;
    }

    dfsPreorder(): number[] {
        const result: number[] = []
        const traverse = (node: TreeNode | null) => {
            if (!node) return 
            traverse(node!.left);
            result.push(node.value)
            traverse(node!.right);
        }
        return result;
    }

    dfsPostorder(): number[] {
        const result: number[] = []
        const traverse = (node: TreeNode | null) => {
            if (!node) return 
            traverse(node!.left);
            result.push(node.value)
            traverse(node!.right);
        }
        return result;
    }

    bfs(): number[] {
        const queue = [];
        const result: number[] = [];
        queue.push(this.root);
        while(queue.length) {
            const curr = queue.shift();
            result.push(curr!.value);
            if (curr!.left) queue.push(curr!.left);
            if (curr!.right) queue.push(curr!.right);
        }
        return result;
    }
}

class TreeNode {
    left: TreeNode | null;
    right: TreeNode | null;
    value: number;
    constructor(value: number) {
        this.left = null;
        this.value = value;
        this.right = null;
    }
}