from datetime import datetime

date = int(input("Enter the Date : "))
if date < 1 or date > 31:
    print("Invalid date")

month = int(input("Enter the Month : "))
if month < 1 or month > 12:
    print("Invalid month")

year = int(input("Enter the Year : "))
if year < 1900:
    print("Enter year after 1900")

dob = datetime(year, month, date)
current = datetime.now()

if dob > current:
    print("Entered date is in the future. Current date is:", current)
else:
    diff = (current - dob).days
    print("You have lived", diff, "days")
