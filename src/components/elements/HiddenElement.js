import BaseElement from './../../mixins/BaseElement'
import useHidden from './../../composables/elements/useHidden'

export default {
  name: 'HiddenElement',
  mixins: [BaseElement],
  init(props, context) {
    const hidden = useHidden(props, context)

    return {
      ...hidden,
    }
  },
}