module.exports = class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    this.data.push(element);
  }

  empty() {
    return this.data.length < 1;
  }

  dequeue() {
    if (!this.empty()) return this.data.shift();
  }

  front() {
    if (!this.empty()) return this.data[0];
  }
};
