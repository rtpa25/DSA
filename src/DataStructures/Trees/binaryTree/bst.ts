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
  //BIG-0: O(log n) but the big-O is not guaranteed in a case of one-sided trees
  insertIteratively(val: number) {
    //create a new node out of the value
    const newNode = new BSTNode(val);
    //check if the root exists
    if (!this.root) {
      //if it doesn't then the new node is the new root
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        //if it does
        //check if the value is less than the root
        if (val < current.val!) {
          //if it is then check if the left node exists
          if (!current.left) {
            //if it doesn't then set the left node to the new node
            current.left = newNode;
            return this;
          } else {
            //if it does then repeat the same process with  a new current which stores the left value of the existing current
            current = current.left!;
          }
        } else if (val > current.val!) {
          //or check if it is greater than the root
          //if it is then check if the right node exists
          if (!current.right) {
            //if it doesn't then set the right node to the new node
            current.right = newNode;
            return this;
          } else {
            //if it does then recursively call the insert function on the right node
            current = current.right!;
          }
        } else {
          return undefined;
        }
      }
    }
  }
  insertReccursively(val: number) {
    const newNode = new BSTNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    const insertHelper = (
      val: number,
      current = this.root
    ): BST | undefined => {
      if (val < current!.val) {
        if (current!.left) {
          return insertHelper(val, current!.left);
        } else {
          current!.left = newNode;
          return this;
        }
      } else if (val > current!.val) {
        if (current!.right) {
          return insertHelper(val, current!.right);
        } else {
          current!.right = newNode;
          return this;
        }
      } else {
        return undefined;
      }
    };
    return insertHelper(val);
  }
  //BIG-0: O(log n)
  find(val: number): {
    isFound: boolean;
    foundNode: BSTNode | undefined;
  } {
    if (!this.root) {
      return {
        isFound: false,
        foundNode: undefined,
      };
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val!) {
          if (!current.left) {
            return {
              isFound: false,
              foundNode: undefined,
            };
          } else if (val === current.left!.val) {
            return {
              isFound: true,
              foundNode: current.left,
            };
          } else {
            current = current.left!;
          }
        } else if (val > current.val!) {
          if (!current.right) {
            return {
              isFound: false,
              foundNode: undefined,
            };
          } else if (val === current.right!.val) {
            return {
              isFound: true,
              foundNode: current.right,
            };
          } else {
            current = current.right!;
          }
        } else {
          return {
            isFound: false,
            foundNode: undefined,
          };
        }
      }
    }
  }
  findReccursively(val: number): {
    isFound: boolean;
    foundNode: BSTNode | undefined;
  } {
    if (!this.root) {
      return {
        isFound: false,
        foundNode: undefined,
      };
    }
    const findHelper = (
      val: number,
      current = this.root
    ): {
      isFound: boolean;
      foundNode: BSTNode | undefined;
    } => {
      if (val < current!.val) {
        if (current!.left) {
          if (current?.left.val === val) {
            return {
              isFound: true,
              foundNode: current.left,
            };
          } else {
            return findHelper(val, current!.left);
          }
        } else {
          return {
            isFound: false,
            foundNode: undefined,
          };
        }
      } else if (val > current!.val) {
        if (current!.right) {
          if (current?.right.val === val) {
            return {
              isFound: true,
              foundNode: current.right,
            };
          } else {
            return findHelper(val, current!.right);
          }
        } else {
          return {
            isFound: false,
            foundNode: undefined,
          };
        }
      } else {
        return {
          isFound: false,
          foundNode: undefined,
        };
      }
    };
    return findHelper(val);
  }
  bfs(): number[] {
    const data = [];
    const queue = [];
    let node = this.root;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift() as BSTNode | null;
      data.push(node!.val);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }
    return data;
  }
  dfsPreOrder() {
    const data: number[] = [];
    const current = this.root;
    const dfsHelper = (node: BSTNode | null) => {
      data.push(node!.val);
      //these if statements the number of nodes to inserted and all of them get inserted by the prev line and hence there is a valid endpoint to this reccursive helper function
      if (node?.left) dfsHelper(node.left);
      if (node?.right) dfsHelper(node.right);
    };
    dfsHelper(current);
    return data;
  }
  dfsPostOrder() {
    const data: number[] = [];
    const current = this.root;
    const dfsHelper = (node: BSTNode | null) => {
      //first we go all the way to the left and then all the way to the right
      //for any node the root is the last element to be visited
      //first all children are visited then the root is visited
      node?.left && dfsHelper(node.left);
      node?.right && dfsHelper(node.right);
      data.push(node!.val);
    };
    dfsHelper(current);
    return data;
  }
  dfsInOrder() {
    const data: number[] = [];
    const current = this.root;
    const dfsHelper = (node: BSTNode | null) => {
      //first we go all the way to the left and then move to the parent and then traverse to the right of the parent and we do this from the most bottom child to all the way up to the root node
      if (node?.left) dfsHelper(node.left);
      data.push(node!.val);
      if (node?.right) dfsHelper(node.right);
    };
    dfsHelper(current);
    return data;
  }
}

const bst = new BST();

bst.insertReccursively(10);
bst.insertReccursively(6);
bst.insertReccursively(15);
bst.insertReccursively(3);
bst.insertReccursively(20);
bst.insertReccursively(8);

console.log(bst.bfs());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());

//if you use dfs inorder on a BST then you get all the values in a sorted format
//if you use dfs preorder then you simply get the flattened version of the same tree
//when bfs then more space complexity when the width is large
//when the length is a lot like it goes really deep then space complexity is more for dfs than bfs
