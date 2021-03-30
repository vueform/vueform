<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <div :class="classes.inputContainer">
        <slot name="addon-before">
          <component :is="fieldSlots.addonBefore"
            v-if="addons.before"
            type="before"
          />
        </slot>

        <ElementLabelFloating
          v-if="floating"
          :visible="!empty"
        />

        <textarea
          :value="model"
          :name="name"
          :id="fieldId"
          :class="classes.textarea"
          :placeholder="placeholder"
          :disabled="isDisabled"
          :readonly="readonly"
          :rows="rows"
          @input="handleInput"
          ref="input"
        />

        <slot name="addon-after">
          <component :is="fieldSlots.addonAfter"
            v-if="addons.after"
            type="after"
          />
        </slot>

      </div>
      
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