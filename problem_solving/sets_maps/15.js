// https://leetcode.com/problems/3sum/

// var threeSum = function (nums) {
//   nums.sort();
//   let result = [];
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           result.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }

//   return result;
// };

var threeSum = function (nums) {
  if (nums.length < 3) return [];

  nums.sort();
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    const num = nums[i];
    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      if (nums[i] + nums[start] + nums[end] === 0) {
        result.push([nums[i], nums[start], nums[end]]);
      }
      start++;
      end--;
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
