class TreeNode:
    def __init__(self, value):
        self.value = value


class Tree:
    def __init__(self, value):
        self.children = []
        self.value = TreeNode(value)

    def add_child(self, value):
        self.children.append(Tree(value))

# For each node calc height of left tree, height of right tree
# Also calc left diam, right diam
# Max diam of node is left diam, right diam or left height + right height + 1
def calc_max_diam(tree, diameter):
    # Base Case is no children
    if (len(tree.children) == 0):
        return 1

    left_height = calc_height(tree.children[0])
    right_height = calc_height(tree.children[1])


    left_diam = calc_max_diam(tree.children[0], diameter)
    right_diam = calc_max_diam(tree.children[1], diameter)

    return max(left_height + right_height + 1, max(left_diam, right_diam))



myTree = Tree(10)
myTree.add_child(100)
myTree.add_child(80)

print(calc_max_diam(myTree, 0))
