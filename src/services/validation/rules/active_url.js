import Validator from './../validator'

export default class active_url extends Validator {
  get isAsync() {
    return true
  }

  async check(value) {
    var res = await this.form$.$laraform.services.axios.post(this.form$.$laraform.config.endpoints.validators.active_url, {
      url: value
    })
    
    return res.data
  }
}