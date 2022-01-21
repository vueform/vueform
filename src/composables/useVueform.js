import _ from 'lodash'
import {
  computed, ref, toRefs, getCurrentInstance, onBeforeMount, onMounted, onBeforeUpdate,
  onUpdated, onBeforeUnmount, onUnmounted, provide, watch
} from 'composition-api'
import MergeFormClasses from './../utils/mergeFormClasses'
import convertFormDataUtil from './../utils/convertFormData'
import asyncForEach from './../utils/asyncForEach'
import dataEquals from './../utils/dataEquals'
import useEvents from './useEvents'
import useModel from './useModel'
import MergeComponentClasses from '../utils/mergeComponentClasses'

const base = function(props, context, dependencies = {})
{
  const {
    schema,
    tabs,
    steps,
    size,
    view,
    views,
    addClass,
    removeClass,
    replaceClass,
    overrideClass,
    addClasses,
    removeClasses,
    replaceClasses,
    overrideClasses,
    presets,
    replaceTemplates,
    theme,
    messages,
    columns,
    languages,
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
   * Enables/disables validation for the form globally.
   * 
   * @type {boolean}
   * @default true
   */
  const validation = ref(true)

  /**
   * Instance of MessageBag service. It can be used to add [custom errors and messages](/docs/1.x/validating-elements#custom-errors-and-messages).
   * 
   * @type {MessageBag}
   * @default MessageBag
   */
  const messageBag = ref({})

  /**
   * Whether the async process of submitting the form is currently in progress.
   * 
   * @type {boolean}
   * @default false
   */
  const submitting = ref(false)

  /**
   * Whether the async process of preparing the elements for submit is currently in progress.
   * 
   * @type {boolean}
   * @default false
   */
  const preparing = ref(false)

  /**
   * The code of the currently selected language (eg. `en`).
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
   * The form component instance (self).
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
    return $this.$vueform
  })

  /**
   * Registered services.
   * 
   * @type {object}
   */
  const services = computed(() => {
    return $this.$vueform.services
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
      columns, languages, language, theme, method, validateOn,
      messages, formKey, multilingual, formatLoad, formatData, prepare, default: default_, formData, replaceTemplates,
      addClass, removeClass, replaceClass, overrideClass,
      addClasses, removeClasses, replaceClasses, overrideClasses, presets,
      size, view,
    }

    const merge = {
      views,
    }

    const ifNotUndefined = {
      stepsControls, displayErrors, displayMessages, forceLabels, disabled, loading,
      floatPlaceholders, endpoint,
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
      endpoint: baseConfig.value.config.endpoints.submit.url,
      method: baseConfig.value.config.endpoints.submit.method,
      validateOn: baseConfig.value.config.validateOn,
      displayErrors: baseConfig.value.config.displayErrors,
      displayMessages: baseConfig.value.config.displayMessages,
      forceLabels: baseConfig.value.config.forceLabels,
      floatPlaceholders: baseConfig.value.config.floatPlaceholders,
      formData: baseConfig.value.config.formData,
      theme: baseConfig.value.theme,
      view: baseConfig.value.config.view,
      views: baseConfig.value.config.views,
      size: null,
      addClass: null,
      removeClass: null,
      replaceClass: null,
      overrideClass: null,
      addClasses: {},
      removeClasses: {},
      replaceClasses: {},
      overrideClasses: {},
      presets: [],
      replaceTemplates: {},
      messages: {},
      default: {},
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

    _.each(merge, (val, key) => {
      if (userConfig.value[key] !== undefined) {
        options[key] = Object.assign({}, defaults[key], userConfig.value[key])
      } else if (val && Object.keys(val.value).length) {
        options[key] = Object.assign({}, defaults[key], val.value)
      } else {
        options[key] = Object.assign({}, defaults[key])
      }
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
   * The form's schema merged from `schema` prop and the component's `data.vueform.schema` object.
   * 
   * @type {object}
   * @private
   */
  const formSchema = computed(() => {
    return _.merge({}, schema && schema.value ? schema.value : {}, userConfig.value.schema || {})
  })

  /**
   * The form's tabs merged from `tabs` prop and the component's `data.vueform.tabs` object.
   * 
   * @type {object}
   * @private
   */
  const formTabs = computed(() => {
    return _.merge({}, tabs && tabs.value ? tabs.value : {}, userConfig.value.tabs || {})
  })

  /**
   * The form's steps merged from `steps` prop and the component's `data.vueform.steps` object.
   * 
   * @type {object}
   * @private
   */
  const formSteps = computed(() => {
    return _.merge({}, steps && steps.value ? steps.value : {}, userConfig.value.steps || {})
  })

  /**
   * The form data including the data of all elements even the ones with `available: false` and `submit: false`.
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
   * The form data excluding elements with `available: false` and `submit: false`. This one gets submitted by default, but can be changed with [`formData`](#option-form-data)
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
   * Whether the form has any elements which were modified.
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
   * Whether the form has any elements with active debounce process.
   * 
   * @type {boolean}
   */
  const debouncing = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.debouncing === true
    })
  })

  /**
   * Whether the form has any elements with pending async validation.
   * 
   * @type {boolean}
   */
  const pending = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.pending === true
    })
  })

  /**
   * Whether each element in the form has been validated at least once.
   * 
   * @type {boolean}
   */
  const validated = computed(() => {
    return !_.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.validated === false
    })
  })

  /**
   * Whether the form has any elements with `busy: true` or the [`isLoading`](#property-is-loading), [`preparing`](#property-preparing) or [`submitting`](#property-submitting) property is `true`.
   * 
   * @type {boolean}
   */
  const busy = computed(() => {
    return _.some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.busy === true
    }) || submitting.value || preparing.value || isLoading.value
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
   * Form errors including element errors and the ones added to [`messageBag`](#property-message-bag) manually.
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
   * Whether the form should display errors above the form with [`FormErrors`](form-errors) component. Can be disabled by [`displayErrors`](#option-display-errors) or in `config.displayErrors`.
   * 
   * @type {boolean}
   */
  const showErrors = computed(() => {
    return hasErrors.value && options.value.displayErrors
  })

  /**
   * Form messages including element messages and the ones added to [`messageBag`](#property-message-bag) manually.
   * 
   * @type {array}
   */
  const formMessages = computed(() => {
    return messageBag.value.messages
  })

  /**
   * Whether the form has any messages.
   * 
   * @ignore
   * @type {boolean}
   */
  const hasMessages = computed(() => {
    return formMessages.value.length > 0
  })

  /**
   * Whether the form should display messages above the form with [`FormMessages`](form-messages) component. Can be disabled by [`displayMessages`](#option-display-messages) or in `config.displayMessages`.
   * 
   * @type {boolean}
   */
  const showMessages = computed(() => {
    return hasMessages.value && options.value.displayMessages
  })

  /**
   * Whether the form is multilingual and should show [`FormLanguages`](form-languages) component. Returns `true` if [`multilingual`](#option-multilingual) is enabled.
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
   * Whether submitting the form is disabled. Returns `true` if:
   * * the form has any invalid elements and [`validateOn`](#option-validate-on) contains `change`
   * * the form is [`busy`](#property-busy)
   * * manually disabled with [`disabled`](#option-disabled) option.
   * 
   * @type {boolean}
   */
  const isDisabled = computed(() => {
    return (invalid.value && shouldValidateOnChange.value) || busy.value || options.value.disabled
  })

  /**
   * Whether loading state is triggered manually via [`loading`](#option-loading) option.
   * 
   * @type {boolean}
   */
  const isLoading = computed(() => {
    return options.value.loading
  })

  /**
   * Whether the `validateOn` prop or `config.validateOn` contains `'change'`.
   * 
   * @type {boolean}
   * @private
   */
  const shouldValidateOnChange = computed(() => {
    return options.value.validateOn.split('|').indexOf('change') !== -1
  })

  /**
   * Whether the `validateOn` prop or `config.validateOn` contains `'step'`.
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
   * Whether the form should show [`FormSteps`](form-steps) component. Returns `true` if [`steps`](#option-steps) has value.
   * 
   * @type {boolean}
   */
  const showSteps = computed(() => {
    return hasSteps.value
  })

  /**
   * Whether the form should display steps controls below form with [`FormStepsControls`](form-steps-control) component when it has [`steps`](#option-steps). Can be disabled with [`stepsControls`](#option-steps-controls).
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
   * Whether the form should show [`FormTabs`](form-tabs) component. Returns `true` if [`tabs`](#option-tabs) has value.
   * 
   * @type {boolean}
   */
  const showTabs = computed(() => {
    return hasTabs.value
  })

  /**
   * The selected theme, extended by local template and class overrides, using [`replaceTemplates`](#option-replace-templates), [`addClasses`](#option-add-classes) and [`replaceClasses`](#option-replace-classes).
   * 
   * @type {object}
   */
  const extendedTheme = computed(() => {
    let presetTemplates = {}

    _.each(baseConfig.value.config.usePresets.concat(options.value.presets), (presetName) => {
      let preset = baseConfig.value.config.presets[presetName]

      if (!preset || !preset.templates) {
        return
      }

      presetTemplates = Object.assign({}, presetTemplates, preset.templates)
    })

    return Object.assign({}, options.value.theme, {
      // Add registered component to theme (or overwrite)
      templates: Object.assign({},
        options.value.theme.templates,
        baseConfig.value.templates,
        presetTemplates,
        options.value.replaceTemplates || {},
      ),
    })
  })

  /**
  * The selected theme's templates, extended by local overrides. The [`replaceTemplates`](#option-replace-templates) option can be used to override templates provided by the theme.
  * 
  * @type {object}
  */
  const templates = computed(() => {
    return extendedTheme.value.templates
  })

  /**
  * The component's template.
  * 
  * @type {object}
  */
  const template = computed(() => {
    return View.value && templates.value[`Vueform_${View.value}`]
            ? templates.value[`Vueform_${View.value}`]
            : templates.value.Vueform
  })

  /**
   * The selected theme's classes merged with [`addClasses`](#option-add-classes) and [`replaceClasses`](#option-replace-classes) options.
   * 
   * @type {object}
   */
  const classes = computed(() => {
    return (new MergeFormClasses({
      component: 'Vueform',
      component$: form$,
      theme: extendedTheme.value,
      config: baseConfig.value.config,
      templates: templates.value,
      view: View.value,
      merge: [
        options.value,
      ],
    })).classes
  })

  /**
   * The calculated size of the form. If [`size`](#option-size) is not defined `config.size` will be used. 
   *
   * @returns {string}
   */
  const Size = computed(() => {
    let Size

    if (options.value.size) {
      Size = options.value.size
    } else {
      _.each(baseConfig.value.config.usePresets.concat(options.value.presets), (presetName) => {
        let preset = baseConfig.value.config.presets[presetName]

        if (!preset || !preset.size) {
          return
        } 

        Size = preset.size
      })
    }

    if (!Size) {
      Size = baseConfig.value.config.size
    }

    return Size
  })


  /**
   * The calculated views of the form.
   *
   * @returns {object}
   */
  const Views = computed(() => {
    let Views = options.value.views

    _.each(baseConfig.value.config.usePresets.concat(options.value.presets), (presetName) => {
      let preset = baseConfig.value.config.presets[presetName]
      
      if (!preset || !preset.views) {
        return
      }

      Views = Object.assign({}, Views, preset.views)
    })

    return Views
  })


  /**
   * The calculated view of the form.
   *
   * @returns {object}
   */
  const View = computed(() => {
    if (options.value.view) {
      return options.value.view
    }
    
    return Views.value.Vueform
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
   * Loads data to the form using optional [`formatLoad`](#option-format-load) formatter.
   * 
   * @param {string} value* the value to be loaded
   * @param {boolean} format whether the loaded value should be formatted with [`formatLoad`](#option-format-load) (default: `false`)
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
      
      if (typeof $this.$vueform.config.beforeSend === 'function') {
        await $this.$vueform.config.beforeSend(form$.value)
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
   * Sends form data to [`endpoint`](#option-endpoint) with the selected [`method`](#option-method) (async).
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
  * Sets current language when using [`multilingual`](#option-multilingual).
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
  provide('Size', Size)
  provide('Views', Views)

  // ================ HOOKS ===============

  initMessageBag()
  setLanguage(options.value.language)

  onBeforeMount(() => {
    userConfig.value = $this.vueform || {}

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
    classes,
    templates,
    template,
    extendedTheme,
    Size,
    View,
    Views,
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
  }
}

export default base