export class BST {
    root: Node | null;
    size: number;

    constructor(value: number) {
        this.root = new Node(value);
        this.size = 0;
    }
    // 2,3,12,15,28,36,39,
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

