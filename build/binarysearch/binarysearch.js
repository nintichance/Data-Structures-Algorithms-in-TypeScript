"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = search;
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let midd;
    while (left <= right) {
        midd = Math.floor((left + right) / 2);
        const curr = nums[midd];
        if (nums[midd] === target)
            return midd;
        else if (nums[midd] > target) {
            right = midd - 1;
        }
        else {
            left = midd + 1;
        }
    }
    return -1;
}
//# sourceMappingURL=binarysearch.js.map