import Validator from './../validator'

const checker = function(value) {
  var re = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/

  return re.test(value)
}

export default class ipv4 extends Validator {
  check(value) {
    return checker(value)
  }
}

export {
  checker as ipv4
}