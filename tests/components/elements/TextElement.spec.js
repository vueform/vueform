import features from './../../features'
import elements from './../../../api/elements'
import { createForm, findAllComponents } from 'test-helpers'

describe('Text Element', () => {
  const options = {
    default: {
      fieldType: 'input',
    },
    events: {
      events: [
        {
          change: ['currentValue', 'previousValue']
        }
      ]
    }
  }

  _.each(elements.text.features, (feature) => {
    if (!features[feature]) {
      return
    }

    describe(`${_.upperFirst(feature)} feature`, features[feature]('text', Object.assign({}, options.default, options[feature] || {})))
  })

  // it('should add `name` attribute to input', () => {
  //   let form = createForm({
  //     schema: {
  //       el: {
  //         type: 'text',
  //       }
  //     }
  //   })

  //   let el = findAllComponents(form, { name: 'TextElement' }).at(0)

  //   expect(el.find('input').attributes('name')).toBe('el')
  // })

  // describe('Classes feature', () => {
  //   it('should set default `input` class on `input`', () => {
  //     let form = createForm({
  //       schema: {
  //         el: {
  //           type: 'text',
  //         }
  //       }
  //     })

  //     let el = findAllComponents(form, { name: 'TextElement' }).at(0)

  //     expect(el.find('input').classes(el.vm.defaultClasses.input)).toBe(true)
  //   })

  //   it('should set default `inputContainer` class on field wrapper if it has addon', () => {
  //     let form = createForm({
  //       schema: {
  //         el: {
  //           type: 'text',
  //           addons: {
  //             before: '$'
  //           }
  //         }
  //       }
  //     })

  //     let el = findAllComponents(form, { name: 'TextElement' }).at(0)

  //     expect(el.find('input').element.parentElement.className.split(' ').indexOf(el.vm.defaultClasses.inputContainer) !== -1).toBe(true)
  //   })

  //   it('should not set default `inputContainer` class on field wrapper if it does not have addon', () => {
  //     let form = createForm({
  //       schema: {
  //         el: {
  //           type: 'text',
  //         }
  //       }
  //     })

  //     let el = findAllComponents(form, { name: 'TextElement' }).at(0)

  //     expect(el.find('input').element.parentElement.className.split(' ').indexOf(el.vm.defaultClasses.inputContainer) === -1).toBe(true)
  //   })
  // })
})