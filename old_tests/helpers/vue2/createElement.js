export default function createElement () {
  let args = _.values(arguments)

  let h = args[0]

  args.splice(0,1)

  return h.apply(null, args)
}