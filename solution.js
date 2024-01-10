const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
// stacks LIFO
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

  push(keys){
    const newNode = new Node(keys) 
    newNode.next = this.top
    this.top = newNode;
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

 pop(){
   if(this.top == null) {
     throw new Error ("Stack is empty")
   }
   let currentTop = this.top;
     if(currentTop = this.top){
      const newTop = currentTop.next
        this.top = newTop
        return currentTop
     }
    }
     isEmpty(){
      return !this.top
     }

  findMin(){
    let min = 0
    let currentTop = this.top
    while(currentTop){
      if(currentTop.keys < min){
         min = currentTop.keys
      }
       currentTop = currentTop.next
    }
     return min

   }
  
peek(){
  if(!this.top){
    throw new Error("Stack is empty")
  }
   return this.top
 }




 

}


class Queue {
   constructor(max = null) {
     this.first = null;
     this.last = null;
     this.size = 0;
     this.max = max;
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
    if(this.first == null){
      throw new Error("Queue is empty")
    }
     const firstNode = this.first
     if(this.first === this.last){
       this.last = null
   }
      this.first = this.first.next
      this.size--
      return firstNode.data
     }

     count() {
      let count = 0
      let currentTop = this.first
      while(currentTop){
        count++
        currentTop = currentTop.next
      }
       return count
    }
    isEmpty(){
      return !this.first
    }

    peek(){
      if(!this.first){
        throw new Error("Queue is empty")
      }
        return this.first
    }

    getLast(){
      return this.last
    }

    findMax(){
      let max = 0;
      let currentTop = this.first
      while(currentTop){
        if(currentTop.data > max){
          max = currentTop.data
        }
        currentTop = currentTop.next
      }
         return max
     }
   }


module.exports = {
  Node,
  Queue,
  Stack,
};
