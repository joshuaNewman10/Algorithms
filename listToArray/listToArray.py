#Convert Python Linked List Class to Array

#Make LL class
class LinkedList:
  def __init__(self, value):
    print('initialzied linked list')
    self.value = value
    self.next = None

  def add_node(self, value):
    self.next = LinkedList(value)


test = LinkedList(10)
test.add_node(20)


def list_to_array(linked_list):
  results = []
  while (linked_list != None):
    results.append(linked_list.value)
    linked_list = linked_list.next
  return results


print(list_to_array(test))
