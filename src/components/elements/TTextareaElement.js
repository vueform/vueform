import TextareaElement from './TextareaElement'
import MultilingualElement from './../../mixins/MultilingualElement'
import MultilingualValidation from './../../mixins/MultilingualValidation'
import useTTextarea from './../../composables/elements/useTTextarea'

export default {
  name: 'TTextareaElement',
  mixins: [TextareaElement, MultilingualElement, MultilingualValidation],
  init: useTTextarea,
  mounted() {
    this.form$.on('language', () => {
      this.autosize()
    })
  }
}