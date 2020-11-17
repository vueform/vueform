import { computed, toRefs } from 'composition-api'

export default function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const nullValue = dependencies.nullValue

  // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {boolean}
  */
  const default_ = computed({
    get() {
      if (schema.value.default === undefined) {
        return _.clone(nullValue.value)
      }
      
      let def = _.clone(schema.value.default)

      if (!_.isPlainObject(def)) {
        let tempDefault = {}

        _.each(nullValue.value, (v, language) => {
          tempDefault[language] = def
        })

        def = tempDefault
      }

      return Object.assign({}, _.clone(nullValue.value), def)
    },
    set(val) {
      form$.value.$set(schema.value, 'default', val)
    }
  })

  return {
    // Computed
    default: default_,
  }
}