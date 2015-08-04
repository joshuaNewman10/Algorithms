import random


def swap(arr, i, j):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp


def fisher_yates(arr):
    n = len(arr)-1
    while(n > 0):
        rand_int = random.randint(0, n)
        print(n, rand_int)
        swap(arr, rand_int, n)
        n -=1
    return arr


print(fisher_yates([1,2,3]))
