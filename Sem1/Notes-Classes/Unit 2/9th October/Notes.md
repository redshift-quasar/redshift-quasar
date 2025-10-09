# Function 

## Definition and Structure

        def function_name(parameters):
          """Docstring describing the function."""
          # Body of the function
          return something

- Use the `def` keyword.
- Parentheses for parameter list.
- Optional docstring (triple quotes).
- Use indentation for the body.

## Return Values

- Functions use the `return` statement to send a value back to the caller.

        def square(x):
          return x * x
          result = square(5) # result is 25

- Functions can return multiple values as tuples.

          def min_max(lst):
            return min(lst), max(lst)


## Arguments and Parameters

- **Positional arguments**: Matched to parameters by position.
- **Keyword arguments**: Matched by name during the call.
- **Default values**: Parameters can specify defaults.


      def power(base, exponent=2):
        return base ** exponent
  
- **Arbitrary arguments**: Gathered into tuples/lists/dicts.
    - `*args` for any number of positional arguments.
    - `**kwargs` for any number of keyword arguments.


          def report(*args, **kwargs):
            print(args)
            print(kwargs)

- **Positional-only parameters**: Before `/` in signature.
- **Keyword-only parameters**: After `*` in signature.

## Advanced Parameter Specification

    def func(pos1, pos2, /, norm, *, kw1, kw2):
      pass

- Parameters before `/` are positional-only.
- Parameters after `*` are keyword-only.

## Documentation and Docstrings

- Docstrings describe the function’s behavior, arguments, return value.

      def greet(name):
        """Greets user by name.
          Args:
            name (str): User's name.

          Returns:
            None
        """
        print(f"Hello, {name}!")


## Special Features

- Functions can have no content (`pass` statement).
- Functions can be assigned to variables, passed as arguments (first-class objects).
- Nested functions (functions defined inside others).
- Anonymous functions via `lambda`.

      double = lambda x: x * 2
- Decorators add extra behavior to functions.

      def decorator(func):
        def wrapper(*args, **kwargs):
          print("Before function call")
          result = func(*args, **kwargs)
          print("After function call")
          return result
        return wrapper


## Functional Programming and Iterables

- Many built-in functions (e.g., `map`, `filter`, `reduce`, `sum`) can accept functions as arguments and work with iterables[web:17][web:19].

## Example: Fibonacci Function

    def fib(n):
      """Print Fibonacci series less than n."""
      a, b = 0, 1
      while a < n:
        print(a, end=' ')
        a, b = b, a + b
        print()


## Summary Table: Parameter Types

| Parameter Type      | Example Syntax                  | When Used                             |
|---------------------|---------------------------------|---------------------------------------|
| Positional-only     | `def f(x, /)`                   | Enforce parameter by position |
| Keyword-only        | `def f(*, x)`                   | Only by name, after `*`       |
| Arbitrary positional| `def f(*args)`                  | Variable input no.            |
| Arbitrary keyword   | `def f(**kwargs)`               | Variable keyword input        |


  
