import { reactive, inject } from 'composition-api'

export default function computedOption(name, schema, def) {
  const form$ = reactive(inject('form$'))

  return {
    get() {
      return schema.value[name] !== undefined ? schema.value[name] : def
    },
    set(value) {
      form$.$set(schema.value, name, value)
    },
  }
}