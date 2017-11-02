
function sort (arr, maxIndex) {

      if (maxIndex ===1 || arr.length < 1 ) {
        return arr;
      }
      console.log(maxIndex)
      if (!maxIndex){
        console.log(arr)
        maxIndex = arr.length;
        console.log(maxIndex)
      }
      for (var i=0; i< maxIndex-1; i++){
        if (arr[i] > arr[i+1]){
          var temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
        }
      }
      return sort(arr, maxIndex--);
    }

    
