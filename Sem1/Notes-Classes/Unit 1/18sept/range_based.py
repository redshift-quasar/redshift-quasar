a=int(input("Enter the first number of range "))
b=int(input("Enter the last number of range "))
c=input("Enter o for odd ,e for even and b for both :")
for i in range (a,b+1):
    if c=='e'and i%2==0:
        print(i)
    elif c=='o' and i%2!=0:
        print(i)  
    elif c=='b' :
        print(i)  
else :
    print("Invalid")