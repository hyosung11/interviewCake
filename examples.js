// Big O Examples

// Time Complexity
// O(1) time or constant time
// this function requires just one "step."
// function printFirstItem(items) {
//   console.log(items[0]);
// }

// O(n) or linear time where n is the number of items in the array
// this function runs as many times as there are items
// function printAllItems(items) {
//   items.forEach(item => {
//     console.log(item);
//   });
// }

// O(n^2) quadratic time
// nesting two loops
// this function runs O(n^2) if the array has 10 items, we have to print 100 times
// function printAllPossibleOrderedPairs(items) {
//   items.forEach(firstItem => {
//     items.forEach(secondItem => {
//       console.log(firstItem, secondItem);
//     });
//   });
// }

// Drop the constants
// function printAllItemsTwice(items) {
//   items.forEach(item => {
//     console.log(item);
//   });

// Once more, with feeling
//   items.forEach(item => {
//     console.log(item);
//   });
// }
//
// printAllItemsTwice(3)

// Space Complexity
// O(1) - fixed number of variables
// function sayHiNTimes(n) {
//   for (let i = 0; i < n; i++) {
//     console.log('hi');
//   }
// }

// O(n) - space (size of hiArray scales with the size of the input)
// function arrayOfHiNTimes(n) {
//   const hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = 'hi';
//   }
//   return hiArray;
// }

// Linked List Lookups O(n) vs. arrays O(1)
// function getIthItemInLinkedList(head, i) {
//   if (i < 0) {
//     throw new Error("i can't be negative: " + i);
//   }
//
//   var currentPosition = 0;
//   var currentNode = head;
//
//   while (currentNode) {
//     if (currentPosition === i) {
//       // found it
//       return currentNode;
//     }
//
//     // move on to the next node
//     currentNode = currentNode.next;
//     currentPosition++;
//   }
//
//   throw new Error("List has fewer than i + 1 (" + (i + 1) + ") nodes");
// }
//
// console.log(getIthItemInLinkedList(1, 4));
