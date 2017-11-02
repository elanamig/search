// it single element
// it multiple element
// even odd
// does modify original array

describe('bubbleSort', function() {
  var unsorted;
  var sorted;

  beforeEach(function() {
    unsorted = [15, 25, 5, 17];
    sorted = sort(unsorted);
  });

  it('sort single element', function() {
    expect(sort([2])).equals([2]);
  });

  it('cann sort even numbers', function() {
    expect(sort([2, 6, 0])).equals([0, 2, 6]);
  });

  it('sort multiple elements in asending order', function() {
    expect(sorted).toEqual([5, 15, 17, 25]);
  });

  it('modify the original array in-place', function() {
    expect(unsorted).toEqual(sorted);
  });
})



