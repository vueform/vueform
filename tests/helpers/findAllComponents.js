export default function findAllComponents (parent, query) {
  let res = parent.findAllComponents(query)

  return {
    at: (i) => { return res[i] },
    length: res.length,
  }
}