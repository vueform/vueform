import ncp from 'ncp'
import path from 'path'

export default function(copy, outputDir = '') {
  if (!Array.isArray(copy)) {
    copy = Object.keys(copy).map((from) => ({
      from,
      to: copy[from],
    }))
  }

  copy.forEach((file) => {
    ncp(path.resolve(__dirname, '../', file.from), path.resolve(__dirname, '../', outputDir, file.to), function (err) {
      if (err) {
        return console.error(err);
      }
    })
  })
}