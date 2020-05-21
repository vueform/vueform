<template>
  <form :class="extendedClasses.form">
    <component :is="extendedTheme.components.FormElements"
      :schema="schema"
      @updateSchema="updateSchema"
      ref="elements$"
    />
  </form>
</template>

<script>
  export default {
    data() {
      return {
        defaultClasses: {
          form: 'laraform-bs4',
        }
      }
    }
  }
</script>