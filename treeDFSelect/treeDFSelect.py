class Tree:
  def __init__(self, value):
    self.children = []
    self.value = value

  def printTree(self):

    def subroutine():
      print(self.value)
      for node in self.children:
        node.printTree()

    subroutine()

  def addNode(self, value):
    self.children.append(Tree(value))

  def treeDFSelect(self, filter):
    results = []
    def subroutine(node, deph):
      if (filter(self.value, depth)):
        results.append(self.value)

      for i in range(len(self.children)):
        child = self.children[i]
        subroutine(child, depth+1)

    subroutine(self, 0)

    return results


myTree = Tree(10)
myTree.addNode(6)
myTree.addNode(7)
myTree.addNode(9)
myTree.addNode(4)

myTree.addNode(13)

# for node in myTree.children:
#   print(node.value)

myTree.printTree()

