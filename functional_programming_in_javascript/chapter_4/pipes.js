// use Ramda to checkType
// checkType is used in listing 4.2 

const R = require('ramda')
const checkType = R.curry((typeDef, obj) => {
  if(!R.is(typeDef, obj)) {
    let type = typeof obj
    throw new Error(`Type mismatch: expected ${typeDef} but found ${type}`)
  }
  return obj;
})

// console.log(checkType(Object)({test: 1}));
// console.log(checkType(Number)('2'));

//////////////////////////////////////////////
// Listing 4.7 implementation of partial