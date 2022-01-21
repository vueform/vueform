<template>
  <component :is="elementLayout">
    <template #element>
      <div :class="classes.inputContainer">
        <ElementAddon v-if="hasAddonBefore" type="before">
          <slot name="addon-before"/>
        </ElementAddon>

        <ElementAddon v-if="hasAddonAfter" type="after">
          <slot name="addon-after"/>
        </ElementAddon>

        <ElementLabelFloating
          v-if="hasFloating && !empty"
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

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'TextareaElement',
    data() {
      return {
        merge: true,
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