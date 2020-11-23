import computedOption from './../../../utils/computedOption'
import { computed, toRefs, ref } from 'composition-api'

export default function (props, context, dependencies)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================ DATA ================

  const loading = ref(false)

  // ============== COMPUTED ==============

  /**
  * Determines whether the native select should be used by default.
  * 
  * @type {boolean} 
  * @default true
  */
  const native = computedOption('native', schema, true)

  /**
  * When item values are objects this object element will be used to track search.
  * 
  * @type {string} 
  * @default 'label'
  */
  const trackBy = computedOption('trackBy', schema, 'label')

  /**
  * Determines whether the select options are searchable.
  * 
  * @type {boolean} 
  * @default false
  */
  const search = computedOption('search', schema, false)

  /**
  * Maximum number of search options.
  * 
  * @type {number}
  * @default 1000
  */
  const limit = computedOption('limit', schema, 20)

  /**
   * Determines if the native select is used.
   * 
   * @type {string}
   */
  const isNative = computed(() => {
    return native.value && !search.value
  })
  
  /**
  * Default options for vue-multiselect.
  * 
  * @type {object} 
  * @default {}
  * @ignore
  */
  const defaultOptions = computed(() => {
    return {
      showLabels: false,
      searchable: search.value,
      label: 'label',
      trackBy: trackBy.value,
      loading: loading.value,
      optionsLimit: limit.value,
      multiple: false,
    }
  })

  /**
   * Additional [options](https://vue-multiselect.js.org/#sub-props) for the select.
   * 
   * @type {object}
   * @default {}
   */
  const options = computed({
    get() {
      return Object.assign({}, defaultOptions.value, schema.value.options || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'options', val)
    }
  })

  return {
    loading,
    native,
    trackBy,
    search,
    limit,
    isNative,
    options,
  }
}