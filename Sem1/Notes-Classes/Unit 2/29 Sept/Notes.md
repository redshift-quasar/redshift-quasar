# Python Dictionary

A dictionary is a mutable, unordered collection that stores data as key-value pairs. It is also known as an associative array or hash map.

## Characteristics

- **Unordered:** Dictionaries do not maintain any order (insertion order is preserved from Python 3.7+).
- **Mutable:** Items can be added, changed, or removed.
- **Key-Value Pair Storage:** Each item is stored as a key-value pair.
- **Keys:** Must be unique and immutable (e.g., strings, numbers, tuples).
- **Values:** Can be of any data type and can be mutable.
- **No duplicate keys:** Assigning a duplicate key will overwrite the previous value.

## Syntax
- marks = {"Python": 99, "Maths": 90}


## Accessing Values

- Using keys:
    - print(marks["Python"]) #  Output: 99
-  Using `.get()` (safer, avoids KeyError):
    - print(marks.get("Physics", "Key not found")) # Output: Key not found


## Common Methods

| Method                | Description                                              |
|-----------------------|---------------------------------------------------------|
| `.keys()`             | Returns an iterable of keys                             |
| `.values()`           | Returns an iterable of values                           |
| `.items()`            | Returns an iterable of (key, value) tuples              |
| `.fromkeys(seq, val)` | Creates a dict from keys in `seq` with value `val`      |
| `.copy()`             | Returns a shallow copy of the dictionary                |
| `.pop(key)`           | Removes specified key and returns its value             |
| `.popitem()`          | Removes and returns the last inserted (key, value) pair |
| `.update()`           | Updates dictionary with another dict or iterable        |

## Traversing a Dictionary

     d = {"Python": 99, "Maths": 90}
  
  - Using keys


        for k in d:
    
            print(d[k])

  - Using values

        for v in d.values():
  
            print(v)

 - Using items
   
    
       for k, v in d.items():
    
            print(f"{k}: {v}")



## Nested Dictionary

    D = {
    
    "student 1": {"name": "Michael", "Roll": 100},
    "student 2": {"name": "Jackson", "Roll": 101}
    
    }



## Creating an Empty Dictionary
    a = {}

    or

    a = dict()


## Summary Table

| Feature         | Dictionary                |
|-----------------|--------------------------|
| Syntax          | Curly braces `{}`        |
| Duplicates      | No duplicate keys        |
| Keys            | Immutable, hashable      |
| Values          | Any type, mutable allowed|

Dictionaries are powerful for mapping unique keys to values, fast lookups, and representing structured data.
