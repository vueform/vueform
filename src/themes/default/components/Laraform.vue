<template>
  <form
    :class="extendedClasses.form"
    @submit.prevent="submit"
  >
    <FormMessages
      v-if="hasMessages"
    />

    <FormErrors
      v-if="hasErrors && displayErrors"
    />

    <FormLanguageSelector
      v-if="multilingual"
    />

    <FormTabs
      v-if="hasTabs"
      :tabs="tabs"
    />

    <FormSteps
      v-if="hasSteps"
      :steps="steps"
      @submit="handleSubmit"
    />
    
    <FormElements
      :schema="schema"
      @updateSchema="updateSchema"
    />

    <FormStepsControls
      v-if="hasSteps && stepsControls"
    />
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