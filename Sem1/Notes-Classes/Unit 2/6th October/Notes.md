# Python Strings Detailed Summary

## String Basics
- Strings in Python are sequences of Unicode characters.
- Defined using single quotes `'...'`, double quotes `"..."`, or triple quotes for multi-line strings `'''...'''` or `"""..."""`.
- Strings are **immutable**: any operation on a string returns a new string, original string stays unchanged.
- Strings support indexing and slicing:  

         s = "hello"
         s # 'e'
         s[1:4] # 'ell'


## Common String Methods

| Method           | Syntax                                 | Description                                                                | Example                                    |
|------------------|----------------------------------------|----------------------------------------------------------------------------|--------------------------------------------|
| `capitalize()`   | `str.capitalize()`                     | Capitalizes first character and lowers the rest                            | `"hello".capitalize()` → `"Hello"`         |
| `casefold()`     | `str.casefold()`                       | Lowercases string aggressively for caseless matching                       | `"HELLO".casefold()` → `"hello"`           |
| `center()`       | `str.center(width, fillchar=' ')`      | Centers string in given width with padding                                 | `"hi".center(6)` → `"  hi  "`              |
| `count()`        | `str.count(sub, start=0, end=len(str))`| Counts substring occurrences in optional range                             | `"banana".count("a")` → `3`                |
| `encode()`       | `str.encode(encoding='utf-8', errors='strict')` | Encodes string to bytes                                         | `"hello".encode()`                         |
| `endswith()`     | `str.endswith(suffix, start=0, end=len(str))` | Checks if string ends with suffix within range                  | `"test".endswith("st")` → `True`           |
| `expandtabs()`   | `str.expandtabs(tabsize=8)`            | Converts tabs to spaces using tabsize                                      | `"a\tb".expandtabs(4)` → `"a   b"`         |
| `find()`         | `str.find(sub, start=0, end=len(str))` | Lowest index of substring or -1 if not found                               | `"hello".find("l")` → `2`                  |
| `format()`       | `str.format(*args, **kwargs)`          | Formats placeholders with values                                           | `"Hello, {}".format("world")`              |
| `format_map()`   | `str.format_map(mapping)`              | Formats with a dictionary                                                  | `"{name}".format_map({'name':'Joe'})`      |
| `index()`        | `str.index(sub, start=0, end=len(str))`| Like find(), but error if not found                                        | `"hello".index("l")` → `2`                 |
| `isalnum()`      | `str.isalnum()`                        | Returns True if all chars alphanumeric                                     | `"abc123".isalnum()` → `True`              |
| `isalpha()`      | `str.isalpha()`                        | Returns True if all chars alphabetic                                       | `"abc".isalpha()` → `True`                 |
| `isascii()`      | `str.isascii()`                        | Returns True if all chars ASCII                                            | `"abc".isascii()` → `True`                 |
| `isdigit()`      | `str.isdigit()`                        | Returns True if all chars are digits                                       | `"123".isdigit()` → `True`                 |
| `islower()`      | `str.islower()`                        | Returns True if all cased chars lowercase                                  | `"abc".islower()` → `True`                 |
| `isspace()`      | `str.isspace()`                        | Returns True if all chars are whitespace                                   | `" \t\n".isspace()` → `True`               |
| `istitle()`      | `str.istitle()`                        | Returns True if string is in title case                                    | `"Hello World".istitle()` → `True`         |
| `isupper()`      | `str.isupper()`                        | Returns True if all cased chars uppercase                                  | `"HELLO".isupper()` → `True`               |
| `join()`         | `str.join(iterable)`                   | Joins iterable elements with separator                                     | `",".join(["a", "b"])` → `"a,b"`           |
| `ljust()`        | `str.ljust(width, fillchar=' ')`       | Left-justifies in field of width with padding                              | `"hi".ljust(6)` → `"hi    "`               |
| `lower()`        | `str.lower()`                          | Converts string to lowercase                                               | `"HELLO".lower()` → `"hello"`              |
| `lstrip()`       | `str.lstrip(chars=None)`               | Removes leading whitespace or characters                                   | `"  hi ".lstrip()` → `"hi "`               |
| `partition()`    | `str.partition(sep)`                   | Splits string into tuple at first sep                                      | `"hello world".partition(" ")` → `("hello", " ", "world")` |
| `replace()`      | `str.replace(old, new, count=-1)`      | Replaces old with new, optionally count times                              | `"hello".replace("l", "r")` → `"herro"`    |
| `rfind()`        | `str.rfind(sub, start=0, end=len(str))`| Highest index of substring or -1 if not found                              | `"hello".rfind("l")` → `3`                 |
| `rindex()`       | `str.rindex(sub, start=0, end=len(str))`| Like rfind(), but error if not found                                       | `"hello".rindex("l")` → `3`                |
| `rjust()`        | `str.rjust(width, fillchar=' ')`       | Right-justifies in field of width with padding                             | `"hi".rjust(6)` → `"    hi"`               |
| `rpartition()`   | `str.rpartition(sep)`                  | Splits into tuple at last sep                                              | `"hello world".rpartition(" ")` → `("hello", " ", "world")` |
| `rsplit()`       | `str.rsplit(sep=None, maxsplit=-1)`    | Splits from right, returns list                                            | `"a,b,c".rsplit(",", 1)` → `["a,b", "c"]`  |
| `rstrip()`       | `str.rstrip(chars=None)`               | Removes trailing whitespace or characters                                  | `"  hi ".rstrip()` → `"  hi"`              |
| `split()`        | `str.split(sep=None, maxsplit=-1)`     | Splits from left, returns list                                             | `"a,b,c".split(",")` → `["a", "b", "c"]`   |
| `splitlines()`   | `str.splitlines(keepends=False)`       | Splits at line breaks, returns list                                        | `"a\nb\nc".splitlines()` → `["a", "b", "c"]`|
| `startswith()`   | `str.startswith(prefix, start=0, end=len(str))` | Checks if string starts with prefix in range                  | `"hello".startswith("he")` → `True`        |
| `strip()`        | `str.strip(chars=None)`                | Removes leading and trailing whitespace or chars                           | `"  hi ".strip()` → `"hi"`                 |
| `swapcase()`     | `str.swapcase()`                       | Swaps case of each char                                                    | `"Hello".swapcase()` → `"hELLO"`           |
| `title()`        | `str.title()`                          | Converts to title case                                                     | `"hello world".title()` → `"Hello World"`  |
| `translate()`    | `str.translate(table)`                 | Uses table to replace chars (from maketrans)                               | `table = str.maketrans("abc","123"); "abc".translate(table)` → `"123"` |
| `upper()`        | `str.upper()`                          | Converts string to uppercase                                               | `"hello".upper()` → `"HELLO"`              |
| `zfill()`        | `str.zfill(width)`                     | Pads numeric string on left with zeros                                     | `"42".zfill(5)` → `"00042"`                |




## String Formatting
- f-strings (Python 3.6+):  

         name = "Alice"
         f"Hello, {name}!" # "Hello, Alice!"

- `str.format()` method:  

         "Hello, {}".format(name)

- Old style `%` formatting:  

         "Hello, %s" % name


## Useful Techniques
- Method chaining: Combine multiple methods in one line:

         s = " Hello World! "
         s.strip().lower().replace(" ", "_") # "hello_world!"
  
## String Immutability
- Any string method returns a **new string**; original string remains unchanged:



--- 



# Python String Indexing and Slicing 

## String Indexing
- Each character in a string is assigned an index starting from 0 for the first character.
- Indexing allows accessing a single character by its position.
- Indexes can be positive (from the start) or negative (from the end).
  - Positive example: `s[0]` returns the first character.
  - Negative example: `s[-1]` returns the last character.

## String Slicing
- Slicing extracts a substring from a string using the syntax:  
  `substring = s[start:end:step]`
- Parameters:
  - `start` (optional): starting index (inclusive). Defaults to 0 if omitted.
  - `end` (optional): ending index (exclusive). Defaults to length of string if omitted.
  - `step` (optional): step size between indices. Defaults to 1 (no skipping).
- The slice captures characters from position `start` up to, but not including, `end`.

## Examples of Slicing
- Get substring from index 0 to 4:  
  `s[0:5]` → characters at positions 0,1,2,3,4
- Omit start to slice from the beginning:  
  `s[:5]` gets first five characters.
- Omit end to slice to the end:  
  `s[5:]` gets characters from position 5 to end.
- Use negative indices to slice relative to the end:  
  `s[-5:-2]` gets characters 5 from the end up to 2 from the end.
- Use step to skip characters:  
  `s[::2]` gets every second character.
- Negative step to reverse or slice backwards:  
  `s[::-1]` reverses the string.

## Important Points
- Slicing treats start index as inclusive and end index as exclusive.
- If start > end with positive step, an empty string is returned.
- String slicing always returns a new string; original string remains unchanged.

## Glossary:
- Indexing: Accessing a single element by position.
- Slicing: Extracting a substring using a range of indices.
- Immutable: String cannot be changed in place; slicing returns a new string.


