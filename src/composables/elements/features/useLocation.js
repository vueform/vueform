import { computed, toRefs, ref, onMounted, watch, nextTick } from 'composition-api'

const base = function (props, context, dependencies, options_ = {})
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const value = dependencies.value
  const updated = dependencies.updated

  // ============== PRIVATE ===============

  const inputElement = () => {
    return options_.input.value
  }

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
        templates: options_.templates || {}
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
   * @param {object} data an object containing address data
   * @param {object} raw an object containing raw address data (based on provider)
   */
  const handleAddressChange = options_.handleAddressChange || function (data, raw) {
    location.value = raw
    value.value = data

    updated()
  }

  /**
   * Initalizes location service.
   *
   * @returns {void}
   */
  const initLocationService = () => {
    locationService.value = new form$.value.$laraform.services.location[provider.value]
    locationService.value.init(inputElement(), handleAddressChange, options.value)
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
  })

  return {
    locationService,
    location,
    provider,
    defaultOptions,
    options,
    handleAddressChange,
    initLocationService,
  }
}

const location = function (props, context, dependencies, options = {})
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value
  const displayKey = dependencies.displayKey
  const input = dependencies.input

  const {
    locationService,
    location,
    provider,
    defaultOptions,
    options,
    handleAddressChange,
    initLocationService
  } = base(props, context, dependencies, options)
  
  // =============== HOOKS ================

  onMounted(() => {
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
    defaultOptions,
    options,
    handleAddressChange,
    initLocationService
  }
}

const address = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const children$ = dependencies.children$
  const fields = dependencies.fields

  // =============== METHODS ==============

  /**
   * Updates fields with address data.
   *
   * @param {object} data an object containing address data
   */
  const updateFields = (data) => {
    if (children$.value.address) {
      children$.value.address.update(data.address || null, true)
    }

    if (children$.value.city) {
      children$.value.city.update(data.city || null, true)
    }

    if (children$.value.zip) {
      children$.value.zip.update(data.zip || null, true)
    }

    if (children$.value.state) {
      children$.value.state.update(data.state_code ? data.state_code.toUpperCase() : null, true)
    }

    if (children$.value.country) {
      children$.value.country.update(data.country_code ? data.country_code.toUpperCase() : null, true)
    }

    if (document.getElementById(fields.value.address.id)) {
      document.getElementById(fields.value.address.id).value = data.address || ''
    }
  }

  /**
   * Handles location service's address change.
   *
   * @param {object} data an object containing address data
   * @param {object} raw an object containing raw address data (based on provider)
   */
  const handleAddressChange = (data, raw) => {
    location.value = raw
    updateFields(data)
  }

  // ============ DEPENDENCIES ============

  const {
    locationService, location, provider, defaultOptions, options, initLocationService
  } = base(props, context, dependencies, {
    input: computed(() => {
      return document.getElementById(fields.value.address.id)
    }),
    templates: {
      value: function(suggestion) {
        return suggestion.name;
      }
    },
    handleAddressChange,
  })

  return {
    locationService,
    location,
    provider,
    defaultOptions,
    options,
    updateFields,
    handleAddressChange,
    initLocationService,
  }
}

export {
  location,
  address,
}

export default base