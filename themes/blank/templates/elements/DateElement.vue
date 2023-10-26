<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div :class="classes.inputContainer">

        <ElementAddon v-if="hasAddonBefore" type="before">
          <slot name="addon-before"><component :is="fieldSlots['addon-before']" :el$="el$"/></slot>
        </ElementAddon>

        <ElementAddon v-if="hasAddonAfter" type="after">
          <slot name="addon-after"><component :is="fieldSlots['addon-after']" :el$="el$"/></slot>
        </ElementAddon>

        <ElementLabelFloating
          v-if="hasFloating && !empty"
          :visible="!empty"
        />

        <div :class="classes.inputWrapper">
          <DatepickerWrapper
            :value="model"
            :options="fieldOptions"
            :id="fieldId"
            :class="classes.input"
            :placeholder="Placeholder"
            :disabled="isDisabled"
            :readonly="readonly"
            :attrs="aria"
            @change="handleChange"
            ref="input"
          />
        </div>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'DateElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          inputWrapper: '',
          input: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>