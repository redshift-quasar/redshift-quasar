#Rev
num=int(input("Enter the number : "))
revNum=0
if num<0:
    num*=-1
    while num!=0:
        revNum=revNum*10 + num%10
        num//=10 
    revNum*=-1    
    print("Reversed is : ", revNum)    
else:
    while num!=0:
        revNum=revNum*10 + num%10
        num//=10
    print("Reversed is : ", revNum)        
        