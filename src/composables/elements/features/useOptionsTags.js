import { computed, toRefs } from 'composition-api'
import useOptionsSelect from './useOptionsSelect'
import computedOption from './../../../utils/computedOption'

export default function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  const { loading, trackBy, limit } = useOptionsSelect(props, context, dependencies)

  // ============== COMPUTED ==============

  const create = computedOption('create', schema, false)

  const tagPlaceholder = computedOption('tagPlaceholder', schema, form$.value.__('laraform.elements.tags.createLabel'))

  const search = computed({
    get() {
      return schema.value.search !== undefined ? schema.value.search : create.value
    },
    set(val) {
      form$.value.$set(schema.value, 'search', val)
    }
  })

  const native = computed(() => {
    return false
  })

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
      multiple: true,
      taggable: true,
      tagPlaceholder: tagPlaceholder.value,
      clearOnSelect: true,
      hideSelected: true,
      closeOnSelect: false,
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
    create,
    tagPlaceholder,
    isNative,
    options,
  }
}