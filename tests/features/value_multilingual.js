import { testModelCases, destroy } from 'test-helpers'
import { testChanges } from './value'

export const value = function (elementType, elementName, options) {
  let mocks = ['formChangeMock', 'elChangeMock', 'el2ChangeMock']

  let cases = [
    {
      initial: { el: options.nullValue, el2: options.nullValue },

      model: { el: options.default },
      initialWithModel: { el: options.default, el2: options.nullValue },
    },
    {
      initial: { el: { en: options.default.en, fr: options.nullValue.fr }, el2: options.default2, },
      formDefault: { el: { en: options.default.en }, el2: options.default2, },

      model: { el: options.default2, },
      initialWithModel: { el: options.default2, el2: options.default2, },
    },
    {
      initial: { el: options.default, el2: options.default2, },
      elementDefault: { el: options.default, el2: options.default2, },

      model: { el: options.default2, },
      initialWithModel: { el: options.default2, el2: options.default2, },
    },
    {
      initial: { el: options.default2, el2: options.default2, },
      elementDefault: { el: options.default },
      formDefault: { el: options.default2, el2: options.default2, },

      model: { el: options.default, },
      initialWithModel: { el: options.default, el2: options.default2, },
    },
  ]

  testModelCases(cases, elementType, options, mocks, baseSchema, testChanges)
}

const baseSchema = (mocks, elementType) => {
  let {
    elChangeMock,
    el2ChangeMock,
  } = mocks

  let schema = {
    el: {
      type: elementType,
      onChange: elChangeMock,
    },
    el2: {
      type: elementType,
      onChange: el2ChangeMock,
    },
  }

  return schema
}