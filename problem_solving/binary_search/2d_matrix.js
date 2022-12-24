const searchMatrix = function (matrix, target) {
  let rowWidth = matrix[0].length;
  let left = 0,
    right = matrix[0].length * matrix.length - 1;

  const getEle = (mid) => matrix[Math.floor(mid / rowWidth)][mid % rowWidth];

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const normalizedMid = getEle(middle);
    if (target === normalizedMid) {
      return true;
    } else if (target < normalizedMid) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    11
  )
);
