import { computed, ref } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const available = dependencies.available
  const active = dependencies.active

  // ================ DATA ================

  /**
   * Whether the element was hidden programmatically with `.show()` / `.hide()` methods.
   * 
   * @type {boolean} 
   * @default false
   */
  const hidden = ref(false)


  // ============== COMPUTED ==============

  /**
   * Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`.
   * 
   * @type {boolean} 
   */
  const visible = computed(() => {
    return available.value && !hidden.value && active.value
  })

  // =============== METHODS ==============

  /**
   * Sets the `hidden` property of the element to `false`.
   *
   * @returns {void}
   */
  const hide = () => {
    hidden.value = true
  }

  /**
   * Sets the `hidden` property of the element to `true`.
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