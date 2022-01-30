/** @format */

class SllNode {
  val: number | null;
  next: SllNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SllNode | null;
  tail: SllNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //add a value to the end of the list
  push(val: number) {
    //accept a value and create a node out of it
    const newNode = new SllNode(val);
    //if there is no head then set the head and the tail to the new node
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    //else set the next property on the tail to the new node and update the tail with the new node
    else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    //and finally for all cases increment the length by
    this.length++;
    return this;
  }
  //utilliy method to print all the number of the SLL
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  //remove the tail and assign the prev node to the tail to the current tail
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let current = this.head;
    let popedNode: SllNode | null = null;
    while (current) {
      if (current.next == this.tail) {
        popedNode = this.tail!;
        current.next = null;
        this.tail = current;
      } else {
        current = current.next;
      }
    }
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return popedNode;
  }
  //remove the head
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let headToBeRemoved = this.head;
    this.head = headToBeRemoved!.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return headToBeRemoved;
  }
  //insert a new value at the beggining of the the list
  unshift(val: number) {
    const newNode = new SllNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } //wihtout the else block we get into a circular refferencing to each other
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //Retriving a node by its position
  get(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter <= index) {
      if (counter == index) {
        return current;
      }
      current = current!.next;
      counter++;
    }
  }
  //changing the value of a node based on the index and the new values that the method accepts
  set(index: number, value: number) {
    let node = this.get(index);
    if (!node) {
      return false;
    }
    node.val = value;
    return true;
  }
  //insert a node at specified index we specified in the method
  insert(index: number, value: number): boolean {
    //if the index is less than 0 or greater than the length, return false
    if (index < 0 || index > this.length) return false;
    //if the index is same as the length, push a new node to the end of the LIST
    if (index === this.length) return !!this.push(value);
    //if the index is 0 unshift a new node to the start of the list
    if (index === 0) return !!this.unshift(value);
    //otherwise using the get method, access the node at the index -1
    const newNode = new SllNode(value);
    let node = this.get(index - 1);
    //set the next property on the new node to the previous next
    newNode.next = node!.next;
    //set the next property on that node to the new node
    node!.next = newNode;
    //increment the length
    this.length++;
    //return true
    return true;
  }
  //remove a node from the linked list
  remove(index: number) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) this.pop()?.val;
    if (index === 0) this.shift()?.val;
    let node = this.get(index - 1);
    let toBeRemovedNode = node?.next;
    node!.next = node!.next!.next;
    this.length--;
    return toBeRemovedNode;
  }
  //Reverse the linked list in place
  reverse() {
    //swap the head and the tail of the linked list
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    //create a variable caled next
    let next;
    //create a variable called prev
    let prev = null;
    //create a variable called node and initialize it to the head property

    //loop through the list
    while (node) {
      //set next to be the next property on the node to be whatever prev is
      next = node.next;
      //set prev to be value of the node variable
      node.next = prev;
      //set the node variable to be value of the next variable
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.print();
list.reverse();
list.print();
console.log(list);
