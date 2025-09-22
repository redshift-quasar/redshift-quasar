unit=int(input("Enter the units consumed"))
if(unit<=0):
    print("Amount : ",0)
elif(unit>100 and unit<200):
    print("Amount : ",(unit-100)*5)
else:
    print("Amount : ",500+(unit-200)*10)