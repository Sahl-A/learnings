function minHeightBst(array) {
  const midLength = Math.floor((array.length -1) / 2)
  let tree = new BST(array[midLength])
  helper(tree, array.slice(0, midLength), 'left')
  helper(tree, array.slice(midLength +1), 'right')
  return tree
}

  function helper(tree, arr, direction) {
    if (!arr.length) return
    const mid = Math.floor((arr.length -1) / 2)
    tree.insert(arr[mid])
    // if (direction === 'left') {
    //   tree.left = new BST(arr[mid])
      
    // } else {
    //   tree.right = new BST(arr[mid])
        
    // }
    helper(tree, arr.slice(0, mid), 'left')
    helper(tree, arr.slice(mid + 1), 'right')
  }

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

console.dir(minHeightBst([1,2,5,7,10,13,14,15,22], { depth: null }));
