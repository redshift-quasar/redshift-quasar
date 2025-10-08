#ques5

vowel="aeiouAEIOU" #defining the vowel string 

str1=input("Enter the string : ")

count=0

for x in range(len(str1)):
    if str1[x] in vowel: # comparing if character is in vowel string 
        count+=1
print("Number of vowels : ",count)#Ques2
jewels={'a','A','b','B','C'}
stone=['a','b','c','c','c','d','B','B','A','a','e','f','z','x']

count=0
for x in stone:
    if x in jewels:
        count=count+1

print("Stones that are jewels : ",count)