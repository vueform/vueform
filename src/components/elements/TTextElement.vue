<script>
  import TextElement from './TextElement.vue'
  import MultilingualElement from './../../mixins/MultilingualElement'
  import MultilingualValidation from './../../mixins/MultilingualValidation'

  export default {
    mixins: [TextElement, MultilingualElement, MultilingualValidation],
    name: 'TTextElement',
  }
</script>