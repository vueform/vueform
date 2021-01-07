export default function findAll (parent, query) {
  let res = parent.findAll(query)

  return {
    at: (i) => { return res.at(i) },
    last: () => { return res.at(res.length - 1) },
    length: res.length,
  }
}