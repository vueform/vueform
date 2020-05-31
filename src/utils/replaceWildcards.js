export default function (fillable, fill) {
  return vsprintf(fillable.replace('.*', '%s'), fill.match(/\.[0-9]/))
}