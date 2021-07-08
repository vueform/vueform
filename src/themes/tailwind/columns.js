export default function (breakpoint, size) {
  switch (breakpoint) {
    case 'default':
      return size == 12 ? 'w-full' : `w-${size}/12`

    default:
      return size == 12 ? `${breakpoint}:w-full` : `${breakpoint}:w-${size}/12`
  }
}