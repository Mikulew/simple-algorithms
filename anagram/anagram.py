def is_anagram(word1, word2):
  if type(word1) is not str or type(word2) is not str:
    raise TypeError('Argumenta must be a string')
  word1 = word1.lower()
  word2 = word2.lower()
  return sorted(word1) == sorted(word2)

print(is_anagram('cat', 'act'))
print(is_anagram('cat', 'dog'))
print(is_anagram(123, []))