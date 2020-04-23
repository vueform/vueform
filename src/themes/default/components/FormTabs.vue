<template>
  <ul
    :class="theme.classes.formTabs"
  >
    <template v-for="(tab, name, key) in tabs">
      <component :is="theme.components.FormTab"
        :tab="tab"
        :name="name"
        :elements$="elements$"
        :key="key"
        ref="tabs$"
        @select="select"
      />
    </template>
  </ul>
</template>

<script>
  import FormTabs from './../../../components/FormTabs'

  export default {
    mixins: [FormTabs],
  }
</script>