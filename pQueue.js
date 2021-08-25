function mergeSort(ary, compFn) {
  if (ary.length < 2) return ary;

  let firstAry = [];
  for (let i = 0; i < Math.floor(ary.length / 2); i++) firstAry.push(ary[i]);

  let secondAry = [];
  for (let i = Math.floor(ary.length / 2); i < ary.length; i++)
    secondAry.push(ary[i]);

  let sorted = [];
  firstAry = mergeSort(firstAry, compFn);
  secondAry = mergeSort(secondAry, compFn);

  // Merge the sorted lists
  while (firstAry.length > 0 && secondAry.length > 0) {
    if (compFn(firstAry[0], secondAry[0])) sorted.push(firstAry.shift());
    else sorted.push(secondAry.shift());
  }

  // Add any remaining elements
  if (firstAry.length > 0)
    for (let i = 0; i < firstAry.length; i++) sorted.push(firstAry[i]);
  else for (let i = 0; i < secondAry.length; i++) sorted.push(secondAry[i]);

  return sorted;
}

module.exports = class PQueue {
  constructor(compFn = (a, b) => a < b) {
    this.compFn = compFn;

    this.data = [];
  }

  enqueue(element) {
    this.data.push(element);

    this.data = mergeSort(this.data, this.compFn);
    // console.log(this.data, "lOKAEUGF");
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
