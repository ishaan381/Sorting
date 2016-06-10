function splitArray (arr) {
  return [arr.slice(0, arr.length/2), arr.slice(arr.length/2)]
}

function merge (arr1, arr2) {
  var first = 0;
  var second = 0;
  var returnArr = [];

  while (first < arr1.length && second < arr2.length) {
    if (arr1[first] <= arr2[second]) {
      returnArr.push(arr1[first]);
      first++
    }
    else {
      returnArr.push(arr2[second]);
      second++;
    }
  }
  for (; first < arr1.length; first++) {returnArr.push(arr1[first])};
  for (; second < arr2.length; second++) {returnArr.push(arr2[second])};

  return returnArr;

}

function mergeSort (arr) {
  if (arr.length < 2) {
    return arr;
  } 
  else {
    var splits = splitArray(arr);
    return merge(mergeSort(splits[0]), mergeSort(splits[1]));
  };
};


