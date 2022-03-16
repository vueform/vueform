import Validator from './../validator'

export default class active_url extends Validator {
  get isAsync() {
    return true
  }

  async check(value) {
    const endpoint = this.form$.$vueform.config.endpoints.activeUrl
    const method = typeof endpoint !== 'function' ? endpoint.method : null

    let res

    if (typeof endpoint === 'function') {
      res = await(endpoint(value, this.element$, this.form$))
    } else {
      res = await this.form$.$vueform.services.axios.request({
        url: endpoint.url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: {
          url: value
        },
      })
    }
    
    return res.data
  }
}