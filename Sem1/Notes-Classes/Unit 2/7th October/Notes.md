# Python File Handling Summary

Python enables reading from and writing to files with built-in functions for persistent data storage and processing tasks[web:10].

## Basic Operations

- **Opening files**: Use `open(filename, mode)` to open files.
- **Closing files**: Call `.close()` on file objects or use `with open(...) as file:` to handle files contextually and ensure proper closure[web:10].

## Reading Files

- `read()`: Reads the whole file or specified bytes.
- `readline()`: Reads a single line.
- `readlines()`: Reads all lines as a list.

## Writing Files

- Use `"w"` mode to write (overwrites).
- Use `"a"` mode to append to files.
- Use `"x"` mode to create new files; error if it exists.
- Use `.write()` to output text data.

## File Modes

| Mode | Purpose                |
|------|------------------------|
| r    | Read                   |
| w    | Write (overwrite)      |
| a    | Append                 |
| x    | Write, error if exists |
| b    | Binary mode            |
| t    | Text mode (default)    |
| +    | Read and write         |
[web:10]

## File Existence and Deletion

             import os
            
            os.path.exists("file.txt") # Check existence
            os.remove("file.txt") # Delete file