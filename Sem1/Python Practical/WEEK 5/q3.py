arr1=[1,3,5,7,9,11,13]
arr2=[2,4,6,8,10]
length=min(len(arr1),len(arr2))
arr3=[]  #empty list to merge the both List
count=0
for i in range(length):
    arr3.append(arr1[i]) #adding from arr1
    arr3.append(arr2[i]) #adding from arr2
    count=i
if len(arr1)<len(arr2):           #Adding the remaining element to the list
    arr3.extend(arr2[count+1:])
else:
    arr3.extend(arr1[count+1:])
print(arr3)              #printing the merged List