/** @format */

//*More memory = more flexibility
class DllNode {
  val: number | null;
  prev: DllNode | null;
  next: DllNode | null;
  constructor(val: number) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  head: DllNode | null;
  tail: DllNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: number) {
    const newNode = new DllNode(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedNode!.prev;
      this.tail!.next = null;
      popedNode!.prev = null;
    }
    this.length--;
    return popedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = this.head!.next;
      this.head!.next!.prev = null;
      this.head!.next = null;
      this.head = newHead;
    }
    this.length--;
    return oldHead;
  }
  unshift(val: number) {
    const newNode = new DllNode(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index: number) {
    //check if the index is valid if not then return null
    if (index < 0 || index >= this.length) return null;
    //check if the index is less than half of the length of the list
    if (index < this.length / 2) {
      //then start from the start counter will start from the head
      let counter = 0;
      let current = this.head;
      while (current) {
        if (counter === index) return current;
        counter++;
        current = current.next;
      }
    }
    //else start from the end counter will start from the end
    else {
      let counter = this.length - 1;
      let current = this.tail;
      while (current) {
        if (counter === index) return current;
        counter--;
        current = current.prev;
      }
    }
  }
  set(index: number, value: number) {
    const node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }
  insert(index: number, value: number) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    const newNode = new DllNode(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode!.next;
    prevNode!.next = newNode;
    newNode.prev = prevNode!;
    newNode.next = nextNode!;
    nextNode!.prev = newNode;
    this.length++;
    return true;
  }
  remove(index: number) {
    //if the index is less than 0 or greater than the length of the list then return undefined
    if (index < 0 || index > this.length) return null;
    //if the index is 0 shift
    if (index === 0) return this.shift();
    //if the index is same as the length -1, pop
    if (index === this.length - 1) return this.pop();
    //use the get method to retrive the item to be removed
    const removedNode = this.get(index);
    //update the next and prev properties to remove the found node from the list
    removedNode!.prev!.next = removedNode!.next;
    removedNode!.next!.prev = removedNode!.prev;
    //set next and prev to null on the found node
    removedNode!.next = null;
    removedNode!.prev = null;
    //decrement the length
    this.length--;
    return removedNode;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  reverse() {
    let temp = null;
    let current = this.head;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp != null) {
      this.head = temp.prev;
    }
    return this;
  }
}

const dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(6);

dll.print();

dll.reverse();

dll.print();
