//https://leetcode.com/problems/contains-duplicate-ii/

var containsNearbyDuplicate = function (nums, k) {
  let start = 0,
    end = start + k;

  while (end < nums.length) {
    const subNums = nums.slice(start, end + 1);
    const numsSet = new Set();
    for (let i = 0; i < subNums.length; i++) {
      numsSet.add(subNums[i]);
    }
    if (numsSet.size !== subNums.length) {
      return true;
    }
    start++;
    end++;
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
