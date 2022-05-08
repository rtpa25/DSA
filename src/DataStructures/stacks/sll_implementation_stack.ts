/** @format */

class StackNode {
  val: number | null;
  next: SllNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  first: StackNode | null;
  last: StackNode | null;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val: number) {
    const newNode = new StackNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    this.size++;
    return this;
  }
  pop() {
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

const stackf = new Stack();

stackf.push(1);
stackf.push(2);
stackf.push(3);
stackf.push(4);

console.log(stackf);

stackf.pop();

console.log(stackf);

//BIG-O's of stacks
//INSERTION = O(1)
//REMOVAL = O(1)
//SEARCHING = O(N)
//ACCESSING = O(N)
