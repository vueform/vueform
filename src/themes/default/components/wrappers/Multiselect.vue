<template>
  <div
    class="multiselect"
    :class="{'is-open': isOpen}"
  >
    <div
      class="multiselect-input"
      :tabindex="0"
      @focus="open"
      @blur="close"
    >
      <div
        v-if="mode == 'single' && hasSelected"
        class="multiselect-single-label"
      >
        {{ value[label] }}
      </div>
      <div
        v-else-if="placeholder"
        class="multiselect-placeholder"
      >
        {{ placeholder }}
      </div>

    </div>

    <transition name="multiselect">
      <div class="multiselect-content" v-show="isOpen">
        <a
          v-for="(option, i, key) in filteredOptions"
          href=""
          class="multiselect-option"
          :class="{'is-selected': isSelected(option)}"
          :key="key"
          @click.prevent="handleOptionClick(option)"
        >
          <span>{{ option[label] }}</span>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
  import Multiselect from './../../../../components/wrappers/Multiselect'

  export default {
    mixins: [Multiselect],
  }

</script>

<style lang="scss">
  .multiselect {
    position: relative;
    max-width: 400px;
    margin: 0 auto;

    .multiselect-input {
      width: 100%;
      display: inline-block;
      height: 40px;
      border: 1px solid #e7e7e7;
      border-radius: 3px;
      box-sizing: border-box;
      cursor: pointer;

      &:before {
        position: absolute;
        right: 12px;
        top: 50%;
        color: #999;
        border-style: solid;
        border-width: 5px 5px 0;
        border-color: #999 transparent transparent;
        content: "";
        transform: translateY(-100%);
        transition: .3s transform;
      }
    }

    &.is-open {
      border-radius: 3px 3px 0 0;

      .multiselect-input {
        &:before {
          transform: translateY(-100%) rotate(180deg);
        }
      }
    }
  }

  .multiselect-placeholder,
  .multiselect-single-label {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 14px;
  } 

  .multiselect-placeholder {
    color: #777777;
  } 

  .multiselect-content {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0px;
    border: 1px solid #e8e8e8;
    margin-top: -1px;
  }

  .multiselect-option {
    display: flex;
    height: 38px;
    padding: 9px 12px;
    box-sizing: border-box;
    color: #222;
    text-decoration: none;

    &:hover {
      background: #f9f9f9;
    }

    &.is-selected {
      background: #41b883;
      color: #ffffff;
    }
  }

  .multiselect-enter-active,
  .multiselect-leave-active {
    transition: all 0.15s ease;
  }

  .multiselect-enter,
  .multiselect-leave-active {
    opacity: 0;
  }
</style>