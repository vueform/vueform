import { findAll } from 'test-helpers'
import normalize from './../../src/utils/normalize'

export default function setMultiselectValue (select, values) {
  let options = findAll(select, `option`)
  let option

  for (let i = 0; i < options.length; i++) {
    option = options.at(i)

    option.element.selected = values.indexOf(normalize(option.attributes('value'))) !== -1
  }
  select.trigger('change')
}