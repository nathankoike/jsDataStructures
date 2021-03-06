const stack = require("./stack.js");
const queue = require("./queue.js");
const doublyLinkedList = require("./doublyLinkedList.js");
const pQueue = require("./pQueue.js");
const heap = require("./heap.js");
const binTree = require("./binTree.js");

console.log("\nTesting stack\n");

let st = new stack();
st.push(1);
// st.push(2);
// st.push(3);
// st.push(4);
//
// console.log(st.top());
// st.pop();

while (!st.empty()) console.log(st.pop());

// -----------------------------------------------------------------------------
console.log("\n\n\nTesting queue\n");

let qu = new queue();
qu.enqueue(1);
// qu.enqueue(2);
// qu.enqueue(3);
// qu.enqueue(4);
//
// console.log(qu.front());
// qu.dequeue();

while (!qu.empty()) console.log(qu.dequeue());

// -----------------------------------------------------------------------------
console.log("\n\n\nTesting doubly linked list\n");

let dll = new doublyLinkedList();
dll.add(4);
dll.add(1);
dll.add(2, 1);
dll.add(3, 2);
dll.add(5, 4);
dll.print();
//
// console.log();
// console.log("Length:", dll.count);
//
// console.log("Value at index 3:", dll.get(3));
// dll.remove(3);
//
// console.log();
// console.log("Length:", dll.count);
// dll.print();
//
// console.log();
// console.log("Removing element at index 0");
// dll.remove();
// // dll.print();
// while (dll.count > 0) {
//   console.log("Current list state:");
//   dll.print();
//   dll.remove();
//   console.log();
// }
//
// dll.add(0);
// dll.add(1, 1);
//
// dll.print();
//
// console.log("\nReassigning index 0 to the value 100");
//
// dll.reassign(100);
// dll.print();
//
// console.log("\nRemoving element from end");
// dll.remove(1);
//
// dll.print();

// -----------------------------------------------------------------------------
console.log("\n\n\nTesting priority queue\n");

let pq = new pQueue();
pq.enqueue(4);
// pq.enqueue(2);
// pq.enqueue(1);
// pq.enqueue(3);
//
// console.log(pq.data);
//
// console.log(pq.front());
//
// pq.dequeue();
// console.log(pq.data);

while (!pq.empty()) console.log(pq.dequeue());

// -----------------------------------------------------------------------------
console.log("\n\n\nTesting heap\n");

let he = new heap();
he.insert(4);
// console.log(he.front()); // 4
// he.insert(2);
// console.log(he.front()); // 2
// he.insert(1);
// console.log(he.front()); // 1
// he.insert(3);
// console.log(he.front()); // 1
//
// console.log();
//
// he.remove();
// console.log(he.front()); // 2

// console.log(he.data);

while (he.size > 0) console.log(he.remove());

// -----------------------------------------------------------------------------
console.log("\n\n\nTesting binary tree\n");

let bt = new binTree();
bt.value = 16;
bt.insert(8);
bt.insert(4);
bt.insert(2);
bt.insert(1);
bt.insert(0);
bt.insert(1);
bt.insert(32);
bt.insert(64);
bt.insert(128);
bt.insert(512);
bt.insert(100);

bt.preorder(n => console.log(n.value));

bt.delete(bt.search(1));

console.log();

bt.preorder(n => console.log(n.value));

console.log("\n", bt.size());
