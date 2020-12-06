<template>
  <div
    class="multiselect"
    :class="[`is-${mode}`, {
      'is-open': isOpen,
      'is-searchable': searchable,
      'is-disabled': disabled,
      'no-caret': !caret,
    }]"
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
      @keyup.prevent.backspace="handleBackspace"
      @keydown.prevent.up="backwardPointer"
      @keydown.prevent.down="forwardPointer"
    >

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
        v-if="mode == 'tags'"
        class="multiselect-tags"
      >
        <div
          v-for="(option, i, key) in value"
          class="multiselect-tag"
          :key="key"
        >
          {{ option[label] }}

          <i
            v-if="!disabled"
            @click.prevent
            @mousedown.prevent="remove(option)"
          ></i>
        </div>
    
        <div
          v-if="searchable && !disabled"
          class="multiselect-search"
          :style="{ width: tagsSearchWidth }"
        >
          <input    
            v-model="search"
            @focus.stop="open"
            @blur.stop="close"
            @keyup.stop.esc="handleEsc"
            @keyup.stop.enter="selectPointer"
            @keyup.backspace="handleTagsSearchBackspace"
            @keydown.stop.up="backwardPointer"
            @keydown.stop.down="forwardPointer"
            :style="{ width: tagsSearchWidth }"
            ref="input"
          />
        </div>
      </div>
    
      <div
        v-if="mode !== 'tags' && searchable && !disabled"
        class="multiselect-search"
      >
        <input    
          v-model="search"
          @focus.stop="open"
          @blur.stop="close"
          @keyup.stop.esc="handleEsc"
          @keyup.stop.enter="selectPointer"
          @keyup.stop.backspace
          @keydown.stop.up="backwardPointer"
          @keydown.stop.down="forwardPointer"
          ref="input"
        />
      </div>

      <div
        v-show="placeholder && !hasSelected && !search"
        class="multiselect-placeholder"
      >
        {{ placeholder }}
      </div>

      <transition name="multiselect-loading">
        <div v-show="loading" class="multiselect-spinner" />
      </transition>

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
          @click.stop.prevent="handleOptionClick(option)"
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
    name: 'Multiselect',
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

    &.is-searchable {
      cursor: auto;
    }
  }

  .multiselect-input {
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 40px;
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

  .is-disabled {
    .multiselect-input {
      background: #f9f9f9;
    }
  }

  .is-open {
    .multiselect-input {
      border-radius: 3px 3px 0 0;
    }

    .multiselect-input {
      &:before {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }

  .no-caret {
    .multiselect-input {
      &:before {
        display: none;
      }
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

  .is-single,
  .is-multiple {
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
        font-size: 16px;
        font-family: inherit;
      }
    } 
  }

  .is-tags {
    .multiselect-search {
      flex-grow: 1;

      input {
        outline: none;
        border: 0;
        margin: 0 0 5px 3px;
        flex-grow: 1;
        min-width: 100%;
        font-size: 16px;
        font-family: inherit;
      }
    } 
  }

  .multiselect-tags {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding-left: 9px;
    margin-top: 5px;
    flex-wrap: wrap;
    padding-right: 36px;
  }

  .multiselect-tag {
    background: #41b883;
    color: #fff;
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

    i {
      cursor: pointer;

      &:before {
        content: "\D7";
        color: #266d4d;
        font-size: 14px;
        font-weight: 700;
        padding: 1px 5px 1px 5px;
        margin-left: 3px;
        display: flex;
        font-style: normal;
      }

      &:hover {
        &:before {
          color: #ffffff;
          background: rgba(255,255,255,0.2);
        }
      }
    }
  }

  .is-disabled {
    .multiselect-tag {
      background: #a0a0a0;
      padding: 1px 8px 1px 8px;
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
  
  .is-multiple,
  .is-tags {
    .multiselect-option {
      &.is-selected {
        color: #999999;
        background: transparent;

        &.is-pointed {
          background: #f1f1f1;
        }
      }
    }
  }

  .multiselect-spinner {
    position: absolute;
    right: 12px;
    top: 0;
    width: 16px;
    height: 16px;
    background: #fff;
    display: block;
    transform: translateY(50%);

    &:before,
    &:after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      margin: -8px 0 0 -8px;
      width: 16px;
      height: 16px;
      border-radius: 100%;
      border-color: #41b883 transparent transparent;
      border-style: solid;
      border-width: 2px;
      box-shadow: 0 0 0 1px transparent;
    }
  }

  .is-disabled {
    .multiselect-spinner {
      background: #f9f9f9;

      &:before,
      &:after {
        border-color: #999999 transparent transparent;
      }
    }
  }

  .multiselect-spinner:before {
    animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);
    animation-iteration-count: infinite;
  }
  .multiselect-spinner:after {
    animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);
    animation-iteration-count: infinite;
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

  .multiselect-loading-enter-active,
  .multiselect-loading-leave-active {
    transition: opacity 0.4s ease-in-out;
    opacity: 1;
  }
  .multiselect-loading-enter,
  .multiselect-loading-leave-active {
    opacity: 0;
  }

  @keyframes spinning {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(2turn);
    }
  }
</style>