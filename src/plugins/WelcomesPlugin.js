export default {
  install(form$) {
    form$.$once('hook:beforeCreate', () => {
      alert('Hello')
    })
  }
}