function isPalindrome(word) {
  if (typeof word !== 'string') {
    throw TypeError('Argument must be a string');
  }
  word = word.toLowerCase();
  return word === [...word].toReversed().join('');
}

console.log(isPalindrome('kajak')); // true
console.log(isPalindrome('test')); // false
console.log(isPalindrome(123)); // TypeError: Argument must be a string
