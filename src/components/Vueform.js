import { ref } from 'composition-api'
import useVueform from './../composables/useVueform'

export default {
  name: 'Vueform',
  emits: ['input', 'update:modelValue', 'change', 'reset', 'clear', 'submit', 'success', 'error', 'response', 'language', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  slots: ['default', 'empty'],
  setup: (props, context) => {
    context.emits = ['input', 'update:modelValue', 'change', 'reset', 'clear', 'submit', 'success', 'error', 'response', 'language', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted']
    context.name = ref('Vueform')
    
    const {
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
      templates,
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
    } = useVueform(props, context)

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
      templates,
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
    }
  },
  props: {

    schema: {
      type: Object,
      required: false,
      default: null
    },
    tabs: {
      type: Object,
      required: false,
      default: null
    },
    steps: {
      type: Object,
      required: false,
      default: null
    },
    stepsControls: {
      type: Boolean,
      required: false,
      default: null,
      '@default': true,
    },

    validateOn: {
      type: String,
      required: false,
      default: null
    },
    displayErrors: {
      type: Boolean,
      required: false,
      default: null
    },
    displayMessages: {
      type: Boolean,
      required: false,
      default: null
    },
    messages: {
      type: Object,
      required: false,
      default: null
    },

    endpoint: {
      type: String,
      required: false,
      default: null
    },
    method: {
      type: String,
      required: false,
      default: null
    },
    prepare: {
      type: Function,
      required: false,
      default: null
    },
    formKey: {
      type: [String, Number],
      required: false,
      default: null
    },
    formData: {
      type: Function,
      required: false,
      default: null
    },

    value: {
      type: Object,
      required: false,
      default: undefined
    },
    modelValue: {
      type: Object,
      required: false,
      default: undefined
    },
    sync: {
      type: Boolean,
      required: false,
      default: false
    },
    default: {
      type: Object,
      required: false,
      default: null
    },
    formatData: {
      type: Function,
      required: false,
      default: null
    },
    formatLoad: {
      type: Function,
      required: false,
      default: null
    },
    
    loading: {
      type: Boolean,
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: null,
    },

    columns: {
      type: Object,
      required: false,
      default: null
    },
    forceLabels: {
      type: Boolean,
      required: false,
      default: null
    },
    floatPlaceholders: {
      type: Boolean,
      required: false,
      default: null
    },
    addClass: {
      required: false,
      type: [Array, Object, String],
      default: null,
    },
    removeClass: {
      required: false,
      type: [Array, Object],
      default: null,
    },
    replaceClass: {
      required: false,
      type: [Object],
      default: null
    },
    overrideClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    removeClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    replaceClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    presets: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    replaceTemplates: {
      type: Object,
      required: false,
      default: null
    },

    multilingual: {
      type: Boolean,
      required: false,
      default: null
    },
    languages: {
      type: Object,
      required: false,
      default: null
    },
    language: {
      type: String,
      required: false,
      default: null
    },

    onChange: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onReset: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onClear: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onSubmit: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onSuccess: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onError: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onLanguage: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onBeforeMount: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onMounted: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onBeforeUpdate: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onUpdated: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onBeforeUnmount: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onUnmounted: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
  },
  render() {
    return this.templates.Vueform.render.apply(this, arguments)
  },
  // staticRenderFns() {
  //   return this.templates.Vueform.staticRenderFns
  // }
}