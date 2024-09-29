import { nextTick } from 'vue'
import { createInlineForm, createForm, findAllComponents, destroy } from 'test-helpers'

const cols = ['apple', 'pear', 'orange']
const rows = ['red', 'blue', 'green']

const dataNull = {
  radio: {
    red: null,
    blue: null,
    green: null
  },
  checkbox: {
    red: [],
    blue: [],
    green: []
  },
  text: {
    red: {
      apple: null,
      pear: null,
      orange: null,
    },
    blue: {
      apple: null,
      pear: null,
      orange: null,
    },
    green: {
      apple: null,
      pear: null,
      orange: null,
    },
  }
}

const data1 = {
  radio: {
    red: 'apple',
    blue: 'pear',
    green: null
  },
  checkbox: {
    red: ['apple', 'pear'],
    blue: ['pear'],
    green: []
  },
  text: {
    red: {
      apple: 'a',
      pear: 'b',
      orange: null,
    },
    blue: {
      apple: null,
      pear: 'b',
      orange: null,
    },
    green: {
      apple: null,
      pear: null,
      orange: null,
    },
  }
}

const data2 = {
  radio: {
    red: null,
    blue: 'pear',
    green: 'orange'
  },
  checkbox: {
    red: [],
    blue: ['pear'],
    green: ['pear', 'orange']
  },
  text: {
    red: {
      apple: null,
      pear: null,
      orange: null,
    },
    blue: {
      apple: null,
      pear: 'b',
      orange: null,
    },
    green: {
      apple: null,
      pear: 'b',
      orange: 'c',
    },
  }
}

const getElPath = (parentType) => {
  let elPath

  switch (parentType) {
    case null:
      elPath = 'el'
      break

    case 'object':
      elPath = 'object.el'
      break

    case 'group':
      elPath = 'group.el'
      break

    case 'list':
      elPath = 'list.0'
      break

    case 'nested-list':
      elPath = 'nestedList.0.el'
      break
  }
  
  return elPath
}

const check = (form, data, parentType) => {
  let elPath = getElPath(parentType)
  let formData
  let formRequestData

  switch (parentType) {
    case null:
      formData = form.vm.data.el
      formRequestData = form.vm.requestData.el
      break

    case 'object':
      formData = form.vm.data.object.el
      formRequestData = form.vm.requestData.object.el
      break

    case 'group':
      formData = form.vm.data.el
      formRequestData = form.vm.requestData.el
      break

    case 'list':
      formData = form.vm.data.list[0]
      formRequestData = form.vm.requestData.list[0]
      break

    case 'nested-list':
      formData = form.vm.data.nestedList[0].el
      formRequestData = form.vm.requestData.nestedList[0].el
      break
  }

  const el = form.vm.el$(elPath)

  const elData = parentType === 'list' ? el.data[0] : el.data.el
  const elRequestData = parentType === 'list' ? el.requestData[0] : el.requestData.el

  expect(el.value).toEqual(data)
  expect(elData).toEqual(data)
  expect(elRequestData).toEqual(data)
  expect(formData).toEqual(data)
  expect(formRequestData).toEqual(data)
}

const createSchema = (el, parentType) => {
  let schema

  switch (parentType) {
    case null:
      schema = {
        el,
      }
      break

    case 'object':
      schema = {
        object: {
          type: 'object',
          schema: {
            el,
          }
        }
      }
      break

    case 'group':
      schema = {
        group: {
          type: 'group',
          schema: {
            el,
          }
        }
      }
      break

    case 'list':
      schema = {
        list: {
          type: 'list',
          element: el,
        }
      }
      break

    case 'nested-list':
      schema = {
        nestedList: {
          type: 'list',
          object: {
            schema: {
              el,
            }
          }
        }
      }
      break
  }

  return schema
}

const createDataObj = (def, parentType) => {
  let formDefault

  switch (parentType) {
    case null:
      formDefault = {
        el: def
      }
      break

    case 'object':
      formDefault = {
        object: {
          el: def
        }
      }
      break

    case 'group':
      formDefault = {
        el: def
      }
      break

    case 'list':
      formDefault = {
        list: [def]
      }
      break

    case 'nested-list':
      formDefault = {
        nestedList: [{
          el: def
        }]
      }
      break
  }

  return formDefault
}

const getAppDataEl = (app, parentType) => {
  switch (parentType) {
    case null:
      return app.vm.data.el
      break

    case 'object':
      return app.vm.data.object.el
      break

    case 'group':
      return app.vm.data.el
      break

    case 'list':
      return app.vm.data.list[0]
      break

    case 'nested-list':
      return app.vm.data.nestedList[0].el
      break
  }
}

const setAppDataEl = (data, app, parentType) => {
  switch (parentType) {
    case null:
      app.vm.$set(app.vm.data, 'el', data)
      break

    case 'object':
      app.vm.$set(app.vm.data.object, 'el', data)
      break

    case 'group':
      app.vm.$set(app.vm.data, 'el', data)
      break

    case 'list':
      app.vm.$set(app.vm.data.list, '0', data)
      break

    case 'nested-list':
      app.vm.$set(app.vm.data.nestedList[0], 'el', data)
      break
  }
}

export const value = function (elementType, elementName, options) {
  const inputTypes = ['radio', 'checkbox', 'text']
  // const inputTypes = ['radio']

  inputTypes.forEach((type) => {
    const inputType = type === 'text'
      ? { type: 'text' }
      : type

    const parentTypes = [null, 'object', 'group', 'list', 'nested-list']
    // const parentTypes = ['list']

    parentTypes.forEach((parentType) => {
      let pt = ` in ${parentType}`

      if (!parentType) {
        pt = ''
      }

      if (pt === 'nested-list') {
        pt = ' in nested list'
      }

      it(`should have proper data/value${pt} when ${type} with no default`, () => {
        let form = createForm({
          schema: createSchema({
            type: elementType,
            inputType,
            rows,
            cols,
          }, parentType),
        })

        let el = form.vm.el$('el')

        check(form, dataNull[type], parentType)
      })
      
      it(`should have proper data/value${pt} when ${type} with form default`, () => {
        let form = createForm({
          default: createDataObj(data1[type], parentType),
          schema: createSchema({
            type: elementType,
            inputType,
            rows,
            cols,
          }, parentType),
        })

        let el = form.vm.el$('el')

        check(form, data1[type], parentType)
      })

      it(`should have proper data/value${pt} when ${type} with el default`, () => {
        let form = createForm({
          schema: createSchema({
            type: elementType,
            inputType,
            rows,
            cols,
            default: data1[type],
          }, parentType),
        })

        let el = form.vm.el$('el')

        check(form, data1[type], parentType)
      })

      it(`should have proper data/value${pt} when ${type} with el + form default`, () => {
        let form = createForm({
          default: createDataObj(data1[type], parentType),
          schema: createSchema({
            type: elementType,
            inputType,
            rows,
            cols,
            default: data2[type],
          }, parentType),
        })

        let el = form.vm.el$('el')

        check(form, data1[type], parentType)
      })

      it(`should have proper data/value${pt} when ${type} with form data without sync`, () => {
        let { form } = createInlineForm({
          props: {
            schema: createSchema({
              type: elementType,
              inputType,
              rows,
              cols,
            }, parentType),
          },
          model: {},
        })

        let el = form.vm.el$('el')

        check(form, dataNull[type], parentType)
      })

      it(`should have proper data/value${pt} when ${type} with form data with sync with empty data`, () => {
        let { form } = createInlineForm({
          props: {
            schema: createSchema({
              type: elementType,
              inputType,
              rows,
              cols,
            }, parentType),
            sync: true,
          },
          model: {},
        })

        let el = form.vm.el$('el')

        check(form, dataNull[type], parentType)
      })

      it(`should have proper data/value${pt} when ${type} with form data with sync with data`, () => {
        let { form } = createInlineForm({
          props: {
            schema: createSchema({
              type: elementType,
              inputType,
              rows,
              cols,
            }, parentType),
            sync: true,
          },
          model: createDataObj(data1[type], parentType),
        })

        let el = form.vm.el$('el')

        check(form, data1[type], parentType)
      })

      it(`should have proper data/value${pt} when ${type} with load/update/clear/reset`, () => {
        let form = createForm({
          default: createDataObj(data1[type], parentType),
          schema: createSchema({
            type: elementType,
            inputType,
            rows,
            cols,
          }, parentType),
        })

        let el = form.vm.el$(getElPath(parentType))

        check(form, data1[type], parentType)

        el.clear()
        check(form, dataNull[type], parentType)

        el.update(data2[type])
        check(form, data2[type], parentType)

        el.reset()
        check(form, data1[type], parentType)

        el.load(data2[type])
        check(form, data2[type], parentType)
      })

      it(`should have proper data/value${pt} when ${type} with load/update/clear/reset with empty form data`, () => {
        let { form } = createInlineForm({
          props: {
            default: createDataObj(data1[type], parentType),
            schema: createSchema({
              type: elementType,
              inputType,
              rows,
              cols,
            }, parentType),
          },
          model: {},
        })

        let el = form.vm.el$(getElPath(parentType))

        el.clear()
        check(form, dataNull[type], parentType)

        el.update(data2[type])
        check(form, data2[type], parentType)

        el.reset()
        check(form, data1[type], parentType)

        el.load(data2[type])
        check(form, data2[type], parentType)
      })

      it(`should have proper data/value${pt} when ${type} with load/update/clear/reset with empty form data and sync`, () => {
        let { form, app } = createInlineForm({
          props: {
            default: createDataObj(data1[type], parentType),
            schema: createSchema({
              type: elementType,
              inputType,
              rows,
              cols,
            }, parentType),
            sync: true,
          },
          model: createDataObj(data2[type], parentType),
        })

        let el = form.vm.el$(getElPath(parentType))

        check(form, data2[type], parentType)
        expect(getAppDataEl(app, parentType)).toEqual(data2[type])

        el.clear()
        check(form, dataNull[type], parentType)
        expect(getAppDataEl(app, parentType)).toEqual(dataNull[type])

        el.update(data2[type])
        check(form, data2[type], parentType)
        expect(getAppDataEl(app, parentType)).toEqual(data2[type])

        el.reset()
        check(form, data1[type], parentType)
        expect(getAppDataEl(app, parentType)).toEqual(data1[type])

        el.load(data2[type])
        check(form, data2[type], parentType)
        expect(getAppDataEl(app, parentType)).toEqual(data2[type])

        el.clear()
        check(form, dataNull[type], parentType)
        expect(getAppDataEl(app, parentType)).toEqual(dataNull[type])

        setAppDataEl(data1[type], app, parentType)
        check(form, data1[type], parentType)
        expect(getAppDataEl(app, parentType)).toEqual(data1[type])

        setAppDataEl(data2[type], app, parentType)
        check(form, data2[type], parentType)
        expect(getAppDataEl(app, parentType)).toEqual(data2[type])
      })

      it(`should trigger onChange once only${pt} when value changes when ${type}`, async () => {
        const elChangeMock = jest.fn(() => {})
        const formChangeMock = jest.fn(() => {})

        let form = createForm({
          onChange: formChangeMock,
          schema: createSchema({
            type: elementType,
            inputType,
            rows,
            cols,
            onChange: elChangeMock,
          }, parentType)
        })

        let el = form.vm.el$(getElPath(parentType))

        el.update(data1[type])
        await nextTick()
        expect(elChangeMock).toHaveBeenNthCalledWith(1, data1[type], dataNull[type], el)
        expect(formChangeMock).toHaveBeenNthCalledWith(1, createDataObj(data1[type], parentType), createDataObj(dataNull[type], parentType), form.vm)

        el.clear()
        await nextTick()
        expect(elChangeMock).toHaveBeenNthCalledWith(2, dataNull[type], data1[type], el)
        expect(formChangeMock).toHaveBeenNthCalledWith(2,createDataObj(dataNull[type], parentType), createDataObj(data1[type], parentType), form.vm)

        let elName = parentType === 'list' ? '0' : 'el'

        switch (type) {
          case 'radio':
            el.children$[`${elName}_0_0`].check()
            await nextTick()
            expect(elChangeMock).toHaveBeenNthCalledWith(3, { ...dataNull[type], red: 'apple' }, dataNull[type], el)
            expect(formChangeMock).toHaveBeenNthCalledWith(3, createDataObj({ ...dataNull[type], red: 'apple' }, parentType), createDataObj(dataNull[type], parentType), form.vm)
            break

          case 'checkbox':
            el.children$[`${elName}_0_0`].check()
            await nextTick()
            expect(elChangeMock).toHaveBeenNthCalledWith(3, { ...dataNull[type], red: ['apple'] }, dataNull[type], el)
            expect(formChangeMock).toHaveBeenNthCalledWith(3, createDataObj({ ...dataNull[type], red: ['apple'] }, parentType), createDataObj(dataNull[type], parentType), form.vm)
            break

          case 'text':
            el.children$[`${elName}_0_0`].update('aaa')
            await nextTick()
            expect(elChangeMock).toHaveBeenNthCalledWith(3, { ...dataNull[type], red: { apple: 'aaa', pear: null, orange: null } }, dataNull[type], el)
            expect(formChangeMock).toHaveBeenNthCalledWith(3, createDataObj({ ...dataNull[type], red: { apple: 'aaa', pear: null, orange: null } }, parentType), createDataObj(dataNull[type], parentType), form.vm)
            break
        }
      })
    })

    it(`should have proper data/value when ${type} list adds value with no default`, async () => {
      let form = createForm({
        schema: createSchema({
          type: elementType,
          inputType,
          rows,
          cols,
        }, 'list'),
      })

      let list = form.vm.el$('list')
      list.add()

      await nextTick()

      let el = form.vm.el$('list.1')

      expect(el.value).toEqual(dataNull[type])
      expect(el.data[1]).toEqual(dataNull[type])
      expect(el.requestData[1]).toEqual(dataNull[type])
      expect(form.vm.data.list[1]).toEqual(dataNull[type])
      expect(form.vm.requestData.list[1]).toEqual(dataNull[type])
    })

    it(`should have proper data/value when ${type} list adds value with el default`, async () => {
      let form = createForm({
        schema: createSchema({
          type: elementType,
          inputType,
          rows,
          cols,
          default: data1[type],
        }, 'list'),
      })

      let list = form.vm.el$('list')
      list.add()

      await nextTick()

      let el = form.vm.el$('list.1')

      expect(el.value).toEqual(data1[type])
      expect(el.data[1]).toEqual(data1[type])
      expect(el.requestData[1]).toEqual(data1[type])
      expect(form.vm.data.list[1]).toEqual(data1[type])
      expect(form.vm.requestData.list[1]).toEqual(data1[type])
    })

    it(`should have proper data/value when ${type} list adds value with form default`, async () => {
      let form = createForm({
        default: createDataObj(data1[type], 'list'),
        schema: createSchema({
          type: elementType,
          inputType,
          rows,
          cols,
        }, 'list'),
      })

      let list = form.vm.el$('list')
      list.add()

      await nextTick()

      let el = form.vm.el$('list.1')

      expect(el.value).toEqual(dataNull[type])
      expect(el.data[1]).toEqual(dataNull[type])
      expect(el.requestData[1]).toEqual(dataNull[type])
      expect(form.vm.data.list[1]).toEqual(dataNull[type])
      expect(form.vm.requestData.list[1]).toEqual(dataNull[type])
    })

    it(`should have proper data/value when ${type} list adds value with el + form default`, async () => {
      let form = createForm({
        default: createDataObj(data1[type], 'list'),
        schema: createSchema({
          type: elementType,
          inputType,
          rows,
          cols,
          default: data1[type],
        }, 'list'),
      })

      let list = form.vm.el$('list')
      list.add()

      await nextTick()

      let el = form.vm.el$('list.1')

      expect(el.value).toEqual(data1[type])
      expect(el.data[1]).toEqual(data1[type])
      expect(el.requestData[1]).toEqual(data1[type])
      expect(form.vm.data.list[1]).toEqual(data1[type])
      expect(form.vm.requestData.list[1]).toEqual(data1[type])
    })

    it(`should have proper data/value when ${type} list adds value with form data without sync`, async () => {
      let { form, app } = createInlineForm({
        props: {
          schema: createSchema({
            type: elementType,
            inputType,
            rows,
            cols,
          }, 'list'),
        },
        model: {},
      })

      let list = form.vm.el$('list')
      list.add()

      await nextTick()

      let el = form.vm.el$('list.1')

      expect(el.value).toEqual(dataNull[type])
      expect(el.data[1]).toEqual(dataNull[type])
      expect(el.requestData[1]).toEqual(dataNull[type])
      expect(form.vm.data.list[1]).toEqual(dataNull[type])
      expect(form.vm.requestData.list[1]).toEqual(dataNull[type])
      expect(app.vm.data.list[1]).toEqual(dataNull[type])
    })

    it(`should have proper data/value when ${type} list adds value with empty form data with sync`, async () => {
      let { form, app } = createInlineForm({
        props: {
          schema: createSchema({
            type: elementType,
            inputType,
            rows,
            cols,
          }, 'list'),
          sync: true,
        },
        model: {},
      })

      let list = form.vm.el$('list')
      list.add()

      await nextTick()

      let el = form.vm.el$('list.1')

      expect(el.value).toEqual(dataNull[type])
      expect(el.data[1]).toEqual(dataNull[type])
      expect(el.requestData[1]).toEqual(dataNull[type])
      expect(form.vm.data.list[1]).toEqual(dataNull[type])
      expect(form.vm.requestData.list[1]).toEqual(dataNull[type])
      expect(app.vm.data.list[1]).toEqual(dataNull[type])
    })

    it(`should have proper data/value when ${type} list adds value with form data with sync`, async () => {
      let { form, app } = createInlineForm({
        props: {
          schema: createSchema({
            type: elementType,
            inputType,
            rows,
            cols,
          }, 'list'),
          sync: true,
        },
        model: {
          list: [
            data1[type],
          ]
        },
      })

      let el0 = form.vm.el$('list.0')

      expect(el0.value).toEqual(data1[type])
      expect(el0.data[0]).toEqual(data1[type])
      expect(el0.requestData[0]).toEqual(data1[type])
      expect(form.vm.data.list[0]).toEqual(data1[type])
      expect(form.vm.requestData.list[0]).toEqual(data1[type])
      expect(app.vm.data.list[0]).toEqual(data1[type])

      let list = form.vm.el$('list')
      list.add()

      await nextTick()

      let el1 = form.vm.el$('list.1')

      expect(el1.value).toEqual(dataNull[type])
      expect(el1.data[1]).toEqual(dataNull[type])
      expect(el1.requestData[1]).toEqual(dataNull[type])
      expect(form.vm.data.list[1]).toEqual(dataNull[type])
      expect(form.vm.requestData.list[1]).toEqual(dataNull[type])
      expect(app.vm.data.list[1]).toEqual(dataNull[type])
    })

    it(`should have proper data/value when ${type} list adds value with form data with sync and el default`, async () => {
      let { form, app } = createInlineForm({
        props: {
          schema: createSchema({
            type: elementType,
            inputType,
            rows,
            cols,
            default: data2[type],
          }, 'list'),
          sync: true,
        },
        model: {
          list: [
            data1[type],
          ]
        },
      })

      let el0 = form.vm.el$('list.0')

      expect(el0.value).toEqual(data1[type])
      expect(el0.data[0]).toEqual(data1[type])
      expect(el0.requestData[0]).toEqual(data1[type])
      expect(form.vm.data.list[0]).toEqual(data1[type])
      expect(form.vm.requestData.list[0]).toEqual(data1[type])
      expect(app.vm.data.list[0]).toEqual(data1[type])

      let list = form.vm.el$('list')
      list.add()

      await nextTick()

      let el1 = form.vm.el$('list.1')

      expect(el1.value).toEqual(data2[type])
      expect(el1.data[1]).toEqual(data2[type])
      expect(el1.requestData[1]).toEqual(data2[type])
      expect(form.vm.data.list[1]).toEqual(data2[type])
      expect(form.vm.requestData.list[1]).toEqual(data2[type])
      expect(app.vm.data.list[1]).toEqual(data2[type])

      setAppDataEl(data1[type], app, 'list')

      await nextTick()

      expect(el0.value).toEqual(data1[type])
      expect(el0.data[0]).toEqual(data1[type])
      expect(el0.requestData[0]).toEqual(data1[type])
      expect(form.vm.data.list[0]).toEqual(data1[type])
      expect(form.vm.requestData.list[0]).toEqual(data1[type])
      expect(app.vm.data.list[0]).toEqual(data1[type])
    })

    it(`should have proper data/value when ${type} nested list adds value with form data with sync and el default`, async () => {
      let { form, app } = createInlineForm({
        props: {
          schema: createSchema({
            type: elementType,
            inputType,
            rows,
            cols,
            default: data2[type],
          }, 'nested-list'),
          sync: true,
        },
        model: {
          nestedList: [
            { el: data1[type], }
          ]
        },
      })

      let el0 = form.vm.el$('nestedList.0.el')

      expect(el0.value).toEqual(data1[type])
      expect(el0.data.el).toEqual(data1[type])
      expect(el0.requestData.el).toEqual(data1[type])
      expect(form.vm.data.nestedList[0].el).toEqual(data1[type])
      expect(form.vm.requestData.nestedList[0].el).toEqual(data1[type])
      expect(app.vm.data.nestedList[0].el).toEqual(data1[type])

      let nestedList = form.vm.el$('nestedList')
      nestedList.add()

      await nextTick()

      let el1 = form.vm.el$('nestedList.1.el')

      expect(el1.value).toEqual(data2[type])
      expect(el1.data.el).toEqual(data2[type])
      expect(el1.requestData.el).toEqual(data2[type])
      expect(form.vm.data.nestedList[1].el).toEqual(data2[type])
      expect(form.vm.requestData.nestedList[1].el).toEqual(data2[type])
      expect(app.vm.data.nestedList[1].el).toEqual(data2[type])

      setAppDataEl(data1[type], app, 'nested-list')

      await nextTick()

      expect(el0.value).toEqual(data1[type])
      expect(el0.data.el).toEqual(data1[type])
      expect(el0.requestData.el).toEqual(data1[type])
      expect(form.vm.data.nestedList[0].el).toEqual(data1[type])
      expect(form.vm.requestData.nestedList[0].el).toEqual(data1[type])
      expect(app.vm.data.nestedList[0].el).toEqual(data1[type])
    })
  })
}