const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top) {
    this.top = null;
  }
  push(data) {
    const createNode = new Node(data);
    createNode.next = this.top;
    this.top = createNode;
  }
  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("The stack is empty");
    }
    const poppedTop = this.top;
    this.top = this.top.next;
    return poppedTop;
  }
  isEmpty() {
    return this.top === null;
  }

  findMin() {
    if (this.isEmpty()) {
      return null;
    }
    let current = this.top;

    let min = current.data;

    while (current) {
      if (current.data < min) {
        // reassign min to be data as it's less
        min = current.data;
      }
      // move to the next and repeat until
      current = current.next;
    }
    return min;
  }

  peek() {
    return this.isEmpty() ? null : this.top;
  }
  sort() {
    let tempStack = new Stack();

    while (!this.isEmpty()) {
      const oGtemp = this.pop();
      // let min = this.findMin()
      while (!tempStack.isEmpty() && tempStack.peek().data > oGtemp.data) {
        //  new top goes to original for comp
        this.push(tempStack.pop().data);
      }
      // larger # stays in new instance for comparison
      tempStack.push(oGtemp.data);
    }
    while (!tempStack.isEmpty()) {
      // my first of the new is now the first of the og
      this.push(tempStack.pop().data);
    }
    return this;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }
  isEmpty() {
    return this.first === null;
  }
  peek() {
    if (this.first == null) {
      throw new Error("This stack is empty");
    }
    return this.first;
  }

  enqueue(data) {
    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  count() {
    let count = 0;
    let currentNode = this.first;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is big empty");
    }
    const newLast = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return newLast.data;
  }

  findMax() {
    if (this.isEmpty()) return null;
    this.max = this.first.data;
    let current = this.first;
    while (current) {
      if (current.data > this.max) this.max = current.data;
      current = current.next;
    }
    return this.max;
  }

  getLast() {
    if (!this.last) {
      throw new Error("This stack is empty");
    }
    return this.last;
  }
}

const node1 = new Node(31);
const node2 = new Node(22);
const node3 = new Node(13);

const myStack = new Stack();
const yourStack = new Stack();

myStack.push(node2);
myStack.push(node3);
yourStack.push(9);
yourStack.push(node1);
// myStack.push(19);
myStack.push(29);

let myQueue = new Queue();
let yourQueue = new Queue();

while (!myStack.isEmpty()) {
  myQueue.enqueue(myStack.pop().data);
}

while (!yourStack.isEmpty()) {
  // while (myStack.size() < yourStack.size()) {
    yourQueue.enqueue(yourStack.pop().data);
  // }
}

console.log(myQueue.peek());
console.log(myQueue.getLast());
console.log(myQueue.count());
console.log(myQueue.findMax());
console.log(yourQueue);

module.exports = {
  Node,
  Queue,
  Stack,
};

// `count`
//   - `dequeue`
//   - `enqueue`
//   - `findMax` data value
//   - `getLast` node
//   - `isEmpty` check if list is empty
//   - `peek` the first node
