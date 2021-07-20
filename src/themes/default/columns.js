export default function (breakpoint, size) {
  switch (breakpoint) {
    case 'default':
      return `form-col-${size}`

    default:
      return `form-col-${breakpoint}-${size}`
  }
}