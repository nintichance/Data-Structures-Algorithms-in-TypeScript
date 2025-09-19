export function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let midd: number;
    while (left <= right) {
        midd = Math.floor((left + right)/2)
        const curr = nums[midd]
        if (nums[midd] === target) return midd;
        else if (nums[midd] > target) {
            right = midd - 1;
        } else {
            left = midd + 1;
        }
    }
    return -1;
}