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

          <label
            v-if="text"
            :class="classes.label"
            :for="name"
            v-html="text"
          ></label>
          <label
            v-else
            :class="classes.label"
            :for="name"
          ><slot><component :is="fieldSlots.default" /></slot></label>
        </div>
      </div>

    </template>

    <template v-for="(slot) in elementSlots" v-slot:[slot]><slot :name="slot"></slot></template>
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