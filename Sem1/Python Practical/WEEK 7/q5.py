#Read the file and count how many employees are from each location.
with open("/home/atharva-patel/Desktop/College/College Python/Sem1/Python Practical/WEEK 7/pythonlab.csv") as f:
    f.readline()
    loc={}
    for line in f:
        data=line.strip().split(',')
        if data[1] in loc:
            loc[data[1]]+=1
        else :
            loc[data[1]]=1

print(loc)
        
   