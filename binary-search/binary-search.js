function binarySearchIterative(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (target === array[middle]) {
      return true;
    } else if (target < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return false;
}

function binarySearchRecursive(array, n) {
  return binarySearchHelper(array, n, 0, array.length - 1);
}

function binarySearchHelper(array, target, start, end) {
  if (start > end) {
    return false;
  }
  const middle = Math.floor((start + end) / 2); 
  if (target === middle) {
    return true;
  } else if (target < middle) {
    return binarySearchHelper(array, target, start, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, end);
  }
}

const arrayExample = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearchIterative(arrayExample, 10)); // true
console.log(binarySearchIterative(arrayExample, 100)); // false
console.log(binarySearchRecursive(arrayExample, 10)); // true
console.log(binarySearchRecursive(arrayExample, 100)); // false