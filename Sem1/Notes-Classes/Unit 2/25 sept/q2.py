a=[22,33,44,55,66]
b=[11,22,44,99,66,88]
sub=[]
for i in range (len(b)-1):
    if b[i] in a:
        sub.append(b[i])
print (sub)       