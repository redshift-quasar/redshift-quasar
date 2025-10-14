with open("/home/atharva-patel/Desktop/College/College Python/Sem1/Python Practical/WEEK 7/pythonlab.csv") as f:
    f.readline()
    slab={}
    for line in f:
        data=line.strip().split(',')
        slab[data[0]]=data[4]
    sorted_slab = sorted(slab.items(), key=lambda kv: (kv[1], kv[0]), reverse=True)
print(sorted_slab)
        
   