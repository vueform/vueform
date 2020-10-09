import { createLocalVue } from '@vue/test-utils'
import { createForm } from 'test-helpers'

describe('Meta Element', () => {
  it('should render meta element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'meta'
        }
      }
    })

    let a = form.findAllComponents({ name: 'MetaElement' }).at(0)

    expect(a.exists()).toBe(true)
    expect(a.html()).toBe('')

    done()
  })

  it('should load `default` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'meta',
          default: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'MetaElement' }).at(0)

    expect(a.vm.value).toBe('aaa')

    done()
  })

  it('should set `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'meta',
        }
      }
    })

    let a = form.findAllComponents({ name: 'MetaElement' }).at(0)

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
          type: 'meta',
        }
      }
    })

    let a = form.findAllComponents({ name: 'MetaElement' }).at(0)

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
          type: 'meta',
        }
      }
    })

    let a = form.findAllComponents({ name: 'MetaElement' }).at(0)

    form.vm.load({
      a: 'aaa'
    })

    expect(a.vm.value).toBe('aaa')

    done()
  })
})