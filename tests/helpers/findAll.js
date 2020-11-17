export default function findAll (parent, query) {
  let res = parent.findAll(query)

  return {
    at: (i) => { return res[i] },
    length: res.length,
  }
}