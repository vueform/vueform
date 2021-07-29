import _ from 'lodash'

const fileToObject = function (file) {
  return {
    lastModified: file.lastModified,
    name: file.name,
    size: file.size,
    type: file.type,
  }
}

const dataToComperable = function (data) {
  if (data instanceof File) {
    return fileToObject(data)
  }
  else if (data instanceof Date) {
    return data.toString()
  }
  else if (Array.isArray(data)) {
    return data.map(dataToComperable)
  }
  else if (typeof data === 'object' && data !== null) {
    return _.mapValues(data, dataToComperable)
  }

  return data
}

export default function dataEquals (a, b) {
  return _.isEqual(dataToComperable(a), dataToComperable(b))
}