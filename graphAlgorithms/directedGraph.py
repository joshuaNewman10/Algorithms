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


class GraphNode:
    def __init__(self, value):
        self.value = value


class UndirectedGraph:
    def __init__(self):
        self.edge_list = []
        self.vertices = {}
        self.num_vertices = 0

    def add_vertex(self, data):
        self.vertices[self.num_vertices] = GraphNode(data)
        self.num_vertices += 1
        self.edge_list.append([])

    def add_edge(self, source, target):
        if (source not in self.vertices):
            return 'Invalid Target Vertex'
        if (target not in self.vertices):
            return 'Invalid Target Vertex'
        self.edge_list[source].append(target)


def dfs(undirected_graph, vertex, visited={}):
    print(vertex)
    edge_list = undirected_graph.edge_list
    visited[vertex] = True
    edges = edge_list[vertex]
    for vertex in edges:
        if (vertex not in visited):
            dfs(undirected_graph, vertex, visited)

def bfs(undirected_graph, vertex, visited={}):
    bfs_queue = Queue()
    bfs_queue.enqueue(vertex)
    visited[vertex] = True
    while(bfs_queue.num_items > 0):
        curr_vertex = bfs_queue.dequeue()
        print(curr_vertex)
        edge_list = undirected_graph.edge_list[curr_vertex]
        for v in edge_list:
            if (v not in visited):
                visited[v] = True
                bfs_queue.enqueue(v)

my_graph = UndirectedGraph()
my_graph.add_vertex(10)
my_graph.add_vertex(20)
my_graph.add_vertex(30)
my_graph.add_vertex(40)
my_graph.add_vertex(50)

my_graph.add_edge(0, 1)
my_graph.add_edge(0, 2)
my_graph.add_edge(1, 3)
my_graph.add_edge(4, 3)
my_graph.add_edge(1, 4)

dfs(my_graph, 0)
bfs(my_graph, 0)
