#include <iostream>
using namespace std;

int main() {
    cout << "Hello, GitHub!" << endl;

    if (incorrectGuesses == 0) {
        cout << "  +---+\n";
        cout << "  |   |\n";
        cout << "      |\n";
        cout << "      |\n";
        cout << "      |\n";
        cout << "      |\n";
        cout << "=========\n";
    } else if (incorrectGuesses == 1) {
        cout << "  +---+\n";
        cout << "  |   |\n";
        cout << "  O   |\n";
        cout << "      |\n";
        cout << "      |\n";
        cout << "      |\n";
        cout << "=========\n";
    } else if (incorrectGuesses == 2) {
        cout << "  +---+\n";
        cout << "  |   |\n";
        cout << "  O   |\n";
        cout << "  |   |\n";
        cout << "      |\n";
        cout << "      |\n";
        cout << "=========\n";
    } else if (incorrectGuesses == 3) {
        cout << "  +---+\n";
        cout << "  |   |\n";
        cout << "  O   |\n";
        cout << " /|   |\n";
        cout << "      |\n";
        cout << "      |\n";
        cout << "=========\n";
    } else if (incorrectGuesses == 4) {
        cout << "  +---+\n";
        cout << "  |   |\n";
        cout << "  O   |\n";
        cout << " /|\\  |\n";
        cout << "      |\n";
        cout << "      |\n";
        cout << "=========\n";
    } else if (incorrectGuesses == 5) {
        cout << "  +---+\n";
        cout << "  |   |\n";
        cout << "  O   |\n";
        cout << " /|\\  |\n";
        cout << " /    |\n";
        cout << "      |\n";
        cout << "=========\n";
    } else if (incorrectGuesses == 6) {
        cout << "  +---+\n";
        cout << "  |   |\n";
        cout << "  O   |\n";
        cout << " /|\\  |\n";
        cout << " / \\  |\n";
        cout << "      |\n";
        cout << "=========\n";
        cout << endl << endl << endl << "\t" <<"Game Over :( " << endl ;
    } else {
        cout << "Game Over :(" << endl ;
    }
    return 0;
}
