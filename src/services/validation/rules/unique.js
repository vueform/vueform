import _ from 'lodash'
import Validator from './../validator'

export default class unique extends Validator {
  get isAsync() {
    return true
  }

  get requestParams() {
    var params = {}

    _.each(this.attributes, (param, key) => {
      var requestParam = key

      if (!isNaN(key)) {
        requestParam = param
      }

      if (requestParam == 'debounce') {
        return
      }

      var el = this.form$.el$(requestParam)

      // set the element value or the param name itself
      params[_.keys(params).length] = el && key != 0 ? el.value : requestParam
    })

    return params
  }
  
  async check(value) {
    const endpoint = this.form$.$laraform.config.endpoints.unique
    const method = endpoint.method

    const res = await this.form$.$laraform.services.axios.request({
      url: endpoint.url,
      method,
      [method.toLowerCase() === 'get' ? 'params' : 'data']: {
        params: this.requestParams,
        value: value,
      },
    })

    return res.data
  }
}