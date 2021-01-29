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

  /**
   * Whether the textarea should grow.
   * 
   * @type {boolean}
   * @default true
   */
  const autogrow = computedOption('autogrow', schema, true)

  /**
   * The `rows` attribute of the textarea.
   * 
   * @type {number}
   * @default 3
   */
  const rows = computedOption('rows', schema, 3)

  // =============== METHODS ==============

  /**
   * Refreshes size.
   * 
   * @return {void}
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
    autogrow,
    rows,
    autosize,
  }
}

const multilingual = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ============== EXTENDS ===============

  const {
    autosize
  } = base(props, context, dependencies)

  // ============== COMPUTED ==============

  const autogrow = computedOption('autogrow', schema, true)

  /**
   * The `rows` attribute of the textarea custom.
   * 
   * @type {number}
   * @default 3
   */
  const rows = computedOption('rows', schema, 3)

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