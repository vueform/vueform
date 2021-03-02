import { createForm, createInlineForm } from 'test-helpers'

export default function (cases, elementType, options, baseSchema, testChanges) {
  _.each(cases, (c) => {
    for(let i = 0; i < 3; i++) {
      let describeName = ''
      let name = 'should work when'

      switch (i) {
        case 0:
          describeName += 'no v-model'
          break

        case 1:
          describeName += 'empty v-model'
          break

        case 2:
          describeName += 'v-model with value'
          break
      }

      describe(describeName, () => {
        name += c.formDefault ? ' form default' : ' no form default'
        name += c.elementDefault ? ', element default' : ', no element default'

        it(name, async () => {
          let mocks = {
            formChangeMock: jest.fn(),
            elChangeMock: jest.fn(),
            el2ChangeMock: jest.fn(),
          }

          let config = {
            mounted() {
              this.on('change', mocks.formChangeMock)
            }
          }

          let form, app, inline
          let schema = baseSchema(mocks, elementType)

          if (c.elementDefault) {
            _.each(c.elementDefault, (elDefault, el) => {
              schema[el].default = elDefault
            })
          }

          if (i === 0) {
            form = createForm({
              schema,
              default: c.formDefault || {}
            }, config)
          } else {
            inline = createInlineForm({
              model: i === 2 ? c.model : {},
              props: {
                schema,
                default: c.formDefault || {}
              }
            }, config)

            app = inline.app
            form = inline.form
          }

          await testChanges(form, mocks, options, i === 2, i === 2 ? c.initialWithModel : c.initial, app)
        })
      })
    }
  })
}