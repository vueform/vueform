<template>
  <component :is="theme.components.NestedElementLayout"
    :el$="el$"
  >
    <template slot="prefix"></template>

    <template slot="elements">
      <div :class="[theme.classes.listElementContainer,{[theme.classes.listElementContainerSortable]:sort}]" v-sortable="sortable">
        <Element
          v-for="(schema, index) in instances"
          
          :is="schema.component || schema.type + '-element'"
          :schema="schema"
          :name="index"
          :parent="heritage"
          :key="schema.key"
          ref="children$"
        >
          <template slot="prefix">
            <a
              href=""
              v-if="!disabled"
              :class="theme.classes.listRemove"
              @click.prevent="remove(index)"
              v-html="__('elements.list.remove')"
            ></a>
          </template>
        </Element>
      </div>
    </template>

    <template slot="suffix">
      <a
        href=""
        v-if="!disabled"
        :class="[theme.classes.listAdd, 'btn btn-primary list-add']"
        @click.prevent="add()"
        v-html="__('elements.list.add')"
      ></a>
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import ListElement from './../../../../components/elements/ListElement'

  import SortableDirective from './../../../../directives/sortable'

  export default {
    mixins: [ListElement],
    directives: {
      sortable: SortableDirective
    },
  }
</script>