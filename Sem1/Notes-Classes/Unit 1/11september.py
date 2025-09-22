#Polymorphic Operator
"""Takes more than one form 
    1. + it can be used for addition and concatination
    2. * used for multiplication and replicate string --- Good * 3==GoodGoodGood"""

#Identity operator 
"""is & is not -- compares if obj is same or not --checks the memory allocation
   id()- memory address of a particular variable
   for small integers, float,strings.. python caches them in memory for efficency 
   so in some cases == and is behaves same


x=20
y=30
print(id(x),id(y)) #-- 10747024 10747344
print(x==y)
print (x is y)

x=20
y=20
print(id(x),id(y)) #-- 10747024 10747024
print(x==y)
print (x is y)

in above is and == was same because of small integer(5,256)


"""
#short hand assignment

#ternary operator a?b:c not in python

#control Statements

"""Simple if 
   if else 
   if elif else
   nested if 
     
  
   
att= int(input("Enter the attendance percentage: "))
conduct= input("Enter the Conduct: ")
if att>=75 and (conduct=="Good" or conduct=="good"):
    print("Hall ticket generated")

 """
 