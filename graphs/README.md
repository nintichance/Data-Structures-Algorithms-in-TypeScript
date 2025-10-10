# Graphs

**Unweighted Graph**
* is a graph in which the edges do not have weights or costs associated with them
* simply represents the presence of a connection between two verties
* applications
    * represents data that is not related in terms of magnitude
    * represent computation flow (dependency resolution?)
    * representation of image segmentation, where pixels are represented as nodes-- and edges represent adjacency relationships
    * representation of information networks, such as the World Wide Web
* real-time applications
    * used to solve puzzles
    * used to represent a circuit diagram
    * used to find if two users are connected
    * used in Hamiltonian graphs which have many practical applications like genome mapping to combine many tiny fragments of genetic code
    * used in computer networks as it represnts the connections between computers in a network as an unweighted graph. 
    * used in social networks
    * represents possible moves in a game
* advantages
    * can be used to implement tree data structures
    * used in many algorithms, both DFS and BFS alike
    * helps optimal visualization of interelated problems which are not related in terms of magnitue
    * simpler to work with than weight graphs (as they do not require the storage or manipulation of edge weights)
    * only considers the presence or absence of a relationship between nodes
    * more space efficient
* disadvantages
    * cannot be used for shortest path evaluation or applications which require the distance between nodes
    * cannot provide information about the strength or cost of connections between nodes

** Weighted graphs**
* has edges which are assigned weights which can represent cost, distance, etc
* applications
    * 2D matrix games: can be used to find the optimal path for maximum sum along starting to ending points and many variations
    * spanning trees: find the minimum cost to traverse all the nodes in a graph
    * constraints graphs: used in scheduling, product design, asset allocation, circuit design, and AI
    * dependency graphs: directed weighted graphs can be used to represent decendencies or precedence order among items. Priority will be assigned to provide a flow in which we will solve the problem or traverse the graph from gighest priority to lowest priority. 
    * compilers: weighted graphs are used for type inference, for data flow analysis, and query optimization in db languages
* real-time applications
    * transportation networks: which path takes least time or distance--GPS
    * document link graphs: count the numbers of views as weights in regards to analyzion relevance of webpages
    * epidemiology: find the maximum distance transmission from an infectious to a healthy person
    * social networking: determining close friends
* advantages
    * represents real-world scenarios better
    * useful when finding optimal path
    * more efficient algorithms: Dijkstra's shortest path algorithm for example because the weights allow search to be optimized, instead of traverse every node, you traverse based on a condition
    * more flexible analysis: can calculate average weights or determine outliers with high or low weights which gives insight into the structure of the graph and relationship between its nodes
    * ability to model uncertainty: can determine the probability of connection between two people
* disadvantages
    * increased complexity which can make it harder to develop and debug algorithms
    * higher memory usage because each edge has an associated weight
    * more difficult to maintain: changes to the weights of the edges can have a ripple effect through the graph, making it harder to add or remove edges or update existing weights
    * not suitable for which a relationship between a node is binary (either present or absent)
    * biased towards certain problems: such as highest weight
