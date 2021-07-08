<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <div :class="classes.radioGroup">

        <div v-for="(item, value, key) in items" :key="key">
          <slot name="radio" :el$="el$" :item="item" :value="value">
            <component
              :is="fieldSlots.radio"
              :item="item"
              :value="value"
            />
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
    name: 'RadiogroupElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          radioGroup: 'radio-group',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';
</style>