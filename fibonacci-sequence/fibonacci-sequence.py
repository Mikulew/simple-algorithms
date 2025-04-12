def fibonacci_sequence_recursvie(n):
 if n in {0, 1}:
  return n
 return fibonacci_sequence_recursvie(n - 1) + fibonacci_sequence_recursvie(n - 2)

def fibonacci_sequence_iterative(n):
  if not (isinstance(n, int) and n >= 0):
    raise ValueError(f'Positive integer number expected, got "{n}"')
  if n in {0, 1}:
    return n
  previous, fib_number = 0, 1
  for _ in range(2, n + 1):
    previous, fib_number = fib_number, previous + fib_number
  return fib_number

print(fibonacci_sequence_recursvie(10)) # 55
print(fibonacci_sequence_iterative(10)) # 55