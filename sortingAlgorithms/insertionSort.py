def swap(list, i, j):
    temp = list[i]
    list[i] = list[j]
    list[j] = temp


def insertion_sort(list):
    for i in range(len(list)):
        curr_elem = list[i]
        min_index = i
        for j in range(i, len(list)):
            if (list[j] < curr_elem):
                curr_elem = list[j]
                min_index = j
        swap(list, i, min_index)
    return list

print(insertion_sort([1, 10, 9, 2, 7, 6, 1, 3, 5]))
