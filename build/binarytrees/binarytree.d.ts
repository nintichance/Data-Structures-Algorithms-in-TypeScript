export declare class BinaryTree {
    root: TreeNode;
    constructor(value: number);
    insert(value: number): void;
    min(): number;
    max(): number;
    contains(target: number): boolean;
    dfsInorder(): number[];
    dfsPreorder(): number[];
    dfsPostorder(): number[];
    bfs(): number[];
}
declare class TreeNode {
    left: TreeNode | null;
    right: TreeNode | null;
    value: number;
    constructor(value: number);
}
export {};
//# sourceMappingURL=binarytree.d.ts.map