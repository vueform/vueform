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

export const collect = (elements, pages, prefix = '') => {
  const createMember = (name) => {
    let element = elements[name]
    let path = prefix.length ? `${prefix}.${name}` : name

    let member = {
      name,
      path,
      type: element.type,
    }

    if (['group', 'object'].indexOf(element.type) !== -1 && Object.keys(element.schema || {}).length) {
      member.children = collect(element.schema, null, path)
    }

    if (element.type === 'list' && Object.keys(element?.element || {}).length) {
      member.children = collect({ 0: element.element }, null, path)
    }

    return member
  }

  let children = []

  if (pages && Object.keys(pages).length) {
    Object.values(pages).forEach((page) => {
      page.elements.forEach((name) => {
        children.push(createMember(name))
      })
    })
  } else {
    Object.keys(elements).forEach((name) => {
      children.push(createMember(name))
    })
  }

    return children
}