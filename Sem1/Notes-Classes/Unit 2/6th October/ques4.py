#WAP to delete characters from string 1 if the characters are present in string 2


str1=input("Enter the first string : ")
str2=input("Enter the second string : ")

for i in str2:
    if i in str1:
        str1=str1.replace(i,"")
print(str1)    
        
