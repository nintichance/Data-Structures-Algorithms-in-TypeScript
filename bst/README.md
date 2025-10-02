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
**dfsPreorder**
* root, left, right
**dfsPostorder**
* left, right, root
**bfs**
* leaf nodes of same depth, going up the tree until the root

**BFS**
* traverses the tree level by level
* uses FIFO to traverse the tree 
* is more suitable for searching vertices closer to the given source
* to find shortest path from a vertex *s* to a vertex *v* in an unweighted graph

**DFS**
* DFS traverses the tree subtree by subtree
* DFS using LIFO to traverse the tree
* DFS is more suitable when there are solution aways from the source
* DFS is used to find strongly connected components

**Unweighted Graph**
* is a graph in which the edges do not have weights or costs associated with them
* simply represents the presence of a connection between two verties
* applications
    * yo
    * hei
    * you