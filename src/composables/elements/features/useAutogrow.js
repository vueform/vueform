import computedOption from './../../../utils/computedOption'
import { onMounted, nextTick, watch, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const input = dependencies.input
  const value = dependencies.value

  // ============== COMPUTED ==============

  const autogrow = computedOption('autogrow', schema, true)

  const rows = computedOption('rows', schema, 3)

  // =============== METHODS ==============

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
    autogrow,
    rows,

    autosize,
  }
}

const multilingual = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================ BASE ================

  const { autogrow, rows, autosize } = base(props, context, dependencies)

  // =============== HOOKS ================

  onMounted(() => {
    form$.value.on('language', () => {
      autosize()
    })
  })

  return {
    autogrow,
    rows,

    autosize,
  }
}

export {
  multilingual,
}

export default base