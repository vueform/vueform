<template>
  <component :is="theme.components.BaseElementLayout"
    :el$="el$"
  >
    <template slot="field">
      <slot name="prefix"></slot>

      <component :is="theme.components.ElementLabelFloating"
        v-if="floating"
        :visible="!empty"
      >{{ floating }}</component>
      
      <Flatpickr
        v-bind="options"
        v-model="model"
        :id="id"
        :placeholder="placeholder"
        :class="theme.classes.input"
        :mode="mode"
        :dateFormat="format"
        :defaultDate="defaultValue"
        :time_24hr="hour24"
        :enableTime="time"
        :enableSeconds="seconds"
        :disable="disables"
        :clickOpens="!disabled && !readonly"
        :disabled="disabled"
        :readonly="readonly"
        :noCalendar="hideCalendar"
        :maxDate="max"
        :minDate="min"
        @change="handleChange"
        ref="datepicker$"
      />

      <slot name="suffix"></slot>
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import DateElement from './../../../../components/elements/DateElement'

  import Flatpickr from './../../../../components/wrappers/Flatpickr'

  export default {
    mixins: [DateElement],
    components: {
      Flatpickr,
    },
  }
</script>