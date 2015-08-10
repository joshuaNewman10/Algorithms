import math

# O(nlogn) sort + O(n) loop --> O(nlogn) time complexity
# O(n) space complexity
def peak_valley_sort(num_list):
    num_list = sorted(num_list)
    output = []
    median = int(math.floor(len(num_list)/2))
    for i in range(0, median):
        output.append(num_list[len(num_list)-1-i])
        output.append(num_list[i])
    if (len(num_list) % 2 != 0):
        output.append(num_list[median])
    return output

nums = [5,3,1,2,3]
print(peak_valley_sort(nums))
