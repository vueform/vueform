import _ from 'lodash'
import en from './../locales/en'
import fs from 'fs'
import path, { resolve } from 'path'

function getAllFoldersInDirectory(directoryPath, excludedFolders = []) {
  const folders = [];

  // Synchronously read the contents of the directory
  const items = fs.readdirSync(directoryPath);

  items.forEach((item) => {
    const itemPath = path.join(directoryPath, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();

    // Check if the folder should be excluded
    if (isDirectory && !excludedFolders.includes(item)) {
      folders.push(item);
    }
  });

  return folders;
}


const locales = getAllFoldersInDirectory(resolve(__dirname, './../locales'))

const final = {}

locales.forEach((locale) => {
  const file = require(resolve(__dirname, './../locales', locale)).default

  let ordinal = file.vueform.datepicker.ordinal || function () { return '' }

  final[locale] = _.merge({}, en, file)

  final[locale].vueform.datepicker.ordinal = '%%%'

  let content = 'export default ' + JSON.stringify(final[locale], null, 2, 2)

  content = content.replace('"%%%"', ordinal.toString().replace(/\r/, '\n    ').replace('ordinal', ''))

  fs.writeFileSync(resolve(__dirname, './../locales', locale, 'index.js'), content)
})