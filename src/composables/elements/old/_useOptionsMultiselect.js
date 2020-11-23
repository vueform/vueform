import { computed, toRefs } from 'composition-api'
import useOptionsSelect from './useOptionsSelect'

export default function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  const { loading, native, trackBy, search, limit, isNative } = useOptionsSelect(props, context, dependencies)

  // ============== COMPUTED ==============

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
      clearOnSelect: true,
      closeOnSelect: false,
      preserveSearch: true,
      showLabels: true,
      selectLabel: '',
      deselectLabel: '✓',
      selectedLabel: '✓',
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