<template>
  <div :class="classes.container">
    <span
      :class="classes.label"
      v-html="floating"
    ></span>
  </div>
</template>

<script>
  export default {
    name: 'ElementLabelFloating',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          label: '',
          label_sm: '',
          label_md: '',
          label_lg: '',
          label_invisible: '',
          label_visible: '',
          $label: (classes, { visible, Size }) => ([
            classes.label,
            classes[`label_${Size}`],
            visible ? classes.label_visible : classes.label_invisible
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>