nums=input("enter the numbers seperated with spaces : ").split()
copy=[]
if not nums:
    print("Empty")
for i in range (len(nums)-1):         #iterating through the loops with 1 less as comparing with next number that may give index error
            if nums[i]!=nums[i+1]:    #comparing current number with next number
                copy.append(nums[i])  #using append to add the unique number
copy.append(nums[len(nums)-1])        #including the last number always as it is unique in sorted array
print(copy)


#Try without copy variable