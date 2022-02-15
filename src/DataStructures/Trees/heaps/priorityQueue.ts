/** @format */

class PriorityNode {
  value: any;
  priority: number;
  constructor(value: any, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQ {
  values: PriorityNode[];
  constructor() {
    this.values = [];
  }
  enqueue(value: any, priority: number) {
    const newNode = new PriorityNode(value, priority);
    this.values.push(newNode);
    this.bubbleUp(newNode);
  }
  bubbleUp(newNode: PriorityNode) {
    let parentIndex = Math.floor((this.values.indexOf(newNode) - 1) / 2);
    while (this.values[parentIndex].priority < newNode.priority) {
      let temp = this.values[parentIndex];
      this.values[this.values.indexOf(newNode)] = temp;
      this.values[parentIndex] = newNode;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
  }
}

const pq1 = new PriorityQ();

pq1.enqueue('commonCold', 5);
pq1.enqueue('flu', 3);
pq1.enqueue('typhoid', 2);
pq1.enqueue('measles', 1);

console.log(pq1);
