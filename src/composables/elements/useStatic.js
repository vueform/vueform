import { computed, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    content,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const fieldSlots = dependencies.fieldSlots
  
  // ============== COMPUTED ==============
  
  /**
   * Determines if HTML content should be rendered for the element.
   *
   * @type {boolean}
   * @private
   */
  const isHtml = computed(() => {
    return typeof content.value == 'string'
  })

  /**
   * Resolves the content as component.
   *
   * @type {object}
   * @private
   */
  const componentContent = computed(() => {
    if (!content.value?.render && !content.value?.template) {
      return content.value
    }

    return resolveComponent(content.value)
  })

  /**
   * Resolves the content as slot.
   *
   * @type {object}
   * @private
   */
  const slotContent = computed(() => {
    if (!fieldSlots.value.default?.render && !fieldSlots.value.default?.template) {
      return fieldSlots.value.default
    }
    
    return resolveComponent(fieldSlots.value.default)
  })

  /**
   * Adds el$ prop to component.
   * 
   * @param {object} component - the base component
   * @returns {object}
   * @private
   */
  const resolveComponent = (component) => {
    component = { ...component }

    if (!component.props) {
      component.props = ['el$']
    }
    else if (Array.isArray(component.props) && component.props.indexOf('el$') === -1) {
      component.props.push('el$')
    }
    else if (!Array.isArray(component.props) && !component.props.el$) {
      component.props['el$'] = {
        type: Object,
        required: false,
        default: () => ({}),
      }
    }

    return component
  }
  
  return {
    isHtml,
    componentContent,
    slotContent,
  }
}

export default base