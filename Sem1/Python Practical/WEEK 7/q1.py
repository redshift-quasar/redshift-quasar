#Read the contents of pythonlab.csv and display each record neatly in separate lines.
with open("/home/atharva-patel/Desktop/College/College Python/Sem1/Python Practical/WEEK 7/pythonlab.csv") as f:
        for i in f:
            print(i.strip().split())
      