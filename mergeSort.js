function mergeSort(arrayToSort) {

  // Base Case: arrays with < 2 elements are sorted
  if (arrayToSort.length < 2) {
    return arrayToSort;
  }

  // Step 1: divide the array in half
  // We need to round down to avoid getting a "half index"
  const midIndex = Math.floor(arrayToSort.length / 2)

  // array.slice(start, end - exclusive)
  const left = arrayToSort.slice(0, midIndex);
  // starts at midIndex until end of array
  const right = arrayToSort.slice(midIndex);

  // Step 2: sort each half - recursion?
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Step 3: merge the sorted halves
  const sortedArray = [];
  let currentLeftIndex = 0;
  let currentRightIndex = 0;

  while (sortedArray.length < left.length + right.length) {

    // sortedLeft's first element comes next
    // if it's less than sortedRight's first element or
    // if sortedRight is exhausted
    if (currentLeftIndex < left.length &&
        (currentRightIndex === right.length ||
        sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex])) {
      sortedArray.push(sortedLeft[currentLeftIndex]);
      currentLeftIndex += 1;
    } else {
      sortedArray.push(sortedRight[currentRightIndex])
      currentRightIndex += 1;
    }
  }
  return sortedArray;
}

console.log(mergeSort([1, 7, 4, 11, 3, 5, 7, 3, 2]));
