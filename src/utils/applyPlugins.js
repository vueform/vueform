import _ from 'lodash'

export default function(component, name, plugins) {
  if (name == 'Laraform') {
    return
  }

  _.each(plugins, (plugin) => {
    let match = false
    let apply = _.isArray(plugin.apply) ? plugin.apply : [plugin.apply]

    _.each(apply, (pattern) => {
      if (name.match(pattern)) {
        match = true
      }

      if (match) {
        return false
      }
    })

    if (!match) {
      return
    }

    if (component.mixins === undefined) {
      component.mixins = []
    }

    component.mixins.push(plugin)
  })
}