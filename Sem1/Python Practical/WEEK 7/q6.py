with open("/home/atharva-patel/Desktop/College/College Python/Sem1/Python Practical/WEEK 7/pythonlab.csv") as f:
    f.readline()
    local=[]
    max=0
    for line in f:
        data=line.strip().split(',')
        if int(data[4]) > max:
            max=int(data[4])
            local=data
print("Max Salary : ",local[0])   
print("Details : ", local)     
   