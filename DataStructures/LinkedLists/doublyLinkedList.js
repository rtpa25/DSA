//INDIVIDUAL NODE THAT HAS A FORWARD AND BACKWARD CONNECTION IN THE LIST
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

//DOUBLY LINKED LIST CLASS
class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  //Addsing a node to the end of the linked list
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //Remove the last node and return the node
  pop() {
    let toBeRemoved = this.tail;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = toBeRemoved.prev;
      this.tail.next = null;
      toBeRemoved.prev = null;
    }
    this.length--;
    return toBeRemoved;
  }
  //Removing a node from the beinning of the doubly linked list
  shift() {
    let toBeRemoved = this.head;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = toBeRemoved.next;
      this.head.prev = null;
      toBeRemoved.next = null;
    }
    this.length--;
    return toBeRemoved;
  }
  //Adding a new node to the beggining of the linked list
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //Accessing a node in the doubly linked list by the index given via props
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index <= this.length / 2) {
      console.log("Working from start");
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    } else {
      console.log("Working from end");
      let counter = this.length - 1;
      let currentNode = this.tail;
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
      return currentNode;
    }
  }
  //Replacing the value of a node to a specified index in the doubly linked list
  set(index, value) {
    let prevNode = this.get(index - 1);
    let currentNode = this.get(index);
    let nextNode = this.get(index + 1);
    let toBeInserted = new Node(value);
    if (currentNode !== null) {
      currentNode = toBeInserted;
      prevNode.next = toBeInserted;
      toBeInserted.prev = prevNode;
      nextNode.prev = toBeInserted;
      toBeInserted.next = nextNode;
      return true;
    } else {
      return false;
    }
  }
  //Adding a node in a certain index
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    } else if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let current = this.get(index - 1);
      let newNode = new Node(value);
      newNode.next = current.next;
      current.next.prev = newNode;
      current.next = newNode;
      newNode.prev = current;
      this.length++;
      return true;
    }
  }
  //Remove a node in a doubly linked list
  remove(index) {
    let toBeRemoved = this.get(index);
    let prev = toBeRemoved.prev;
    let next = toBeRemoved.next;
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      this.pop();
    } else if (index === 0) {
      this.shift();
    } else {
      prev.next = next;
      next.prev = prev;
      toBeRemoved.next = null;
      toBeRemoved.prev = null;
    }
    this.length--;
    return toBeRemoved;
  }
}

//TESTING FUNCTIONS
let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);
list.remove(1);

console.log(list);
