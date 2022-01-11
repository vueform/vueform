<template>
  <label :class="classes.container">
    <slot
      v-bind="{ name: `${el$.path}-${value}` }"
      :classes="classes"
      :is-disabled="isDisabled"
      :id="`${el$.fieldId}-${value}`"
      :item="item"
      :value="value"
      :items="items"
      :index="index"
    >
      <div
        class="flex items-center justify-center border py-1.5 w-full bg-white"
        :class="{
          'border-r-0': index < Object.keys(items).length - 1,
          'rounded-l-md': index === 0,
          'rounded-r-md': index === Object.keys(items).length - 1,
          'bg-green-500 text-white border-green-400': el$.value.indexOf(value) !== -1,
          'border-gray-300': el$.value.indexOf(value) === -1,
          'opacity-50': isDisabled,
        }"
      >
        <input
        type="checkbox"
        v-model="el$.model"
        :value="value"
        :class="classes.input"
        :name="`${el$.path}-${value}`"
        :id="`${el$.fieldId}-${value}`"
        :disabled="isDisabled"
        />
        <span 
        :class="classes.text"
        v-html="`${item.label} valami`"
        />
      </div>
    </slot>
  </label>
</template>

<script>
  export default {
    name: 'CheckboxgroupCheckbox_tabs',
    data() {
      return {
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          text: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>