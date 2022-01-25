module.exports = function (content, prefix, sizes = ['sm', 'md', 'lg', 'xl', '2xl']) {
  if (content.match('^// prefix')) {
    content = content.replace(/(['`])(.*)\1/g, function(match) {
      return `${match.match(/(['`])/)[1]}${match.match(/(['`])(.*)\1/)[2].split(' ').map((c) => {
        return c.match(/:/)
          ? c.replace(':', `:${prefix}`)
          : (c.length ? `${prefix}${c}` : c)
      }).join(' ')}${match.match(/(['`])/)[1]}`
    })

    Object.values(sizes).forEach((size) => {
      const widths = [
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

      widths.forEach((width) => {
        content += `\n${size}:${prefix}${width}`
      })
    })
  }

  return content
}