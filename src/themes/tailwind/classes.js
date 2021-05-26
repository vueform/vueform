const checkbox = {
  input: 'appearance-none transition duration-200 ease-in-out cursor-pointer form-w-checkbox form-h-checkbox form-rounded form-border form-border-color mt-1 mr-1.5 focus:form-ring checked:form-bg-check-white checked:border-0',
  inputEnabled: 'checked:form-bg-primary',
  inputDisabled: 'form-bg-disabled',
}

const radio = {
  input: 'appearance-none transition duration-200 ease-in-out cursor-pointer form-w-checkbox form-h-checkbox rounded-full form-border form-border-color mt-1 mr-1.5 focus:form-ring checked:form-bg-radio-white checked:border-0',
  inputEnabled: 'checked:form-bg-primary',
  inputDisabled: 'form-bg-disabled',
}

export default {
  // Elements
  // ButtonElement: {
  //   button: 'p-form-button leading-snug rounded-form transition',
  //   enabled: 'bg-form-primary text-white cursor-pointer hover:bg-opacity-90',
  //   disabled: 'bg-form-disabled text-form-disabled cursor-not-allowed',
  //   loading: 'bg-form-primary text-white spinner-bg spinner-bg-white bg-opacity-80 cursor-default'
  // },
  TextElement: {
    input: 'w-full form-p-input form-border form-border-color form-rounded',
    inputEnabled: 'focus:form-ring',
    inputDisabled: 'form-bg-disabled form-text-disabled',
    inputContainer: 'w-full',
  },
  TextareaElement: {
    input: 'w-full form-p-input form-border form-border-color form-rounded',
    inputEnabled: 'focus:form-ring',
    inputDisabled: 'form-bg-disabled form-text-disabled',
    inputContainer: 'w-full',
  },
  CheckboxElement: {
    inputContainer: 'flex align-start form-py-input',
    label: 'cursor-pointer',
    ...checkbox,
  },
  CheckboxgroupElement: {
    checkboxGroup: 'flex flex-col justify-start form-py-input',
  },
  RadioElement: {
    inputContainer: 'flex align-start form-py-input',
    label: 'cursor-pointer',
    ...radio,
  },
  TrixElement: {
    trix: 'form-border form-border-color form-rounded',
    trixFocused: 'form-ring',
  },

  // Wrappers
  TrixWrapper: {
    container: '',
  },

  // Components
  ElementLayout: {
    outerWrapper: 'flex',
    outerWrapperSingle: 'mb-4',
  },
  ElementLabel: {
    label: 'form-py-input'
  },
  CheckboxgroupSlotCheckbox: {
    container: 'flex align-start',
    label: 'cursor-pointer',
    ...checkbox,
  },
  RadiogroupSlotRadio: {
    container: 'flex align-start',
    label: 'cursor-pointer',
    ...radio,
  },
}