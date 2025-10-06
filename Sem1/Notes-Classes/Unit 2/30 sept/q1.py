# create a set from 2 to n:

n=int(input("Enter the n : "))
s=set({})
for i in range (2,n+1):
    s.add(i)
print (s)

s1=set(range(2,n+1))
print (s1)