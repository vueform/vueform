<template>
  <div class="row">
    <div class="col-lg-3">
      <slot name="label">
        <component :is="theme.components.ElementLabel" />
      </slot>
    </div>
    <div class="col-lg-9">
      <slot name="field"></slot>
    </div>
  </div>
</template>

<script>
  import BaseElementLayout from './../../../components/BaseElementLayout'

  export default {
    mixins: [BaseElementLayout],
  }
</script>