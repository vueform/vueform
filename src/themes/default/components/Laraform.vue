<template>
  <form
    :class="extendedClasses.form"
    @submit.prevent="submit"
  >
    <!-- <component
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
      @changeLanguage="setLanguage"
    />

    <component
      :is="components.FormTabs"
      v-if="hasTabs"
      :tabs="tabs"
      :elements$="elements$"
      ref="tabs$"
    />
    <component
      :is="components.FormWizard"
      v-if="hasWizard"
      :steps="wizard"
      :elements$="elements$"
      @submit="handleSubmit"
      ref="wizard$"
    /> -->
    
    <component :is="components.FormElements"
      :schema="schema"
      @updateSchema="updateSchema"
      ref="formElements$"
    />

    <!-- <component
      :is="components.TextElement"
      :schema="schema.a"
      :name="'a'"
    >
      <template v-slot:label="{ el$ }">{{ el$.name }}</template>
    </component> -->

    <!-- <component :is="components.FormWizardControls"
      v-if="hasWizard && wizardControls"
      :wizard$="wizard$"
    />

    <component :is="components.FormButtons"
      :buttons="buttons"
      ref="buttons$"
    /> -->
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