x1=int(input("Enter X1: "))
y1=int(input("Enter Y1: "))
x2=int(input("Enter X2: "))
y2=int(input("Enter Y2: "))

if x1 == x2 :
    print("Slope is infinite")
else :
    slope=(y2-y1)/(x2-x1)
    print ("Slope is ",slope)