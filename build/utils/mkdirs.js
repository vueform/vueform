
import fs from 'fs'

export default function(dirs) {
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
    }
  })
}