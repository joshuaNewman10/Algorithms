import directedGraph

DirectedGraph = directedGraph.DirectedGraph

my_graph = DirectedGraph()

my_graph.add_vertex(10)
my_graph.add_vertex(20)
my_graph.add_vertex(30)
my_graph.add_vertex(40)

my_graph.add_edge(0, 1)
my_graph.add_edge(0, 2)
my_graph.add_edge(1, 3)
my_graph.add_edge(2, 3)


def dfs(directed_graph, orig_vertex, visited, ordering, current_label):
    edge_list = directed_graph.edge_list
    visited[orig_vertex] = True
    edges = edge_list[orig_vertex]
    print(orig_vertex)
    for vertex in edges:
        if (vertex not in visited):
            current_label = dfs(directed_graph, vertex, visited, ordering, current_label)
    ordering[orig_vertex] = current_label
    current_label -= 1
    return current_label

# Useful for implementing source control/scheduling tasks with dependencies
def topological_ordering(directed_graph):
    def dfs_loop():
        visited = {}
        ordering = {}
        edges = directed_graph.edge_list
        current_label = len(edges)
        for vertex in range(0, len(edges)):
            if (vertex not in visited):
                current_label = dfs(directed_graph, vertex, visited, ordering, current_label)
        return ordering

    return dfs_loop()

print(topological_ordering(my_graph))

