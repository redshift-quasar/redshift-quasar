target=int(input("Enter the target number : ")) # taking input of the target number
arr=[2,7,11,15]
found=False #flag to check if the target indices are found and then break the outer loop
for i in range (len(arr)-1): #picking one-one variable from starting and checking the sum from next index till end
    for j in range (i+1,len(arr)): #picking the next variable 
        if arr[i]+arr[j]==target: #Checking the sum 
            print(i,j)
            found=True
            break    
    if found:
        break   