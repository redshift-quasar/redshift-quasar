lim=int(input("Enter the number of therms you want : "))
a=0
b=1
i=0
print (a ,b,end=" ")
while i<lim-2:
    sum=a+b
    a=b
    b=sum
    print(sum,end=" ")
    i+=1