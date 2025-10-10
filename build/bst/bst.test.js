"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bst_1 = require("./bst");
describe('BST', () => {
    let bst;
    beforeEach(() => {
        bst = new bst_1.BST(15);
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
        it('lists the ascending order of the bst (left, root, right recursively)', () => {
            expect(bst.dfsInorder()).toEqual([2, 3, 12, 15, 28, 36, 39]);
        });
    });
    describe('dfsPreorder', () => {
        it('lists root first, then its left child then right child recursively', () => {
            expect(bst.dfsPreorder()).toEqual([15, 3, 2, 12, 36, 28, 39]);
        });
    });
    describe('dfsPostorder', () => {
        it('lists the left child, the right child, then the root recursively', () => {
            expect(bst.dfsPostorder()).toEqual([2, 12, 3, 28, 39, 36, 15]);
        });
    });
    describe('bfs', () => {
        it('lists from root to leaf nodes, left to right, the order of the tree', () => {
            expect(bst.bfs()).toEqual([15, 3, 36, 2, 12, 28, 39]);
        });
    });
    describe('kthMax', () => {
        it('is the fourth maximum number in the tree which is 15', () => {
            expect(bst.kthMax(bst.root, 4)).toEqual(15);
        });
        it('is the second maximum number in the tree which is 15', () => {
            expect(bst.kthMax(bst.root, 2)).toEqual(36);
        });
    });
    describe('findAncestor', () => {
        it('lists the ancestors of a particular node', () => {
            console.log("YO", bst.findAncestors(bst.root, 12));
            expect(bst.findAncestors(bst.root, 12)).toEqual([12, 3, 15]);
        });
    });
    describe('findHeight', () => {
        it('returns the height of the tree', () => {
            expect(bst.findHeight()).toEqual(3);
        });
    });
});
//# sourceMappingURL=bst.test.js.map