module.exports = class BinTree {
  constructor(
    value = null,
    leftChild = null,
    rightChild = null,
    parent = null,
    cmp = (a, b) => a.value < b
  ) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
    this.cmp = cmp;
    this.parent = parent;
  }

  // Perform a preorder traversal of the tree, applying the function to each
  // node of the tree
  preorder(fn = n => {}) {
    fn(this);
    if (this.leftChild) this.leftChild.preorder(fn);
    if (this.rightChild) this.rightChild.preorder(fn);
  }

  // Perform an inorder traversal of the tree, applying the function to each
  // node of the tree
  inorder(fn = n => {}) {
    if (node.leftChild) node.leftChild.inorder(fn);
    fn(this);
    if (node.rightChild) node.rightChild.inorder(fn);
  }

  // Perform a postorder traversal of the tree, applying the function to each
  // node of the tree
  postorder(fn = n => {}) {
    if (this.leftChild) this.leftChild.postorder(fn);
    if (this.rightChild) this.rightChild.postorder(fn);
    fn(this);
  }

  // Search the tree for an item, returning the first node containing the item
  // or null if the item does not exist
  search(item) {
    if (this.value == item) return this;

    if (this.leftChild && !this.cmp(this, item))
      return this.leftChild.search(item);
    if (this.rightChild && this.cmp(this, item))
      return this.rightChild.search(item);

    return null;
  }

  // Insert an element into this tree
  insert(item) {
    // If the root is empty
    if (this.value === null) this.value = item;

    // If item belongs on the right of this tree
    if (this.cmp(this, item)) {
      if (!this.rightChild)
        // Make a new child if there is no right child
        this.rightChild = this.rightChild = new BinTree(
          item,
          null,
          null,
          this,
          this.cmp
        );
      else this.rightChild.insert(item); // Recursively try to insert the item
    } else {
      if (!this.leftChild)
        // Make a new child if there is no right child
        this.leftChild = this.leftChild = new BinTree(
          item,
          null,
          null,
          this,
          this.cmp
        );
      else this.leftChild.insert(item); // Recursively try to insert the item
    }
  }

  delete(node) {
    // Deleting a singleton node
    if (!node.parent && !node.leftChild && !node.rightChild) node.value = null;

    let replacement = null;

    // If either child exists, find the replacement node
    if (node.leftChild || node.rightChild) {
      // Prefer the deepest node on the left branch of the right subtree
      if (node.rightChild) {
        replacement = node.rightChild;
        for (
          ;
          replacement.leftChild || replacement.rightChild;
          replacement = replacement.leftChild
            ? replacement.leftChild
            : replacement.rightChild
        );
      }

      // Use the left child if needed
      else {
        replacement = node.leftChild;
      }

      // Replace the value of the target node
      node.value = replacement.value;
    }

    // Node to replace has no children
    else {
      replacement = node;
    }

    // Remove the connection from parent to child
    replacement.parent.leftChild == replacement
      ? (replacement.parent.leftChild = null)
      : (replacement.parent.rightChild = null);
  }

  size() {
    let s = 1;
    if (this.leftChild) s += this.leftChild.size();
    if (this.rightChild) s += this.rightChild.size();

    return s;
  }
};
