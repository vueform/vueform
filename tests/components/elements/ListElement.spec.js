import features from './../../features'
import elements from './../../../api/elements'
import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'

describe('List Element', () => {
  const options = {
    childrenList: {
      prototypes: [
        {
          element: {
            type: 'text'
          }
        },
        {
          object: {
            schema: {
              child: {
                type: 'text'
              }
            }
          }
        },
      ],
      childTypes: ['text', 'object'],
      childValues: ['value{i}', { child: 'value{i}' }],
      childSchemas: [
        {
          type: 'text'
        },
        {
          type: 'object',
          schema: {
            child: {
              type: 'text'
            }
          }
        }
      ]
    }
  }

  _.each(elements.list.features, (feature) => {
    if (!features[feature]) {
      return
    }

    describe(`${_.upperFirst(feature)} feature`, features[feature]('list', Object.assign({}, options.default, options[feature] || {})))
  })

  // describe('Classes feature', () => {
  //   it('should set default `childrenContainer` class on the container of child elements', () => {
  //     let form = createForm({
  //       schema: {
  //         el: {
  //           type: 'group',
  //           schema: {
  //             child1: {
  //               type: 'text'
  //             }
  //           }
  //         }
  //       }
  //     })

  //     let el = findAllComponents(form, { name: 'GroupElement' }).at(0)
  //     let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
      
  //     expect(child1.element.parentElement.className.split(' ').indexOf(el.vm.classes.childrenContainer) !== -1).toBe(true)
  //   })
  // })
})