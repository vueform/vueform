import _ from 'lodash'
import Validator from './../validator'

export default class exists extends Validator {
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
    const name = this.element$.name
    const method = this.form$.$laraform.config.methods.validators.exists

    const res = await this.form$.$laraform.services.axios.request({
      url: this.form$.$laraform.config.endpoints.validators.exists,
      method,
      [method.toLowerCase() === 'get' ? 'params' : 'data']: {
        params: this.requestParams,
        [name]: value,
        laraformFieldName: name
      },
    })

    return res.data
  }
}