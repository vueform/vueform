export default function (options, i, childIndex) {
  let childName = options.childName
  let childValue = options.childValues[i]
  let isObject = i == 1
  let isFile = options.elementType === 'multifile'

  if (!isObject && !isFile) {
    return childValue.replace('{i}', childIndex)
  } else if (isObject && !isFile) {
    return {[childName]: childValue[childName].replace('{i}', childIndex)}
  } else if (!isObject && isFile) {
    return new File([childValue], childValue.name.replace('{i}', i))
  } else {
    return {
      file: new File([childValue.file], childValue.file.name.replace('{i}', i))
    }
  }
}