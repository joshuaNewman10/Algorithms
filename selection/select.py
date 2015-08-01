import math
import random

def merge_sort(arr, start=0, end=None):
    if (end is None):
        end = len(arr)-1
    if (end-start < 1):
        return [arr[start]]
    # Split into smaller subsections
    midpoint_index = int(math.floor((start + end)/2))
    left = merge_sort(arr, start, midpoint_index)
    right = merge_sort(arr, midpoint_index + 1, end)
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


def select(arr, ithOrderStat):
    return(merge_sort(arr)[ithOrderStat])


def swap(list, i, j):
    temp = list[i]
    list[i] = list[j]
    list[j] = temp


def partition(arr, pivot_index, low, high):
    swap(arr, low, pivot_index)
    pivot = arr[low]
    frontier = low
    for index in range(low+1, high):
        if (arr[index] < pivot):
            frontier += 1
            swap(arr, index, frontier)
    swap(arr, low, frontier)
    return frontier


def randomized_select(arr, arr_length, ithOrderStat):
    if (arr_length is None):
        arr_length = len(arr)

    if (arr_length == 1):
        return arr[0]


    pivot_index = int(math.floor(random.randint(0, arr_length-1)))


    if (pivot_index == ithOrderStat):
        return arr[pivot_index]

    pivot_index = partition(arr, pivot_index, 0, arr_length)
    if (pivot_index > ithOrderStat):
        sub_arr = arr[0:pivot_index]
        return randomized_select(sub_arr, pivot_index-1, ithOrderStat)
    else:
        sub_arr = arr[pivot_index:]
        return randomized_select(sub_arr, arr_length - pivot_index, ithOrderStat - pivot_index)





# print(merge_sort([1,3,-1, 10, 10, 10, 10, 8, 7, 6, 5, 4, 3, 20]))
# print(merge_sort([1,3,2, 7, -1, 100, 2, 5, 13, 99, -100]))
print(randomized_select([1,2, 3], None, 1))
