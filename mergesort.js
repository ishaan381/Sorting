function splitArray (arr) {
  if (arr.length%2 === 0) {
    return [arr.slice(0,arr.length/2),arr.slice(arr.length/2)]
  } else {
    return [arr.slice(0,(arr.length+1)/2),arr.slice((arr.length+1)/2)]
  }
}

function merge (arr) {
  var first = arr[0];
  var second = arr[1];
  var returnArr = [];

  while (first.length || second.length) {
    if (!first.length) {
      returnArr.push(second.shift())
    }
    else if (!second.length) {
      returnArr.push(first.shift());
    }
    else {
      if (first[0] > second [0]) {
        returnArr.push(second.shift());
      }
      else {
        returnArr.push(first.shift());
      }
    }
  }

  return returnArr;

}

function mergeSort (arr) {
  if (arr.length < 2) {
    return arr;
  } else if (arr.length===2) {
    if (!arr[0].length && !arr[1].length) {
    var splits = splitArray(arr)
    return merge(splits);
    } 
    else {
      return merge([mergeSort(arr[0]), mergeSort(arr[1])])
    }
  }
  else {
    return mergeSort(splitArray(arr))
  }

}


