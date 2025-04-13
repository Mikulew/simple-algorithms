const exampleArray = [1, 9, 15, 19, 64, 63, 35, 72, 41, 96, 34, 54, 26, 3]

function linearSearch(array, target) {
  for (const el of array) {
    if (el === target) {
      return true;
    }
  }
  return false;
}

console.log(linearSearch(exampleArray, 26)); // true
console.log(linearSearch(exampleArray, 100)); // false
