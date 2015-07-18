#Merge Array B into Array A where A has buffer to hold B
#
#
#High Level Strategy 1
  #Make new Array (requires O(N+M) space)

def listMerge(A,B):
  tempList = []

  aCounter = 0
  bCounter = 0

  while aCounter < len(A):
    aElem = A[aCounter]
    bElem = B[bCounter]

    if ( aElem == 'x' ):
      for index in range(bCounter, len(B)):
        elem = B[index]
        tempList.append(elem)
      break

    if (aElem < bElem):
      tempList.append(aElem)
      aCounter+=1
    else:
      tempList.append(bElem)
      bCounter+=1

  return tempList

#High Level Strategy 1
  #Find highest elem in listA
    #Compare listA, listB highest elems
      #Iterate backwards filling up  listA
      #Build sorted array from back
def listMergeAlt(A,B):
  aIndex = A.index('x')-1
  bIndex = len(B)-1
  insertionIndex = len(A)-1

  while ( aIndex >= 0 ):
    aElem = A[aIndex]
    bElem = B[bIndex]
    print(aElem, bElem, 'index', aIndex, bIndex)

    if ( aIndex < 0 ):
      for x in range(bIndex, -1):
        A[insertionIndex] = B[x]
        insertionIndex-=1
      break

    if ( bIndex < 0 ):
      for x in range(aIndex, -1):
        A[insertionIndex] = A[x]
        insertionIndex-=1
      break

    if  ( aElem > bElem):
      A[insertionIndex] = aElem
      aIndex-=1
    else:
      A[insertionIndex] = bElem
      bIndex-=1

    insertionIndex-=1

  return A



listA = [0,2,3,4,'x','x','x','x']
listB = [1,5,10,20]

print(listMergeAlt(listA, listB))



