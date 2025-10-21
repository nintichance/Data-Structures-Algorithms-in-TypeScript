export function removeEven(arr: number[]) {
    for(let i=arr.length; i>=0;i--) {
        if (arr[i] % 2 == 0) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
// const nums1 = [2,4,5,9];
// const nums2 = [3,4,6,7];
export function mergeArrays(nums1: number[], nums2: number[]) {
    let result: number[] = [];
    let p1 = 0;
    let p2 = 0;
    
    // traverse both arrays until the end of nums1 or nums2 is reached
    while (p1 < nums1.length-1 && p2 < nums2.length-1) {
        // if the value at p1 is greater than the value at p2, place the value at p2 into p1 and increment p1 and p2
        if (nums1[p1] > nums2[p2]) {
            result.push(nums2[p2])
            p2++ 
            /*

            */
        } else {
            result.push(nums1[p1])
            p1++; 
            /*
            const nums1 = [2,4,5,9];
            const nums2 = [3,4,6,7];
            p1 = 1, p2 = 0
            result = [2]
            p1=1, p2 = 1
            result = [2,3]
            p1=2,p2=1
            result = [2,3,4]
            p1=2,p2=2
            result = [2,3,4,4]
            p1=3,p2=2
            result = [2,3,4,4,5]
            nums[3] = 9
            nums[2] = 6
            arr = [3,4,6,7]
            arr2 = [2,4,5,9]
            i = 2
            i2 = 3
            result = [2,3,4,4,5,6]
            i = 3
            result = [2,3,4,4,5,6,7]
            i=4
            arr.length = 4
            i2 = 3, arr2[i2] = 9
            result = [2,3,4,4,5,6,7,9]
            */
     
        }
    }
    nums1[p1] > nums2[p2] ? mergeRemainder(result, nums2, p2, nums1, p1) : mergeRemainder(result, nums1, p1, nums2, p2)
    
    return result
}

function mergeRemainder(result: number[], arr: number[], i: number, arr2: number[], i2: number) {
    while (i<arr.length) {
        result.push(arr[i]);
        i++;
    }
    while (i2<arr2.length) {
        result.push(arr2[i2]);
        i2++;
    }
}