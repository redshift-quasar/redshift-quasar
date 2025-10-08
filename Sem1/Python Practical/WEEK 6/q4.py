#ques 4

voteList=[1,2,3,1,4,3,4,5,6,8,7,9,1,7,3,6,2,4,1]
voteListSet=set(voteList)
if len(voteList)!=len(voteListSet):
    print("Duplicate Votes Found")
dictVoteList={} # dictionary to store duplicate votes with id
setSingle=set() # set to store unnique voter id
for x in voteListSet:
    if voteList.count(x)>1:
        dictVoteList.update({x:voteList.count(x)})
    else :
        setSingle.add(x)
        
print("Vote List : ",voteList)
print("Duplicate Votes : ",dictVoteList)
print("Single Votes", setSingle)