import "./style.css";
import addFavicon from "./addFavicon/addFavicon.js";
import HashMap from "./HashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("elephant", "hey");

console.log(test.buckets);
console.log(test.length());

console.log("search key:lion -> value:" + test.get(`lion`));
test.set("eel", "light-gray");
console.log(test.buckets);
console.log(test.has("grape"));
console.log(test.has("eggs"));
test.getAllItems();
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.set("tornado", "dark-gray");
console.log(test.buckets);

test.set("moon", "silver");
test.set("sun", "yellow");
test.set("sunset", "silver");
test.set("moon moon", "yellow");
test.set("more text", "dark-gray");
test.set("another text here", "silver");
test.set("some text here", "yellow");

console.log(test.buckets);
console.log(test.keys());

console.log(test.length());
test.remove("sun");

console.log(test.length());

test.clear();
console.log(test.buckets);
console.log(test.length());
