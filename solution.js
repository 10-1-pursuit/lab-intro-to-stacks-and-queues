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
  size(){
    let count = 0
    let currentNode = this.top

    if(!this.top){
      return count
    } 
    while(currentNode){
      currentNode = currentNode.next
      count ++
    }
    return count
  }
  pop(){
    if(!this.top){
      throw new Error("The stack is empty")
    }
    let currentTop = this.top
    if(currentTop){
      const newTop = currentTop.next
      this.top = newTop
    }
    return currentTop
  }
  isEmpty(){
    return !this.top
  }
  peek(){
    if(!this.top){
      throw new Error("The stack is empty")
    }
    return this.top
  }
  findMin(){
    let currentNode = this.top
    let minVal = currentNode.data
    while(currentNode.next){
      currentNode = currentNode.next
      if(currentNode.data < minVal){
        minVal = currentNode.data
      }
    }
    return minVal
  }
  // Solved the sort() method with help from stackoverflow & Youtube
  sort() {
    const tempStack = new Stack();
    let currentNode = this.top;
    while (currentNode) {
      const tempNode = currentNode;
      currentNode = currentNode.next;
      while (tempStack.top && tempStack.top.data > tempNode.data) {
        const poppedNodes = tempStack.pop();
        this.push(poppedNodes.data);
      }
      tempStack.push(tempNode.data);
    }
    while (tempStack.top) {
      const poppedNodes = tempStack.pop();
      this.push(poppedNodes.data);
    }
  }
}

class Queue {
  constructor(value){
    this.first = null
    this.last = null
    this.size = 0
    this.value = value
  }
  count(){
    return this.size
  }
  dequeue(){
    if(this.first == null){
      throw new Error("The queue is empty")
  }
    const firstNode = this.first
    if(this.first === this.last){
      this.last = null
  }
    this.first = this.first.next
    this.size--
  return firstNode.data
  }
  enqueue(data){
    let newNode = new Node(data)
    if(!this.first){
        this.first = newNode
        this.last = newNode
    }
    else {
        this.last.next = newNode 
        this.last = newNode
    }
    return ++this.size
  }
  findMax(){
    let currentNode = this.first
    let maxVal = currentNode.data
    while(currentNode.next){
      currentNode = currentNode.next
      if(currentNode.data > maxVal){
        maxVal = currentNode.data
      }
    }
    return maxVal
  }
  getLast(){
    return this.last
  }
  isEmpty(){
    return !this.first
  }
  peek(){
    if(!this.first){
        throw new Error("The queue is empty")
    }
    return this.first
  }
}


module.exports = {
  Node,
  Queue,
  Stack,
};
