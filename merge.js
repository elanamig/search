function sort (arr) {
    //var arr1 = [], arr2 = [];
    //arr = [3, 4, 2, 1];
    if (arr.length === 1) {
        return arr;
    }

    return mergeSort (arr);
}

function mergeSort (arr) {
    if (arr.length <= 1) return arr;
    var arr1 = arr.slice(0, Math.floor(arr.length/2));
    var arr2 = arr.slice(Math.floor(arr.length/2));
    return merge (mergeSort(arr1), mergeSort(arr2));
}

function merge (arr1, arr2) {
    var result = [];
    var i = 0, j=0;
    while (i<arr1.length || j<arr2.length) {
        if (j >= arr2.length || arr1[i] < arr2[j]) result.push(arr1[i++]);
        else result.push(arr2[j++]);
    }
    return result;
}