export class BST {
    root: Node | null;
    size: number;

    constructor(value: number) {
        this.root = new Node(value);
        this.size = 0;
    }

    insert(value: number) {
        let newNode = new Node(value)

        const recurseTree = (node: Node | null) => {
            if (value > node!.value) {
                if (!node!.right) node!.right = newNode;
                else recurseTree(node!.right)
            } else if (value < node!.value) {
                if (!node!.left) 
                    node!.left = newNode;
                else recurseTree(node!.left);
            }
        }
        recurseTree(this.root);
    }

    min(): number {
        let curr = this.root;
        while(curr!.left) {
            curr = curr!.left;
        }
        return curr!.value;
    }

    max(): number {
        let curr = this.root;
        while(curr!.right) {
            curr = curr!.right;
        }
        return curr!.value;
    }

    contains(value: number) {
        let curr = this.root;
        while(curr) {
            if (value === curr.value) return true;
            else if (value > curr.value) curr = curr.right;
            else curr = curr.left;
        }
        return false;
    }

    dfsInorder(): number[] {
        const arr: number[] = [];
        const recurseTree = (node: Node | null) => {
            if (!node) return
            recurseTree(node.left);
            arr.push(node.value);
            recurseTree(node.right);
        }
        recurseTree(this.root);
        return arr;
    }

    dfsPreorder(): number[] {
        const arr: number[] = [];
        const recurseTree = (node: Node | null) => {
            if (!node) return
            arr.push(node.value);
            recurseTree(node.left);
            recurseTree(node.right);
        }
        recurseTree(this.root);
        return arr;
    }

    dfsPostorder(): number[] {
        const arr: number[] = [];
        const recurseTree = (node: Node | null) => {
            if (!node) return
            recurseTree(node.left);
            recurseTree(node.right);
            arr.push(node.value);
        }
        recurseTree(this.root);
        return arr;
    }

    bfs(): number[]{
        const result = [];
        const queue = [];
        queue.push(this.root);

        while(queue.length) {
            const currentNode = queue.shift();
            result.push(currentNode!.value);
            if (currentNode!.left) {
                queue.push(currentNode!.left);
            } 
            if(currentNode!.right){
                queue.push(currentNode!.right);
            }
        }
        return result;
    }

    kthMax(node: Node | null, k: number): number {
        const result = this.dfsInorder()
        const amount = result.length;
        return result[amount - k]; 
    }
}

class Node {
    value: number;
    left: Node | null;
    right: Node | null;
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

