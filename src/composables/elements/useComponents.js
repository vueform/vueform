import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    overrideComponents,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const theme = dependencies.theme


  // ============== COMPUTED ==============

  /**
   * Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element's components.
   * 
   * @type {object}
   */
  const components = computed(() => {
    return Object.assign({}, theme.value.components,
      overrideComponents && overrideComponents.value && Object.keys(overrideComponents.value).length > 0
        ? overrideComponents.value 
        : {}
    )
  })

  return {
    components,
  }
}

export default base