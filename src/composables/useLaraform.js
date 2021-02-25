import { computed, ref, toRefs, inject, markRaw, getCurrentInstance, onMounted, onBeforeMount, provide, watch, nextTick, reactive } from 'composition-api'
import { mergeClass, mergeComponentClasses } from './../utils/mergeClasses'
import convertFormData from './../utils/convertFormData'
import asyncForEach from './../utils/asyncForEach'
import useEvents from './../composables/useEvents'

const base = function(props, context, dependencies = {})
{
  const {
    value: v,
    modelValue: mv,
    schema,
    tabs,
    steps,
    overrideClasses,
    addClasses,
    components,
    elements,
    messages,
    columns,
    languages,
    addClass,
    formKey,
    theme,
    endpoint,
    method,
    language,
    validateOn,
    labels,
    multilingual,
    stepsControls,
    displayErrors,
    formatLoad,
    prepare,
    initial,
  } = toRefs(props)

  const $this = getCurrentInstance().proxy

  const externalValue = context.expose !== undefined ? mv : v

  /**
   * Clone value of model container: v-model or internal data
   * 
   * @private
   */
  const model = computed(() => {
    return _.cloneDeep(externalValue.value || data.value)
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
  const steps$ = ref(null)

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

  /**
   * Determine if the form's data is currently being updated for external model.
   * 
   * @private
   * @type {boolean}
   * @default false
   */
  const selectedLanguage = ref(null)

  /**
   * 
   * 
   * @private
   */
  const userConfig = ref({})

  /**
   * If v-model is defined it is always equal to that. Otherwise used as model container.
   * 
   * @private
   */
  const data = ref(externalValue.value ? model.value : {})

  /**
   * 
   * 
   * @private
   */
  const intermediaryValue = ref(externalValue.value ? _.cloneDeep(externalValue.value) : null)

  // ============== COMPUTED ==============

  const form$ = computed(() => {
    return $this
  })

  const baseConfig = computed(() => {
    return $this.$laraform
  })

  const services = computed(() => {
    return $this.$laraform.services
  })

  const options = computed(() => {
    const options = {
      schema: schema.value || userConfig.value.schema || {},
      tabs: tabs.value || userConfig.value.tabs || {},
      steps: steps.value || userConfig.value.steps || {},
      overrideClasses: overrideClasses.value || userConfig.value.overrideClasses || {},
      addClasses: addClasses.value || userConfig.value.addClasses || {},
      components: components.value || userConfig.value.components || {},
      elements: elements.value || userConfig.value.elements || {},
      messages,
      columns,
      languages: languages.value || userConfig.value.languages || baseConfig.value.languages,
      addClass: addClass.value || userConfig.value.addClass || null,
      formKey: formKey.value || userConfig.value.formKey || null,
      theme: theme.value || userConfig.value.theme || baseConfig.value.theme,
      endpoint: endpoint.value || userConfig.value.endpoint || baseConfig.value.endpoints.process,
      method: method.value || userConfig.value.method || baseConfig.value.methods.process,
      language: language.value || userConfig.value.language || baseConfig.value.language,
      validateOn: validateOn.value || userConfig.value.validateOn || baseConfig.value.validateOn,
      multilingual: multilingual.value || userConfig.value.multilingual || false,
      stepsControls: stepsControls.value !== null ? stepsControls.value : (userConfig.value.stepsControls !== undefined ? userConfig.value.stepsControls : baseConfig.value.stepsControls),
      displayErrors: displayErrors.value !== null ? displayErrors.value : (userConfig.value.displayErrors !== undefined ? userConfig.value.displayErrors : baseConfig.value.displayErrors),
      labels: labels.value !== null ? labels.value : (userConfig.value.labels !== undefined ? userConfig.value.labels : baseConfig.value.labels),
      formatLoad: formatLoad.value || userConfig.value.formatLoad || null,
      prepare: prepare.value || userConfig.value.prepare || null,
    }

    return options
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
      formKey: options.value.formKey,
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
  const isMultilingual = computed(() => {
    return options.value.multilingual
  })

  /**
   * 
   * 
   * @private
   */
  const shouldValidateOnChange = computed(() => {
    return options.value.validateOn.split('|').indexOf('change') !== -1
  })

  /**
   * 
   * 
   * @private
   */
  const shouldValidateOnSubmit = computed(() => {
    return options.value.validateOn.split('|').indexOf('submit') !== -1
  })

  /**
   * 
   * 
   * @private
   */
  const shouldValidateOnStep = computed(() => {
    return options.value.validateOn.split('|').indexOf('step') !== -1
  })

  /**
   * Whether the form has steps.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasSteps = computed(() => {
    return !_.isEmpty(steps.value)
  })

  /**
   * Whether the form has tabs.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasTabs = computed(() => {
    return !_.isEmpty(tabs.value)
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

    classes = mergeComponentClasses(classes, options.value.addClasses.Laraform || null)

    if (options.value.addClass !== null) {
      classes = mergeComponentClasses(classes, {
        [mainClass.value]: options.value.addClass
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
    return baseConfig.value.themes[options.value.theme]
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
        baseConfig.value.elements,
        options.value.elements || {},
      ),

      // Add registered component to theme (or overwrite)
      components: Object.assign({},
        selectedTheme.value.components,
        baseConfig.value.components,
        options.value.components || {},
      ),
      
      // Ovewrite theme classes with form's classes definition
      classes: _.merge({},
        selectedTheme.value.classes,
        options.value.overrideClasses,
      ),
    })
  })

  // =============== METHODS ==============

  /**
   * 
   * 
   * @private
   */
  const updateModel = (path, val) => {
    if (externalValue.value) {
      let parts = path.split('.')
      let element = parts.pop()
      let parent = parts.join('.') || null

      // We are setting intermediaryValue to collect changes in a tick which will later be emitted in `input`
      $this.$set(parent ? _.get(intermediaryValue.value, parent) : intermediaryValue.value, element, val)
    } else {
      // We need a different clone than this.valueValue clone to not effect children watching model
      let model = _.cloneDeep(externalValue.value || data.value)
      _.set(model, path, val)
      data.value = model
    }
  }

  /**
   * Updates the element values which are contained in the data.
   * 
   * @public
   * @param {object} data data to update with
   * @returns {void}
   */
  const update = (data, path = null) => {
    if (path) {
      el$(path).update(data)
      return
    }

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
    if (steps$.value !== null) {
      steps$.value.enableAllSteps()
    }
    
    _.each(elements$.value, (e$) => {
      if (e$.isStatic) {
        return
      }

      let formatted = format && options.value.formatLoad !== null ? options.value.formatLoad(data) : data
      let loadValue = e$.flat ? formatted : formatted[e$.name]

      if (loadValue === undefined) {
        e$.clear()
        return
      }

      e$.load(loadValue, format)
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
      if (e$.isStatic) {
        return
      }
      
      e$.reset()
    })

    if (steps$.value !== null) {
      steps$.value.reset()
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

    if (steps$.value !== null) {
      steps$.value.reset()
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
      
      if (typeof options.value.prepare === 'function') {
        await options.value.prepare(form$)
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
      response = await services.value.axios[options.value.method](options.value.endpoint, formData.value)

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
    // @todo
    selectedLanguage.value = code

    fire('language', code)
  }

  /**
  * 
  * 
  * @private
  */
  const updateSchema = (schema) => {
    // @todo
    $this.schema = schema
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
    let all = _.keys(options.value.schema)
    let blocks

    if (!_.isEmpty(options.value.steps)) {
      blocks = options.value.steps
    }

    if (!_.isEmpty(options.value.tabs)) {
      blocks = options.value.tabs
    }

    if (blocks) {
      let schema = {}

      _.each(blocks, (block) => {
        _.each(block.elements, (e) => {
          schema[e] = options.value.schema[e]
        })
      })

      _.each(all, (e) => {
        if (schema[e] === undefined) {
          schema[e] = options.value.schema[e]
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
    messageBag.value = new services.value.messageBag(elementErrors)
  }

  // ============== PROVIDES ==============

  provide('form$', form$)
  provide('theme', extendedTheme)

  // ============== WATCHERS ==============

  // Only start watching $this props after `created`
  // to make sure `proxy` variables already exist
  nextTick(() => {
    watch(() => { return options.value.tabs }, () => {
      resortSchema()
    }, { deep: true })

    watch(() => { return options.value.steps }, () => {
      resortSchema()
    }, { deep: true })
  })

  // Watching model to track old/new values
  watch(model, (n, o) => {
    fire('change', n, o)

    if (externalValue.value) {
      data.value = n
    }
  }, { deep: true, immediate: false, })

  watch(intermediaryValue, (n, o) => {
    context.emit('input', n)
  }, { deep: true, immediate: false })

  // ================ HOOKS ===============

  initMessageBag()
  setLanguage(options.value.language)

  onBeforeMount(() => {
    userConfig.value = $this.laraform
  })

  onMounted(() => {
    // Load initial value
    if (initial.value) {
      load(initial.value, true)

      nextTick(() => {
        clean()
      })
    }
  })

  return {
    tabs$,
    steps$,
    elements$,
    options,
    validation,
    messageBag,
    selectedLanguage,
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
    hasSteps,
    hasTabs,
    hasErrors,
    hasMessages,
    isMultilingual,
    mainClass,
    defaultClasses,
    extendedClasses,
    extendedComponents,
    selectedTheme,
    extendedTheme,
    options,
    form$,
    model,
    intermediaryValue,
    userConfig,
    updateModel,
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