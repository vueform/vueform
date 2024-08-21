export default (element, scrollableParent) => {
  if (!scrollableParent) {
    return
  }

  const elementRect = element.getBoundingClientRect()
  const parentRect = scrollableParent.getBoundingClientRect()

  const offsetTop = elementRect.top - parentRect.top + scrollableParent.scrollTop
  const offsetLeft = elementRect.left - parentRect.left + scrollableParent.scrollLeft

  scrollableParent.scrollTo({
    top: offsetTop,
    left: offsetLeft,
    behavior: 'smooth'
  })
}