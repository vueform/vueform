<template>
  <form :class="extendedTheme.classes.form">
    <component :is="extendedTheme.components.FormElements"
      :schema="schema"
      @updateSchema="updateSchema"
      ref="elements$"
    />
  </form>
</template>
