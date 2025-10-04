# Python Sets

A set is an unordered, mutable collection of unique, immutable elements in Python.

## Key Characteristics

- **Unordered:** No guaranteed order of elements.
- **Mutable:** Elements can be added or removed.
- **Unique Elements:** No duplicates allowed.
- **Elements Must Be Immutable:** Only hashable types (e.g., numbers, strings, tuples) can be set elements.
    -  Sets cannot contain mutable elements like lists or other sets.

## Syntax

- Creating a set

       s = {1, 2, 3}

- Or using the set constructor

      s = set()

  
## Common Set Methods

| Method                | Description                                              |
|-----------------------|---------------------------------------------------------|
| `add(elem)`           | Adds an element to the set                              |
| `remove(elem)`        | Removes an element; raises error if not found           |
| `discard(elem)`       | Removes an element if present; does nothing if absent   |
| `pop()`               | Removes and returns an arbitrary element                |
| `clear()`             | Removes all elements                                    |
| `copy()`              | Returns a shallow copy                                  |
| `update(iterable)`    | Adds elements from an iterable                          |
| `union(set)`          | Returns a new set with all elements from both sets      |
| `intersection(set)`   | Returns a new set with common elements                  |
| `difference(set)`     | Returns a new set with elements in this set but not the other |
| `symmetric_difference(set)` | Returns a new set with elements in either set but not both |
| `issubset(set)`       | Checks if set is a subset of another                    |
| `issuperset(set)`     | Checks if set is a superset of another                  |
| `isdisjoint(set)`     | Checks if sets have no elements in common               |

## Examples

- Add and remove elements

      s = {1, 2, 3}
      s.add(4) # {1, 2, 3, 4}
      s.remove(2) # {1, 3, 4}
      s.discard(5) # No error if 5 not present

- Set operations

      a = {1, 2, 3}
      b = {2, 3, 4}
      print(a.union(b)) # {1, 2, 3, 4}
      print(a.intersection(b)) # {2, 3}
      print(a.difference(b)) # {1}
      print(a.symmetric_difference(b)) # {1, 4}

## Notes

- Sets are useful for membership testing, removing duplicates, and mathematical set operations.
- Sets cannot contain mutable elements like lists or other sets.

