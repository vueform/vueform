import { computed, toRefs } from 'composition-api'

export default function useColumns(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Calulated column sizes and classes for the element.
   * 
   * @type {object} 
   */
  const columns = computed({
    get() {
      return {
        classes: {
          element: 'col-lg-12',
          label: 'col-lg-12',
          field: 'col-lg-12',
        }
      }
    },
    set(val) {
      schema.value.columns = val
    }
  })

  return {
    columns,
  }
}