<script>
  import ElementInfo from './../../blank/components/ElementInfo'

  export default {
    name: 'ElementInfo',
    render: ElementInfo.render,
    data() {
      return {
        defaultClasses: {
          container: 'element-info',
          wrapper: 'element-info-wrapper',
          content: 'element-info-content',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .element-info {
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='#{str-replace(#{$gray-500}, '#', '%23')}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    width: 14px;
    height: 14px;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    margin-left: 8px;
    position: relative;
    top: 1px;
    cursor: pointer;

    &:hover {
      .element-info-wrapper {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .element-info-wrapper {
    position: absolute;
    left: 22px;
    opacity: 0;
    top: -4px;
    visibility: hidden;
    transition: .3s;
    z-index: 20;
    width: 200px;
  }

  .element-info-content {
    background: rgba(0,0,0,0.85);
    color: #fff;
    border-radius: 5px;
    font-size: 80%;
    padding: 5px 10px;
    font-style: normal;
    display: inline-block;
    position: relative;

    &:after {
      right: 100%;
      top: 11px;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(0,0,0,0);
      border-right-color: rgba(0,0,0,0.85);
      border-width: 5px;
      margin-top: -5px;
    }
  }
</style>