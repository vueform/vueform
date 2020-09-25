export default async function asyncForEach(array, callback) {
  for (let index = 0; index < (_.isPlainObject(array) ? _.values(array) : array).length; index++) {
    let key = (_.isPlainObject(array) ? _.keys(array)[index] : index)

    await callback(array[key], key, array)
  }
}