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
		if (!(vertex in this.adjancencyList)) this.adjancencyList[vertex] = [];
	}

	addEdge(v1: string, v2: string) {
		if (v1 in this.adjancencyList && v2 in this.adjancencyList) {
			this.adjancencyList[v1].push(v2);
			this.adjancencyList[v2].push(v1);
		}
	}

	removeEdge(v1: string, v2: string) {
		if (v1 in this.adjancencyList && v2 in this.adjancencyList) {
			this.adjancencyList[v1] = this.adjancencyList[v1].filter((val) => {
				if (val !== v2) return val;
			});
			this.adjancencyList[v2] = this.adjancencyList[v2].filter((val) => {
				if (val !== v1) return val;
			});
		}
	}

	removeVertex(vertex: string) {
		while (this.adjancencyList[vertex].length) {
			const adjacentVertex = this.adjancencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex!);
		}
		delete this.adjancencyList[vertex];
	}

	depthFirstTraversalRecursive(vertex: string): string[] {
		const results: string[] = [];
		const visisted: { [key: string]: boolean } = {};
		const helper = (vertex: string) => {
			if (!this.adjancencyList[vertex]) return;
			results.push(vertex);
			visisted[vertex] = true;
			this.adjancencyList[vertex].forEach((neighbor) => {
				if (!visisted[neighbor]) helper(neighbor);
			});
		};
		helper(vertex);
		return results;
	}

	depthFirstTraversalIterative(vertex: string): string[] | undefined {
		if (!this.adjancencyList[vertex]) return;
		const results: string[] = [];
		const visisted: { [key: string]: boolean } = {};
		let stack: string[] = [];
		let v: string;
		stack.push(vertex);
		while (stack.length > 0) {
			v = stack.pop()!;
			if (!visisted[v]) {
				visisted[v] = true;
				results.push(v);
				this.adjancencyList[v].forEach((neighbor) => {
					if (!visisted[neighbor]) stack.push(neighbor);
				});
			}
		}
		return results;
	}

	breadthFirstTraversalRecursive(vertex: string): string[] | undefined {
		if (!this.adjancencyList[vertex]) return;
		const results: string[] = [];
		const visisted: { [key: string]: boolean } = {};
		let queue: string[] = [];
		let v: string;
		queue.push(vertex);
		while (queue.length > 0) {
			v = queue.shift()!;
			if (!visisted[v]) {
				visisted[v] = true;
				results.push(v);
				this.adjancencyList[v].forEach((neighbor) => {
					if (!visisted[neighbor]) queue.push(neighbor);
				});
			}
		}
		return results;
	}
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// console.log(graph);
// graph.removeEdge("A", "B");
// console.log("Before removal", graph);
// graph.removeVertex("A");
// console.log("After removal", graph);
console.log(graph.breadthFirstTraversalRecursive("A"));
