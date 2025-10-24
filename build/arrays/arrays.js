"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEven = removeEven;
exports.mergeArrays = mergeArrays;
exports.mergeArraysInPlace = mergeArraysInPlace;
function removeEven(arr) {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] % 2 == 0) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
function mergeArrays(nums1, nums2) {
    let result = [];
    let p1 = 0;
    let p2 = 0;
    while (p1 < nums1.length - 1 && p2 < nums2.length - 1) {
        if (nums1[p1] > nums2[p2]) {
            result.push(nums2[p2]);
            p2++;
        }
        else {
            result.push(nums1[p1]);
            p1++;
        }
    }
    nums1[p1] > nums2[p2] ? mergeRemainder(result, nums2, p2, nums1, p1) : mergeRemainder(result, nums1, p1, nums2, p2);
    return result;
}
function mergeRemainder(result, arr, i, arr2, i2) {
    while (i < arr.length) {
        result.push(arr[i]);
        i++;
    }
    while (i2 < arr2.length) {
        result.push(arr2[i2]);
        i2++;
    }
}
function mergeArraysInPlace(nums1, nums2) {
    let p1 = 0;
    let p2 = 0;
    /*
    const arr1 = [2,4,5,9];
    const arr2 = [3,4,6,7];
    p1=0,p2=0
    nums1 = [2,3,4,5,9]
    p1=1,p1=1
    nums1 = [2,3,4,4,5,9]
    p1=2,p2=2
    nums=[2,3,4,4,5,9]
    
    */
    while (p2 < nums2.length) {
        if (nums1[p1] < nums2[p2]) {
            nums1.splice(p1 + 1, 0, nums2[p2]);
            p2++;
        }
        else if (nums1[p1] > nums2[p2]) {
            nums1.splice(p1, 0, nums2[p2]);
            p1++;
        }
    }
    console.log("YOHEI", nums1);
    return nums1;
}
//# sourceMappingURL=arrays.js.map