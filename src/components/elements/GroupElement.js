import BaseElement from './../../mixins/BaseElement'
import useGroup from './../../composables/elements/useGroup'

export default {
  name: 'GroupElement',
  mixins: [BaseElement],
  init(props, context) {
    const group = useGroup(props, context)

    return {
      ...group,
    }
  },
}