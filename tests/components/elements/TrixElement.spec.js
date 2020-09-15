import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform, check, uncheck } from './../../../src/utils/testHelpers'

describe('Trix Element Rendering', () => {
  it('should render Trix', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    done()
  })
})