#Create a new file names.txt containing only employee names from the dataset
with open("/home/atharva-patel/Desktop/College/College Python/Sem1/Python Practical/WEEK 7/pythonlab.csv") as f:
    f.readline()
    with open ("names.txt","w") as names:
        for line in f:
            data=line.strip().split(',')
            names.write(data[0]+ "\n")
            
with open ("names.txt","r") as names:
    print("Names : ", names.readlines())    
   