import { computed, toRefs } from 'composition-api'

const base = function (props, context, dependencies)
{
  const {
    content
  } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Determines if HTML content should be rendered for the element.
   * 
   * @type {boolean}
   */
  const isHtml = computed(() => {
    return typeof content.value == 'string'
  })

  return {
    content,
    isHtml,
  }
}

export default base