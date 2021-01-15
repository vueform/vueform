<template>
  <form
    :class="extendedClasses.form"
    @submit.prevent="submit"
  >
    <component
      :is="components.FormMessages"
      v-if="hasMessages"
    />

    <component
      :is="components.FormErrors"
      v-if="hasErrors"
    />

    <component
      :is="components.FormLanguageSelector"
      v-if="multilingual"
      @changeLanguage="handleChangeLanguage"
    />

    <component
      :is="components.FormTabs"
      v-if="hasTabs"
      :tabs="tabs"
      :elements$="elements$"
    />

    <component
      :is="components.FormWizard"
      v-if="hasWizard"
      :steps="wizard"
      :elements$="elements$"
      @submit="handleSubmit"
    />
    
    <component :is="components.FormElements"
      :schema="schema"
      @updateSchema="updateSchema"
    />

    <component :is="components.FormWizardControls"
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