# Search through sorted rotated array for targt
#
#
# High Level Strategy:
#   1) Find sorted side
#   2) Check if target is in range
#   3) Choose which side to dive into
import math

def rotated_list_search(rotated_list, target):
  #left and right bounds
  left = 0
  right = len(rotated_list) -1
  while ( left <= right ):
    middle = int(math.floor((left + right) /2))
    if ( rotated_list[middle] == target ):
      return middle
    # Check if left side sorted
    if (rotated_list[left] < rotated_list[middle]):
      #check if item is in that range
      if ( target >= rotated_list[left] and target < rotated_list[middle]):
        #search in LHS
        right = middle - 1
      else:
        #search in RHS
        left = middle +1
    #else right hand side is sorted (implicit)
    else:
      #check if item in this range
      if ( target > rotated_list[middle] and target <= rotated_list[right]):
        #search in RHS
        left = middle + 1
      else:
        #search in LHS
        right = middle-1
  return None


right_rotation = [4,5,1,2,3]
left_rotation =  [3,4,5,1,2]

print(rotated_list_search(right_rotation, 3))
