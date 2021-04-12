<template>
  <form
    :class="extendedClasses.form"
    @submit.prevent="submit"
  >
    <slot>
      <FormMessages
        v-if="hasMessages"
      />

      <FormErrors
        v-if="hasErrors && options.displayErrors"
      />

      <FormLanguages
        v-if="isMultilingual"
      />

      <FormTabs
        v-if="hasTabs"
      />

      <FormSteps
        v-if="hasSteps"
      />
      
      <FormElements />

      <FormStepsControls
        v-if="hasSteps && options.stepsControls"
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