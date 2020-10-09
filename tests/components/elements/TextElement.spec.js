import { createForm } from 'test-helpers'

describe('Text Element Rendering', () => {
  it('should render text element', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' })[0]

    expect(a.exists()).toBe(true)
    expect(a.get('input').attributes().type).toBe('text')
  })

  it('should render component attributes', () => {
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
  })

//   it('should render floating label', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           floating: 'Text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)
//     let elf = form.findAllComponents({ name: 'ElementLabelFloating' }).at(0)

//     expect(elf.exists()).toBe(true)
//     expect(elf.html()).toContain('Text')
//   })

//   it('should render `addon`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           addons: {
//             before: 'aaa',
//             after: 'bbb',
//           }
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)
//     let ia0 = form.findAllComponents({ name: 'InputAddon' }).at(0)
//     let ia1 = form.findAllComponents({ name: 'InputAddon' }).at(1)

//     expect(ia0.exists()).toBe(true)
//     expect(ia1.exists()).toBe(true)

//     expect(a.get('.input-group-addon + input').exists()).toBe(true)
//     expect(a.get('input + .input-group-addon').exists()).toBe(true)

//     expect(ia0.html()).toContain('aaa')
//     expect(ia1.html()).toContain('bbb')
//   })

//   it('should set attributes for `MaskedInput`', () => {
//     let mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           mask: mask,
//           guide: false,
//           placeholderChar: '.',
//           keepCharPositions: true,
//           showMask: false
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)
//     let mi = a.findAllComponents({ name: 'MaskedInput' }).at(0)
//     let mi$ = a.vm.$refs.input

//     expect(mi.exists()).toBe(true)
//     expect(mi$.guide).toStrictEqual(false)
//     expect(mi$.placeholderChar).toStrictEqual('.')
//     expect(mi$.keepCharPositions).toStrictEqual(true)
//     expect(mi$.showMask).toStrictEqual(false)
//   })
// })

// describe('Text Element Props', () => {
//   it('should have "text" as default `inputType`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.inputType).toBe('text')
//   })

//   it('should set `inputType` from schema', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           inputType: 'date'
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.inputType).toBe('date')
//   })

//   it('should set `inputType` to schema', async () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.inputType).toBe('text')

//     a.vm.inputType = 'date'

//     await nextTick()
    
//     expect(a.vm.inputType).toBe('date')
//   })

//   it('should render `placeholder`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           placeholder: 'aaa'
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.get('input').attributes().placeholder).toBe('aaa')
//   })

//   it('should set `placeholder`', async () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.get('input').attributes().placeholder).toBe(undefined)

//     a.vm.placeholder = 'aaa'

//     await nextTick()
    
//     expect(a.get('input').attributes().placeholder).toBe('aaa')
//   })

//   it('should render `floating`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           floating: 'aaa'
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(true)
//   })

//   it('should set `floating`', async () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(false)

//     a.vm.floating = 'aaa'

//     await nextTick()
    
//     expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(true)
//   })

//   it('should be `readonly` false by default', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.readonly).toBe(false)
//   })

//   it('should render `readonly`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           readonly: true
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.readonly).toBe(true)
//   })

//   it('should set `readonly`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     a.vm.readonly = true
    
//     expect(a.vm.readonly).toBe(true)
//   })

//   it('should have "false" as default `autocomplete`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.autocomplete).toBe(false)
//   })

//   it('should set `autocomplete` from schema', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           autocomplete: 'off'
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.autocomplete).toBe('off')
//   })

//   it('should set `autocomplete` to schema', async () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.autocomplete).toBe(false)

//     a.vm.autocomplete = 'off'

//     await nextTick()
    
//     expect(a.vm.autocomplete).toBe('off')
//   })

//   it('should have "null" as default `debounce`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.debounce).toBe(null)
//   })

//   it('should set `debounce` from schema', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           debounce: 300
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.debounce).toBe(300)
//   })

//   it('should set `debounce` to schema', async () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.debounce).toBe(null)

//     a.vm.debounce = 300

//     await nextTick()
    
//     expect(a.vm.debounce).toBe(300)
//   })

//   it('should have "false" as default `mask`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.mask).toBe(false)
//   })

//   it('should set `mask` from schema', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           mask: ['a'],
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.mask).toStrictEqual(['a'])
//   })

//   it('should set `mask` to schema', async () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.mask).toBe(false)

//     a.vm.mask = ['a']

//     await nextTick()
    
//     expect(a.vm.mask).toStrictEqual(['a'])
//   })

//   it('should have "true" as default `guide`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.guide).toBe(true)
//   })

//   it('should set `guide` from schema', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           guide: false,
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.mask).toStrictEqual(false)
//   })

//   it('should set `guide` to schema', async () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.guide).toBe(true)

//     a.vm.guide = false

//     await nextTick()
    
//     expect(a.vm.guide).toStrictEqual(false)
//   })

//   it('should have "_" as default `placeholderChar`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.placeholderChar).toBe('_')
//   })

//   it('should set `placeholderChar` from schema', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           placeholderChar: '.',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.placeholderChar).toBe('.')
//   })

//   it('should set `placeholderChar` to schema', async () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.placeholderChar).toBe('_')

//     a.vm.placeholderChar = '.'

//     await nextTick()
    
//     expect(a.vm.placeholderChar).toBe('.')
//   })

//   it('should have "false" as default `keepCharPositions`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.keepCharPositions).toBe(false)
//   })

//   it('should set `placeholderChar` from schema', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           keepCharPositions: true,
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.keepCharPositions).toBe(true)
//   })

//   it('should set `placeholderChar` to schema', async () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.keepCharPositions).toBe(false)

//     a.vm.keepCharPositions = true

//     await nextTick()
    
//     expect(a.vm.keepCharPositions).toBe(true)
//   })

//   it('should have "null" as default `pipe`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.pipe).toBe(null)
//   })

//   it('should set `pipe` from schema', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           pipe: () => {},
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.pipe).toBeTruthy()
//   })

//   it('should set `pipe` to schema', async () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.pipe).toBe(null)

//     a.vm.pipe = () => {}

//     await nextTick()
    
//     expect(a.vm.pipe).toBeTruthy()
//   })

//   it('should have "true" as default `showMask` if there is no placeholder', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.showMask).toBe(true)
//   })

//   it('should have "false" as default `showMask` if there is placeholder', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           placeholder: 'aaa'
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.showMask).toBe(false)
//   })

//   it('should set `showMask` from schema', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           showMask: false,
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.showMask).toBe(false)
//   })

//   it('should set `showMask` to schema', async () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.showMask).toBe(true)

//     a.vm.showMask = false

//     await nextTick()
    
//     expect(a.vm.showMask).toBe(false)
//   })

//   it('should return `false` for `masked` if `mask` is null', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.masked).toBe(false)
//   })

//   it('should return `true` for `masked` if `mask` is not null', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           mask: ['a']
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.masked).toBe(true)
//   })
// })

// describe('Text Element Masking', () => {
//   it('should be able to `update` value', async () => {
//     let mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           mask: mask,
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     a.vm.update('123')

//     await nextTick()
    
//     expect(a.get('input').element.value).toBe('(123) ___-____')
//   })

//   it('should be able to `update` value', async () => {
//     let mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           mask: mask,
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     form.vm.load({
//       a: '123'
//     })

//     await nextTick()
    
//     expect(a.get('input').element.value).toBe('(123) ___-____')
//   })

//   it('should be able to load `default`', async () => {
//     let mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           mask: mask,
//           default: '123'
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     await nextTick()
    
//     expect(a.get('input').element.value).toBe('(123) ___-____')
//   })

//   it('should reinit mask when its props change', async () => {
//     let mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           mask: mask,
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.get('input').element.value).toBe('(___) ___-____')

//     a.vm.placeholderChar = '.'

//     await nextTick()
    
//     expect(a.get('input').element.value).toBe('(...) ...-....')
//   })
// })

// describe('Text Element Model', () => {
//   it('should load `default` value', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           default: 'aaa'
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(a.vm.value).toBe('aaa')
//   })

//   it('should set `value`', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     a.vm.value = 'aaa'

//     expect(a.vm.value).toBe('aaa')
//   })

//   it('should `update` value', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     a.vm.update('aaa')

//     expect(a.vm.value).toBe('aaa')
//   })

//   it('should `load` value', () => {
//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     form.vm.load({
//       a: 'aaa'
//     })

//     expect(a.vm.value).toBe('aaa')
//   })
// })

// describe('Text Element Events', () => {
//   it('should trigger `change` event on keyup', () => {
//     let onChangeMock = jest.fn(() => {})

//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           onChange: onChangeMock,
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(onChangeMock.mock.calls.length).toBe(0)

//     a.get('input').setValue('aaa')
//     a.get('input').trigger('keyup')

//     expect(onChangeMock.mock.calls.length).toBe(1)
//     expect(onChangeMock.mock.calls[0][0]).toBe('aaa')
//     expect(onChangeMock.mock.calls[0][1]).toBe(null)
//   })

//   it('should trigger `change` event on select', () => {
//     let onChangeMock = jest.fn(() => {})

//     let form = createForm({
//       schema: {
//         a: {
//           type: 'text',
//           onChange: onChangeMock,
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TextElement' }).at(0)

//     expect(onChangeMock.mock.calls.length).toBe(0)

//     a.get('input').setValue('aaa')
//     a.get('input').trigger('select')

//     expect(onChangeMock.mock.calls.length).toBe(1)
//     expect(onChangeMock.mock.calls[0][0]).toBe('aaa')
//     expect(onChangeMock.mock.calls[0][1]).toBe(null)
//   })
})