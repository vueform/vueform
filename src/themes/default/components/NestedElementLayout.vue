<template>
  <div :class="[el$.columns.classes.element, theme.classes.elementContainer, el$.elementClass]" v-show="el$.visible">
    <div :class="[theme.classes.elementInner]">
      <div :class="[el$.columns.classes.label, theme.classes.labelContainer]" v-if="el$.hasLabel">
        <slot name="label">
          <component v-if="el$.slots.label" :is="el$.slots.label" :el$="el$"/>
          <component v-else :is="theme.components.ElementLabel" :for="el$.name" v-html="el$.label"/>
        </slot>

        <slot name="info">
          <component v-if="el$.slots.info" :is="el$.slots.info" :el$="el$"/>
          <component v-else-if="el$.info" :is="theme.components.ElementInfo" :for="el$.id" v-html="el$.info"/>
        </slot>
      </div>
      <div :class="[el$.columns.classes.field, theme.classes.fieldContainer]">

        <slot name="before">
          <component v-if="el$.slots.before" :is="el$.slots.before" :el$="el$"/>
          <span v-else-if="el$.before" v-html="el$.before"></span>
        </slot>

        <slot name="children">
          <component v-if="el$.slots.children" :is="el$.slots.children" :el$="el$"/>
          <div v-else :class="theme.classes.elementGroupContainer">
            <slot name="prefix"></slot>

            <div :class="theme.classes.elementGroup">
              <slot name="elements"></slot>
            </div>

            <slot name="suffix"></slot>
          </div>
        </slot>

        <slot name="between">
          <component v-if="el$.slots.between" :is="el$.slots.between" :el$="el$"/>
          <span v-else-if="el$.between" v-html="el$.between"></span>
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
</template>

<script>
  import NestedElementLayout from './../../../components/NestedElementLayout'

  export default {
    mixins: [NestedElementLayout],
  }
</script>