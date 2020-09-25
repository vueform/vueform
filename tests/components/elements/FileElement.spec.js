import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'

describe('File Element Rendering', () => {
  it('should render file element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.exists()).toBe(true)

    done()
  })
})