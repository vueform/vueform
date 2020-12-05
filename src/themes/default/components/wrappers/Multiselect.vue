<template>
  <div
    class="multiselect"
    :class="{'is-open': isOpen, 'is-searchable': searchable}"
    :id="id"
    @keydown.prevent.enter
    ref="multiselect"
  >
    <div
      class="multiselect-input"
      :tabindex="tabindex"
      @focus="open"
      @blur="close"
      @keyup.esc="handleEsc"
      @keyup.enter="selectPointer"
      @keydown.up="backwardPointer"
      @keydown.down="forwardPointer"
    >
      <div
        v-if="searchable"
        class="multiselect-search"
      >
        <input    
          v-model="search"
          @focus.stop="open"
          @blur.stop="close"
          @keyup.stop.esc="handleEsc"
          @keyup.stop.enter="selectPointer"
          @keydown.stop.up="backwardPointer"
          @keydown.stop.down="forwardPointer"
          ref="input"
        />
      </div>

      <div
        v-if="mode == 'single' && hasSelected && !search"
        class="multiselect-single-label"
      >
        {{ value[label] }}
      </div>

      <div
        v-if="mode == 'multiple' && hasSelected && !search"
        class="multiselect-multiple-label"
      >
        {{ multipleSelectionText }}
      </div>

      <div
        v-if="placeholder && !hasSelected && !search"
        class="multiselect-placeholder"
      >
        {{ placeholder }}
      </div>

    </div>

    <transition name="multiselect" @after-leave="clearSearch">
      <div
        v-show="isOpen"
        class="multiselect-content"
        :style="{ maxHeight: contentMaxHeight }"
      >
        <a
          v-for="(option, i, key) in filteredOptions"
          href=""
          class="multiselect-option"
          :class="{
            'is-pointed': isPointed(option),
            'is-selected': isSelected(option),
          }"
          :key="key"
          @mousedown.prevent
          @mouseenter="setPointer(option)"
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
    font-size: 0;

    & > * {
      font-size: initial;
    }

    .multiselect-input {
      width: 100%;
      display: inline-block;
      height: 40px;
      border: 1px solid #e7e7e7;
      border-radius: 3px;
      box-sizing: border-box;
      cursor: pointer;
      position: relative;
      outline: none;

      &:before {
        position: absolute;
        right: 12px;
        top: 50%;
        color: #999;
        border-style: solid;
        border-width: 5px 5px 0;
        border-color: #999 transparent transparent;
        content: "";
        transform: translateY(-50%);
        transition: .3s transform;
      }
    }

    &.is-open {
      .multiselect-input {
        border-radius: 3px 3px 0 0;
      }

      .multiselect-input {
        &:before {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }

    &.is-searchable {
      cursor: auto;
    }
  }

  .multiselect-placeholder,
  .multiselect-single-label,
  .multiselect-multiple-label {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 14px;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
  } 

  .multiselect-placeholder {
    color: #777777;
  } 

  .multiselect-search {
    display: flex;
    height: 100%;
    width: 100%;
    background: transparent;

    input {
      width: 100%;
      border: 0;
      padding: 8px 35px 8px 14px;
      outline: none;
      background: transparent;
    }
  } 

  .multiselect-content {
    position: absolute;
    left: 0;
    right: 0px;
    border: 1px solid #e8e8e8;
    margin-top: -1px;
    max-height: 160px;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .multiselect-option {
    display: flex;
    height: 40px;
    padding: 9px 12px;
    box-sizing: border-box;
    color: #222;
    text-decoration: none;

    &.is-pointed {
      background: #f1f1f1;
    }

    &.is-selected {
      background: #41b883;
      color: #ffffff;

      &.is-pointed {
        background: #4FBD8C;
      }
    }
  }

  .multiselect-enter-active {
    transition: all 0.15s ease;
  }

  .multiselect-leave-active {
    transition: all 0s;
  }

  .multiselect-enter,
  .multiselect-leave-active {
    opacity: 0;
  }
</style>