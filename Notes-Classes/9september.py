#Class Notes

#sequence of operands and operation is a sequence 
#An expression has a value 
#statement does not have a value 
# Eg: (6+8*4) it is an expression


# Arity : Rank - Number of operands
#    Unary eg: -19 // ** + - %
#    Binary eg: 2+3 +, -, Bitwise operators
#    Arithmetic Eg: +   Addition
#                   -   substraction
#                   %   modulo
#                   /   Division
#                   *   Multiplication
#                   //  integer divison
#                   **  Exponentiation
       
#    Logical eg:     or not and  
#    Relational operators  -- True and False as output         
   

# Operators -Presedence -associativity  (Read from sources) (PEDMAS-- in basic words)


# 10==10==10 true in python but in c,java or cpp it will be false
# a,b,c=10,2,3 valid in python
# a>b>c is same as (a>b) and (b>c)
# 'car'>'cat' result is based on lexicographical 

# **** relation operator should not be used floating point ****

# Python follows unicode like java (UTE) ASCII is subset of UTE

# ord('a') is method to find ascii value

#print(ord('a')) 97  to
#print(ord('z')) 122

#print(ord('A')) #65 to
#print(ord('Z')) #90

# in & not in   finds if object is present or not o/p is true and false
# (is) checks if equal or not but it is different than (==) as it compares object o/p is true and false

'''num1=3
num2=3.0
if num1 is num2 :print('yes')
if num1 == num2 :print('yes')
'''
#***zero division error***

#Short Ciruit evaluation:
 #for example (2<3)or(2>1) right side is not evaluated as left is true it directly prints the output
 # in case of and if left is false right side will not be evaluated 
 
 
 
'''if (0)and(3/0):
     print('yes')
else:
    print('false')'''
    #here ZeroDivisonError is ignored becase left side of and was false so it didnt go to right side
    
    
 # Bitwise Operator --- works on individual bit
"""   & bitwise and
      ! bitwise not
      ~ bitwise or
      << bitwise shift left
      >> shift right
      ^  bitwise xor """   
 