<template>
  <label v-if="isLabelComponent" :class="classes.label" :for="name">
    <component v-if="isLabelComponent" :is="label" :el$="el$" />
  </label>
  <label v-else :class="classes.label" :for="name" v-html="label"></label>
</template>

<script>
  export default {
    name: 'ElementLabel',
    data() {
      return {
        defaultClasses: {
          label: 'control-label',
        }
      }
    }
  }
</script>