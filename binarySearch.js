function binarySearch(target, nums) {
  // see if target appears in nums

  // We think of floorIndex and ceilingIndex as "walls" around the possible positions of our targets, so by -1 below we mean to start our wall "to the left" of the 0th index (we don't mean the last index)
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  // If there isn't at least 1 index between floor and ceiling, we've run out of guesses and the number must not be present.
  while (floorIndex + 1 < ceilingIndex) {

    // Find the index halfway between the floor and ceiling.
    // We have to round down to avoid getting a "half index."
    const totalDistance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(totalDistance / 2);

    const guessValue = nums[guessIndex];

    if (guessValue === target) {
      return true;
    }

    if (guessValue > target) {

      // Target is to the left, so move the ceiling to the left
      ceilingIndex = guessIndex;

    } else {

      // Target is to the right, so move floor to the right
      floorIndex = guessIndex;
    }
  }
  return false;
}

console.log(binarySearch(5, [1, 2, 3, 4, 6, 7, 8, 9, 10]));
