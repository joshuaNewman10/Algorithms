
def max_profit(arr):
    min_num = arr[0]
    max_profit = -1

    for index in range(1, len(arr)):
        max_profit = max(max_profit, arr[index]-min_num)
        min_num = min(min_num, arr[index])

    return max_profit


print(max_profit([1,4,100,8,20,20,1,4,5,5,1,3,0,10]))
