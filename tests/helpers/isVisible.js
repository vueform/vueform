export default function (wrapper, visible = true) {
  if (!wrapper.vm.$el.length) {
    return visible ? false : true
  } else {
    return visible ? true : false
  }
}