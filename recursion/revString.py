
def reverse_string(input_data):
    if isinstance(input_data, str):
        input_data = list(input_data)

    if (len(input_data) == 0):
        return input_data

    return reverse_string(input_data[1:]) + input_data[0:1]


print(reverse_string('abc'))
