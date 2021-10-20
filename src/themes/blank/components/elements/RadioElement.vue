<template>
  <component :is="elementLayout">
    <template #element>
      <div :class="classes.wrapper">
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
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
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