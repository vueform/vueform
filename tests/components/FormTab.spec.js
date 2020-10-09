import { createForm } from 'test-helpers'
import { createLocalVue } from '@vue/test-utils'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

describe('Form Tab', () => {
  it('should render step label', () => {
    let form = createForm({
      tabs: {
        first: {
          label: 'First',
          elements: ['a']
        },
        second: {
          label: 'Second',
          elements: ['b']
        },
      },
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
      }
    })

    expect(form.findAllComponents({ name: 'FormTab' }).at(0).html()).toContain('First')
    expect(form.findAllComponents({ name: 'FormTab' }).at(1).html()).toContain('Second')
  })

  it('should add class defined in schema to classes list', () => {
    let form = createForm({
      tabs: {
        first: {
          label: 'First',
          class: 'class-a',
          elements: ['a']
        },
        second: {
          label: 'Second',
          elements: ['b']
        },
      },
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
      }
    })

    expect(form.findAllComponents({ name: 'FormTab' }).at(0).classes()).toContain('class-a')
  })
  
  it('should activate on click and deactivate others', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      tabs: {
        first: {
          label: 'First',
          elements: ['a']
        },
        second: {
          label: 'Second',
          elements: ['b']
        },
      },
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
      }
    })

    LocalVue.nextTick(() => {
      let first = form.findAllComponents({ name: 'FormTab' }).at(0)
      let second = form.findAllComponents({ name: 'FormTab' }).at(1)

      expect(first.vm.active).toBe(true)
      expect(second.vm.active).toBe(false)

      second.get('a').trigger('click')

      expect(first.vm.active).toBe(false)
      expect(second.vm.active).toBe(true)

      done()
    })
  })
  
  it('should show active\'s elements and hide others', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      tabs: {
        first: {
          label: 'First',
          elements: ['a', 'b']
        },
        second: {
          label: 'Second',
          elements: ['c', 'd']
        },
      },
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
      }
    })

    let second = form.findAllComponents({ name: 'FormTab' }).at(1)

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)
    let c = form.findAllComponents({ name: 'TextElement' }).at(2)
    let d = form.findAllComponents({ name: 'TextElement' }).at(3)

    expect(a.vm.name).toBe('a')
    expect(b.vm.name).toBe('b')
    expect(c.vm.name).toBe('c')
    expect(d.vm.name).toBe('d')

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(a.vm.$vnode.elm).toBeVisible()
      expect(b.vm.$vnode.elm).toBeVisible()
      expect(c.vm.$vnode.elm).not.toBeVisible()
      expect(d.vm.$vnode.elm).not.toBeVisible()

      second.get('a').trigger('click')

      LocalVue.nextTick(() => {
        expect(a.vm.$vnode.elm).not.toBeVisible()
        expect(b.vm.$vnode.elm).not.toBeVisible()
        expect(c.vm.$vnode.elm).toBeVisible()
        expect(d.vm.$vnode.elm).toBeVisible()
        done()
      })
    })
    })
  })
})

describe('Form Tab Conditions', () => {
  it('should forward conditions to child elements', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let conditions = [
      ['a', 1],
      ['b', 2],
    ]

    let form = createForm({
      tabs: {
        first: {
          label: 'First',
          elements: ['a', 'b']
        },
        second: {
          label: 'Second',
          elements: ['c', 'd'],
          conditions: conditions
        },
      },
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
          type: 'text',
          conditions: [
            ['c', 3]
          ]
        },
      }
    })

    let c = form.findAllComponents({ name: 'TextElement' }).at(2)
    let d = form.findAllComponents({ name: 'TextElement' }).at(3)

    expect(c.vm.name).toBe('c')
    expect(d.vm.name).toBe('d')

    LocalVue.nextTick(() => {
      expect(c.vm.conditions).toStrictEqual(conditions)
      expect(d.vm.conditions).toStrictEqual(_.concat([['c', 3]], conditions))
      done()
    })
  })

  it('should hide tab if its conditions aren\'t met', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      tabs: {
        first: {
          label: 'First',
          elements: ['a']
        },
        second: {
          label: 'Second',
          elements: ['b'],
          conditions: [
            ['a', 1]
          ],
        },
      },
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
      }
    })

    let second = form.findAllComponents({ name: 'FormTab' }).at(1)

    expect(second.vm.name).toBe('second')

      expect(second.html()).toBe('')
      done()
  })

  it('should show tab if its conditions are met', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      tabs: {
        first: {
          label: 'First',
          elements: ['a']
        },
        second: {
          label: 'Second',
          elements: ['b'],
          conditions: [
            ['a', 1]
          ],
        },
      },
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.name).toBe('a')

    a.vm.value = 1

    let second = form.findAllComponents({ name: 'FormTab' }).at(1)

    expect(second.vm.name).toBe('second')

    LocalVue.nextTick(() => {
      expect(second.html()).toContain('Second')
      done()
    })
  })
})

describe('Form Tab Events', () => {
  it('should trigger `active` event when selected', () => {
    let onActiveMock = jest.fn(() => {})

    let form = createForm({
      tabs: {
        first: {
          label: 'First',
          elements: ['a'],
        },
        second: {
          label: 'Second',
          elements: ['b'],
          onActive: onActiveMock
        },
      },
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
      }
    })

    let second = form.findAllComponents({ name: 'FormTab' }).at(1)

    expect(second.vm.name).toBe('second')

    expect(onActiveMock.mock.calls.length).toBe(0)

    second.get('a').trigger('click')

    expect(onActiveMock.mock.calls.length).toBe(1)
  })

  it('should trigger `inactive` event when an other tab is selected', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onInactiveMock = jest.fn(() => {})

    let form = createForm({
      tabs: {
        first: {
          label: 'First',
          elements: ['a'],
          onInactive: onInactiveMock
        },
        second: {
          label: 'Second',
          elements: ['b'],
        },
      },
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
      }
    })

    let second = form.findAllComponents({ name: 'FormTab' }).at(1)

    expect(second.vm.name).toBe('second')

    expect(onInactiveMock.mock.calls.length).toBe(0)

    LocalVue.nextTick(() => {
      second.get('a').trigger('click')
      
      expect(onInactiveMock.mock.calls.length).toBe(1)
      done()
    })
  })
})