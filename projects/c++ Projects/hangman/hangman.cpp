// hman modification with clear screen opt

#include <iostream>
#include <string>
#include <random>
#include <bits/stdc++.h>

 using namespace std;

  
  void printHangman(int incorrectGuesses,int co ,int inco ,int win , string x, string d[],string c) {
    cout << "Your guess : "<< c;
    cout << endl;
    cout << endl;
    {
        if(win!=2){
     if(co==1){
        cout << "Correct guess!";
        
    }
    if(inco==1){ 
    
        cout << "Incorrect guess";
    }
    cout << endl;
    cout << endl;
    }
   else if(win==2){

      cout << "You won!!!!! " << endl << endl;
            cout <<"The word was : ";
    
   }
  }
     
    for(int j=0; j<x.length(); j++){
        cout << d[j] << " ";
    }
    cout << endl;
    cout << endl;
      
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
        cout << endl << endl << endl << "\t" <<"Game Over :(" << endl << "\t" <<"The word was : " << x << "\n";
    } else {
        cout << "Game Over :(" << endl << "The word was: " << x << "\n";
    }
  }

int main() {
   
    string fruits[] = {"banana", "grapes", "orange", "papaya", "strawberry", "watermelon", "apricot", "avocado", "blueberry", "cantaloupe", "cranberry", "grapefruit", "honeydew", "raspberry", "tangerine", "blackcurrant", "boysenberry", "gooseberry", "kumquat", "loganberry", "nectarine", "passionfruit", "plantain", "pomegranate"};// array of fruits for the game
       
    int l=sizeof(fruits)/sizeof(fruits[0]);// number of fruits in the array

    // Seed the random number generator using a high-quality source.
    random_device rd;
    mt19937 gen(rd());

    // Define the range for the random number (e.g., between 1 and 100).
    uniform_int_distribution<> dist(0, l);

    // Generate and print a random number.
    int randomNumber = dist(gen);


     /*cout << "enter your name : " << endl;
    string name;
    getline(cin, name); 

    cout << "Hello " << name << endl;*/

    cout<< "welcome to hangman: " << endl << endl;
    
        cout << "  +---+\n";
        cout << "  |   |\n";
        cout << "      |\n";
        cout << "      |\n";
        cout << "      |\n";
        cout << "      |\n";
        cout << "=========\n";
        
        string x = fruits[randomNumber];
        string d[x.length()];
        cout<< "the word is: " ;
     for(int i=0; i<x.length(); i++){
        cout << "_ ";
        d[i]="_";
     }
    
    cout << endl;
    cout << endl;
    int incorrectGuesses = 0;

    int win=1;
    
    while(incorrectGuesses < 6 && win<2){
        
        string n="";
        int co,inco;
    cout << "enter your guess: ";
    string c="";
    cin >> c;
    int b =0;
    co=inco=0;
    
    while (b<x.length()) {
        
        if(c[0]==x[b]){
            co=1;
            d[b]=c[0];
             
             inco=0;
        }
        else{
            
            inco=1;
            if(co==1){
                inco=0;
            }
        }
        b++;
    }
     system ("clear");
    for(int k=0;k<x.length();k++){
        n+=d[k];
    }
        if(n== fruits[randomNumber]){
            win++;
    
    }
   
    if(inco==1){ 
    
        incorrectGuesses++;
       
    }
    cout << endl;
    cout << endl;

    
    printHangman(incorrectGuesses, co, inco, win, x, d,c);

    cout << endl << endl << endl;
     

    }
    
    return 0;
}
                            
