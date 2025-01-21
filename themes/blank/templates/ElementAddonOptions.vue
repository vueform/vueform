<template>
  <div :class="classes.container">
    <div
      :class="classes.wrapper"
      @click="handleSelectorClick"
      @keydown="handleSelectorKeydown"
      v-bind="aria"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :aria-controls="`dropdown-${el$.fieldId}`"
      role="button"
      :tabindex="el$.isDisabled || el$.isReadonly ? undefined : 0"
      ref="selector"
    >
      <template v-if="Object.keys(selected).length">
        <component
          v-if="selected.valueDisplay && typeof selected.valueDisplay === 'object' && [selected.valueDisplay.render || selected.valueDisplay.template]"
          :is="selected.valueDisplay"
          :el$="el$"
          :option="selected"
        />
        <div
          v-else-if="selected.valueDisplay && typeof selected.valueDisplay === 'function'"
          v-html="selected.valueDisplay(selected, el$)"
        />
        <div
          v-else
          v-html="selected.label"
        />
      </template>
      <template v-else>
        <component
          v-if="placeholder && typeof placeholder === 'object' && [placeholder.render || placeholder.template]"
          :is="placeholder"
          :el$="el$"
          :option="selected"
        />
        <div
          v-else-if="placeholder && typeof placeholder === 'function'"
          v-html="placeholder(selected, el$)"
        />
        <div
          v-else
          v-html="placeholder"
        />
      </template>
      <div :class="classes.caret" />

      <Teleport to="body">
        <div
          v-if="isOpen"
          :data-dropdown-for="el$.fieldId"
          :id="`dropdown-${el$.fieldId}`"
          :class="classes.dropdown"
          :style="style"
          ref="dropdown"
          role="listbox"
          tabindex="-1"
        >
          <div
            v-for="(option, index) in options"
            :class="classes.optionWrapper"
            :key="option.value"
            @mouseover="handleOptionPoint(option)"
            @click="handleOptionClick(option)"
          >
            <component
              v-if="option.display && typeof option.display === 'object' && [option.display.render || option.display.template]"
              :is="option.display"
              :el$="el$"
              :option="option"
              :index="index"
              :selected="selected.index === option.index"
              :pointed="pointed.index === option.index"
              :data-index="option.index"
              :data-selected="selected.index === option.index"

              role="option"
              :tabindex="pointed.index === option.index ? 0 : -1"
              :aria-selected="selected.index === option.index"
            />

            <div
              v-else-if="option.display && typeof option.display === 'function'"
              v-html="option.display(option, index, selected.index === option.index, pointed.index === option.index, el$)"
              :class="classes.option(option, index, el$)"
              :data-index="option.index"
              :data-selected="selected.index === option.index"

              role="option"
              :tabindex="pointed.index === option.index ? 0 : -1"
              :aria-selected="selected.index === option.index"
            />

            <div
              v-else
              v-html="option.label"
              :class="classes.option(option, index, el$)"
              :data-index="option.index"
              :data-selected="selected.index === option.index"

              role="option"
              :tabindex="pointed.index === option.index ? 0 : -1"
              :aria-selected="selected.index === option.index"
            />
          </div>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ElementAddonOptions',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          caret: '',
          dropdown: '',
          option: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>