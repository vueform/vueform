import { createForm } from './../../../src/utils/testHelpers'

describe('Element Condition', () => {
  it('should not be available if conditions aren\'t met', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        },
        email: {
          type: 'text',
          conditions: [
            ['name', 'a']
          ]
        }
      }
    })

    expect(form.findAllComponents({ name: 'TextElement' }).at(1).vm.available).toBe(false)
  })

  it('should be available if conditions are met', () => {
    // let LocalVue = createLocalVue()

    // let form = createForm({
    //   schema: {
    //     name: {
    //       type: 'text',
    //       default: 'a'
    //     },
    //     email: {
    //       type: 'text',
    //       conditions: [
    //         ['name', 'a']
    //       ]
    //     }
    //   }
    // }, {
    //   attach: true
    // })

    // let name = form.findAllComponents({ name: 'TextElement' }).at(0)
    // let email = form.findAllComponents({ name: 'TextElement' }).at(1)

    // name.get('input').setValue('a')

    // // expect(email.vm.available).toBe(true)

    // LocalVue.nextTick(() => {
    //   console.log(form.vm.$refs.elements$.$refs.elements$.$options.name, form.vm.elements$)
    // })
  })
})