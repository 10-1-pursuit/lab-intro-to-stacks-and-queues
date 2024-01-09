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
    this.size = 0;
  }

  count() {
    let count = 0;
    let current = this.first;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  isEmpty() {
    return !this.first;
  }

  dequeue() {
    // if (this.isEmpty) {
    //   return null;
    // }
    // let item = this.first;
    // if (this.first === this.last) {
    //   this.last = null;
    // }
    // this.first = this.first.next;
    // this.size--;
    // return item.data;
    if (!this.first) {
      return null;
    }
    let item = this.first.data;
    this.first = this.first.next;
    if (!this.first) {
      this.last = null;
    }
    return item;
  }

  enqueue(data) {
    let newerNode = new Node(data);
    if (!this.first) {
      this.first = newerNode;
      this.last = newerNode;
    } else {
      this.last.next = newerNode;
      this.last = newerNode;
    }
  }

  peek() {
    return this.first;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    if (this.isEmpty()) {
      return null;
    }
    let max = this.first.data;
    let current = this.first.next;

    while (current !== null) {
      if (current.data > max) {
        max = current.data;
      }
      current = current.next;
    }
    return max;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
