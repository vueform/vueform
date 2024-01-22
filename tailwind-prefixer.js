module.exports = function (content, prefix = '', sizes = ['sm', 'md', 'lg', 'xl', '2xl']) {
  if (content.match('form-bg-input')) {
    // Regular expression to match strings in single quotes, double quotes, or backticks
    const regex = /(['"`])(.*?)\1/g;

    // Replace the found strings with the prefixed version
    content = content.replace(regex, (match, quote, content) => {
        // Prefix each word if the content has spaces
        content = content.split(' ').map(word => {
          if (word.match(/:/)) {
            return word.replace(':', `:${prefix}`)
          } else if (word.match(/!/)) {
            return word.replace('!', `!${prefix}`)
          } else {
            return prefix + word
          }
        }).join(' ');
        return `${quote}${content}${quote}`;
    });

    const widths = [
      'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-6', 'col-span-7', 'col-span-8', 'col-span-9', 'col-span-10', 'col-span-11', 'col-span-12',
    ]

    widths.forEach((width) => {
      content += `\n${prefix}${width}`
    })

    Object.values(sizes).forEach((size) => {
      widths.forEach((width) => {
        content += `\n${size}:${prefix}${width}`
      })
    })
  }

  return content
}