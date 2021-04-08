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
        element: 'col-lg-12',
        label: 'col-lg-2',
        field: 'col-lg-10',
      }
    }
  })

  return {
    columnsObject,
  }
}

export default base