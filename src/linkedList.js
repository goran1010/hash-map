import Node from "./newNode.js";

export default class List {
  constructor() {
    this.next = null;
  }
  append(value) {
    let currentNode = this;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value, null);
  }
  prepend(value) {
    this.next = new Node(value, this.next);
  }
  getSize() {
    let currentNode = this;
    let size = 0;
    while (currentNode.next !== null) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }
  getHead() {
    return this.next;
  }
  getTail() {
    {
      let currentNode = this;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }
  at(index) {
    let currentNode = this.next;
    let i = 0;
    while (i < index) {
      if (currentNode.next === null) {
        return;
      }
      currentNode = currentNode.next;
      i++;
    }
    return currentNode.value;
  }
  pop() {
    let prevNode = this;
    let currentNode = this.next;
    while (currentNode.next !== null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
  }
  contains(key) {
    let currentNode = this.next;
    while (currentNode !== null) {
      if (currentNode.value.key === key) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }
  find(key) {
    let currentNode = this.next;
    let i = 0;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      i++;
    }
    if (currentNode.value.key !== key) return null;
    return i;
  }
  toString() {
    let currentNode = this.next;
    let string = "head -> ";
    while (currentNode !== null) {
      string += `(${currentNode.value}) -> `;
      currentNode = currentNode.next;
    }
    return `${string} null`;
  }
  insertAt(value, index) {
    if (index === 0) {
      this.next = new Node(value, this.next);
      return;
    }

    let prevNode = this;
    let currentNode = this.next;
    let i = 0;

    while (i < index && currentNode !== null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    if (currentNode === null && i !== index) return; // If index is out of bounds, exit

    prevNode.next = new Node(value, currentNode);
  }
  removeAt(index) {
    let i = 0;
    let prevNode = this;
    let currentNode = this.next;

    while (i < index) {
      if (currentNode === null) {
        return;
      }
      i++;
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = currentNode.next;
  }
}
