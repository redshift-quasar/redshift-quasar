arr1=[1,3,5,7,9]
arr2=[2,4,6,8,10]
arr3=[]  #empty list to merge the both List

for i in range(len(arr1)):
    arr3.append(arr1[i]) #adding from arr1
    arr3.append(arr2[i]) #adding from arr2
print(arr3)              #printing the merged List