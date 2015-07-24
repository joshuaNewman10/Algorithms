def find_missing_elem(sequence):
    num_set = set(int(x) for x in sequence.split(' '))
    true_seq = set(x for x in range(1, max(num_set)+1))
    return ( true_seq.difference(num_set))


print(find_missing_elem('1 2 4 5'))
