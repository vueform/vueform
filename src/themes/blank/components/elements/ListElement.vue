<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <!-- Sorting container -->
      <div :class="classes.list" ref="list">

        <div v-for="(val, i) in value" :key="i" :class="classes.listItem">
          <slot :index="i">
            <component
              :is="component(prototype)"
              v-if="prototype.type"
              v-bind="prototype"
              :name="i"
            />
          </slot>
          <span
            v-if="hasSort"
            :class="classes.handle"
            data-handle
          >
            <span :class="classes.handleIcon"></span>
          </span>
          <a
            href=""
            v-if="hasRemove"
            :class="classes.remove"
            @click.prevent="handleRemove(i)"
          >
            <span :class="classes.removeIcon"></span>
          </a>
        </div>
        
      </div>

      <a
        href=""
        v-if="hasAdd"
        :class="classes.add"
        @click.prevent="handleAdd"
        v-html="__('laraform.elements.list.add')"
      ></a>

    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]><slot :name="slot"></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'ListElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          list: '',
          list_disabled: '',
          list_sorting: '',
          listItem: '',
          handle: '',
          handleIcon: '',
          remove: '',
          removeIcon: '',
          add: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>