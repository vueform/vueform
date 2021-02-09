<template>
  <div v-if="description" :class="classes.fieldDescription" v-html="description"></div>
</template>

<script>
  export default {
    name: 'ElementDescription',
    data() {
      return {
        defaultClasses: {
          fieldDescription: 'lf-field-description',
        }
      }
    }
  }
</script>