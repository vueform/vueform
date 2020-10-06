import _ from 'lodash'

export default function(component, name, extensions) {
  if (name == 'Laraform') {
    return
  }

  _.each(extensions, (extension) => {
    let match = false
    let apply = _.isArray(extension.apply) ? extension.apply : [extension.apply]

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

    if (component.mixins[0].extensions === undefined) {
      component.mixins[0].extensions = []
    }

    component.mixins[0].extensions.push(extension)
  })
}