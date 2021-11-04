<script>
  import MultiselectElement from './../../../blank/templates/elements/MultiselectElement.vue'
  import Multiselect from '@vueform/multiselect/src/Multiselect.vue'

  export default {
    name: 'MultiselectElement',
    components: {
      Multiselect,
    },
    render: MultiselectElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: 'vf-input',
          input_enabled: '',
          input_disabled: '',
          inputWrapper: '',
          select: {},
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue & SelectElement.vue

  .multiselect-multiple-label {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
    line-height: var(--vf-select-line-height);
    padding-left: var(--vf-select-px);
  }
</style>