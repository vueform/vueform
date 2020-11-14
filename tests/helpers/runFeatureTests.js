export default function (elementType, options, featureExports) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(featureExports, (suite) => {
      suite(elementType, elementName, options)
    })
  }
}