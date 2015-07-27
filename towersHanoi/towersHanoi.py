def towers_hanoi(n):
    a = []  #source
    b = []  #spare
    c = []  #dest
    for index in range(n):
        a.append(index+1)

    def recursive_func(n, source, dest, spare):
        if (n == 1):
            dest.append(source.pop())
        else:
            recursive_func(n-1, source, spare, dest)
            dest.append(source.pop())
            recursive_func(n-1, spare, dest, source)

    recursive_func(n, a, c, b)
    return c


print(towers_hanoi(5))
