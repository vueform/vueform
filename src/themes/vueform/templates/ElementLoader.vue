<script>
  import ElementLoader from './../../blank/templates/ElementLoader.vue'

  export default {
    name: 'ElementLoader',
    render: ElementLoader.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-element-loader-wrapper',
          loader: 'vf-element-loader',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-element-loader-wrapper {
    position: relative;
    z-index: 4;
    order: 1;
  }

  .vf-element-loader {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background: #FFFFFF;
    display: block;

    right: var(--vf-input-px);
    top: 50%;
    transform: translateY(-50%);

    &:before, &:after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      margin: -0.5rem 0 0 -0.5rem;
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      border-color: var(--vf-primary) transparent transparent;
      border-style: solid;
      border-width: 2px;
      box-shadow: 0 0 0 1px transparent;
      box-sizing: border-box;
    }

    &:before {
      animation: vf-element-loader 2.4s infinite cubic-bezier(0.41, 0.26, 0.2, 0.62);
    }

    &:after {
      animation: vf-element-loader 2.4s infinite cubic-bezier(0.51, 0.09, 0.21, 0.8);
    }
  }

  @keyframes vf-element-loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(2turn);
    }
  }
</style>