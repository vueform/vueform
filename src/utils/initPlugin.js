import _ from 'lodash'

export default function(hook, name, plugins, this_) {
  _.each(plugins, (plugin) => {
    if (plugin[hook] === undefined) {
      return
    }

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

    plugin[hook].apply(this_)
  })
}