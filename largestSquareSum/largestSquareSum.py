import random


def matrix_maker(i, j):
    matrix = []
    for index in range(0, i):
        matrix.append([random.randint(0, index)]*j)
    return matrix


# Assume getting input of tl and br indices
def sub_matrix_sum(matrix, tl, br):
    width = br[1] - tl[1]
    height = br[0] - tl[0]
    current_sum = 0
    tl_x, tl_y = tl

    for i in range(tl_y, tl_y + height + 1):
        for j in range(tl_x, tl_x + width + 1):
            current_sum += matrix[i][j]
    return current_sum


def largest_sub_matrix_sum(matrix):
    combos = []
    height = len(matrix) -1
    width = len(matrix) - 1

    def inner_function(matrix, tl, br):
        if (br[0] > width or br[1] > height):
            return

        combos.append((tl, br))

        new_br = (br[0] + 1, br[1] + 1)
        inner_function(matrix, tl, new_br)

    for i in range(0, width):
        for j in range(0, height):
            inner_function(matrix, (i, j), (i, j))

    # for index, combo in enumerate(combos):
    #     combos[index] = sub_matrix_sum(matrix, combo[0], combo[1])
    return combos


print(largest_sub_matrix_sum(matrix_maker(3, 3)))







