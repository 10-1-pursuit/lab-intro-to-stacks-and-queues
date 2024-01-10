const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//Stacks
class Stack {
  constructor(top = null) {
    this.top = top;
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

  isEmpty() {
    return this.size() === 0;
  }

  pop() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let currentTop = this.top;
    if (currentTop) {
      const newTop = currentTop.next;
      this.top = newTop;
      return currentTop;
    }
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
    return this.top ? this.top : null;
  }

  sort() {
    let swapped;
    do {
      swapped = false;
      let current = this.top;
      while (current && current.next) {
        if (current.data > current.next.data) {
          const temp = current.data;
          current.data = current.next.data;
          current.next.data = temp;
          swapped = true;
        }
        current = current.next;
      }
    } while (swapped);
  }
}

//Queues
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  count() {
    return this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    const dequeuedData = this.first.data;
    this.first = this.first.next;
    this.size--;
    return dequeuedData;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  findMax() {
    if (!this.first) {
      return null;
    }
    let current = this.first;
    let max = current.data;
    while (current) {
      if (current.data > max) {
        max = current.data;
      }
      current = current.next;
    }
    return max;
  }

  getLast() {
    return this.last ? this.last : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.first ? this.first : null;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
