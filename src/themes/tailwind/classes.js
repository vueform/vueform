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
  ListElement: {
    container: '',
    list: '',
    listItem: 'relative group',
    handle: 'absolute form-w-input form-h-input bg-form-sort-handle bg-center bg-no-repeat left-0 top-0 transform -translate-x-full form-bg-size-2.75 cursor-grab active:cursor-grabbing opacity-0 transition group-hover:opacity-100',
    remove: 'absolute w-0.5 h-0.5 box-content p-1.5 top-px left-px bg-form-remove-light-white bg-black bg-opacity-60 bg-center bg-no-repeat rounded border-2 border-black border-opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition opacity-0 group-hover:opacity-100',
    add: 'form-bg-primary text-white px-2.5 py-1.5 text-sm form-rounded transition hover:form-bg-primary-darker',
    disabled: '',
    sorting: 'is-sorting',
  },
  LocationElement: {
    input: 'w-full form-p-input form-border form-border-color form-rounded',
    ...text,
  },
  MultifileElement: {
    container: '',
    list: '',
    listDefault: '',
    listGallery: 'flex flex-wrap mb-2',
    listItem: 'relative group',
    listItemDefault: '',
    listItemGallery: 'mr-2 mb-2',
    disabled: '',
    selectButton: 'inline-block mb-4 form-p-button leading-snug form-rounded transition bg-gray-100 cursor-pointer hover:bg-gray-200 focus:form-ring focus:outline-none',
    handle: '',
    handleDefault: 'absolute form-w-input form-h-input bg-form-sort-handle bg-center bg-no-repeat left-0 top-0 transform -translate-x-full form-bg-size-2.75 cursor-grab active:cursor-grabbing opacity-0 transition group-hover:opacity-100',
    handleGallery: 'absolute w-px h-px box-content p-1.5 top-1 left-1 mt-px ml-px bg-form-arrows-white bg-black bg-opacity-60 bg-center bg-no-repeat rounded form-border-3.5 border-black border-opacity-0 transition opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing',
    sorting: '',
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
  DragAndDrop: {
    container: 'w-full border border-dashed transition flex flex-col items-center justify-center p-6 cursor-pointer',
    containerInactive: 'form-border-color',
    containerActive: 'form-border-primary form-bg-primary bg-opacity-20',
    icon: 'inline-block w-9 h-8 bg-center bg-contain bg-form-inbox-in',
    title: 'font-semibold mt-3',
    description: '',
  },
  ElementDescription: {
    container: 'text-sm text-gray-500 mt-1',
  },
  ElementError: {
    container: 'text-sm text-red-500',
  },
  ElementInfo: {
    info: 'inline-block w-3.5 h-3.5 bg-form-info bg-opacity-20 bg-center bg-no-repeat relative ml-2 top-px cursor-pointer group',
    wrapper: 'absolute left-5 -top-1.5 -mt-px opacity-0 invisible group-hover:opacity-100 group-hover:form-visible transition z-20 w-52',
    content: 'bg-black bg-opacity-90 text-white rounded-md text-sm py-1 px-2.5 not-italic inline-block relative',
  },
  ElementLabel: {
    label: 'form-py-input-border'
  },
  ElementLabelFloating: {
    wrapper: 'relative',
    label: 'absolute z-10 left-2.5 -top-1.5 leading-none form-text-0.5xs text-gray-500 bg-white px-px transition',
    labelInvisible: 'opacity-0 invisible',
    labelVisible: 'opacity-100 visible',
  },
  ElementLayout: {
    container: '',
    outerWrapper: 'flex flex-wrap',
    outerWrapperSingle: 'mb-4',
    outerWrapperMultiple: '',
    fieldWrapper: '',
    error: 'has-error',
  },
  ElementLayoutInline: {
    container: '',
    error: 'has-error',
  },
  ElementLoader: {
    wrapper: 'relative z-10 order-1',
    loader: 'absolute w-4 h-4 form-mr-input right-full form-top-input mt-1 bg-form-spinner-primary bg-center bg-no-repeat bg-contain animate-spin',
  },
  ElementMessage: {
    container: 'text-sm text-green-500',
  },
  ElementText: {
    before: '',
    between: '',
    after: '',
  },
  FormElements: {
    container: 'flex flex-wrap'
  },
  FormErrors: {
    container: 'bg-red-100 border border-red-200 text-red-700 py-3 px-5 rounded mb-4',
    error: '',
  },
  FormLanguage: {
    container: 'flex-grow flex-shrink w-full',
    wrapper: 'form-rounded text-center py-2 px-4 block',
    wrapperInactive: 'form-text-primary',
    wrapperActive: 'text-white form-bg-primary'
  },
  FormLanguages: {
    container: 'flex items-center justify-between mb-8',
  },
  FormMessages: {
    container: 'bg-green-100 border border-green-200 text-green-500 py-3 px-5 rounded mb-4',
    error: '',
  },
  FormTabs: {
    container: 'flex border-b form-border-color mb-8',
  },
  FormTab: {
    container: '',
    wrapper: 'py-2 px-4 block bg-white -mb-px',
    wrapperActive: 'border form-border-color form-border-b-white rounded-tl rounded-tr',
    wrapperInactive: 'border border-white form-border-b-color',
    wrapperValid: '',
    wrapperInvalid: 'text-red-500',
  },
  FormSteps: {
    container: 'mb-8 flex justify-between overflow-x-auto pt-5',
  },
  FormStep: {
    container: 'form-step',
    wrapper: '',
    containerActive: 'form-step-active',
    containerInactive: '',
    containerInvalid: 'has-errors',
    containerValid: '',
    containerDisabled: 'form-step-disabled',
    containerEnabled: '',
    containerCompleted: 'form-step-completed',
    containerIncompleted: '',
    containerPending: 'form-step-pending',
  },
  FormStepsControl: {
    button: 'px-4 py-2 form-rounded',
    previous: 'text-gray-700 bg-gray-200 transition hover:bg-gray-300 focus:form-ring focus:outline-none',
    next: 'form-bg-primary text-white transition hover:form-bg-primary-darker focus:form-ring focus:outline-none',
    finish: 'form-bg-primary text-white transition hover:form-bg-primary-darker focus:form-ring focus:outline-none',
  },
  FormStepsControls: {
    container: 'flex justify-between mt-4'
  },

  // Slots
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