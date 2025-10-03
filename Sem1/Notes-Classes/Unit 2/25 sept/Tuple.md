# Python Tuple Overview

A tuple is an ordered, immutable collection of elements in Python.

## Characteristics of Tuples

1. A tuple can have one or more elements.
2. It can store homogeneous or heterogeneous elements.
3. Indexing is supported:
   - Zero-based indexing: from 0 to len-1
   - Negative indexing: from -1 to -len (accesses from the end)
4. Nested tuples are supported.
5. Tuples are iterable.
6. Duplicates are allowed in tuples.
7. Immutable — once created, elements cannot be changed.
8. Supports slicing.
9. Packing and unpacking are supported.
10. Single element tuple needs a trailing comma to distinguish from parentheses:
    - `(10)` is an integer.
    - `(10,)` is a tuple.
11. Supports swapping, e.g., `(a, b) = (b, a)`.
12. Functions can return multiple values as tuples by default.
13. `dir(tuple)` shows built-in methods available for tuples.

## Applications

- Used as dictionary keys (hashable).
- Represent fixed coordinate data (e.g., RGB values).

## Features Comparison with List

| Feature    | List                          | Tuple                     |
|------------|-------------------------------|---------------------------|
| Mutability | Mutable                       | Immutable                 |
| Syntax     | Square brackets `[]`          | Parentheses `()`          |
| Performance| Slower                       | Faster                    |
| Nature     | Dynamic (values can be changed)| Static (unchangeable)      |

## Empty Tuple Creation

- a = ()

  or
  a = tuple() # tuple constructor


## Important Notes

- `(0)` is an integer, while `(0,)` is a tuple.
- Tuples can contain other objects, including lists and tuples:
  - t = (0,[a,b,c], (1, 2, 3))

- Elements in tuples cannot be changed once created, but if the tuple contains mutable objects like lists, those objects can be modified.
- Assignment of one tuple to another refers to the same tuple (no deep copy):
  - t1 = (1, 2, 3)
  - t2 = t1
- `.copy()` method not available; use `t2 = tuple(t1)` for copying.

## Common Tuple Methods

| Method                | Description                                      |
|-----------------------|------------------------------------------------|
| `len()`               | Returns length of the tuple                      |
| `sum()`               | Returns sum of numeric elements                  |
| `max()`               | Returns max element                               |
| `min()`               | Returns min element                               |
| `sorted()`            | Returns a sorted list from the tuple’s items    |
| `sorted(t1, reverse=True)` | Returns a reversed sorted list              |
| `index()`             | Returns first index of specified element        |
| `count()`             | Returns number of occurrences of a value        |
| `type()`              | Returns the type                                 |
| `id()`                | Returns the unique id of the tuple object        |
| `any()`               | Returns `True` if any element is true, else `False` |

## Packing and Unpacking

- Packing groups multiple values into a tuple:
  - t = 1, 2, 3 - tuple packing
- Unpacking extracts elements:
  - a, b, c = t

##  Immutable Tuple Containing a Mutable Element

Tuples are immutable, meaning you cannot change their elements once the tuple is created. However, if a tuple contains a mutable element (like a list), that mutable element can be changed.

### Explanation

- The tuple `a` itself cannot be changed by assigning a new object to an index like `a[3] = something`, which would raise a `TypeError`.
- However, the list inside the tuple (`a[3]`) is mutable, so you can modify its contents (e.g., changing the second item from `5` to `100`).
- This demonstrates that while tuples themselves are immutable, they can contain mutable objects whose internal state can still change.

