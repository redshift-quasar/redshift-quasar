a=int(input("Enter the first number "))
b=int(input("Enter the Second number "))
c=0
while b!=0:
    c=b
    b=a%b
    a=c
print("GCD is ", a)    