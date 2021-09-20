<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <div :class="classes.inputContainer">
        <ElementAddon v-if="hasAddonBefore" type="before">
          <slot name="addon-before"></slot>
        </ElementAddon>

        <ElementAddon v-if="hasAddonAfter" type="after">
          <slot name="addon-after"></slot>
        </ElementAddon>

        <ElementLabelFloating
          v-if="floating"
          :visible="!empty"
        />

        <ElementLoader
          v-show="pending"
        />

        <textarea
          :value="model"
          :name="name"
          :id="fieldId"
          :class="classes.input"
          :placeholder="placeholder"
          :disabled="isDisabled"
          :readonly="readonly"
          :rows="rows"
          @input="handleInput"
          ref="input"
        />

      </div>
      
    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$" /></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'TextareaElement',
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
    }
  }
</script>

<style lang="scss">
</style>