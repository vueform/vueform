import { createForm, createInlineForm } from 'test-helpers'

export default function (cases, elementType, options, mockList, baseSchema, testChanges) {
  _.each(cases, (c) => {
    for(let i = 0; i < 5; i++) {
      let describeName = ''
      let name = 'should work when'
      let sync
      let inline
      let hasModel = false
      let emptyModel = true
      let updateModel = false

      switch (i) {
        case 0:
          describeName += 'SFC'
          inline = false
          sync = false
          break

        case 1:
          describeName += 'inline'
          inline = true
          sync = false
          break

        case 2:
          describeName += 'inline with v-model'
          inline = true
          sync = false
          hasModel = true
          break

        case 3:
          describeName += 'inline with empty v-model & sync'
          inline = true
          sync = true
          hasModel = true
          emptyModel = true
          updateModel = false
          break

        case 4:
          describeName += 'inline with pre-existing data in v-model & sync'
          inline = true
          sync = true
          hasModel = true
          emptyModel = false
          updateModel = true
          break
      }

      describe(describeName, () => {
        name += c.formDefault ? ' form default' : ' no form default'
        name += c.elementDefault ? ', element default' : ', no element default'

        it(name, async () => {
          let mocks = {}

          mockList.forEach((m) => {
            mocks[m] = jest.fn()
          })

          let config = {
            mounted() {
              this.on('change', mocks.formChangeMock)
            }
          }

          let form, app, inlineForm
          let schema = baseSchema(mocks, elementType)

          if (c.elementDefault) {
            _.each(c.elementDefault, (elDefault, el) => {
              if (schema[el] !== undefined) {
                schema[el].default = elDefault
              }
              // Thinking about Group elements
              else {
                // set to `el` or `el2`
                if (Object.keys(schema.el.schema).indexOf(el) !== -1) {
                  schema.el.schema[el].default = elDefault
                } else {
                  schema.el2.schema[el].default = elDefault
                }
              }
            })
          }

          if (inline) {
            inlineForm = createInlineForm(Object.assign({}, {
              props: {
                schema,
                default: c.formDefault || {},
                sync,
              },
            }, hasModel ? {
              model: emptyModel ? {} : c.model,
            } : {}), config)

            app = inlineForm.app
            form = inlineForm.form
          } else {
            form = createForm({
              schema,
              default: c.formDefault || {},
              sync,
            }, config)
          }

          await testChanges(form, mocks, options, updateModel, emptyModel ? _.cloneDeep(c.initial) : _.cloneDeep(c.initialWithModel), hasModel, app)
        })
      })
    }
  })
}