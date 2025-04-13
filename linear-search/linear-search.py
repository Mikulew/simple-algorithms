example_list = [1, 9, 15, 19, 64, 63, 35, 72, 41, 96, 34, 54, 26, 3]

def linear_search(list, target):
  for el in list:
    if el == target:
      return True
  return False

print(linear_search(example_list, 26)) # True
print(linear_search(example_list, 100)) # False