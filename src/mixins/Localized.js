import _ from 'lodash'
import HasTranslator from './HasTranslator'

export default {
  mixins: [HasTranslator],

  inject: ['locale'],
}