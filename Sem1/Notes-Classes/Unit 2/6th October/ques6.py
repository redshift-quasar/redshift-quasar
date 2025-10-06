#WAP to check the frequency of words in string using dict,list,set

str1="""Betty bought some butter,
But she said the butter’s bitter,
If I put it in my batter,
It will make my batter bitter,
But a bit of better butter,
That would make my batter better.

So Betty bought a bit of better butter,
And put it in her batter,
And the batter was not bitter,
So it was better Betty bought a bit of better butter."""


words=str1.lower().replace(",","").split()
print(set(words))

for word in set(words):
    print(word, words.count(word))