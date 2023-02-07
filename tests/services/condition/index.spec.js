import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'

describe('Condition Service', () => {
  it('should `checkFunction` condition', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            function(form$) {
              if (!form$.el$('a')) {
                return false
              }

              return form$.el$('a').value == 'aaa'
            }
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(false)

    a.vm.update('aaa')

    expect(b.vm.available).toBe(true)
  })

  it('should `checkArray` condition', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'aaa']
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(false)

    a.vm.update('aaa')

    expect(b.vm.available).toBe(true)
  })

  it('should check equality in array', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', ['aaa','aa']]
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(false)

    a.vm.update('aaa')
    expect(b.vm.available).toBe(true)

    a.vm.update('aa')
    expect(b.vm.available).toBe(true)

    a.vm.update('a')
    expect(b.vm.available).toBe(false)
  })

  it('should check equality in array when value is array', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'a',
            aa: 'aa',
            aaa: 'aaa'
          }
        },
        b: {
          type: 'text',
          conditions: [
            ['a', ['aaa','aa']]
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxgroupElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(0)

    expect(b.vm.available).toBe(false)

    a.vm.update(['aaa'])
    expect(b.vm.available).toBe(true)

    a.vm.update(['aa'])
    expect(b.vm.available).toBe(true)

    a.vm.update(['a'])
    expect(b.vm.available).toBe(false)
  })

  it('should check non-equality in array', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'not_in', ['aaa', 'aa']]
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(true)

    a.vm.update('aaa')
    expect(b.vm.available).toBe(false)

    a.vm.update('aa')
    expect(b.vm.available).toBe(false)

    a.vm.update('a')
    expect(b.vm.available).toBe(true)
  })

  it('should check non-equality in array when value is array', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'a',
            aa: 'aa',
            aaa: 'aaa'
          }
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'not_in', ['aaa','aa']]
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxgroupElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(0)

    expect(b.vm.available).toBe(true)

    a.vm.update(['aaa'])
    expect(b.vm.available).toBe(false)

    a.vm.update(['aa'])
    expect(b.vm.available).toBe(false)

    a.vm.update(['a'])
    expect(b.vm.available).toBe(true)
  })

  it('should check equality', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'aaa']
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(false)

    a.vm.update('aaa')
    expect(b.vm.available).toBe(true)
  })

  it('should check non-equality', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '!=', 'aaa']
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(true)

    a.vm.update('aaa')
    expect(b.vm.available).toBe(false)
  })

  it('should check gt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>', 3]
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(false)

    a.vm.update(4)
    expect(b.vm.available).toBe(true)

    a.vm.update(2)
    expect(b.vm.available).toBe(false)
  })

  it('should check gte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>=', 3]
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(false)

    a.vm.update(3)
    expect(b.vm.available).toBe(true)

    a.vm.update(2)
    expect(b.vm.available).toBe(false)

    a.vm.update(4)
    expect(b.vm.available).toBe(true)
  })

  it('should check lt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<', 3]
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(true)

    a.vm.update(2)
    expect(b.vm.available).toBe(true)

    a.vm.update(3)
    expect(b.vm.available).toBe(false)

    a.vm.update(4)
    expect(b.vm.available).toBe(false)
  })

  it('should check lte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<=', 3]
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(true)

    a.vm.update(2)
    expect(b.vm.available).toBe(true)

    a.vm.update(3)
    expect(b.vm.available).toBe(true)

    a.vm.update(4)
    expect(b.vm.available).toBe(false)
  })

  it('should check chanied conditions', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'aaa']
          ]
        },
        c: {
          type: 'text',
          conditions: [
            ['b', 'bbb']
          ]
        },
        d: {
          type: 'text',
          conditions: [
            ['c', 'ccc']
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)
    let c = findAllComponents(form, { name: 'TextElement' }).at(2)
    let d = findAllComponents(form, { name: 'TextElement' }).at(3)

    expect(b.vm.available).toBe(false)
    expect(c.vm.available).toBe(false)
    expect(d.vm.available).toBe(false)

    a.get('#a').setValue('aaa')

    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(false)
    expect(d.vm.available).toBe(false)
    
    b.get('#b').setValue('bbb')

    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(false)

    c.get('#c').setValue('ccc')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)

    a.get('#a').setValue('')
    expect(b.vm.available).toBe(false)
    expect(c.vm.available).toBe(false)
    expect(d.vm.available).toBe(false)
  })

  it('should check group conditions', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'group',
          schema: {
            c: {
              type: 'text',
            },
            d: {
              type: 'text',
              conditions: [
                ['b.c', 'ccc']
              ]
            },
            e: {
              type: 'text',
              conditions: [
                ['b.d', 'ddd']
              ]
            },
            f: {
              type: 'text',
              conditions: [
                ['a', 'aaa']
              ]
            },
            g: {
              type: 'group',
              schema: {
                h: {
                  type: 'text',
                  conditions: [
                    ['b.e', 'eee']
                  ]
                },
                i: {
                  type: 'text',
                  conditions: [
                    ['b.g.h', 'hhh']
                  ]
                },
              }
            },
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'GroupElement' }).at(0)
    let c = findAllComponents(form, { name: 'TextElement' }).at(1)
    let d = findAllComponents(form, { name: 'TextElement' }).at(2)
    let e = findAllComponents(form, { name: 'TextElement' }).at(3)
    let f = findAllComponents(form, { name: 'TextElement' }).at(4)
    let g = findAllComponents(form, { name: 'GroupElement' }).at(1)
    let h = findAllComponents(form, { name: 'TextElement' }).at(5)
    let i = findAllComponents(form, { name: 'TextElement' }).at(6)

    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(false)
    expect(e.vm.available).toBe(false)
    expect(f.vm.available).toBe(false)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(false)
    expect(i.vm.available).toBe(false)

    a.get('#a').setValue('aaa')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(false)
    expect(e.vm.available).toBe(false)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(false)
    expect(i.vm.available).toBe(false)

    c.get('[id="b.c"]').setValue('ccc')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)
    expect(e.vm.available).toBe(false)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(false)
    expect(i.vm.available).toBe(false)

    d.get('[id="b.d"]').setValue('ddd')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)
    expect(e.vm.available).toBe(true)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(false)
    expect(i.vm.available).toBe(false)

    e.get('[id="b.e"]').setValue('eee')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)
    expect(e.vm.available).toBe(true)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(true)
    expect(i.vm.available).toBe(false)

    h.get('[id="b.g.h"]').setValue('hhh')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)
    expect(e.vm.available).toBe(true)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(true)
    expect(i.vm.available).toBe(true)
  })

  it('should check wildcard conditions', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              b: {
                type: 'text'
              },
              c: {
                type: 'text',
                conditions: [
                  ['a.*.b', 'bbb']
                ]
              },
              d: {
                type: 'text',
                conditions: [
                  ['e', 'eee']
                ]
              },
            }
          }
        },
        e: {
          type: 'text'
        },
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    let b0 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let c0 = findAllComponents(form, { name: 'TextElement' }).at(1)
    let d0 = findAllComponents(form, { name: 'TextElement' }).at(2)
    let e = findAllComponents(form, { name: 'TextElement' }).at(3)

    expect(c0.vm.available).toBe(false)
    expect(d0.vm.available).toBe(false)

    e.get('#e').setValue('eee')
    expect(d0.vm.available).toBe(true)

    b0.get('[id="a.0.b"]').setValue('bbb')
    expect(c0.vm.available).toBe(true)
  })

  it('should check circular condition', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          label: 'A',
          conditions: [
            ['b', '<', 1]
          ]
        },
        b: {
          type: 'text',
          label: 'B',
          conditions: [
            ['a', '<', 1]
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(a.vm.available).toBe(true)
    expect(b.vm.available).toBe(true)

    a.get('#a').setValue(2)
    expect(a.vm.available).toBe(true)
    expect(b.vm.available).toBe(false)

    a.get('#a').setValue(0)
    expect(a.vm.available).toBe(true)
    expect(b.vm.available).toBe(true)

    b.get('#b').setValue(2)
    expect(a.vm.available).toBe(false)
    expect(b.vm.available).toBe(true)
  })
  
  /* ======= NEW ====== */
  
  it('should check equality (text empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'empty']
          ]
        },
      }
    })
    
    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)
    
    expect(b.vm.available).toBe(true)
    
    a.vm.update('')
    expect(b.vm.available).toBe(true)
    
    a.vm.update('a')
    expect(b.vm.available).toBe(false)
    
    
  })
  
  it('should check equality (text not empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'not_empty']
          ]
        },
      }
    })
    
    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)
    
    expect(b.vm.available).toBe(false)
    
    a.vm.update('')
    expect(b.vm.available).toBe(false)
    
    a.vm.update('a')
    expect(b.vm.available).toBe(true)
  })
  
  it('should check equality (text equal to)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '==', 'aa']
          ]
        },
      }
    })
    
    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)
    
    expect(b.vm.available).toBe(false)
    
    a.vm.update('a')
    expect(b.vm.available).toBe(false)
    
    a.vm.update('aa')
    expect(b.vm.available).toBe(true)
    
    a.vm.update('aaa')
    expect(b.vm.available).toBe(false)
  })
  
  it('should check equality (text not equal to)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '!=', 'aa']
          ]
        },
      }
    })
    
    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)
    
    expect(b.vm.available).toBe(true)
    
    a.vm.update('a')
    expect(b.vm.available).toBe(true)
    
    a.vm.update('aa')
    expect(b.vm.available).toBe(false)
    
    a.vm.update('aaa')
    expect(b.vm.available).toBe(true)
  })
  
  it('should check equality (file empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'empty']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update(new File([''], 'asd123.jpg'))
    expect(b.available).toBe(false)
  })
  
  it('should check equality (file not empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'not_empty']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.update(new File([''], 'asd123.jpg'))
    expect(b.available).toBe(true)
  })
  
  it('should check equality (radiogroup empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: [
            'asd1',
            'asd2',
            'asd3',
            'asd4',
            'asd5',
            'asd6',
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'empty']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update('asd1')
    expect(b.available).toBe(false)
  })
  
  it('should check equality (radiogroup not empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: [
            'asd1',
            'asd2',
            'asd3',
            'asd4',
            'asd5',
            'asd6',
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'not_empty']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.update('asd2')
    expect(b.available).toBe(true)
    
    a.update('asd4')
    expect(b.available).toBe(true)
  })
  
  it('should check equality (list empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: {
            type: 'text'
          },
          initial: 0
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'empty']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
  
    expect(b.available).toBe(true)
  
    a.add()
    expect(b.available).toBe(false)
  })
  
  it('should check equality (list not empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: {
            type: 'text'
          },
          initial: 0
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'not_empty']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
  
    expect(b.available).toBe(false)
  
    a.add()
    expect(b.available).toBe(true)
  })
  
  it('should check equality (date empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'date'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'empty']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update('')
    expect(b.available).toBe(true)
    
    a.update('2023-01-26')
    expect(b.available).toBe(false)
    
    
  })
  
  it('should check equality (date not empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'date'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'not_empty']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.update('')
    expect(b.available).toBe(false)
    
    a.update('2023-01-26')
    expect(b.available).toBe(true)
  })
  
  it('should check equality (checkboxgroup empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: [
            'asd1',
            'asd2',
            'asd3',
            'asd4',
            'asd5',
            'asd6',
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'empty']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update(['asd1'])
    expect(b.available).toBe(false)
    
    a.update(['asd2', 'asd3'])
    expect(b.available).toBe(false)
  })
  
  it('should check equality (checkboxgroup not empty)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: [
            'asd1',
            'asd2',
            'asd3',
            'asd4',
            'asd5',
            'asd6',
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'not_empty']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.update(['asd1'])
    expect(b.available).toBe(true)
    
    a.update(['asd2', 'asd3'])
    expect(b.available).toBe(true)
  })
  
  it('should check equality (checkboxgroup includes)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: [
            'asd1',
            'asd2',
            'asd3',
            'asd4',
            'asd5',
            'asd6',
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '==', 'asd2']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.update(['asd1'])
    expect(b.available).toBe(false)
    
    a.update(['asd2'])
    expect(b.available).toBe(true)
    
    a.update(['asd2', 'asd3'])
    expect(b.available).toBe(true)
  })
  
  it('should check equality (checkboxgroup not includes)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: [
            'asd1',
            'asd2',
            'asd3',
            'asd4',
            'asd5',
            'asd6',
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '!=', 'asd2']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update(['asd1'])
    expect(b.available).toBe(true)
    
    a.update(['asd2'])
    expect(b.available).toBe(false)
    
    a.update(['asd2', 'asd3'])
    expect(b.available).toBe(false)
  })
  
  
  it('should check text gt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>', '4']
          ]
        },
      }
    })
    
    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)
    
    expect(b.vm.available).toBe(false)
    
    a.vm.update('3')
    expect(b.vm.available).toBe(false)
    
    a.vm.update('4')
    expect(b.vm.available).toBe(false)
    
    a.vm.update('5')
    expect(b.vm.available).toBe(true)
  })
  
  it('should check text gte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>=', '4']
          ]
        },
      }
    })
    
    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)
    
    expect(b.vm.available).toBe(false)
    
    a.vm.update('3')
    expect(b.vm.available).toBe(false)
    
    a.vm.update('4')
    expect(b.vm.available).toBe(true)
    
    a.vm.update('5')
    expect(b.vm.available).toBe(true)
  })
  
  it('should check text lt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<', '4']
          ]
        },
      }
    })
    
    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)
    
    expect(b.vm.available).toBe(true)
    
    a.vm.update('3')
    expect(b.vm.available).toBe(true)
    
    a.vm.update('4')
    expect(b.vm.available).toBe(false)
    
    a.vm.update('5')
    expect(b.vm.available).toBe(false)
  })
  
  it('should check text lte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<=', '4']
          ]
        },
      }
    })
    
    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)
    
    expect(b.vm.available).toBe(true)
    
    a.vm.update('3')
    expect(b.vm.available).toBe(true)
    
    a.vm.update('4')
    expect(b.vm.available).toBe(true)
    
    a.vm.update('5')
    expect(b.vm.available).toBe(false)
  })
  
  it('should check radiogroup gt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: [
            {value: 1, label: 'asd1'},
            {value: 2, label: 'asd2'},
            {value: 3, label: 'asd3'},
            {value: 4, label: 'asd4'},
            {value: 5, label: 'asd5'},
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.update(1)
    expect(b.available).toBe(false)
    
    a.update(2)
    expect(b.available).toBe(false)
    
    a.update(3)
    expect(b.available).toBe(true)
  })
  
  it('should check radiogroup gte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: [
            {value: 1, label: 'asd1'},
            {value: 2, label: 'asd2'},
            {value: 3, label: 'asd3'},
            {value: 4, label: 'asd4'},
            {value: 5, label: 'asd5'},
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>=', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.update(1)
    expect(b.available).toBe(false)
    
    a.update(2)
    expect(b.available).toBe(true)
    
    a.update(3)
    expect(b.available).toBe(true)
  })
  
  it('should check radiogroup lt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: [
            {value: 1, label: 'asd1'},
            {value: 2, label: 'asd2'},
            {value: 3, label: 'asd3'},
            {value: 4, label: 'asd4'},
            {value: 5, label: 'asd5'},
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update(1)
    expect(b.available).toBe(true)
    
    a.update(2)
    expect(b.available).toBe(false)
    
    a.update(3)
    expect(b.available).toBe(false)
  })
  
  it('should check radiogroup lte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: [
            {value: 1, label: 'asd1'},
            {value: 2, label: 'asd2'},
            {value: 3, label: 'asd3'},
            {value: 4, label: 'asd4'},
            {value: 5, label: 'asd5'},
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<=', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update(1)
    expect(b.available).toBe(true)
    
    a.update(2)
    expect(b.available).toBe(true)
    
    a.update(3)
    expect(b.available).toBe(false)
  })
  
  it('should check equality slider gt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: 30
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>', 40]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.update(40)
    expect(b.available).toBe(false)
    
    a.update(50)
    expect(b.available).toBe(true)
  })
  
  it('should check equality slider gte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: 30
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>=', 40]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.update(40)
    expect(b.available).toBe(true)
    
    a.update(50)
    expect(b.available).toBe(true)
  })
  
  it('should check equality slider lt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: 30
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<', 40]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update(40)
    expect(b.available).toBe(false)
    
    a.update(50)
    expect(b.available).toBe(false)
  })
  
  it('should check equality slider lte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: 30
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<=', 40]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update(40)
    expect(b.available).toBe(true)
    
    a.update(50)
    expect(b.available).toBe(false)
  })
  
  it('should check equality range-slider gt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: [10, 30]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>', 40]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.update([30, 40])
    expect(b.available).toBe(false)
    
    a.update([40, 40])
    expect(b.available).toBe(false)
    
    a.update([40, 70])
    expect(b.available).toBe(false)
    
    a.update(50, 70)
    expect(b.available).toBe(true)
  })
  
  it('should check equality range-slider gte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: [10, 30]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>=', 40]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
  
    a.update([30, 40])
    expect(b.available).toBe(false)
  
    a.update([40, 40])
    expect(b.available).toBe(true)
  
    a.update([40, 70])
    expect(b.available).toBe(true)
  
    a.update(50, 70)
    expect(b.available).toBe(true)
  })
  
  it('should check equality range-slider lt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: [10, 30]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<', 40]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
  
    expect(b.available).toBe(true)
  
    a.update([30, 40])
    expect(b.available).toBe(false)
  
    a.update([40, 40])
    expect(b.available).toBe(false)
  
    a.update([40, 70])
    expect(b.available).toBe(false)
  
    a.update(50, 70)
    expect(b.available).toBe(false)
  })
  
  it('should check equality range-slider lte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: [10, 30]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<=', 40]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
  
    expect(b.available).toBe(true)
  
    a.update([30, 40])
    expect(b.available).toBe(true)
  
    a.update([40, 40])
    expect(b.available).toBe(true)
  
    a.update([40, 70])
    expect(b.available).toBe(false)
  
    a.update(50, 70)
    expect(b.available).toBe(false)
  })
  
/*
  it('should check checkboxgroup gt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: [
            {value: '0', label: 'asd1'},
            {value: 1, label: 'asd1'},
            {value: 2, label: 'asd2'},
            {value: 3, label: 'asd3'},
            {value: '4', label: 'asd4'},
            {value: 5, label: 'asd5'},
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update(['0'])
    expect(b.available).toBe(false)
    
    a.update([1])
    expect(b.available).toBe(false)
    
    a.update([2])
    expect(b.available).toBe(false)
    
    a.update([3])
    expect(b.available).toBe(true)
    
    a.update(['4'])
    expect(b.available).toBe(true)
  })
  
  it('should check checkboxgroup gte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: [
            {value: 1, label: 'asd1'},
            {value: 2, label: 'asd2'},
            {value: 3, label: 'asd3'},
            {value: 4, label: 'asd4'},
            {value: 5, label: 'asd5'},
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '>=', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update(['0'])
    expect(b.available).toBe(false)
    
    a.update([1])
    expect(b.available).toBe(false)
    
    a.update([2])
    expect(b.available).toBe(true)
    
    a.update([3])
    expect(b.available).toBe(true)
    
    a.update(['4'])
    expect(b.available).toBe(true)
  })
  
  it('should check checkboxgroup lt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: [
            {value: 1, label: 'asd1'},
            {value: 2, label: 'asd2'},
            {value: 3, label: 'asd3'},
            {value: 4, label: 'asd4'},
            {value: 5, label: 'asd5'},
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update(['0'])
    expect(b.available).toBe(true)
    
    a.update([1])
    expect(b.available).toBe(true)
    
    a.update([2])
    expect(b.available).toBe(false)
    
    a.update([3])
    expect(b.available).toBe(false)
    
    a.update(['4'])
    expect(b.available).toBe(false)
  })
  
  it('should check checkboxgroup lte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: [
            {value: 1, label: 'asd1'},
            {value: 2, label: 'asd2'},
            {value: 3, label: 'asd3'},
            {value: 4, label: 'asd4'},
            {value: 5, label: 'asd5'},
          ]
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '<=', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.update(['0'])
    expect(b.available).toBe(true)
    
    a.update([1])
    expect(b.available).toBe(true)
    
    a.update([2])
    expect(b.available).toBe(true)
    
    a.update([3])
    expect(b.available).toBe(false)
    
    a.update(['4'])
    expect(b.available).toBe(false)
  })
*/

/*
  it('should check equality list gt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: [
            {type: 'text'}
          ],
          initial: 0
        },
        b: {
          type: 'text',
          conditions: [
            ['a.*', '>', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.add()
    expect(b.available).toBe(false)
    
    a.add()
    expect(b.available).toBe(false)
    
    a.add()
    expect(b.available).toBe(true)
  })
  
  it('should check equality list gte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: [
            {type: 'text'}
          ],
          initial: 0
        },
        b: {
          type: 'text',
          conditions: [
            ['a.*', '>=', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
  
  
    expect(b.available).toBe(false)
  
    a.add()
    expect(b.available).toBe(false)
  
    a.add()
    expect(b.available).toBe(true)
  
    a.add()
    expect(b.available).toBe(true)
  })
  
  it('should check equality list lt', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: [
            {type: 'text'},
            {type: 'text'},
            {type: 'text'},
          ],
          initial: 0
        },
        b: {
          type: 'text',
          conditions: [
            ['a.*', '<', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
  
    expect(b.available).toBe(true)
  
    a.add()
    expect(b.available).toBe(true)
  
    a.add()
    expect(b.available).toBe(false)
  
    a.add()
    expect(b.available).toBe(false)
  })
  
  it('should check equality list lte', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: [
            {type: 'text'},
          ],
          initial: 0
        },
        b: {
          type: 'text',
          conditions: [
            ['a.*', '<=', 2]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.add()
    expect(b.available).toBe(true)
    
    a.add()
    expect(b.available).toBe(true)
    
    a.add()
    expect(b.available).toBe(false)
  })
*/
  
  
  it('should check text starts with', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '^', 'asd']
          ]
        },
      }
    })
    
    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)
    
    expect(b.vm.available).toBe(false)
    
    a.vm.update('as')
    expect(b.vm.available).toBe(false)
    
    a.vm.update('asd')
    expect(b.vm.available).toBe(true)
    
    a.vm.update('sasd')
    expect(b.vm.available).toBe(false)
    
    a.vm.update('asdas')
    expect(b.vm.available).toBe(true)
  })
  
  it('should check text ends with', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '$', 'asd']
          ]
        },
      }
    })
    
    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)
    
    expect(b.vm.available).toBe(false)
    
    a.vm.update('as')
    expect(b.vm.available).toBe(false)
    
    a.vm.update('asd')
    expect(b.vm.available).toBe(true)
    
    a.vm.update('sasd')
    expect(b.vm.available).toBe(true)
    
    a.vm.update('asdas')
    expect(b.vm.available).toBe(false)
  })
  
  
  it('should check equality (checkbox true)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '==', true]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.check()
    expect(b.available).toBe(true)
  })
  
  it('should check equality (checkbox false)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '==', false]
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.check()
    expect(b.available).toBe(false)
  })
  
  it('should check equality (checkbox non-bool true)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          trueValue: 'asd',
          falseValue: 'das'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '==', 'asd']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(false)
    
    a.check()
    expect(b.available).toBe(true)
  })
  
  it('should check equality (checkbox non-bool false)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          trueValue: 'asd',
          falseValue: 'das'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '==', 'das']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    expect(b.available).toBe(true)
    
    a.check()
    expect(b.available).toBe(false)
  })
  
  
  it('should check equality (date before today)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'date'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'before', 'today']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    
    a.update(new Date(Date.now() + 864000000).toISOString().split('T')[0])
    expect(b.available).toBe(false)
    
    a.update(new Date().toISOString().split('T')[0])
    expect(b.available).toBe(false)
    
    a.update(new Date(Date.now() - 864000000).toISOString().split('T')[0])
    expect(b.available).toBe(true)
  })
  
  it('should check equality (date today)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'date'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'today']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
  
    a.update(new Date(Date.now() + 864000000).toISOString().split('T')[0])
    expect(b.available).toBe(false)
  
    a.update(new Date().toISOString().split('T')[0])
    expect(b.available).toBe(true)
  
    a.update(new Date(Date.now() - 864000000).toISOString().split('T')[0])
    expect(b.available).toBe(false)
  })
  
  it('should check equality (date after today)', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'date'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', 'after', 'today']
          ]
        },
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
  
    a.update(new Date(Date.now() + 864000000).toISOString().split('T')[0])
    expect(b.available).toBe(true)
  
    a.update(new Date().toISOString().split('T')[0])
    expect(b.available).toBe(false)
  
    a.update(new Date(Date.now() - 864000000).toISOString().split('T')[0])
    expect(b.available).toBe(false)
  })
  
  
  it('should check multiple `a && b`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
        z: {
          type: 'text',
          conditions: [
            [
              'a', 'empty'
            ],
            [
              'b', 'empty'
            ],
          ]
        }
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    let z = form.vm.el$('z')
    
    expect(z.available).toBe(true)
    
    a.update('asd')
    expect(z.available).toBe(false)
    
    a.update('')
    b.update('asd')
    expect(z.available).toBe(false)
    
    a.update('asd')
    b.update('asd')
    expect(z.available).toBe(false)
  })
  
  it('should check multiple `a || b`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
        z: {
          type: 'text',
          conditions: [
            [
              ['a', 'empty'],
              ['b', 'empty']
            ]
          ]
        }
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    let z = form.vm.el$('z')
    
    expect(z.available).toBe(true)
    
    a.update('asd')
    expect(z.available).toBe(true)
    
    a.update('')
    b.update('asd')
    expect(z.available).toBe(true)
    
    a.update('asd')
    b.update('asd')
    expect(z.available).toBe(false)
  })
  
  it('should check multiple `a && (b || c)`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
        c: {
          type: 'text'
        },
        z: {
          type: 'text',
          conditions: [
            ['a', 'empty'],
            [
              ['b', 'empty'],
              ['c', 'empty'],
            ]
          ]
        }
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    let c = form.vm.el$('c')
    let z = form.vm.el$('z')
    
    expect(z.available).toBe(true)
    
    a.update('asd')
    b.update('')
    c.update('')
    expect(z.available).toBe(false)
    
    a.update('asd')
    b.update('')
    c.update('asd')
    expect(z.available).toBe(false)
    
    a.update('asd')
    b.update('asd')
    c.update('')
    expect(z.available).toBe(false)
    
    a.update('')
    b.update('asd')
    c.update('')
    expect(z.available).toBe(true)
    
    a.update('')
    b.update('')
    c.update('asd')
    expect(z.available).toBe(true)
    
    a.update('')
    b.update('asd')
    c.update('asd')
    expect(z.available).toBe(false)
  })
  
  it('should check multiple `(a || b) && (a || c)`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
        c: {
          type: 'text'
        },
        z: {
          type: 'text',
          conditions: [
            [
              ['a', 'empty'],
              ['b', 'empty'],
            ],
            [
              ['a', 'empty'],
              ['c', 'empty'],
            ]
          ]
        }
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    let c = form.vm.el$('c')
    let z = form.vm.el$('z')
    
    expect(z.available).toBe(true)
    
    a.update('asd')
    b.update('')
    c.update('')
    expect(z.available).toBe(true)
    
    a.update('asd')
    b.update('')
    c.update('asd')
    expect(z.available).toBe(false)
    
    a.update('asd')
    b.update('asd')
    c.update('')
    expect(z.available).toBe(false)
    
    a.update('')
    b.update('asd')
    c.update('')
    expect(z.available).toBe(true)
    
    a.update('')
    b.update('')
    c.update('asd')
    expect(z.available).toBe(true)
    
    a.update('')
    b.update('asd')
    c.update('asd')
    expect(z.available).toBe(true)
    
  })
  
  it('should check multiple `(a || b) && (c || d)`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
        c: {
          type: 'text'
        },
        d: {
          type: 'text'
        },
        z: {
          type: 'text',
          conditions: [
            [
              ['a', 'empty'],
              ['b', 'empty'],
            ],
            [
              ['c', 'empty'],
              ['d', 'empty'],
            ]
          ]
        }
      }
    })
    
    let a = form.vm.el$('a')
    let b = form.vm.el$('b')
    let c = form.vm.el$('c')
    let d = form.vm.el$('d')
    let z = form.vm.el$('z')
    
    expect(z.available).toBe(true)
    
    a.update('asd')
    b.update('')
    c.update('')
    d.update('')
    expect(z.available).toBe(true)
    
    a.update('')
    b.update('asd')
    c.update('')
    d.update('')
    expect(z.available).toBe(true)
    
    a.update('')
    b.update('')
    c.update('asd')
    d.update('')
    expect(z.available).toBe(true)
    
    a.update('')
    b.update('')
    c.update('')
    d.update('asd')
    expect(z.available).toBe(true)
    
    a.update('asd')
    b.update('asd')
    c.update('')
    d.update('')
    expect(z.available).toBe(false)
    
    a.update('asd')
    b.update('')
    c.update('asd')
    d.update('')
    expect(z.available).toBe(true)
    
    a.update('asd')
    b.update('')
    c.update('')
    d.update('asd')
    expect(z.available).toBe(true)
    
    a.update('asd')
    b.update('asd')
    c.update('asd')
    d.update('')
    expect(z.available).toBe(false)
    
    a.update('asd')
    b.update('asd')
    c.update('')
    d.update('asd')
    expect(z.available).toBe(false)
    
    a.update('asd')
    b.update('')
    c.update('asd')
    d.update('asd')
    expect(z.available).toBe(false)
    
    a.update('asd')
    b.update('asd')
    c.update('asd')
    d.update('asd')
    expect(z.available).toBe(false)
  })
  
})