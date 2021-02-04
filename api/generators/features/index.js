const fs = require('fs')
const _ = require('lodash')

const files = []
const until = null
let untilIndex = 1000

class Generator
{
  constructor(inputPath, outputPath) {
    this.inputPath = inputPath
    this.outputPath = outputPath
  }

  get files() {
    return fs.readdirSync(this.inputPath).filter(f=>['.DS_Store', 'useTemplate.js'].indexOf(f) === -1 && f.match(/\.js$/))
  }

  getLines(fileName) {
    return fs.readFileSync(this.inputPath + fileName, 'UTF-8').split(/\r?\n/)
  }

  parseDocBlock(lines, i) {
    let docs = {
      public: true,
    }
    let params = []

    while(lines[i] && lines[i].match(/\/\*\*/) === null) {
      i--

      // @default
      if (lines[i].match(/@default/)) {
        docs.default = lines[i].match(/@default\s?(.*)/)[1]
      } 

      // @type
      if (lines[i].match(/@type/)) {
        if (lines[i].match(/</)) {
          docs.types = [[
            lines[i].match(/{([a-z]*)/)[1],
            lines[i].match(/<([a-zA-Z*]*)/)[1],
          ]]
        } else {
          docs.types = lines[i].match(/{([a-zA-Z|]*)}/)[1].split('|')
        }
      }

      // @values
      if (lines[i].match(/@values/)) {
        docs.values = lines[i].match(/@values (.*)/)[1].split('|')
      }

      // @param
      if (lines[i].match(/@param/)) {
        let types = lines[i].match(/{(.*)}/)[1].split('|')
        let name = lines[i].match(/} ([a-zA-Z0-9_$]*)/)[1]
        let required = lines[i].match(/} [a-zA-Z0-9_$]*\*/) !== null
        let description = lines[i].match(/} [a-zA-Z0-9_$*]* (.*)/)[1]

        params.push([name, {
          types,
          required,
          description,
        }])
      }

      // @returns
      if (lines[i].match(/@returns/)) {
        if (lines[i].match(/</)) {
          docs.returns = [[
            lines[i].match(/{([a-z]*)/)[1],
            lines[i].match(/<([a-zA-Z*]*)/)[1],
          ]]
        } else {
          docs.returns = lines[i].match(/{([a-z]*)}/)[1]
        }
      }

      // @private
      if (lines[i].match(/@private/)) {
        docs.public = false
      }

      // description
      if (lines[i-1].match(/\/\*\*/) !== null) {
        let l = i
        docs.description = ''

        while (lines[l].match(/\*\s?$/) === null) {
          docs.description += lines[l].trim().replace(/^\*/, '').trim() + ' '
          l++
        }

        docs.description = docs.description.trim()
      }
    }
    
    if (params.length > 0) {
      docs.params = {}

      params.reverse().forEach((param) => {
        docs.params[param[0]] = param[1]
      })
    }

    return docs
  }

  hasDocBlock(lines, i) {
    return lines[i-1].trim().match(/^\*\//) !== null
  }

  // Returns info from docblock in a structured way
  parseInfo(propType, lines, i, regex, returns, variations, variation, parent, fileName) {
    try {
      let line = lines[i]

      let name = line.match(regex)[1].replace('_', '').trim()

      if (!variations[variation][propType]) {
        variations[variation][propType] = {}
      }

      if (returns[variation].indexOf(name) === -1) {
        return
      }

      if (this.hasDocBlock(lines, i)) {
          variations[variation][propType][name] = this.parseDocBlock(lines, i)
      } else if (parent && variations[parent][propType] && variations[parent][propType][name] !== undefined) {
        variations[variation][propType][name] = variations[parent][propType][name]
      } else if (!parent && variations.base[propType] && variations.base[propType][name] !== undefined) {
        variations[variation][propType][name] = variations.base[propType][name]
      } else {
        throw new Error(`DocBlock missing for: ${name.trim()} (${fileName}@${(i+1)})`)
      }

      return variations
    } catch (e) {
      console.log(propType, fileName+'@'+i)
      throw new Error(e)
    }
  }

  getReturns(lines, i, fileName) {
    try {
      var returns = []
      i++

      while(lines[i].match(/^\s\s}/) === null) {
        if (lines[i].match(/\/\//) === null && lines[i].match(/[^ ]+/) !== null) {
          var variable = lines[i].match(/\s?([^:]+)/)[1].replace(/[,_]/,'').trim()
          
          if (variable) {
            returns.push(variable)
          }
        }

        i++
      }

      return returns
    } catch (e) {
      console.log(fileName+'@'+i)
      throw new Error(e)
    }
  }

  isOption(lines, i) {
    let isOption = false

    while(lines[i] && lines[i].match(/\/\*\*/) === null) {
      i--
      if (lines[i] && lines[i].match('@option')) {
        isOption = true
      }
    }

    return isOption
  }

  getUses(lines, i, fileName) {
    try {
      let l = i - 1
      let uses = []

      while(lines[l].match(/const {/) === null) {
        uses.push(lines[l].match(/([a-zA-Z0-9_$]+)/)[1])
        l--
      }

      return uses
    } catch (e) {
      console.log(fileName+'@'+i)
      throw new Error(e)
    }
  }

  getDetails(lines, fileName) {
    let returns = {}
    let imports = {}
    let variations = {}
    let uses = {}
    let variation
    let parent
    let returnRegex = /^\s\sreturn {/
    let variationRegex = /const ([a-zA-Z0-9_]*) = function\s?\(props, context/
    let parentRegex = /} = (?!use)([a-zA-Z_]*)\(props, context/
    let importRegex = /import (use[a-zA-Z$]+) from '([^']+)'/
    let namedImportRegex = /import \{\s?([a-zA-Z_$]+) as (use[a-zA-Z$]+)\s?\} from '([^']+)'/
    let useRegex = /} = (use[^(]+)\(props,\s?context/

    let collect = {
      options: /const ([^ ]*)\s?=\s?computedOption\(/,
      computed: /const ([^ ]*)\s?=\s?computed\(/,
      methods: /const ([a-zA-Z0-9_$]*)\s?=\s?(async)?\s?\(/,
      inject: /inject\('([a-zA-Z0-9_$]*)/,
      data: [/const (.*)\s?=\s?ref/, /const \s?([a-zA-Z0-9]*)\s?=\s?toRefs\(context\.data/],
    }

    // Get the name of variables that are being returned
    lines.forEach((line, i) => {
      // Set current variation
      if (line.match(variationRegex)) {
        variation = line.match(variationRegex)[1].replace('_','').trim()
      }

      // Get returns
      if (line.match(returnRegex)) {
        returns[variation] = this.getReturns(lines, i, fileName)
      }

      // Get imports
      if (line.match(importRegex)) {
        let matches = line.match(importRegex)

        imports[_.lowerFirst(matches[1])] = {
          base: this.getDetails(this.getLines(matches[2].replace(/^\.\//, '')+'.js')).base
        }
      }

      // Get named imports
      if (line.match(namedImportRegex)) {
        let matches = line.match(namedImportRegex)

        imports[_.lowerFirst(matches[2])] = {
          [matches[1]]: this.getDetails(this.getLines(matches[3].replace(/^\.\//, '')+'.js'))[matches[1]]
        }
      }
    })

    lines.forEach((line, i) => {
      // Set current variation
      if (line.match(variationRegex)) {
        variation = line.match(variationRegex)[1].replace('_','').trim()
        variations[variation] = {}
      }

      // Set parent
      if (line.match(parentRegex)) {
        parent = line.match(parentRegex)[1]
      }

      if (line.match(useRegex)) {
        if (!uses[variation]) {
          uses[variation] = {}
        }

        uses[variation][line.match(useRegex)[1]] = this.getUses(lines, i, fileName)
      }

      // Get docblocks from different props & methods
      Object.keys(collect).forEach((propType) => {
        let regexes = collect[propType]

        if (!Array.isArray(regexes)) {
          regexes = [regexes]
        }

        // Override propType if @option is defined
        if (propType !== 'options' && this.isOption(lines, i)) {
          propType = 'options'
        }

        regexes.forEach((regex) => {
          if (line.match(regex)) {
            this.parseInfo(propType, lines, i, regex, returns, variations, variation, parent, fileName)
          }
        })
      })

      // Set props & methods from external composables
      if (uses[variation]) {
        Object.keys(uses[variation]).forEach((useName) => {
          let useProps = uses[variation][useName]
          useProps.forEach((propName) => {
            if (returns[variation].indexOf(propName) !== -1) {
              Object.keys(imports[useName]).forEach((importVariationName) => {
                Object.keys(imports[useName][importVariationName]).forEach((propType) => {
                  if (Object.keys(imports[useName][importVariationName][propType]).indexOf(propName) !== -1) {
                    if (!variations[variation][propType]) {
                      variations[variation][propType] = {}
                    }

                    variations[variation][propType][propName] = imports[useName][importVariationName][propType][propName]
                  }
                })
              })
            }
          })
        })
      }

      // Collect returned variables for non-base variations
      if (parent) {
        if (line.match(/^\s\sreturn {/)) {
          var existingVariables = []

          // Get explicitly defined variables
          Object.keys(variations[variation]).forEach((propType) => {
            Object.keys(variations[variation][propType]).forEach((v) => {
              existingVariables.push(v)
            })
          })
          
          // Get returned variables which are not defined explicitly and fill them in from parent
          returns[variation].forEach((variable) => {
            if (existingVariables.indexOf(variable) === -1) {

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

          // Copy provided variables from base
          if (variations.base && variations.base.provide) {
            variations[variation].provide = variations.base.provide
          }

          // Copy provided variables from parent
          if (variations[parent] && variations[parent].provide) {
            variations[variation].provide = variations[parent].provide
          }
        }
      }

      // Copy named variations
      if (line.match(/^const ([a-z_]*) = ([a-z_]*)$/)) {
        let copies = line.match(/^const ([a-z_]*) = ([a-z_]*)$/)

        variations[copies[1]] = variations[copies[2]]
      }
    })

    return variations
  }

  getFeatures() {
    let features = {}

    this.files.forEach((fileName, i) => {
      let name = _.lowerFirst(fileName.replace('.js', '').replace(/^use/, ''))

      if (files.length === 0 || files.indexOf(name) !== -1) {
        

        features[name] = this.getDetails(this.getLines(fileName), fileName)
      }
    })

    return features
  }

  generate() {
    let features

    try {
      features = this.getFeatures()
    } catch (e) {
      console.log(e)
    }

    let contents = ''

    contents += 'export default '
    contents += JSON.stringify(features, null, 2)

    fs.writeFileSync(this.outputPath, contents)
  }
}

module.exports = Generator