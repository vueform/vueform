export default function (componentClasses) {
  const toArray = function (componentClasses, baseComponentClasses) {
    let arrayClasses = {}

    _.each(componentClasses, (classes, className) => {
      arrayClasses[className] = classesToArray(classes, [className], baseComponentClasses)
    })

    return arrayClasses
  }

  const classesToArray = function (classes, path, baseComponentClasses) {
    let arrayClasses = classes
    let base = path ? _.get(baseComponentClasses, path.join('.')) : undefined

    if (typeof classes === 'string') {
      arrayClasses = classes.length > 0 ? classes.split(' ') : []
    } else if (_.isPlainObject(classes)) {
      if (base && Array.isArray(base)) {
        arrayClasses = [classes]
      } else if (!base || _.isPlainObject(base)) {
        arrayClasses = {}

        _.each(classes, (subclasses, subclassName) => {
          arrayClasses[subclassName] = classesToArray(subclasses, path.concat([subclassName]), baseComponentClasses)
        })
      }
    } else if (typeof classes === 'boolean' || (typeof classes === 'object' && [
      'ComputedRefImpl', 'RefImpl'
    ].indexOf(classes?.constructor?.name) !== -1)) {
      throw Error(`Cannot add conditional class to ${this.component}: '${path.join('.')}'`)
    }

    return arrayClasses
  }

  return toArray(componentClasses, componentClasses)
}