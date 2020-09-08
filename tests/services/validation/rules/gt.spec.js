import { createLocalVue } from '@vue/test-utils'
import { createForm, change, setInstances } from './../../../../src/utils/testHelpers'

describe('Greater Than Rule', () => {
  it('should validate if the element\'s value is greater than an other field\'s if value is string', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    change(a, 'aaa')
    change(b, 'aa')

    expect(a.vm.invalid).toBe(false)

    change(a, 'aa')

    expect(a.vm.invalid).toBe(true)

    done()
  })

  it('should validate if the element\'s value is greater than an other field\'s if value is numeric', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'numeric|gt:b'
        },
        b: {
          type: 'text',
          rules: 'numeric'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    change(a, '5')
    change(b, '3')

    expect(a.vm.invalid).toBe(false)

    change(a, '3')

    expect(a.vm.invalid).toBe(true)

    done()
  })

  it('should validate if the element\'s value is greater than an other field\'s if value is array', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|gt:b',
          element: {
            type: 'text'
          }
        },
        b: {
          type: 'list',
          rules: 'array',
          element: {
            type: 'text'
          }
        },
      }
    })

    let a = form.findAllComponents({ name: 'ListElement' }).at(0)
    let b = form.findAllComponents({ name: 'ListElement' }).at(1)

    setInstances(a, 5)
    setInstances(b, 3)

    LocalVue.nextTick(() => {
      a.vm.validate()

      expect(a.vm.invalid).toBe(false)

      setInstances(a, 3)

      LocalVue.nextTick(() => {
        a.vm.validate()

        expect(a.vm.invalid).toBe(true)

        done()
      })
    })
  })

  it('should watch for change in other field\'s value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    LocalVue.nextTick(() => {
      change(a, 'aaa')
      change(b, 'aa')

      expect(a.vm.invalid).toBe(false)

      change(b, 'aaaa')

      LocalVue.nextTick(() => {
        expect(a.vm.invalid).toBe(true)

        done()
      })
    })
  })

  it('should include other field\'s size in error message', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    change(b, 'aaaaa')
    change(a, 'aaa')

    expect(a.vm.invalid).toBe(true)
    expect(a.vm.error).toContain(5)

    done()
  })

  it('should watch other field\'s size in error message', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    change(b, 'aaaaa')
    change(a, 'aaa')

    expect(a.vm.invalid).toBe(true)
    expect(a.vm.error).toContain(5)

    change(b, 'aaaaaaa')

    LocalVue.nextTick(() => {
      expect(a.vm.error).toContain(7)

      done()
    })
  })
})