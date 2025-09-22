#can be represented as base 2
num=int(input("Enter the Number : "))
is_base = False
if num<1:
    print(is_base)
i=0
while 2**(i)<=num:
    if 2**(i)==num:
        is_base=True
    i+=1    
print(is_base)    
    