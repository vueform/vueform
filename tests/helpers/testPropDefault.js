export default function (it, elementType, optionName, defaultValue, testValue, testDefault = true) {
  const elementName = `${_.upperFirst(elementType)}Element`

  let defaultString

  if (_.isBoolean(defaultValue) || _.isString(defaultValue)) {
     defaultString = defaultValue.toString()
  }
  else if (defaultValue === null) {
     defaultString = 'null'
  }
  else if (defaultValue === undefined) {
     defaultString = 'undefined'
  }
  else if (_.isPlainObject(defaultValue)) {
    defaultString = JSON.stringify(defaultValue)
  }
  else if (_.isArray(defaultValue) && defaultValue.length == 0) {
    defaultString = '[]'
  }

  if (testDefault) {
    it('should have "'+defaultString+'" as default for `'+optionName+'`', () => {
      let form = createForm({
        schema: {
          [elementType]: {
            type: elementType
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm[optionName]).toStrictEqual(defaultValue)
    })
  }
}