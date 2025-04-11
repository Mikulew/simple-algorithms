function isAnagram(word1, word2) {
  if (typeof word1 !== 'string' || typeof word2 !== 'string') {
    throw TypeError('Arguments must be a string');
  }
  let w1 = word1.toLowerCase().split('').toSorted().join('');
  let w2 = word2.toLowerCase().split('').toSorted().join('');
  return w1 == w2;
}

console.log(isAnagram('cat', 'act')); // true
console.log(isAnagram('cat', 'dog')); // false
console.log(isAnagram(123, [])) // TypeError: Arguments must be a string