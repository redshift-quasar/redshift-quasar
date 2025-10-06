#Program to check character for a character in a given string without using built in function

found=False
str1=input("Enter the String : ")
str2=input("Enter the character to find : ")
for i in str1:
    if i==str2:
        found=True
        break
print(found)