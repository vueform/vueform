import _ from 'lodash'
import { computed, ref, toRefs, provide } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    size,
    view,
    views,
    presets,
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
  const Size = computed(() => {
    let Size
    
    if (size.value) {
      Size = size.value
    } else {
      _.each(presets.value, (presetName) => {
        let preset = form$.value.$vueform.config.presets[presetName]

        if (!preset || !preset.size) {
          return
        } 

        Size = preset.size
      })
    }

    if (!Size) {
      if (parent.value) {
        Size = parent.value.Size
      } else {
        Size = form$.value.Size
      }
    }

    return Size
  })

  /**
   * The calculated view of the element.
   *
   * @returns {string}
   */
  const View = computed(() => {
    if (view.value) {
      return view.value
    }

    return Views.value[componentName.value]
  })

  /**
   * The calculated views of the element.
   *
   * @returns {object}
   */
  const Views = computed(() => {
    let Views = form$.value.Views

    _.each(presets.value, (presetName) => {
      let preset = form$.value.$vueform.config.presets[presetName]

      if (!preset || !preset.views) {
        return
      }

      Views = Object.assign({}, Views, preset.views)
    })

    Views = Object.assign({}, Views, views.value)

    return Views
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
  
  provide('Size', Size)
  provide('View', View)
  provide('Views', Views)

  return {
    hidden,
    visible,
    Size,
    View,
    Views,
    hide,
    show,
  }
}

export default base