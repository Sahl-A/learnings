const _ = require('lodash')

const money = [1,2,3,4,5,6,7,8,9]

const users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

const chainedUsers = _
  .chain(users)
  .sortBy('age')
console.log(chainedUsers);