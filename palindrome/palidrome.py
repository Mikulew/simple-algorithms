def is_palidrome(word):
  if type(word) is not str:
    raise TypeError('Argument must be a string')
  word = word.lower()
  return word == word[::-1]

print(is_palidrome('kajak')) # True
print(is_palidrome('test')) # False
print(is_palidrome(123)) # TypeError: Argument must be a string