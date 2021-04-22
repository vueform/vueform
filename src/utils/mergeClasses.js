import _ from 'lodash'

const mergeClasses = function (base, add) {
  let components = _.cloneDeep(base)

  _.each(add, (classes, component) => {
    components[component] = mergeComponentClasses(base[component] || {}, classes)
  })

  return components
}

const mergeComponentClasses = function (base, add) {
  let classes = _.cloneDeep(base)

  _.each(add, (classes_, key) => {
    classes[key] = mergeClass(base[key] || null, classes_)
  })

  return classes
}

const mergeClass = function (base, add) {
  if (add === null || _.isEmpty(add)) {
    return base
  }

  if (base === null || _.isEmpty(base)) {
    return add
  }

  let classes

  if (typeof base === 'string') {
    base = base.split(' ')
  }

  if (_.isPlainObject(base)) {
    // { class: true } + { class2: true } => { class: true, class2: true }
    if (_.isPlainObject(add)) {
      classes = Object.assign({}, base, add)
    }

    // { class: true } + ['class2'] => [{ class: true }, 'class2']
    else if (_.isArray(add)) {
      classes = _.concat([base], add)
    } else {

    // { class: true } + 'class2' => [ class: true, class2: true]
      classes = Object.assign({}, base, {
        [add]: true
      })
    }
  }
  else {
    // ['class'] + { class2: true } => ['class', { class2: true }]
    if (_.isPlainObject(add)) {
      classes = _.concat(base, [add])
    }

    // ['class'] + ['class2'] => ['class', 'class2']
    else if (_.isArray(add) ) {
      classes = base

      _.each(add, (a) => {
        if (classes.indexOf(a) === -1) {
          classes = _.concat(classes, [a])
        }
      })

    // ['class'] + 'class2' => ['class', 'class2']
    } else {
      classes = _.concat(base, [add])
    }
  }

  return classes
}

export default mergeClasses

export {
  mergeClass,
  mergeComponentClasses,
}