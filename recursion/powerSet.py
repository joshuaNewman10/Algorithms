# Return all subsets of a set

#Method 1: Using clever string concatenation
def findSubsets(str):
  solutions = {}

  def recurse(strSet):
    for idx, char in enumerate(strSet):
      first = strSet[0:idx]
      second = strSet[idx+1:len(strSet)]
      subSet = strSet[0:idx] + strSet[idx+1:len(strSet)]
      print(subSet, solutions)
      if subSet not in solutions:
        solutions[subSet] = True
        recurse(subSet)
  recurse(str)
  return solutions

# print findSubsets('123')


#Method 2: P(3) = P(2) + a3

def findSubsetsAlt(set,index):
  #Base case
  if (len(set) == index):
    allSubsets = []
    allSubsets.append([])
  else:
    allSubsets = findSubsetsAlt(set, index+1)
    # Get the new element to be added
    item = set[index]
    moreSubsets = []
    for subset in allSubsets:
      newSubset = []
      newSubset = subset + [item]
      moreSubsets.append(newSubset)
    allSubsets = allSubsets + moreSubsets

  print allSubsets

  return allSubsets


print findSubsetsAlt(['1','2','3'], 0)



