import { computed, toRefs, ref, onMounted, watch, nextTick } from 'composition-api'

export default function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const value = dependencies.value
  const input = dependencies.input
  const displayKey = dependencies.displayKey
  const updated = dependencies.updated

  // ================ DATA ================

  /**
   * The location service that's initalized once the component is mounted.
   * 
   * @type {class}
   * @default null
   */
  const locationService = ref(null)

  /**
   * The raw location object of location provider (Google/Algolia).
   * 
   * @type {class}
   * @default null
   */
  const location = ref({})


  // ============== COMPUTED ==============

  /**
   * The Places API provider to use.
   * 
   * @type {string}
   */
  const provider = computed({
    get() {
      if (schema.value.provider === undefined) {
        return 'google'
      }

      if (['google', 'algolia'].indexOf(schema.value.provider) === -1) {
        throw new Error('Location provider can be `google` or `algolia`')
      }

      return schema.value.provider
    },
    set(val) {
      form$.value.$set(schema.value, 'provider', val)
    }
  })

  /**
  * Default options for flatpickr.
  * 
  * @type {object} 
  * @default {}
  * @ignore
  */
  const defaultOptions = computed(() => {
    let providers = {
      google: {
        fields: ['geometry', 'formatted_address', 'address_components'],
      },
      algolia: {
        type: 'address',
        appId: form$.value.$laraform.service.algolia.app_id,
        apiKey: form$.value.$laraform.service.algolia.api_key,
      }
    }

    return providers[provider.value]
  })

  /**
  * Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider.
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

  // =============== METHODS ==============

  /**
   * Handles location service's address change.
   *
   * @public
   * @param {object} data an object containing address data
   * @param {object} raw an object containing raw address data (based on provider)
   */
  const handleAddressChange = (data, raw) => {
    location.value = raw
    value.value = data

    updated()
  }

  /**
   * Initalizes location service.
   *
   * @public
   * @returns {void}
   */
  const initLocationService = () => {
    locationService.value = new form$.value.$laraform.services.location[provider.value]
    locationService.value.init(input.value, handleAddressChange, options.value)
  }

  // ============== WATCHERS ==============

  watch(provider, () => {
    locationService.value.destroy()
    initLocationService()
  })

  watch(options, () => {
    if (_.isEqual(options.value, locationService.value.options)) {
      return
    }

    locationService.value.init(options.value)
  }, { deep: true })
  

  // =============== HOOKS ================

  onMounted(() => {
    initLocationService()

    nextTick(() => {
      if (value.value && value.value[displayKey.value]) {
        input.value = value.value[displayKey.value]
      }
    })
  })

  return {
    locationService,
    location,
    provider,
    options,
    handleAddressChange,
    initLocationService,
  }
}