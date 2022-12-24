class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  //                10
  //        5                    13
  //    2         6         11           16
  // 1   3   7       9  X      12   14         17

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        /////////////// when equal
        if (value === current.value) return;
        /////////////// left hand side
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
          ///////////// right hand side
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  contain(value) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          return false;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (!current.right) {
          return false;
        } else {
          current = current.right;
        }
      } else {
        return true;
      }
    }
  }

  addChildIfExists(queue, node, direction) {
    if(node.direction) queue.push(node.direction)
  }

  BfS() {
    if (!this.root) return 
    let queue = [this.root], visited = [];
    while(queue.length) {
      const node = queue.shift()
      visited.push(node.value)
      this.addChildIfExists(queue, node, left)
      this.addChildIfExists(queue, node, right)
    }
    return visited
  }

  //         10
  //    6           14
  // 2     8    12      16

  traverse (node, output) {
    output.push(node.value)
    node?.left && this.traverse(node.left)
    node?.right && this.traverse(node.right)

  }

  preOrderDfs() {
    const visited = []
    traverse(this.root, visited)
    return visited
  }

  DFS_preOrder() {
    let visited = []

    traverse(this.root)
    return visited;

    function traverse(node) {
      visited.push(node.value)

      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

  }

  DFS_postOrder() {
    let visited = []

    traverse(this.root)
    return visited;

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      visited.push(node.value)      
    }

  }

  DFS_inOrder() {
    let visited = []

    traverse(this.root)
    return visited;

    function traverse(node) {
      if (node.left) traverse(node.left)
      visited.push(node.value)      
      if (node.right) traverse(node.right)
    }

  }
}

let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(6);
tree.insert(11);
tree.insert(16);
tree.insert(12);
// console.log(tree.contain(1));
// console.dir(tree, { depth: null });
// console.log(tree.BfS());
console.log(tree.DFS_preOrder());
console.log(tree.DFS_postOrder());
console.log(tree.DFS_inOrder());
