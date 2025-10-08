#ques 3

dict1={'Ram':90 , 'Sita':95 , 'Amar': 50, 'Akbar':80, 'Antony':75}

averageGrades=0
for x in dict1:
    averageGrades+=dict1[x]     
averageGrades/=len(dict1)

print ("Average Grades : ",averageGrades)

print("Students above Average Marks : ")
for x in dict1:
    if dict1[x]>=averageGrades:
        print(x)