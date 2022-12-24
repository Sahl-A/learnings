const R = require('ramda')

// Listing 5.1 
// Wrapper
class Wrapper {
  constructor(value) {
    this._value = value;
  }

  // map :: (A -> B) -> A -> B
  map(cb) {
    return cb(this._value);
  }

  // fmap :: (A -> B) -> Wrapper(A) -> Wrapper(B)
  fmap(cb) {
    return new Wrapper(cb(this._value));
  }
}

// the below wrap that uses map(cb) is a simple one to bave the way for functors with fmap(cb)
// wrap :: (A) -> Wrapper(A)
const wrapSimple = (val) => new Wrapper(val);

const wrappedValue1 = wrapSimple([1,2,3,4,5])
console.log(wrappedValue1.map((val) => val.map(item => item+3)));

const wrappedValue2 = wrapSimple('Get Functional')
console.log(wrappedValue2.map(R.identity));
console.log(wrappedValue2.map(console.log));
console.log(wrappedValue2.map(R.toUpper));
///////////////////////////////////////////////
// Functors
///////////
/*
1. Transformation of content
2. Maintain the structure of content
3. Returns a new functor
*/
const wrap = (val) => new Wrapper(val);

const wrappedVal3 = wrap('hello');
const concatenate = (val) => val + ' there!'
const result = wrappedVal3.fmap(concatenate)
console.log(result);

