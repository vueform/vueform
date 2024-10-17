export default {
  'matrix-table': {
    addClasses: {
      MatrixElement: {
        grid: 'form-border-width-table !border-l-0 !border-t-0 form-border-color-table !gap-0',
        cell: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table form-bg-input',
        cell_stretch: '!items-stretch',
        headerFirst: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table form-bg-table-header',
        header: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table form-bg-table-header',
        headerRemove: 'form-border-width-table !border-b-0 form-border-color-table form-bg-table-header',
        rowLabel: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table px-2 text-center form-bg-table-header',
        rowRemove: 'form-border-width-table !border-b-0 form-border-color-table bg-gray-100 form-bg-table-header',
        removeIcon: 'dark:!bg-dark-100'
      },
      TextElement: {
        inputContainer: 'h-full',
        inputContainer_focused: 'relative z-1',
      },
      TTextElement: {
        inputContainer: 'h-full',
        inputContainer_focused: 'relative z-1',
      },
      LocationElement: {
        inputContainer: 'h-full',
        inputContainer_focused: 'relative z-1',
      },
      PhoneElement: {
        inputContainer: 'h-full',
        inputContainer_focused: 'relative z-1',
      },
      DateElement: {
        inputContainer: 'h-full',
        inputContainer_focused: 'relative z-1',
      },
      DatesElement: {
        inputContainer: 'h-full',
        inputContainer_focused: 'relative z-1',
      },
      TextareaElement: {
        inputContainer: 'h-full',
        inputContainer_focused: 'relative z-1',
        input: 'min-h-full',
      },
      TTextareaElement: {
        inputContainer: 'h-full',
        inputContainer_focused: 'relative z-1',
        input: 'min-h-full',
      },
      SelectElement: {
        wrapper: 'h-full',
        inputWrapper: 'h-full',
        input: 'h-full focus:relative focus:z-1',
        inputCaret: 'z-[2]',
        select: {
          wrapper: 'h-full',
          inputWrapper: 'h-full',
          container: 'h-full focus:relative',
          containerActive: 'z-1',
        }
      },
      MultiselectElement: {
        wrapper: 'h-full',
        inputWrapper: 'h-full',
        input: 'h-full focus:relative focus:z-1',
        inputCaret: 'z-[2]',
        select: {
          wrapper: 'h-full',
          inputWrapper: 'h-full',
          container: 'h-full focus:relative',
          containerActive: 'z-1',
        }
      },
      TagsElement: {
        select: {
          wrapper: 'h-full',
          inputWrapper: 'h-full',
          container: 'h-full focus:relative',
          containerActive: 'z-1',
        }
      },
      ElementLayout: {
        outerWrapper: 'h-full',
        innerWrapperBefore: 'hidden',
        innerWrapper: 'h-full',
        innerWrapperAfter: 'hidden',
      },
      SliderElement: {
        wrapper: 'h-full w-full flex items-center justify-center',
        slider: {
          target: 'w-full mx-4'
        }
      },
      EditorElement: {
        input: 'h-full flex flex-col [&>trix-editor]:h-full',
        input_focused: 'relative z-1',
      },
      TEditorElement: {
        input: 'h-full flex flex-col [&>trix-editor]:h-full',
        input_focused: 'relative z-1',
      },
      StaticElement: {
        content: 'h-full'
      },
      ButtonElement: {
        button_enabled: 'hover:brightness-95',
        button_not_full: 'w-full',
      },
      FileElement: {
        button: 'text-center w-full focus:relative focus:z-1 hover:brightness-95',
      },
      MultifileElement: {
        button: 'text-center w-full focus:relative focus:z-1 hover:brightness-95',
        list: 'py-1 px-1'
      },
      FilePreview: {
        wrapper: 'py-1 px-1'
      },
      CheckboxgroupElement: {
        wrapper: 'h-full'
      },
      CheckboxgroupCheckbox: {
        wrapper: 'border-l',
        wrapper_first: '!border-l-0',
      },
      RadiogroupElement: {
        wrapper: 'h-full'
      },
      RadiogroupRadio: {
        wrapper: 'border-l',
        wrapper_first: '!border-l-0',
      },
    },
    replaceClasses: {
      MatrixElement: {
        header_sticky: {
          'top-0': '-top-px'
        },
        rowLabel_sticky: {
          'left-0': '-left-px'
        }
      },
      TextElement: {
        inputContainer_sm: { 'form-h-input-height-sm': 'form-min-h-input-height-sm' },
        inputContainer_md: { 'form-h-input-height': 'form-min-h-input-height' },
        inputContainer_lg: { 'form-h-input-height-lg': 'form-min-h-input-height-lg' },
      },
      TTextElement: {
        inputContainer_sm: { 'form-h-input-height-sm': 'form-min-h-input-height-sm' },
        inputContainer_md: { 'form-h-input-height': 'form-min-h-input-height' },
        inputContainer_lg: { 'form-h-input-height-lg': 'form-min-h-input-height-lg' },
      },
      DateElement: {
        inputContainer_sm: { 'form-h-input-height-sm': 'form-min-h-input-height-sm' },
        inputContainer_md: { 'form-h-input-height': 'form-min-h-input-height' },
        inputContainer_lg: { 'form-h-input-height-lg': 'form-min-h-input-height-lg' },
      },
      DatesElement: {
        inputContainer_sm: { 'form-h-input-height-sm': 'form-min-h-input-height-sm' },
        inputContainer_md: { 'form-h-input-height': 'form-min-h-input-height' },
        inputContainer_lg: { 'form-h-input-height-lg': 'form-min-h-input-height-lg' },
      },
      LocationElement: {
        inputContainer_sm: { 'form-h-input-height-sm': 'form-min-h-input-height-sm' },
        inputContainer_md: { 'form-h-input-height': 'form-min-h-input-height' },
        inputContainer_lg: { 'form-h-input-height-lg': 'form-min-h-input-height-lg' },
      },
      PhoneElement: {
        inputContainer_sm: { 'form-h-input-height-sm': 'form-min-h-input-height-sm' },
        inputContainer_md: { 'form-h-input-height': 'form-min-h-input-height' },
        inputContainer_lg: { 'form-h-input-height-lg': 'form-min-h-input-height-lg' },
      },
      CheckboxgroupElement: {
        container: {
          'form-view-default': 'px-2 py-1',
          'form-view-tabs': '',
        },
      },
      RadiogroupElement: {
        container: {
          'form-view-default': 'px-2 py-1',
          'form-view-tabs': '',
        },
      },
      CheckboxgroupCheckbox: {
        container: {
          'form-view-blocks': '[&>div]:border-l-0'
        }
      },
      RadiogroupRadio: {
        container: {
          'form-view-blocks': '[&>div]:border-l-0'
        }
      },
    },
    removeClasses: {
      MatrixElement: {
        cell_padding: 'px-2',
        cell_padding: 'px-2',
      },
      TextElement: {
        inputContainer: ['form-border-width-input'],
        inputContainer_sm: ['form-radius-input-sm'],
        inputContainer_md: ['form-radius-input'],
        inputContainer_lg: ['form-radius-input-lg'],
        input_sm: ['form-radius-input-sm'],
        input_md: ['form-radius-input'],
        input_lg: ['form-radius-input-lg'],
      },
      DateElement: {
        inputContainer: ['form-border-width-input'],
        inputContainer_sm: ['form-radius-input-sm'],
        inputContainer_md: ['form-radius-input'],
        inputContainer_lg: ['form-radius-input-lg'],
        input_sm: ['form-radius-input-sm'],
        input_md: ['form-radius-input'],
        input_lg: ['form-radius-input-lg'],
      },
      DatesElement: {
        inputContainer: ['form-border-width-input'],
        inputContainer_sm: ['form-radius-input-sm'],
        inputContainer_md: ['form-radius-input'],
        inputContainer_lg: ['form-radius-input-lg'],
        input_sm: ['form-radius-input-sm'],
        input_md: ['form-radius-input'],
        input_lg: ['form-radius-input-lg'],
      },
      TTextElement: {
        inputContainer: ['form-border-width-input'],
        inputContainer_sm: ['form-radius-input-sm'],
        inputContainer_md: ['form-radius-input'],
        inputContainer_lg: ['form-radius-input-lg'],
        input_sm: ['form-radius-input-sm'],
        input_md: ['form-radius-input'],
        input_lg: ['form-radius-input-lg'],
      },
      LocationElement: {
        inputContainer: ['form-border-width-input'],
        inputContainer_sm: ['form-radius-input-sm'],
        inputContainer_md: ['form-radius-input'],
        inputContainer_lg: ['form-radius-input-lg'],
        input_sm: ['form-radius-input-sm'],
        input_md: ['form-radius-input'],
        input_lg: ['form-radius-input-lg'],
      },
      PhoneElement: {
        inputContainer: ['form-border-width-input'],
        inputContainer_sm: ['form-radius-input-sm'],
        inputContainer_md: ['form-radius-input'],
        inputContainer_lg: ['form-radius-input-lg'],
        input_sm: ['form-radius-input-sm'],
        input_md: ['form-radius-input'],
        input_lg: ['form-radius-input-lg'],
      },
      TextareaElement: {
        inputContainer: ['form-border-width-input'],
        inputContainer_sm: ['form-radius-large-sm'],
        inputContainer_md: ['form-radius-large'],
        inputContainer_lg: ['form-radius-large-lg'],
        input_sm: ['form-radius-large-sm'],
        input_md: ['form-radius-large'],
        input_lg: ['form-radius-large-lg'],
      },
      TTextareaElement: {
        inputContainer: ['form-border-width-input'],
        inputContainer_sm: ['form-radius-large-sm'],
        inputContainer_md: ['form-radius-large'],
        inputContainer_lg: ['form-radius-large-lg'],
        input_sm: ['form-radius-large-sm'],
        input_md: ['form-radius-large'],
        input_lg: ['form-radius-large-lg'],
      },
      SelectElement: {
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
      MultiselectElement: {
        input: ['form-border-width-input'],
        input_sm: ['form-radius-input-sm'],
        input_md: ['form-radius-input'],
        input_lg: ['form-radius-input-lg'],
        select: {
          container: ['form-border-width-input'],
          container_sm: ['form-radius-input-sm'],
          container_md: ['form-radius-input'],
          container_lg: ['form-radius-input-lg'],
        }
      },
      TagsElement: {
        select: {
          container: ['form-border-width-input'],
          container_sm: ['form-radius-input-sm'],
          container_md: ['form-radius-input'],
          container_lg: ['form-radius-input-lg'],
        }
      },
      EditorElement: {
        input: ['form-border-width-input'],
        input_sm: ['form-radius-large-sm'],
        input_md: ['form-radius-large'],
        input_lg: ['form-radius-large-lg'],
      },
      TEditorElement: {
        input: ['form-border-width-input'],
        input_sm: ['form-radius-large-sm'],
        input_md: ['form-radius-large'],
        input_lg: ['form-radius-large-lg'],
      },
      ButtonElement: {
        button_sm: ['form-radius-btn-sm'],
        button_md: ['form-radius-btn'],
        button_lg: ['form-radius-btn-lg'],
        button_enabled: ['hover:scale-105']
      },
      FileElement: {
        button_sm: ['form-radius-btn-sm'],
        button_md: ['form-radius-btn'],
        button_lg: ['form-radius-btn-lg'],
        button_enabled: ['hover:scale-105']
      },
      MultifileElement: {
        button_sm: ['form-radius-btn-sm'],
        button_md: ['form-radius-btn'],
        button_lg: ['form-radius-btn-lg'],
        button_enabled: ['hover:scale-105'],
        list_md: ['form-mt-gutter'],
      },
      CheckboxgroupElement: {
        wrapper_sm: ['form-radius-large-sm'],
        wrapper_md: ['form-radius-large'],
        wrapper_lg: ['form-radius-large-lg'],
      },
      CheckboxgroupCheckbox: {
        container_sm: ['form-radius-large-sm'],
        container_md: ['form-radius-large'],
        container_lg: ['form-radius-large-lg'],
        wrapper_first_sm: ['form-radius-input-l-sm'],
        wrapper_first_md: ['form-radius-input-l'],
        wrapper_first_lg: ['form-radius-input-l-lg'],
        wrapper_last_sm: ['form-radius-input-r-sm'],
        wrapper_last_md: ['form-radius-input-r'],
        wrapper_last_lg: ['form-radius-input-r-lg'],
        wrapper: ['form-border-width-input'],
        wrapper_last_sm: ['form-radius-large-b-sm'],
        wrapper_last_md: ['form-radius-large-b'],
        wrapper_last_lg: ['form-radius-large-b-lg'],
      },
      RadiogroupRadio: {
        container_sm: ['form-radius-large-sm'],
        container_md: ['form-radius-large'],
        container_lg: ['form-radius-large-lg'],
        wrapper_first_sm: ['form-radius-input-l-sm'],
        wrapper_first_md: ['form-radius-input-l'],
        wrapper_first_lg: ['form-radius-input-l-lg'],
        wrapper_last_sm: ['form-radius-input-r-sm'],
        wrapper_last_md: ['form-radius-input-r'],
        wrapper_last_lg: ['form-radius-input-r-lg'],
        wrapper: ['form-border-width-input'],
        wrapper_last_sm: ['form-radius-large-b-sm'],
        wrapper_last_md: ['form-radius-large-b'],
        wrapper_last_lg: ['form-radius-large-b-lg'],
      },
    },
    overrideClasses: {
      MatrixElement: {
        $cell: (classes, { padding, centered }) => (type) => {
          const isStandalone = ['radio', 'checkbox', 'toggle'].includes(type)
          
          return [
            classes.cell,
            padding ? classes.cell_padding : null,
            isStandalone ? classes.cell_centered : null,
            !isStandalone ? classes.cell_stretch : null,
          ]
        },
      }
    }
  }
}