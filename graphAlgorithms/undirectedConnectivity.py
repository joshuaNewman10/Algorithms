import undirectedGraph

UndirectedGraph = undirectedGraph.UndirectedGraph

my_graph = UndirectedGraph()

my_graph.add_vertex(10)
my_graph.add_vertex(20)
my_graph.add_vertex(30)
my_graph.add_vertex(40)
my_graph.add_vertex(50)
my_graph.add_vertex(60)
my_graph.add_vertex(70)
my_graph.add_vertex(80)


my_graph.add_edge(0, 1)
my_graph.add_edge(0, 2)
my_graph.add_edge(3, 4)
my_graph.add_edge(5, 6)
my_graph.add_edge(5, 7)
my_graph.add_edge(6, 7)

Queue = undirectedGraph.Queue

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


def undirected_connectivity(graph):
    visited = {}
    edge_list = graph.edge_list
    for vertex in range(0, len(edge_list)):
        if (vertex not in visited):
            print('cluster for', vertex)
            bfs(graph, vertex, visited)


undirected_connectivity(my_graph)
