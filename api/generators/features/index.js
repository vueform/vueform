const fs = require('fs')
const _ = require('lodash')

const featuresPath = process.cwd() + '/src/composables/elements/features/'
const outputPath = process.cwd() + '/api/features.js'

const scanFiles = [1,4]

class Generator
{
  get files() {
    return fs.readdirSync(featuresPath).filter(f=>['.DS_Store'].indexOf(f) === -1)
  }

  getLines(fileName) {
    return fs.readFileSync(featuresPath + fileName, 'UTF-8').split(/\r?\n/)
  }

  getDocBlock(lines, i) {
    let docs = {}

    while(lines[i] && lines[i].match(/\/\*\*/) === null) {
      i--

      // @default
      if (lines[i].match(/@default/)) {
        docs.default = lines[i].match(/@default\s*(.*)/)[1]
      } 

      // @type
      if (lines[i].match(/@type/)) {
        docs.types = lines[i].match(/{([a-z|]*)}/)[1].split('|')
      }

      // @type
      if (lines[i].match(/@return/)) {
        docs.return = lines[i].match(/{([a-z]*)}/)[1]
      }

      // description
      if (lines[i-1].match(/\/\*\*/) !== null) {
        docs.description = lines[i].trim().replace(/^\*/, '').trim()
      }
    }

    return docs
  }

  hasDocBlock(lines, i) {
    return lines[i-1].trim().match(/^\*\//) !== null
  } 

  getExports(lines, i) {
    var exports = []
    i++

    while(lines[i].match(/^\s\s}/) === null) {
      var variable = lines[i].replace(/[,_]/,'').trim()
      
      if (variable) {
        exports.push(variable)
      }

      i++
    }

    return exports
  }

  getDetails(lines, fileName) {
    let exports = {}
    let variations = {}
    let variation
    let parent
    let variationRegex = /const ([a-zA-Z0-9_]*) = function\(props, context/
    let parentRegex = /} = ([a-zA-Z_]*)\(props, context/

    // Get the name of variables that are being returned
    lines.forEach((line, i) => {
      // Set current variation
      if (line.match(variationRegex)) {
        variation = line.match(variationRegex)[1].replace('_','').trim()
      }

      if (line.match(/^\s\sreturn {/)) {
        exports[variation] = this.getExports(lines, i)
      }
    })

    lines.forEach((line, i) => {
      // Set current variation
      if (line.match(variationRegex)) {
        variation = line.match(variationRegex)[1].replace('_','').trim()
        variations[variation] = {}
      }

      if (line.match(parentRegex)) {
        parent = line.match(parentRegex)[1]
      }

      // Collect computed options
      if (line.match(/computedOption\(/)) {
        let name = line.match(/const ([^ ]*)/)[1]

        if (!variations[variation].options) {
          variations[variation].options = {}
        }

        if (this.hasDocBlock(lines, i)) {
          if (exports[variation].indexOf(name) !== -1) {
            variations[variation].options[name] = this.getDocBlock(lines, i)
          }
        } else if (parent && variations[parent].options && variations[parent].options[name] !== undefined) {
          variations[variation].options[name] = variations[parent].options[name]
        } else {
          throw new Error(`DocBlock missing for: ${name} (${fileName}@${(i+1)})`)
        }
      }

      // Collect computed props
      if (line.match(/computed\(\(/)) {
        let name = line.match(/const ([^ ]*)/)[1]

        if (!variations[variation].computed) {
          variations[variation].computed = {}
        }

        if (this.hasDocBlock(lines, i)) {
          if (exports[variation].indexOf(name) !== -1) {
            variations[variation].computed[name] = this.getDocBlock(lines, i)
          }
        } else if (parent && variations[parent].computed && variations[parent].computed[name] !== undefined) {
          variations[variation].computed[name] = variations[parent].computed[name]
        } else {
          throw new Error(`DocBlock missing for: ${name} (${fileName}@${(i+1)})`)
        }
      }

      // Collect methods
      if (line.match(/const ([a-zA-Z0-9_$]*)\s*=\s*\(/)) {
        let name = line.match(/const ([a-zA-Z0-9_$]*)\s*=\s*\(/)[1]

        if (!variations[variation].methods) {
          variations[variation].methods = {}
        }

        if (exports[variation].indexOf(name) !== -1) {
          variations[variation].methods[name] = this.getDocBlock(lines, i)
        }
      }

      // Collect exported variables for non-base variations
      if (variation !== 'base') {
        if (line.match(/^\s\sreturn {/)) {
          var variables = this.getExports(lines, i)
          var existingVariables = []

          Object.keys(variations[variation]).forEach((propType) => {
            Object.keys(variations[variation][propType]).forEach((v) => {
              existingVariables.push(v)
            })
          })
          
          variables.forEach((variable) => {
            if (existingVariables.indexOf(variable) === -1) {

          console.log(variable)
              Object.keys(variations[parent]).forEach((propType) => {
                if (variations[parent][propType][variable] !== undefined) {
                  if (!variations[variation][propType]) {
                    variations[variation][propType] = {}
                  }

                  variations[variation][propType][variable] = variations[parent][propType][variable]
                }
              })
            }
          })
        }
      }
    })

    return variations
  }

  getFeatures() {
    let features = {}

    this.files.forEach((fileName, i) => {
      let name = _.lowerFirst(fileName.replace('.js', '').replace(/^use/, ''))

      if (i>scanFiles[1]-1||i<scanFiles[0]-1) return 
      features[name] = this.getDetails(this.getLines(fileName), fileName)
    })

    return features
  }

  generate() {
    let features = this.getFeatures()

    let contents = ''

    contents += 'export default '
    contents += JSON.stringify(features, null, 2)
    contents += ''

    fs.writeFileSync(outputPath, contents)
  }
}

let generator = new Generator()

generator.generate()

  // getVariations(lines) {
  //   let variations = []

  //   lines.forEach((line) => {
  //     if (line.match(/export default base/)) {
  //       variations.push('default')
  //     }
  //   })

  //   lines.forEach((line, i) => {
  //     if (line.match(/export {/)) {
  //       while(lines[i].match('}') === null) {
  //         i++
  //         if(lines[i].match('}') !== null) return
  //         variations.push(lines[i].replace(',','').replace('_', '').trim())
  //       }
  //     }
  //   })

  //   return variations
  // }

// function getDetails(lines, i) {
//   while(lines[i].match(/\/\*\*/) === null) {


//     i--
//   }
// }

// function getFeaturesContent() {
//   let i = 0
//   files.forEach((file) => {
//     if (i > 3) {
//       return
//     }

//     let content = fs.readFileSync(featuresPath + file, 'UTF-8')
//     let lines = content.split(/\r?\n/)

//     lines.forEach((line, lineIndex) => {
      
//     })

//     i++
//   })
// }

// getFeaturesContent()

// fs.writeFileSync('./features.js', getFeaturesContent())