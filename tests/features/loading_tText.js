import { createForm, destroy } from 'test-helpers'

export const isLoading = function (elementType, elementName, options) {
  it('should return true if loading=true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loading: true
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isLoading).toBe(true)
    
    // destroy(form) // teardown
  })

  it('should return true if pending', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          rules: 'required'
        }
      }
    })

    let el = form.vm.el$('el')

    el.Validators.en[0].pending = true

    expect(el.isLoading).toBe(true)

    el.Validators.en[0].pending = false

    expect(el.isLoading).toBe(false)

    // destroy(form) // teardown
  })
}