import { createForm } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'

describe('ElementText', () => {
  let form = createForm({
    schema: {
      el: {
        type: 'buttons',
        buttons: [
          {
            label: 'Button'
          }
        ]
      }
    }
  })

  let Button = findAllComponents(form, { name: 'FormButton' }).at(0)

  useElementComponent('buttons', 'FormButton', { buttons: [{label: 'Button'}] }, {
    mergeWith: {
      [Button.vm.mainClass]: {
        [Button.vm.classes[Button.vm.align.value]]: true,
        [Button.classes.loading]: Button.vm.isLoading.value,
        [Button.classes.disabled]: Button.vm.isDisabled.value,
      }
    }
  })

  // describe('rendering', () => {
  //   it('should render', () => {
  //     let before = 'before'

  //     let form = createForm({
  //       schema: {
  //         el: {
  //           type: 'text',
  //           before,
  //         }
  //       }
  //     })

  //     let Text = form.findComponent({ name: 'ElementText' })

  //     expect(Text.html()).toContain(before)
  //   })
  // })
})