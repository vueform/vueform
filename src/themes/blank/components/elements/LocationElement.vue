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

        <input
          type="text"
          :name="name"
          :id="fieldId"
          :class="classes.input"
          :placeholder="placeholder"
          :disabled="isDisabled"
          :readonly="readonly"
          ref="input"
          @blur="handleLocationBlur"
        />

      </div>

    </template>

    <template v-for="(slot) in elementSlots" v-slot:[slot]><slot :name="slot"></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'LocationElement',
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