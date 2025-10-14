with open("/home/atharva-patel/Desktop/College/College Python/Sem1/Python Practical/WEEK 7/pythonlab.csv") as f:
    f.readline()
    job_position=set()
    for line in f:
        data=line.strip().split(',')
        job_position.add(data[3]) 
print("Unique Jobs Positions : ", job_position)     
   