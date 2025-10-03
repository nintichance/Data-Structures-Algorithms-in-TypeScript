Binary Search Trees

*Trees are a hierarchal ds*

**Binary tree**
* is a tree where each node has a maximum of two children

**Binary search tree**
* Naturally stays sorted
* It is balanced when the left and right sides have about the same amount of nodes, if the nodes are the same, it is a perfect tree
* Extremely fast for insertion and deletion, even if the bst is large

**dfsInorder**
* left, root, right
* returns the nodes in ascending order
* can reverse inorder to get descending order

**dfsPreorder**
* root, left, right
* can be used to create a copy of the tree
can be used to get prefix expressions of an expression tree
    * is a binary tree in which each internal node corresponds to the operator and each leaf node corresponds to the operand
* can be used to create a mirror image of a tree
**dfsPostorder**
* left, right, root
* used to delete every node of the tree
**bfs**
* leaf nodes of same depth, going up the tree until the root
* can be used for zigzag traversal of the tree
* can connect the parallel nodes of the tree

**BFS**
* traverses the tree level by level
* uses FIFO to traverse the tree 
* is more suitable for searching vertices closer to the given source


**DFS**
* traverses the tree subtree by subtree
* using LIFO to traverse the tree
* is more suitable when there are solution aways from the source
