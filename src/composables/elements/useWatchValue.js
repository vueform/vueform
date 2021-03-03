import { watch, onMounted, watchEffect } from 'composition-api'

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
      if (_.isEqual(n,o)) {
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

export default base