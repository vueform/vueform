import { computed, ref } from 'composition-api'

export default function useBaseElement(props, context, dependencies)
{
  const schema = props.schema
  const name = props.name

  // ============ DEPENDENCIES ============

  const { available } = dependencies.conditions
  const { theme } = dependencies.theme
  const { label } = dependencies.label || { label: null }
  const { placeholder } = dependencies.placeholder || { placeholder: null }


  // =============== PRIVATE ==============


  // ================ DATA ================

  /**
   * Whether the element was hidden programmatically with `.show()` / `.hide()` methods.
   * 
   * @type {boolean} 
   * @default false
   */
  const hidden = ref(false)

  /**
   * Whether the element is hidden internally by other components, like tabs or wizard steps.
   * 
   * @type {boolean} 
   * @default true
   */
  const active = ref(true)


  // ============== COMPUTED ==============

  /**
   * Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element.
   * 
   * @type {object}
   */
  const components = computed({
    get() {
      return Object.assign({}, theme.components, schema.components || {})
    },
    set(val) {
      schema.compontents = val
    }
  })

  /**
   * Helper property used to determine a generic name for the element.
   * 
   * @type {object}
   * @ignore
   */
  const genericName = computed(() => {
    if (label) {
      return label
    } else if (placeholder) {
      return placeholder
    } else {
      return _.upperFirst(name)
    }
  })

  /**
   * Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`.
   * 
   * @type {boolean} 
   */
  const visible = computed(() => {
    return available.value && !hidden.value && active.value
  })

  /**
   * Determines if the element's value is a file.
   *
   * @returns {boolean}
   */
  const isFileType = computed(() => {
    return false
  })

  /**
   * Determines if the element's value is an image.
   *
   * @private
   * @returns {boolean}
   */
  const isImageType = computed(() => {
    return false
  })

  /**
   * Determines if the element's value is an array.
   *
   * @private
   * @returns {boolean}
   */
  const isArrayType = computed(() => {
    return false
  })

  // =============== METHODS ==============

  /**
   * Sets the `hidden` property of the element to `false`.
   *
   * @public
   * @returns {void}
   */
  const hide = () => {
    hidden.value = true
  }

  /**
   * Sets the `hidden` property of the element to `true`.
   *
   * @public
   * @returns {void}
   */
  const show = () => {
    hidden.value = false
  }

  /**
   * Sets the `active` property of the element to `true`.
   *
   * @private
   * @returns {void}
   */
  const activate = () => {
    active.value = true
  }

  /**
   * Sets the `active` property of the element to `false`.
   *
   * @private
   * @returns {void}
   */
  const deactivate = () => {
    active.value = false
  }


  // ============== WATCHERS ==============

  return {
    // Data
    hidden,
    active,

    // Computed
    components,
    genericName,
    visible,
    isFileType,
    isArrayType,
    isImageType,

    // Methods
    hide,
    show,
    activate,
    deactivate,
  }
}