class Node:
    def __init__(self, value):
        self.value = value


class Tree:
    def __init__(self, value):
        self.children = []
        self.node = Node(value)

    def add_child(self, value):
        self.children.append(Tree(value))


my_tree = Tree(10)
my_tree.add_child(100)
my_tree.add_child(50)


def path_adder(tree, target):
    paths = []

    def find_sum_paths(tree, current_sum, path, target):
        current_sum = current_sum + tree.node.value
        path.append(tree.node.value)

        if (current_sum == target):
            paths.append(path)

        elif (current_sum > target):
            return

        else:
            for child in tree.children:
                find_sum_paths(child, current_sum, path[:], target)

    find_sum_paths(tree, 0, [], target)
    return paths

print(path_adder(my_tree, 110))
