function fibonacciSequenceRecursive(n) {
  return n < 2 ? n : fibonacciSequenceRecursive(n - 1) + fibonacciSequenceRecursive(n - 2);
}

function fibonacciSequenceIterative(n) {
  let sum = 1;
  let prevSum = 1;
  let temp = 0;
  let i = 2;
  if (n < 2) return 1;
  while (n !== i) {
    temp = sum;
    sum = sum + prevSum;
    prevSum = temp;
    i++;
  }
  return sum;
}

console.log(fibonacciSequenceRecursive(10)); // 55
console.log(fibonacciSequenceIterative(10)); // 5