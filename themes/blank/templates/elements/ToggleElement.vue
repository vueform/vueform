<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div :class="classes.wrapper">
        <!-- @vueform/toggle component -->
        <Toggle
          :value="value"
          :modelValue="value"
          v-bind="fieldOptions"
          :classes="classes.toggle"
          :name="name"
          :id="fieldId"
          :aria="aria"
          @input="handleChange"
          ref="input"
       />
        <span v-if="Text" :class="classes.text" v-html="Text"></span>
        <span v-else :class="classes.text"><slot :el$="el$"><component :is="fieldSlots.default" :el$="el$"/></slot></span>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
import Toggle from '@vueform/toggle/src/Toggle.vue'

  export default {
    name: 'ToggleElement',
    components: {
      Toggle,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          toggle: {
            container: '',
            toggle: '',
            toggleOn: '',
            toggleOff: '',
            toggleOnDisabled: '',
            toggleOffDisabled: '',
            handle: '',
            handleOn: '',
            handleOff: '',
            handleOnDisabled: '',
            handleOffDisabled: '',
            label: '',
          },
          text: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>