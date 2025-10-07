#WAP to check the frequency of words in string using dict,list,set

str1="""Betty bought some butter
But she said the butter bitter
If I put it in my batter
It will make my batter bitter
But a bit of better butter
That would make my batter better"""


words=str1.lower().split()
print(set(words))

for word in set(words):
    print(word, words.count(word))
