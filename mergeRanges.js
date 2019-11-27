// Write a function mergeRanges() that takes an array of multiple meeting time rangers and returns an array of condensed ranges.

// For example:
// {startTime: 2, endTime: 3} meeting from 10:00 - 10:30 am
// {startTime: 6, endTime: 9} meeting from 12:00 - 1:30 pm

// For example, given:
// [
// { startTime: 0,  endTime: 1 },
// { startTime: 3,  endTime: 5 },
// { startTime: 4,  endTime: 8 },
// { startTime: 10, endTime: 12 },
// { startTime: 9,  endTime: 10 },
// ]

// // your function would return:
// [
// { startTime: 0, endTime: 1 },
// { startTime: 3, endTime: 8 },
// { startTime: 9, endTime: 12 },
// ]

// 1. Treat the meeting with the earlier start time as first and the other as second.
// 2. If the end time of the first meeting is equal to or greater than the start time of the second meeting, we merge the two meetings into one time range. The resulting time range's start time is the first meeting's start, and its end time is the later of the two meetings' end times.
// 3. Else, we leave them separate.

// Comparing every meeting to every other meeting takes O(n^2) and is costly.
// How to do this in one pass to get O(n) time?
// Sort the array of meetings by start time. O(log n)

// Solution
// - sort our input array of meetings by start time so any meetings that might need to be merged are now next to each other.
// - walk through the sorted meetings from left to right. At each step, either:
// 1. if we can merge the current meeting with the previous one, we do so.
// 2. if we can't merge the current meeting with the previous one, we know the previous meeting can't be merged with any future meetings and we throw the current meeting into mergedMeetings.

function mergeRanges(meetings) {

  // create a deep copy of meetings array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
  // JSON serialization
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // sort by start time
  // sort the number in the array in ascending order
  // the first item in the array is now the lowest value
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  })
  console.log(sortedMeetings);

  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // If the current meeting overlaps with the last merged meeting, use the later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {

      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

// complexity: O(log n) time and O(n) space

console.log(mergeRanges([
{ startTime: 0,  endTime: 1 },
{ startTime: 3,  endTime: 5 },
{ startTime: 4,  endTime: 8 },
{ startTime: 10, endTime: 12 },
{ startTime: 9,  endTime: 10 },
]));
