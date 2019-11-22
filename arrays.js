// Merging Meeting Times

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// function mergeRanges(meetingTimes) {
//   let meetingArray = [];
//     Object.keys(meetingTimes).map(function (key) {
//     // return [Number(key), meetingTimes[key]]
//     let tempArray = [];
//     tempArray.push(meetingTimes[key])
//     tempArray = tempArray.flat(2)
//     meetingArray.push(tempArray);
//   })
//   console.log(meetingArray);
// }
//
// let test =
//   // [
//     { startTime: 0,  endTime: 1 }
//     // { startTime: 3,  endTime: 5 },
//     // { startTime: 4,  endTime: 8 },
//     // { startTime: 10, endTime: 12 },
//     // { startTime: 9,  endTime: 10 },
//   // ]
//
// // console.log(mergeRanges(test));
// mergeRanges(test)

// Write a function that takes an array of characters and reverses the letters in place. ↴

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

reverse('bumblebee')
