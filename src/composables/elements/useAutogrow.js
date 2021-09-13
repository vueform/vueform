import { onMounted, nextTick, watch, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    autogrow
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const input = dependencies.input
  const value = dependencies.value

  // =============== METHODS ==============

  /**
   * Updates the height of the input based in its contents when `autogrow` is enabled.
   * 
   * @returns {void}
   */
  const autosize = () => {
    if (!autogrow.value) {
      return
    }
    
    form$.value.$laraform.services.autosize.update(input.value)
  }

  // ============== WATCHERS ==============

  watch(autogrow, (newValue) => {
    if (newValue) {
      form$.value.$laraform.services.autosize(input.value)
    }
    else {
      form$.value.$laraform.services.autosize.destroy(input.value)
    }
  })

  watch(value, () => {
    autosize()
  })

  // =============== HOOKS ================

  onMounted(() => {
    if (autogrow.value) {
      nextTick(() => {
        form$.value.$laraform.services.autosize(input.value)
      })
    }
  })

  return {
    autosize,
  }
}

const multilingual = function(props, context, dependencies)
{
  const {
    autosize,
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // =============== HOOKS ================

  onMounted(() => {
    form$.value.on('language', () => {
      autosize()
    })
  })

  return {
    autosize,
  }
}

export {
  multilingual,
}

export default base