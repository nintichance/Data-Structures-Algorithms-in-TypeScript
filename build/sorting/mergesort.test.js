"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergesort_1 = require("./mergesort");
describe('mergeSort', () => {
    const unsortedArr = [9, 3, 4, 6, 5, 7, 2, 4];
    fit('sorts an unsorted array', () => {
        const result = (0, mergesort_1.mergeSort)(unsortedArr);
        console.log("HIHI", (0, mergesort_1.mergeSort)(unsortedArr));
        expect(result).toEqual([2, 3, 4, 4, 5, 6, 7, 9]);
    });
});
//# sourceMappingURL=mergesort.test.js.map