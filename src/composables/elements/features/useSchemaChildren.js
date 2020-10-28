import { computed, toRefs, ref } from 'composition-api'

export default function useSchemaChildren(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ================ DATA ===============
  
  const child$ = ref([])

  // ============== COMPUTED ==============

  /**
   * Schema of child elements.
   * 
   * @type {object}
   * @ignore
   */
  const children = computed(() => {
    return schema.value.schema
  })

  const children$ = computed(() => {
    const elements$ = {}

    _.each(child$.value, (element$) => {
      elements$[element$.name] = element$
    })

    return elements$
  })

  return {
    child$,
    children,
    children$,
  }
}