import { computed, ref, toRefs, provide } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    size,
    view,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const available = dependencies.available
  const active = dependencies.active
  const form$ = dependencies.form$
  const parent = dependencies.parent

  // ================ DATA ================

  /**
   * Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.
   * 
   * @type {boolean} 
   * @default false
   */
  const hidden = ref(false)


  // ============== COMPUTED ==============

  /**
   * Whether the element is visible. It's `false` when `available` or `active` is `false` or `hidden` is `true`.
   * 
   * @type {boolean} 
   */
  const visible = computed(() => {
    return available.value && !hidden.value && active.value
  })

  /**
   * The calculated size of the element. If [`size`](#option-size) is not defined for the element the closest parent's size will be used, which can be either the [`Vueform`](vueform) component or a nested element. 
   *
   * @returns {string}
   */
  const $size = computed(() => {
    if (size.value) {
      return size.value
    }

    if (parent.value) {
      return parent.value.$size
    }

    return form$.value.$size
  })
  // =============== METHODS ==============

  /**
   * Hides the element.
   *
   * @returns {void}
   */
  const hide = () => {
    hidden.value = true
  }

  /**
   * Shows the element if it was hidden with [`hide()`](#method-hide) method.
   *
   * @returns {void}
   */
  const show = () => {
    hidden.value = false
  }

  // ============== PROVIDES ==============
  
  provide('$size', $size)
  provide('view', view)

  return {
    hidden,
    visible,
    $size,
    hide,
    show,
  }
}

export default base