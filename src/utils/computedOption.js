import { reactive, inject, computed } from 'composition-api'

export default function computedOption(name, schema, defaultValue) {
  const form$ = inject('form$')

  return computed({
    get() {
      return schema.value[name] !== undefined ? schema.value[name] : defaultValue
    },
    set(value) {
      form$.value.$set(schema.value, name, value)
    },
  })
}