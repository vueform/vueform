import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'composition-api'

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

    c.get('#c').setValue('ccc')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)
    expect(e.vm.available).toBe(false)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(false)
    expect(i.vm.available).toBe(false)

    d.get('#d').setValue('ddd')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)
    expect(e.vm.available).toBe(true)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(false)
    expect(i.vm.available).toBe(false)

    e.get('#e').setValue('eee')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)
    expect(e.vm.available).toBe(true)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(true)
    expect(i.vm.available).toBe(false)

    h.get('#h').setValue('hhh')
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

    b0.get('#b').setValue('bbb')
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
})