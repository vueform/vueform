const replacePrototypeValue = function (value, i) {
  if (_.isString(value)) {
    return value.replace('{i}', i)
  }
  else {
    let key = _.keys(value)[0]

    return {
      [key]: replacePrototypeValue(value[key], i)
    }
  }
}

export default replacePrototypeValue