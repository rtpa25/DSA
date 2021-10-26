//SinglyLinkedList

// is a collection of nodes

//NODE :- stores a data - val and reffernces to the next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  //print all the values in out linked list in order in an array
  print() {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.val);
      current = current.next;
    }
    console.log(array);
  }
  //inserting to the last of the list
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  //removing a node from the end of the linked list
  //this is where the first problem arises we just have a one directional connection
  pop() {
    if (this.length === 0) {
      return undefined;
    } else {
      let current = this.head;
      let temp = this.head;
      while (current.next) {
        temp = current;
        current = current.next;
      }
      temp.next = null;
      this.tail = temp;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }
  //Removing and returning node from the begginig of the linked list
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let toBeRemovedHead = this.head;
    this.head = toBeRemovedHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return toBeRemovedHead.val;
  }
  //Adding a new node to the begginig of the linked list
  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //without the else block each points to each other and makes a circular loop
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //Retriving a node by it's position in the linkedList
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  //changing the value of a node nbased on it's postion in the linked list
  set(index, value) {
    let prevNode = this.get(index - 1);
    let node = this.get(index);
    let nextNode = this.get(index + 1);
    if (node) {
      node = new Node(value);
      prevNode.next = node;
      node.next = nextNode;
      return true;
    }
    return false;
  }
  //Insert a new node at a specified position
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    } else if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      let current = this.get(index - 1);
      let newNode = new Node(value);
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
      return true;
    }
  }
  //removing a node from a specific index
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      this.pop();
    } else if (index === 0) {
      this.shift();
    } else {
      let current = this.get(index - 1);
      let toBeRemoved = current.next;
      current.next = toBeRemoved.next;
      this.length--;
      return toBeRemoved;
    }
  }
  //REVERSE A SINGLY LINKED LIST IN PLACE
  reverse() {
    //swapped the head and the tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);

list.reverse();
list.print();
