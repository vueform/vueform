export default function findAll (parent, query) {
  let res = parent.findAll(query)

  return {
    at: (i) => { return res.at(i) },
    length: res.length,
  }
}