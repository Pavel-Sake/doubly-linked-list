const Node = require('./node');

class LinkedList {
  constructor() {
    this._tail = null;
    this._head = null;
    this.length = 0;
  }

  append(data) {
    let node = null;

    if (this.length === 0) {
      node = new Node(data);
      this._tail = node;
      this._head = node;
    } else {
      node = new Node(data, this._tail);
      this._tail.next = node;
      this._tail = node;
    }

    this.length++;

    return this;
  }

  head() {
    let data = null;

    if (this.length !== 0) {
      data = this._head.data;
    }

    return data;
  }

  tail() {
    let data = null;

    if (this.length !== 0) {
      data = this._tail.data;
    }

    return data;
  }

  at(index) {
    let data = null;

    if (index < this.length) {
      let counterIndex = 0;
      let node = this._head;

      while (node !== null) {
        if (counterIndex === index) {
          data = node.data;
          break;
        }

        counterIndex++;
        node = node.next;
      }
    }

    return data;
  }

  insertAt(index, data) {
    console.log('!!!!!!!!!! index', index, 'this.length', this.length);

    if(index < this.length) {
      let counterIndex = 0;
      let node = this._head;

      while (node !== null) {
        if (counterIndex === index) {
          node.data = data;
          break;
        }

        counterIndex++;
        node = node.next;
      }

      return this;
    }

    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;

    return this;
  }

  deleteAt(index) {
    if (index < this.length) {
      let counterIndex = 0;
      let node = this._head;

      while (node !== null) {
        if (counterIndex === index) {

          let previousNode = node.prev;
          let nextNode = node.next;

          if (previousNode && nextNode) {
            previousNode.next = nextNode;
            nextNode.prev = previousNode;
          }

          node = null;

          break;
        }

        counterIndex++;
        node = node.next;
      }
    }

    return this;
  }

  reverse() {
    let node = this._head;
    let nodeForExchange = null;

    while (node !== null) {
      nodeForExchange = node.prev;
      node.prev = node.next;
      node.next = nodeForExchange;
      node = node.prev;
    }

    nodeForExchange = this._head;
    this._head = this._tail;
    this._tail = nodeForExchange;

    return this;
  }

  indexOf(data) {
    let node = this._head;
    let index = 0;

    while (node !== null) {

      if (node.data === data) {
        return index;
      } else {
        ++index;
        node = node.next;
      }
    }

    return -1;
  }
}

module.exports = LinkedList;
