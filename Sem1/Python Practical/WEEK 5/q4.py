# 1. Pack items into a tuple, unpack first three, print rest as list and check type
cart = ("Milk", "Bread", "Butter", "Cheese", "Jam", "Eggs")
item1, item2, item3, *rest = cart
print("First item:", item1)
print("Second item:", item2)
print("Third item:", item3)
print("Remaining items as list:", rest)
print("Type of rest:", type(rest))

# 2. Display all items in the cart using a loop
print("All items in the cart:")
for item in cart:
    print(item)

# 3. Print only the first 3 items and the last 2 items using slicing
print("First 3 items:", cart[:3])
print("Last 2 items:", cart[-2:])

# 4. Check whether "Butter" and "Honey" are present in the cart
print("Is 'Butter' in cart?", "Butter" in cart)
print("Is 'Honey' in cart?", "Honey" in cart)

# 5. Add a new tuple ("Juice", "Fruits") to the cart and display the updated cart
new_items = ("Juice", "Fruits")
updated_cart = cart + new_items
print("Updated cart:", updated_cart)

# 6. Find the index of "Cheese" in the cart
print("Index of 'Cheese':", cart.index("Cheese"))

# 7. Count how many times "Butter" appears in the cart
print("Count of 'Butter':", cart.count("Butter"))
