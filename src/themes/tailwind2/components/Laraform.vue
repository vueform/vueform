<template>
  <form
    :class="extendedClasses.form"
    @submit.prevent="submit"
  >
    <slot>
      <FormMessages
        v-if="showMessages"
      />

      <FormErrors
        v-if="showErrors"
      />

      <FormLanguages
        v-if="showLanguages"
      />

      <FormTabs
        v-if="showTabs"
      />

      <FormSteps
        v-if="showSteps"
      />
      
      <FormElements />

      <FormStepsControls
        v-if="showStepsControls"
      />
    </slot>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        defaultClasses: {
          form: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>