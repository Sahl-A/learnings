class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isBalanced(root) {
  function traverse(root) {
    if (!root) return [true, 0]
    const [isLeftChildBalanced, leftChildHeight] = traverse(root.left)
    const [isRightChildBalanced, rightChildHeight] = traverse(root.right)
    const isRootBalanced = isLeftChildBalanced && 
                            isRightChildBalanced &&
                            Math.abs(leftChildHeight - rightChildHeight) <= 1
    return [isRootBalanced, 1 + Math.max(leftChildHeight, rightChildHeight)]
  }
  return traverse(root)[0]
}

//                   1
//         2                     3
//    4         5        11              2
// 6        7         6              21

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.left.left.left = new BinaryTree(6);
root.left.right.left = new BinaryTree(7)
root.right.left = new BinaryTree(11);
root.right.right = new BinaryTree(2);
root.right.left.left = new BinaryTree(6);
root.right.right.left = new BinaryTree(21)

const node = root.left.right;
console.dir(isBalanced(root), { depth: null })