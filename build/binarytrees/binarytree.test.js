"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarytree_1 = require("./binarytree");
xdescribe('BinaryTree', () => {
    let bst;
    beforeEach(() => {
        bst = new binarytree_1.BinaryTree(15);
        bst.insert(3);
        bst.insert(36);
        bst.insert(2);
        bst.insert(12);
        bst.insert(28);
        bst.insert(39);
    });
    describe('contains', () => {
        it('is true if the bst has value', () => {
            expect(bst.contains(3)).toBe(true);
        });
        it('is false if the bst does not have value', () => {
            expect(bst.contains(100)).toBe(false);
        });
    });
    describe('min', () => {
        it('is 2', () => {
            expect(bst.min()).toBe(2);
        });
    });
    describe('max', () => {
        it('is 39', () => {
            expect(bst.max()).toBe(39);
        });
    });
    describe('dfsInorder', () => {
        it('returns the ascending order of the bst (left, root, right recursively)', () => {
            expect(bst.dfsInorder()).toEqual([2, 3, 12, 15, 28, 36, 39]);
        });
    });
    describe('dfsPreorder', () => {
        it('returns root first, then its left child then right child recursively', () => {
            expect(bst.dfsPreorder()).toEqual([15, 3, 2, 12, 36, 28, 39]);
        });
    });
    describe('dfsPostorder', () => {
        it('returns the left child, the right child, then the root recursively', () => {
            expect(bst.dfsPostorder()).toEqual([2, 12, 3, 28, 39, 36, 15]);
        });
    });
    describe('bfs', () => {
        it('returns from root to leaf nodes, left to right, the order of the tree', () => {
            expect(bst.bfs()).toEqual([15, 3, 36, 2, 12, 28, 39]);
        });
    });
});
//# sourceMappingURL=binarytree.test.js.map