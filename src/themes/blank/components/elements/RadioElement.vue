<template>
  <component :is="elementLayout">
    <template v-slot:field>
      
      <div :class="classes.wrapper">
        <div :class="classes.inputContainer">
          <input
            type="radio"
            v-model="value"
            :value="radioValue"
            :class="classes.input"
            :name="fieldName"
            :id="fieldId"
            :disabled="isDisabled"
            ref="input"
          />

          <slot>
            <label 
              :class="classes.label"
              :for="name"
              v-html="text"
            >
            </label>
          </slot>
        </div>
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
          container: '',
          wrapper: '',
          inputContainer: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          label: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>