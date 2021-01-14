import { computed, ref, toRefs, inject } from 'composition-api'
import { mergeClass, mergeComponentClasses } from './../utils/mergeClasses'
import convertFormData from './../utils/convertFormData'
import asyncForEach from './../utils/asyncForEach'
import useEvents from './../composables/useEvents'

export default function useLaraform(props, context)
{
  const { form } = toRefs(props)
  
  const $laraform = ref(context.parent.$laraform)

  // ============ DEPENDENCIES ============

  const { fire, on, off } = useEvents(props, context, {}, {
    events: [
      'change', 'submit', 'success', 'error',
      'language', 'reset', 'clear', 'fail'
    ]
  })

  // ================ DATA ================

  const configuration = ref({})

  const formElements$ = ref(null)

  const element$ = ref([])

  const tabs$ = ref({})

  const wizard$ = ref({})

  /**
   * Determine if the form should validate.
   * 
   * @type {boolean}
   * @default true
   */
  const validation = ref(true)

  /**
   * Message bag that contains computed & custom errors & messages.
   * 
   * @type {MessageBag}
   * @default {MessageBag}
   */
  const messageBag = ref({})

  /**
   * Determine if the form is currently submitting.
   * 
   * @type {boolean}
   * @default false
   */
  const submitting = ref(false)

  /**
   * Determine if the form is currently preparing for submission.
   * 
   * @type {boolean}
   * @default false
   */
  const preparing = ref(false)

  /**
   * Determine if the form's data is currently being updated for external model.
   * 
   * @private
   * @type {boolean}
   * @default false
   */
  const updating = ref(false)

  // ============== COMPUTED ==============

  const elements$ = computed(() => {
    let elements$ = {}
    let baseElements$ = {}

    if (formElements$.value) {
      baseElements$ = formElements$.value.elements$
    }

    if (element$.value && element$.value.length) {
      baseElements$ = element$.value
    }

    _.each(_.keys(conf('schema')), (name) => {
      _.each(baseElements$, (e$) => {
        if (e$.name == name) {
          elements$[name] = e$
        }
      })
    })

    return elements$
  })

  /**
   * The form's data.
   * 
   * @type {object}
   */
  const data = computed(() => {
    let data = {}

    _.each(elements$.value, (e$) => {
      data = Object.assign({}, data, e$.data)
    })

    return data
  })

  /**
   * The form's data excluding elements with unmet conditions and the ones which should not submit.
   * 
   * @type {object}
   */
  const filtered = computed(() => {
    var filtered = {}

    _.each(elements$.value, (e$) => {
      filtered = Object.assign({}, filtered, e$.filtered)
    })

    return filtered
  })

  const formData = computed(() => {
    return convertFormData({
      key: conf('key'),
      data: filtered.value,
    })
  })

  /**
   * Whether the form has any dirty element.
   * 
   * @type {boolean}
   */
  const dirty = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.dirty === true
    })
  })

  /**
   * Whether the form has any invalid element.
   * 
   * @type {boolean}
   */
  const invalid = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.invalid === true
    })
  })

  /**
   * Whether the form has any debouncing element.
   * 
   * @type {boolean}
   */
  const debouncing = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.debouncing === true
    })
  })

  /**
   * Whether the form has any pending element.
   * 
   * @type {boolean}
   */
  const pending = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.pending === true
    })
  })

  /**
   * Whether each element of the form has been validated.
   * 
   * @type {boolean}
   */
  const validated = computed(() => {
    return !_.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.validated === false
    })
  })

  /**
   * Whether the form has any busy element or in preparing or submitting state.
   * 
   * @type {boolean}
   */
  const busy = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.busy === true
    }) || submitting.value || preparing.value
  })

  /**
   * List of all errors within the form.
   * 
   * @type {array}
   */
  const errors = computed(() => {
    var errors = []

    _.each(_.filter(elements$.value, { available: true }), (element$) => {
      _.each(element$.messageBag ? element$.messageBag.errors || [] : [], (error) => {
        errors.push(error)
      })
    })

    return errors
  })

  /**
   * List of all errors within the form.
   * 
   * @type {array}
   */
  const messages = computed(() => {
    return messageBag.value.messages
  })

  /**
   * Whether the form is disabled.
   * 
   * @type {boolean}
   */
  const disabled = computed(() => {
    return (invalid.value && shouldValidateOnChange.value) ||
          busy.value ||
          submitting.value
  })

  const shouldValidateOnChange = computed(() => {
    return conf('validateOn').split('|').indexOf('change') !== -1
  })

  const shouldValidateOnSubmit = computed(() => {
    return conf('validateOn').split('|').indexOf('submit') !== -1
  })

  const shouldValidateOnStep = computed(() => {
    return conf('validateOn').split('|').indexOf('step') !== -1
  })

  /**
   * Whether the form has wizard.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasWizard = computed(() => {
    return !_.isEmpty(conf('wizard'))
  })

  /**
   * Whether the form has tabs.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasTabs = computed(() => {
    return !_.isEmpty(conf('tabs'))
  })

  /**
   * Whether the form has errors.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasErrors = computed(() => {
    return messageBag.value.errors && messageBag.value.errors.length > 0
  })

  /**
   * Whether the form has messages.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasMessages = computed(() => {
    return messageBag.value.messages && messageBag.value.messages.length > 0
  })

  const mainClass = computed(() => {
    return _.keys(defaultClasses.value)[0]
  })

  const defaultClasses = computed(() => {
    return extendedTheme.value.components.Laraform.data().defaultClasses
  })

  const extendedClasses = computed(() => {
    let classes = Object.assign({},
      defaultClasses.value,
      extendedTheme.value.classes.Laraform
    )

    classes = mergeComponentClasses(classes, conf('addClasses').Laraform || null)

    if (conf('class') !== null || form.value.class) {
      classes[mainClass.value] = mergeClass(classes[mainClass.value], conf('class') || form.value.class)
    }

    return classes
  })

  const components = computed(() => {
    return Object.assign({}, extendedTheme.value.components, extendedTheme.value.elements)
  })

  /**
   * The theme object of the selected theme.
   * 
   * @ignore
   * @type {object}
   */
  const selectedTheme = computed(() => {
    let theme = !_.isEmpty(conf('theme')) ? conf('theme') : (form.value.theme || $laraform.value.theme)

    return $laraform.value.themes[theme]
  })

  /**
   * The selected theme's file with local extensions.
   * 
   * @ignore
   * @type {object}
   */
  const extendedTheme = computed(() => {
    return Object.assign({}, selectedTheme.value, {
      // Add registered elements to theme elements (or overwrite)
      elements: Object.assign({},
        selectedTheme.value.elements,
        $laraform.value.elements,

        // @todo
        conf('override') && conf('override').elements ? conf('override').elements : {},
      ),

      // Add registered component to theme (or overwrite)
      components: Object.assign({},
        selectedTheme.value.components,
        $laraform.value.components,

        // @todo
        conf('override') && conf('override').components ? conf('override').components : {},
      ),
      
      // Ovewrite theme classes with form's classes definition
      classes: _.merge({},
        selectedTheme.value.classes,
        conf('classes')
      ),
    })
  })

  /**
   * The value of external Vuex store state.
   * 
   * @type {object}
   */
  const store = computed({
    get() {
      if (conf('storePath') === null || !context.$store) {
        return null
      }
      
      return _.get(context.$store.state, conf('storePath'))
    },
    set(value) {
      if (!context.$store) {
        return
      }
      
      // If store is not registered with Laraform.store()
      if (!context.$store._mutations['laraform/LARAFORM_UPDATE_STORE']) {
        _.set(context.$store.state, conf('storePath'), value)
      } 

      // If store is registered properly call a mutation
      else {
        context.$store.commit('laraform/LARAFORM_UPDATE_STORE', {
          path: conf('storePath'),
          value: value
        })
      }
    }
  })

  // =============== METHODS ==============

  /**
   * Updates the element values which are contained in the data.
   * 
   * @public
   * @param {object} data data to update with
   * @returns {void}
   */
  const update = (data) => {
    _.each(data, (value, key) => {
      elements$.value[key].update(value)
    })
  }

  /**
   * Loads data and clears any element if the element's key is not found in the `data` object. Sets all elements' `dirty` to `false`.
   * 
   * @public
   * @param {object} data data to load
   * @returns {void}
   */
  const load = (data, triggerChange = false, shouldValidate = false, shouldDirt = false, format = true) => {
    if (wizard$.value.exists) {
      wizard$.value.enableAllSteps()
    }

    _.each(elements$.value, (e$) => {
      let formatted = format ? formatLoad(data) : data

      e$.load(e$.flat ? formatted : formatted[e$.name], triggerChange, shouldValidate, shouldDirt, format)
    })
  }

  const formatLoad = (data) => {
    return data
  }

  /**
   * Resets the form to its default state.
   * 
   * @public
   * @returns {void}
   */
  const reset = () => {
    _.each(elements$.value, (e$) => {
      e$.reset()
    })

    if (wizard$.value.exists) {
      wizard$.value.reset()
    }

    if (tabs$.value.exists) {
      tabs$.value.reset()
    }

    fire('reset')
  }

  /**
   * Resets the form to null values.
   * 
   * @public
   * @returns {void}
   */
  const clear = () => {
    _.each(elements$.value, (e$) => {
      e$.clear()
    })

    if (wizard$.value.exists) {
      wizard$.value.reset()
    }

    if (tabs$.value.exists) {
      tabs$.value.reset()
    }

    fire('clear')
  }
  
  /**
   * Sets all elements' `dirty` to `false`.
   * 
   * @public
   * @returns {void}
   */
  const clean = () => {
    _.each(elements$.value, (e$) => {
      e$.clean()
    })
  }

  /**
   * Validates each elements within the form.
   * 
   * @public
   * @returns {void}
   */
  const validate = async () => {
    let validateOnChange = shouldValidateOnChange.value

    if (!invalid.value && validated.value && validateOnChange) {
      return
    }

    
    await asyncForEach(elements$.value.filter(e$ => e$.available && (!e$.validated || !e$.rules || !validateOnChange)), async (e$) => {
      if (!e$.validate) {
        return
      }
      
      await e$.validate()
    })
  }

  /**
   * Starts the submission process.
   * 
   * @public
   * @returns {void}
   */
  const submit = async () => {
    if (disabled.value) {
      return
    }
    
    fire('submit')

    if (shouldValidateOnSubmit.value) {
      await validate()
    }

    if (invalid.value) {
      return
    }

    preparing.value = true

    try {
      await prepareElements()
      await prepare()
    } catch (e) {
      fire('fail', e)
      
      throw new Error(e)
    } finally {
      preparing.value = false
    }

    send()
  }

  const prepareElements = async () => {
    try {
      await asyncForEach(elements$.value, async (e$) => {
        if (e$.prepare) {
          await e$.prepare()
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  }

  const prepare = async () => { }

  /**
   * Transforms form data to [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object and sends it to the endpoint.
   * 
   * @public
   * @returns {void}
   */
  const send = async () => {
    submitting.value = true

    let response = {}

    try {
      response = await $laraform.value.services.axios[conf('method')](conf('endpoint'), formData.value)

      if (response.data.payload && response.data.payload.updates) {
        update(response.data.payload.updates)
      }

      fire('success', response)
    }
    catch (error) {
      fire('error', error.response, error)

      throw new Error(error)
    }
    finally {
      submitting.value = false
    }
  }

  /**
   * Transforms form data into [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
   * 
   * @public
   * @param {object} data data to transform
   * @returns {void}
   */
  const createFormData = (data) => {
    return formData(data)
  }

  /**
   * Disabled validation.
   * 
   * @public
   * @returns {void}
   */
  const disableValidation = () => {
    validation.value = false
  }

  /**
   * Enables validation.
   * 
   * @public
   * @returns {void}
   */
  const enableValidation = () => {
    validation.value = true
  }

  const setLanguage = (code) => {
    conf('language', code)

    fire('language', code)
  }

  const updateSchema = (schema) => {
    conf('schema', schema)
  }

  /**
   * Set the language of a multilingual form.
   * 
   * @public
   * @param {string} code code of language to set
   * @returns {void}
   */
  const handleChangeLanguage = (code) => {
    setLanguage(code)
  }

  /**
   * Triggered when the form is submitted. Can prevent further execution (element validation) if returns `false`.
   *
   * @public
   * @prevents 
   * @event submit
   */
  const handleSubmit = () => {
    submit()
  }

  /**
   * Returns an element by its path.
   * 
   * @public
   * @param {string} path path of the element
   * @param {string} elements elements$ object to look elements for (leave blank)
   * @returns {void}
   */
  const el$ = (path, elements) => {
    if (elements === undefined) {
      elements = elements$.value
    }

    if (_.isEmpty(elements) || !path) {
      return null
    }
    
    var matches = String(path).match(/^[^.]+\./)

    if (matches) {
      var current = matches[0].replace('.', '')

      if (!elements[current]) {
        return null
      }

      return el$(
        path.replace(matches[0], ''),
        elements[current].children$
      )
    }
    else if (elements[path] !== undefined) {
      return elements[path]
    }

    return null
  }

  /**
   * Returns the siblings of an element.
   * 
   * @public
   * @param {string} path path of the element
   * @returns {void}
   */
  const siblings$ = (path) => {
    if (!/\.+/.test(path)) {
      return elements$.value
    }
    
    return el$(path.match(/.*(?=\.)/)[0]).children$
  }

  const resortSchema = () => {
    let all = _.keys(conf('schema'))
    let blocks

    if (!_.isEmpty(conf('wizard'))) {
      blocks = conf('wizard')
    }

    if (!_.isEmpty(conf('tabs'))) {
      blocks = conf('tabs')
    }

    if (blocks) {
      let schema = {}

      _.each(blocks, (block) => {
        _.each(block.elements, (e) => {
          schema[e] = conf('schema')[e]
        })
      })

      _.each(all, (e) => {
        if (schema[e] === undefined) {
          schema[e] = conf('schema')[e]
        }
      })

      updateSchema(schema)
    }
  }

  const initMessageBag = () => {
    messageBag.value = new $laraform.value.services.messageBag(errors.value)
  }

  const conf = (key, value) => {
    if (value !== undefined) {
      configuration.value[key] = value
      return
    }
    return configuration.value[key] !== undefined ? configuration.value[key] : {}
  }

  // ============== WATCHERS ==============
  

  // =============== HOOKS ================

  return {
    // Data
    configuration,
    formElements$,
    element$,
    tabs$,
    wizard$,
    validation,
    messageBag,
    submitting,
    preparing,
    updating,

    // Computed
    elements$,
    data,
    filtered,
    formData,
    dirty,
    invalid,
    debouncing,
    pending,
    validated,
    busy,
    errors,
    messages,
    disabled,
    shouldValidateOnChange,
    shouldValidateOnSubmit,
    shouldValidateOnStep,
    hasWizard,
    hasTabs,
    hasErrors,
    hasMessages,
    mainClass,
    defaultClasses,
    extendedClasses,
    components,
    selectedTheme,
    extendedTheme,
    store,

    // Methods
    update,
    load,
    formatLoad,
    reset,
    clear,
    clean,
    validate,
    submit,
    prepareElements,
    prepare,
    send,
    createFormData,
    disableValidation,
    enableValidation,
    setLanguage,
    updateSchema,
    handleChangeLanguage,
    handleSubmit,
    el$,
    siblings$,
    resortSchema,
    initMessageBag,
    fire,
    on,
    off,
  }
}