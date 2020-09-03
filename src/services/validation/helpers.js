import _ from 'lodash'

const filled = function(value) {
  if (value === null) {
    return false;
  }
  else if (value === undefined) {
    return false;
  }
  else if (_.isString(value) && _.trim(value) === '') {
    return false;
  }
  else if (_.isArray(value) && value.length < 1) {
    return false;
  }
  else if (value instanceof File && value.name === '') {
    return false;
  }

  return true
}

export {
  filled,
}