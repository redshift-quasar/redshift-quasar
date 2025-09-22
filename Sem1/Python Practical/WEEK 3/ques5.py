"""You are designing a College Event Planner Tool. The organizer wants to quickly
check the calendar of any month to decide on suitable dates for events.
Write a Python program using the calendar module to display the calendar of a
specific month and year entered by the user."""
import calendar
month=int(input("Enter the month : "))
year=int(input("Enter the Year : "))
print("__________")

print(calendar.month(year,month))