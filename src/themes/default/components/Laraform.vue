<template>
  <form
    :class="extendedClasses.form"
    @submit.prevent="submit"
  >
    <component
      :is="extendedComponents.FormMessages"
      v-if="hasMessages"
    />

    <component
      :is="extendedComponents.FormErrors"
      v-if="hasErrors && displayErrors"
    />

    <component
      :is="extendedComponents.FormLanguageSelector"
      v-if="multilingual"
      @changeLanguage="handleChangeLanguage"
    />

    <component
      :is="extendedComponents.FormTabs"
      v-if="hasTabs"
      :tabs="tabs"
      :elements$="elements$"
    />

    <component
      :is="extendedComponents.FormWizard"
      v-if="hasWizard"
      :steps="wizard"
      :elements$="elements$"
      @submit="handleSubmit"
    />
    
    <component :is="extendedComponents.FormElements"
      :schema="schema"
      @updateSchema="updateSchema"
    />

    <component :is="extendedComponents.FormWizardControls"
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