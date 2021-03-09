import dragula from 'dragula'

let drake

const init = (element, onUpdate) => {
  let oldIndex
  let newIndex

  // Fix for Vue3 adding `text` nodes to v-for
  let textsBefore = 0

  drake = dragula([element])

  drake.on('drag', (el, source) => {
    textsBefore = 0

    oldIndex = [].slice.call(el.parentNode.childNodes).findIndex((item) => el === item)
  })

  drake.on('dragend', (el) => {
    newIndex = [].slice.call(el.parentNode.childNodes).findIndex((item) => el === item)

    if (oldIndex === newIndex) {
      return
    }

    // Revert ordering
    let e = element.childNodes[newIndex]
    element.childNodes[newIndex].remove()
    element.insertBefore(e, element.childNodes[oldIndex])

    // Fix for Vue3 adding `text` nodes to v-for
    _.each([...element.childNodes], (node) => {
      if (node.nodeType === node.TEXT_NODE) {
        textsBefore++
      } else {
        return false
      }
    })

    onUpdate(oldIndex - textsBefore, newIndex - textsBefore)
  })
}

const destroy = () => {
  drake.destroy()
  drake = undefined
}

const add = function (el, binding, vnode) {
  if (binding.value.sort) {
    init(el, binding.value.onUpdate)
  }
}

const update = function (el, binding, vnode) {
  if (binding.value.sort && !drake) {
    init(el, binding.value.onUpdate)
  }
  else if (!binding.value.sort && drake) {
    destroy()
  }
}

export default {
  // Vue2
  bind: add,
  update: update,

  // Vue3
  mounted: add,
  updated: update,
}