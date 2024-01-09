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
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
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
      // lager # stays in new instance for comp
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
    this.first = first;
    this.last = last;
    this.size = size;
    max = 0;
  }
}

const node1 = new Node(31);
const node2 = new Node(22);
const node3 = new Node(13);
const node4 = new Node(3);
const node5 = new Node(3);
const myStack = new Stack();

myStack.push(node1);
myStack.push(node2);
myStack.push(node3);
// console.log('top stack', myStack)

module.exports = {
  Node,
  Queue,
  Stack,
};
