<template>
  <component :is="elementLayout">
    <template #element>
      <div :class="classes.inputContainer">
        <ElementAddon v-if="hasAddonBefore" type="before"><slot name="addon-before"/></ElementAddon>
        <ElementAddon v-if="hasAddonAfter" type="after"><slot name="addon-after"/></ElementAddon>
        <ElementLabelFloating v-if="hasFloating && !empty" :visible="!empty" />
        <ElementLoader v-show="isLoading"/>
        <input
          :value="model"
          :type="inputType"
          :name="name"
          :id="fieldId"
          :class="classes.input"
          :placeholder="placeholder" 
          :autocomplete="autocomplete"
          :disabled="isDisabled"
          :readonly="readonly"
          @input="handleInput"
          @select="handleInput"
          ref="input"
       />
      </div>
    </template>
    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'TextElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          $input: (classes, { isDisabled }) => ([
            classes.input,
            isDisabled ? classes.input_disabled : classes.input_enables,
          ])
        },
      }
    },
  }
</script>

<style lang="scss">
</style>