import math

def alternate_sq_sum(arr):
    even_numbers = [x for ind, x in enumerate(arr) if ind % 2 == 0]
    odd_numbers = [x for ind, x in enumerate(arr) if ind % 2 != 0]
    if (len(even_numbers) != 0):
        even_avg = sum(even_numbers) / len(even_numbers)
    else:
        return None
    sum_squares = map(lambda x: math.pow(x,2), odd_numbers)
    joined_array = even_numbers + sum_squares

    return sum(joined_array)


print(alternate_sq_sum([1,2,3,4,5]))


def sq_sum(arr):
    return sum(arr[::2]) +  sum(i**2 for i in arr[1::2]) if arr else None
print(sq_sum([1,2,3,4,5]))
