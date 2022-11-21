<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div :class="classes.wrapper" :aria-labelledby="labelId" role="radiogroup"> 
        <RadiogroupRadio
          v-for="(item, index, key) in resolvedOptions"
          :items="resolvedOptions"
          :index="index"
          :item="item"
          :value="item.value"
          :key="key"
          :attrs="aria"
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
        }
      }
    }
  }
</script>

<style lang="scss">
</style>