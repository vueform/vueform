import asyncForEach from './../../src/utils/asyncForEach'
import tryInputValue from './tryInputValue'

export default async function tryInputValues (values, el, done) {
  await asyncForEach(values, async (expected, value) => {
    await tryInputValue(value, expected, el)
  })
}