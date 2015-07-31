import undirectedGraph

UndirectedGraph = undirectedGraph.UndirectedGraph

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


def shortest_path_bfs(graph, source, target):
    visited = {}
    visited[source] = 0
    edge_queue = undirectedGraph.Queue()
    edge_queue.enqueue(source)

    while(edge_queue.num_items > 0):
        curr_vertex = edge_queue.dequeue()
        edges = graph.edge_list[curr_vertex]
        for vertex in edges:
            if (vertex not in visited):
                edge_queue.enqueue(vertex)
                visited[vertex] = visited[curr_vertex] + 1

    return visited[target]

print(shortest_path_bfs(my_graph, 0 ,4))


