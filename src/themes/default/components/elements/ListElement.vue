<template>
  <component :is="components.NestedElementLayout">

    <template slot="prefix"></template>

    <template slot="elements">
      <div :class="classes.element" v-sortable="sortable">
        <component
          v-for="(element, index) in instances"
          
          :is="component(element)"
          :schema="element"
          :name="index"
          :parent="el$"
          :key="element.key"
          v-mref:children$
        >
          <template slot="prefix">
            <a
              href=""
              v-if="!disabled"
              :class="classes.listRemove"
              @click.prevent="remove(index)"
              v-html="'Remove'"
            ></a>
          </template>
        </component>
      </div>
    </template>

    <template slot="suffix">
      <a
        href=""
        v-if="!disabled"
        :class="classes.listAdd"
        @click.prevent="add()"
        v-html="'Add'"
      ></a>
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
  </component>
</template>

<script>
  import ListElement from './../../../../components/elements/ListElement'

  export default {
    mixins: [ListElement],
    data() {
      return {
        defaultClasses: {
          element: 'list-element-container',
          sortable: 'list-element-container-sortable',
          remove: 'list-add',
          add: 'list-remove'
        }
      }
    }
  }
</script>