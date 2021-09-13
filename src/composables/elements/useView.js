import { computed, ref } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const available = dependencies.available
  const active = dependencies.active

  // ================ DATA ================

  /**
   * Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.
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
   * Shows the element if it was hided with [`hide()`](#hide) method.
   *
   * @returns {void}
   */
  const show = () => {
    hidden.value = false
  }

  return {
    hidden,
    visible,
    hide,
    show,
  }
}

export default base