// // this to practice creating linked lists

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//     this.size = 0
//   }

//   shift(value) {
//     this.head = new Node(value, this.head)
//     this.size++
//   }

//   push(value) {
//     const node = new Node(value)
//     if (!this.head) {
//       this.head = node
//     } else {
//       let current = this.head
//       while(current.next) {
//         current = current.next
//       }
//       current.next = node
//     }

//     this.size++
//   }
// }

// let list = new LinkedList()

// list.push(4)
// list.push(3)
// list.push(7)
// list.push(20)
// list.shift(50)

// console.dir(list, {depth: null});


///////////////////////////////////////

class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
    // this.size = 0
  }

  setHead(node) {
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.insertBefore(this.head, node)
    }
  }

  insertBefore(node, nodeToInsert) {
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (!node.prev) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert
    }
    node.prev = nodeToInsert
  }
}

const node1 = new Node(5);
const node2 = new Node(4);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(1);
const node6 = new Node('bala7');

const linkedList = new DoublyLinkedList(node1, node1)
linkedList.setHead(node2)
linkedList.setHead(node3)
linkedList.setHead(node4)
linkedList.setHead(node5)


console.dir(linkedList, {depth: null});