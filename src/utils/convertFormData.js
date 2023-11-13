// import _ from 'lodash'
import isArray from 'lodash/isArray'
import each from 'lodash/each'
import isPlainObject from 'lodash/isPlainObject'

let getFormData = function (data, formData, namespace) {
  if (formData === undefined) {
      formData = new FormData()
  }

  if (namespace === undefined) {
    namespace = ''
  }

  if (_.isArray(data)) {
    _.each(data, (value, key) => {
      getFormData(value, formData, namespace + '[' + key + ']');
    })
  } else if (_.isPlainObject(data)) {
    _.each(data, (value, key) => {
      getFormData(value, formData, namespace ? namespace + '[' + key + ']' : key);
    })
  } else {
    formData.append(namespace, data === null ? '' : data);
  }

  return formData;
}

export default getFormData