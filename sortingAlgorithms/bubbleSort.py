def swap(list, i, j):
    temp = list[i]
    list[i] = list[j]
    list[j] = temp


def bubble_sort(list):
    did_sort = False
    for i in range(len(list)):
        currItem = list[i]
        for j in range(i, len(list)):
            comparrisonItem = list[j]
            if currItem > comparrisonItem:
                did_sort = True
                swap(list, i, j)
        if not did_sort:
            return list
        did_sort = False
    return list

print(bubble_sort([5, 3, 2, 1, 7, 8, 10]))
