const faker = require('faker')
const { generateObjectId } = require('../objectId')

/*
 * returns an object containing all needed fields of a captain.
 * doesn't register or create plan for captain.
 * params example:
 * {
 *   name: 'zaza', // default: faker.name.findName()
 *   city: { ...cityObject },
 *   cityId: ObjectId // default: city._id or generateObjectId()
 * }
 */
const generateCaptain = (params = {}) => {
  const name = params.name || faker.name.findName()
  const cityId = params.cityId || params.city ? params.city._id.toString() : generateObjectId()

  return {
    _id: generateObjectId(),
    name,
    city: cityId
  }
}

module.exports = {
  generateCaptain
}
