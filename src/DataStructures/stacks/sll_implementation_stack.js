class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

//ALL METHODS ARE OF CONSTANT TIME THAT IS THE REASON WE ARE NOT USING THE DEFAULT PUSH AND POP FUCNTION OF SLL
//BECUASE POP IN SLL IS NOT O(1)
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      node.next = temp;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size === 0) {
      return null;
    } else if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let temp = this.first;
      this.first = temp.next;
    }
    return --this.size;
  }
}

let stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
console.log(stack);
stack.pop();
console.log(stack);

//BIG-O's of stacks
//INSERTION = O(1)
//REMOVAL = O(1)
//SEARCHING = O(N)
//ACCESSING = O(N)
