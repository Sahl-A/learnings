const ObjectId = require('mongodb').ObjectId

const generateObjectId = () => {
  return new ObjectId().toString()
}

module.exports = {
  generateObjectId
}
