<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <slot name="prefix"></slot>

      <ElementLabelFloating
        v-if="floating"
        :visible="!empty"
      />
      
      <FlatpickrWrapper
        :value="value"
        :options="fieldOptions"
        :id="fieldId"
        :class="classes.input"
        :placeholder="placeholder"
        :disabled="isDisabled"
        :readonly="readonly"
        @input="handleInput"
        ref="input"
      />

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
    name: 'DateElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-date',
          input: 'form-control',
        }
      }
    }
  }
</script>