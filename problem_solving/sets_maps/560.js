var subarraySum = function(nums, k) {
  let result = 0;
  for(let i=0; i<nums.length; i++) {
      let sum = 0;
      let j = i;
      while(sum <= k) {
          sum += nums[j];
          if(sum === k) {
              result++;
          }
          j++;
      }
  }
  return result;
};

console.log(subarraySum([1,2,3,4,5,2,3,4,1,11,0,2,1,3], 5));