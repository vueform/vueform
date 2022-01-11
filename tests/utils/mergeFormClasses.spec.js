import MergeFormClasses from './../../src/utils/mergeFormClasses'

const $input = (classes, el$) => ([
  classes.input,
  { [classes.input_enabled]: !el$.isDisabled() },
  { [classes.input_disabled]: el$.isDisabled() },
])

const theme = {
  TextElement: {
    container: 'text-container w-full',
    input: ['text-input', 'form-border'],
    input_enabled: 'text-input-enabled',
    input_disabled: 'text-input-disabled',
    $input,
  },
  SelectElement: {
    container: 'select-container w-full',
    select: {
      container: 'select-select-container form-border',
      options: 'select-select-options form-input-padding',
    },
    deep: {
      deeper: {
        deep_select: 'deep-select'
      }
    }
  }
}

describe('mergeFormClasses', () => {
  it('should convert theme to array', () => {
    let classes = new MergeFormClasses({ theme })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['text-container', 'w-full'],
        input: ['text-input', 'form-border'],
        input_enabled: ['text-input-enabled'],
        input_disabled: ['text-input-disabled'],
        $input,
      },
      SelectElement: {
        container: ['select-container', 'w-full'],
        select: {
          container: ['select-select-container', 'form-border'],
          options: ['select-select-options', 'form-input-padding'],
        },
        deep: {
          deeper: {
            deep_select: ['deep-select']
          }
        }
      }
    })
  })

  it('should add from config addClasses', () => {
    let classes = new MergeFormClasses({
      theme,
      config: {
        addClasses: {
          TextElement: {
            container: 'text-container-added',
            input: 'text-input-added',
            input_enabled: ['text-input-enabled-added'],
            input_disabled: { 'text-input-disabled-added': true },
          }
        }
      }
    })

    console.log(classes.classes)

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['text-container', 'w-full', 'text-container-added'],
        input: ['text-input', 'form-border', 'text-input-added'],
        input_enabled: ['text-input-enabled', 'text-input-enabled-added'],
        input_disabled: ['text-input-disabled', { 'text-input-disabled-added': true }],
        $input,
      },
      SelectElement: {
        container: ['select-container', 'w-full'],
        select: {
          container: ['select-select-container', 'form-border'],
          options: ['select-select-options', 'form-input-padding'],
        },
        deep: {
          deeper: {
            deep_select: ['deep-select']
          }
        }
      }
    })
  })
})