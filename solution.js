const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(data) {
    const newStack = new Node(data);
    newStack.next = this.top;
    this.top = newStack;
  }

}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxValue = null;
  }

  enqueue(data) {
    const newNode = { data };
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    if (this.maxValue === null || data > this.maxValue) {
      this.maxValue = data;
    }
  }

}


module.exports = {
  Node,
  Queue,
  Stack,
};
