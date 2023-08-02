class LinkedList {
  constructor() {
    this.listSize = 0;
    this.listHead = null;
    this.listTail = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.listSize == 0) {
      this.listHead = node;
    } else {
      this.listTail.nextNode = node;
    }

    this.listTail = node;

    this.listSize++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.listSize == 0) {
      this.listTail = node;
    } else {
      node.nextNode = this.listHead;
    }
    this.listHead = node;
    this.listSize++;
  }

  insertAt(value, index) {
    if (index > this.listSize || index < 0) return "Out of list bounds";
    if (index == 0) {
      this.prepend(value);
      return;
    }

    let current = this.listHead;
    let nodeAtIndexPlus1;
    const node = new Node(value);

    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }

    nodeAtIndexPlus1 = current.nextNode;
    current.nextNode = node;
    node.nextNode = nodeAtIndexPlus1;
    this.listSize++;
  }

  removeAt(index) {
    if (index > this.listSize - 1|| index < 0) return "Out of list bounds";
    if (index == 0) {
      this.listHead = this.listHead.nextNode;
      this.listSize--;
      return;
    }

    let current = this.listHead;
    let nodeAtIndexPlus1;

    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }

    nodeAtIndexPlus1 = current.nextNode.nextNode;
    current.nextNode = nodeAtIndexPlus1;
    this.listSize--;
  }

  size() {
    return this.listSize;
  }

  head() {
    return this.listHead;
  }

  tail() {
    return this.listTail;
  }

  at(index) {
    if (index > this.listSize - 1 || index < 0) return "Out of list bounds";

    let current = this.listHead;

    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    return current;
  }

  pop() {
    let current = this.listHead;
    const oldTail = this.listTail;

    if (this.listSize > 1) {
      for (let i = 0; i < this.listSize - 2; i++) {
        current = current.nextNode;
      }
      this.listTail = current;
      this.listTail.nextNode = null;
    } else {
      this.listHead = null;
      this.listTail = null;
    }

    this.listSize--;
    return oldTail;
  }

  contains(value) {
    let current = this.listHead;

    for (let i = 0; i < this.listSize; i++) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.listHead;

    for (let i = 0; i < this.listSize; i++) {
      if (current.value === value) return i;
      current = current.nextNode;
    }

    return null;
  }

  toString() {
    let string = "";

    if (this.head() != null) {
      let current = this.head();

      do {
        string += `(${current.value}) -> `;
        current = current.nextNode;
      } while (current != null);
    }

    return (string += "null");
  }
}

class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}