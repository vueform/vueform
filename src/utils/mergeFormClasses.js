import _ from 'lodash'

const KEYS = ['addClasses', 'removeClasses', 'replaceClasses', 'overrideClasses']

export default class MergeFormClasses
{
  mergedClasses = {}

  constructor(options) {
    this.mergedClasses = _.cloneDeep(this.toArray(options.theme))

    if (options.config) {
      this.merge(options.config)
    }

    if (options.form) {
      this.merge(options.form)
    }
  }

  get classes () {
    return this.mergedClasses
  }

  merge(merge) {
    _.each(_.pick(merge, KEYS), (components, key) => {
      switch (key) {
        case 'addClasses':
          this[key](components)
          break
      }
    })
  }
  
  addClasses(components) {
    components = this.toArray(components)

    _.each(components, (componentClasses, componentName) => {
      _.each(componentClasses, (classes, className) => {
        this.addComponentClasses(classes, [componentName, className])
      })
    })
  }

  addComponentClasses(classes, levels) {
    let mergedClasses = _.get(this.mergedClasses, levels.join('.'))

    if (_.isPlainObject(mergedClasses)) {
      _.each(classes, (subclasses, subclassName) => {
        this.addComponentClasses(subclasses, levels.concat(subclassName))
      })
    } else {
      _.set(this.mergedClasses, levels.join('.'), _.union(
        mergedClasses,
        classes
      ))
    }
  }

  toArray(components) {
    let arrayClasses = {}

    _.each(components, (componentClasses, componentName) => {
      arrayClasses[componentName] = {}

      _.each(componentClasses, (classes, className) => {
        arrayClasses[componentName][className] = this.classesToArray(classes)
      })
    })

    return arrayClasses
  }

  classesToArray(classes) {
    let arrayClasses = classes

    if (typeof classes === 'string') {
      arrayClasses = classes.length > 0 ? classes.split(' ') : []
    } else if (_.isPlainObject(classes)) {
      arrayClasses = {}

      _.each(classes, (subclasses, subclassName) => {
        arrayClasses[subclassName] = this.classesToArray(subclasses)
      })
    }

    return arrayClasses
  }
}