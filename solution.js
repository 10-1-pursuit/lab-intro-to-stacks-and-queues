const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
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
    if (!this.top) {
      return null;
    }
    const data = this.top;
    this.top = this.top.next;
    return data;
  }

  isEmpty() {
    return !this.top;
  }

  findMin() {
    if (!this.top) {
      return null;
    }
    let current = this.top;
    let min = current.data;

    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return min;
  }

  peek() {
    if (this.top == null) {
      return null;
    }
    return this.top;
  }

  sort() {
    let sortStack = new Stack();

    while (!this.isEmpty()) {
      let temp = this.pop();
      while (!sortStack.isEmpty() && sortStack.peek().data > temp.data) {
        this.push(sortStack.pop().data);
      }
      sortStack.push(temp.data);
    }

    while (!sortStack.isEmpty()) {
      this.push(sortStack.pop().data);
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
