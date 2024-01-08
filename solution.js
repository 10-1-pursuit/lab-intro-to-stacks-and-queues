const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

//- Create a Node class with properties: - data & - next

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}
/* - Create a stack with properties - top  */

class Stack {
  constructor( top = null){
    this.top = top
  
  }

  /* - Stack methods
  - `push`👾
  - `size` 👾
  - `pop` 👾
  - `isEmpty` check if list is empty 👾
  - `findMin` data value 👾
  - `peek` top node 👾
  - `sort` - sort the stack into ascending order. **CHALLENGE** only use stacks to achieve this (no arrays or objects etc.) 
 */
isEmpty(){  //- `isEmpty` check if list is empty 
  return this.top === null
}
peek(){    // - `peek` top node
  if(this.top === null){
    throw new Error('This stack is empty')
  } 
    return this.top
}
push(data){ // - `push`
  const newItem = new Node(data);
  newItem.next = this.top;
  this.top = newItem
}
pop(){ //  - `pop` 
  if(this.top === null){
    throw new Error('This stack is empty')
  }
  let current = this.top;
  if(current){
    let newItem = current.next
    this.top = newItem
    return current
  }
}
size(){
  if(this.isEmpty()){
    throw new Error('This stack is empty')
  }
 let count = 0
 let current = this.top
 while(current){
   count++
   this.length++
  current = current.next
 }
 return count
}
findMin(){
  if(this.isEmpty()){
    throw new Error('This stack is empty')
  }
  let item = this.top
  let minData = item.data
  
  while(item){
    if(typeof item.data !== 'number'){
      throw new Error('This stack has some non nums in it')
    }
    if(item.data < minData){
      minData = item.data
    }
     item = item.next
  }
   return minData
}
sort(){
  const length = this.size()
 if(this.isEmpty() || this.size() === 1){
  throw new Error('This stack cant be sorted')
 }
 let current = this.top
 const tempStack = new Stack();
// make a new stack to store data
 tempStack.push(this.pop())
 
 for(let i = 0; i < length; i++){
  let tempValue = tempStack.peek()
  let currentValue = tempStack.peek()
 
 }



  }
}





/* - Create a queue with properties - `first`- `last`- `size`- `max` value */

class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = this.count()
    this.max = null
  }
/* 
  - `count` 👾
  - `dequeue` 👾
  - `enqueue` 👾
  - `findMax` data value 👾
  - `getLast` node 👾
  - `isEmpty` check if list is empty 👾
  - `peek` the first node 👾
 */
enqueue(data){
  let newItem = new Node(data)
  if(!this.first){
    this.first = newItem
    this.last = newItem
  }else{
    this.last.next = newItem
    this.last = newItem
  }
  return ++this.size
};
dequeue(){
  if(this.first === null){
    throw new Error('This que is empty')
  }
  const item = this.first
  if(this.first === this.last){
    this.last = null
  }
  this.first = this.first.next
  this.size--
  return item.data
};
isEmpty(){
  return this.first === null;
};
peek(){
  if(this.head === null){
    throw new Error('This queue is empty')
  }
  return this.first
};
count(){
  let count = 0
  if(this.isEmpty()){
    return count
  }
  let item = this.first
  while(item){
    count++
    item = item.next
  }
  return count
};
getLast(){
  if(this.isEmpty()){
    throw new Error('this Que is empty')
  }
  return this.last
};
findMax(){
  if(this.isEmpty()){
    throw new Error('This que is empty')
  }
  let currentItem = this.first
  let maxData = currentItem.data
  while(currentItem){
    if ( typeof currentItem.data !== 'number'){
      currentItem = currentItem.next
    }
    if(currentItem.data > maxData){
      maxData = currentItem.data
  }
   currentItem = currentItem.next
}
return maxData
};
}

const stack = new Stack()
stack.push(1)
stack.push(2)
//console.log(stack.size())
const que = new Queue()
que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
que.enqueue(4);
console.log(que.size)
console.log(que.findMax())













module.exports = {
  Node,
  Queue,
  Stack,
};
