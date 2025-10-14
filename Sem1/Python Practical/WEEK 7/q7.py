with open("/home/atharva-patel/Desktop/College/College Python/Sem1/Python Practical/WEEK 7/pythonlab.csv") as f:
    f.readline()
    with open ("names.txt","w") as names:
        for line in f:
            data=line.strip().split(',')
            names.write(data[0])
            names.write(' ')
with open ("names.txt","r") as names:
    data1=names.readlines()
print("Names : ", data1)    
   