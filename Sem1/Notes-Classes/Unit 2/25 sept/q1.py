wicket=[10,40,100,145,150,175]
diff=[]
for i in range(len(wicket)-1):
    diff.append(wicket[i+1]-wicket[i])
print(diff)   