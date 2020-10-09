import { createLocalVue } from '@vue/test-utils'
import { createForm } from 'test-helpers'

describe('Static Element', () => {
  it('should render html `content` in wrapper by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'static',
          content: '<b>Hello</b>'
        }
      }
    })

    expect(form.findComponent({ name: 'BaseElementLayout' }).exists()).toBe(true)
    expect(form.findComponent({ name: 'StaticElement' }).html()).toContain('<b>Hello</b>')
    
    done()
  })

  it('should not render layout if `wrap` false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'static',
          content: '<b>Hello</b>',
          wrap: false
        }
      }
    })

    expect(form.findComponent({ name: 'BaseElementLayout' }).exists()).toBe(false)
    expect(form.findComponent({ name: 'StaticElement' }).html()).toContain('<b>Hello</b>')
    
    done()
  })
  
  it('should render Vue component', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'static',
          content: LocalVue.extend({
            props: ['el$'],
            render(h) {
              return h('b', 'Hello')
            }
          })
        }
      }
    })

    expect(form.findComponent({ name: 'StaticElement' }).html()).toContain('<b>Hello</b>')
    
    done()
  })
  
  it('should return undefined/nulled/false properties', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'static',
          content: 'Hello'
        }
      }
    })

    let el = form.findComponent({ name: 'StaticElement' })

    el.vm.value = 'a'
    el.vm.model = 'a'

    expect(el.vm.value).toBe(undefined)
    expect(el.vm.model).toBe(undefined)
    expect(el.vm.dirty).toBe(false)
    expect(el.vm.validated).toBe(true)
    expect(el.vm.invalid).toBe(false)
    expect(el.vm.pending).toBe(false)
    expect(el.vm.debouncing).toBe(false)
    expect(el.vm.errors.length).toBe(0)
    expect(el.vm.error).toBe(undefined)
    
    done()
  })
  
  it('should return undefined for methods', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'static',
          content: 'Hello'
        }
      }
    })

    let el = form.findComponent({ name: 'StaticElement' })

    expect(el.vm.validate()).toBe(undefined)
    expect(el.vm.update()).toBe(undefined)
    expect(el.vm.load()).toBe(undefined)
    expect(el.vm.reset()).toBe(undefined)
    expect(el.vm.clear()).toBe(undefined)
    expect(el.vm.handleKeyup()).toBe(undefined)
    expect(el.vm.handleChange()).toBe(undefined)
    
    done()
  })
})