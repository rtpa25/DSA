/** @format */

//any data structure that follows LIFO principle becomes a stack
//LIFO = last thing in is the first thing that has to be removed, Arrays are not a great way to make stacks

//There are 2 ways in which a stack can be created out of an array

//this is the push and pop method which simply removes the last element and adds a new element at the first without reindexing the existing elements
//So is a bit better that other implementations of stack with an array
let stack = [];
stack.push(0);
stack.push(1);
stack.push(2);
console.log(stack);
stack.pop();
console.log(stack);

//shift and unshift way to make stack with an array
//as this has a lot of reindexing involved hense not the ideal way to make a stack with an array the push and pop method is better

let newStack = [];
newStack.unshift('i'); //unsigned adds the new element to the first

newStack.unshift('am'); //unshifting involves re-indexing on every implementation

newStack.unshift('cool'); //this is the last in

newStack.shift(); // shift removes the first element so cool goes away
console.log(newStack);

//BUT MORE CONVENTIONAL PROCESS IS TO MAKE A STACK WITH THE HELP OF A LINKED LIST
