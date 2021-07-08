export default function (breakpoint, size) {
  switch (breakpoint) {
    case 'default':
      return `col-${size}`

    default:
      return `col-${breakpoint}-${size}`
  }
  

  switch (breakpoint) {
    case 'default':
      return size == 12 ? 'columns-12' : `columns-${size}`

    default:
      return size == 12 ? `${breakpoint}:columns-12` : `${breakpoint}:columns-${size}`
  }
}