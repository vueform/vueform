<template>
  <div v-if="description" :class="classes.fieldDescription" v-html="description"></div>
</template>

<script>
  import ElementDescription from './../../../components/ElementDescription'

  export default {
    name: 'ElementDescription',
    mixins: [ElementDescription],
    data() {
      return {
        defaultClasses: {
          fieldDescription: 'lf-field-description',
        }
      }
    }
  }
</script>