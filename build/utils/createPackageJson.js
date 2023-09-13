import fs from 'fs'

export default function(source, target, extend) {
  let content = {
    ...source,
    ...extend,
  } 

  fs.writeFileSync(target, JSON.stringify(content, null, 2))
}