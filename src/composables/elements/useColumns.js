import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    columns
  } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Calulated column sizes and classes for the element.
   * 
   * @type {object} 
   * @option
   */
  const columnsObject = computed(() => {
    return {
      classes: {
        element: 'col-lg-6',
        label: 'col-lg-12',
        field: 'col-lg-12',
      }
    }
  })

  return {
    columnsObject,
  }
}

export default base