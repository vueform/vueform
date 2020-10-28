import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import flushPromises from 'flush-promises'
import { filtered, formatData, formatLoad, submit, load, update, clear, reset } from './nestedData'

export {
  filtered,
  formatData,
  formatLoad,
  submit,
  load,
  update,
  reset,
  clear,
}

export default function (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName)
    })
  }
}