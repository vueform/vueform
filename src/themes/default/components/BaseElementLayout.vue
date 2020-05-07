<template>
  <div :class="theme.classes.BaseElementLayout.container">
    <div :class="theme.classes.BaseElementLayout.outerWrapper">
      <div :class="theme.classes.BaseElementLayout.innerWrapper">

        <div :class="theme.classes.BaseElementLayout.labelWrapper">
          <slot name="label">
            <component :is="theme.components.ElementLabel" />
          </slot>
        </div>

        <div :class="theme.classes.BaseElementLayout.fieldWrapper">
          <slot name="field"></slot>
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