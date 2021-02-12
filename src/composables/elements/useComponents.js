import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    overrideComponents
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const theme = dependencies.theme


  // ============== COMPUTED ==============

  /**
   * Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element.
   * 
   * @type {object}
   * @option
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