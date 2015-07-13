"""
Once len(stack) > n make new stack
Expose an interface of just a single stack though
(pop and push)
"""

class set_of_Stacks():
  def __init__(self):
    self.max_length = 3
    self.stacks = []
    self.current_stack = 0

  def pop(self):
    print 'pop item'

    #in case popping has been messed up from popAt
    if ( len(self.stacks[self.current_stack]) == 0):
      self.current_stack -=1
      pop(self)

    #get item
    item = self.stacks[self.current_stack].pop()

    #check length of stack, is it ok to leave sparse stack collection?
    if ( len(self.stacks[self.current_stack]) == 0 ):
      self.current_stack-=1

    return item



  def push(self, item):
    print 'push item'

    #if uninitialized stack (not sure this will ever happen)
    if ( len(self.stacks) == 0 or self.current_stack > len(self.stacks) - 1):
      self.stacks.append([])
      self.stacks[self.current_stack].append(item)
      return

    #Check if stack full
    stack_length = len(self.stacks[self.current_stack])

    #full stack, make new one by calling push again
    if ( stack_length ) >= self.max_length:
      self.current_stack +=1
      self.push(item)
      return

    #usual case, just add item
    self.stacks[self.current_stack].append(item)

    def popAt(self, sub_stack):
      if ( self.current_stack > len(self.stacks) ):
        return None

      item = self.stacks[sub_stack].pop()
      return item



myStacks = set_of_Stacks()
myStacks.push(4)
myStacks.push(10)
myStacks.push(8)
myStacks.push(9)

print(myStacks.stacks)
print(myStacks.pop())
print(myStacks.pop())
print(myStacks.stacks)
