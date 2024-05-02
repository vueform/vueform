<script>
  import CaptchaElement from './../../../blank/templates/elements/CaptchaElement.vue'

  export default {
    name: 'CaptchaElement',
    render: CaptchaElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          captcha: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>