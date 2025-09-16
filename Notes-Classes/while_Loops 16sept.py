num1 = int(input("Enter the Number: "))
num2 = int(input("Enter the Number: "))

sum_even = 0
sum_odd = 0

max1 = max(num1, num2)
min1 = min(num1, num2)

while min1 <= max1:
    if min1 % 2 == 0:
        sum_even += min1
    else:
        sum_odd += min1
    min1 += 1

print("Sum of Even =", sum_even)
print("Sum of Odd =", sum_odd)
