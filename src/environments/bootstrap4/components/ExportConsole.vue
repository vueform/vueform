<template>
  <div class="export">
    <pre id="export">
{{ JSON.stringify(schema, null, 2) }}
    </pre>
  </div>
</template>

<script>
  import ExportConsole from './../../../components/ExportConsole'

  export default {
    mixins: [ExportConsole],
  }
</script>

<style lang="scss" scoped>
  .export {
    position: fixed;
    background: black;
    top: 0;
    right: 0;
    width: 340px;
    bottom: 0;
    padding: 20px 30px;
    font-family: "Inconsolata";
    overflow: scroll;

    pre {
      color: #fff;
    }
  }
</style>