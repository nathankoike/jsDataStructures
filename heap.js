module.exports = class Heap {
  constructor(compFn = (a, b) => a < b) {
    this.compFn = compFn;

    this.data = [];

    this.size = 0;
  }

  insert(element) {
    this.data.push(element);
    this.reheapUp(this.size++);
  }

  front() {
    if (this.size < 1) return null;

    return this.data[0];
  }

  swap(i, j) {
    if (i > this.size || j > this.size) return;

    let x = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = x;
  }

  // Move the last element added up the heap to its correct position
  reheapUp(index) {
    if (index < 1) return; // Last element was the first element

    let p = this.parent(index);

    if (this.compFn(this.data[index], this.data[p])) {
      this.swap(index, p);
      this.reheapUp(p);
    }
  }

  // Move the first element in the heap down to its correct position
  reheapDown(index) {
    let lc = this.leftChild(index);

    if (lc >= this.size) return; // No lower position allowed

    // Right child doesn't exist but left child does
    if (this.rightChild(index) >= this.size) {
      if (this.compFn(this.data[lc], this.data[index])) {
        this.swap(lc, index);
        this.reheapDown(lc);
      }

      return;
    }

    // Both children exist, so pick the one that would need to be replaced
    let replace = this.compFn(this.data[lc], this.data[this.rightChild(index)])
      ? lc
      : this.rightChild(index);

    // Check if we need to replace
    if (this.compFn(this.data[replace], this.data[index])) {
      this.swap(replace, index);
      this.reheapDown(replace);
    }
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return this.leftChild(index) + 1;
  }

  remove() {
    this.swap(0, this.size - 1);
    this.size--;

    let x = this.data.pop();

    this.reheapDown(0);
    return x;
  }
};
