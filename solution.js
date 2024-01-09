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

  findMin() {
    let currentTop = this.top
    let minValue = 0
    if (currentTop !== null) {
      if (currentTop.value < minValue) {
        minValue = currentTop.value
      }
    }
    return minValue
  }

  sort() {
    let arr = []

    while (!this.isEmpty()) {
      arr.push(this.pop())
      arr.sort = ((a, b) => a - b)

      for (const item in arr) {
        this.push(item)
      }
    }
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
    this.max = max
  }
  enqueue() {
    let newNode = new Node(data)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }

  isEmpty() {
    return this.first === null
  }

  dequeue() {
    if (this.first === null) {
      throw new Error("The queue is empty")
    }
    const firstNode = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return firstNode.data
  }


}





module.exports = {
  Node,
  Queue,
  Stack,
};
