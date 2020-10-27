export default function findAllComponents (parent, query) {
  let res = parent.findAllComponents(query)

  return {
    at: (i) => { return res.at(i) },
    length: res.length,
  }
}