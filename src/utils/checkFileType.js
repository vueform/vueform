import _ from 'lodash'

export default function checkFileType (file, accept) {
  if (!accept) {
    return true
  } 

  if (!_.isArray(accept)) {
    accept = accept.split(',')

    _.each(accept, (one, i) => {
      accept[i] = one.trim()
    })
  }

  return accept.indexOf(file.type) !== -1 || accept.indexOf(file.name.split('.').pop()) !== -1
}