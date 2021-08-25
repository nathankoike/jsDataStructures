const stack = require("./stack.js");
const queue = require("./queue.js");

console.log("\nTesting stack");

let st = new stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);

console.log(st.top());
st.pop();

while (!st.empty()) {
  console.log(st.pop());
}

// -----------------------------------------------------------------------------
console.log("\nTesting queue");

let qu = new queue();
qu.enqueue(1);
qu.enqueue(2);
qu.enqueue(3);
qu.enqueue(4);

console.log(qu.front());
qu.dequeue();

while (!qu.empty()) {
  console.log(qu.dequeue());
}
