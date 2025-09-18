a=int(input("Enter the first number "))
b=int(input("Enter the Second number "))
c=0
while b!=0: # a!=b is also a method
    if a > b:
        a=a-b
    else :
        b=b-a    
print("GCD is ", a)    