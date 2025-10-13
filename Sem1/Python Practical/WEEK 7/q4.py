with open("/home/atharva-patel/Desktop/College/College Python/Sem1/Python Practical/WEEK 7/pythonlab.csv") as f:
    f.readline()
    for line in f:
        data=line.strip().split(',')
        if int(data[4])>50000:
            print(data[0], "-",data[4])
        
   