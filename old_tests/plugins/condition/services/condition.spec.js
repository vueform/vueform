import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from './.test-helpers'

describe('Condition Plugin Service', () => {
  it('should `checkGlobal` condition', (done) => {
    let form = createForm({
      conditions: {
        globalCondition(form$){
          if (!form$.el$('a')) {
            return false
          }

          return form$.el$('a').value == 'aaa'
        }
      },
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: ['globalCondition']
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(false)

    a.get('input').setValue('aaa')

    expect(b.vm.available).toBe(true)

    done()
  })

  it('should `checkFunction` condition', (done) => {
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

    a.get('input').setValue('aaa')

    expect(b.vm.available).toBe(true)

    done()
  })

  it('should `checkArray` condition', (done) => {
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

    a.get('input').setValue('aaa')

    expect(b.vm.available).toBe(true)

    done()
  })

  it('should throw error for unknown condition type', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      let form = createForm({
        schema: {
          a: {
            type: 'text'
          },
          b: {
            type: 'text',
            conditions: [
              {a:1}
            ]
          },
        }
      })
    }).toThrowError()

    LocalVue.nextTick(() => {
      console.error = originalConsoleError
    })

    done()
  })

  it('should check equality in array', (done) => {
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

    a.get('input').setValue('aaa')
    expect(b.vm.available).toBe(true)

    a.get('input').setValue('aa')
    expect(b.vm.available).toBe(true)

    a.get('input').setValue('a')
    expect(b.vm.available).toBe(false)

    done()
  })

  it('should check non-equality in array', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text',
          conditions: [
            ['a', '!=', ['aaa', 'aa']]
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(true)

    a.get('input').setValue('aaa')
    expect(b.vm.available).toBe(false)

    a.get('input').setValue('aa')
    expect(b.vm.available).toBe(false)

    a.get('input').setValue('a')
    expect(b.vm.available).toBe(true)

    done()
  })

  it('should check equality', (done) => {
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

    a.get('input').setValue('aaa')
    expect(b.vm.available).toBe(true)

    done()
  })

  it('should check non-equality', (done) => {
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

    a.get('input').setValue('aaa')
    expect(b.vm.available).toBe(false)

    done()
  })

  it('should check gt', (done) => {
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

    a.get('input').setValue(4)
    expect(b.vm.available).toBe(true)

    a.get('input').setValue(2)
    expect(b.vm.available).toBe(false)

    done()
  })

  it('should check gte', (done) => {
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

    a.get('input').setValue(3)
    expect(b.vm.available).toBe(true)

    a.get('input').setValue(2)
    expect(b.vm.available).toBe(false)

    a.get('input').setValue(4)
    expect(b.vm.available).toBe(true)

    done()
  })

  it('should check lt', (done) => {
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

    a.get('input').setValue(2)
    expect(b.vm.available).toBe(true)

    a.get('input').setValue(3)
    expect(b.vm.available).toBe(false)

    a.get('input').setValue(4)
    expect(b.vm.available).toBe(false)

    done()
  })

  it('should check lte', (done) => {
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

    a.get('input').setValue(2)
    expect(b.vm.available).toBe(true)

    a.get('input').setValue(3)
    expect(b.vm.available).toBe(true)

    a.get('input').setValue(4)
    expect(b.vm.available).toBe(false)

    done()
  })

  it('should check chanied conditions', (done) => {
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

    a.get('input').setValue('aaa')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(false)
    expect(d.vm.available).toBe(false)

    b.get('input').setValue('bbb')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(false)

    c.get('input').setValue('ccc')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)

    a.get('input').setValue('')
    expect(b.vm.available).toBe(false)
    expect(c.vm.available).toBe(false)
    expect(d.vm.available).toBe(false)

    done()
  })

  it('should check group conditions', (done) => {
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

    a.get('input').setValue('aaa')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(false)
    expect(e.vm.available).toBe(false)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(false)
    expect(i.vm.available).toBe(false)

    c.get('input').setValue('ccc')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)
    expect(e.vm.available).toBe(false)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(false)
    expect(i.vm.available).toBe(false)

    d.get('input').setValue('ddd')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)
    expect(e.vm.available).toBe(true)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(false)
    expect(i.vm.available).toBe(false)

    e.get('input').setValue('eee')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)
    expect(e.vm.available).toBe(true)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(true)
    expect(i.vm.available).toBe(false)

    h.get('input').setValue('hhh')
    expect(b.vm.available).toBe(true)
    expect(c.vm.available).toBe(true)
    expect(d.vm.available).toBe(true)
    expect(e.vm.available).toBe(true)
    expect(f.vm.available).toBe(true)
    expect(g.vm.available).toBe(true)
    expect(h.vm.available).toBe(true)
    expect(i.vm.available).toBe(true)

    done()
  })

  it('should check wildcard conditions', (done) => {
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

    e.get('input').setValue('eee')
    expect(d0.vm.available).toBe(true)

    b0.get('input').setValue('bbb')
    expect(c0.vm.available).toBe(true)

    done()
  })

  it('should check circular condition', (done) => {
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

    a.get('input').setValue(2)
    expect(a.vm.available).toBe(true)
    expect(b.vm.available).toBe(false)

    a.get('input').setValue(0)
    expect(a.vm.available).toBe(true)
    expect(b.vm.available).toBe(true)

    b.get('input').setValue(2)
    expect(a.vm.available).toBe(false)
    expect(b.vm.available).toBe(true)

    done()
  })
})