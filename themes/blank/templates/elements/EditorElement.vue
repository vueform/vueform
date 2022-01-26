<template>
  <component :is="elementLayout">
    <template #element>
      <EditorWrapper
        :value="model"
        :placeholder="placeholder"
        :id="fieldId"
        :accept="accept"
        :accept-mimes="acceptMimes"
        :endpoint="editorEndpoint"
        :method="editorMethod"
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
    name: 'EditorElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
          input_sm: '',
          input_md: '',
          input_lg: '',
          $input: (classes, { isDisabled, focused, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
            focused ? classes.input_focused : null,
          ]),
        }
      }
    }
  }
</script>


<style lang="scss">
</style>