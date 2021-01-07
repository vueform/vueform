export default function findAll (parent, query) {
  let res = parent.findAll(query)

  return {
    at: (i) => { return res[i] },
    last: () => { return res[res.length - 1] },
    length: res.length,
  }
}