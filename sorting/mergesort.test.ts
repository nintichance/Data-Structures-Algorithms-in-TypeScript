import { mergeSort } from './mergesort'

describe('mergeSort', ()=> {
    const unsortedArr = [9,3,4,6,5,7,2,4];
    fit('sorts an unsorted array', () => {
        const result = mergeSort(unsortedArr)
        expect(result).toEqual([2,3,4,4,5,6,7,9]);
    })
})