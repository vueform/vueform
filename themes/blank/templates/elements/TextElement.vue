<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div :class="classes.inputContainer">
        <ElementAddon v-if="hasAddonBefore" type="before"><slot name="addon-before"><component :is="fieldSlots['addon-before']" :el$="el$"/></slot></ElementAddon>
        <ElementAddon v-if="hasAddonAfter" type="after"><slot name="addon-after"><component :is="fieldSlots['addon-after']" :el$="el$"/></slot></ElementAddon>
        <ElementLabelFloating v-if="hasFloating && !empty" :visible="!empty" />
        <ElementLoader v-if="isLoading"/>
        <input
          :value="model"
          :type="inputType"
          :name="name"
          :id="fieldId"
          :class="classes.input"
          :placeholder="Placeholder" 
          :autocomplete="autocomplete"
          :disabled="isDisabled"
          :readonly="readonly"
          v-bind="{
            ...attrs,
            ...aria,
          }"
          @keydown="handleKeydown"
          @keyup="handleKeyup"
          @keypress="handleKeypress"
          @input="handleInput"
          @select="handleInput"
          @blur="handleBlur"
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
        },
      }
    },
  }
</script>

<style lang="scss">
</style>