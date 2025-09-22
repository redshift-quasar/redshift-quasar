quantity=int(input("Enter the units purchased"))
cost= quantity*100
discount=0.1*cost
total_cost=cost-discount
if(cost>=1000):
    print("Discount : ", Discount)
    print("Amount to be paid : ",total_cost)
else:
    print("No discount")
    print("Cost :",cost)    