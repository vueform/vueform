<template>
  <label
    :class="classes.label"
    :for="name"
    v-html-if="{label: !isLabelComponent}"
  >
    <component v-if="isLabelComponent" :is="label" :el$="el$" />
  </label>
</template>

<script>
  import ElementLabel from './../../../components/ElementLabel'

  export default {
    name: 'ElementLabel',
    mixins: [ElementLabel],
    data() {
      return {
        defaultClasses: {
          label: 'control-label',
        }
      }
    }
  }
</script>