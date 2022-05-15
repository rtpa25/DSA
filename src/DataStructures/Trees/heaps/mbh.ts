/** @format */

class MaaxBinaryHeap {
  values: number[];
  constructor() {
    this.values = [];
  }
  //helper function used while inserting a new value into a maxbinaryheap
  bubbleUp(value: number) {
    let parentIndex = Math.floor((this.values.indexOf(value) - 1) / 2);
    while (this.values[parentIndex] < value) {
      let temp = this.values[parentIndex];
      this.values[this.values.indexOf(value)] = temp;
      this.values[parentIndex] = value;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
  }
  insert(value: number) {
    this.values.push(value);
    this.bubbleUp(value);
    return this.values;
  }
  sinkDown(index: number) {
    const length = this.values.length;
    const element = this.values[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild: number, rightChild: number;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (rightChild > element && swap === null) ||
          (swap !== null && rightChild > leftChild!)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
  //remove the max element from the heap
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end as number;
    this.sinkDown(0);
    return max;
  }
}

const bh = new MaaxBinaryHeap();
bh.insert(100);
bh.insert(19);
bh.insert(36);
bh.insert(17);
bh.insert(3);
bh.insert(25);
bh.insert(1);
bh.insert(2);
bh.insert(7);
bh.insert(187);

console.log(bh.values);

console.log(bh.extractMax());

console.log(bh.values);
