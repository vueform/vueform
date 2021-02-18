<template>
  <component :is="elementLayout">

    <template v-slot:field>
      <slot name="prefix"></slot>

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

      <slot name="suffix"></slot>
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
          container: 'lf-radiogroup',
          radioGroup: 'radio-group',
        }
      }
    }
  }
</script>