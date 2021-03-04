import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    default: default_
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const nullValue = dependencies.nullValue
  const form$ = dependencies.form$
  const path = dependencies.path

  // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {string|number}
  */
  const defaultValue = computed(() => {
    let formDefaultValue = _.get(form$.value.options.default, path.value)

    if (formDefaultValue !== undefined) {
      return formDefaultValue instanceof File ? new File([formDefaultValue], formDefaultValue.name) : _.cloneDeep(formDefaultValue)
    }

    if (default_.value !== undefined) {
      return default_.value instanceof File ? new File([default_.value], default_.value.name) : _.cloneDeep(default_.value)
    }

    return _.cloneDeep(nullValue.value)
  })

  return {
    defaultValue,
  }
}

const multilingual = function(props, context, dependencies)
{
  const {
    default: default_
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const nullValue = dependencies.nullValue

  // ============== COMPUTED ===============

  /**
  * 
  * 
  * @type {object|string|number}
  * @option
  */
  const defaultValue = computed(() => {
    if (default_.value === undefined) {
      return _.clone(nullValue.value)
    }
    
    let def = _.clone(default_.value)

    if (!_.isPlainObject(def)) {
      let tempDefault = {}

      _.each(nullValue.value, (v, language) => {
        tempDefault[language] = def
      })

      def = tempDefault
    }

    return Object.assign({}, _.clone(nullValue.value), def)
  })

  return {
    defaultValue,
  }
}

export {
  multilingual,
}

export default base