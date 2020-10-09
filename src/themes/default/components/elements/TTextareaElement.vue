<script>
  import TTextareaElement from './../../../../components/elements/TTextareaElement'

  import TextareaElement from './TextareaElement'

  export default {
    name: 'TTextareaElement',
    mixins: [TTextareaElement],
    render: TextareaElement.render,
  }
</script>