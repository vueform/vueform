import { ref } from 'vue'
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
    } = useVueform(props, context)

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
  },
  props: {

    schema: {
      type: Object,
      required: false,
      default: null
    },
    name: {
      type: String,
      required: false,
      default: null,
      private: true,
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
      type: [String, Boolean, Function],
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

    size: {
      required: false,
      type: [String],
      default: null,
    },
    view: {
      required: false,
      type: [String],
      default: null,
    },
    views: {
      required: false,
      type: [Object],
      default: null,
    },
    addClasses: {
      required: false,
      type: [Object],
      default: null
    },
    addClass: {
      required: false,
      type: [Array, Object, String],
      default: null,
    },
    removeClasses: {
      required: false,
      type: [Object],
      default: null
    },
    removeClass: {
      required: false,
      type: [Array, Object],
      default: null,
    },
    replaceClasses: {
      required: false,
      type: [Object],
      default: null
    },
    replaceClass: {
      required: false,
      type: [Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: null
    },
    overrideClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    templates: {
      type: Object,
      required: false,
      default: null
    },
    presets: {
      required: false,
      type: [Array],
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
    locale: {
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
    return this.template.render.apply(this, arguments)
  },
  // staticRenderFns() {
  //   return this.templates.Vueform.staticRenderFns
  // }
}