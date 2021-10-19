import Validator from './../validator'

export default class active_url extends Validator {
  get isAsync() {
    return true
  }

  async check(value) {
    const endpoint = this.form$.$laraform.config.endpoints.active_url

    var res = await this.form$.$laraform.services.axios[endpoint.method](endpoint.url, {
      url: value
    })
    
    return res.data
  }
}