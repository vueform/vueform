<template>
  <form
    :class="classes.form"
    @submit.prevent="submit"
  >
    <slot name="empty">
      <component is="FormMessages" v-if="showMessages"/>
      <component is="FormErrors" v-if="showErrors"/>
      <component is="FormLanguages" v-if="showLanguages"/>
      <component is="FormTabs" v-if="showTabs"/>
      <component is="FormSteps" v-if="showSteps"/>
      <FormElements><slot/></FormElements>
      <component is="FormStepsControls" v-if="showStepsControls"/>
    </slot>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        merge: true,
        defaultClasses: {
          form: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>