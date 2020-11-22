export default function spliceMultiple (array, indexes) {
  indexes.sort()

  for (let i = indexes.length - 1; i >= 0; i--) {
    array.splice(indexes[i], 1)
  }

  return array
}