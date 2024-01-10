const { monitorEventLoopDelay } = require("perf_hooks");
const { nums, words } = require("./data/data.js");
const { inspect } = require("util");





class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor(top = null) {
    this.top = top;
  }

  peek() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }

  pop() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  push(data) {
    let newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }
  size(){
    let count =0;
    let current = this.top;
    while (current){
      count++;
      current = current.next
      }
      return count;
  }
  isEmpty() {
    return this.top === null;
  }
  containsDuplicates() {
    let current = this.head;
    while (current !== null) {
      let runner = current.next;
      while (runner !== null) {
        if (runner.data === current.data) {
          return true;
        }
        runner = runner.next;
      }
      current = current.next;
    }
    return false;
  }
  findMin(){
    if(this.top==null){
      throw new err ("The Stack is empty");
    }
    let current = this.top;
    let min=current.data;
    while(current){
      if(current.data<min){
        min=current.data;
    }
    current=current.next;
  }
  return min
}
  }






  class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    isEmpty() {
        return this.first === null;
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
    dequeue() {
      if (this.first == null) {
          throw new Error("The queue is empty");
        }
    const firstNode = this.first
    if(this.first === this.last){
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return firstNode.data
  }
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
  }




module.exports = {
  Node,
  Queue,
  Stack,
};
