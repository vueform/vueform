import BaseElement from './../../mixins/BaseElement'
import useTText from './../../composables/elements/useTText'

export default {
  name: 'TTextElement',
  mixins: [BaseElement],
  init(props, context) {
    const ttext = useTText(props, context)

    return {
      ...ttext,
    }
  },
}