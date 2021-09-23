<template>
  <component :is="elementLayout">
    <template #field>
      <div :class="classes.inputContainer">
        <element-addon v-if="hasAddonBefore" type="before"><slot name="addon-before" /></element-addon>
        <element-addon v-if="hasAddonAfter" type="after"><slot name="addon-after" /></element-addon>
        <element-label-floating v-if="floating" :visible="!empty"/>
        <element-label-floating v-show="pending" />
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
    <template v-for="(component, slot) in elementSlots" v-slot:[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$" /></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'TextElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>