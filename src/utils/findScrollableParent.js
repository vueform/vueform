export default (element) => {
  let currentElement = element.parentElement

  while (currentElement && currentElement !== document.body) {
    const overflowY = window.getComputedStyle(currentElement).overflowY
    const overflowX = window.getComputedStyle(currentElement).overflowX

    const isScrollableY = (overflowY === 'scroll' || overflowY === 'auto') && currentElement.scrollHeight > currentElement.clientHeight
    const isScrollableX = (overflowX === 'scroll' || overflowX === 'auto') && currentElement.scrollWidth > currentElement.clientWidth

    if (isScrollableY || isScrollableX) {
      return currentElement
    }

    currentElement = currentElement.parentElement
  }

  return null
}