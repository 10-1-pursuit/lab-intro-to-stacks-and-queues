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
    let currentNode = this.top
    while (this.top) {
      count++
      currentNode = currentNode.next
    }
    return count
  }
  pop() {

  }

}





module.exports = {
  Node,
  Queue,
  Stack,
};
