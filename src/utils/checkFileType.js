import each from 'lodash/each'
import isArray from 'lodash/isArray'
import some from 'lodash/some'

export default function checkFileType (file, accept) {
  if (!accept) {
    return true
  } 

  if (!isArray(accept)) {
    accept = accept.split(',')

    each(accept, (one, i) => {
      accept[i] = one.trim()
    })
  }

  return some(accept, (a) => {
    let universal = a.match(/^([^\/]+)\/\*$/)

    if (universal) {
      return !!(new RegExp(`^${universal[1]}\/`)).exec(file.type)
    } else if (a == file.type) {
      return true
    } else if (a == `.${file.name.split('.').pop()}`) {
      return true
    }

    return false
  })
}