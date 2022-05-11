import { watch, onMounted, toRefs } from 'composition-api'
import dataEquals from './../../utils/dataEquals'

const base = function(props, context, dependencies, options = {})
{
  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const el$ = dependencies.el$
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

      fire('change', n, o, el$.value)

      if (dirt) {
        dirt()
      }

      if (validate && form$.value.shouldValidateOnChange) {
        validate()
      }
    }, { immediate: false, deep: true })
  })
}

const multilingual = function(props, context, dependencies, options = {})
{
  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const el$ = dependencies.el$
  const fire = dependencies.fire
  const dirt = dependencies.dirt
  const value = dependencies.value
  const language = dependencies.language
  const validateLanguage = dependencies.validateLanguage

  // ============== WATCHERS ===============

  onMounted(() => {
    watch(value, (n, o) => {
      if (dataEquals(n,o)) {
        return
      }

      fire('change', n, o, el$.value)

      if (dirt) {
        dirt()
      }

      if (form$.value.shouldValidateOnChange) {
        validateLanguage(language.value)
      }
    }, { immediate: false, deep: true })
  })
}

const list = function(props, context, dependencies, options = {})
{
  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const el$ = dependencies.el$
  const fire = dependencies.fire
  const dirt = dependencies.dirt
  const validateValidators = dependencies.validateValidators
  const value = dependencies.value

  // ============== WATCHERS ===============

  onMounted(() => {
    watch(value, (n, o) => {
      if (dataEquals(n,o)) {
        return
      }

      fire('change', n, o, el$.value)

      if (dirt) {
        dirt()
      }

      if (validateValidators && form$.value.shouldValidateOnChange) {
        validateValidators()
      }
    }, { immediate: false, deep: true })
  })
}

const object = function(props, context, dependencies, options = {})
{
  // ============ DEPENDENCIES =============

  const fire = dependencies.fire
  const value = dependencies.value
  const el$ = dependencies.el$

  // ============== WATCHERS ===============

  onMounted(() => {
    watch(value, (n, o) => {
      if (dataEquals(n,o)) {
        return
      }

      fire('change', n, o, el$.value)
    }, { immediate: false, deep: true })
  })
}

const location = function(props, context, dependencies, options = {})
{
  const { displayKey } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const el$ = dependencies.el$
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

      fire('change', n, o, el$.value)

      dirt()

      input.value.value = input.value && value.value && value.value[displayKey.value] !== undefined ? value.value[displayKey.value] : ''

      if (validate && form$.value.shouldValidateOnChange) {
        validate()
      }
    }, { immediate: false, deep: true })
  })
}

const multifile = list
const group = object

export {
  list,
  multifile,
  location,
  object,
  group,
  multilingual,
}

export default base