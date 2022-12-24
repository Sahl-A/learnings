const faker = require('faker')
const { generateObjectId } = require('../objectId')

/*
 * returns an object containing all needed fields of a city.
 * doesn't register city in fetcher.
 * params example:
 * {
 *   name: 'zaza', // default: faker.address.city()
 *   currency: 'EGP', // default: faker.finance.currencyCode()
 *   timezone: ms('2 hours') // default: faker.random.number()
 * }
 */
const generateCity = (params = {}) => {
  const _id = params._id || generateObjectId()
  const name = params.name || faker.address.city()
  const currency = params.currency || faker.finance.currencyCode()
  const timezone = params.timezone || faker.datatype.number()
  return {
    _id: _id,
    name,
    currency,
    timezone
  }
}

module.exports = {
  generateCity
}
