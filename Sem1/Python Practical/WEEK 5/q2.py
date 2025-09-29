#arr1=[1,2,3,4,5,6,7,8,9,10]
arr1=input("Enter the roll number with spaces : ").split()
n=int(input(" Enter the n: "))
arr3=[]  #empty list to merge the both rows

for i in range(n):
    arr3.append(arr1[i]) #adding from first half
    arr3.append(arr1[i+len(arr1)//2]) #adding from other half of row
print(arr3)              #printing the merged List