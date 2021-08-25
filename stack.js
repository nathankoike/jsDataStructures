module.exports = class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  top() {
    if (!this.empty()) return this.data[this.data.length - 1];
  }

  pop() {
    if (!this.empty()) return this.data.pop();
  }

  empty() {
    return this.data.length < 1;
  }
};

// exports.stack = Stack;
