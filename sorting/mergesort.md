## Merge Sort

### Time Complexity
* O(n log n) in worst case
* Better than O(n^2) for selection, insertion, and bubble sort

### How to
* Break the problem into sub-problems, iow, divide and conquer
* Given a list of integers in an array, we want to sort the list in increasing order or the value of integers
* In other algorithms, we swapped and exchanged values to sort, which was not very efficient
* We will break the array in halfs
* We will sort the two halfs and then merge them back into the one array
* We can overwrite the values in the original array to save space

```pseudocode
merge(list1, list2, finalList) {
	numList1, numList2 = length(list1)
	i, j, k = 0 // pointers to each array to keep up with what we are comparing as well as the final array's index to replace it
	
	while (i<L1 && j < L2) {
		if (L1(i) <= L2[j]) {
			fin[k] = L1[i]
			i++
		} else {
			fin[k] = L2[j]
			j++
		}
		k++
	}
	
	while (i < L1) {
		// merge remainder
		fin[k] = L1[i]
		k++
		i++
	}
	
	while (j < L2) {
		// merge remainder
		fin[k] = L2[j]
		k++
		j++
	}
	
}
```
* We can further break our subarrays into smaller subarrays.
* From 8 to 4 to 2 and 1 and then you can sort 1 and so on.
* That is the breakout condition
* We will recursively merge the lists together until we've completed the result array
* Mergesort functionality
	* Check if the array is bigger than two elements and then you can start partitioning the arrays
	* Find the mid position to create to two subarrays
	* The left array will be of size mid
		* from 0 to mid -1, left[i] = A[i]
	* The right array will be size length of the array minus mid
		* from mid to A.length - 1
	* Create a recursive call to sort the left sublist
	* Create a recursive call to sort the right sublist
	* Merge the left and right into the result array