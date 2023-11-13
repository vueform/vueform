import each from 'lodash-es/each'
import merge from 'lodash-es/merge'
import some from 'lodash-es/some'
import isEmpty from 'lodash-es/isEmpty'
import upperFirst from 'lodash-es/upperFirst'
import filter from 'lodash-es/filter'
import {
  computed, ref, toRefs, getCurrentInstance, onBeforeMount, onMounted, onBeforeUpdate,
  onUpdated, onBeforeUnmount, onUnmounted, provide, watch,
} from 'vue'
import MergeClasses from './../utils/mergeClasses'
import convertFormDataUtil from './../utils/convertFormData'
import asyncForEach from './../utils/asyncForEach'
import dataEquals from './../utils/dataEquals'
import { flatten as flattrenTree, collect as collectTree } from './../utils/tree'
import useEvents from './useEvents'
import useModel from './useModel'

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
    templates,
    theme,
    messages,
    columns,
    languages,
    formKey,
    endpoint,
    method,
    formData,
    language,
    locale,
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

  const vm = getCurrentInstance()
  const $this = vm.proxy

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
  * @type {FormTabs}
  * @private
  */
  const tabs$ = ref(null)

  /**
  * The FormSteps component.
  *
  * @type {FormSteps}
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
   * Enables/disables conditions for the form globally.
   *
   * @type {boolean}
   * @default true
   */
  const conditions = ref(true)

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

  /**
   * Whether the form has been mounted.
   *
   * @type {boolean}
   * @default false
   */
  const mounted = ref(false)

  /**
   * Whether FormMessages component is registered.
   *
   * @type {boolean}
   * @default false
   * @private
   */
  const messagesRegistered = ref(typeof vm.appContext.app.component('FormMessages') !== 'string')

  /**
   * Whether FormErrors component is registered.
   *
   * @type {boolean}
   * @default false
   * @private
   */
  const errorsRegistered = ref(typeof vm.appContext.app.component('FormErrors') !== 'string')

  /**
   * Whether FormLanguages component is registered.
   *
   * @type {boolean}
   * @default false
   * @private
   */
  const languagesRegistered = ref(typeof vm.appContext.app.component('FormLanguages') !== 'string')

  /**
   * Whether FormTabs component is registered.
   *
   * @type {boolean}
   * @default false
   * @private
   */
  const tabsRegistered = ref(typeof vm.appContext.app.component('FormTabs') !== 'string')

  /**
   * Whether FormSteps component is registered.
   *
   * @type {boolean}
   * @default false
   * @private
   */
  const stepsRegistered = ref(typeof vm.appContext.app.component('FormSteps') !== 'string')

  // ============== COMPUTED ==============

  /**
   * The form component instance (self).
   *
   * @type {Vueform}
   */
  const form$ = computed(() => {
    return $this
  })

  /**
   * The default configuration object.
   *
   * @type {object}
   * @private
   */
  const baseConfig = computed(() => {
    return $this.$vueform
  })

  /**
   * The default configuration object.
   *
   * @type {object}
   */
  const config$ = computed(() => {
    return baseConfig.value
  })

  /**
   * The active locale of the form.
   *
   * @type {string}
   */
  const locale$ = computed(() => {
    return options.value.locale || baseConfig.value.i18n.locale
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

    // Prop options will override Component.data() options
    const override = {
      columns, languages, language, theme, method, validateOn,
      messages, formKey, multilingual, formatLoad, formatData, prepare, default: default_, formData, templates,
      addClass, removeClass, replaceClass, overrideClass,
      addClasses, removeClasses, replaceClasses, overrideClasses, presets,
      size, view, views, locale,
    }

    // Only set from prop option if it is not `null` - means the prop is set
    // (otherwise will use the value defined in `defaults` or `undefined` if not)
    const ifPropSet = {
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
      languages: baseConfig.value.config.languages,
      language: baseConfig.value.config.language,
      endpoint: typeof baseConfig.value.config.endpoints.submit === 'function' ? baseConfig.value.config.endpoints.submit : baseConfig.value.config.endpoints.submit.url,
      method: typeof baseConfig.value.config.endpoints.submit === 'function' ? null : baseConfig.value.config.endpoints.submit.method,
      validateOn: baseConfig.value.config.validateOn,
      displayErrors: baseConfig.value.config.displayErrors,
      displayMessages: baseConfig.value.config.displayMessages,
      forceLabels: baseConfig.value.config.forceLabels,
      floatPlaceholders: baseConfig.value.config.floatPlaceholders,
      formData: baseConfig.value.config.formData,
      theme: baseConfig.value.theme,
      view: baseConfig.value.config.view,
      views: {},
      columns: {},
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
      templates: {},
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

    each(override, (val, key) => {
      options[key] = userConfig.value[key] !== undefined ?  userConfig.value[key] : ((val && val.value ? val.value : undefined) || defaults[key])
    })

    each(ifPropSet, (val, key) => {
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

      each(blocks, (block) => {
        each(block.elements, (name) => {
          if (formSchema.value[name]) {
            orderedSchema[name] = formSchema.value[name]
          }
        })
      })

      each(Object.keys(formSchema.value), (name) => {
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
    return merge({}, schema && schema.value ? schema.value : {}, userConfig.value.schema || {})
  })

  /**
   * The form's tabs merged from `tabs` prop and the component's `data.vueform.tabs` object.
   *
   * @type {object}
   * @private
   */
  const formTabs = computed(() => {
    return merge({}, tabs && tabs.value ? tabs.value : {}, userConfig.value.tabs || {})
  })

  /**
   * The form's steps merged from `steps` prop and the component's `data.vueform.steps` object.
   *
   * @type {object}
   * @private
   */
  const formSteps = computed(() => {
    return merge({}, steps && steps.value ? steps.value : {}, userConfig.value.steps || {})
  })

  /**
   * The tree representation of the form schema.
   *
   * @type {array}
   */
  const tree = computed(() => {
    return collectTree(formSchema.value, hasTabs.value ? formTabs.value : formSteps.value)
  })

  /**
   * The flat tree representation of the form schema.
   *
   * @type {array}
   */
  const flatTree = computed(() => {
    return flattrenTree(tree.value)
  })

  /**
   * The form data including the data of all elements even the ones with `available: false` and `submit: false`.
   *
   * @type {object}
   */
  const data = computed(() => {
    var data = {}

    each(elements$.value, (e$) => {
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

    each(elements$.value, (e$) => {
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
    return some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.dirty === true
    })
  })

  /**
   * Whether the form has any invalid elements.
   *
   * @type {boolean}
   */
  const invalid = computed(() => {
    return some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.invalid === true
    })
  })

  /**
   * Whether the form has any elements with active debounce process.
   *
   * @type {boolean}
   */
  const debouncing = computed(() => {
    return some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.debouncing === true
    })
  })

  /**
   * Whether the form has any elements with pending async validation.
   *
   * @type {boolean}
   */
  const pending = computed(() => {
    return some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.pending === true
    })
  })

  /**
   * Whether each element in the form has been validated at least once.
   *
   * @type {boolean}
   */
  const validated = computed(() => {
    return !some(elements$.value, (element$) => {
      return element$.isStatic === false && element$.available === true && element$.validated === false
    })
  })

  /**
   * Whether the form has any elements with `busy: true` or the [`isLoading`](#property-is-loading), [`preparing`](#property-preparing) or [`submitting`](#property-submitting) property is `true`.
   *
   * @type {boolean}
   */
  const busy = computed(() => {
    return some(elements$.value, (element$) => {
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

    each(filter(elements$.value, { available: true, isStatic: false }), (element$) => {
      each(element$.errors, (error) => {
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
    return hasErrors.value && options.value.displayErrors && errorsRegistered.value
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
    return hasMessages.value && options.value.displayMessages && messagesRegistered.value
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
    return isMultilingual.value && languagesRegistered.value
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
    return !isEmpty(options.value.steps)
  })

  /**
   * Whether the form should show [`FormSteps`](form-steps) component. Returns `true` if [`steps`](#option-steps) has value.
   *
   * @type {boolean}
   */
  const showSteps = computed(() => {
    return hasSteps.value && stepsRegistered.value
  })

  /**
   * Whether the form should display steps controls below form with [`FormStepsControls`](form-steps-control) component when it has [`steps`](#option-steps). Can be disabled with [`stepsControls`](#option-steps-controls).
   *
   * @type {boolean}
   */
  const showStepsControls = computed(() => {
    return hasSteps.value && options.value.stepsControls && stepsRegistered.value
  })

  /**
   * Whether the form has any tabs.
   *
   * @ignore
   * @type {boolean}
   */
  const hasTabs = computed(() => {
    return !isEmpty(options.value.tabs)
  })

  /**
   * Whether the form should show [`FormTabs`](form-tabs) component. Returns `true` if [`tabs`](#option-tabs) has value.
   *
   * @type {boolean}
   */
  const showTabs = computed(() => {
    return hasTabs.value && tabsRegistered.value
  })

  /**
   * The selected theme, extended by local template and class overrides, using [`templates`](#option-replace-templates), [`addClasses`](#option-add-classes) and [`replaceClasses`](#option-replace-classes).
   *
   * @type {object}
   */
  const extendedTheme = computed(() => {
    let presetTemplates = {}

    each(baseConfig.value.config.usePresets.concat(options.value.presets), (presetName) => {
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
        options.value.templates || {},
      ),
    })
  })

  /**
   * The default list of templates available to the form components.
   *
   * @type {object}
   * @private
   */
  const Templates = computed(() => {
    return extendedTheme.value.templates
  })

  /**
   * The component's template.
   *
   * @type {object}
   */
  const template = computed(() => {
    return View.value && Templates.value[`Vueform_${View.value}`]
            ? Templates.value[`Vueform_${View.value}`]
            : Templates.value.Vueform
  })

  /**
   * The component's classes.
   *
   * @type {object}
   */
  const classes = computed(() => {
    return (new MergeClasses({
      component: 'Vueform',
      component$: form$,
      theme: extendedTheme.value,
      config: baseConfig.value.config,
      templates: Templates.value,
      view: View.value,
      locals: options.value,
      merge: [
        options.value
      ],
    })).classes
  })

  /**
   * The resolved default size for each element and component within the form.
   *
   * @type {string}
   */
  const Size = computed(() => {
    let Size

    if (options.value.size) {
      Size = options.value.size
    } else {
      each(baseConfig.value.config.usePresets.concat(options.value.presets), (presetName) => {
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
   * The name of the views for the components within the form.
   *
   * @type {object}
   * @private
   */
  const Views = computed(() => {
    let Views = baseConfig.value.config.views

    each(baseConfig.value.config.usePresets.concat(options.value.presets), (presetName) => {
      let preset = baseConfig.value.config.presets[presetName]
      
      if (!preset || !preset.views) {
        return
      }

      Views = Object.assign({}, Views, preset.views)
    })

    Views = Object.assign({},Views, options.value.views)

    return Views
  })


  /**
   * The name of the resolved view for Vueform component. This one should be used to determine the component's view in class functions.
   *
   * @type {string}
   */
  const View = computed(() => {
    if (options.value.view) {
      return options.value.view
    }
    
    return Views.value.Vueform
  })

  /**
   * The translation tags of the current locale.
   *
   * @type {object}
   */
  const translations = computed(() => {
    let i18n = $this.$vueform.i18n
    let locales = i18n.locales
    let currentLocale = locale.value || i18n.locale
    let fallbackLocale = i18n.fallbackLocale || 'en'


    return currentLocale ? merge({}, locales[fallbackLocale], locales[currentLocale]) : locales[fallbackLocale]
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

    each(elements$.value, (element$) => {
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
   * @returns {Promise}
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
    each(elements$.value, (e$) => {
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
    each(elements$.value, (e$) => {
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
    each(elements$.value, (e$) => {
      if (e$.isStatic) {
        return
      }
      
      e$.clean()
    })
  }
  
  /**
   * Clears the manually added messages from the form's and each element's `messageBag`.
   *
   * @returns {void}
   */
  const clearMessages = () => {
    if (messageBag.value) {
      messageBag.value.clear()
    }

    each(elements$.value, (e$) => {
      if (e$.isStatic) {
        return
      }
      
      e$.clearMessages()
    })
  }

  /**
   * Validates all elements (async) which weren't validated before. If [`validateOn`](#option-validate-on) does not contain `change` it will validate all elements on each call.
   *
   * @public
   * @returns {Promise}
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
    each(elements$.value, (e$) => {
      if (e$.isStatic) {
        return
      }

      e$.resetValidators()
    })
  }

  /**
   * Validates and prepares elements then submits the form (async).
   *
   * @returns {Promise}
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
      fire('error', error, { type: 'prepare' }, form$.value)
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
   * @returns {Promise}
   */
  const send = async () => {
    submitting.value = true

    let response = {}

    try {
      resetValidators()

      const data = options.value.formData(form$.value)

      if (typeof options.value.endpoint === 'function') {
        response = await options.value.endpoint(data, form$.value)
      } else {
        let url = $this.$vueform.config.endpoints[options.value.endpoint]?.url || options.value.endpoint
        let method = $this.$vueform.config.endpoints[options.value.endpoint]?.method || options.value.method

        response = await services.value.axios.request({
          url,
          method: method.toLowerCase(),
          [method.toLowerCase() === 'get' ? 'params' : 'data']: data,
        })
      }

      if (response && !(response instanceof Promise)) {
        if (response?.data?.payload?.updates) {
          update(response.data.payload.updates)
        }
      }

      if (response?.status >= 200 && response?.status < 300) {
        fire('success', response, form$.value)
      } else {
        fire('error', { response }, { type: 'submit' }, form$.value)
      }
    }
    catch (error) {
      fire('error', error, { type: 'submit' }, form$.value)
      console.error(error)
    }
    finally {
      fire('response', response, form$.value)
      submitting.value = false
    }
  }

  /**
  * Prepares all elements to submit (async).
  *
  * @returns {Promise}
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
  * Enables conditions globally.
  *
  * @returns {void}
  */
  const enableConditions = () => {
    conditions.value = true
  }

  /**
  * Disables conditions globally.
  *
  * @returns {void}
  */
  const disableConditions = () => {
    conditions.value = false
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
   * @param {string} path* path of the element
   * @param {object} elements the object of elements to look into (defaults to elements$)
   * @returns {VueformElement|null}
   */
  const el$ = (path, elements) => {
    if (elements === undefined) {
      elements = elements$.value
    }

    if (isEmpty(elements) || !path) {
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
   * @param {string} path* path of the element
   * @returns {void}
   */
  const siblings$ = (path) => {
    if (!/\.+/.test(path)) {
      return elements$.value
    }
    
    return el$(path.match(/.*(?=\.)/)[0])?.children$ || {}
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
  provide('translations', translations)
  provide('config$', config$)

  // ================ HOOKS ===============

  initMessageBag()
  setLanguage(options.value.language)

  onBeforeMount(() => {
    userConfig.value = $this.vueform || {}

    // Manually subscribe to events defined in options object
    each(evts, (evt) => {
      let callback = options.value['on' + upperFirst(evt)]

      if (callback) {
        on(evt, callback)
      }
    })

    fire('beforeMount', $this)
  })

  onMounted(() => {
    mounted.value = true
    
    // Watching model to track old/new values
    watch(data, (n, o) => {
      if (dataEquals(n, o)) {
        return
      }

      fire('change', n, o, $this)
      
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

  // ============== WATCHERS ==============
  
  watch(computed(() => options.value.language), (n, o) => {
    if (n) {
      setLanguage(n)
    }
  })

  return {
    tabs$,
    steps$,
    elements$,
    options,
    validation,
    conditions,
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
    Templates,
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
    tree,
    flatTree,
    translations,
    locale$,
    prepareElements,
    updateModel,
    update,
    load,
    reset,
    clear,
    clean,
    clearMessages,
    validate,
    resetValidators,
    convertFormData,
    submit,
    send,
    disableValidation,
    enableValidation,
    enableConditions,
    disableConditions,
    setLanguage,
    handleSubmit,
    el$,
    siblings$,
    initMessageBag,
    fire,
    on,
    off,
    messagesRegistered,
    errorsRegistered,
    languagesRegistered,
    tabsRegistered,
    stepsRegistered,
  }
}

export default base