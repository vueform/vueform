<script>
  import LocationElement from './../../../blank/templates/elements/LocationElement.vue'

  export default {
    name: 'LocationElement',
    render: LocationElement.render,
    data: LocationElement.data,
  }
</script>

<style lang="scss">
  /* Google */
  .pac-container {
    border-color: var(--vf-border-color-input);
    background: var(--vf-bg-input);
  }

  .pac-item {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    border-color: var(--vf-border-color-input);
    background: var(--vf-bg-input);
    color: var(--vf-color-input);
    cursor: pointer;

    & > span:last-of-type {
      font-size: 0.75rem;
      color: var(--vf-color-muted);
    }

    &:hover, &.pac-item-selected {
      background: var(--vf-bg-selected);
    }
  }

  .pac-item-query {
    font-size: 0.875rem;
    line-height: 1;
    margin-right: 0.25rem;
    padding-right: 0.25rem;
    color: var(--vf-color-input);
  }

  .pac-icon-marker {
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center center;
    -webkit-mask-position: center center;
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-image: theme('maskImage.form-map-marker');
    -webkit-mask-image: theme('maskImage.form-map-marker');
    background: var(--vf-bg-icon);
    width: 0.875rem;
    width: 0.875rem;
    margin-right: 0.75rem;
    margin-top: 0;
    padding-top: 1px;
    padding-bottom: 1px;
    box-sizing: content-box;
    flex-shrink: 0;
  }

  .pac-logo {
    &:after {
      margin-left: 0.625rem;
      margin-right: 0.625rem;
      margin-bottom: 0.625rem;
    }
  }

  .pac-icon, .hdpi .pac-icon {
    background-image: none;
  }
</style>