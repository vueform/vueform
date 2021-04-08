<template>
  <component :is="elementLayout">
    <template v-slot:field>
      
      <div
        :class="classes.radioContainer"
      >
        <label 
          :class="classes.radioLabel"
          :for="name"
        >
          <input
            type="radio"
            v-model="value"
            :value="radioValue"
            :class="classes.radio"
            :name="fieldName"
            :id="fieldId"
            :disabled="isDisabled"
            ref="input"
          />
        
          <span :class="classes.text" v-html="text"></span>
        </label>
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
    name: 'RadioElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-radio',
          radioContainer: 'radio',
          radioLabel: '',
          radio: '',
          text: 'radio-text',
        }
      }
    }
  }
</script>

<style lang="scss">
  .radio-text {
    margin-left: 5px;
  }
</style>