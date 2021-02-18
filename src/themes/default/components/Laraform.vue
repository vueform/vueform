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
      @changeLanguage="handleChangeLanguage"
    />

    <FormTabs
      v-if="hasTabs"
      :tabs="tabs"
    />

    <FormWizard
      v-if="hasWizard"
      :steps="wizard"
      @submit="handleSubmit"
    />
    
    <FormElements
      :schema="schema"
      @updateSchema="updateSchema"
    />

    <FormWizardControls
      v-if="hasWizard && wizardControls"
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