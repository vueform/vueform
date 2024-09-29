export default (name) => {
  const parts = name.split('_')

  return parts[parts.length - 1]
}