function memoize(f) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = f(...args);
      cache.set(key, result);
      return result;
    }
  }
}

function slowFunction(x) {
  console.log('Computing...');
  return x * x;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Logs "Computing..." and then 25
console.log(memoizedFunction(5)); // Logs 25 (retrieved from cache, no "Computing...")
console.log(memoizedFunction(6)); // Logs "Computing..." and then 36