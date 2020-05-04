<template>
  <form :class="extendedTheme.classes.form">
    <component :is="extendedTheme.components.FormElements"
      :schema="schema"
      @updateSchema="updateSchema"
      ref="elements$"
    />

    <component :is="extendedTheme.components.ExportConsole" :schema="schema"></component>
  </form>
</template>
