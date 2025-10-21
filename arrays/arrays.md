## Arrays

### Built-in Functions

``` javascript
array.push() // O(1)

array.pop() // O(1)

array.shift() // O(n) removes the first element from the array

array.unshift() // O(n) inserts an element at the beginning of the array

array.splice() // O(n) can add or remove elements from an array. Takes in two or more parameters, the first is the index where new elements should be spliced in. The second parameter is the number of elements to should be removed, which will be 0 if none. The rest of the parameters are the new elements to be added.

var array = [1, 3, 5, 'seven', 10]

array.splice(2,0,'four'); // [1, 3, 'four', 5, 'seven', 10]

array.splice(2,3) // [1, 3, 10]

array.slice() // O(n) slices out a piece of the array into a new array. First parameter is where the start of the slicing takes place. The second parameter is the index number up to which the array should be sliced out. If there is no second param, the new array starts from the first param to the end of the array. Slice is inclusive of the first parameter and exclusive of the second parameter.

var array = [1,'two',3,4,5,'six','seven',8,'nine',10]

array.slice(4) // [5,'six','seven',8,'nine',10]

var newArray2 = array.slice(4,7);
// [5,'six','seven']

array.concat() // O(n) adds two arrays together

for (let element of array) {} // O(n) loops over iterable items

```

### Scoping

* var is globally scoped
* let is block scoped
* const is block scoped
