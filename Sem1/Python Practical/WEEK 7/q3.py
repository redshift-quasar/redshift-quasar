with open("/home/atharva-patel/Desktop/College/College Python/Sem1/Python Practical/WEEK 7/pythonlab.csv") as f:
    f.readline()
    for line in f:
        i=line.strip().split(',')
        print(i[0]," - ", i[3])
        
   