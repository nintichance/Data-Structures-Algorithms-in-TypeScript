"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = require("./arrays");
describe('removeEven', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    it('removes all even indexed items from array', () => {
        expect((0, arrays_1.removeEven)(arr)).toEqual([1, 3, 5]);
    });
});
describe('mergeArrays', () => {
    const arr1 = [2, 4, 5, 9];
    const arr2 = [3, 4, 6, 7];
    it('merges two sorted arrays', () => {
        expect((0, arrays_1.mergeArrays)(arr1, arr2)).toEqual([2, 3, 4, 4, 5, 6, 7, 9]);
    });
});
describe('mergeArraysInPlace', () => {
    const arr1 = [2, 4, 5, 9];
    const arr2 = [3, 4, 6, 7];
    it('merges two sorted arrays', () => {
        expect((0, arrays_1.mergeArraysInPlace)(arr1, arr2)).toEqual([2, 3, 4, 4, 5, 6, 7, 9]);
    });
});
//# sourceMappingURL=arrays.test.js.map