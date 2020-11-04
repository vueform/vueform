import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import { nextTick } from 'vue'
import asyncForEach from './../../src/utils/asyncForEach'

function name (type) {
  return  `${_.upperFirst(type)}Element`
}

export function replaceValue(value, i) {
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

function childSchema(prototype) {
  let key = _.keys(prototype)[0]

  if (key == 'element') {
    return prototype.element
  }
  else {
    return {
      type: 'object',
      schema: prototype.object.schema
    }
  }
}

function childType(prototype) {
  let key = _.keys(prototype)[0]

  return key == 'element' ? prototype.element.type : 'object'
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
      expect(el.child$[0].schema.type).toStrictEqual(childType(prototype))
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
      expect(el.instances[0]).toStrictEqual(Object.assign({}, childSchema(prototype), {
        key: 0
      }))
      expect(el.instances[1]).toStrictEqual(Object.assign({}, childSchema(prototype), {
        key: 1
      }))
    })
  })
}

export const initial = function (elementType, elementName, options) {
  it('should have '+options.initial+' as `initial` by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.initial).toBe(options.initial)
  })

  it('should set `initial` from schema', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 3,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.initial).toBe(3)
  })

  it('should set `initial` based on default length', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [1,2,3],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.initial).toBe(3)
  })

  it('should `initial` be equal to initial option if default length is smaller', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 5,
          default: [1,2,3],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.initial).toBe(5)
  })

  it('should `initial` be equal to default length if initial is smaller', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 3,
          default: [1,2,3,4,5],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.initial).toBe(5)
  })
}

export const next = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should `next` be equal to 0 if there are no instances', async () => {
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

      expect(el.next).toBe(0)
    })
  })

  it('should `next` be equal to 1 + the highest key from instances', async () => {
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

      el.add() // key: 0
      el.add() // key: 1
      el.add() // key: 2
      el.add() // key: 3

      el.remove(1) // key: 1

      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(2)
      expect(el.instances[2].key).toBe(3)

      expect(el.next).toBe(4)
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
      expect(el.child$[0].schema.type).toStrictEqual(childType(prototype))
      expect(el.child$[1].schema.type).toStrictEqual(childType(prototype))

      expect(_.keys(el.children$).length).toBe(2)
      expect(el.children$[0].schema.type).toStrictEqual(childType(prototype))
      expect(el.children$[1].schema.type).toStrictEqual(childType(prototype))

      expect(el.instances.length).toBe(2)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(1)
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
      expect(el.child$[0].schema.type).toStrictEqual(childType(prototype))
      expect(el.child$[1].schema.type).toStrictEqual(childType(prototype))
      expect(el.child$[2].schema.type).toStrictEqual(childType(prototype))
      expect(el.child$[3].schema.type).toStrictEqual(childType(prototype))

      expect(_.keys(el.children$).length).toBe(4)
      expect(el.children$[0].schema.type).toStrictEqual(childType(prototype))
      expect(el.children$[1].schema.type).toStrictEqual(childType(prototype))
      expect(el.children$[2].schema.type).toStrictEqual(childType(prototype))
      expect(el.children$[3].schema.type).toStrictEqual(childType(prototype))

      expect(el.instances.length).toBe(4)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(1)
      expect(el.instances[2].key).toBe(2)
      expect(el.instances[3].key).toBe(3)
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

      expect(_.keys(el.children$).length).toBe(2)
      expect(el.children$[1].schema.type).toStrictEqual(childType(prototype))

      expect(el.instances.length).toBe(2)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(1)
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

      expect(_.keys(el.children$).length).toBe(4)
      expect(el.children$[1].schema.type).toStrictEqual(childType(prototype))
      expect(el.children$[2].schema.type).toStrictEqual(childType(prototype))
      expect(el.children$[3].schema.type).toStrictEqual(childType(prototype))

      expect(el.instances.length).toBe(4)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(1)
      expect(el.instances[2].key).toBe(2)
      expect(el.instances[3].key).toBe(3)
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

      // @todo
      // expect(el.child$.length).toBe(2)
      expect(el.child$[0].value).toStrictEqual(replaceValue(options.childValues[i], 0))
      expect(el.child$[1].value).toStrictEqual(replaceValue(options.childValues[i], 2))
      expect(el.child$[0].schema.key).toStrictEqual(0)
      expect(el.child$[1].schema.key).toStrictEqual(2)

      expect(_.keys(el.children$).length).toBe(2)
      expect(el.children$[0].value).toStrictEqual(replaceValue(options.childValues[i], 0))
      expect(el.children$[1].value).toStrictEqual(replaceValue(options.childValues[i], 2))
      expect(el.children$[0].schema.key).toStrictEqual(0)
      expect(el.children$[1].schema.key).toStrictEqual(2)

      expect(el.instances.length).toBe(2)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(2)
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

      // @todo
      // expect(el.child$.length).toBe(3)
      expect(el.child$[0].value).toStrictEqual(replaceValue(options.childValues[i], 0))
      expect(el.child$[1].value).toStrictEqual(replaceValue(options.childValues[i], 2))
      expect(el.child$[2].value).toStrictEqual(replaceValue(options.childValues[i], 4))
      expect(el.child$[0].schema.key).toStrictEqual(0)
      expect(el.child$[1].schema.key).toStrictEqual(2)
      expect(el.child$[2].schema.key).toStrictEqual(4)

      // expect(_.keys(el.children$).length).toBe(3)
      expect(el.children$[0].value).toStrictEqual(replaceValue(options.childValues[i], 0))
      expect(el.children$[1].value).toStrictEqual(replaceValue(options.childValues[i], 2))
      expect(el.children$[2].value).toStrictEqual(replaceValue(options.childValues[i], 4))
      expect(el.children$[0].schema.key).toStrictEqual(0)
      expect(el.children$[1].schema.key).toStrictEqual(2)
      expect(el.children$[2].schema.key).toStrictEqual(4)

      expect(el.instances.length).toBe(3)
      expect(el.instances[0].key).toBe(0)
      expect(el.instances[1].key).toBe(2)
      expect(el.instances[2].key).toBe(4)
    })
  })
}

export const initialInstances = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should not set `initialInstances` if prototype is not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          initial: 3,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.instances.length).toBe(0)
  })

  it('should set `initialInstances` if prototype is defined', async () => {
    await asyncForEach(prototypes, async (prototype, i) => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            initial: 3,
          }, prototype)
        }
      })

      let el = form.vm.el$('el')

      expect(el.instances.length).toBe(3)
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