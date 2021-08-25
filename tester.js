const stack = require("./stack.js");

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
