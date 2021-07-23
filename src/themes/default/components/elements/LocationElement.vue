<script>
  import LocationElement from './../../../blank/components/elements/LocationElement'

  export default {
    name: 'LocationElement',
    render: LocationElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: 'form-input-group',
          input: 'form-input',
          input_enabled: '',
          input_disabled: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Google
  .pac-item {
    border-color: var(--form-border-color);
    display: flex;
    align-items: center;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .pac-item > span:last-of-type {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .pac-item-query {
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 1;
    margin-right: 0.25rem;
    padding-right: 0.25rem;
  }

  .pac-icon-marker {
    mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center center;
    background-color: #9ca3af;
    box-sizing: content-box;
    height: 1rem;
    margin-top: 0px;
    margin-right: 0.75rem;
    padding-top: 0.0625rem;
    padding-bottom: 0.0625rem;
    width: 1rem;
  }

  .pac-logo:after {
    margin-left: 0.625rem;
    margin-right: 0.625rem;
    margin-bottom: 0.625rem;
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
    display: flex;
    margin-left: 0.25rem;
  }

  .ap-footer-osm svg {
    margin-right: 0.25rem;
  }

  .ap-suggestion {
    border-bottom: 1px solid var(--form-border-color);
    display: flex;
    align-items: center;
    height: auto;
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 1;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .ap-suggestion svg {
    display: none;
  }

  .ap-suggestion:last-of-type {
    border-width: 0px;
    border: 0px;
  }

  .ap-suggestion-icon {
    mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center center;
    background-color: #9ca3af;
    box-sizing: content-box;
    height: 1rem;
    margin-top: 0px;
    margin-right: 0.75rem;
    padding-top: 0.0625rem;
    padding-bottom: 0.0625rem;
    width: 1rem;
  }

  .ap-address {
    font-size: 0.75rem;
    line-height: 1rem;
    line-height: 1;
    margin-left: 0.5rem;
  }
</style>