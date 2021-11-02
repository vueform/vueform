import Validator from './../validator'

export default class active_url extends Validator {
  get isAsync() {
    return true
  }

  async check(value) {
    const endpoint = this.form$.$vueform.config.endpoints.activeUrl
    const method = endpoint.method

    const res = await this.form$.$vueform.services.axios.request({
      url: endpoint.url,
      method,
      [method.toLowerCase() === 'get' ? 'params' : 'data']: {
        url: value
      },
    })
    
    return res.data
  }
}