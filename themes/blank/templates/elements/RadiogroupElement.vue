<template>
  <component :is="elementLayout">
    <template #element>
      <div :class="classes.wrapper"> 
        <RadiogroupRadio
          v-for="(item, value, key) in resolvedItems"
          :items="resolvedItems"
          :index="key"
          :item="item"
          :value="value"
          :key="key"
        >
          <template #default="scope">
            <slot name="radio" v-bind="scope" :el$="el$">
              <component :is="fieldSlots.radio" v-bind="scope" :el$="el$"/>
            </slot>
          </template>
        </RadiogroupRadio>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'RadiogroupElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          wrapper_sm: '',
          wrapper_md: '',
          wrapper_lg: '',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>