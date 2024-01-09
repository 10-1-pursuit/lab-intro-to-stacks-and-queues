const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor(top = null){
    this.top = top
  }
  push(data){
    const newNode = new Node(data)
    newNode.next = this.top
    this.top = newNode
  }
  pop(){
    if(this.top === null) throw new Error("The stack is empty!")

    let currentTop = this.top
    if(currentTop){
      let newTop = currentTop.next
      this.top = newTop
      return currentTop
    }
  }
  size(){
    let count = 0
    let currentTop = this.top
    while(currentTop){
      count++
      currentTop = currentTop.next
    }
    return count
  }
  isEmpty(){
    return this.top === null
  }
  peek(){
    if(this.top === null) throw new Error("The stack is empty!")
    return this.top
  }
  findMin(){
    let currentTop = this.top
    let min = currentTop.data
    
    while(currentTop){
      if(currentTop.data < min){
        min = currentTop.data
      }
      currentTop = currentTop.next
    }
    return min
  }
  sort(){
    let currentNode = this.top

    while(currentNode){
      let min = currentNode
      let nextNode = currentNode.next

      while(nextNode){
        if(nextNode.data < min.data){
          min = nextNode
        }
        nextNode = nextNode.next
      }
      const temp = currentNode.data
      currentNode.data = min.data
      min.data = temp

      currentNode = currentNode.next
    }
  }
}

class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
    this.max = 0
  }
  enqueue(data){
    const newNode = new Node(data)
    if(!this.first){
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }
  dequeue(){
    if(this.first === null) throw new Error("The queue is empty!")
    const firstNode = this.first

    if(this.first === this.last){
      this.last = null
    }
    this.first = this.first.next
    this.size--
    
    return firstNode.data
  }
  count(){
    return this.size
  }
  isEmpty(){
    return this.first === null
  }
  peek(){
    return this.first 
  }
  getLast(){
    return this.last
  }
  findMax(){
    let max = this.first.data
    let currentNode = this.first.next

    while(currentNode){
      if(currentNode.data > max){
        max = currentNode.data
      }
      currentNode = currentNode.next
    }
    return max
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
