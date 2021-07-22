const checkbox = {
  input: 'appearance-none transition duration-200 ease-in-out cursor-pointer form-w-checkbox form-h-checkbox form-rounded form-border form-border-color mt-1 mr-1.5 focus:form-ring checked:form-bg-check-white checked:border-0',
  input_enabled: 'checked:form-bg-primary',
  input_disabled: 'form-bg-disabled checked:form-border checked:form-border-color',
}

const radio = {
  input: 'appearance-none transition duration-200 ease-in-out cursor-pointer form-w-checkbox form-h-checkbox rounded-full form-border form-border-color mt-1 mr-1.5 focus:form-ring checked:form-bg-radio-white checked:border-0',
  input_enabled: 'checked:form-bg-primary',
  input_disabled: 'form-bg-disabled checked:form-border checked:form-border-color',
}

const text = {
  input: 'w-full form-p-input form-border form-border-color form-rounded z-1 addon-before:form-rounded-l-none addon-after:form-rounded-r-none',
  input_enabled: 'focus:form-ring',
  input_disabled: 'form-bg-disabled form-text-disabled',
}

const select = {
  container: 'relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-300 form-rounded bg-white text-base leading-normal outline-none',
  containerDisabled: '!cursor-default form-bg-disabled text-gray-400',
  containerOpen: 'form-rounded-b-none',
  containerOpenTop: 'form-rounded-t-none',
  containerActive: 'form-ring',
  search: 'w-full absolute inset-0 outline-none appearance-none box-border border-0 text-base font-sans bg-white form-rounded form-pl-input',
  placeholder: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug form-pl-input text-gray-400',
  caret: 'bg-form-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content form-mr-input relative z-10 flex-shrink-0 flex-grow-0 transition-transform transform',
  caretOpen: 'rotate-180',
  clear: 'form-pr-input relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80',
  clearIcon: 'bg-form-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block',
  spinner: 'bg-form-spinner-primary bg-center bg-no-repeat w-4 h-4 z-10 form-mr-input animate-spin flex-shrink-0 flex-grow-0',
  dropdown: 'absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col form-rounded-b',
  dropdownTop: '-translate-y-full top-px bottom-auto flex-col-reverse form-rounded-b-none form-rounded-t',
  options: 'flex flex-col p-0 m-0 list-none',
  optionsTop: 'flex-col-reverse',
  option: 'flex items-center justify-start box-border text-left cursor-pointer text-base leading-normal form-px-input form-py-input-border',
  optionPointed: 'text-gray-800 bg-gray-100',
  optionSelected: 'text-white form-bg-primary',
  optionDisabled: 'form-text-disabled cursor-not-allowed',
  optionSelectedPointed: 'text-white form-bg-primary opacity-90',
  optionSelectedDisabled: 'text-white form-bg-primary bg-opacity-50 cursor-not-allowed',
  fakeInput: 'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent',
  spacer: 'form-h-input-inner box-content',
}

export default {
  // Elements
  AddressElement: {
    container: '',
    childrenContainer: 'flex flex-wrap',
  },
  ButtonElement: {
    container: '',
    button: 'inline-block form-p-button leading-snug form-rounded transition form-bg-primary text-white focus:outline-none',
    button_enabled: 'cursor-pointer hover:form-bg-primary-darker focus:form-ring',
    button_disabled: 'opacity-60 cursor-not-allowed',
    button_loading: 'form-bg-primary text-white form-bg-spinner-white opacity-60 cursor-not-allowed'
  },
  CheckboxElement: {
    container: '',
    wrapper: '',
    inputContainer: 'flex align-start form-pt-input-border',
    label: 'cursor-pointer',
    ...checkbox,
  },
  CheckboxgroupElement: {
    container: '',
    checkboxGroup: 'flex flex-col justify-start form-pt-input-border',
  },
  DateElement: {
    container: '',
    inputContainer: 'w-full flex',
    ...text,
  },
  DatesElement: {
    container: '',
    inputContainer: 'w-full flex',
    ...text,
  },
  FileElement: {
    container: '',
    container_removing: 'opacity-50',
    button: 'inline-block form-p-button leading-snug form-rounded transition focus:form-ring focus:outline-none',
    button_enabled: 'bg-gray-100 cursor-pointer hover:bg-gray-200',
    button_disabled: 'opacity-50 bg-gray-100 cursor-not-allowed',
  },
  GroupElement: {
    container: '',
    childrenContainer: 'flex flex-wrap',
  },
  ListElement: {
    container: '',
    list: '',
    list_disabled: '',
    list_sorting: '',
    listItem: 'relative group ghost:opacity-60',
    handle: 'absolute form-w-input form-h-input bg-form-sort-handle bg-center bg-no-repeat left-0 top-0 transform -translate-x-full form-bg-size-2.75 cursor-grab active:cursor-grabbing opacity-0 transition group-hover:opacity-100',
    remove: 'absolute z-1 w-0.5 h-0.5 box-content p-1.5 top-px left-px bg-form-remove-light-white bg-black bg-opacity-60 bg-center bg-no-repeat rounded border-2 border-black border-opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition opacity-0 group-hover:opacity-100',
    add: 'form-bg-primary text-white px-2.5 py-1.5 text-sm form-rounded transition hover:form-bg-primary-darker',
  },
  LocationElement: {
    container: '',
    inputContainer: 'w-full flex',
    input: 'w-full form-p-input form-border form-border-color form-rounded',
    ...text,
  },
  MultifileElement: {
    container: '',
    list: '',
    list_disabled: '',
    list_sorting: '',
    list_default: '',
    list_gallery: 'flex flex-wrap mb-2',
    listItem: 'relative group ghost:opacity-60',
    listItem_default: '',
    listItem_gallery: 'mr-2 mb-2',
    handle: '',
    handle_default: 'absolute form-w-input form-h-input bg-form-sort-handle bg-center bg-no-repeat left-0 top-0 transform -translate-x-full form-bg-size-2.75 cursor-grab active:cursor-grabbing opacity-0 transition group-hover:opacity-100',
    handle_gallery: 'absolute w-px h-px box-content p-1.5 top-1 left-1 mt-px ml-px bg-form-arrows-white bg-black bg-opacity-60 bg-center bg-no-repeat rounded form-border-3.5 border-black border-opacity-0 transition opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing',
    button: 'inline-block mb-4 form-p-button leading-snug form-rounded transition focus:form-ring focus:outline-none',
    button_enabled: 'bg-gray-100 cursor-pointer hover:bg-gray-200',
    button_disabled: 'opacity-50 bg-gray-100 cursor-not-allowed',
  },
  MultiselectElement: {
    container: '',
    input: 'w-full form-p-input form-border form-border-color form-rounded',
    input_enabled: 'focus:form-ring',
    input_disabled: 'form-bg-disabled form-text-disabled',
    inputWrapper: '',
    select: {
      ...select,
    }
  },
  ObjectElement: {
    container: '',
    childrenContainer: 'flex flex-wrap',
  },
  RadioElement: {
    container: '',
    wrapper: '',
    inputContainer: 'flex align-start form-pt-input-border',
    label: 'cursor-pointer',
    ...radio,
  },
  RadiogroupElement: {
    container: '',
    radioGroup: 'flex flex-col justify-start form-pt-input-border',
  },
  SelectElement: {
    container: '',
    input: 'w-full form-p-input form-border form-border-color form-rounded',
    input_enabled: 'focus:form-ring',
    input_disabled: 'form-bg-disabled form-text-disabled',
    inputWrapper: 'relative',
    inputPlaceholder: 'absolute left-0 top-0 form-pt-input form-pl-input ml-px text-gray-400 pointer-events-none',
    select: {
      ...select,
    }
  },
  SliderElement: {
    container: '',
    wrapper: 'mt-4',
    slider: {
      target: 'relative box-border user-select-none touch-none tap-highlight-transparent touch-callout-none disabled:cursor-not-allowed',
      focused: 'slider-focused',
      tooltipFocus: 'slider-tooltip-focus',
      tooltipDrag: 'slider-tooltip-drag',
      ltr: 'slider-ltr',
      rtl: 'slider-rtl',
      horizontal: 'slider-horizontal h-1.5',
      vertical: 'slider-vertical w-1.5 h-80',
      textDirectionRtl: 'slider-txt-rtl',
      textDirectionLtr: 'slider-txt-ltr',
      base: 'w-full h-full relative z-1 bg-gray-300 rounded',
      connects: 'w-full h-full relative overflow-hidden z-0 rounded',
      connect: 'absolute z-1 top-0 right-0 transform-origin-0 transform-style-flat h-full w-full form-bg-primary cursor-pointer tap:duration-300 tap:transition-transform disabled:form-bg-disabled-darker disabled:cursor-not-allowed',
      origin: 'slider-origin absolute z-1 top-0 right-0 transform-origin-0 transform-style-flat h-1/10 w-1/10 h:h-0 txt-rtl-h:left-0 txt-rtl-h:right-auto v:w-0 tap:duration-300 tap:transition-transform',
      handle: 'absolute rounded-full bg-white border-0 shadow-slider cursor-grab focus:outline-none h:w-4 h:h-4 h:-top-1.5 h:-right-2 txt-rtl-h:-left-2 txt-rtl-h:right-auto v:w-4 v:h-4 v:-top-2 v:-right-1.25 disabled:cursor-not-allowed focus:form-ring',
      touchArea: 'h-full w-full',
      tooltip: 'absolute block text-sm font-semibold whitespace-nowrap py-0.5 px-1.5 min-w-5 text-center text-white rounded border form-border-primary form-bg-primary transform h:-translate-x-1/2 h:left-1/2 h:bottom-6 h:arrow-bottom v:-translate-y-1/2 v:top-1/2 v:right-6 v:arrow-right disabled:form-bg-disabled-darker disabled:form-border-disabled-darker merge-h:translate-x-1/2 merge-h:left-auto merge-h:bottom-3.5 merge-v:-translate-x-4 merge-v:top-auto merge-v:right-1 tt-focus:hidden tt-focused:block tt-drag:hidden tt-dragging:block',
      tooltipHidden: 'slider-tooltip-hidden',
      active: 'slider-active shadow-slider-active cursor-grabbing',
      draggable: 'cursor-ew-resize v:cursor-ns-resize',
      tap: 'slider-state-tap',
      drag: 'slider-state-drag',
    }
  },
  StaticElement: {
    container: '',
    content: 'form-pt-input-border',
  },
  TagsElement: {
    container: '',
    select: {
      ...select,
      tags: 'flex-grow flex-shrink flex flex-wrap items-center mt-1 form-pl-input-y',
      tagsSearch: 'h-full border-0 outline-none appearance-none p-0 text-base font-sans mx-1 mb-1 box-border flex-grow flex-shrink',
    }
  },
  TextareaElement: {
    container: '',
    inputContainer: 'w-full flex',
    ...text,
  },
  TextElement: {
    container: '',
    inputContainer: 'w-full flex',
    ...text,
  },
  ToggleElement: {
    container: '',
    wrapper: 'form-pt-input-border flex items-center',
    text: 'ml-2',
    toggle: {
      container: 'inline-block rounded-full outline-none focus:form-ring',
      toggle: 'flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
      toggleOn: 'form-bg-primary form-border-primary justify-start text-white',
      toggleOff: 'bg-gray-300 border-gray-300 justify-end text-gray-700',
      toggleOnDisabled: 'form-bg-primary form-border-primary opacity-50 justify-start text-white cursor-not-allowed',
      toggleOffDisabled: 'bg-gray-300 border-gray-300 opacity-50 justify-end text-gray-700 cursor-not-allowed',
      handle: 'inline-block bg-white w-5 h-5 top-0 rounded-full absolute transition-all',
      handleOn: 'left-full transform -translate-x-full',
      handleOff: 'left-0',
      handleOnDisabled: 'left-full transform -translate-x-full',
      handleOffDisabled: 'left-0',
      label: 'text-center w-8 border-box whitespace-nowrap select-none',
    }
  },
  TrixElement: {
    container: '',
    input: 'form-border form-border-color form-rounded',
    input_enabled: '',
    input_disabled: 'is-disabled form-bg-disabled form-text-disabled',
    input_focused: 'form-ring',
  },
  TTextareaElement: {
    container: '',
    inputContainer: 'w-full flex',
    ...text,
  },
  TTextElement: {
    container: '',
    inputContainer: 'w-full flex',
    ...text,
  },
  TTrixElement: {
    container: '',
    input: 'form-border form-border-color form-rounded',
    input_enabled: '',
    input_disabled: 'is-disabled form-bg-disabled form-text-disabled',
    input_focused: 'form-ring',
  },

  // Wrappers
  FlatpickrWrapper: {
    flatpickr: '',
    calendarContainer: ''
  },
  TrixWrapper: {
    container: '',
  },

  // Components
  DragAndDrop: {
    container: 'w-full border border-dashed transition flex flex-col items-center justify-center p-6 cursor-pointer mb-4',
    container_inactive: 'form-border-color',
    container_active: 'form-border-primary form-bg-primary bg-opacity-20',
    container_enabled: '',
    container_disabled: 'opacity-50 bg-gray-50 cursor-not-allowed',
    icon: 'inline-block w-9 h-8 bg-center bg-contain bg-form-inbox-in',
    title: 'font-semibold mt-3',
    description: '',
  },
  ElementAddon: {
    container: 'form-p-input form-border form-border-color bg-gray-100 flex items-center',
    container_before: 'form-addon-before !form-border-r-0 form-rounded-l',
    container_after: 'form-addon-after !form-border-l-0 form-rounded-r order-2',
    wrapper: '',
  },
  ElementDescription: {
    container: 'text-sm text-gray-500 mt-1',
  },
  ElementError: {
    container: 'text-sm text-red-500 block mt-1',
  },
  ElementInfo: {
    container: 'inline-block w-3.5 h-3.5 bg-form-info bg-opacity-20 bg-center bg-no-repeat relative ml-2 top-px cursor-pointer group',
    wrapper: 'absolute left-5 -top-1.5 -mt-px opacity-0 invisible group-hover:opacity-100 group-hover:form-visible transition z-20 w-52',
    content: 'bg-black bg-opacity-90 text-white rounded-md text-sm py-1 px-2.5 not-italic inline-block relative',
  },
  ElementLabel: {
    container: 'form-py-input-border pr-4'
  },
  ElementLabelFloating: {
    container: 'relative',
    label: 'absolute z-10 left-2.5 -top-1.5 leading-none form-text-0.5xs text-gray-500 bg-white px-px transition whitespace-nowrap',
    label_invisible: 'opacity-0 invisible',
    label_visible: 'opacity-100 visible',
  },
  ElementLayout: {
    container: '',
    container_error: 'has-error',
    outerWrapper: 'flex flex-wrap',
    outerWrapper_single: 'mb-4',
    outerWrapper_multiple: '',
    fieldWrapper: '',
  },
  ElementLayoutInline: {
    container: '',
    container_error: 'has-error',
  },
  ElementLoader: {
    container: 'relative z-10 order-1',
    loader: 'absolute w-4 h-4 form-mr-input right-full form-top-input mt-1 bg-form-spinner-primary bg-center bg-no-repeat bg-contain animate-spin',
  },
  ElementMessage: {
    container: 'text-sm text-green-500 block',
  },
  ElementText: {
    container: '',
    container_before: '',
    container_between: '',
    container_after: '',
  },
  FormElements: {
    container: 'flex flex-wrap'
  },
  FormErrors: {
    container: 'bg-red-100 text-red-500 py-3 px-5 rounded mb-4',
    error: '',
  },
  FormLanguage: {
    container: 'flex-grow flex-shrink w-full',
    wrapper: 'form-rounded text-center py-2 px-4 block',
    wrapper_inactive: 'form-text-primary',
    wrapper_active: 'text-white form-bg-primary'
  },
  FormLanguages: {
    container: 'flex items-center justify-between mb-8',
  },
  FormMessages: {
    container: 'bg-green-100 text-green-500 py-3 px-5 rounded mb-4',
    message: '',
  },
  FormStep: {
    container: 'form-step',
    wrapper: '',
    container_active: 'form-step-active',
    container_inactive: '',
    container_invalid: 'has-errors',
    container_valid: '',
    container_disabled: 'form-step-disabled',
    container_enabled: '',
    container_completed: 'form-step-completed',
    container_incompleted: '',
    container_pending: 'form-step-pending',
  },
  FormSteps: {
    container: 'mb-8 flex justify-between overflow-x-auto pt-5',
  },
  FormStepsControl: {
    button: 'px-4 py-2 form-rounded',
    button_previous: 'text-gray-700 bg-gray-200 transition hover:bg-gray-300 focus:form-ring focus:outline-none',
    button_next: 'form-bg-primary text-white transition hover:form-bg-primary-darker focus:form-ring focus:outline-none',
    button_finish: 'form-bg-primary text-white transition hover:form-bg-primary-darker focus:form-ring focus:outline-none',
  },
  FormStepsControls: {
    container: 'flex justify-between mt-4'
  },
  FormTab: {
    container: '',
    wrapper: 'py-2 px-4 block bg-white -mb-px',
    wrapper_active: 'border form-border-color form-border-b-white rounded-tl rounded-tr',
    wrapper_inactive: 'border border-white form-border-b-color',
    wrapper_valid: '',
    wrapper_invalid: 'text-red-500',
  },
  FormTabs: {
    container: 'flex border-b form-border-color mb-8 items-end',
  },
  Laraform: {
    form: '',
  },

  // Slots
  CheckboxgroupSlotCheckbox: {
    container: 'flex align-start',
    label: 'cursor-pointer',
    ...checkbox,
  },
  FileSlotFilePreview: {
    container: 'form-py-input flex justify-start flex-row group relative',
    wrapper: 'flex justify-between items-center w-full',
    file: 'flex items-center',
    filenameLink: 'hover:underline',
    filenameStatic: '',
    actions: 'flex items-center',
    percent: 'flex justify-between items-center text-sm text-gray-500 group-hover:form-hidden',
    upload: 'form-bg-primary text-white form-rounded text-xs py-0.5 px-1.5 ml-1.5 whitespace-nowrap transition hover:form-bg-primary-darker focus:form-ring',
    remove: 'form-hidden group-hover:form-inline-block',
    progressBar: 'bg-gray-200 h-0.75 absolute bottom-0 w-full',
    progress: 'w-0 form-bg-primary transition-all ease-out duration-500 h-0.75',
    iconWarning: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-form-exclamation-solid-red-500 bg-red-200 form-bg-size-2.5 rounded-full group-hover:form-hidden',
    iconUploaded: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-form-check-solid-green-500 bg-green-200 form-bg-size-2.5 rounded-full group-hover:form-hidden',
    iconRemove: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-gray-200 form-bg-size-3 rounded-full hover:bg-gray-300 transition bg-form-remove-light',
  },
  FileSlotGalleryPreview: {
    container: 'flex justify-start flex-col transition duration-500 form-w-gallery form-h-gallery relative group',
    image: 'w-full h-full bg-gray-100 form-rounded',
    image_link: '',
    image_static: '',
    img: 'w-full h-full form-rounded object-cover form-hide-empty-img',
    overlay: 'absolute inset-0 bg-white bg-opacity-50 transition duration-300 opacity-0 invisible flex items-center justify-center p-3 form-rounded group-hover:form-visible group-hover:opacity-100',
    upload: 'relative z-1 form-bg-primary text-white bg-opacity-100 form-rounded text-xs py-0.5 px-1.5 whitespace-nowrap transition hover:form-bg-primary-darker focus:form-ring',
    remove: 'absolute top-0.5 right-0.5 mt-px mr-px form-hidden group-hover:form-inline-block',
    progressBar: 'bg-white absolute left-1 right-1 bottom-1 h-0.75',
    progress: 'w-0 form-bg-primary transition-all ease-out duration-500 h-0.75',
    iconWarning: 'absolute right-0.5 bottom-0.5 mr-px mb-px flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-form-exclamation-solid-red-500 bg-red-200 form-bg-size-2.5 rounded-full',
    iconUploaded: 'absolute right-0.5 bottom-0.5 mr-px mb-px flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-form-check-solid-green-500 bg-green-200 form-bg-size-2.5 rounded-full',
    iconRemove: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-gray-200 form-bg-size-3 rounded-full hover:bg-gray-300 transition bg-form-remove-light',
  },
  FileSlotImagePreview: {
    container: 'flex justify-start flex-row group relative',
    wrapper: 'flex justify-between items-center w-full',
    image: 'flex items-center bg-gray-100 form-rounded flex-grow-0 flex-shrink-0',
    image_link: '',
    image_static: '',
    img: 'form-w-input form-h-input form-rounded form-hide-empty-img object-cover',
    file: 'flex items-center flex-grow flex-shrink ml-2.5',
    filenameLink: 'hover:underline',
    filenameStatic: '',
    actions: 'flex items-center',
    percent: 'flex justify-between items-center text-sm text-gray-500 group-hover:form-hidden',
    upload: 'form-bg-primary text-white form-rounded text-xs py-0.5 px-1.5 ml-1.5 whitespace-nowrap transition hover:form-bg-primary-darker focus:form-ring',
    remove: 'form-hidden group-hover:form-inline-block',
    progressBar: 'bg-gray-200 h-0.75 form-left-input ml-2.5 absolute bottom-0 right-0',
    progress: 'w-0 form-bg-primary transition-all ease-out duration-500 h-0.75',
    iconWarning: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-form-exclamation-solid-red-500 bg-red-200 form-bg-size-2.5 rounded-full group-hover:form-hidden',
    iconUploaded: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-form-check-solid-green-500 bg-green-200 form-bg-size-2.5 rounded-full group-hover:form-hidden',
    iconRemove: 'flex w-4 h-4 items-center justify-center bg-no-repeat bg-center bg-gray-200 form-bg-size-3 rounded-full hover:bg-gray-300 transition bg-form-remove-light',
  },
  MultiselectSlotMultipleLabel: {
    container: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug form-pl-input',
  },
  MultiselectSlotNoOptions: {
    container: 'text-base leading-normal form-p-input text-gray-600 bg-white',
  },
  MultiselectSlotNoResults: {
    container: 'text-base leading-normal form-p-input text-gray-600 bg-white',
  },
  MultiselectSlotOption: {
    container: '',
  },
  MultiselectSlotSingleLabel: {
    container: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug form-pl-input',
  },
  MultiselectSlotTag: {
    container: 'form-bg-primary text-white text-sm font-semibold py-px pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap',
    container_disabled: 'pr-2 !form-bg-disabled-darker text-white',
    remove: 'flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group',
    removeIcon: 'bg-form-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60',
  },
  RadiogroupSlotRadio: {
    container: 'flex align-start',
    label: 'cursor-pointer',
    ...radio,
  },
}