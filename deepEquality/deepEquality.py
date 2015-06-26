#!/usr/bin/python

import sys

def deepEquals(apple, orange):  
  
  # Recursive Case: apple is a list, dictionary or tuple
  if type(apple) is list:
    print 'a list'
    for index in range(len(apple)):
      if deepEquals(apple[index], orange[index]) is False:
        return False

  elif type(apple) is tuple:
    print 'a tuple'
    for index in range(len(apple)):
      if deepEquals(apple[index], orange[index]) is False:
        return False

  elif type(apple) is dict:
    print 'a dict'
    for prop in apple:
      if deepEquals(apple[prop], orange[prop]) is False:
        return False

  # Base Case: apple is a number or a strin
  else:
    print 'not a list, tuple, dict'
    if apple != orange:
      return False

  return True
  
def main():
  # obj1 = sys.argv[1]
  # obj2 = sys.argv[2]
  list1 = [1,2,3,4]
  list2 = [1,2,3,4]

  tuple1 = ('a','b','c','d')
  tuple2 = ('a','b','c','f')

  dict1 = {'a': 10, 'b': 20, 'c':30}
  dict2 = {'a': 10, 'b':20, 'c':100}

  # result = deepEquals(obj1, obj2)
  result = deepEquals(dict1, dict2)
  if result == True:
    print('These objects are the same:', dict1, dict2)
  else:
    print('These objects are different:', dict1, dict2)

if __name__ == '__main__':
  main()

# def main():
#   if len(sys.argv) != 3:
#     print 'usage: ./wordcount.py {--count | --topcount} file'
#     sys.exit(1)

#   option = sys.argv[1]
#   filename = sys.argv[2]
#   if option == '--count':
#     print_words(filename)
#   elif option == '--topcount':
#     print_top(filename)
#   else:
#     print 'unknown option: ' + option
#     sys.exit(1)


