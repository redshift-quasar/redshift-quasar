#WAP to check how many times she has occured in the test.txt file    

with open("test.txt") as f:
    data=f.read()
print("Count = ",data.lower().count("she"))

# Use readlines() and count occurance of shell
count=0
with open("test.txt") as fh:
    data2=fh.readlines()
for line in data2:
    count = count + line.count("shell")
print ("Occurance of shell is : ", count)