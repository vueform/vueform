<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <ElementLabelFloating
        v-if="floating"
        :visible="!empty"
      />
      
      <FlatpickrWrapper
        :value="model"
        :modelValue="model"
        :options="fieldOptions"
        :id="fieldId"
        :class="classes.input"
        :placeholder="placeholder"
        :disabled="isDisabled"
        :readonly="readonly"
        @change="handleChange"
        ref="input"
      />

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