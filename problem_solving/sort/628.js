// https://leetcode.com/problems/maximum-product-of-three-numbers/

var maximumProduct = function (nums) {
  const appendProduct = (array, product, iterations) => {
    for (let i = 0; i < iterations; i++) {
      product *= array[array.length - 1 - i];
    }
    return product;
  };

  nums.sort((a, b) => a - b);

  const maxNthProduct = (sortedNumbers, numberOfProducts) => {
    let result = 1;
    for (let i = 0; i < numberOfProducts; i++) {
      const number = sortedNumbers[i];
      const remainingProducts = numberOfProducts - i;
      if (number >= 0) {
        result = appendProduct(sortedNumbers, result, remainingProducts);
      } else if (Math.abs(number) < sortedNumbers[sortedNumbers.length - 1]) {
        result = appendProduct(sortedNumbers, result, remainingProducts);
      } else {
        result *= number;
      }
    }
    return result;
  };

  return maxNthProduct(nums, 3);
};

maximumProduct([1, 2, 3]);
maximumProduct([-15, -2, 0, 1, 5]);
maximumProduct([-15, -10, -2, 0, 3, 4]);
