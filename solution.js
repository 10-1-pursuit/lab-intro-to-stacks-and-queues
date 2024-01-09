const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// node class for both stack and queue
class Node {
  constructor(data) {
    this.data = data;
    this.exit = null;
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
    let currentNode = this.top;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  pop() {
    if (this.top === null) {
      throw new Error("This stack is empty!");
    }
    let poppedData = this.top;
    if (poppedData) {
      let topData = poppedData.next;
      this.top = topData;
    }
    return poppedData;
  }

  isEmpty() {
    return this.top === null;
  }
  findMin() {
    let currentNode = this.top;
    let min = currentNode ? currentNode.data : null;

    while (currentNode) {
      if (currentNode.data < min) {
        min = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return min;
  }

  peek() {
    return this.top;
  }

  sort() {
    let current = this.top;

    while (current) {
      let compareNode = current.next;

      while (compareNode) {
        if (current.data > compareNode.data) {
          // Swap the node data
          const temp = current.data;
          current.data = compareNode.data;
          compareNode.data = temp;
        }
        compareNode = compareNode.next;
      }
      current = current.next;
    }
    return this;
  }
}

// Queue

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor (){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  enqueue(data)
}

module.exports = {
  Node,
  Queue,
  Stack,
};
