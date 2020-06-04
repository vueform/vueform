<template>
  <div v-if="buttons.length > 0" :class="classes.container">
    <template v-for="(button, index) in buttons">
      <component :is="components.FormButton"
        :button="button"
        :key="index"
        ref="buttons$"
      />
    </template>
  </div>
</template>

<script>
  import FormButtons from './../../../components/FormButtons'

  export default {
    mixins: [FormButtons],
    data() {
      return {
        defaultClasses: {
          container: 'buttons-container'
        }
      }
    }
  }
</script>