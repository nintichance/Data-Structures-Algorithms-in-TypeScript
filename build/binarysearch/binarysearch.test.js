"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarysearch_1 = require("./binarysearch");
describe('search', () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    it('returns the index of a value if it exists in a list', () => {
        const target = 8;
        expect((0, binarysearch_1.search)(list, target)).toEqual(7);
    });
    it('returns -1 if the value does not exist in a list', () => {
        const target = 11;
        expect((0, binarysearch_1.search)(list, target)).toEqual(-1);
    });
});
//# sourceMappingURL=binarysearch.test.js.map