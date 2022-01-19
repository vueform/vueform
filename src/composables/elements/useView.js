import { computed, ref, toRefs, provide } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    size,
    view,
    views,
  } = toRefs(props)
  
  const componentName = context.name

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

  /**
   * The calculated view of the element.
   *
   * @returns {string}
   */
  const $view = computed(() => {
    if (view.value) {
      return view.value
    }

    if (views.value[componentName.value]) {
      return views.value[componentName.value]
    }

    return form$.value.$views[componentName.value]
  })

  /**
   * The calculated views of the element.
   *
   * @returns {object}
   */
  const $views = computed(() => {
    return Object.assign({}, form$.value.$views, views.value)
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
  provide('$view', $view)
  provide('$views', $views)

  return {
    hidden,
    visible,
    $size,
    $view,
    hide,
    show,
  }
}

export default base