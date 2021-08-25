class Node {
  constructor(prev, data, next) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

module.exports = class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;

    this.count = 0;
  }

  // Get the data at the index
  get(index) {
    // Invalid index
    if (index >= this.count || index < 0) return;

    let [incFunc, checkFunc] =
      index > this.count / 2
        ? [
            () => {
              this.current = this.current.prev;
              index++;
            },
            () => index < this.count - 1
          ]
        : [
            () => {
              this.current = this.current.next;
              index--;
            },
            () => index > 0
          ];

    for (
      this.current = index > this.count / 2 ? this.tail : this.head;
      checkFunc();
      incFunc()
    );

    return this.current.data;
  }

  add(element, index = 0) {
    // Invalid index
    if (index > this.count || index < 0) return;

    // Empty list
    if (!this.head) {
      this.head = new Node(null, element, null);
      this.tail = this.head;
      this.current = this.head;
    }

    // Adding to tail
    else if (index == this.count) {
      let insertion = new Node(this.tail, element, null);

      this.tail.next = insertion;
      this.tail = insertion;
    }

    // Everything else
    else {
      this.get(index);

      let insertion = new Node(this.current.prev, element, this.current);

      // Inserting at the beginning
      if (this.current.prev) this.current.prev.next = insertion;
      else this.head = insertion;

      this.current.prev = insertion;
      this.current = insertion;
    }
    this.count++;
  }

  remove(index = 0) {
    // Invalid index
    if (index >= this.count || index < 0) return;

    // Everything else
    this.get(index);

    if (this.current.prev) this.current.prev.next = this.current.next;
    else this.head = this.current.next;

    if (this.current.next) this.current.next.prev = this.current.prev;
    else this.tail = this.current.prev;

    this.current = this.current.next;

    this.count--;
  }

  reassign(value, index = 0) {
    // Invalid index
    if (index >= this.count || index < 0) return;

    // Everything else
    this.get(index);
    this.current.data = value;
  }

  print() {
    this.current = this.head;

    for (; this.current; this.current = this.current.next) {
      console.log(
        `[${this.current.prev} -- ${this.current.data} -- ${this.current.next}]`
      );
    }
  }
};
