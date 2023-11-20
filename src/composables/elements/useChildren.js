import each from 'lodash/each'
import { computed, toRefs, ref, watch } from 'vue'
import states from './../../utils/states'
import countries from './../../utils/countries'
import normalize from './../../utils/normalize'

const base = function(props, context, dependencies)
{
  // ================ DATA ================
  
  /**
   * List of child element components.
   *
   * @type {array}
   * @default [array]
   * @private
   */
  const children$Array = ref([])
  
  // ============== COMPUTED ==============
  
  /**
   * Child element components.
   *
   * @type {object}
   */
  const children$ = computed(() => {
    let children$ = {}
    
    children$Array.value.forEach((e$) => {
      children$[e$.name] = e$
    })
    
    return children$
  })
  
  // =============== METHODS ==============
  
  return {
    children$Array,
    children$,
  }
}

const object = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  const schemaName = options.schemaName || 'schema'
  
  const {
    [schemaName]: schema,
  } = toRefs(props)
  
  const {
    children$Array,
    children$,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  /**
   * Schema of child elements.
   *
   * @type {object}
   * @private
   */
  const children = computed(() => {
    return schema.value
  })
  
  // Resort children$Array when children
  // order changes or a child is removed
  /* istanbul ignore else */
  if (schema) {
    watch(schema, (newValue) => {
      let newChildren$Array = []
      
      each(newValue, (child, name) => {
        newChildren$Array.push(children$Array.value[children$Array.value.map(e$ => normalize(e$.name)).indexOf(normalize(name))])
      })
      
      children$Array.value = newChildren$Array
    }, { flush: 'post', deep: true })
  }
  
  return {
    children,
    children$Array,
    children$,
  }
}

/* istanbul ignore next */
const address = function(props, context, dependencies)
{
  const {
    readonly,
    required,
    disabled,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const path = dependencies.path
  
  const {
    children$Array,
    children$,
  } = object(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  /**
   * The `id` attribute of the input which contains the location autocomplete. Format: `address-{rand}`.
   *
   * @type {string}
   */
  const addressId = ref(`address-${ Math.floor(Math.random() * 100000000) }`)
  
  /**
   * Fields of the address. By default, has the following `text` type elements: `address`, `address2`, `zip`, `city`, `state`, `country`.
   *
   * @type {object}
   * @private
   */
  const fields = computed(() => {
    let fields = {
      address: {
        type: 'text',
        label: form$.value.translations.vueform.elements.address.addressLabel,
        id: addressId.value,
        disabled: disabled.value,
        readonly: readonly.value,
      },
      address2: {
        type: 'text',
        label: form$.value.translations.vueform.elements.address.address2Label,
        disabled: disabled.value,
        readonly: readonly.value,
      },
      zip: {
        type: 'text',
        label: form$.value.translations.vueform.elements.address.zipLabel,
        disabled: disabled.value,
        readonly: readonly.value,
      },
      city: {
        type: 'text',
        label: form$.value.translations.vueform.elements.address.cityLabel,
        disabled: disabled.value,
        readonly: readonly.value,
      },
      state: {
        type: 'select',
        label: form$.value.translations.vueform.elements.address.stateLabel,
        items: states,
        conditions: [[path.value + '.country', ['us', 'US']]],
        disabled: disabled.value,
        readonly: readonly.value,
        search: true,
      },
      country: {
        type: 'select',
        label: form$.value.translations.vueform.elements.address.countryLabel,
        items: countries,
        disabled: disabled.value,
        readonly: readonly.value,
        search: true,
      },
    }
    
    if (required.value) {
      fields.address.rules = 'required'
      fields.zip.rules = 'required'
      fields.city.rules = 'required'
      fields.state.rules = 'required'
      fields.country.rules = 'required'
    }
    
    return fields
  })
  
  const children = computed(() => {
    return fields.value
  })
  
  return {
    children$Array,
    children$,
    children,
    fields,
    addressId,
  }
}

//@todo:adam remove options.schemaName || 'schema', because `buttons` does not exist anymore
/* istanbul ignore next */
const buttons = function(props, context, dependencies)
{
  const {
    children$Array,
    children$,
    children,
  } = object(props, context, dependencies, {
    schemaName: 'buttons',
  })
  
  return {
    children$Array,
    children$,
    children,
  }
}

const group = object

export {
  group,
  object,
  address,
  buttons,
}

export default base