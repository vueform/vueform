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
      :elements$="elements$"
    />

    <FormWizard
      v-if="hasWizard"
      :steps="wizard"
      :elements$="elements$"
      @submit="handleSubmit"
    />
    
    <FormElements
      :schema="schema"
      @updateSchema="updateSchema"
    />

    <FormWizardControls
      v-if="hasWizard && wizardControls"
      :wizard$="wizard$"
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