def binary_search_iterative(list, target):
  start = 0
  end = len(list) - 1
  while start <= end:
    middle = (start + end) // 2 
    if target == list[middle]:
      return True
    else:
      if target < list[middle]:
        end = middle - 1
      else:
        start = middle + 1
  return False

def binary_search_recursive(list, target):
  return binary_search_helper(list, target, 0, len(list) - 1)

def binary_search_helper(list, target, start, end):
  if start > end:
    return  False
  middle = (start + end) // 2
  if target == list[middle]:
    return True
  elif target < list[middle]:
    return binary_search_helper(list, target, start, middle - 1)
  else:
    return binary_search_helper(list, target, middle + 1, end)


array_example = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(binary_search_iterative(array_example, 10)) # True
print(binary_search_iterative(array_example, 100)) # False
print(binary_search_recursive(array_example, 10)) # True
print(binary_search_recursive(array_example, 100)) # False