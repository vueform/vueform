import _ from 'lodash'
import {
  computed, ref, toRefs, getCurrentInstance, onBeforeMount, onMounted, onBeforeUpdate,
  onUpdated, onBeforeUnmount, onUnmounted, provide, watch
} from 'composition-api'
import { mergeComponentClasses } from './../utils/mergeClasses'
import convertFormDataUtil from './../utils/convertFormData'
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
    replaceClasses,
    extendClasses,
    replaceTemplates,
    messages,
    columns,
    languages,
    addClass,
    formKey,
    endpoint,
    method,
    formData,
    language,
    validateOn,
    forceLabels,
    floatPlaceholders,
    multilingual,
    stepsControls,
    displayErrors,
    displayMessages,
    formatLoad,
    formatData,
    prepare,
    default: default_,
    disabled,
    loading,
    onChange: _onChange,
    onReset: _onReset,
    onClear: _onClear,
    onSubmit: _onSubmit,
    onSuccess: _onSuccess,
    onError: _onError,
    onLanguage: _onLanguage,
    onBeforeMount: _onBeforeMount,
    onMounted: _onMounted,
    onBeforeUpdate: _onBeforeUpdate,
    onUpdated: _onUpdated,
    onBeforeUnmount: _onBeforeUnmount,
    onUnmounted: _onUnmounted,
  } = toRefs(props)

  const evts = [
    'change', 'reset', 'clear', 'submit',
    'success', 'error', 'language',
    'beforeCreate', 'created', 'beforeMount',
    'mounted', 'beforeUpdate', 'updated',
    'beforeUnmount', 'unmounted',
  ]

  const $this = getCurrentInstance().proxy

  // ============ DEPENDENCIES ============

  const {
    events,
    listeners,
    fire,
    on,
    off
  } = useEvents(props, context, { form$: $this }, {
    events: evts,
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
  * The components of highest level form elements.
  * 
  * @type {object}
  * @default {}
  * @private
  */
  const elements$ = ref({})

  /**
  * The FormTabs component.
  * 
  * @type {component}
  * @private
  */
  const tabs$ = ref(null)

  /**
  * The FormSteps component.
  * 
  * @type {component}
  * @private
  */
  const steps$ = ref(null)

  /**
   * Enables validation for the form globally.
   * 
   * @type {boolean}
   * @default true
   */
  const validation = ref(true)

  /**
   * Instance of MessageBag service.
   * 
   * @type {MessageBag}
   * @default MessageBag
   */
  const messageBag = ref({})

  /**
   * Whether the form is currently submitting.
   * 
   * @type {boolean}
   * @default false
   */
  const submitting = ref(false)

  /**
   * Whether the form is currently preparing the elements for submit.
   * 
   * @type {boolean}
   * @default false
   */
  const preparing = ref(false)

  /**
   * The ISO 639-1 code of the currently selected language (2 letters).
   * 
   * @type {string}
   * @default config.language
   */
  const selectedLanguage = ref(null)

  /**
   * The configuration object of the user when using SFC mode. Basically the value of the component's `data.vueform` object.
   * 
   * @type {object}
   * @default {}
   * @private
   */
  const userConfig = ref({})

  // ============== COMPUTED ==============

  /**
   * The form's component (self).
   * 
   * @type {component}
   */
  const form$ = computed(() => {
    return $this
  })

  /**
   * The default configuration object.
   * 
   * @type {object}
   */
  const baseConfig = computed(() => {
    return $this.$laraform
  })

  /**
   * Registered services.
   * 
   * @type {object}
   */
  const services = computed(() => {
    return $this.$laraform.services
  })

  /**
   * Form options merged from config, component props & the component's `data.vueform` options.
   * 
   * @type {object}
   * @private
   */
  const options = computed(() => {
    const options = {
      schema: orderedSchema.value,
      tabs: formTabs.value,
      steps: formSteps.value,
    }

    const override = {
      columns, languages, language, theme, endpoint, method, validateOn,
      replaceClasses, extendClasses, replaceTemplates, messages, addClass,
      formKey, multilingual, formatLoad, formatData, prepare, default: default_ ,
      formData,
    }

    const ifNotUndefined = {
      stepsControls, displayErrors, displayMessages, forceLabels, disabled, loading,
      floatPlaceholders,
      onChange: _onChange.value,
      onReset: _onReset.value,
      onClear: _onClear.value,
      onSubmit: _onSubmit.value,
      onSuccess: _onSuccess.value,
      onError: _onError.value,
      onLanguage: _onLanguage.value,
      onBeforeMount: _onBeforeMount.value,
      onMounted: _onMounted.value,
      onBeforeUpdate: _onBeforeUpdate.value,
      onUpdated: _onUpdated.value,
      onBeforeUnmount: _onBeforeUnmount.value,
      onUnmounted: _onUnmounted.value,
    }

    const defaults = {
      columns: baseConfig.value.config.columns,
      languages: baseConfig.value.config.languages,
      language: baseConfig.value.config.language,
      theme: baseConfig.value.config.theme,
      endpoint: baseConfig.value.config.endpoints.submit.url,
      method: baseConfig.value.config.endpoints.submit.method,
      validateOn: baseConfig.value.config.validateOn,
      displayErrors: baseConfig.value.config.displayErrors,
      displayMessages: baseConfig.value.config.displayMessages,
      forceLabels: baseConfig.value.config.forceLabels,
      floatPlaceholders: baseConfig.value.config.floatPlaceholders,
      formData: baseConfig.value.config.formData,
      replaceClasses: {},
      extendClasses: {},
      replaceTemplates: {},
      messages: {},
      default: {},
      addClass: null,
      formKey: null,
      formatLoad: null,
      formatData: null,
      prepare: null,
      multilingual: false,
      stepsControls: true,
      disabled: false,
      loading: false,
    }

    _.each(override, (val, key) => {
      options[key] = userConfig.value[key] !== undefined ?  userConfig.value[key] : ((val && val.value ? val.value : undefined) || defaults[key])
    })

    _.each(ifNotUndefined, (val, key) => {
      options[key] = userConfig.value[key] !== undefined ? userConfig.value[key] : (val && val.value !== null ? val.value : defaults[key])
    })

    return options
  })

  /**
  * The global schema which has already been ordered based on tabs/steps element order.
  * 
  * @type {object}
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

  /**
   * The form's schema merged from `:schema` prop and the component's `data.vueform.schema` object.
   * 
   * @type {object}
   * @private
   */
  const formSchema = computed(() => {
    return _.merge({}, schema && schema.value ? schema.value : {}, userConfig.value.schema || {})
  })

  /**
   * The form's tabs merged from `:tabs` prop and the component's `data.vueform.tabs` object.
   * 
   * @type {object}
   * @private
   */
  const formTabs = computed(() => {
    return _.merge({}, tabs && tabs.value ? tabs.value : {}, userConfig.value.tabs || {})
  })

  /**
   * The form's steps merged from `:steps` prop and the component's `data.vueform.steps` object.
   * 
   * @type {object}
   * @private
   */
  const formSteps = computed(() => {
    return _.merge({}, steps && steps.value ? steps.value : {}, userConfig.value.steps || {})
  })

  /**
   * The form data including all the elements even if they have unmet conditions.
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
   * The form data excluding elements with `available: false`. This one gets submitted.
   * 
   * @type {object}
   */
  const requestData = computed(() => {
    var requestData = {}

    _.each(elements$.value, (e$) => {
      if (e$.isStatic) {
        return
      }
      
      requestData = Object.assign({}, requestData, e$.requestData)
    })

    return formatData.value ? formatData.value(requestData) : requestData
  })

  /**
   * Whether the form has any dirty elements.
   * 
   * @type {boolean}
   */
  const dirty = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.dirty === true
    })
  })

  /**
   * Whether the form has any invalid elements.
   * 
   * @type {boolean}
   */
  const invalid = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.invalid === true
    })
  })

  /**
   * Whether the form has any debouncing elements.
   * 
   * @type {boolean}
   */
  const debouncing = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.debouncing === true
    })
  })

  /**
   * Whether the form has any pending elements.
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
   * Whether the form has any busy elements or [`:loading`](#loading) is `true` or in [`preparing`](#preparing) or [`submitting`](#submitting) state.
   * 
   * @type {boolean}
   */
  const busy = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.busy === true
    }) || submitting.value || preparing.value || options.value.loading
  })

  // no export
  /**
   * Errors collected from elements.
   * 
   * @type {array}
   * @private
   */
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
   * Form errors including element errors and the ones added to [`messageBag`](#messagebag) manually.
   * 
   * @type {array}
   */
  const formErrors = computed(() => {
    return messageBag.value.errors
  })

  /**
   * Whether the form has any errors.
   * 
   * @type {boolean}
   */
  const hasErrors = computed(() => {
    return formErrors.value.length > 0
  })

  /**
   * Whether the form should display errors above the form with [`FormErrors`](form-errors) component. Can be disabled by [`:displayErrors`](#displayerrors) or in `config.displayErrros`.
   * 
   * @type {boolean}
   */
  const showErrors = computed(() => {
    return hasErrors.value && options.value.displayErrors
  })

  /**
   * Form messages including element messages and the ones added to [`messageBag`](#messagebag) manually.
   * 
   * @type {array}
   */
  const formMessages = computed(() => {
    return messageBag.value.messages
  })

  /**
   * Whether the form has anymessages.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasMessages = computed(() => {
    return formMessages.value.length > 0
  })

  /**
   * Whether the form should display messages above the form with [`FormMessages`](form-messages) component. Can be disabled by [`:displayMessages`](#displaymessages) or in `config.displayMessages`.
   * 
   * @type {boolean}
   */
  const showMessages = computed(() => {
    return hasMessages.value && options.value.displayMessages
  })

  /**
   * Whether the form is multilingual and should show [`FormLanguages`](form-languages) component.
   * 
   * @type {boolean}
   */
  const isMultilingual = computed(() => {
    return options.value.multilingual
  })

  /**
   * Whether the form should show langauge selectors.
   * 
   * @type {boolean}
   */
  const showLanguages = computed(() => {
    return isMultilingual.value
  })

  /**
   * Whether submitting the form is disabled. Returns `true` if:<br>* the form has any invalid elements and `:validateOn` contains `'change'`<br>* the form is [`busy`](#busy)<br>* manually disabled with [`:disabled`](#disabled) prop
   * 
   * @type {boolean}
   */
  const isDisabled = computed(() => {
    return (invalid.value && shouldValidateOnChange.value) || busy.value || options.value.disabled
  })

  /**
   * Whether submitting the form is in loading state. Can be enabled with [`:loading`](#loading) prop.
   * 
   * @type {boolean}
   */
  const isLoading = computed(() => {
    return options.value.loading
  })

  /**
   * Whether the `:validateOn` prop or `config.validateOn` contains `'change'`.
   * 
   * @type {boolean}
   * @private
   */
  const shouldValidateOnChange = computed(() => {
    return options.value.validateOn.split('|').indexOf('change') !== -1
  })

  /**
   * Whether the `:validateOn` prop or `config.validateOn` contains `'step'`.
   * 
   * @type {boolean}
   * @private
   */
  const shouldValidateOnStep = computed(() => {
    return options.value.validateOn.split('|').indexOf('step') !== -1
  })

  /**
   * Whether the form has any steps.
   * 
   * @type {boolean}
   * @private
   */
  const hasSteps = computed(() => {
    return !_.isEmpty(options.value.steps)
  })

  /**
   * Whether the form should show [`FormSteps`](form-steps) component. Returns `true` if [`:steps`](#steps) has a value.
   * 
   * @type {boolean}
   */
  const showSteps = computed(() => {
    return hasSteps.value
  })

  /**
   * Whether the form should display steps controls below form with [`FormStepsControls`](form-steps-control) component when it has [`:steps`](#steps). Can be disabled by [`:stepsControls`](#stepscontrols) or in `config.stepsControls`.
   * 
   * @type {boolean}
   */
  const showStepsControls = computed(() => {
    return hasSteps.value && options.value.stepsControls
  })

  /**
   * Whether the form has any tabs.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasTabs = computed(() => {
    return !_.isEmpty(options.value.tabs)
  })

  /**
   * Whether the form should show [`FormTabs`](form-tabs) component. Returns `true` if [`:tabs`](#tabs) has a value.
   * 
   * @type {boolean}
   */
  const showTabs = computed(() => {
    return hasTabs.value
  })

  /**
   * The theme object of the selected theme.
   * 
   * @type {object}
   * @private
   */
  const theme = computed(() => {
    return baseConfig.value.theme
  })

  /**
   * The selected theme, extended by local overrides. Normally we use `theme` property for this, but as Vueform component needs to have an actual [`:theme`](#theme) prop so we use this naming instead.
   * 
   * @type {object}
   */
  const extendedTheme = computed(() => {
    return Object.assign({}, theme.value, {
      // Add registered component to theme (or overwrite)
      components: Object.assign({},
        theme.value.components,
        baseConfig.value.components,
        options.value.replaceComponents || {},
      ),
      
      // Ovewrite theme classes with form's classes definition
      classes: _.merge({},
        theme.value.classes,
        baseConfig.value.classes,
        options.value.replaceClasses,
      ),
    })
  })

  /**
  * The selected theme's components, extended by local overrides. Normally we use `components` property for this, but as Vueform component needs to have an actual [`:components`](#components) prop so we use this naming instead.
  * 
  * @type {object}
  */
  const components = computed(() => {
    return extendedTheme.value.components
  })

  /**
  * The class name of the form's outermost DOM.
  * 
  * @type {string}
  * @private
  */
  const mainClass = computed(() => {
    return _.keys(defaultClasses.value)[0]
  })

  /**
  * The default classes for the form defined by theme.
  * 
  * @type {object}
  * @private
  */
  const defaultClasses = computed(() => {
    return extendedTheme.value.components.Laraform.data().defaultClasses
  })

  /**
   * The selected theme's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides. Normally we use `classes` property for this, but as Vueform component needs to have an actual [`:classes`](#classes) prop so we use this naming instead.
   * 
   * @type {object}
   */
  const classes = computed(() => {
    let classes = Object.assign({},
      defaultClasses.value,
      extendedTheme.value.classes.Laraform,
    )

    classes = mergeComponentClasses(classes, options.value.extendClasses.Laraform || null)

    if (options.value.addClass !== null) {
      classes = mergeComponentClasses(classes, {
        [mainClass.value]: options.value.addClass
      })
    }

    return classes
  })

  // =============== METHODS ==============

  /**
   * Updates the form data. Can be used to update a single element by providing the element's `path` as second option.
   * 
   * @param {object} data* data to update with
   * @param {object} path the `path` of the element to update (default: `null`)
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
   * Loads data to the form using optional [`:formatLoad`](#format-load) formatter.
   * 
   * @param {string} value* the value to be loaded
   * @param {boolean} format whether the loaded value should be formatted with [`:formatLoad`](#format-load) (default: `false`)
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
   * Resets the form's data to default state. Also resets all the validation state for the elements.
   * 
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
   * Clears the forms data.
   * 
   * @returns {void}
   */
  const clear = () => {
    _.each(elements$.value, (e$) => {
      if (e$.isStatic) {
        return
      }
      
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
   * @returns {void}
   */
  const clean = () => {
    _.each(elements$.value, (e$) => {
      e$.clean()
    })
  }

  /**
   * Validates all elements (async).
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
   * Sets all element validators to default state.
   * 
   * @returns {void}
   */
  const resetValidators = () => {
    _.each(elements$.value, (e$) => {
      if (e$.isStatic) {
        return
      }

      e$.resetValidators()
    })
  }

  /**
   * Validates and prepares elements then submits the form (async).
   * 
   * @returns {void}
   */
  const submit = async () => {
    if (isDisabled.value) {
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
        await options.value.prepare(form$.value)
      }
      
      if (typeof $this.$laraform.config.beforeSend === 'function') {
        await $this.$laraform.config.beforeSend(form$.value)
      }
    } catch (error) {
      fire('error', error, { type: 'prepare' })
      console.error(error)
      return
    } finally {
      preparing.value = false
    }
    
    fire('submit', form$.value)

    if (!options.value.endpoint) {
      return
    }

    send()
  }

  /**
   * Sends form data to [`:endpoint`](#endpoint) with the selected [`method`](#method) (async).
   * 
   * @returns {void}
   */
  const send = async () => {
    submitting.value = true

    let response = {}

    try {
      resetValidators()

      response = await services.value.axios.request({
        url: options.value.endpoint.toLowerCase(),
        method: options.value.method.toLowerCase(),
        data: convertFormData(options.value.formData(form$.value)),
      })

      if (response.data.payload && response.data.payload.updates) {
        update(response.data.payload.updates)
      }

      fire('success', response)
    }
    catch (error) {
      fire('error', error, { type: 'submit' })
      console.error(error)
    }
    finally {
      fire('response', response)
      submitting.value = false
    }
  }

  /**
  * Prepares all elements to submit (async).
  * 
  * @returns {void}
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
   * Disabled form validation globally.
   * 
   * @returns {void}
   */
  const disableValidation = () => {
    validation.value = false
  }

  /**
   * Enables form validation globally.
   * 
   * @returns {void}
   */
  const enableValidation = () => {
    validation.value = true
  }

  /**
  * Sets current language when using [`:multilingual`](#multilingual).
  * 
  * @param {string} code* the language code to be selected
  * @returns {void}
  */
  const setLanguage = (code) => {
    selectedLanguage.value = code

    fire('language', code)
  }

  /**
   * Handles `submit` event.
   *
   * @returns {void}
   */
  const handleSubmit = () => {
    submit()
  }

  /**
  * Converts form data to [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
  * 
  * @param {object} data* the data to be converted
  * @returns {FormData}
  */
  const convertFormData = (data) => {
    return convertFormDataUtil(data)
  }

  /**
   * Returns an element by its path.
   * 
   * @param {string} path path of the element
   * @returns {component|null}
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
  * Inits MessageBag service.
  * 
  * @returns {void}
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

    // Manually subscribe to events defined in options object
    _.each(evts, (evt) => {
      let callback = options.value['on' + _.upperFirst(evt)]

      if (callback) {
        on(evt, callback)
      }
    })

    fire('beforeMount', $this)
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

    fire('mounted', $this)
  })

  onBeforeUpdate(() => fire('beforeUpdate', $this))
  onUpdated(() => fire('updated', $this))
  onBeforeUnmount(() => fire('beforeUnmount', $this))
  onUnmounted(() => fire('unmounted', $this))

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
    events,
    listeners,
    internalData,
    data,
    requestData,
    dirty,
    invalid,
    debouncing,
    pending,
    validated,
    busy,
    formErrors,
    formMessages,
    isDisabled,
    isLoading,
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
    classes,
    components,
    extendedTheme,
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
    resetValidators,
    convertFormData,
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
    baseConfig,
  }
}

export default base