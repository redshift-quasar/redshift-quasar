# Python Lists

A **list** in Python is an ordered, mutable collection used to store multiple items in a single variable. Lists allow duplicate elements and can contain items of different data types.

## Key Features

- **Ordered:** Elements retain the order in which they were added and can be accessed by their index (zero-based).
- **Mutable:** Elements can be added, removed, or modified after the list is created.
- **Heterogeneous:** Lists can contain different data types simultaneously, including other lists.
- **Allow Duplicates:** The same value can appear multiple times within a list.

## Creating a List

Lists are created by enclosing comma-separated values inside square brackets `[]`.


## Accessing Elements

Elements are accessed by their zero-based index using square brackets:

# Python List Methods

Python lists provide a variety of built-in methods to manipulate list elements. These methods modify the list in place or provide information about the list.

## Common List Methods

| Method           | Description                                                       |
|------------------|-------------------------------------------------------------------|
| `append(x)`      | Adds an item `x` to the end of the list.                         |
| `extend(iterable)`| Extends the list by appending elements from an iterable.        |
| `insert(i, x)`   | Inserts an item `x` at a given position `i`.                     |
| `remove(x)`      | Removes the first occurrence of an item `x`. Raises ValueError if not found. |
| `pop([i])`       | Removes and returns the item at index `i`. Defaults to the last item if `i` is not specified. |
| `clear()`        | Removes all items from the list.                                 |
| `index(x[, start[, end]])` | Returns the index of the first occurrence of `x`. Raises ValueError if not found. Limits search to slice `[start:end]`. |
| `count(x)`       | Returns the number of times `x` appears in the list.            |
| `sort(key=None, reverse=False)` | Sorts the list in place.                                         |
| `reverse()`      | Reverses the elements of the list in place.                      |
| `copy()`         | Returns a shallow copy of the list.                              |



