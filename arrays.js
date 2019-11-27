// Write a function that takes an array of characters and reverses the letters in place.

// We swap the first and last characters, then the second and second-to-last characters, and so on until we reach the middle.

function reverse(arrayOfChars) {
  // set value for first character
  let leftIndex = 0;
  // set value for last character
  let rightIndex = arrayOfChars.length - 1;

  // loop through array of characters
  while (leftIndex < rightIndex) {

    // swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // move towards middle
    leftIndex++;
    rightIndex++;
  }
}
// complexity: O(n) time and O(1) space

console.log(reverse(['123']));
