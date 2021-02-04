import { computed, ref, toRefs, inject, markRaw, getCurrentInstance, onMounted, provide, watch, nextTick } from 'composition-api'
import { mergeClass, mergeComponentClasses } from './../utils/mergeClasses'
import convertFormData from './../utils/convertFormData'
import asyncForEach from './../utils/asyncForEach'
import useEvents from './../composables/useEvents'

const base = function(props, context, dependencies = {})
{
  const { config, value, modelValue } = toRefs(props)

  const currentInstance = getCurrentInstance()

  const $this = new Proxy(currentInstance.proxy, {
    get(instance, prop) {
      return dependencies[prop] ? dependencies[prop].value : instance[prop]
    },
    set(instance, prop, value) {
      if (dependencies[prop] !== undefined) {
        dependencies[prop].value = value
        return true
      }
      else if (instance[prop] !== undefined) {
        instance[prop] = value
        return true
      }
      else {
        throw new Error('Option does not exist: `'+prop+'`')
      }
    },
  })

  // ============ DEPENDENCIES ============

  const {
    events,
    listeners,
    fire,
    on,
    off
  } = useEvents(props, context, { form$: $this }, {
    events: [
      'change', 'submit', 'success', 'error',
      'language', 'reset', 'clear', 'fail'
    ]
  })

  // ================ DATA ================

  /**
  * 
  * 
  * @private
  */
  const elements$ = ref({})

  /**
  * 
  * 
  * @private
  */
  const tabs$ = ref(null)

  /**
  * 
  * 
  * @private
  */
  const wizard$ = ref(null)

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

  /**
   * 
   * 
   * @private
   */
  const formData = computed(() => {
    return convertFormData({
      key: $this.key,
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

  // no export
  const elementErrors = computed(() => {
    var errors = []

    _.each(_.filter(elements$.value, { available: true, isStatic: false }), (element$) => {
      _.each(element$.errors, (error) => {
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
  const formErrors = computed(() => {
    return messageBag.value.errors
  })

  /**
   * Whether the form has errors.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasErrors = computed(() => {
    return formErrors.value.length > 0
  })

  /**
   * List of all errors within the form.
   * 
   * @type {array}
   */
  const formMessages = computed(() => {
    return messageBag.value.messages
  })

  /**
   * Whether the form has messages.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasMessages = computed(() => {
    return formMessages.value.length > 0
  })

  /**
   * Whether the form is disabled.
   * 
   * @type {boolean}
   */
  const disabled = computed(() => {
    return (invalid.value && shouldValidateOnChange.value) || busy.value
  })

  /**
   * 
   * 
   * @private
   */
  const shouldValidateOnChange = computed(() => {
    return $this.validateOn.split('|').indexOf('change') !== -1
  })

  /**
   * 
   * 
   * @private
   */
  const shouldValidateOnSubmit = computed(() => {
    return $this.validateOn.split('|').indexOf('submit') !== -1
  })

  /**
   * 
   * 
   * @private
   */
  const shouldValidateOnStep = computed(() => {
    return $this.validateOn.split('|').indexOf('step') !== -1
  })

  /**
   * Whether the form has wizard.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasWizard = computed(() => {
    return !_.isEmpty($this.wizard)
  })

  /**
   * Whether the form has tabs.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasTabs = computed(() => {
    return !_.isEmpty($this.tabs)
  })

  /**
  * 
  * 
  * @private
  */
  const mainClass = computed(() => {
    return _.keys(defaultClasses.value)[0]
  })

  /**
  * 
  * 
  * @private
  */
  const defaultClasses = computed(() => {
    return extendedTheme.value.components.Laraform.data().defaultClasses
  })

  /**
  * 
  * 
  * @private
  */
  const extendedClasses = computed(() => {
    let classes = Object.assign({},
      defaultClasses.value,
      extendedTheme.value.classes.Laraform
    )

    classes = mergeComponentClasses(classes, $this.addClasses.Laraform || null)

    if ($this.class !== null || config.value.class) {
      classes = mergeComponentClasses(classes, {
        [mainClass.value]: $this.class || config.value.class
      })
    }

    return classes
  })

  /**
  * 
  * 
  * @private
  */
  const extendedComponents = computed(() => {
    return Object.assign({}, extendedTheme.value.components, extendedTheme.value.elements)
  })

  /**
   * The theme object of the selected theme.
   * 
   * @ignore
   * @type {object}
   */
  const selectedTheme = computed(() => {
    let theme = !_.isEmpty($this.theme) ? $this.theme : (config.value.theme || $laraform.value.theme)

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
        $this.elements,
      ),

      // Add registered component to theme (or overwrite)
      components: Object.assign({},
        selectedTheme.value.components,
        $laraform.value.components,
        $this.components,
      ),
      
      // Ovewrite theme classes with form's classes definition
      classes: _.merge({},
        selectedTheme.value.classes,
        $this.classes,
      ),
    })
  })

  // no export
  /**
   * 
   * 
   * @private
   */
  const formatLoad = computed(() => {
    return $this.formatLoad
  })

  // no export
  /**
   * 
   * 
   * @private
   */
  const prepare = computed(() => {
    return $this.prepare
  })

  /**
   * The value of external Vuex store state.
   * 
   * @type {object}
   */
  const store = computed({
    get() {
      if ($this.storePath === null || !context.$store) {
        return null
      }
      
      return _.get(context.$store.state, $this.storePath)
    },
    set(value) {
      if (!context.$store) {
        return
      }
      
      // If store is not registered with Laraform.store()
      if (!context.$store._mutations['laraform/LARAFORM_UPDATE_STORE']) {
        _.set(context.$store.state, $this.storePath, value)
      } 

      // If store is registered properly call a mutation
      else {
        context.$store.commit('laraform/LARAFORM_UPDATE_STORE', {
          path: $this.storePath,
          value: value
        })
      }
    }
  })

  /**
   * 
   * 
   * @private
   */
  const form$ = computed(() => {
    return currentInstance.proxy
  })
  
  // no export
  /**
   * 
   * 
   * @private
   */
  const $laraform = computed(() => {
    return $this.$laraform
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
  const load = (data, format = false) => {
    if (wizard$.value !== null) {
      wizard$.value.enableAllSteps()
    }

    _.each(elements$.value, (e$) => {
      let formatted = format && formatLoad.value !== null ? formatLoad.value(data) : data

      e$.load(e$.flat ? formatted : formatted[e$.name], format)
    })
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

    if (wizard$.value !== null) {
      wizard$.value.reset()
    }

    if (tabs$.value !== null) {
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

    if (wizard$.value !== null) {
      wizard$.value.reset()
    }

    if (tabs$.value !== null) {
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
    if (!invalid.value && validated.value && shouldValidateOnChange.value) {
      return
    }

    let validatableElements = Object.values(elements$.value).filter((e$) => {
      return e$.available && !e$.isStatic && (!e$.validated || !shouldValidateOnChange.value)
    })
    
    await asyncForEach(validatableElements, async (e$) => {
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

    if (shouldValidateOnSubmit.value) {
      await validate()
    }

    if (invalid.value) {
      return
    }

    preparing.value = true

    try {
      await prepareElements()
      
      if (typeof prepare.value === 'function') {
        await prepare.value()
      }
    } catch (e) {
      fire('error', e)
    } finally {
      preparing.value = false
    }
    
    fire('submit')

    send()
  }

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
      response = await $laraform.value.services.axios[$this.method]($this.endpoint, formData.value)

      if (response.data.payload && response.data.payload.updates) {
        update(response.data.payload.updates)
      }

      fire('success', response)
    }
    catch (error) {
      fire('fail', error.response, error)
    }
    finally {
      submitting.value = false
    }
  }

  // no export
  /**
  * 
  * 
  * @private
  */
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

  /**
  * 
  * 
  * @private
  */
  const setLanguage = (code) => {
    $this.language = code

    fire('language', code)
  }

  /**
  * 
  * 
  * @private
  */
  const updateSchema = (schema) => {
    $this.schema = schema
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

  /**
  * 
  * 
  * @private
  */
  const resortSchema = () => {
    let all = _.keys($this.schema)
    let blocks

    if (!_.isEmpty($this.wizard)) {
      blocks = $this.wizard
    }

    if (!_.isEmpty($this.tabs)) {
      blocks = $this.tabs
    }

    if (blocks) {
      let schema = {}

      _.each(blocks, (block) => {
        _.each(block.elements, (e) => {
          schema[e] = $this.schema[e]
        })
      })

      _.each(all, (e) => {
        if (schema[e] === undefined) {
          schema[e] = $this.schema[e]
        }
      })

      updateSchema(schema)
    }
  }

  /**
  * 
  * 
  * @private
  */
  const initMessageBag = () => {
    messageBag.value = new $laraform.value.services.messageBag(elementErrors)
  }

  // ============== PROVIDES ==============

  provide('form$', form$)
  provide('theme', extendedTheme)

  // ============== WATCHERS ==============

  // Only start watching $this props after `created`
  // to make sure `proxy` variables already exist
  nextTick(() => {
    watch(() => { return $this.tabs }, () => {
      resortSchema()
    }, { deep: true })

    watch(() => { return $this.wizard }, () => {
      resortSchema()
    }, { deep: true })
  })

  watch(() => { return config.value.schema }, (value) => {
    if (_.isEmpty(value)) {
      return
    }

    $this.schema = value

    resortSchema()
  }, { deep: true })

  return {
    tabs$,
    wizard$,
    elements$,
    validation,
    messageBag,
    submitting,
    preparing,
    updating,
    events,
    listeners,
    data,
    filtered,
    formData,
    dirty,
    invalid,
    debouncing,
    pending,
    validated,
    busy,
    formErrors,
    formMessages,
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
    extendedComponents,
    selectedTheme,
    extendedTheme,
    store,
    form$,
    update,
    load,
    reset,
    clear,
    clean,
    validate,
    submit,
    send,
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

export default base