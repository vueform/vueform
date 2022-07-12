import { h, withDirectives, resolveDirective, resolveComponent } from 'vue'

export default function createElement () {
  let args = _.values(arguments)
  let el = args[1]
  let props = _.isArray(args[2]) ? {} : args[2]
  let children = _.isPlainObject(args[2]) ? args[3] : args[2] || []

  let slots = props.scopedSlots
  let directives = props.directives

  let doms = ['div', 'form']

  if (slots) {
    children = slots
  }

  props = props.props

  if (doms.indexOf(el) === -1) {
    el = resolveComponent(el)
  }

  let render = h(el, props, children)

  if (directives) {
    let directiveList = []

    _.each(directives, (directive) => {
      directiveList.push([
        resolveDirective(directive.name),
        undefined,
        directive.arg,
      ])
    })

    return withDirectives(render, directiveList)
  } else {
    return render
  }
}