import math


def merge_sort(arr, start=0, end=None):
    if (end is None):
        end = len(arr)-1
    if (end-start < 1):
        return [arr[start]]
    # Split into smaller subsections
    midpoint_index = int(math.floor((start + end)/2))
    left = merge_sort(arr, start, midpoint_index)
    right = merge_sort(arr, midpoint_index + 1, end)
    print(left, right)
    # Merge
    temp_arr = []
    while (len(left) > 0 and len(right) > 0):
        left_item = left[0]
        right_item = right[0]
        if (left_item < right_item):
            temp_arr.append(left.pop(0))
        else:
            temp_arr.append(right.pop(0))

    if (len(left) > 0):
        temp_arr = temp_arr + left
    if (len(right) > 0):
        temp_arr = temp_arr + right
    return temp_arr


# print(merge_sort([1,3,-1, 10, 10, 10, 10, 8, 7, 6, 5, 4, 3, 20]))
print(merge_sort([1,3,2, 7, -1, 100, 2, 5, 13, 99, -100]))
