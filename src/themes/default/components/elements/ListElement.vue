<template>
  <component :is="layout">

    <template v-slot:field>
      
      <slot name="prefix"></slot>

      <div :class="classes.childrenContainer">
        <div :class="classes.element" v-sortable="sortable">

          <component
            v-for="(element, i) in instances"
            :is="component(element)"
            :schema="element"
            :name="i"
            :parent="el$"
            :key="element.key"
            v-ref:child$
            :ref="setRef(child$, i)"
          >
            <template v-slot:prefix>
              <a
                href=""
                v-if="!disabled"
                :class="classes.listRemove"
                @click.prevent="remove(i)"
                v-html="__('laraform.elements.list.remove')"
              ></a>
            </template>
          </component>

        </div>
      </div>

      <a
        href=""
        v-if="!disabled"
        :class="classes.listAdd"
        @click.prevent="add()"
        v-html="__('laraform.elements.list.add')"
      ></a>

      <slot name="suffix"></slot>

    </template>

    <template v-slot:info><slot name="info" :el$="el$"><component v-if="slots.info" :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component v-if="slots.before" :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component v-if="slots.label" :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component v-if="slots.between" :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component v-if="slots.description" :is="slots.description" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component v-if="slots.message" :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component v-if="slots.after" :is="slots.after" type="after" /></slot></template>
  </component>
</template>

<script>
  import ListElement from './../../../../components/elements/ListElement'

  export default {
    name: 'ListElement',
    mixins: [ListElement],
    data() {
      return {
        defaultClasses: {
          container: 'lf-list',
          childrenContainer: 'element-group',
          element: 'list-element-container',
          sortable: 'list-element-container-sortable',
          remove: 'list-add',
          add: 'list-remove'
        },
        containers: {
          sortable: 'element',
        }
      }
    }
  }
</script>