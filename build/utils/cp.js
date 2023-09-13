import ncp from 'ncp'
import path from 'path'

export default function(copy, outputDir = '') {
  if (!Array.isArray(copy)) {
    copy = Object.keys(copy).map((from) => ({
      from,
      to: copy[from],
    }))
  } else {
    copy = copy.map((to) => {
      return (
        typeof to === 'string' ? {
          from: to,
          to,
        } : {
          from: Object.keys(to)[0],
          to: Object.values(to)[0],
        }
      )
    })
  }

  copy.forEach((file) => {
    ncp(path.resolve(__dirname, '../', file.from), path.resolve(__dirname, '../', outputDir, file.to), function (err) {
      if (err) {
        return console.error(err);
      }
    })
  })
}