def largest_product_three(arr):
    min_num = min(arr[0], arr[1])
    max_num = max(arr[0], arr[1])
    largest_three = arr[0] * arr[1] * arr[2]
    largest_two = arr[0] * arr[1]
    min_two = arr[0] * arr[1]
    for index in range(2, len(arr)):
        largest_three = max(largest_three, largest_two * arr[index])
        min_two = min(min_two, min_num * arr[index])
        largest_two = max(largest_two, max_num * arr[index], min_num * arr[index])
        min_num = min(min_num, arr[index])
        max_num = max(max_num, arr[index])
    print(largest_three, min_two, largest_two, max_num, min_num)
    return largest_three

print(largest_product_three([1,6,5,-7,-8,2,4,3]))
