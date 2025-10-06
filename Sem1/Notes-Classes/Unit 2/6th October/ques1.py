#WAP to input string and print square of the number:

str1=input("Enter the string : ")
for i in str1:
    if i.isdigit():
        print(int(i)**2)