<template>
  <component :is="elementLayout">
    <template v-slot:field>

        <div :class="classes.wrapper">
          <div :class="classes.inputContainer">
            <input
              type="checkbox"
              v-model="value"
              :class="classes.input"
              :name="name"
              :id="fieldId"
              :true-value="trueValue"
              :false-value="falseValue"
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
    name: 'CheckboxElement',
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