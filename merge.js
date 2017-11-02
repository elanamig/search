function sort (arr) {
    if (arr.length === 1) return arr;
    return mergeSort (arr);
}

function mergeSort (arr) {
    if (arr.length <= 1) return arr;
    var arr1 = arr.slice(0, arr.length/2);
    var arr2 = arr.slice(arr.length/2);
    return merge (mergeSort(arr1), mergeSort(arr2));
}

function merge (arr1, arr2) {
    var result = [];
    var i = 0, j=0;
    while (i<arr1.length && j<arr2.length) {
        if (j >= arr2.length || arr1[i] < arr2[j]) result.push(arr1[i++]);
        else result.push(arr2[j++]);
    }

    while (i<arr1.length) result.push(i++);
    while (j<arr2.length) result.push (j++);
    return result;
}