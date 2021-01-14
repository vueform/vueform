import { computed, toRefs, ref } from 'composition-api'
import states from './../../../utils/states'
import countries from './../../../utils/countries'

const list = function(props, context, dependencies)
{
  // ================ DATA ================
  
  const children$ = ref({})

  const instances = ref([])
      
  // ============== COMPUTED ==============
  
  const handleLayoutBeforeUpdate = () => {
    // child$.value = []
  }

  return {
    // Data
    children$,
    instances,

    // Computed
    handleLayoutBeforeUpdate,
  }
}

const object = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================ DATA ===============

  const children$ = ref({})

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

  return {
    children$,
    children,
  }
}

const address = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const disabled = dependencies.disabled
  const readonly = dependencies.readonly
  const required = dependencies.required
  const path = dependencies.path

  const { child$, children$ } = object(props, context, dependencies)

  // ============== COMPUTED ==============

  const addressId = ref(`address-${Math.floor(Math.random() * 100000000)}`)

  /**
   * Fields of the address. By default has the following `text` type elements: `address`, `address2`, `zip`, `city`, `state`, `country`.
   * 
   * @type {object} 
   * @default {...}
   */
  const fields = computed(() => {
    let fields = {
      address: {
        type: 'text',
        label: form$.value.__('laraform.elements.address.addressLabel'),
        id: addressId.value,
        disabled: disabled.value,
        readonly: readonly.value,
      },
      address2: {
        type: 'text',
        label: form$.value.__('laraform.elements.address.address2Label'),
        disabled: disabled.value,
        readonly: readonly.value,
      },
      zip: {
        type: 'text',
        label: form$.value.__('laraform.elements.address.zipLabel'),
        disabled: disabled.value,
        readonly: readonly.value,
      },
      city: {
        type: 'text',
        label: form$.value.__('laraform.elements.address.cityLabel'),
        disabled: disabled.value,
        readonly: readonly.value,
      },
      state: {
        type: 'select',
        label: form$.value.__('laraform.elements.address.stateLabel'),
        items: states,
        conditions: [[path.value + '.country', ['us', 'US']]],
        disabled: disabled.value,
        readonly: readonly.value,
      },
      country: {
        type: 'select',
        label: form$.value.__('laraform.elements.address.countryLabel'),
        items: countries,
        disabled: disabled.value,
        readonly: readonly.value,
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

  /**
   * Schema of child elements.
   * 
   * @type {object}
   * @ignore
   */
  const children = computed(() => {
    return fields.value
  })

  return {
    child$,
    children,
    children$,
    fields,
    addressId,
  }
}

const buttons = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const { child$, children$ } = object(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
   * Schema of child elements.
   * 
   * @type {object}
   * @ignore
   */
  const children = computed({
    get() {
      return schema.value.buttons
    },
    set(val) {
      form$.value.$set(schema.value, 'buttons', val)
    }
  })
  
  const handleLayoutBeforeUpdate = () => {
    child$.value = []
  }

  return {
    child$,
    children,
    children$,
    handleLayoutBeforeUpdate,
  }
}

const group = object

export {
  group,
  list,
  object,
  address,
  buttons,
}