const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor(top = null) {
    this.top = top
  }
  push(data) {
    const newNode = new Node(data)
    newNode.next = this.top
    this.top = newNode
  }
  peek() {
    if (this.top === null) {
      throw new Error("Stack is empty!")
    }
    return this.top
  }
  size() {
    let count = 0
    let currentTop = this.top
    while (currentTop) {
      count++
      currentTop = currentTop.next
    }
    return count
  }
  pop() {
    if (this.top === null) {
      throw new Error("This stack is empty!")
    }
    let currentTop = this.top
    if (currentTop) {
      let newTop = currentTop.next
      this.top = newTop
    }
    return currentTop
  }
  isEmpty() {
    return this.top === null
  }
}





module.exports = {
  Node,
  Queue,
  Stack,
};
