export declare class BST {
    root: Node | null;
    size: number;
    constructor(value: number);
    insert(value: number): void;
    min(): number;
    max(): number;
    contains(value: number): boolean;
    dfsInorder(): number[];
    dfsPreorder(): number[];
    dfsPostorder(): number[];
    bfs(): number[];
    kthMax(node: Node | null, k: number): number;
    findAncestors(node: Node | null, descendant: number): number[];
    findHeight(): number;
}
declare class Node {
    value: number;
    left: Node | null;
    right: Node | null;
    constructor(value: number);
}
export {};
//# sourceMappingURL=bst.d.ts.map