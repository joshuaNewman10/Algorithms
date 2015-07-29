import random


def matrix_maker(i, j):
    matrix = []
    for index in range(0, i):
        matrix.append([random.randint(0, 10)]*j)
    return matrix


# Assume getting input of tl and br indices
def sub_matrix_sum(matrix, tl, br):
    width = br[1] - tl[1]
    height = br[0] - tl[0]
    current_sum = 0
    tl_x, tl_y = tl

    print(width, height)
    for i in range(tl_y, tl_y + height + 1):
        for j in range(tl_x, tl_x + width + 1):
            print('hi', matrix[i][j])
            current_sum += matrix[i][j]
    return current_sum


print(matrix_maker(3, 3))
print(sub_matrix_sum(matrix_maker(3, 3), (0, 0), (1, 1)))
