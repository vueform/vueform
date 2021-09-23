const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const vueformThemeComponentsPath = path.resolve(`${__dirname}/../../../src/themes/default/components`)
const vueformThemeElementsPath = path.resolve(`${__dirname}/../../../src/themes/default/components/elements`)
const vueformThemeWrappersPath = path.resolve(`${__dirname}/../../../src/themes/default/components/wrappers`)
const vueformThemePartialsPath = path.resolve(`${__dirname}/../../../src/themes/default/components/elements/partials`)
const tailwindClasses = require('./../../../src/themes/tailwind/classes').default
const outputDir = path.resolve(`${__dirname}/../../../../vueform/content/reference/1.x/generated/data`)
const outputFile = path.resolve(outputDir, 'classes.js')

const classes = {}
const vueformThemeTemplates = {}

const isForce = () => {
  return JSON.parse(process.env.npm_config_argv).cooked.indexOf('--force') !== -1
}

const parse = (classes) => {
  let parsed = `export default ${JSON.stringify(classes, null, 2)}`

  return parsed
}

const parseTemplate = (template, componentName) => {
  let classesObject

  try {
    let parsed = template.match(/<script>[\s\S]*<\/script>/)?.[0].match(/defaultClasses: ({[\S\s]+\s\s\s\s\s\s\s\s})/)[1]
    classesObject = {}
    eval(`classesObject = ${parsed}`)
  } catch (e) {
    console.log(componentName)
    throw e
  }
  
  return classesObject
}

_.forEach(tailwindClasses, (classList, componentName) => {
  if (!classes[componentName]) {
    classes[componentName] = {
      classes: {
        tailwind: {}
      }
    }
  }

  classes[componentName].classes.tailwind = classList
})

_.forEach([
  vueformThemeComponentsPath,
  vueformThemeElementsPath,
  vueformThemeWrappersPath,
  vueformThemePartialsPath,
], (dirPath) => {
  _.forEach(fs.readdirSync(dirPath)
              .filter(f=>/\.vue$/.test(f))
              .map(f=>f.replace('.vue', '')
  ), (componentName) => {
    vueformThemeTemplates[componentName] = fs.readFileSync(path.resolve(dirPath, componentName+'.vue')).toString()

    const classList = parseTemplate(vueformThemeTemplates[componentName], componentName)

    if (!classes[componentName]) {
      classes[componentName] = {
        classes: {
          vueform: {}
        }
      }
    }

    classes[componentName].classes.vueform = classList
  })
})

try {
  fs.readdirSync(`${outputDir}`)
} catch (e) {
  fs.mkdirSync(`${outputDir}`)
}

let exists = true

try {
  fs.readFileSync(outputFile)
} catch (e) {
  exists = false
}

if (!exists || isForce()) {
  console.log('Created', outputFile)
  fs.writeFileSync(outputFile, parse(classes))
}

console.log(classes)