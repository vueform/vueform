module.exports = function (content, prefix = '', sizes = ['sm', 'md', 'lg', 'xl', '2xl']) {
  if (content.match('^// prefix')) {
    content = content.replace(/(['`])(.*)\1/g, function(match) {
      return `${match.match(/(['`])/)[1]}${match.match(/(['`])(.*)\1/)[2].split(' ').map((c) => {
        if (c.match(/:/)) {
          return c.replace(':', `:${prefix}`)
        }
        if (c.match(/!/)) {
          return c.replace('!', `!${prefix}`)
        }
        
        return (c.length ? `${prefix}${c}` : c)
      }).join(' ')}${match.match(/(['`])/)[1]}`
    })

    Object.values(sizes).forEach((size) => {
      const widths = [
        'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-6', 'col-span-7', 'col-span-8', 'col-span-9', 'col-span-10', 'col-span-11', 'col-span-12',
      ]

      widths.forEach((width) => {
        content += `\n${size}:${prefix}${width}`
      })
    })
  }

  return content
}