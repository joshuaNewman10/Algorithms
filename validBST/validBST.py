# Check to see if binary tree is valid BST

# BST Prop: All values --> are >
#           All values <-- are <


class Node:
    def __init__(self, value):
        self.value = value


class BinaryTree:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.node = Node(value)

    def add_child(self, value):
        if (self.left is None):
            self.left = BinaryTree(value)
        else:
            self.right = BinaryTree(value)


def check_valid_bst(tree):
    current_value = tree.node.value
    if (tree.left and tree.left.node.value > current_value):
        return False
    if (tree.right and tree.right.node.value < current_value):
        return False

    valid_left_tree = True
    valid_right_tree = True
    if (tree.left):
        valid_left_tree = check_valid_bst(tree.left)
    if (tree.right):
        valid_right_tree = check_valid_bst(tree.right)

    if (valid_left_tree is False or valid_right_tree is False):
        return False
    return True

my_tree = BinaryTree(8)
my_tree.add_child(6)
my_tree.add_child(1)

print(check_valid_bst(my_tree))
