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
const mergeComponentClasses = function (base, add, strategy = 'extend') {
  let classes = _.cloneDeep(base)

  _.each(add, (classes_, key) => {
    classes[key] = strategy === 'extend'
      ? extendClasses(base[key] || null, classes_)
      : overrideClasses(classes_)
  })

  return classes
}

/**
 * Merge two list of classes, eg:
 * base = 'a'
 * add = 'b'
 * -> ['a', 'b']
 */
const extendClasses = function (base, add) {
  if (add === null || _.isEmpty(add)) {
    return base
  }

  if (base === null || _.isEmpty(base)) {
    return add
  }

  let classes

  if (typeof base === 'string') {
    base = base.split(' ')
  } else if (_.isPlainObject(base)) {
    base = [base]
  }

  if (typeof add === 'string') {
    add = add.split(' ')
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
  if (override === null || _.isEmpty(override)) {
    return []
  }

  return Array.isArray(override) ? override : [override]
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

export default mergeClasses

export {
  extendClasses,
  overrideClasses,
  mergeComponentClasses,
  addClassHelpers,
}