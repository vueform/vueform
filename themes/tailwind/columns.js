export default function (breakpoint, size) {
  const safelist = [
    'w-1/12',
    'w-2/12',
    'w-3/12',
    'w-4/12',
    'w-5/12',
    'w-6/12',
    'w-7/12',
    'w-8/12',
    'w-9/12',
    'w-10/12',
    'w-11/12',
    'w-12/12',
    'w-full',
  ]
  
  switch (breakpoint) {
    case 'default':
      return size == 12 ? 'w-full' : `w-${size}/12`

    default:
      return size == 12 ? `${breakpoint}:w-full` : `${breakpoint}:w-${size}/12`
  }
}