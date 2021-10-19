import { computed, toRefs, ref, onMounted, watch, nextTick } from 'composition-api'

const base = function (props, context, dependencies, options_ = {})
{
  const { 
    provider,
    options,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const value = dependencies.value
  const clear = dependencies.clear

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

  const locationProvider = computed(() => {
    return provider.value || form$.value.$laraform.config.locationProvider
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
        appId: form$.value.$laraform.config.services.algolia.app_id,
        apiKey: form$.value.$laraform.config.services.algolia.api_key,
        templates: options_.templates || {}
      }
    }

    return providers[locationProvider.value]
  })

  /**
  * Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider.
  * 
  * @type {object} 
  * @default {}
  * @option
  */
  const providerOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, options.value || {})
  })

  // =============== METHODS ==============

  /**
   * Handles location service's address change.
   *
   * @param {object} data an object containing address data
   * @param {object} raw an object containing raw address data (based on provider)
   */
  const handleAddressChange = (data, raw) => {
    if (options_.handleAddressChange) {
      options_.handleAddressChange(data, raw)
      return
    }

    location.value = raw
    value.value = data
  }

  /* istanbul ignore next */
  /**
   * 
   *
   * @private
   */
  const handleLocationBlur = () => {
    if (inputElement().value.length) {
      inputElement().value = value.value.formatted_address
    } else {
      clear()
    }
  }

  /**
   * Initalizes location service.
   *
   * @returns {void}
   */
  const initLocationService = () => {
    locationService.value = new form$.value.$laraform.services.location[locationProvider.value]
    locationService.value.init(inputElement(), handleAddressChange, providerOptions.value)
  }

  // ============== WATCHERS ==============

  watch([locationProvider, providerOptions], () => {
    locationService.value.destroy()
    initLocationService()
  }, { deep: true, immediate: false })

  // =============== HOOKS ================

  onMounted(() => {
    initLocationService()

    // Replacing autocomplete attribute on input
    let attrObserver = new MutationObserver(() => {
      attrObserver.disconnect();
      inputElement().setAttribute('autocomplete', 'not-address')
    });

    attrObserver.observe(inputElement(), {
      attributes: true,
      attributeFilter: ['autocomplete']
    });
  })

  return {
    locationService,
    location,
    defaultOptions,
    providerOptions,
    handleAddressChange,
    handleLocationBlur,
    initLocationService,
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
    locationService,
    location,
    defaultOptions,
    providerOptions,
    initLocationService
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
    defaultOptions,
    providerOptions,
    updateFields,
    handleAddressChange,
    initLocationService,
  }
}

export {
  address,
}

export default base