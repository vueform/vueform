const normalize = function (value) {
  if (value === undefined || typeof value != 'string') {
    return value
  }

  // is number
  if (value.match(/^-*\d+$/)) {
    return parseInt(value, 10)

  // is float
  } else if (value.match(/^\d+\.\d+$/)) {
    return parseFloat(value)

  // everything else
  } else {
    return value
  }
}

export default normalize