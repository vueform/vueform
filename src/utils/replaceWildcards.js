export default function (fillable, fill) {
  if (!fill.match(/\.([0-9]+)(?![a-zA-Z]+)/g)) {
    return fillable
  }

  fill.match(/\.([0-9]+)(?![a-zA-Z]+)/g).forEach((match) => {
    fillable = fillable.replace('.*', match)
  })

  return fillable
}