import { h, withDirectives, resolveDirective, resolveComponent } from 'vue'

export default function createElement () {
  let args = _.values(arguments)
  let el = args[1]
  let props = _.isArray(args[2]) ? {} : args[2]
  let children = _.isPlainObject(args[2]) ? args[3] : args[2] || []
  
  let slots = props?.scopedSlots // needs `?.` operator, assignToParent in steps and tabs have rendered element with slot, and these elements do not have scopedSlots, directives and props
  let directives = props?.directives // needs `?.` operator, assignToParent in steps and tabs have rendered element with slot, and these elements do not have scopedSlots, directives and props

  let doms = ['div', 'form']

  if (slots) {
    children = slots
  }

  props = props?.props // needs `?.` operator, assignToParent in steps and tabs have rendered element with slot, and these elements do not have scopedSlots, directives and props

  if (doms.indexOf(el) === -1) {
    if (!el.render) { // can not resolve rendered component inside assignToParent in steps and tabs
      el = resolveComponent(el)
    }
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