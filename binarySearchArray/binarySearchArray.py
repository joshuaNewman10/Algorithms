# Return index of elem in array

import math


def binary_search_array(arr, lb, ub, target):
    middle = int(math.floor((lb + ub) / 2))
    print(middle)
    if (target == arr[middle]):
        return True

    if (lb >= ub):
        return False

    else:
        # Search Left
        found = binary_search_array(arr, 0, middle-1, target)
        if (found is True):
            return found
        # Search Right
        else:
            return binary_search_array(arr, middle+1, len(arr)-1, target)


# print(binary_search_array([0, 1, 2, 3, 4, 5], 0, 5, 3))


def binary_search_index(arr, lb, ub, target):
    middle = int(math.floor((lb + ub) / 2))
    print(middle)
    if (target == arr[middle]):
        return {'index': middle}

    if (lb >= ub):
        return {'index': -1}

    else:
        # Search Left
        found = binary_search_index(arr, lb, middle-1, target)
        if (found['index'] > -1):
            return found
        # Search Right
        else:
            return binary_search_index(arr, middle+1, ub, target)

print(binary_search_index([0, 1, 2, 3, 4, 5], 0, 5, 5))

