# WAP to input two strings and then take there Cartesian Product
str1=input("Enter the first string :")
str2=input("Enter the second string :")
for char1 in str1:
    for char2 in str2:
        print(f"{char1}{char2}")