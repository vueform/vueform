<template>
  <component :is="layout">
    <template v-slot:field>

      <slot name="prefix"></slot>

      <div :class="[{[classes.inputContainer]: hasAddon}]">
        <InputAddon
          v-if="addons.before"
          type="before"
        />

        <ElementLabelFloating
          v-if="floating"
          :visible="!empty"
        />

        <input
          :value="model"
          @input="handleInput"
          :type="inputType"
          :name="name"
          :id="fieldId"
          :class="classes.input"
          :placeholder="placeholder" 
          :autocomplete="autocomplete"
          :disabled="isDisabled"
          :readonly="readonly"
          ref="input"
        />

        <InputAddon
          v-if="addons.after"
          type="after"
        />

      </div>

      <slot name="suffix"></slot>
    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>
  </component>
</template>

<script>
  export default {
    name: 'TextElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-text',
          inputContainer: 'input-group',
          input: 'form-control',
        }
      }
    },
  }
</script>