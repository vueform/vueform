import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    label
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  /**
   * Whether the element has a [`:label`](#label) or `Laraform` component's [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.
   * 
   * @type {boolean}
   * 
   */
  const hasLabel = computed(() => {
    return !!(form$.value.options.labels || label.value)
  })

  return {
    hasLabel,
  }
}

export default base