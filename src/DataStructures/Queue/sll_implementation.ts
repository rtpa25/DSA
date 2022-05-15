/** @format */

class QueNode {
  val: number | null;
  next: QueNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  first: QueNode | null;
  last: QueNode | null;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val: number) {
    const newNode = new QueNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (this.size === 0) return null;
    const oldFirst = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
    }
    this.size--;
    return oldFirst;
  }
}
//INSERTION = O(1)
//REMOVAL = O(1)
//SEARCHING = O(N)
//ACCESSING = O(N)
