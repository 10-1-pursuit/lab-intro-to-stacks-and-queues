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
 }
module.exports = {
  Node,
  Queue,
  Stack,
};
