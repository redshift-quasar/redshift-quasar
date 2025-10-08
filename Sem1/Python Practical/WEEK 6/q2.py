#Ques2
jewels={'a','A','b','B','C',}
stone=['a','b','c','c','c','d','B','B','A','a','e','f','z','x']

count=0
for x in stone:
    if x in jewels:
        count+=1

print("Stones that are jewels : ",count)