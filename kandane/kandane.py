
def kandane(seq):
    sums = []

    def inner_func(seq, index):
        if (index >= len(seq)):
            return

        values = []
        for elem in sums[index-1]:
            values.append(elem + seq[index])
        values.append(seq[index])
        sums.append(values)
        inner_func(seq, index+1)

    inner_func(seq, 0)


kandane([-1, 2, 5, -10, 7])
