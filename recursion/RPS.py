def rps(num_rounds):
    throws = ['R', 'P', 'S']
    permutations = []

    def inner_function(plays, choices):
        # Base Case: len is num_rounds
        if (len(plays) == 3):
            permutations.append(plays[:])
            return

        for choice in choices:
            inner_function(plays + [choice], choices[:])

    inner_function([], throws)
    return permutations


print(rps(3))
