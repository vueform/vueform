export const flatten = (source) => {
  let collection = []

  source.forEach((item) => {
    collection.push(item.path)

    if (item.children) {
      flatten(item.children).forEach((child) => {
        collection.push(child)
      })
    }
  })

  return collection
}

export const collect = (elements, prefix = '') => {
  let children = []

  Object.keys(elements).forEach((name) => {
    let element = elements[name]
    let path = prefix.length ? `${prefix}.${name}` : name

    let member = {
      name,
      path,
      type: element.type,
    }

    if (['group', 'object'].indexOf(element.type) !== -1 && Object.keys(element.schema || {}).length) {
      member.children = collect(element.schema, path)
    }

    children.push(member)
  })

  return children
}