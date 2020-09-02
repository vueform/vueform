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
      v-if="hasErrors"
    />

    <component
      :is="extendedComponents.FormLanguageSelector"
      v-if="multilingual"
      @changeLanguage="setLanguage"
    />

    <component
      :is="extendedComponents.FormTabs"
      v-if="hasTabs"
      :tabs="tabs"
      :elements$="elements$"
      ref="tabs$"
    />
    <component
      :is="extendedComponents.FormWizard"
      v-if="hasWizard"
      :steps="wizard"
      :elements$="elements$"
      @submit="handleSubmit"
      ref="wizard$"
    />
    
    <component :is="extendedComponents.FormElements"
      :schema="schema"
      @updateSchema="updateSchema"
      ref="elements$"
    />

    <component :is="extendedComponents.FormWizardControls"
      v-if="hasWizard && wizardControls"
      :wizard$="wizard$"
    />

    <component :is="extendedComponents.FormButtons"
      :buttons="buttons"
      ref="buttons$"
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