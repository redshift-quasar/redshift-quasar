nums = [1, 2, 3, 4, 5]  # input list
result = []
running_sum = 0

for num in nums:
    running_sum = running_sum + num
    result.append((num, running_sum)) # num and running sum is added like tuple

print(result)
