#Ques 1
listMusic=[1,2,4,5,8,9]
listSports={1,2,3,6,7,9}

#converting List into set
music=set(listMusic)
sports=set(listSports)

inOne=music.symmetric_difference(sports) #Removing the common part(Both common element) of both set

atleastInOne=music.union(sports) #removing duplicates(One element)

both=music.intersection(sports) #taking the Common students in both club

inMusic=music.difference(sports) #removing the students who were in sports

print("Student in Music club ",music)
print("Student in Sports club ",sports)
print("Student in Both clubs ",both)
print("Student in atleast one club ",atleastInOne)
print("Student only in Music club ",inMusic)
print("Student only in one club ",inOne)
