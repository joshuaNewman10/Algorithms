class Queue:
    def __init__(self):
        self.storage = []
        self.num_items = 0

    def enqueue(self, value):
        self.storage.append(value)
        self.num_items += 1

    def dequeue(self):
        self.num_items -= 1
        return self.storage.pop(0)


class Node:
    def __init__(self, value):
        self.value = value


class Tree:
    def __init__(self, value):
        self.node = Node(value)
        self.children = []

    def add_child(self, value):
        self.children.append(Tree(value))

    def print_in_bfs_order(self):
        self.bfs()

    def dfs(self):
        # Base Case, no children
        print(self.node.value)

        for tree in self.children:
            tree.dfs()

    def bfs(self):
        current_tree = None
        tree_queue = Queue()
        tree_queue.enqueue(self)

        while(tree_queue.num_items > 0):
            current_tree = tree_queue.dequeue()
            for child in current_tree.children:
                tree_queue.enqueue(child)
            print(current_tree.node.value)


myTree = Tree(4)
myTree.add_child(10)
myTree.add_child(20)
myTree.add_child(30)
myTree.children[0].add_child(100)

myTree.print_in_bfs_order()
