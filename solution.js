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

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  size() {
    let count = 0;
    let currentNode = this.top;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  peek() {
    if (this.top === null) {
      throw new Error("This stack is empty");
    }
    return this.top;
  }

  pop() {
    if (this.top == null) {
      throw new Error("This stack is empty");
    }
    let currentTop = this.top;
    if (currentTop) {
      const newTop = currentTop.next;
      this.top = newTop;
      return currentTop;
    }
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    let current = this.top;
    let min = current.data;

    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return min;
  }

  sort() {
    const newStack = new Stack();
    const thisTop = this.pop();
    newStack.push(thisTop.data);
    while (!this.isEmpty()) {
      let thisNextTop = this.pop();
      while (!newStack.isEmpty()) {
        let newStackTop = newStack.peek();
        if (thisNextTop.data < newStackTop.data) {
          let removeNewStackTop = newStack.pop();
          this.push(removeNewStackTop.data);
        } else {
          break;
        }
      }
      newStack.push(thisNextTop.data);
    }
    while (!newStack.isEmpty()) {
      let newStackTop = newStack.pop();
      this.push(newStackTop.data);
    }
    return this.top;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 10;
  }

  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const firstNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return firstNode.data;
  }

  enqueue(nums) {
    let newNode = new Node(nums);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
}

const wordStack = new Stack();

for (let i = 0; i < words.length; i++) {
  wordStack.push(words[i]);
}

// console.log(wordStack.peek());
// console.log(wordStack.pop());
// console.log(wordStack.pee2k());

let numsQueue = new Queue();

for (let i = 0; i < nums.length; i++) {
  numsQueue.enqueue(nums[i]);
}

console.log(numsQueue.dequeue());
console.log(inspect(numsQueue, { colors: true, depth: 11 }));
// console.log(monthQueue.first);
// console.log(monthQueue.last);
// console.log(monthQueue.isEmpty());

module.exports = {
  Node,
  Queue,
  Stack,
};
