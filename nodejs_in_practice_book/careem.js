function numDuplicates(name, price, weight) {
  const map = {}
  let filteredProdcuts = 0
  for(let i=0; i<name.length; i++) {
      const itemName = name[i];
      const itemPrice = price[i];
      const itemWeight = weight[i];
      const unique = itemName + itemPrice + itemWeight
      // if (map[unique] && map[unique][0] === itemPrice && map[unique[1] === itemWeight]) {
      //     console.log('duplicate')
      //     filteredProdcuts++;
      //     continue;
      // }
      map[unique] = [itemPrice, itemWeight];
  }
  console.log(map)
  // console.log(filteredProdcuts)
  return filteredProdcuts

}

console.log(numDuplicates(['ab','ab','ba','xc','xc'],[1,1,2,3,4],[1,1,2,3,4]));