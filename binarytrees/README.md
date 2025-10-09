# Trees

## Basic Tree Properties

### Terminologies and Formulas
* Subtree: a collection of nodes formed by a node and its descendants
* Degree of a node: total number of children in a node
* Length of a path: number of edges in a path
* Depth of node *n*: length of the path from node *n* to the root node. Root node depth is 0.
* Level of a node *n*: (depth of node) + 1
* Height of a node: lenngth of the path from *n* to its deepest descendant. Height of leaf nodes is always 0.
* Hiegh of a tree: height of its root node.

### Commonly Used Trees
* Binary Trees
* Binary Search Trees
* AVL Trees
* Red-Black Trees
* 2-3 Trees

### The N-ary Tree
* In graph theory, an N-ary tree is a rooted tree in which each node has nore more than N children. 

**Binary Tree**

* Complete: all the levels of the tree are fully filled, except for the last level of the tree, which can be filled from left to right. 
* Full: Every node has 0 or 2 children, no node can have 1 child. 
* Perfect: perfect tree where there are two nodes per parent, except for the leaf nodes who are all at the same level

**Balanced Tree**

* A binary tree is height-balanced if, for each node in the tree, the difference betweren the height of the right subtree and the left subtree is at most one: |Height(LeftSubTree) - Height(RightSubTree)|<= 1
* High-level algorithm
	1. Start from the leaf nodes and move towards the root
	2. Along with traversing the tree, compute the height of the left-subtree and right-subtree of each node. 
	3. At each node, check if the difference between the height of the left and right sub-tree is more than 1. If so, then it means that the tree is not balanced
	4. If you have completely traversed the tree and haven't caught the aboive condition, then the tree is blaanced. 

**Complete Binary Trees**

* All the levels are completely filled except possibly the last one
* Nodes at the last level are as far left as possible
* The total number of nodes in a complete binary are between 2^height <= nodes <= 2^(height-1). So if the height is 2, we can have between 2 and 4 nodes. 
* The total number of non-leaf nodes (*n*) in a complete binary tree of height "h" are expressed as: 2^(height-1) <= *n* <= (2*height) - 1. So if the height is 3, we will have between 4 and 5 non-leaf nodes

**Skewed Binary Trees**

* are binary trees where all the nodes except one have one and only one child. All of the children nodes are either left or right child nodes, so the entire tree is positioned to the left of the right side. 
* This type of tree should be avoided at all costss because the complexity of oeprations will be high. 

**Binary Search Tree**

* a special kind og tree where each node of the tree has key-value pairs and the key-value pairs can be anything like (username, bank) or (employee, employeeIDi)
* For all the nodes in a BST, all the nodes in the left subtree are less than the value of the parent node. And vice versa on the right. 

**Deletion in a Binary Search Tree**

* To delete a node, search for it and once found, youu will reallocate its left and right subtree, then you'll remove the node from the BST
* Four possible cases:
		
		1. deleting from an empty tree
		2. deleting a node with no children (leaf node)
		3. deleting a node which only has one child (left or right)
		4. deleting a node with two children

		
**Deleting a node with one child**

* Search for the node, when it is found, check how many children it has. If it only has one child, check the parent node to see if the current node is the left of the right child then replace its child node with the current node. 

**Deleting a node with two children**

1. From the given node to be deleted, find either the node with the smallest value in the right subtree or the node with the largest value in the left subtree. Supposed you want to find the smallest value in the right subtree, you do this by moving on to every node's left child until the last left child is reached.
2. Replace the node to be deleted with the node found. 
3. Finally, delete the node found which is either the smallest in the right subtree or the largest in the left subtreee. You will also have to cater for cases if the smallest node in the right sub-tree has a right child. 

### AVL Tree

* Is a Binary Search Tree in which for everry internal node *v* of the tree *T*, the heights of *v*'s children can differ by most 1
*  It is a balanced tree
*  If at any point their ddifference becomes more than one, steps are taken to re-balance the tree

**Time Complexity**

* For BSTs, Insertion, Deletion, and Search are O(height of Tree)
* For skewed trees, the worst case is O(number of nodes)
* For balanced trees, the best-case scenario is O(log(n)

**AVL Insertion**

* Done the same as regular BSTs, however, it re-balances the tree after insertion
* We perform a 'rotation' to re-balance the tree
		* Case 1: Left-left (the tree is balanced heavier towards the left, so we need to shift the tree right)
				* will rotate the root node towards right
				* the original left child of the root node will become the new root node
				* the original right child of the original left child will become the new right child (the old root node's)'s left node

### Red-Black Tree

* Is another type of self-balancing Binary Search Tree
* The nodes of the tree are either red or black
* Colored nodes help with re-balancing trees
* Properties
		* The root is always **black**
		* Two **Red** nodes cannot be adjacent, no red parent can have a red child, vice versa
		* Each path from the root to null contains the same number of **black** colored nodes
		* The color of the *null* nodes is considered **black**
* AVL trees are technically "more balanced" than Red-Black trees; however, they take more toations during insertion and deletion than red-black trees.
		* Search-intensive applications where insertion and deletion is not frequent, use an AVL tree; otherwise, use red-black trees

### 2-3 Tree

* another form of search tree, but differs from BSTs
* balanced and ordered search tree that provides efficient storage mechanism to gaurantee fast operations	

		

				