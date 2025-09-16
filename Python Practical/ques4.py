"""Write a Python program to simulate the exam performance of a student named
XYZ. Use random.uniform(0, 100) to generate five random floating-point exam
marks between 0 and 100 (inclusive) for five subjects: Mathematics, Physics,
Chemistry, English, and Computer Science.
Calculate the GPA using the formula: GPA = (sum of marks) / 5 / 10
Output the student's name, the marks for each subject (rounded to two decimal
places), the average marks (rounded to two decimal places), and the GPA (rounded
to two decimal places).
Constraints:
•Marks are floating-point numbers between 0 and 100 (inclusive).
•The GPA is calculated as the average of the marks divided by 10.
•The average marks is calculated as the sum of the marks divided by 5."""

import random
maths=(random.uniform(0,100))
phy=random.uniform(0,100)
chem=random.uniform(0,100)
eng=random.uniform(0,100)
comp=random.uniform(0,100)

avg_marks=(maths+phy+chem+eng+comp)/5

gpa=avg_marks/10

print("Student Name : XYZ")
print("Marks of Mathematics : ",f"{maths:.2f}")
print("Marks of Physics : ",f"{phy:.2f}")
print("Marks of Chemistry : ",f"{chem:.2f}")
print("Marks of English : ",f"{eng:.2f}")
print("Marks of Computer Science : ",f"{comp:.2f}")
print("Average marks : " ,f"{avg_marks:.2f}")
print("Marks of GPA : ",f"{gpa:.2f}")
