import pdb

def swap(list, i, j):
    temp = list[i]
    list[i] = list[j]
    list[j] = temp


def quick_sort(arr, low, high):
    if (high is None):
        high = len(arr)
    if (low is None):
        low = 0
    if (low < high):
        pivot_location = partition(arr, low, high)
        quick_sort(arr, low, pivot_location-1)
        quick_sort(arr, pivot_location+1, high)
    return arr


def partition(array, low, high):
    pivot = array[low]
    frontier = low
    for index in range(low+1, high):
        if (array[index] < pivot):
            frontier += 1
            swap(array, index, frontier)
    swap(array, low, frontier)
    return frontier




unsorted_arr = [2,1,3,5,0,100,7]
print(quick_sort(unsorted_arr, 0 ,len(unsorted_arr)))

pdb.run('quick_sort(unsorted_arr, 0, len(unsorted_arr))')
