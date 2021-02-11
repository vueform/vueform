import { createForm, createElement } from 'test-helpers'
import { markRaw } from 'composition-api'
import useForm$ from './../../src/composables/useForm$'
import useTheme from './../../src/composables/useTheme'
import useConditions from './../../src/composables/useConditions'
import usePath from './../../src/composables/elements/usePath'
import useBaseElement from './../../src/composables/elements/useBaseElement'

import { elementComponent as baseElementComponent } from './elements'

export const elementComponent = function (elementType, elementName, options) {
  baseElementComponent(elementType, elementName, options)

  it('should return component if defined', () => {
    const component =  markRaw({
      name: 'TextElementCustom',
      props: {
        name: {
          required: true,
          type: [String, Number]
        },
        conditions: {
          required: false,
          type: [Array],
        }
      },
      setup(props, context) {
        const form$ = useForm$(props, context)
        const theme = useTheme(props, context)
        const path = usePath(props, context)

        const baseElement = useBaseElement(props, context, {
          form$: form$.form$
        })

        const conditions = useConditions(props, context, {
          form$: form$.form$,
          path: path.path,
        })

        return {
          ...form$,
          ...theme,
          ...baseElement,
          ...path,
          ...conditions,
        }
      },
      render(h) {
        return createElement(h, 'div', 'hello')
      }
    })

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text',
              component,
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.elementComponent(form.vm.schema.el.schema.child)).toStrictEqual(component)
  })
}