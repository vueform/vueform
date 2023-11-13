import each from 'lodash-es/each'
import normalize from './../../utils/normalize'

const parse = (string) => {
  let parseRule = () => {
    return string.split(':')[0]
  }

  let parseAttributes = () => {
   let parts = string.split(':')

    if (parts.length <= 1) {
      return null
    }

    let attributes = {}

    let rule = parts[0]

    parts.shift()
    let params = parts.join(':')

    if (['regex', 'not_regex'].indexOf(rule) !== -1) {
      attributes[0] = params

      return attributes
    }

    each(params.split(','), (attribute, index) => {
      var attrParts = attribute.split('=')

      if (attrParts.length <= 1) {
        attributes[index] = normalize(attribute)
      }
      else {
        attributes[attrParts[0]] = normalize(attrParts[1])
      }
    })

    return attributes
  }

  return {
    name: parseRule(),
    attributes: parseAttributes(),
  }
}

export default parse