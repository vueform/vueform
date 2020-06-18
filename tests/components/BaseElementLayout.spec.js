import { createForm } from './../../src/utils/testHelpers'

describe('Base Element Layout Rendering', () => {
  it('should render label if config.labels is false, but element has label', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          label: 'Name'
        }
      }
    }, {
      config: {
        labels: false,
      }
    })

    expect(form.findComponent({name:'ElementLabel'}).exists()).toBe(true)
  })

  it('should not render label if config.labels is false and element does not have label', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    }, {
      config: {
        labels: false,
      }
    })

    expect(form.findComponent({name:'ElementLabel'}).exists()).toBe(false)
  })

  it('should render label if config.labels is true, but element does not have label', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    }, {
      config: {
        labels: true,
      }
    })
    
    expect(form.findComponent({name:'ElementLabel'}).exists()).toBe(true)
  })

  it('should render label if config.labels is true, but element does have label', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          label: 'Name'
        }
      }
    }, {
      config: {
        labels: true,
      }
    })
    
    expect(form.findComponent({name:'ElementLabel'}).exists()).toBe(true)
  })
})