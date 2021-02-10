<template>
  <component :is="layout">

    <template v-slot:field>

      <slot name="prefix"></slot>

      <div :class="classes.childrenContainer">
        <div :class="classes.element" v-sortable="sortable">

          <template v-for="(element, i) in instances">
            <div :key="element.key">
              <slot :index="element.key">
                <component
                  v-if="element.type"
                  :is="component(element)"
                  :schema="element"
                  :name="i"
                />
              </slot>
              <a
                href=""
                :class="classes.remove"
                @click.prevent="handleRemove(i)"
                v-html="__('laraform.elements.list.remove')"
              ></a>
            </div>
          </template>
          
        </div>
      </div>

      <a
        href=""
        :class="classes.add"
        @click.prevent="handleAdd"
        v-html="__('laraform.elements.list.add')"
      ></a>

      <slot name="suffix"></slot>
    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>
  </component>
</template>

<script>
  export default {
    name: 'ListElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-list',
          childrenContainer: 'element-group',
          element: 'list-element-container',
          sortable: 'list-element-container-sortable',
          remove: 'list-remove',
          add: 'list-add',
          disabled: 'disabled',
        },
        containers: {
          sortable: 'element',
          add: 'add',
          remove: 'remove',
        }
      }
    },
  }
</script>