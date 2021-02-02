import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  /**
   * Calulated column sizes and classes for the element.
   * 
   * @type {object} 
   * @option
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
      form$.value.$set(schema.value, 'columns', val)
    }
  })

  return {
    columns,
  }
}

export default base