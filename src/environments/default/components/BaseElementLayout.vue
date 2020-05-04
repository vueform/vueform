<template>
  <div :class="theme.classes.baseElementLayout.container">
    <div :class="theme.classes.baseElementLayout.outerWrapper">
      <div :class="theme.classes.baseElementLayout.innerWrapper">

        <div :class="theme.classes.baseElementLayout.labelWrapper">
          <slot name="label">
            <component :is="theme.components.ElementLabel" />
          </slot>
        </div>

        <div :class="theme.classes.baseElementLayout.fieldWrapper">
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