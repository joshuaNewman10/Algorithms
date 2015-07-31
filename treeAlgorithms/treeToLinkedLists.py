class ListNode:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.num_items = 0

    def add_to_tail(self, value):
        if (self.head is None):
            self.head = ListNode(value)
            self.num_items += 1

        elif (self.tail is None):
            self.tail = ListNode(value)
            self.head.next = self.tail
            self.num_items += 1
        else:
            self.tail.next = ListNode(value)
            self.num_items += 1

    def print_list(self):
        curr_node = self.head
        while(curr_node.next):
            print(curr_node.value)
            curr_node = curr_node.next
        print(curr_node.value)


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


def tree_to_array(tree):
    output = []
    current_tree = None
    tree_queue = Queue()
    tree_queue.enqueue((tree, 0))

    while(tree_queue.num_items > 0):
        current_tree = tree_queue.dequeue()
        tree = current_tree[0]
        tree_depth = current_tree[1]
        if (len(output) <= tree_depth):
           output.append([])
        output[tree_depth].append(tree.node.value)
        for child_tree in tree.children:
            tree_queue.enqueue((child_tree, tree_depth+1))

    return output


def tree_to_linked_list(tree):
    output = []
    current_tree = None
    tree_queue = Queue()
    tree_queue.enqueue((tree, 0))

    while(tree_queue.num_items > 0):
        current_tree = tree_queue.dequeue()
        tree = current_tree[0]
        tree_depth = current_tree[1]
        if (len(output) <= tree_depth):
           output.append(LinkedList())
        output[tree_depth].add_to_tail(tree.node.value)
        for child_tree in tree.children:
            tree_queue.enqueue((child_tree, tree_depth+1))

    return output



myTree = Tree(4)
myTree.add_child(10)
myTree.add_child(20)
myTree.add_child(30)
myTree.children[0].add_child(100)

# myTree.print_in_bfs_order()

lists = tree_to_linked_list(myTree)
for list in lists:
    print('list')
    list.print_list()


# testList = LinkedList()
# testList.add_to_tail(1)
# testList.add_to_tail(4)
# testList.add_to_tail(10)
# testList.print_list()
