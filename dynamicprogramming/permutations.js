// recursion always returns a tree
// use backtracking to generate all possible permutations of a given string s
// Start from the Oth index and for each index i, swap the values s[i] with all the elements in its right, from i+1 to n-1
// and recurse to the index i +1
// if the index i is equal to n, store the resultaant string in ans[]
// swap back the values to the original values to initiate backtracking
// last sort the answer arr
function recurseToPermutate(index, arr, ans) {
    if (index === arr.length) {
        ans.add(arr.join());
        return;
    }
    for (let i=index; i<arr.length;i++) {
        [arr[index],arr[i]] = [arr[i], arr[index]];
        recurseToPermutate(index+1, arr, ans);
        [arr[index],arr[i]] = [arr[i], arr[index]];
    }
    return ans;
}

function findPermutations(arr) {
    let result = new Set();
    recurseToPermutate(0, arr, result)
    return Array.from(result);
}

console.log(findPermutations(["beyonce", "byetwice", "beyoncé", "beytwicé"]))