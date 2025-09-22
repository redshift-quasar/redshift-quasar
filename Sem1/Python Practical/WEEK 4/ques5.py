target_num=int(input("Enter the target number : "))
max_num=int(input("Enter the Maximum number : "))
other_num=target_num-max_num
isinstance=False
for i in range (1,max_num):
    if other_num==i:
        is_pair=True
if is_pair:
    print("Found Pair : ")
    print("First number : ",max_num)
    print("Second number : ",other_num)
else:
    print("No Pair found!!")            