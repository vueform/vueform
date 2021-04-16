<template>
  <span :class="classes.container">
    <span v-text="option.label"></span>
    <i
      v-if="!disabled"
      @click.prevent
      @mousedown.prevent="handleTagRemove(option, $event)"
    ></i>
  </span>
</template>

<script>
  export default {
    name: 'MultiselectSlotTag',
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-tag'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .multiselect-tag {
    background: $primary;
    color: $input-bg;
    font-size: 14px;
    font-weight: 600;
    padding: 0 0 0 8px;
    border-radius: 3px;
    margin-right: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    cursor: text;
    white-space: nowrap;
  }

  .multiselect-tag i {
    cursor: pointer;
  }

  .multiselect-tag i:before {
    content: "\D7";
    color: darken($primary, 25%);
    font-size: 14px;
    font-weight: 700;
    padding: 1px 5px 1px 5px;
    margin-left: 3px;
    display: flex;
    font-style: normal;
  }

  .multiselect-tag i:hover:before {
    color: #ffffff;
    background: rgba(255,255,255,0.2);
  }

  .is-disabled .multiselect-tag {
    background: darken($input-disabled-bg, 37.5%);
    padding: 1px 8px 1px 8px;
  }
</style>