export default function (count, options, i) {
  let prototype = options.prototypes[i]

  if ((i == 0 && prototype.element !== undefined) || (i == 1 && typeof prototype.object !== 'boolean')) {
    return Object.assign({}, prototype, {
      initial: count
    })
  } else {
    let defaults = []
    let value = options.childValues[i]

    for(var c = 0; c < count; c++) {
      defaults.push(value)
    }

    return Object.assign({}, prototype, {
      default: defaults
    })
  }
}