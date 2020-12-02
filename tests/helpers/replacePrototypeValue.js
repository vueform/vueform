const replacePrototypeValue = function (value, i) {
  if (_.isString(value) || value instanceof File) {
    return value instanceof File
      ? new File([value], value.name.replace('{i}', i))
      : value.replace('{i}', i)
  }
  else {
    let key = _.keys(value)[0]

    return {
      [key]: replacePrototypeValue(value[key], i)
    }
  }
}

export default replacePrototypeValue