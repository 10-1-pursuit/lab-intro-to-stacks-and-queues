const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/*
  Stacks: First in Last out
*/

class Stack {
  constructor(top = null) {
    this.top = top;
  }
  //push -> Adds to the top of the stack
  // Takes in a value which is NOT a node
  push(data) {
    // Create a new Node instance that will take in the data paramter
    const newNode = new Node(data);
    // Assign newNode.next to this.top to look at the top of the stack
    newNode.next = this.top;
    // reassign the top of this stack to point to our new node
    this.top = newNode;
  }

  size() {
    // Initialize a counter variable
    let counter = 0;
    // Initialize a currentTop variable to track the node at the top of the stack
    let currentTop = this.top;
    // While there is a top node
    while (currentTop) {
      // Increment the count variable by 1
      counter++;
      // reassign the currentTop to the currentTop next to go the the next node in the stack
      currentTop = currentTop.next;
    }
    // return count
    return counter;
  }
  // pop -> removes the node at the top of the stack
  pop() {
    // Initialize a new currentTop variable to have the value of the top
    let currentTop = this.top;
    // If there is a top / if currentTop is truthy
    if (currentTop) {
      // Initialize a newTop variable and assign it the value of currenttop next
      // This is so we can make the next node the new top after removing the current top
      const newTop = currentTop.next;
      // Assign this.top to the newTop
      // This makes the next node the new top
      this.top = newTop;
      // Return the top the was removed which was the current top
      return currentTop;
    }
  }

  // peak -> returns the node at the top of the stack
  peak() {
    // if there is no node  at the top of the stack, or node is null or falsy...
    if (!this.top) {
      // return null
      return null;
      // Otherwise if there is a top of the stack...
    } else {
      // return the top
      return this.top;
    }
  }

  // isEmpty(){}

  // findMin(){}

  // sort(){}
}

const newStack = new Stack();

// create a for loop to get each element in the words array to add to the stack
for (let i = 0; i < words.length; i++) {
  // call the push method on the newStack instance and adding each word to the stack(as it's own node)
  newStack.push(words[i]);
}
// console.log(newStack.size());
// console.log(newStack.peak());
console.log(newStack.pop());

// console.log(newStack);

// console.log(inspect(newStack, true, 15))


/*
  Queues: First in First Out
*/

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = max;
  }
  count(){}

  // dequeue(){}

  // enqueue(){}

  // findMax(){}

  // getLast(){}

  // isEmpty(){}

  // peek(){}
}

module.exports = {
  Node,
  Queue,
  Stack,
};
