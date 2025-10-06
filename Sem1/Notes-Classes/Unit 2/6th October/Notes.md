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

| Method           | Description                                                      | Example                                  |
|------------------|------------------------------------------------------------------|------------------------------------------|
| `capitalize()`   | Capitalizes first character and lowers the rest                  | `"hello".capitalize()` → `"Hello"`       |
| `casefold()`     | Converts string to lowercase aggressively for caseless matching | `"HELLO".casefold()` → `"hello"`         |
| `center(width)`  | Centers the string in a field of given width                     | `"hi".center(6)` → `"  hi  "`            |
| `count(sub)`     | Counts occurrences of substring                                 | `"banana".count("a")` → `3`              |
| `encode()`       | Encodes the string into bytes                                    | `"hello".encode()`                        |
| `endswith(suffix)` | Returns True if string ends with substring                       | `"test".endswith("st")` → `True`         |
| `expandtabs(tabsize)` | Converts tabs to spaces with specified tab size              | `"a\tb".expandtabs(4)` → `"a   b"`       |
| `find(sub)`      | Returns lowest index where substring found, or -1 if not found  | `"hello".find("l")` → `2`                 |
| `format()`       | Formats string with placeholders                                 | `"Hello, {}".format("world")`             |
| `format_map()`   | Like format, but uses a dict                                    | `"{name}".format_map({'name':'Joe'})`    |
| `index(sub)`     | Like find(), but raises ValueError if substring not found       | `"hello".index("l")` → `2`                |
| `isalnum()`      | True if all chars are alphanumeric                              | `"abc123".isalnum()` → `True`             |
| `isalpha()`      | True if all chars are alphabetic                                | `"abc".isalpha()` → `True`                 |
| `isascii()`      | True if all characters are ASCII                               | `"abc".isascii()` → `True`                 |
| `isdigit()`      | True if all characters are digits                              | `"123".isdigit()` → `True`                 |
| `islower()`      | True if all cased chars are lowercase                          | `"abc".islower()` → `True`                 |
| `isspace()`      | True if all characters are whitespace                          | `" \t\n".isspace()` → `True`               |
| `istitle()`      | True if string is in title case                                | `"Hello World".istitle()` → `True`         |
| `isupper()`      | True if all cased chars are uppercase                          | `"HELLO".isupper()` → `True`               |
| `join(iterable)` | Joins iterable elements with the string separator              | `",".join(["a", "b"])` → `"a,b"`           |
| `ljust(width)`   | Left-justifies string in a field of given width                | `"hi".ljust(6)` → `"hi    "`               |
| `lower()`        | Converts string to lowercase                                    | `"HELLO".lower()` → `"hello"`               |
| `lstrip()`       | Removes leading whitespace                                      | `"  hi ".lstrip()` → `"hi "`                 |
| `partition(sep)` | Splits string into tuple before, sep, after first sep          | `"hello world".partition(" ")` → `("hello", " ", "world")` |
| `replace(old, new)` | Replaces all occurrences of old with new                     | `"hello".replace("l", "r")` → `"herro"`   |
| `rfind(sub)`     | Like find(), but returns highest index                         | `"hello".rfind("l")` → `3`                 |
| `rindex(sub)`    | Like index(), but returns highest index                        | `"hello".rindex("l")` → `3`                |
| `rjust(width)`   | Right-justifies string in a field of given width               | `"hi".rjust(6)` → `"    hi"`               |
| `rpartition(sep)` | Splits string into tuple before, sep, after last sep          | `"hello world".rpartition(" ")` → `("hello", " ", "world")` |
| `rsplit(sep, maxsplit)` | Splits string from the right by sep, returns list         | `"a,b,c".rsplit(",", 1)` → `["a,b", "c"]` |
| `rstrip()`       | Removes trailing whitespace                                     | `"  hi ".rstrip()` → `"  hi"`               |
| `split(sep, maxsplit)` | Splits string by sep, returns list                          | `"a,b,c".split(",")` → `["a", "b", "c"]`   |
| `splitlines()`   | Splits string at line breaks, returns list                     | `"a\nb\nc".splitlines()` → `["a", "b", "c"]` |
| `startswith(prefix)` | Returns True if string starts with prefix                   | `"hello".startswith("he")` → `True`        |
| `strip()`        | Removes leading and trailing whitespace                        | `"  hi ".strip()` → `"hi"`                   |
| `swapcase()`     | Swaps case of each character                                    | `"Hello".swapcase()` → `"hELLO"`              |
| `title()`        | Converts to title case (first letter uppercase)                | `"hello world".title()` → `"Hello World"`   |
| `translate(table)` | Translates characters using translation table (from maketrans) | `table = str.maketrans("abc","123"); "abc".translate(table)` → `"123"` |
| `upper()`        | Converts string to uppercase                                    | `"hello".upper()` → `"HELLO"`               |
| `zfill(width)`   | Pads numeric string on the left with zeros                      | `"42".zfill(5)` → `"00042"`                   |



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


