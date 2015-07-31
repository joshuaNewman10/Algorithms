class Node:
    def __init__(self, value):
        self.value = value


class Tree:
    def __init__(self, value):
        self.node = Node(value)
        self.children = []

    def add_child(self, value):
        self.children.append(Tree(value))

    def print_in_order(self):
        self.dfs()

    def dfs(self):
        # Base Case, no children
        print(self.node.value)

        for tree in self.children:
            tree.dfs()


myTree = Tree(4)
myTree.add_child(10)
myTree.add_child(20)

myTree.print_in_order()
