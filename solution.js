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
      this.top=item.next
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
 }

 let myList=new Stack()
 for(let i=0;i<nums.length;i++){
  myList.push(nums[i])

 }

 console.log(myList.size())
//  console.log(inspect(myList, { showHidden:true ,colors: true, depth: 11 }));


module.exports = {
  Node,
  // Queue,
  Stack,
};
