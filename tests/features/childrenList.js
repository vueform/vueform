import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import { nextTick } from 'vue'
import asyncForEach from './../../src/utils/asyncForEach'

function name (type) {
  return  `${_.upperFirst(type)}Element`
}

function replaceValue(value, i) {
  if (_.isString(value)) {
    return value.replace('{i}', i)
  }
  else {
    let key = _.keys(value)[0]

    return {
      [key]: replaceValue(value[key], i)
    }
  }
} 

export const child$ = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `child$` be an empty array by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 1,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.child$).toStrictEqual([])
  })

  it('should `child$` contain instances of child components', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      expect(el.child$.length).toBe(1)
      expect(el.child$[0].schema.type).toStrictEqual(options.childTypes[i])
    })
  })
}

export const instances = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `instances` be an empty array by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.instances).toStrictEqual([])
  })

  it('should `instances` contain instances of prototypes with key', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()

      expect(el.instances.length).toBe(2)
      expect(el.instances[0]).toStrictEqual(Object.assign({}, options.childSchemas[i], {
        key: 0
      }))
      expect(el.instances[1]).toStrictEqual(Object.assign({}, options.childSchemas[i], {
        key: 1
      }))
    })
  })
}

export const add = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `add` child', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()

      await nextTick()

      expect(el.child$.length).toBe(2)
      expect(el.child$[0].schema.type).toStrictEqual(options.childTypes[i])
      expect(el.child$[1].schema.type).toStrictEqual(options.childTypes[i])
    })
  })

  it('should `add` multiple children', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()
      el.add()
      el.add()

      await nextTick()

      expect(el.child$.length).toBe(4)
      expect(el.child$[0].schema.type).toStrictEqual(options.childTypes[i])
      expect(el.child$[1].schema.type).toStrictEqual(options.childTypes[i])
      expect(el.child$[2].schema.type).toStrictEqual(options.childTypes[i])
      expect(el.child$[3].schema.type).toStrictEqual(options.childTypes[i])
    })
  })

  it('should `add` child with data', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add(options.childValues[i])

      await nextTick()

      expect(el.child$.length).toBe(2)
      expect(el.child$[1].value).toStrictEqual(options.childValues[i])
    })
  })

  it('should `add` multiple children with data', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add(options.childValues[i])
      el.add(options.childValues[i])
      el.add(options.childValues[i])

      await nextTick()

      expect(el.child$.length).toBe(4)
      expect(el.child$[1].value).toStrictEqual(options.childValues[i])
      expect(el.child$[2].value).toStrictEqual(options.childValues[i])
      expect(el.child$[3].value).toStrictEqual(options.childValues[i])
    })
  })

  it('should not `add` child if disabled', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
            disabled: true,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add()

      await nextTick()

      expect(el.child$.length).toBe(1)
    })
  })

  it('should return index on `add`', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 1,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      let index1 = el.add()
      let index2 = el.add()
      let index3 = el.add()

      expect(index1).toBe(1)
      expect(index2).toBe(2)
      expect(index3).toBe(3)
    })
  })
}

export const remove = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `remove` child', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add(replaceValue(options.childValues[i], 0))
      el.add(replaceValue(options.childValues[i], 1))
      el.add(replaceValue(options.childValues[i], 2))

      await nextTick()

      expect(el.child$.length).toBe(3)

      el.remove(1)
      
      await nextTick()

      expect(el.child$.length).toBe(2)
      expect(el.child$[0].value).toStrictEqual(replaceValue(options.childValues[i], 0))
      expect(el.child$[1].value).toStrictEqual(replaceValue(options.childValues[i], 2))
    })
  })

  it('should `remove` multiple children', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 0,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      el.add(replaceValue(options.childValues[i], 0))
      el.add(replaceValue(options.childValues[i], 1))
      el.add(replaceValue(options.childValues[i], 2))
      el.add(replaceValue(options.childValues[i], 3))
      el.add(replaceValue(options.childValues[i], 4))

      await nextTick()

      expect(el.child$.length).toBe(5)

      el.remove(3)
      el.remove(1)
      
      await nextTick()

      expect(el.child$.length).toBe(3)
      expect(el.child$[0].value).toStrictEqual(replaceValue(options.childValues[i], 0))
      expect(el.child$[1].value).toStrictEqual(replaceValue(options.childValues[i], 2))
      expect(el.child$[2].value).toStrictEqual(replaceValue(options.childValues[i], 4))
    })
  })
}

export default function (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName, options)
    })
  }
}