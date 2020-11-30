import { reactive, inject, computed } from 'composition-api'

export default function computedOption(name, schema, defaultValue, possibleValues = []) {
  const form$ = inject('form$')

  return computed({
    get() {
      let value = schema.value[name] !== undefined ? schema.value[name] : defaultValue

      if (possibleValues.length && possibleValues.indexOf(value) === -1) {
        throw new Error(`Cannot set "${value}" as value for ${name}. Possible values: ${possibleValues.join(', ')}`)
      }

      return value
    },
    set(value) {
      if (possibleValues.length && possibleValues.indexOf(value) === -1) {
        throw new Error(`Cannot set "${value}" as value for ${name}. Possible values: ${possibleValues.join(', ')}`)
      }

      form$.value.$set(schema.value, name, value)
    },
  })
}