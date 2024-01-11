const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null){
    this.top = top
  }

  push(data){
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;

  }

  size(){
    let counter = 0;
    let currentTop = this.top;
    while (current !== null) {
      counter++;
      currentTop = current.next;
    }
    return counter;
  }

  pop(){
    if (this.top == null){
      throw new Error("The stack is empty");
    }
    let currentTop = this.top
    if(currentTop){
      const newTop = currentTop.next
      this.top = newTop
      return currentTop
    }
  }

isEmpty(){
  return this.top === null;
}

findMin(){
  let currentTop = this.top;
  let min = currentTop.data;

while(currentTop !== null) {
  if(currentTop.data < min){
    min = currentTop.data;
  }
  currentTop = currentTop.next
}
return min

}

peek(){
  if(this.top == null){
    throw new Error("The stack is empty");
  }
  return this.top;
}

sort() {
  const arr = []
  let currentNode = this.top
  while(currentNode !== null){
    arr.push(currentNode.data)
    currentNode = currentNode.next
  }
  arr.sort((a,b) => {
    if(a > b){
      return -1
    }
    else if (a < b) {
      return 1
    }
    else{
      return 0
    }
  })
//  console.log(arr)
 const newStack = new Stack()
//  console.log(newStack)
 arr.forEach(el => newStack.push(el))
 
 this.top = newStack.top

//  console.log(this.top.top.data)
}
}

class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
    this. max = null
  }
  
  count(){

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

    enqueue(){

    }
  }

module.exports = {
  Node,
  Queue,
  Stack,
};
