/** @format */

class WeightedGraph {
	adjancencyList: {
		[key: string]: {
			node: string;
			weight: number;
		}[];
	};
	constructor() {
		this.adjancencyList = {};
	}

	addVertex(vertex: string) {
		if (!(vertex in this.adjancencyList)) this.adjancencyList[vertex] = [];
	}

	addEdge(v1: string, v2: string, weight: number) {
		if (v1 in this.adjancencyList && v2 in this.adjancencyList) {
			this.adjancencyList[v1].push({ node: v2, weight });
			this.adjancencyList[v2].push({ node: v1, weight });
		}
	}
}

const wgraph = new WeightedGraph();
wgraph.addVertex("A");
wgraph.addVertex("B");
wgraph.addVertex("C");
wgraph.addVertex("D");
wgraph.addVertex("E");
wgraph.addVertex("F");

wgraph.addEdge("A", "B", 9);
wgraph.addEdge("A", "C", 5);
wgraph.addEdge("B", "D", 7);
wgraph.addEdge("C", "E", 6);
wgraph.addEdge("D", "E", 3);
wgraph.addEdge("D", "F", 4);
wgraph.addEdge("E", "F", 10);

console.log(JSON.stringify(wgraph, null, 2));
