import { createLocalVue } from '@vue/test-utils'
import { createForm } from 'test-helpers'

describe('Key Element', () => {
  it('should render key element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'key'
        }
      }
    })

    let a = form.findAllComponents({ name: 'KeyElement' }).at(0)

    expect(a.exists()).toBe(true)
    expect(a.get('input').attributes().type).toBe('hidden')

    done()
  })

  it('should load `default` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'key',
          default: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'KeyElement' }).at(0)

    expect(a.vm.value).toBe('aaa')

    done()
  })

  it('should set `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'key',
        }
      }
    })

    let a = form.findAllComponents({ name: 'KeyElement' }).at(0)

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
          type: 'key',
        }
      }
    })

    let a = form.findAllComponents({ name: 'KeyElement' }).at(0)

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
          type: 'key',
        }
      }
    })

    let a = form.findAllComponents({ name: 'KeyElement' }).at(0)

    form.vm.load({
      a: 'aaa'
    })

    expect(a.vm.value).toBe('aaa')

    done()
  })
})