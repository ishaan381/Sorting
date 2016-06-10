var bubbleSort = function(arr) {
  var tracker=arr.length-1;
  var unsorted = true
  while (unsorted) {
    var switchInThisLoop = false;
    for (var j=0; j<tracker; j++) {
      if (this.comparison(arr[j], arr[j+1])) {
        switcher(arr, j)
        switchInThisLoop = true;
      }
    }
    tracker--;
    unsorted = switchInThisLoop;
  }

  return arr;
}

var comparison = function(j,j1) {
  return j > j1
}

var switcher = function(arr, j) {
  var oldLeft = arr[j];
  arr[j] = arr[j+1];
  arr[j+1] = oldLeft;
}