<template>
  <div :class="[el$.columns.classes.element, theme.classes.elementContainer, el$.elementClass, {[theme.classes.elementHasValue]: !el$.empty}, {[theme.classes.elementHasError]: el$.error}]" v-show="el$.visible">
    <div :class="[theme.classes.element]">
      <div :class="[theme.classes.elementInner]">
        <div :class="[el$.columns.classes.label, theme.classes.labelContainer]" v-if="el$.hasLabel">
          <slot name="label">
            <component v-if="el$.slots.label" :is="el$.slots.label" :el$="el$"/>
            <component v-else :is="theme.components.ElementLabel" :for="el$.id" v-html="el$.label"/>
          </slot>

          <slot name="info">
            <component v-if="el$.slots.info" :is="el$.slots.info" :el$="el$"/>
            <component v-else-if="el$.info" :is="theme.components.ElementInfo"/>
          </slot>
        </div>
        <div :class="[el$.columns.classes.field, theme.classes.fieldContainer]">

          <slot name="before">
            <component v-if="el$.slots.before" :is="el$.slots.before" :el$="el$"/>
            <span v-else-if="el$.before" v-html="el$.before"></span>
          </slot>

          <slot name="field"></slot>

          <slot name="between">
            <component v-if="el$.slots.between" :is="el$.slots.between" :el$="el$"/>
            <span v-else-if="el$.between" v-html="el$.between"></span>
          </slot>

          <slot name="description">
            <component v-if="el$.slots.description" :is="el$.slots.description" :el$="el$"/>
            <small v-else-if="el$.description" :class="theme.classes.fieldDescription" v-html="el$.description"></small>
          </slot>

          <slot name="error">
            <component v-if="el$.slots.error" :is="theme.slots.error" :el$="el$"/>
            <component v-else-if="el$.error && el$.displayError" :is="theme.components.ElementError" :error="el$.error"/>
          </slot>

          <slot name="after">
            <component v-if="el$.slots.after" :is="el$.slots.after" :el$="el$"/>
            <span v-else-if="el$.after" v-html="el$.after"></span>
          </slot>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseElementLayout from './../../../components/BaseElementLayout'

  export default {
    mixins: [BaseElementLayout],
  }
</script>