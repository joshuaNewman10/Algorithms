def swap(i,j,arr):
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr

def bubble_sort(arr):
  arr_length = len(arr)

  swaps = True
  while ( swaps == True ):
    swaps = False
    for  i in range(0, arr_length-1):
      print(i)
      if ( arr[i] > arr[i+1] ):
        swaps = True
        swap(i, i+1, arr)

    if ( swaps  == False):
      break
  return arr


unsorted_list = [1,5,23,9,2]
print(bubble_sort(unsorted_list))
