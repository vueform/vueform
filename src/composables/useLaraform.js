import { computed, ref, toRefs, inject, markRaw, getCurrentInstance, onMounted, onBeforeMount, provide, watch, nextTick, reactive } from 'composition-api'
import { mergeComponentClasses } from './../utils/mergeClasses'
import convertFormData from './../utils/convertFormData'
import asyncForEach from './../utils/asyncForEach'
import dataEquals from './../utils/dataEquals'
import useEvents from './useEvents'
import useModel from './useModel'

const base = function(props, context, dependencies = {})
{
  const {
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
    formatData,
    prepare,
    default: default_,
  } = toRefs(props)

  const $this = getCurrentInstance().proxy

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

  const {
    externalValue,
    model,
    internalData,
    intermediaryValue,
    isSync,
    updateModel,
  } = useModel(props, context, {
    $this,
    fire,
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
      schema: orderedSchema.value,
      tabs: formTabs.value,
      steps: formSteps.value,
    }

    const override = {
      columns, languages, language, theme, endpoint, method, validateOn,
      overrideClasses, addClasses, components, elements, messages, addClass,
      formKey, multilingual, formatLoad, formatData, prepare, default: default_ 
    }

    const ifNotUndefined = {
      stepsControls, displayErrors, labels
    }

    const defaults = {
      columns: baseConfig.value.config.columns,
      languages: baseConfig.value.config.languages,
      language: baseConfig.value.config.language,
      theme: baseConfig.value.config.theme,
      endpoint: baseConfig.value.config.endpoints.process,
      method: baseConfig.value.config.methods.process,
      validateOn: baseConfig.value.config.validateOn,
      displayErrors: baseConfig.value.config.displayErrors,
      labels: baseConfig.value.config.labels,
      overrideClasses: {},
      addClasses: {},
      components: {},
      elements: {},
      messages: {},
      default: {},
      addClass: null,
      formKey: null,
      formatLoad: null,
      formatData: null,
      prepare: null,
      multilingual: false,
      stepsControls: true,
    }

    _.each(override, (val, key) => {
      options[key] = userConfig.value[key] || (val && val.value ? val.value : undefined) || defaults[key]
    })

    _.each(ifNotUndefined, (val, key) => {
      options[key] = userConfig.value[key] !== undefined ? userConfig.value[key] : (val && val.value !== null ? val.value : defaults[key])
    })

    return options
  })

  /**
  * 
  * 
  * @private
  */
  const orderedSchema = computed(() => {
    let blocks
    let orderedSchema = formSchema.value

    if (Object.keys(formSteps.value).length > 0) {
      blocks = formSteps.value
    }

    if (Object.keys(formTabs.value).length > 0) {
      blocks = formTabs.value
    }

    if (blocks) {
      orderedSchema = {}

      _.each(blocks, (block) => {
        _.each(block.elements, (name) => {
          if (formSchema.value[name]) {
            orderedSchema[name] = formSchema.value[name]
          }
        })
      })

      _.each(Object.keys(formSchema.value), (name) => {
        if (orderedSchema[name] === undefined) {
          orderedSchema[name] = formSchema.value[name]
        }
      })
    }

    return orderedSchema
  })

  const formSchema = computed(() => {
    return _.merge({}, schema && schema.value ? schema.value : {}, userConfig.value.schema || {})
  })

  const formTabs = computed(() => {
    return _.merge({}, tabs && tabs.value ? tabs.value : {}, userConfig.value.tabs || {})
  })

  const formSteps = computed(() => {
    return _.merge({}, steps && steps.value ? steps.value : {}, userConfig.value.steps || {})
  })

  /**
   * The form's data excluding elements with unmet conditions and the ones which should not submit.
   * 
   * @type {object}
   */
  const data = computed(() => {
    var data = {}

    _.each(elements$.value, (e$) => {
      if (e$.isStatic) {
        return
      }

      data = Object.assign({}, data, e$.data)
    })

    return data
  })

  /**
   * The form's data excluding elements with unmet conditions and the ones which should not submit.
   * 
   * @type {object}
   */
  const output = computed(() => {
    var output = {}

    _.each(elements$.value, (e$) => {
      if (e$.isStatic) {
        return
      }
      
      output = Object.assign({}, output, e$.output)
    })

    return formatData.value ? formatData.value(output) : output
  })

  /**
   * 
   * 
   * @private
   */
  const formData = computed(() => {
    return convertFormData({
      formKey: options.value.formKey,
      data: output.value,
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
   * 
   * 
   * @ignore
   * @type {boolean}
   */
  const showErrors = computed(() => {
    return hasErrors.value && options.value.displayErrors
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
   * 
   * 
   * @ignore
   * @type {boolean}
   */
  const showMessages = computed(() => {
    return hasMessages.value
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
  const showLanguages = computed(() => {
    return isMultilingual.value
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
    return options.value.validateOn.split('|').indexOf('change') !== -1
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
    return !_.isEmpty(options.value.steps)
  })

  /**
   *
   * 
   * @ignore
   * @type {boolean}
   */
  const showSteps = computed(() => {
    return hasSteps.value
  })

  /**
   * 
   * 
   * @ignore
   * @type {boolean}
   */
  const showStepsControls = computed(() => {
    return hasSteps.value && options.value.stepsControls
  })

  /**
   * Whether the form has tabs.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasTabs = computed(() => {
    return !_.isEmpty(options.value.tabs)
  })

  /**
   *
   * 
   * @ignore
   * @type {boolean}
   */
  const showTabs = computed(() => {
    return hasTabs.value
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

    _.each(elements$.value, (element$) => {
      if (element$.isStatic) {
        return
      }

      if (data[element$.name] === undefined && !element$.flat) {
        return
      }

      element$.update(element$.flat ? data : data[element$.name])
    })
  }

  /**
   * Loads data and clears any element if the element's key is not found in the `data` object. Sets all elements' `dirty` to `false`.
   * 
   * @public
   * @param {object} data data to load
   * @returns {void}
   */
  const load = async (data, format = false) => {
    if (steps$.value !== null) {
      steps$.value.enableAllSteps()
    }


    let formatted = format && options.value.formatLoad !== null ? options.value.formatLoad(data) : data

    await asyncForEach(elements$.value, async (e$) => {
      if (e$.isStatic) {
        return
      }

      let loadValue = e$.flat ? formatted : formatted[e$.name]

      if (loadValue === undefined) {
        e$.clear()
        return
      }

      await e$.load(loadValue, format)
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
    
    await validate()

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
  const initMessageBag = () => {
    messageBag.value = new services.value.messageBag(elementErrors)
  }

  // ============== PROVIDES ==============

  provide('form$', form$)
  provide('theme', extendedTheme)

  // ================ HOOKS ===============

  initMessageBag()
  setLanguage(options.value.language)

  onBeforeMount(() => {
    userConfig.value = $this.laraform || {}
  })

  onMounted(() => {
    // Watching model to track old/new values
    watch(data, (n, o) => {
      if (dataEquals(n, o)) {
        return
      }

      fire('change', n, o)
      
      if (externalValue && externalValue.value !== undefined) {
        context.emit('input', n)
        context.emit('update:modelValue', n)
      }
    }, { deep: true, immediate: false })

    // If has v-model & not equals to form data
    if (externalValue && externalValue.value !== undefined && JSON.stringify(externalValue.value) !== JSON.stringify(data.value)) {
      context.emit('input', data.value)
      context.emit('update:modelValue', data.value)
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
    internalData,
    data,
    output,
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
    shouldValidateOnStep,
    hasSteps,
    hasTabs,
    hasErrors,
    hasMessages,
    isMultilingual,
    showErrors,
    showMessages,
    showLanguages,
    showSteps,
    showTabs,
    showStepsControls,
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
    isSync,
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
    handleSubmit,
    el$,
    siblings$,
    initMessageBag,
    fire,
    on,
    off,
  }
}

export default base