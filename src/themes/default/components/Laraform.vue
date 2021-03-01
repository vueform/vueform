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
        v-if="hasErrors && displayErrors"
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
      
      <FormElements
        @updateSchema="updateSchema"
      />

      <FormStepsControls
        v-if="hasSteps && stepsControls"
      />
      {{ data }}
    </slot>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        defaultClasses: {
          form: 'lf-form',
        }
      }
    }
  }
</script>