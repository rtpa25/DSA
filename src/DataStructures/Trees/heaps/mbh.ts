/** @format */

class MaaxBinaryHeap {
  values: number[];
  constructor() {
    this.values = [];
  }
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
  ExtractMax() {
    let temp = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = temp;
    this.values.pop();
    let parentIndex = 0;
    let child1idx = 2 * parentIndex + 1;
    let child2idx = 2 * parentIndex + 2;
    while (
      this.values[child1idx] > this.values[parentIndex] ||
      this.values[child2idx] > this.values[parentIndex]
    ) {
      let largestChild = Math.max(
        this.values[child1idx],
        this.values[child2idx]
      );
      let temp = largestChild;
      this.values[this.values.indexOf(largestChild)] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      parentIndex = this.values.indexOf(largestChild);
    }
    return temp;
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

bh.ExtractMax();

console.log(bh.values);
