def memoize(func):
    cache = dict()

    def memoized_func(*args):
        if args in cache:
            return cache[args]
        result = func(*args)
        cache[args] = result
        return result

    return memoized_func

def slowFunction(x):
  print('Computing...')
  return x * x

memoizedFunction = memoize(slowFunction)

print(memoizedFunction(5)); # Logs "Computing..." and then 25
print(memoizedFunction(5)); # Logs 25 (retrieved from cache, no "Computing...")
print(memoizedFunction(6)); # Logs "Computing..." and then 36