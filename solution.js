const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data){
    this.data =data;
    this.next = null;
  }
}

class Stack{
  constructor(top = null){
    this.top = top
  }
  push(data){
    let newNode = new Node(data)

      newNode.next= this.top
      this.top = newNode
    }


    size(){
      let count = 1;
      let current = this.top;
      while(current.next !== null){
        ++count
        current = current.next
      }
        return count
    }

    pop(){
      if(this.top === null)throw new Error("Stack is empty")

      let currentNode = this.top
      let newNode = currentNode.next
      this.top = newNode;
      return currentNode

    }
    isEmpty(){
      return this.top === null
    }
    peek(){
      if(this.top === null) throw new Error("Stack is empty")

      return this.top
    }

    findMin(){
      let arr = [];
      let current = this.top
       while(current.next){
        arr.push(current.data)
        current = current.next
       }
       return Math.min(...arr)
    }
  }

  class Queue{
    constructor(){
  this.first = null;
  this.last = null;
  this.size = 0;
  this.max = 0;
    }
  enqueue(data){
    let newNode = new Node(data)

    if(!this.first){
      this.first= newNode;
      this.last = newNode
    }else{
      this.last.next = newNode;
      this.last = newNode
    }
    return ++this.size
  }
  count(){
    return this.size
  }

  dequeue(){
    
    if(this.first ===  null) throw new Error("Queue is empty")

    const current = this.first;
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--
    return current.data
  }
  isEmpty(){
    return this.first === null
  }
  peek(){
    return this.first
  }

  getLast(){
    while(this.first.next){
      this.first = this.first.next
    }
    return this.first
  }
  findMax(){
    let arr = [];
    let current = this.first
     while(current.next){
      arr.push(current.data)
      current = current.next
     }
     return Math.max(...arr)
  }
  }

module.exports = {
  Node,
  Queue,
  Stack,
};
