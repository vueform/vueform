<template>
  <div class="col-lg-12">
    <div class="form-group">
      <div class="row">

        <div class="col-lg-12">
          <slot name="label">
            <component :is="theme.components.ElementLabel" />
          </slot>
        </div>

        <div class="col-lg-12">
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