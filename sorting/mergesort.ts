export function mergeSort(arr: number[]): number[] {
    if (arr.length < 2) return arr;
    const midd = Math.floor(arr.length/2);
    const left = arr.slice(0, midd);
    const right = arr.slice(midd, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    while(left.length && right.length) {
        if(left[0]<=right[0]) {
            result.push(left.shift()!)
        } else {
            result.push(right.shift()!)
        }
    }
    while (left.length) result.push(left.shift()!);
    while (right.length) result.push(right.shift()!);

    return result;
}