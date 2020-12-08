<template>
  <button
    :class="classes.button"
    :disabled="isDisabled"
    @click.prevent="handleClick"
    v-html-if="{label: !isLabelComponent}"
  >
    <component v-if="isLabelComponent" :is="label" :button="button" />
  </button>
</template>

<script>
  import FormButton from './../../../components/FormButton'

  export default {
    name: 'FormButton',
    mixins: [FormButton],
    data() {
      return {
        defaultClasses: {
          button: 'btn',
          loading: 'btn-loading',
          disabled: 'btn-disabled',
          left: 'align-left',
          center: 'align-center',
          right: 'align-right',
        }
      }
    }
  }
</script>