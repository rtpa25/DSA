/** @format */

class NaivePriorityQueue {
	values: {
		val: string;
		priority: number;
	}[];
	constructor() {
		this.values = [];
	}

	enqueue(val: string, priority: number) {
		this.values.push({ val, priority });
		this.sort();
	}

	dequeue() {
		return this.values.shift();
	}

	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

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

	dijkstras(start: string, end: string) {
		const distances: {
			[key: string]: number;
		} = {};
		const nodes = new NaivePriorityQueue();
		const previous: {
			[key: string]: string | null;
		} = {};
		let smallest;
		const path = [];
		//build up initial state
		for (const vertex in this.adjancencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		//as long as there is something in the queue
		while (nodes.values.length) {
			smallest = nodes.dequeue()?.val;
			if (smallest === end) {
				//WE ARE DONE
				//BUILD UP PATH TO RETURN TO THE END
				while (previous[smallest!]) {
					path.push(smallest);
					smallest = previous[smallest!];
				}
				path.push(start);
				break;
			}
			if (smallest || distances[smallest!] !== Infinity) {
				for (const neighbor in this.adjancencyList[smallest!]) {
					//find neighboring node
					let nextNode = this.adjancencyList[smallest!][neighbor];
					//calculate distance from neighboring node
					let candidate = distances[smallest!] + nextNode.weight;
					if (candidate < distances[nextNode.node]) {
						distances[nextNode.node] = candidate;
						previous[nextNode.node] = smallest!;
						nodes.enqueue(nextNode.node, candidate);
					}
				}
			}
		}
		return path.reverse();
	}
}

const wgraph = new WeightedGraph();
wgraph.addVertex("A");
wgraph.addVertex("B");
wgraph.addVertex("C");
wgraph.addVertex("D");
wgraph.addVertex("E");
wgraph.addVertex("F");

wgraph.addEdge("A", "B", 4);
wgraph.addEdge("A", "C", 2);
wgraph.addEdge("B", "E", 3);
wgraph.addEdge("C", "D", 2);
wgraph.addEdge("C", "F", 4);
wgraph.addEdge("D", "E", 3);
wgraph.addEdge("D", "F", 1);
wgraph.addEdge("E", "F", 1);

// console.log(JSON.stringify(wgraph, null, 2));
console.log(wgraph.dijkstras("A", "E"));
