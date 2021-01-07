<template>
  <label v-if="isLabelComponent" :class="classes.label" :for="name">
    <component v-if="isLabelComponent" :is="label" :el$="el$" />
  </label>
  <label v-else :class="classes.label" :for="name" v-html="label"></label>
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