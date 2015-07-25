def make_matrix(a, b):
    matrix = []
    for index in range(b):
        matrix.append([1] * a)
    return matrix


def count_matrix_cells(matrix):
    sum = 0
    for i in range(0, len(matrix)):
        for j in range(0, len(matrix[0])):
            sum += matrix[i][j]
    return sum


def swap(int_a, int_b):
    temp = int_a
    int_a = int_b
    int_b = temp
    return int_a, int_b


def multiply_nums(a, b):
    cache = {}

    def inner_func(a, b):
        if (b < a):
            a, b = swap(a, b)
        if (a == 1):
            matrix = make_matrix(a, b)
            key = '' + str(a) + str(b)
            if (key in cache):
                num_cells = cache[key]
            else:
                num_cells = count_matrix_cells(matrix)
                cache[key] = num_cells
            return num_cells
        elif (a % 2 != 0):
            return inner_func(a-1, b) + inner_func(1, b)
        else:
            return inner_func(a/2, b) + inner_func(a/2, b)
    return inner_func(a, b)


print(multiply_nums(13, 8))
