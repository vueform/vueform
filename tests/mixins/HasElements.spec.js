import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

describe('Has Elements Mixin', () => {
  it('should throw error when element type is unknown', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      let form = createForm({
        schema: {
          a: {
            type: 'texty',
            
          }
        }
      })
    }).toThrow(TypeError)
    
    console.error = originalConsoleError
    
    done()
  })
})