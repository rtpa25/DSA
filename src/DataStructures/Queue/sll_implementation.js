class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

//add to the end and remove the begginig
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //add to the end
  enqueue(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  //remove the begginig
  dequeue() {
    let toBeRemoved = this.first;
    if (!this.first) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return toBeRemoved.value;
  }
}

let q = new Queue();

q.enqueue(0);
q.enqueue(1);
q.enqueue(2);

console.log(q);

q.dequeue();

console.log(q);
