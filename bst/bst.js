class BinarySearchTree {
    constructor(value){
        this.root = new TreeNode(value)
    }

    insert(value) {
        const newNode = new TreeNode(value)
        const traverse = (node) => {
            if (!node) return
            if (value > node.value) {
                if (node.right) {
                    traverse(node.right)
                } else {
                    node.right = newNode
                }
            } else if (value < node.value) {
                if (node.left) {
                    traverse(node.left)
                } else {
                    node.left = newNode
                }
            }
        }
        traverse(this.root)
    }

    dfsInorder() {
        const result = []
        const traverse = (node) => {
            if (!node) return  
            traverse(node.left)
            result.push(node.value)
            traverse(node.right)
        }
        traverse(this.root)
        return result
    }
}

class TreeNode {
    constructor(value){
        this.left = null
        this.value = value
        this.right = null
    }
}


/** 
            15
        3        36
    2     12   28   39
 */


















const bst = new BinarySearchTree(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)
console.log(bst.dfsInorder()) //[2,3,12,15,28,36,39]

/** 
            15
        3        36
    2     12   28   39
 */