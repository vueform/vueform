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

const text = {
  input: 'w-full form-p-input form-border form-border-color form-rounded',
  inputEnabled: 'focus:form-ring',
  inputDisabled: 'form-bg-disabled form-text-disabled',
}

export default {
  // Elements
  ButtonElement: {
    button: 'inline-block form-p-button leading-snug form-rounded transition focus:outline-none',
    enabled: 'form-bg-primary text-white cursor-pointer hover:form-bg-primary-darker focus:form-ring',
    disabled: 'form-bg-disabled form-text-disabled cursor-not-allowed',
    loading: 'form-bg-primary text-white form-bg-spinner-white opacity-70 cursor-default'
  },
  CheckboxElement: {
    inputContainer: 'flex align-start form-pt-input-border',
    label: 'cursor-pointer',
    ...checkbox,
  },
  CheckboxgroupElement: {
    checkboxGroup: 'flex flex-col justify-start form-pt-input-border',
  },
  DateElement: {
    inputContainer: 'w-full flex',
    ...text,
  },
  DatesElement: {
    inputContainer: 'w-full flex',
    ...text,
  },
  FileElement: {
    selectButton: 'inline-block form-p-button leading-snug form-rounded transition bg-gray-100 cursor-pointer hover:bg-gray-200 focus:form-ring focus:outline-none',
    removing: 'opacity-50',
  },
  GroupElement: {
    childrenContainer: 'flex flex-wrap',
  },
  LocationElement: {
    input: 'w-full form-p-input form-border form-border-color form-rounded',
    ...text,
  },
  ObjectElement: {
    childrenContainer: 'flex flex-wrap',
  },
  RadioElement: {
    inputContainer: 'flex align-start form-pt-input-border',
    label: 'cursor-pointer',
    ...radio,
  },
  RadiogroupElement: {
    radioGroup: 'flex flex-col justify-start form-pt-input-border',
  },
  StaticElement: {
    content: 'form-pt-input-border',
  },
  TextareaElement: {
    inputContainer: 'w-full flex',
    ...text,
  },
  TextElement: {
    inputContainer: 'w-full flex',
    ...text,
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
    outerWrapper: 'flex flex-wrap',
    outerWrapperSingle: 'mb-4',
  },
  ElementLabel: {
    label: 'form-py-input-border'
  },
  CheckboxgroupSlotCheckbox: {
    container: 'flex align-start',
    label: 'cursor-pointer',
    ...checkbox,
  },
  FileSlotFilePreview: {
    preview: 'form-py-input flex justify-start flex-col transition duration-500 hover:bg-gray-50 group',
    info: 'flex justify-between items-center',
    filename: 'flex items-center pl-1',
    filenameLink: 'hover:underline',
    filenameStatic: '',
    actions: 'flex items-center pr-1',
    percent: 'flex justify-between items-center text-sm text-gray-500 mr-2 group-hover:form-hidden',
    upload: 'form-bg-primary text-white form-rounded text-xs py-0.5 px-2 font-semibold mr-2.5 whitespace-nowrap focus:form-ring',
    remove: 'mr-2 form-hidden group-hover:form-inline-block',
    progress: 'bg-gray-200 form-mt-input -form-mb-input rounded-none h-1',
    progressBar: 'form-bg-primary h-1 rounded-none',
    iconWarning: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center mr-1.5 bg-form-error',
    iconUploaded: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center mr-1.5 bg-form-file-check',
    iconFile: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center mr-1.5 bg-form-file',
    iconRemove: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-form-remove-light',
  },
  FileSlotImagePreview: {
    preview: 'px-1.5 form-py-input form-border form-border-color form-rounded form-min-h-input flex justify-start flex-col transition duration-500 hover:bg-gray-100 group',
    info: 'flex justify-between items-center',
    previewContainer: 'flex items-center',
    previewImage: 'form-max-w-30 form-max-h-30 mr-1.5',
    previewLinkWrapper: 'flex items-center group',
    previewStaticWrapper: 'flex items-center',
    filenameLink: 'group-hover:underline',
    filenameStatic: '',
    actions: 'flex items-center pr-1',
    percent: 'flex justify-between items-center text-sm text-gray-500 group-hover:form-hidden',
    upload: 'form-bg-primary text-white form-rounded text-xs py-0.5 px-2 ml-2 font-semibold whitespace-nowrap focus:form-ring',
    remove: 'form-hidden group-hover:form-inline-block',
    progress: 'bg-gray-200 form-mt-input rounded-none h-1',
    progressBar: 'form-bg-primary h-1 rounded-none',
    iconWarning: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center mr-1.5 bg-form-error',
    iconUploaded: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center ml-2 bg-form-check-circle',
    iconRemove: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-form-remove-light',
  },
  FileSlotGalleryPreview: {
    preview: 'p-1 form-border form-border-color form-rounded flex justify-start flex-col transition duration-500 form-w-30 form-h-30 relative group',
    previewContainer: 'w-full h-full',
    previewImage: 'w-full h-full object-cover',
    overlay: 'absolute inset-0 bg-black bg-opacity-90 transition duration-300 opacity-0 invisible flex items-center justify-center p-3 form-rounded group-hover:form-visible group-hover:opacity-100',
    upload: 'absolute inset-0 flex items-center justify-center p-3 leading-snug text-center text-sm text-white',
    remove: 'absolute right-1 top-1 p-0.5 bg-black bg-opacity-90 form-rounded opacity-0 invisible transition duration-300 group-hover:form-visible group-hover:opacity-100',
    progress: 'bg-white rounded-none absolute left-1 right-1 bottom-1 pt-1',
    progressBar: 'form-bg-primary h-1 rounded-none',
    iconWarning: 'flex w-5 h-5 p-1 items-center justify-center absolute right-0 bottom-0 bg-white border-2 border-white form-rounded bg-no-repeat bg-center bg-form-error',
    iconUploaded: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center ml-2 bg-form-check-circle',
    iconRemove: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-form-remove-light-white',
  },
  RadiogroupSlotRadio: {
    container: 'flex align-start',
    label: 'cursor-pointer',
    ...radio,
  },
}