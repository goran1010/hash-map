import List from "./linkedList.js";

export default class HashMap {
  constructor() {
    this.loadFactor = 0.8;
    this.items = 0;
    this.capacity = 16;
    this.buckets = this.createBuckets();
  }
  createBuckets() {
    let array = [];
    for (let index = 0; index < this.capacity; index++) {
      array.push(null);
    }
    return array;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }
    return hashCode;
  }

  getAllItems() {
    const tempArray = [];
    const copyArray = JSON.parse(JSON.stringify(this.buckets));
    for (let i = 0; i < this.capacity; i++) {
      if (copyArray[i] !== null) {
        while (copyArray[i].next !== null) {
          tempArray.push(copyArray[i].next.value);
          copyArray[i] = copyArray[i].next;
        }
      }
    }
    return tempArray;
  }

  set(key, value) {
    if (this.items > this.capacity * this.loadFactor) {
      const someArray = this.getAllItems();
      this.capacity *= 2;
      this.buckets = this.createBuckets();
      this.items = 0;
      someArray.forEach((element) => {
        this.set(element.key, element.value);
      });
    }

    let hashCode = this.hash(key);
    if (this.buckets[hashCode] === null) {
      let linkedList = new List();
      linkedList.prepend({ key, value });
      this.buckets[hashCode] = linkedList;
      this.items++;
      return;
    }
    if (!this.buckets[hashCode].contains(key)) {
      this.buckets[hashCode].append({ key, value });
      this.items++;
      return;
    }
    let index = this.buckets[hashCode].find(key);
    this.buckets[hashCode].removeAt(index);
    this.buckets[hashCode].append({ key, value });
  }

  get(key) {
    let hashCode = this.hash(key);
    if (this.buckets[hashCode] === null) return null;
    if (!this.buckets[hashCode].contains(key)) return null;
    let index = this.buckets[hashCode].find(key);
    return this.buckets[hashCode].at(index).value;
  }
  has(key) {
    let hashCode = this.hash(key);
    if (this.buckets[hashCode] === null) return false;
    if (!this.buckets[hashCode].contains(key)) return false;
    return true;
  }
  remove(key) {
    let hashCode = this.hash(key);
    if (this.buckets[hashCode] === null) return false;
    if (!this.buckets[hashCode].contains(key)) return false;
    let index = this.buckets[hashCode].find(key);
    console.log(index);
    this.buckets[hashCode].removeAt(index);
    return true;
  }
  length() {
    return this.items;
  }
  clear() {
    this.items = 0;
    this.buckets = this.createBuckets();
  }
  keys() {
    const tempArray = [];
    const array = this.getAllItems();
    array.forEach((element) => {
      tempArray.push(element.key);
    });
    return tempArray;
  }
  values() {
    const tempArray = [];
    const array = this.getAllItems();
    array.forEach((element) => {
      tempArray.push(element.value);
    });
    return tempArray;
  }
  entries() {
    return this.getAllItems();
  }
}
