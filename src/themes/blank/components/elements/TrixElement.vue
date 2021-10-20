<template>
  <component :is="elementLayout">
    <template #element>
      <TrixWrapper
        :value="model"
        :placeholder="placeholder"
        :id="fieldId"
        :accept="accept"
        :accept-mimes="acceptMimes"
        :endpoint="trixEndpoint"
        :method="trixMethod"
        :disabled="isDisabled"
        :class="classes.input"
        @input="handleInput"
        @alert="handleAlert"
        @error="handleError"
        ref="input"
     />
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'TrixElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
        }
      }
    }
  }
</script>


<style lang="scss">
</style>