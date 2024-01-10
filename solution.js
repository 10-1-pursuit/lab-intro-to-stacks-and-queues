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
      throw new Error("No data in this stack")
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
      throw new Error("Your stack is empty")
    }
    return this.top
  }
  findMin(){

  }
  sort(){

  }
}

class Queue {
  constructor(value){
    this.first = null
    this.last = null
    this.size = 0
    this.max = value
  }
}


module.exports = {
  Node,
  Queue,
  Stack,
};
