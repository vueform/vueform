import utils from './../index'

const parse = (string) => {
  let parseRule = () => {
    return string.split(':')[0]
  }

  let parseAttributes = () => {
    var parts = string.split(':')

    if (parts.length <= 1) {
      return null
    }

    var attributes = {}

    if (['regex', 'not_regex'].indexOf(parts[0]) !== -1) {
      attributes[0] = parts[1]

      return attributes
    }

    _.each(parts[1].split(','), (attribute, index) => {
      var attrParts = attribute.split('=')

      if (attrParts.length <= 1) {
        attributes[index] = utils.normalize(attribute)
      }
      else {
        attributes[attrParts[0]] = utils.normalize(attrParts[1])
      }
    })

    return attributes
  }

  return {
    rule: parseRule(),
    attributes: parseAttributes(),
  }
}

export default parse