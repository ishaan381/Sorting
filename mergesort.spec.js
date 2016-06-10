describe('Split Array Function', function() {
  beforeEach(function() {
  })
 it('is able to split array in halves', function() {
    expect( splitArray([4,6,8,2])).toEqual([[4,6],[8,2]]);
  });

  it('is able to split array in halves if odd', function() {
    expect( splitArray([4,6,8,2,5])).toEqual([[4,6,8],[2,5]]);
  });
});

describe('Merge Function', function() {
  beforeEach(function() {
  })
 it('is able to merge two arrays (nested in another) into one sorted new array', function() {
    expect( merge([[8],[3]])).toEqual([3,8]);
  });
 it('is able to merge two arrays (nested in another) into one sorted new array', function() {
    expect( merge([[8,14,27,31],[3,11,30]])).toEqual([3,8,11,14,27,30,31]);
  });


});

describe('Merge Sort', function() {

  beforeEach(function() {

  })




 /* it('handles an empty array', function() {
    expect( bubbleSort([])).toEqual([]);
  });*/
  it('handles a non empty array', function() {
    expect( mergeSort([18,4,28,129,1,0])).toEqual([0,1,4,18,28,129]);
  });
  it('handles a non empty array', function() {
    expect( mergeSort([500,1000])).toEqual([500,1000]);
  });
  it('handles a non empty array', function() {
    expect( mergeSort([10,5])).toEqual([5,10]);
  });
  it('handles a non empty array', function() {
    expect( mergeSort([1888,4,328,129,1,0])).toEqual([0,1,4,129,328,1888]);
  });
  // it('counts comparison calls', function() {
  //   var comparisonSpy = bubbleSort;
  //   spyOn(comparisonSpy)
  //   comparisonSpy([1,3,2]);
  //   expect(comparison).toHaveBeenCalled(2);
  // });
});


