num = int(input("Enter the Number: "))
is_sq = False
i = 1
while i * i <= num:
    if i * i == num:
        is_sq = True
        break
    i += 1
print(is_sq)
