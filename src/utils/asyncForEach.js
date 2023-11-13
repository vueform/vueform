// import _ from 'lodash'
import isPlainObject from 'lodash/isPlainObject'
import values from 'lodash/values'
import keys from 'lodash/keys'

export default async function asyncForEach(array, callback) {
  for (let index = 0; index < (_.isPlainObject(array) ? _.values(array) : array).length; index++) {
    let key = (_.isPlainObject(array) ? _.keys(array)[index] : index)

    await callback(array[key], key, array)
  }
}