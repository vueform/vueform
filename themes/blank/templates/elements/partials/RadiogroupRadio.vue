<template>
  <label :class="classes.container">
    <slot
      v-bind="{ name }"
      :classes="classes"
      :is-disabled="isDisabled"
      :id="id"
      :item="item"
      :value="value"
      :items="items"
      :index="index"
    >
      <input
        type="radio"
        v-model="el$.value"
        v-bind="attrs"
        :value="value"
        :class="classes.input"
        :name="name"
        :id="id"
        :disabled="isDisabled"
        :aria-label="item.label"
      />

      <span 
        :class="classes.text"
        v-html="item.label"
      />
    </slot>
  </label>
</template>

<script>
  export default {
    name: 'RadiogroupRadio',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          text: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>