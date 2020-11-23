import { computed, toRefs, ref } from 'composition-api'

const list = function(props, context, dependencies)
{
  // ================ DATA ================
  
  const child$ = ref([])

  const instances = ref([])
      
  // ============== COMPUTED ==============

  const children$ = computed(() => {
    const elements$ = {}

    _.each(child$.value, (element$, i) => {
      elements$[element$.name] = element$
    })

    return elements$
  })
  
  const handleLayoutBeforeUpdate = () => {
    child$.value = []
  }

  return {
    // Data
    child$,
    instances,

    // Computed
    children$,
    handleLayoutBeforeUpdate,
  }
}

const object = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================ DATA ===============
  
  const child$ = ref([])

  // ============== COMPUTED ==============

  /**
   * Schema of child elements.
   * 
   * @type {object}
   * @ignore
   */
  const children = computed({
    get() {
      return schema.value.schema
    },
    set(val) {
      form$.value.$set(schema.value, 'schema', val)
    }
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

const group = object

export {
  group,
  list,
  object,
}