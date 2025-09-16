import math

num1 = int(input("Enter the first integer : "))
num2 = int(input("Enter the second integer : "))

sum = num1 + num2

if sum < 0:
    print("Root of negative number is not defined")
else:
    result = math.sqrt(sum)
    print("Square Root of the number is : " + f"{result:.2f}")
