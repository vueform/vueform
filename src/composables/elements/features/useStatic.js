import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Determines if the content should be rendered in a standard element layout.
   * 
   * @type {boolean} 
   */
  const wrap = computedOption('wrap', schema, true)

  /**
   * Content to be rendered. Either a string, HTML or a Vue component. 
   * 
   * @type {obj|str} 
   */
  const content = computed(() => {
    return schema.value.content || ''
  })

  /**
   * Determines if HTML content should be rendered for the element.
   * 
   * @type {boolean}
   */
  const isHtml = computed(() => {
    return typeof content.value == 'string'
  })

  return {
    wrap,
    content,
    isHtml,
  }
}