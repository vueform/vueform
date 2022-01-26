<template>
  <component :is="elementLayout">
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
          @input="handleChange"
          ref="input"
       />
        <span v-if="text" :class="classes.text" v-html="text"></span>
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
            toggle_sm: '',
            toggle_md: '',
            toggle_lg: '',
            toggleOn: '',
            toggleOff: '',
            toggleOnDisabled: '',
            toggleOffDisabled: '',
            handle: '',
            handle_sm: '',
            handle_md: '',
            handle_lg: '',
            handleOn: '',
            handleOff: '',
            handleOnDisabled: '',
            handleOffDisabled: '',
            label: '',
            label_sm: '',
            label_md: '',
            label_lg: '',
            $toggle: (classes, { Size }) => ([
              classes.toggle.toggle,
              classes.toggle[`toggle_${Size}`],
            ]),
            $handle: (classes, { Size }) => ([
              classes.toggle.handle,
              classes.toggle[`handle_${Size}`],
            ]),
            $label: (classes, { Size }) => ([
              classes.toggle.label,
              classes.toggle[`label_${Size}`],
            ]),
          },
          text: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>