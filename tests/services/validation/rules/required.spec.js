import flushPromises                                                         from 'flush-promises'
import {createForm, findAllComponents, change, setInstances, check, uncheck} from 'test-helpers'

describe('Required Rule', () => {
  it('should be validate if value is filled for string', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required'
        }
      }
    })
    
    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    
    change(a, '')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, ' ')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, '    ')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'null')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, '.')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdf')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, '1')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })
  
  it('should be validate if value is filled for array', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'required',
          initial: 0,
          element: {
            type: 'text'
          }
        }
      }
    })
    
    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    
    a.vm.validate()
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    a.vm.add()
    a.vm.validate()
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })
  
  it('should be validate if value is filled for checkbox', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'required',
          trueValue: null,
          falseValue: false,
        }
      }
    })
    
    let a = findAllComponents(form, { name: 'CheckboxElement' }).at(0)
    
    check(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    uncheck(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
  
  it('should be validate if value is filled for file', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'required',
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    await el.validate()
    expect(el.invalid).toBe(true)
    
    el.update({ tmp: 'asdf123.jpg', originalName: 'filename.jpg' })
    await el.validate()
    expect(el.invalid).toBe(false)
    
    el.update('filename.jpg')
    await el.validate()
    expect(el.invalid).toBe(false)
    
    el.update(new File(['file'], 'filename.jpg'))
    await el.validate()
    expect(el.invalid).toBe(false)
    
    el.update('')
    await el.validate()
    expect(el.invalid).toBe(true)
  })
})