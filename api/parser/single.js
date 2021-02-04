import _ from 'lodash'
import Parser from './index'

class SingleParser extends Parser
{
  beforeInit() {
    this.regexes.return = /^\s\s\s\sreturn {/
    this.regexes.external = /} = ([a-zA-Z0-9]*)\.init\(props,\s?context/
    this.regexes.externalImport = /import ([a-zA-Z0-9$]*) from '([^']+)'/
  }

  onInit() {
    this.setExternals()
    this.setExternalImports()
  }

  addParse(propName, variation) {
    if (this.externals[variation] && this.externals[variation][propName]) {
      let externalImportName = this.externals[variation][propName]
      let externalImportPropList = this.transformToPropList(this.externalImports[externalImportName]) 

      if (externalImportPropList[propName] !== undefined) {
        let propType = externalImportPropList[propName].type

        if (!this.data[variation][propType]) {
          this.data[variation][propType] = {}
        }

        this.data[variation][propType][propName] = externalImportPropList[propName].info
        return true
      }

      return false
    }

    return false
  }

  setVariations() {
    this.variations = {
      base: [0]
    }
  }

  setExternals() {
    let externals = {}

    _.each(this.lines, (line, i) => {
      let matches = line.match(this.regexes.external)

      if (matches) {
        let externalName = matches[1]
        let variation = this.getVariation(i)
        let l = i - 1

        if (!externals[variation]) {
          externals[variation] = {}
        }

        while(this.lines[l].match(/const {/) === null) {
          let variableName = this.lines[l].match(/([a-zA-Z0-9$]+)/)[1]

          externals[variation][variableName] = externalName
          l--
        }
      }
    })

    this.externals = externals
  }

  getExternalsList(variation) {
    const externalList = []

    _.each(this.externals[variation], (externalName, variable) => {
      if (externalList.indexOf(externalName) === -1) {
        externalList.push(externalName)
      }
    })

    return externalList
  }

  setExternalImports() {
    const externalImports = {}

    _.each(this.lines, (line, i) => {
      let matches = line.match(this.regexes.externalImport)

      if (matches) {
        let importName = matches[1]
        let variation = this.getVariation(i)

        if (this.getExternalsList(variation).indexOf(importName) === -1) {
          return
        }

        let importPath = matches[2].replace(/^\.\//, '').replace(importName, '')
        
        let parser = new SingleParser(this.path + importPath, importName +'.js')

        externalImports[importName] = parser.get().base
      }
    })

    this.externalImports = externalImports
  }
}

export default SingleParser