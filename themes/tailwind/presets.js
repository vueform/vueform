const add = {
  inputs: {
    inputContainer: 'h-full',
    inputContainer_focused: 'relative z-1',
  },
  textareas: {
    inputContainer: 'h-full',
    inputContainer_focused: 'relative z-1',
    input: 'min-h-full',
  },
  selects: {
    input: 'h-full focus:relative focus:z-1',
    inputWrapper: 'h-full',
    inputCaret: 'z-[2]',
    select: {
      container: 'h-full',
      containerActive: 'relative z-1',
      wrapper: 'h-full',
    }
  },
  editors: {
    input: 'h-full flex flex-col [&>trix-editor]:h-full',
    input_focused: 'relative z-1',
  },
  groups: {
    wrapper: 'h-full',
  },
}

const replace = {
  inputs: {
    inputContainer_sm: { 'form-h-input-height-sm': 'form-min-h-input-height-sm' },
    inputContainer_md: { 'form-h-input-height': 'form-min-h-input-height' },
    inputContainer_lg: { 'form-h-input-height-lg': 'form-min-h-input-height-lg' },
  },
  groups: {
    container: {
      'form-view-default': 'px-2 py-1',
      'form-view-tabs': '',
      'form-view-blocks': '[&_label:first-of-type>div]:border-t-0',
      'form-view-tabs': '[&_label:first-of-type>div]:border-l-0',
    },
  },
  groupItems: {
    container: {
      'form-view-tabs': '[&>div]:border-b-0 [&>div]:border-t-0 [&>div]:border-r-0',
      'form-view-blocks': 'flex-1 [&>div]:border-l-0 [&>div]:border-b-0 [&>div]:border-r-0',
    }
  }
}

const remove = {
  inputs: {
    inputContainer: ['form-border-width-input'],
    inputContainer_sm: ['form-radius-input-sm'],
    inputContainer_md: ['form-radius-input'],
    inputContainer_lg: ['form-radius-input-lg'],
    input_sm: ['form-radius-input-sm'],
    input_md: ['form-radius-input'],
    input_lg: ['form-radius-input-lg'],
  },
  textareas: {
    inputContainer: ['form-border-width-input'],
    inputContainer_sm: ['form-radius-large-sm'],
    inputContainer_md: ['form-radius-large'],
    inputContainer_lg: ['form-radius-large-lg'],
    input_sm: ['form-radius-large-sm'],
    input_md: ['form-radius-large'],
    input_lg: ['form-radius-large-lg'],
  },
  selects: {
    input: ['form-border-width-input'],
    input_sm: ['form-radius-input-sm'],
    input_md: ['form-radius-input'],
    input_lg: ['form-radius-input-lg'],
    select: {
      container: ['form-border-width-input'],
      container_sm: ['form-radius-input-sm'],
      container_md: ['form-radius-input'],
      container_lg: ['form-radius-input-lg'],
    },
  },
  editors: {
    input: ['form-border-width-input'],
    input_sm: ['form-radius-large-sm'],
    input_md: ['form-radius-large'],
    input_lg: ['form-radius-large-lg'],
  },
  files: {
    button_sm: ['form-radius-btn-sm'],
    button_md: ['form-radius-btn'],
    button_lg: ['form-radius-btn-lg'],
    button_enabled: ['hover:scale-105']
  },
  groups: {
    wrapper_sm: ['form-radius-large-sm'],
    wrapper_md: ['form-radius-large'],
    wrapper_lg: ['form-radius-large-lg'],
  },
  groupItems: {
    container_sm: ['form-radius-large-sm'],
    container_md: ['form-radius-large'],
    container_lg: ['form-radius-large-lg'],
    wrapper_first_sm: ['form-radius-input-l-sm', 'form-radius-large-t-sm'],
    wrapper_first_md: ['form-radius-input-l', 'form-radius-large-t'],
    wrapper_first_lg: ['form-radius-input-l-lg', 'form-radius-large-t-lg'],
    wrapper_last_sm: ['form-radius-input-r-sm', 'form-radius-large-b-sm'],
    wrapper_last_md: ['form-radius-input-r', 'form-radius-large-b'],
    wrapper_last_lg: ['form-radius-input-r-lg', 'form-radius-large-b-lg'],
  },
}

const tableInputs = {
  add: {
    TextElement: add.inputs,
    TTextElement: add.inputs,
    LocationElement: add.inputs,
    PhoneElement: add.inputs,
    DateElement: add.inputs,
    DatesElement: add.inputs,
    TextareaElement: add.textareas,
    TTextareaElement: add.textareas,
    SelectElement: add.selects,
    MultiselectElement: add.selects,
    TagsElement: {
      select: add.selects.select,
    },
    EditorElement: add.editors,
    TEditorElement: add.editors,
    CheckboxgroupElement: add.groups,
    CheckboxgroupCheckbox: add.groupItems,
    RadiogroupElement: add.groups,
    RadiogroupRadio: add.groupItems,
    ButtonElement: {
      button_enabled: 'hover:brightness-95',
      button_not_full: 'w-full',
    },
    FileElement: {
      button: 'text-center w-full focus:relative focus:z-1 hover:brightness-95',
    },
    FilePreview: {
      wrapper: 'py-1 px-1'
    },
    MultifileElement: {
      button: 'text-center w-full focus:relative focus:z-1 hover:brightness-95',
      list: 'py-1 px-1'
    },
    SliderElement: {
      wrapper: 'h-full w-full flex items-center justify-center',
      slider: {
        target: 'w-full mx-4'
      }
    },
    SignatureElement: {
      wrapper: 'min-w-[100px]',
    },
    StaticElement: {
      content: 'h-full'
    },
    ElementLayout: {
      outerWrapper: 'h-full',
      innerWrapperBefore: 'hidden form-inner-wrapper-before',
      innerWrapper: 'h-full',
      innerWrapperAfter: 'hidden form-inner-wrapper-after',
    },
  },
  replace: {
    TextElement: replace.inputs,
    TTextElement: replace.inputs,
    DateElement: replace.inputs,
    DatesElement: replace.inputs,
    LocationElement: replace.inputs,
    PhoneElement: replace.inputs,
    CheckboxgroupElement: replace.groups,
    RadiogroupElement: replace.groups,
    CheckboxgroupCheckbox: replace.groupItems,
    RadiogroupRadio: replace.groupItems,
  },
  remove: {
    TextElement: remove.inputs,
    DateElement: remove.inputs,
    DatesElement: remove.inputs,
    TTextElement: remove.inputs,
    LocationElement: remove.inputs,
    PhoneElement: remove.inputs,
    TextareaElement: remove.textareas,
    TTextareaElement: remove.textareas,
    SelectElement: remove.selects,
    MultiselectElement: remove.selects,
    TagsElement: {
      select: remove.selects.select,
    },
    EditorElement: remove.editors,
    TEditorElement: remove.editors,
    ButtonElement: {
      button_sm: ['form-radius-btn-sm'],
      button_md: ['form-radius-btn'],
      button_lg: ['form-radius-btn-lg'],
      button_enabled: ['hover:scale-105']
    },
    FileElement: remove.files,
    MultifileElement: {
      ...remove.files,
      list_md: ['form-mt-gutter'],
    },
    CheckboxgroupElement: remove.groups,
    RadiogroupElement: remove.groups,
    CheckboxgroupCheckbox: remove.groupItems,
    RadiogroupRadio: remove.groupItems,
    SignatureElement: {
      wrapper: ['form-border-width-input'],
      wrapper_sm: ['form-radius-large-sm'],
      wrapper_md: ['form-radius-large'],
      wrapper_lg: ['form-radius-large-lg'],
    },
  },
}

export default {
  'matrix-table': {
    addClasses: {
      MatrixElement: {
        container: '[&>div>div>.form-inner-wrapper-after]:!block [&>div>div>.form-inner-wrapper-before]:!block',
        grid: 'form-border-width-table !border-l-0 !border-t-0 form-border-color-table !gap-0',
        headerFirst: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table form-bg-table-header',
        header: 'form-border-width-table !border-r-0 form-border-color-table form-bg-table-header form-color-table-header',
        header_sticky: '-form-mb-border-width-table',
        header_not_sticky: '!border-b-0',
        headerRemove: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table form-bg-table-header',
        rowLabel: 'form-border-width-table !border-b-0 form-border-color-table px-2 text-center form-bg-table-header form-color-table-header',
        rowLabel_sticky: '-form-mr-border-width-table',
        rowLabel_not_sticky: '!border-r-0',
        cell: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table form-bg-input',
        cellWrapper_stretch: '!items-stretch',
        cellWrapper_error: 'relative after:content-[""] after:absolute after:inset-0 after:shadow-[inset_0_0_0_1px_var(--vf-danger)] after:pointer-events-none',
        rowRemove: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table bg-gray-100 form-bg-table-header',
        removeIcon: 'dark:!bg-dark-100',
      },
      ...tableInputs.add,
    },
    replaceClasses: {
      ...tableInputs.replace,
    },
    removeClasses: {
      MatrixElement: {
        cellWrapper_padding: 'px-2',
      },
      ...tableInputs.remove,
    },
    overrideClasses: {
      MatrixElement: {
        $cellWrapper: (classes, { padding, centered, cells$ }) => (type, name) => {
          const isStandalone = ['radio', 'checkbox', 'toggle'].includes(type)
          
          return [
            classes.cellWrapper,
            padding ? classes.cellWrapper_padding : null,
            isStandalone ? classes.cellWrapper_centered : null,
            !isStandalone ? classes.cellWrapper_stretch : null,
            cells$[name]?.error ? classes.cellWrapper_error : null,
            cells$[name]?.isSuccess ? classes.cellWrapper_success : null,
          ]
        },
      }
    }
  },

  'table-spreadsheet': {
    addClasses: {
      TableElement: {
        grid: 'form-border-width-table !border-l-0 !border-t-0 form-border-color-table',
        td: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table p-0 form-bg-input',
      },
      ...tableInputs.add,
      StaticElement: {
        ...tableInputs.add.StaticElement,
        content_sm: 'form-p-input-sm',
        content_md: 'form-p-input',
        content_lg: 'form-p-input-lg',
        tag_sm: 'form-p-input-sm',
        tag_md: 'form-p-input',
        tag_lg: 'form-p-input-lg',
      },
      ElementLabel: {
        container: 'hidden',
      },
      CheckboxElement: {
        wrapper_sm: 'form-p-input-sm',
        wrapper_md: 'form-p-input',
        wrapper_lg: 'form-p-input-lg',
      },
      RadioElement: {
        wrapper_sm: 'form-p-input-sm',
        wrapper_md: 'form-p-input',
        wrapper_lg: 'form-p-input-lg',
      },
      ToggleElement: {
        wrapper_sm: 'form-p-input-sm',
        wrapper_md: 'form-p-input',
        wrapper_lg: 'form-p-input-lg',
      },
    },
    replaceClasses: {
      ...tableInputs.replace,
    },
    removeClasses: {
      TableElement: {
        grid_sm: ['form-gap-gutter-sm'],
        grid_md: ['form-gap-gutter'],
        grid_lg: ['form-gap-gutter-lg'],
      },
      ...tableInputs.remove,
    },
    overrideClasses: {
      TableElement: {
        $td: (classes, { colHeader, rowHeader }) => ({ col, row }) => [
          classes.td,
          (colHeader && col === 0) || (rowHeader && row === 0) ? 'form-bg-table-header form-color-table-header' : null,
        ],
      },
      ToggleElement: {
        $wrapper: (classes, { align, Size }) => ([
          classes.wrapper,
          classes[`wrapper_${Size}`],
          align === 'left' ? classes.wrapper_left : null,
          align === 'right' ? classes.wrapper_right : null,
        ]),
      }
    }
  },
}