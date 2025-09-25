L=[[1,2,3],[4,5,6],[7,8,9]]
for i in range (3):
    print( )
    for j in range(3):
        print(L[i][j],end=" ")
        
        
for row in L:
    print(*row)
