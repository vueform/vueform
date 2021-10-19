<template>
  <component :is="elementLayout">
    <template #field>
      <div :class="classes.inputContainer">
        <ElementAddon v-if="hasAddonBefore" type="before">
          <slot name="addon-before"/>
        </ElementAddon>

        <ElementAddon v-if="hasAddonAfter" type="after">
          <slot name="addon-after"/>
        </ElementAddon>

        <ElementLabelFloating
          v-if="hasFloating"
          :visible="!empty"
       />

        <input
          type="search"
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

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
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