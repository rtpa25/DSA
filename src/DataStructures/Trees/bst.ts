/** @format */

class BSTNode {
  val: number;
  left: BSTNode | null;
  right: BSTNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: BSTNode | null;
  constructor() {
    this.root = null;
  }
  insert(val: number) {
    const newNode = new BSTNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }
      }
    }
  }
}
