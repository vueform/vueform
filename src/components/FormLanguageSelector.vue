<script>
  import Localized from './../mixins/Localized'

  export default {
    mixins: [Localized],
    inject: ['form$', 'theme', 'layout'],
    name: 'FormLanguageSelector',
    props: {
    	name: [String, Number],
    },
    computed: {
      language() {
        return this.form$.language
      },
      languages() {
        return this.form$.languages
      },
    },
    methods: {
      select(language) {
        this.$emit('changeLanguage', language)
      },
    },
  }
</script>