
function searchPractice(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let midd: number;

    while(left <= right) {
        midd = Math.floor((left+right)/2)
        if (nums[midd] === target) return midd ;
        else if (target < nums[midd]){
            right = midd - 1;
        } else {
            left = midd + 1;
        }
    }
    return -1;
}

const list = [1,2,3,4,5,6,7,8,9,10]
const numToFind = 11
console.log("WHERE IS NUM IN LIST", searchPractice(list, numToFind))