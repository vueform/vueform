import { computed } from 'composition-api'
import useLaraform from './../composables/useLaraform'

export default {
  name: 'Laraform',
  emits: ['input', 'update:modelValue', 'language', 'change', 'submit', 'success', 'fail', 'reset', 'clear', 'error'],
  slots: ['default', 'empty'],
  setup: (props, context) => {
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
      updating,
      events,
      listeners,
      internalData,
      data,
      output,
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
      extendedClasses,
      extendedComponents,
      selectedTheme,
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
    } = useLaraform(props, context)

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
  render() {
    return this.extendedTheme.components.Laraform.render.apply(this, arguments)
  },
  props: {
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
    disabled: {
      type: Boolean,
      required: false,
      default: null,
    },
    loading: {
      type: Boolean,
      required: false,
      default: null,
    },
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
    overrideClasses: {
      type: Object,
      required: false,
      default: null
    },
    addClasses: {
      type: Object,
      required: false,
      default: null
    },
    components: {
      type: Object,
      required: false,
      default: null
    },
    elements: {
      type: Object,
      required: false,
      default: null
    },
    messages: {
      type: Object,
      required: false,
      default: null
    },
    columns: {
      type: Object,
      required: false,
      default: null
    },
    languages: {
      type: Object,
      required: false,
      default: null
    },
    addClass: {
      type: [String, Array, Object],
      required: false,
      default: null
    },
    formKey: {
      type: [String, Number],
      required: false,
      default: null
    },
    theme: {
      type: String,
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
    formData: {
      type: Function,
      required: false,
      default: null
    },
    language: {
      type: String,
      required: false,
      default: null
    },
    validateOn: {
      type: String,
      required: false,
      default: null
    },
    labels: {
      type: Boolean,
      required: false,
      default: null
    },
    multilingual: {
      type: Boolean,
      required: false,
      default: null
    },
    stepsControls: {
      type: Boolean,
      required: false,
      default: null
    },
    displayErrors: {
      type: Boolean,
      required: false,
      default: null
    },
    formatLoad: {
      type: Function,
      required: false,
      default: null
    },
    formatData: {
      type: Function,
      required: false,
      default: null
    },
    prepare: {
      type: Function,
      required: false,
      default: null
    },
  },
}