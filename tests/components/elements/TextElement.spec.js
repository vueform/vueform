import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'

describe('Text Element Rendering', () => {
  it('should render text element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.exists()).toBe(true)
    expect(a.get('input').attributes().type).toBe('text')

    done()
  })

  it('should render component attributes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          id: 'txt',
          placeholder: 'Text',
          disabled: true,
          readonly: true,
          inputType: 'date',
          autocomplete: 'aaa',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.get('input').attributes().id).toBe('txt')
    expect(a.get('input').attributes().placeholder).toBe('Text')
    expect(a.get('input').attributes().disabled).toBe('disabled')
    expect(a.get('input').attributes().readonly).toBe('readonly')
    expect(a.get('input').attributes().type).toBe('date')
    expect(a.get('input').attributes().autocomplete).toBe('aaa')

    done()
  })

  it('should render floating label', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          floating: 'Text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let elf = form.findAllComponents({ name: 'ElementLabelFloating' }).at(0)

    expect(elf.exists()).toBe(true)
    expect(elf.html()).toContain('Text')

    done()
  })

  it('should render `addon`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          addon: {
            before: 'aaa',
            after: 'bbb',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let ia0 = form.findAllComponents({ name: 'InputAddon' }).at(0)
    let ia1 = form.findAllComponents({ name: 'InputAddon' }).at(1)

    expect(ia0.exists()).toBe(true)
    expect(ia1.exists()).toBe(true)

    expect(a.get('.input-group-addon + input').exists()).toBe(true)
    expect(a.get('input + .input-group-addon').exists()).toBe(true)

    expect(ia0.html()).toContain('aaa')
    expect(ia1.html()).toContain('bbb')

    done()
  })

  it('should set attributes for `MaskedInput`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          mask: mask,
          guide: false,
          placeholderChar: '.',
          keepCharPositions: true,
          showMask: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let mi = a.findAllComponents({ name: 'MaskedInput' }).at(0)
    let mi$ = a.vm.$refs.input

    expect(mi.exists()).toBe(true)
    expect(mi$.guide).toStrictEqual(false)
    expect(mi$.placeholderChar).toStrictEqual('.')
    expect(mi$.keepCharPositions).toStrictEqual(true)
    expect(mi$.showMask).toStrictEqual(false)

    done()
  })
})

describe('Text Element Props', () => {
  it('should have "text" as default `inputType`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.inputType).toBe('text')

    done()
  })

  it('should set `inputType` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          inputType: 'date'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.inputType).toBe('date')

    done()
  })

  it('should set `inputType` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.inputType).toBe('text')

    a.vm.inputType = 'date'

    LocalVue.nextTick(() => {
      expect(a.vm.inputType).toBe('date')

      done()
    })
  })

  it('should render `placeholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          placeholder: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.get('input').attributes().placeholder).toBe('aaa')

    done()
  })

  it('should set `placeholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.get('input').attributes().placeholder).toBe(undefined)

    a.vm.placeholder = 'aaa'

    LocalVue.nextTick(() => {
      expect(a.get('input').attributes().placeholder).toBe('aaa')

      done()
    })
  })

  it('should render `floating`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          floating: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(true)

    done()
  })

  it('should set `floating`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(false)

    a.vm.floating = 'aaa'

    LocalVue.nextTick(() => {
      expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(true)

      done()
    })
  })

  it('should be `readonly` false by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.readonly).toBe(false)

    done()
  })

  it('should render `readonly`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          readonly: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.readonly).toBe(true)

    done()
  })

  it('should set `readonly`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.readonly = true
    
    expect(a.vm.readonly).toBe(true)

    done()
  })

  it('should have "false" as default `autocomplete`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.autocomplete).toBe(false)

    done()
  })

  it('should set `autocomplete` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          autocomplete: 'off'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.autocomplete).toBe('off')

    done()
  })

  it('should set `autocomplete` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.autocomplete).toBe(false)

    a.vm.autocomplete = 'off'

    LocalVue.nextTick(() => {
      expect(a.vm.autocomplete).toBe('off')

      done()
    })
  })

  it('should have "null" as default `debounce`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.debounce).toBe(null)

    done()
  })

  it('should set `debounce` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          debounce: 300
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.debounce).toBe(300)

    done()
  })

  it('should set `debounce` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.debounce).toBe(null)

    a.vm.debounce = 300

    LocalVue.nextTick(() => {
      expect(a.vm.debounce).toBe(300)

      done()
    })
  })

  it('should have "false" as default `mask`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.mask).toBe(false)

    done()
  })

  it('should set `mask` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          mask: ['a'],
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.mask).toStrictEqual(['a'])

    done()
  })

  it('should set `mask` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.mask).toBe(false)

    a.vm.mask = ['a']

    LocalVue.nextTick(() => {
      expect(a.vm.mask).toStrictEqual(['a'])

      done()
    })
  })

  it('should have "true" as default `guide`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.guide).toBe(true)

    done()
  })

  it('should set `guide` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          guide: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.mask).toStrictEqual(false)

    done()
  })

  it('should set `guide` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.guide).toBe(true)

    a.vm.guide = false

    LocalVue.nextTick(() => {
      expect(a.vm.guide).toStrictEqual(false)

      done()
    })
  })

  it('should have "_" as default `placeholderChar`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.placeholderChar).toBe('_')

    done()
  })

  it('should set `placeholderChar` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          placeholderChar: '.',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.placeholderChar).toBe('.')

    done()
  })

  it('should set `placeholderChar` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.placeholderChar).toBe('_')

    a.vm.placeholderChar = '.'

    LocalVue.nextTick(() => {
      expect(a.vm.placeholderChar).toBe('.')

      done()
    })
  })

  it('should have "false" as default `keepCharPositions`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.keepCharPositions).toBe(false)

    done()
  })

  it('should set `placeholderChar` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          keepCharPositions: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.keepCharPositions).toBe(true)

    done()
  })

  it('should set `placeholderChar` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.keepCharPositions).toBe(false)

    a.vm.keepCharPositions = true

    LocalVue.nextTick(() => {
      expect(a.vm.keepCharPositions).toBe(true)

      done()
    })
  })

  it('should have "null" as default `pipe`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.pipe).toBe(null)

    done()
  })

  it('should set `pipe` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          pipe: () => {},
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.pipe).toBeTruthy()

    done()
  })

  it('should set `pipe` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.pipe).toBe(null)

    a.vm.pipe = () => {}

    LocalVue.nextTick(() => {
      expect(a.vm.pipe).toBeTruthy()

      done()
    })
  })

  it('should have "true" as default `showMask` if there is no placeholder', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.showMask).toBe(true)

    done()
  })

  it('should have "false" as default `showMask` if there is placeholder', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          placeholder: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.showMask).toBe(false)

    done()
  })

  it('should set `showMask` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          showMask: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.showMask).toBe(false)

    done()
  })

  it('should set `showMask` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.showMask).toBe(true)

    a.vm.showMask = false

    LocalVue.nextTick(() => {
      expect(a.vm.showMask).toBe(false)

      done()
    })
  })

  it('should return `false` for `masked` if `mask` is null', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.masked).toBe(false)
    
    done()
  })

  it('should return `true` for `masked` if `mask` is not null', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          mask: ['a']
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.masked).toBe(true)
    
    done()
  })
})

describe('Text Element Masking', () => {
  it('should be able to `update` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          mask: mask,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.update('123')

    LocalVue.nextTick(() => {
      expect(a.get('input').element.value).toBe('(123) ___-____')

      done()
    })
  })

  it('should be able to `update` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          mask: mask,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    form.vm.load({
      a: '123'
    })

    LocalVue.nextTick(() => {
      expect(a.get('input').element.value).toBe('(123) ___-____')

      done()
    })
  })

  it('should be able to load `default`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          mask: mask,
          default: '123'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    LocalVue.nextTick(() => {
      expect(a.get('input').element.value).toBe('(123) ___-____')

      done()
    })
  })

  it('should reinit mask when its props change', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          mask: mask,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.get('input').element.value).toBe('(___) ___-____')

    a.vm.placeholderChar = '.'

    LocalVue.nextTick(() => {
      expect(a.get('input').element.value).toBe('(...) ...-....')

      done()
    })
  })
})

describe('Text Element Model', () => {
  it('should load `default` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.value).toBe('aaa')

    done()
  })

  it('should set `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.value = 'aaa'

    expect(a.vm.value).toBe('aaa')

    done()
  })

  it('should `update` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.update('aaa')

    expect(a.vm.value).toBe('aaa')

    done()
  })

  it('should `load` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    form.vm.load({
      a: 'aaa'
    })

    expect(a.vm.value).toBe('aaa')

    done()
  })
})

describe('Text Element Events', () => {
  it('should trigger `change` event on keyup', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.get('input').setValue('aaa')
    a.get('input').trigger('keyup')

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(null)
    expect(onChangeMock.mock.calls[0][1]).toBe('aaa')

    done()
  })

  it('should trigger `change` event on select', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.get('input').setValue('aaa')
    a.get('input').trigger('select')

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(null)
    expect(onChangeMock.mock.calls[0][1]).toBe('aaa')

    done()
  })
})