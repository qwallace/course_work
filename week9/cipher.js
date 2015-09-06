
// # Vigenere Cipher
// Implement a Vigenere Cipher using JavaScript. You should be able to encode and decode a word when given a keyword. [Read the Wikipedia description here](http://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher#Description
// )
// A quick rundown of the steps:
// 1. You take the message you want to encrypt (in this case 'attackatdawn').
// ```
// message: attackatdawn
// ```
// 2. You take the keyword you want to encrypt with (in this case 'lemon'), and repeat it so that it is the length as your message.
// ```
// keyword: lemonlemonle
// ```
// 3. You add each letter of the message to each letter of the keyword to produce each letter of the ciphertext. For example, for the first letter:
// * message: 'a' is index 0 in the alphabet
// * keyword: 'l' is index 11 in the alphabet
// * ciphertext: letter at index (0 + 11), which is 'l'
// ```
// ciphertext: lxfopvefrnhr
// ```
// Create a single `HTML` page with some basic style and a linked `JS` file to display your results.
// Hint--> use underscore to help

// var numberize = function(letter) {
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return alphabet.indexOf(letter);
// }

console.log("We're ciphering!");

alphabetObject = {
  'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9,
  'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18,
  't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25
};

alphabetArray = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
];

var replace = function(message, word) {
  message = message.split('');
  word = word.split('');
  // console.log(message);
  // console.log(word);
  var cipher = [];
  for (var i = 0; i < message.length; i++) {
    cipher.push(word[i % word.length]);
  }
  // console.log(cipher, message);
  ciphertext(cipher, message);
  //console.log(cipher.split(''));
}

var ciphertext = function(cipher, message) {
  var finalText = [];
  for (var i = 0; i < message.length; i++) {
    finalText.push(alphabetArray[(alphabetObject[message[i]] + alphabetObject[cipher[i]]) % alphabetArray.length]);
  }
  finalMessage = finalText.join('');
  console.log(finalMessage);
}
