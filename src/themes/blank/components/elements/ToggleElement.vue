<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <div :class="classes.wrapper">
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
        <span v-else :class="classes.text"><slot><component :is="fieldSlots.default" /></slot></span>
      </div>

    </template>

    <template v-for="(slot) in elementSlots" v-slot:[slot]><slot :name="slot"></slot></template>
  </component>
</template>

<script>
  import Toggle from '@vueform/toggle/src/Toggle'

  export default {
    name: 'ToggleElement',
    components: {
      Toggle,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: '',
          toggle: {},
          text: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>