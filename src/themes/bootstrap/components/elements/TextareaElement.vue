<template>
  <component :is="elementLayout">
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

        <textarea
          :value="model"
          @input="handleInput"
          :name="name"
          :id="fieldId"
          :class="classes.textarea"
          :placeholder="placeholder"
          :disabled="isDisabled"
          :readonly="readonly"
          :rows="rows"
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
    name: 'TextareaElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-textarea',
          textarea: 'form-control',
        }
      }
    }
  }
</script>