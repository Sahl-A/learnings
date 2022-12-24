// naive solution that's inconsiderate that we have a parent node 
// it loops over all nodes and stores them in an array
// then loops again over the array
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  const data = [];
  let successor = null;
  traverse(tree)
  data.forEach((item, i, arr) => {
    if (item === node.value) {
      successor = arr[i+1]
    }
  })
  console.log(data);
  return successor;


  function traverse(tree) {
  if (tree.left) traverse(tree.left)
  data.push(tree.value)
  if (tree.right) traverse(tree.right)
  }
}


const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.parent = root;
root.right = new BinaryTree(3);
root.right.parent = root;
root.left.left = new BinaryTree(4);
root.left.left.parent = root.left;
root.left.right = new BinaryTree(5);
root.left.right.parent = root.left;
root.left.left.left = new BinaryTree(6);
root.left.left.left.parent = root.left.left;
root.left.right.left = new BinaryTree(7)
root.left.right.left.parent = root.left.right

const node = root.left.right;
console.dir(findSuccessor(root, node), { depth: null })