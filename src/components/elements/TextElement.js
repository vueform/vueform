import BaseElement from './../../mixins/BaseElement'
import useText from './../../composables/elements/useText'

export default {
  name: 'TextElement',
  mixins: [BaseElement],
  setup(props, context) {
    const text = useText(props, context)

    return {
      ...text,
    }
  },
  mounted() {
    console.log(this.id)
    // this.initMessageBag(this)
    // this.initValidation(this)
  }
}