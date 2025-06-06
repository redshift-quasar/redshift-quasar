# 🍌 Hangman – Fruit Edition (C++)

A fun command-line version of the classic Hangman game, written in C++ using standard libraries and random fruit names!

  ---

## 🕹️ Gameplay

- The game picks a random fruit name (e.g., "banana", "grapefruit", etc.).
- You guess one letter at a time.
- If the guess is correct, it's revealed in the word.
- You have **6 incorrect guesses** before the game ends.
- ASCII art draws the hangman as you make mistakes.

---

## 🧰 Requirements

To compile and run this C++ project, make sure your system meets the following:

### ✅ Required

- **C++11 or higher**
  - The code uses modern features like `<random>` and range-based `for` loops.
- **C++ Compiler**
  - Recommended: `g++` (GNU Compiler)
  - Alternatives: `clang++`, MSVC (Windows)
- **Terminal or Command Prompt**
  - To compile and execute the program via command line.

---

### 🖥️ Platform Support

| OS       | Supported | Notes                              |
|----------|-----------|-------------------------------------|
| Linux    | ✅        | Tested on Ubuntu 22.04 with `g++`   |
| macOS    | ✅        | Should work with `clang++`          |
| Windows  | ✅        | Replace `system("clear")` with `system("cls")` or remove it for compatibility |

---

### 🧪 Tested On

- Ubuntu 22.04 – `g++ 11`
- Windows 10 – MinGW via Git Bash

---


## 🚀 How to Run

1. **Clone the repository** or download the file:
   ``` bash
   git clone https://github.com/redshift-quasar/Hangman.git
   cd Hangman
   ```

2. **Compile the program**:

   ``` bash
   g++ hangman.cpp -o hangman
   ```

3. **Run the game**:
 
   ``` bash
   ./hangman
   ```
   ---

## ✨ Features

- ✅ Random Word Generation
Uses C++11’s `<random>` library with `std::random_device` and `mt19937` for high-quality random fruit selection.

- 🎨 ASCII-Based Hangman Drawing
Visualizes the classic hangman figure stage-by-stage using ASCII characters as the player makes incorrect guesses.

- 🔠 Letter-by-Letter Guessing
Accepts single-character inputs and updates the current word display in real time.

- 🧠 String Matching Logic
Checks each guessed letter against the target word and updates only matching positions.

- 📺 Screen Clearing Between Guesses
Uses `system("clear")` to refresh the terminal after each guess for a cleaner game interface.

  **⚠️ (Replace with `system("cls")` on Windows or remove for cross-platform support)**

- ⌛ Limited Guesses (6 chances)
Game ends with “Game Over” and shows the full word if the player runs out of attempts.

- 🧹 Clean Output Display
Structured and readable console UI that separates input, current word progress, and hangman visuals clearly.

- 📜 Expandable Word List
Easily add more fruits or change the word category by editing the `fruits[]` array.

- 🛑 Safe Exit
Program gracefully ends when the player either wins or loses, without crashes or memory issues.

   ---

## 📄 License

This game is licensed under the [MIT License](./LICENSE).
> Available for free use, modification, and distribution.

---

## 🤔 Notes
- Clear screen uses system("clear") → works on Linux/macOS. On Windows, replace with:
  ``` C++
  system("cls");
  ```
- To add more words, expand the `fruits[]` array.

  ---

 ## 🙋‍♂️ Author
 #### Atharva Patel  
 **GitHub: [redshift-quasar](https://github.com/redshift-quasar)**  
  Happy hacking!

    




   
