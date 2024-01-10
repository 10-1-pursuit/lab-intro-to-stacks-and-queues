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
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    let currentTop = this.top;
    if (currentTop) {
      const newTop = currentTop.next;
      this.top = newTop;
      return currentTop;
    }
  }

  size() {
    let count = 0;
    let currentTop = this.top;
    while (currentTop) {
      count++;
      currentTop = currentTop.next;
    }
    return count;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }

  findMin() {
    let minimum = 0;
    let currentTop = this.top;
    while (currentTop) {
      if (currentTop.data < minimum) {
        minimum = currentTop.data;
      }
      currentTop = currentTop.next;
    }
    return minimum;
  }
}

class Queue {
  constructor(max = null) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = max;
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

  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const firstNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return firstNode.data;
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

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    let maximum = 0;
    let currentNode = this.first;
    while (currentNode) {
      if (currentNode.data > maximum) {
        maximum = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return maximum;
  }
}
module.exports = {
  Node,
  Queue,
  Stack,
};
