import isPlainObject from 'lodash-es/isPlainObject'
import values from 'lodash-es/values'
import keys from 'lodash-es/keys'

export default async function asyncForEach(array, callback) {
  for (let index = 0; index < (isPlainObject(array) ? values(array) : array).length; index++) {
    let key = (isPlainObject(array) ? keys(array)[index] : index)

    await callback(array[key], key, array)
  }
}