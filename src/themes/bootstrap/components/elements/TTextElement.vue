<script>
  import TTextElement from './../../../../components/elements/TTextElement'

  import TextElement from './TextElement'

  export default {
    name: 'TTextElement',
    mixins: [TTextElement],
    render: TextElement.render,
    data: TextElement.data,
  }
</script>