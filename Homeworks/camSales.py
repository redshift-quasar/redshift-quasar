BasicSalary=25000
CamSold=int(input("Input the number of Cameras sold : "))
CamPrice=int(input("Enter the Price of a Camera : "))
Bonus=200*CamSold
Commission=0.12*CamSold*CamPrice
print("Bonus : ", Bonus)
print("Commission : ", Commission)
print("Gross Salary : ",BasicSalary+Bonus+Commission)