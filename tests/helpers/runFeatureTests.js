export default function (elementType, options, featureExports, spies) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(featureExports, (suite, name) => {
      // try {
      describe(name, () => {
        suite(elementType, elementName, options, spies)
      })
      // } catch (e) {
      //   console.log(featureExports, suite)
      //   throw new Error(e)
      // }
    })
  }
}