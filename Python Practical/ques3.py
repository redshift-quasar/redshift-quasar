from datetime import datetime
date=int(input("Enter the Date : "))
month=int(input("Enter the Month : "))
year=int(input("Enter the Year : "))

dob=datetime(year,month,date)
current=datetime.now()
diff=dob-current

print("You have lived ", current)