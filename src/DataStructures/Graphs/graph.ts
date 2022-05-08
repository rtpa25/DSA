/** @format */

//underiected graph
class Graph {
  adjancencyList: {
    [key: string]: string[];
  };
  constructor() {
    this.adjancencyList = {};
  }
  addVertex(vertex: string) {
    if (!this.adjancencyList[vertex]) {
      this.adjancencyList[vertex] = [];
    }
  }
  addEdge(v1: string, v2: string) {
    if (this.adjancencyList![v1] && this.adjancencyList![v2]) {
      this.adjancencyList![v1].push(v2);
      this.adjancencyList![v2].push(v1);
    }
  }
  removeEdge(v1: string, v2: string) {
    this.adjancencyList[v1] = this.adjancencyList[v1].filter((v) => v !== v2);
    this.adjancencyList[v2] = this.adjancencyList[v2].filter((v) => v !== v1);
  }
  removeVertes(v: string) {
    if (!this.adjancencyList[v]) return;
    while (this.adjancencyList[v].length) {
      const element = this.adjancencyList[v].pop();
      this.removeEdge(v, element as string);
    }
    delete this.adjancencyList[v];
  }
  dfsReccursive(vertex: string) {
    const results: string[] = [];
    const visited: {
      [key: string]: boolean;
    } = {};
    const helper = (vertex: string) => {
      if (this.adjancencyList[vertex].length == 0) {
        return;
      }
      visited[vertex] = true;
      results.push(vertex);
      this.adjancencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          helper(neighbour);
        }
      });
    };
    helper(vertex);
    return results;
  }
  dfsIterative(vertex: string) {
    const stack = [vertex];
    const results: string[] = [];
    const visited: {
      [key: string]: boolean;
    } = {};
    visited[vertex] = true;
    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop() as string;
      results.push(currentVertex);
      this.adjancencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return results;
  }
  bfs(vertex: string) {
    const queue = [vertex];
    const results: string[] = [];
    const visited: {
      [key: string]: boolean;
    } = {};
    visited[vertex] = true;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift() as string;
      results.push(currentVertex);
      this.adjancencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return results;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.bfs('A'));
