<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <div :class="classes.checkboxGroup">
        
        <div v-for="(item, value, key) in items" :key="key">
          <slot name="checkbox" :el$="el$" :item="item" :value="value">
            <component
              :is="fieldSlots.checkbox"
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
    name: 'CheckboxgroupElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          checkboxGroup: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>