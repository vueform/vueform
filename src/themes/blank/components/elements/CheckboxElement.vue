<template>
  <component :is="elementLayout">
    <template #field>
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

            <!-- If label is HTML -->
            <label
              v-if="text"
              :class="classes.label"
              :for="name"
              v-html="text"
            ></label>

            <!-- If label is slot -->
            <label
              v-else
              :class="classes.label"
              :for="name"
            ><slot :el$="el$"><component :is="fieldSlots.default" :el$="el$"/></slot></label>
          </div>
        </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
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