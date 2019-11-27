// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

// For example:
const message = [ 'c', 'a', 'k', 'e', ' ',
              'p', 'o', 'u', 'n', 'd', ' ',
              's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'

function reverseCharacters(message) {

  let leftIndex = 0;
  let rightIndex = message.length - 1;

  // Walk towards the middle, from both sides
  while (leftIndex < rightIndex) {

    // Swap the left char and right char
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

console.log(reverseCharacters('hello'));

function reverseWords(message) {

}
