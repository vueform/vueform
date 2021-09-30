<script>
  import LocationElement from './../../../blank/components/elements/LocationElement'

  export default {
    name: 'LocationElement',
    render: LocationElement.render,
    data: LocationElement.data,
  }
</script>

<style lang="scss">
  // Google
  .pac-item {
    @apply py-1.5 px-3 border-gray-200 flex items-center;

   & > span:last-of-type {
     @apply text-xs;
   } 
  }

  .pac-item-query {
    @apply text-sm leading-none mr-1 pr-1;
  }

  .pac-icon-marker {
    @apply mask-bg mask-form-map-marker bg-gray-400 w-4 h-4 mr-3 mt-0 py-px box-content flex-shrink-0;
  }

  .pac-logo {
    &:after {
      @apply mx-2.5 mb-2.5;
    }
  }

  .pac-icon, .hdpi .pac-icon {
    @apply bg-none;
  }

  // Algolia
  .ap-input {
    @apply h-auto;
  }

  .ap-input-icon {
    @apply z-1;
  }

  .ap-icon-pin {
    @apply hidden;
  }

  .ap-footer {
    @apply flex items-center justify-end;
  }

  .ap-footer-algolia {
    @apply mx-1;
  }

  .ap-footer-osm {
    @apply ml-1 flex;

    svg {
      @apply mr-1;
    }
  }

  .ap-suggestion {
    @apply py-3 px-3 border-b border-gray-200 flex items-center text-sm leading-none h-auto;

    svg {
      @apply hidden;
    }

    &:last-of-type {
      @apply border-0;
    }
  }

  .ap-suggestion-icon {
    @apply mask-bg mask-form-map-marker bg-gray-400 w-4 h-4 mr-3 mt-0 py-px box-content;
  }

  .ap-address {
    @apply text-xs ml-2 leading-none;
  }
</style>