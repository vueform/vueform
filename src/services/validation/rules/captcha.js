import Validator from './../validator'

export default class captcha extends Validator {
  get isAsync () {
    return true
  }

  async check(value) {
    if (!this.element$.shouldVerify) {
      return true
    }

    return await this.element$.Provider.validate(this.element$.Provider.getResponse())
  }
}