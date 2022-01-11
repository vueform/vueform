import _ from 'lodash'

/**
 * Merge two list of components, eg:
 * base = {
 *  ElementLayout: { container: 'a' },
 *  TextElement: { container: 'aa' },
 * },
 * add = {
 *  ElementLayout: { container: 'b' },
 *  TextElement: { container: 'bb' },
 * }
 * -> {
 *  ElementLayout: { container: ['a', 'b'] },
 *  TextElement: { container: ['aa', 'bb'] },
 * }
 */
const mergeClasses = function (base, add, strategy = 'extend') {
  let components = _.cloneDeep(base)

  _.each(add, (classes, component) => {
    components[component] = mergeComponentClasses(base[component] || {}, classes, strategy)
  })

  return components
}

/**
 * Merge two list of classes, eg:
 * base = { container: 'a', innerContainer: 'aa' }
 * add = { container: 'b', innerContainer: 'bb' }
 * -> { container: ['a', 'b'], innerContainer: ['aa', 'bb'] }
 */
const mergeComponentClasses = function (base, merge) {
  let classes = _.cloneDeep(base)

  // _.each(merge, (classes_, key) => {
  //   let mergedClasses = []

  //   switch (strategy) {
  //     case 'extend':
  //       mergedClasses = extendClasses(base[key], classes_)
  //       break

  //     case 'override':
  //       mergedClasses = overrideClasses(classes_)
  //       break

  //     case 'remove':
  //       mergedClasses = removeClasses(base[key], classes_)
  //       break

  //     case 'replace':
  //       mergedClasses = replaceClasses(base[key], classes_)
  //       break
  //   }

  //   classes[key] = mergedClasses
  // })

  return classes
}

/**
 * Merge two list of classes, eg:
 * base = 'a'
 * add = 'b'
 * -> ['a', 'b']
 */
const extendClasses = function (base, add) {
  if (add === null || add === undefined || _.isEmpty(add)) {
    return base
  }

  if (base === null || base === undefined || _.isEmpty(base)) {
    return add
  }

  let classes

  if (typeof base === 'string') {
    base = base.length > 0 ? base.split(' ') : []
  } else if (_.isPlainObject(base)) {
    base = [base]
  }

  if (typeof add === 'string') {
    add = add.length > 0 ? add.split(' ') : []
  } else if (_.isPlainObject(add)) {
    add = [add]
  }

  classes = base.concat(add)

  return classes
}

/**
 * Override classes, eg:
 * base = 'a'
 * override = 'b'
 * -> ['b']
 */
const overrideClasses = function (override) {
  return override === null || _.isEmpty(override)
    ? []
    : override
}

/**
 * Remove classes, eg:
 * base = ['a', 'b']
 * remove = ['b']
 * -> ['a']
 */
const removeClasses = function (base, remove) {
  return base.filter((c) => {
    if (typeof c === 'string') {
      return remove.indexOf(c) === -1
    }
  })
}

/**
 * Replace classes, eg:
 * base = ['a', 'b']
 * replace = { b: c }
 * -> ['a', 'c']
 */
const replaceClasses = function (base, replace) {
  return base.map((c) => {
    if (typeof c === 'string') {
      return Object.keys(replace).indexOf(c) !== -1
        ? replace[c]
        : c
    }
  })
}

const addClassHelpers = function (form$, componentName, classes) {
  const config = form$.$vueform.config

  if (config.env !== 'development' || !config.classHelpers) {
    return classes
  }

  let addons = {}

  Object.keys(classes).forEach((classname) => {
    addons[classname] = `__${componentName}-${classname}__`
  })

  classes = mergeComponentClasses(classes, addons)

  return classes
}

const componentClassesToArray = function (componentClasses) {
  let arrayClasses = {}

  _.each(componentClasses, (c, className) => {
    let arrayClass = c

    if (_.isPlainObject(c)) {
      arrayClass = [c]
    } else if (typeof c === 'string') {
      arrayClass = c.length > 0 ? c.split(' ') : []
    }

    arrayClasses[className] = arrayClass
  })

  return arrayClasses
}

export default mergeClasses

export {
  mergeClasses,
  extendClasses,
  overrideClasses,
  mergeComponentClasses,
  addClassHelpers,
  componentClassesToArray,
}