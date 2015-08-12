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


# print(rps(3))


def rps_alt(num_rounds, plays=[], choices=['R', 'P', 'S'], permutations=[]):
    if (len(plays) == num_rounds):
        return plays[:]

    for choice in choices:
        permutations.append(rps_alt(num_rounds, plays + [choice], choices[:]))

    return permutations

print(rps_alt(3))
