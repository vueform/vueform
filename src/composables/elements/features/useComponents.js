import { computed, ref, toRefs } from 'composition-api'

export default function useComponents(props, context, dependencies)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const theme = dependencies.theme


  // ============== COMPUTED ==============

  /**
   * Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element.
   * 
   * @type {object}
   */
  const components = computed({
    get() {
      return Object.assign({}, theme.value.components, schema.value.components || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'components', val)
    }
  })

  return {
    // Computed
    components,
  }
}