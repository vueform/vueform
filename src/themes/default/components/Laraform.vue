<template>
  <form
    :class="extendedClasses.form"
    @submit.prevent="handleSubmit"
  >
    <component :is="extendedComponents.FormElements"
      :schema="schema"
      @updateSchema="updateSchema"
      v-ref:elements$
    />
    <component :is="extendedComponents.FormButtons"
      :buttons="buttons"
      v-ref:buttons$
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