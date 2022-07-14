<script>
  import LocationElement from './../../../blank/templates/elements/LocationElement.vue'

  export default {
    name: 'LocationElement',
    render: LocationElement.render,
    data: LocationElement.data,
  }
</script>

<style lang="scss">
  // Google
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

    & > span:last-of-type {
      font-size: 0.75rem;
      color: var(--vf-color-muted);
    } 
  }

  .pac-item-query {
    font-size: 0.875rem;
    line-height: 1;
    margin-right: 0.25rem;
    padding-right: 0.25rem;
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

  // Algolia
  .ap-input {
    height: auto;
  }

  .ap-input-icon {
    z-index: 1;
  }

  .ap-icon-pin {
    display: none;
  }

  .ap-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .ap-footer-algolia {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }

  .ap-footer-osm {
    margin-left: 0.25rem;
    display: flex;

    svg {
      margin-right: 0.25rem;
    }
  }

  .ap-suggestion {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--vf-gray-200);
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1;
    height: auto;

    svg {
      display: none;
    }

    &:last-of-type {
      border: 0;
    }
  }

  .ap-suggestion-icon {
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center center;
    -webkit-mask-position: center center;
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-image: theme('maskImage.form-map-marker');
    -webkit-mask-image: theme('maskImage.form-map-marker');
    background: var(--vf-gray-400);
    width: 1rem;
    width: 1rem;
    margin-right: 0.75rem;
    margin-top: 0;
    padding-top: 1px;
    padding-bottom: 1px;
    box-sizing: content-box;
  }

  .ap-address {
    font-size: 0.75rem;
    line-height: 1;
    margin-left: 0.5rem;
  }
</style>