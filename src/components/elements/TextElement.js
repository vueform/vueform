import BaseElement from './../../mixins/BaseElement'
import useText from './../../composables/elements/useText'

export default {
  name: 'TextElement',
  mixins: [BaseElement],
  init(props, context) {
    const text = useText(props, context)

    return {
      ...text,
    }
  },
}