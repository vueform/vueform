import _ from 'lodash'

export default class MergeComponentClasses
{
  mergedClasses = {}

  constructor(componentClasses, themeClasses, component$) {
    this.mergedClasses = _.cloneDeep(componentClasses)
    this.component$ = component$
    this.merge(themeClasses)
  }

  get classes () {
    return new Proxy(this.mergedClasses, {
      get: (target, prop) => {
        return typeof prop === 'string' && target[`$${prop}`] ? target[`$${prop}`](target, this.component$.value) : target[prop]
      }
    })
  }

  merge() {

  }
}