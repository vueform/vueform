export default function (breakpoint, size) {
  switch (breakpoint) {
    case 'default':
      return `vf-col-${size}`

    default:
      return `vf-col-${breakpoint}-${size}`
  }
}