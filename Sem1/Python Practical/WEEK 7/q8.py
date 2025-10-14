#Create a file before1990.txt with details of employees born before 1990.
import csv
with open("/home/atharva-patel/Desktop/College/College Python/Sem1/Python Practical/WEEK 7/pythonlab.csv", "r") as f, open("before1990.txt", "w") as out:
    reader = csv.DictReader(f)
    for row in reader:
        year = int(row["Birthdate"].split("-")[-1])
        if year < 1990:
            out.write(",".join(row.values()) + "\n")
print("Data written to before1990.txt")