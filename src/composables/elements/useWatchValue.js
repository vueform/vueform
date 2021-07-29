import { watch, onMounted, toRefs } from 'composition-api'
import dataEquals from './../../utils/dataEquals'

const base = function(props, context, dependencies, options = {})
{
  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const fire = dependencies.fire
  const dirt = dependencies.dirt
  const validate = dependencies.validate
  const value = dependencies.value

  // ============== WATCHERS ===============

  onMounted(() => {
    watch(value, (n, o) => {
      if (dataEquals(n,o)) {
        return
      }

      fire('change', n, o)

      if (dirt) {
        dirt()
      }

      if (validate && form$.value.shouldValidateOnChange) {
        validate()
      }
    }, { immediate: false, deep: true })
  })
}

const location = function(props, context, dependencies, options = {})
{
  const { displayKey } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const fire = dependencies.fire
  const dirt = dependencies.dirt
  const validate = dependencies.validate
  const value = dependencies.value
  const input = dependencies.input

  // ============== WATCHERS ===============

  onMounted(() => {
    watch(value, (n, o) => {
      if (dataEquals(n,o)) {
        return
      }

      fire('change', n, o)

      dirt()

      input.value.value = input.value && value.value && value.value[displayKey.value] !== undefined ? value.value[displayKey.value] : ''

      if (validate && form$.value.shouldValidateOnChange) {
        validate()
      }
    }, { immediate: false, deep: true })
  })
}

export {
  location,
}

export default base