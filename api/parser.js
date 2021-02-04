import _ from 'lodash'
import fs from 'fs'

const regexes = {
  variation: /const ([a-zA-Z0-9]*)_? = function\s?\(props, context/,
  clone: /const ([a-z]*)_? = ([a-z]*)_?$/,
  import: /import (use[a-zA-Z$]+) from '([^']+)'/,
  namedImport: /import \{\s?([a-zA-Z_$]+) as (use[a-zA-Z$]+)\s?\} from '([^']+)'/,
  return: /^\s\sreturn {/,
  use: /} = (use[^(]+)\(props,\s?context/,
  parent: /} = (?!use)([a-zA-Z_]*)\(props, context/
}

let collect = {
  options: /const ([a-zA-Z0-9$]*)_?\s?=\s?computedOption\(/,
  computed: /const ([a-zA-Z0-9$]*)_?\s?=\s?computed\(/,
  methods: /const ([a-zA-Z0-9$]*)_?\s?=\s?(async)?\s?\(/,
  inject: /inject\('([a-zA-Z0-9$]*)_?/,
  data: [/const (.*)\s?=\s?ref/, /const \s?([a-zA-Z0-9]*)\s?=\s?toRefs\(context\.data/],
}

const Parser = class
{
  constructor(path, filename, init = true) {
    this.path = path
    this.filename = filename
    this.lines = fs.readFileSync(path + filename, 'UTF-8').split(/\r?\n/)
    this.data = {}

    if (init) {
      this.init()
    }
  }

  init() {
    this.setVariations()
    this.setReturns()
    this.setImports()
    this.setUses()
    this.setParents()
    this.setDocblocks()
    this.setClones()
  }

  parse() {
    // Go over the returned variables
    _.each(this.returns, (returns, variation) => {
      if (!this.data[variation]) {
        this.data[variation] = {}
      }

      _.each(returns, (propName) => {
        // Try to set docblock for variable from inline docs
        if (this.hasDocblock(propName, variation)) {
          this.setFromDocblock(propName, variation)
        }

        // Try to set docblock for variable from parent docs
        else if (this.hasInParentData(propName, variation)) {
          this.setFromParentData(propName, variation)
        }

        // Try to set docblock for variable from base docs
        else if (this.hasInParentData(propName, variation, 'base')) {
          this.setFromParentData(propName, variation, 'base')
        }

        // Try to set docblock for variable from imported docs
        else if (this.isUsed(propName, variation) && this.isImported(propName, variation)) {
          this.setFromUsedImport(propName, variation)
        }

        else {
          throw new Error(`Docblock not found for "${variation}@${propName}" in "${this.filename}"`)
        }
      })
    })

    _.each(this.clones, (source, clone) => {
      this.data[clone] = this.data[source]
    })
  }

  get() {
    this.parse()

    return this.data
  }

  parseDocBlock(i) {
    let docs = {
      public: true,
    }
    let params = []

    while(this.lines[i] && this.lines[i].match(/\/\*\*/) === null) {
      i--

      // @default
      if (this.lines[i].match(/@default/)) {
        docs.default = this.lines[i].match(/@default\s?(.*)/)[1]
      } 

      // @type
      if (this.lines[i].match(/@type/)) {
        if (this.lines[i].match(/</)) {
          docs.types = [[
            this.lines[i].match(/{([a-z]*)/)[1],
            this.lines[i].match(/<([a-zA-Z*]*)/)[1],
          ]]
        } else {
          docs.types = this.lines[i].match(/{([a-zA-Z|]*)}/)[1].split('|')
        }
      }

      // @values
      if (this.lines[i].match(/@values/)) {
        docs.values = this.lines[i].match(/@values (.*)/)[1].split('|')
      }

      // @param
      if (this.lines[i].match(/@param/)) {
        let types = this.lines[i].match(/{(.*)}/)[1].split('|')
        let name = this.lines[i].match(/} ([a-zA-Z0-9_$]*)/)[1]
        let required = this.lines[i].match(/} [a-zA-Z0-9_$]*\*/) !== null
        let description = this.lines[i].match(/} [a-zA-Z0-9_$*]* (.*)/)[1]

        params.push([name, {
          types,
          required,
          description,
        }])
      }

      // @returns
      if (this.lines[i].match(/@returns/)) {
        if (this.lines[i].match(/</)) {
          docs.returns = [[
            this.lines[i].match(/{([a-z]*)/)[1],
            this.lines[i].match(/<([a-zA-Z*]*)/)[1],
          ]]
        } else {
          docs.returns = this.lines[i].match(/{([a-z]*)}/)[1]
        }
      }

      // @private
      if (this.lines[i].match(/@private/)) {
        docs.public = false
      }

      // description
      if (this.lines[i-1].match(/\/\*\*/) !== null) {
        let l = i
        docs.description = ''

        while (this.lines[l].match(/\*\s?$/) === null) {
          docs.description += this.lines[l].trim().replace(/^\*/, '').trim() + ' '
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

  setVariations() {
    let variations = {}
    let variation

    _.each(this.lines, (line, i) => {
      let matches = line.match(regexes.variation)

      if (matches) {
        if (variation) {
          variations[variation].push(i - 1)
        }

        variation = matches[1].trim()

        variations[variation] = [i + 1]
      }
    })

    this.variations = variations
  }

  setReturns() {
    let returns = {}

    _.each(this.lines, (line, i) => {
      let matches = line.match(regexes.return)

      if (matches) {
        let variation = this.getVariation(i)
        let variationReturns = []
        let l = i + 1

        while(this.lines[l].match(/^\s\s}/) === null) {
          if (this.lines[l].match(/\/\//) === null && this.lines[i].match(/[^ ]+/) !== null) {
            var variable = this.lines[l].match(/\s?([^:]+)/)[1].replace(/[,_]/,'').trim()
            
            if (variable) {
              variationReturns.push(variable)
            }
          }

          l++
        }
          
        returns[variation] = variationReturns
      }
    })

    this.returns = returns
  }

  setImports() {
    let imports = {}

    _.each(this.lines, (line, i) => {
      let importMatches = line.match(regexes.import)
      let namedImportMatches = line.match(regexes.namedImport)

      if (importMatches) {
        let useName = importMatches[1]
        let usePath = importMatches[2]
        let parser = new Parser(this.path, usePath.replace(/^\.\//, '')+'.js')

        imports[_.lowerFirst(useName)] = parser.get().base
      }

      if (namedImportMatches) {
        let variation = namedImportMatches[1]
        let useName = namedImportMatches[2]
        let usePath = namedImportMatches[3]
        let parser = new Parser(usePath.replace(/^\.\//, '')+'.js')

        imports[_.lowerFirst(useName)] = parser.get()[variation]
      }
    })

    this.imports = imports
  }

  setUses() {
    let uses = {}

    _.each(this.lines, (line, i) => {
      let matches = line.match(regexes.use)

      if (matches) {
        let useName = matches[1]
        let variation = this.getVariation(i)
        let l = i - 1

        if (!uses[variation]) {
          uses[variation] = {}
        }

        while(this.lines[l].match(/const {/) === null) {
          let variableName = this.lines[l].match(/([a-zA-Z0-9$]+)/)[1]

          uses[variation][variableName] = useName
          l--
        }
      }
    })

    this.uses = uses
  }

  setParents() {
    let parents = {}

    _.each(this.lines, (line, i) => {
      let matches = line.match(regexes.parent)

      if (matches) {
        let parent = matches[1]
        let variation = this.getVariation(i)

        parents[variation] = parent
      }
    })

    this.parents = parents
  }

  setDocblocks() {
    let docblocks = {}

    _.each(this.lines, (line, i) => {
      _.each(collect, (regexp, propType) => {
        let regexList = regexp

        if (!Array.isArray(regexList)) {
          regexList = [regexList]
        }

        if (propType !== 'options' && this.isOption(i)) {
          propType = 'options'
        }

        _.each(regexList, (regex) => {
          let matches = line.match(regex)

          if (matches) {
            let propName = matches[1].trim()
            let variation = this.getVariation(i)

            // Check if has docblock
            if (!this.lines[i-1].trim().match(/^\*\//)) {
              return
            }

            if (!docblocks[variation]) {
              docblocks[variation] = {}
            }

            docblocks[variation][propName] = {
              type: propType,
              info: this.parseDocBlock(i)
            }
          }
        })
      })
    })

    this.docblocks = docblocks
  }

  setClones() {
    let clones = {}

    _.each(this.lines, (line, i) => {
      let matches = line.match(regexes.clone)

      if (matches) {
        clones[matches[1]] = matches[2]
      }
    })

    this.clones = clones
  }

  /**
   * @in 
   * {
   *  options: {
   *    clickable: {
   *      types: ['boolean'],
   *      default: 'true'
   *    } 
   *  },
   *  computed: {
   *    // ...
   *  }
   * }
   * 
   * @out
   * {
   *  clickable: {
   *    type: 'options,
   *    info: {
   *      types: ['boolean'],
   *      default: 'true'
   *    }
   *  },
   *  // ...
   * }
   * 
   */
  transformToPropList(data) {
    let propList = {}

    _.each(data, (props, propType) => {
      _.each(props, (propInfo, propName) => {
        propList[propName] = {
          type: propType,
          info: propInfo
        }
      })
    })
    
    return propList
  }

  getVariation(i) {
    let variation

    _.each(this.variations, (range, variationName) => {
      if (range[0] <= i && (!range[1] || range[1] >= i)) {
        variation = variationName
        return false
      }
    })

    return variation
  }

  getParent(variation) {
    return this.parents[variation] || null
  }

  isReturned(propName, variation) {
    return this.returns[variation].indexOf(propName) !== -1
  }

  isOption(i) {
    let isOption = false

    while(this.lines[i] && this.lines[i].match(/\/\*\*/) === null) {
      i--
      if (this.lines[i] && this.lines[i].match('@option')) {
        isOption = true
      }
    }

    return isOption
  }

  hasDocblock(propName, variation) {
    return this.docblocks[variation] && this.docblocks[variation][propName]
  }

  setFromDocblock(propName, variation) {
    let docblock = this.docblocks[variation]
    let propType = docblock[propName].type

    if (!this.data[variation][propType]) {
      this.data[variation][propType] = {}
    }

    this.data[variation][propType][propName] = docblock[propName].info
  }

  hasInParentData(propName, variation, parent = this.getParent(variation)) {
    return this.transformToPropList(this.data[parent])[propName] !== undefined
  }

  setFromParentData(propName, variation, parent = this.getParent(variation)) {
    let parentPropList = this.transformToPropList(this.data[parent])
    let propType = parentPropList[propName].type

    if (!this.data[variation][propType]) {
      this.data[variation][propType] = {}
    }

    this.data[variation][propType][propName] = parentPropList[propName].info
  }

  isUsed(propName, variation) {
    return this.uses[variation] && this.uses[variation][propName]
  }

  isImported(propName, variation) {
    let useName = this.uses[variation][propName]

    return _.some(this.imports[useName], (props, propType) => {
      return Object.keys(props).indexOf(propName) !== -1
    })
  }

  setFromUsedImport(propName, variation) {
    let useName = this.uses[variation][propName]
    let usePropList = this.transformToPropList(this.imports[useName])
    let propType = usePropList[propName].type

    if (!this.data[variation][propType]) {
      this.data[variation][propType] = {}
    }

    this.data[variation][propType][propName] = usePropList[propName].info
  }
}

export default Parser