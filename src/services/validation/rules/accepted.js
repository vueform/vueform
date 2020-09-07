import Validator from './../validator'

export default class accepted extends Validator {
  check(value) {
    return ['yes', 'on', '1', 1, true, 'true'].indexOf(value) !== -1
  }
}