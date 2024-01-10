const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// node class for both stack and queue
class Node {
  constructor(data) {
    this.data = data; // initialize the node with provided data
    this.exit = null; // intialize the next pointer to null
  }
}

class Stack {
  constructor() {
    this.top = null; // initialize the top pointer to null (empty stack)
  }

  push(data) {
    const newNode = new Node(data); 
    //create a new node with the provided data
    newNode.next = this.top;
    //set the next pointer of the new node to the current top
    this.top = newNode;
    //update the top pointer to the new node
  }

  size() {
    let count = 0;
    let currentNode = this.top;
    while (currentNode) {
      count++;
      // increment count for each node 
      currentNode = currentNode.next;
      //move to the next node
    }
    return count;
  }

  pop() {
    if (this.top === null) {
      throw new Error("This stack is empty!");
      // throw an error if trying to pop from an empty stack
    }
    let poppedData = this.top; 
    //save the current top node
    if (poppedData) {
      // move the top pointer to the next node
      let topData = poppedData.next;
      this.top = topData;
    }
    return poppedData;
  }

  isEmpty() {
    return this.top === null;
    // check if the stack is empty by verifying if the top pointer is null
  }
  findMin() {
    let currentNode = this.top;
    //Initialize min with the data of the top node ( if it exists)
    let min = currentNode ? currentNode.data : null;

    while (currentNode) {
      if (currentNode.data < min) {
        //update min if the data of the current node is smaller
        min = currentNode.data;
      }
      //move to the next node
      currentNode = currentNode.next;
    }
    return min;
  }

  peek() {
    //return the top node (or null if the stack is empty)
    return this.top;
  }

  sort() {
    let current = this.top;

    while (current) {
      let compareNode = current.next;

      while (compareNode) {
        if (current.data > compareNode.data) {
          // Swap the node data
          const temp = current.data;
          current.data = compareNode.data;
          compareNode.data = temp;
        }
        compareNode = compareNode.next;
      }
      current = current.next;
    }
    return this; // return the sorted stack
  }
}

// Queue

class Queue {
  constructor() {
    // initialize the first pointer to null(empty queue)
    this.first = null;
    // initialize the last pointer to null(empty queue)
    this.last = null;
    // intitialize the size to (empty queue)
    this.size = 0;
    // initialize the max to null ( no maximum value)
    this.max = null;
  }

  enqueue(data) {
    // create a new node with the provided data
    let newNode = new Node(data);

    if (!this.first) {
      // if the queue is empty, set both first and last pointers to the new node
      this.first = newNode;
      this.last = newNode;
    } else {
      // if the queue is not empty, update the last node's next pointer and move the last pointer to the new node
      let currentLast = this.last;
      currentLast.next = newNode;
      this.last = newNode;
    }
    //increment the size of the queue
    this.size++;

    let currentMax = this.max;
    if (currentMax === null || data > currentMax) {
      //update max if the queue is empty or the new data is greater than the current max
      this.max = data;
    }
  }
  dequeue() {
    if (!this.first) {
      throw new Error("The queue is empty. Please insert a node ");
    }
    const currentItem = this.first;

    if (this.first === this.last) {
      // if there's only one item in the queue, set last to null
      this.last = null;
    }
    // move the first pointer to the next node
    this.first = this.first.next;
    // decrment the size of the queue
    this.size--;
    // return the data of the dequeued item
    return currentItem.data;
  }
  count() {
    let count = 0;
    let currentNode = this.first;
    while (currentNode) {
      // increment count for each node
      count++;
      // move to the next node
      currentNode = currentNode.next;
    }
    return count;
  }
  isEmpty() {
    //check if the queue is empty by verifying if the first pointer is null
    return !this.first;
  }

  peek() {
    //return the first node (or null if the queue is empty)
    return this.first;
  }

  getLast() {
     //return the last node (or null if the queue is empty)
    return this.last;
  }

  findMax() {
    let current = this.first;
    //initialize maxData with the data of the first node (if it exists)
    let maxData = current ? current.data : null;

    while (current) {
      if (current.data > maxData) {
        //update maxData if the data of the current node is greater
        maxData = current.data;
      }
      // move to the next node
      current = current.next;
    }
   // update the max property with the maximum data value
    this.max = maxData;
    return maxData;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
