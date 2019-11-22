// Big O Examples

// Time Complexity
// O(1) time or constant time
function printFirstItem(items) {
  console.log(items[0]);
}

// O(n) or linear time where n is the number of items in the array
function printAllItems(items) {
  items.forEach(item => {
    console.log(item);
  });
}

// O(n^2) quadratic time
function printAllPossibleOrderedPairs(items) {
  items.forEach(firstItem => {
    items.forEach(secondItem => {
      console.log(firstItem, secondItem);
    });
  });
}

// Space Complexity
// O(1) - fixed number of variables
function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log('hi');
  }
}

// O(n) - space (size of hiArray scales with the size of the input)
function arrayOfHiNTimes(n) {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}
