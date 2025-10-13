with open("/home/atharva-patel/Desktop/College/College Python/Sem1/Python Practical/WEEK 7/pythonlab.csv") as f:
    f.readline()
    count=0
    for line in f:
        count+=1
        
    print("Total Number of Employes: ",count)