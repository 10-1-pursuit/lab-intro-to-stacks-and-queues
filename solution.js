const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
class Node{
  constructor(data){
    this.data=data
    this.next=null
  }
}
 class Stack{
  constructor(top=null) {
    this.top=top;
    
  }
  push(dataProp){
    const newItem= new Node(dataProp);
    newItem.next=this.top;
    this.top=newItem;

  }
  pop(){
    if(this.top==null){
      throw new Error ('This Stack is Empty/InsertNode!')
    }
    let item=this.top
    if(item){
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  isEmpty(){
    return this.top===null;
  }
  peek(){
    if(this.top==null){
      throw new Error ('This Stack is Empty/InsertNode!')
    }
    return this.top

  }
  size(){
    let count=0
    let currentNode=this.top
    while(currentNode){
      ++count
      currentNode=currentNode.next

    }
    return count

  }
  

  
   sort() {
    let current = this.top;
      while (current) {
      let minNode = current;
      let nextNode = current.next;
  
      while (nextNode) {
        if (nextNode.data < minNode.data) {
          minNode = nextNode;
        }
        nextNode = nextNode.next;
      }
  
      if (minNode !== current) {
        const temp = current.data;
        current.data = minNode.data;
        minNode.data = temp;
      }
  
      current = current.next;
    }
  
    return this;
  }
  findMin(){
    return this.sort().peek().data
  }
  
 }

 let myList=new Stack()
 for(let i=0;i<nums.length;i++){
  myList.push(nums[i])

 }

//  console.log(newStack.size())
console.log(myList.findMin())



// console.log(inspect(myList.sort()))
 //console.log(inspect(myList, { showHidden:true ,colors: true, depth: 12 }));


 class Queue{
constructor(max=null){
  this.first=null
  this.last=null
  this.size=0
  this.max=max
}
enqueue(dataProp){
  let newItem= new Node(dataProp)
    if(!this.first){
      this.first=newItem
      this.last=newItem
    }else{
      this.last.next=newItem
      this.last=newItem
    }
    return ++this.size;


}
dequeue(){
  if(this.first === null){
    throw new Error('The queue is Empty/Insert Node')
  }
  const currentItem=this.first
  if(this.first===this.last){
    this.last=null
  }
  this.first=this.first.next
  this.size--;
  return currentItem.data;

}
peek(){
  if(this.first===null){
    throw new Error('The queue is Empty/Insert Node')
  }
  return this.first
}
isEmpty(){
  return this.first===null;
}
count(){
  let count=0
  let currentNode=this.first
  while(currentNode){
    ++count
    currentNode=currentNode.next
  }
  return count
}
findMax(){
  let current=this.first
  while(current){
    let maxNode=current
    let nextNode=current.next

    while(nextNode){
      if(nextNode.data>maxNode.data){
        maxNode=nextNode
      }
      nextNode=nextNode.next
    }
    if (maxNode !== current) {
      const temp = current.data;
      current.data = maxNode.data;
      maxNode.data = temp;
    }

    current = current.next;
  }

  this.max=this.peek().data
  return this.peek().data;




  }
  getLast(){
    return this.last;
  }
  
}
let myQueue=new Queue()
 for(let i=0;i<nums.length;i++){
  myQueue.enqueue(nums[i])

 }
 console.log(myQueue.findMax())
 console.log(myQueue)

 
module.exports = {
  Node,
  Queue,
  Stack,
};
